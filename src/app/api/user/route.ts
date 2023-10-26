import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import z from "zod";

const schema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  const body = await req.json();

  const { email, username, password } = schema.parse(body);

  try {
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this Email already exists",
        },
        { status: 409 }
      );
    }

    const existingUserByUsername = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "User with username already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
