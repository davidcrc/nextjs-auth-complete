# Setup

```

```

# Add shadcdn

```bash
npx shadcn-ui@latest init
```

```
✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … src/app/globals.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no / yes
✔ Write configuration to components.json. Proceed? … yes
```

```bash
npx shadcn-ui@latest add button
```

```bash
npx shadcn-ui@latest add input
```

```bash
npx shadcn-ui@latest add form
```

<!-- new -->

```bash
npx shadcn-ui@latest add toast
```

# Add Prisma

```bash
yarn add -D prisma
```

```bash
npx prisma init
```

```bash
npx prisma migrate dev --name init
```

# Add bcrypt

```bash
yarn add bcrypt
```

```bash
yarn add -D @types/bcrypt
```

# Add NextAuthJs

```bash
yarn add next-auth
```

- For prisma add:

```bash
yarn add @next-auth/prisma-adapter

```

- check for typescripts

https://next-auth.js.org/getting-started/typescript

<!--  -->

## For google Auth modifi schema.prisma

- https://authjs.dev/reference/adapter/prisma

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique

  username      String?   @unique
  password      String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

// others
```

```bash
npx prisma migrate dev

```
