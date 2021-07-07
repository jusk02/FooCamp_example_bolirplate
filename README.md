This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Credentials

To run the example proyect correctly an `.env.local` file is needed, download it [here](https://drive.google.com/file/d/1H-apqKdUFl51ax-PHcf88jlIp5_g8tW6/view?usp=sharing)

place this file in the root directory and change the name from `ecameple.env.local` to `.env.local`

## Building as static site

To build as a astatic site all instances of `getServerSideProps` should be changed to `getStaticProps`, an example of this can be appreciated on the `pages/index.js` file.

After this just run the command

```bash
npm run build
# or
yarn build
```