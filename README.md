<p align="center">
  <a href="https://web-island-hazel.vercel.app/">
    <img alt="Example demo page" src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/test/upload/chato_image/avater/cb5c88616c60ebdbfd7fbfd990d7ef9e.png" width="680">
  </a>
</p>

## 高效岛

Front-end navigation website, used to collect high-quality front-end related websites from both domestic and foreign sources for convenient personal use

> This project is highly inspired by [Taxonomy](https://github.com/shadcn/taxonomy), For learning purpose, to learn how to build a modern app using Next.js 13(with many features like authentication, API routes, static pages for docs, orm, ...etc)


## Features

- New /app dir
- Server and Client Components
- UI Components built using **Radix UI**
- Styled using **Tailwind CSS**
- Dark mode with **`next-themes`**
- Authentication using **NextAuth.js**
- ORM using **Prisma**
- MySQL Database on **PlanetScale**
- Written in **TypeScript**

## Deploy Your Own
You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lik778/web-island&env=DATABASE_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET,NEXTAUTH_URL&project-name=web-island&repo-name=lik778s-projects)



## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
cp .env.example .env
```

3、sync database table
```sh
npx prisma db push
```

3. Start the development server:

```sh
pnpm dev
```
