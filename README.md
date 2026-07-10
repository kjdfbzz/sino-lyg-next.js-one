This is the source for [sinolyg.com](https://www.sinolyg.com), a Next.js site deployed on Vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Container Tracking activation requests

The desktop Container Tracking System submits activation applications to:

```text
POST /api/container-tracking/activation-requests
```

The endpoint validates the public request fields and delivers the request to the administrator mailbox through Resend. It does not create activation codes and never receives the CTS2 signing private key. Issue codes only with the local tool at `E:\管理员激活码工具` and keep the activation record in its Excel file.

Configure these Vercel environment variables before using the endpoint in production:

```text
RESEND_API_KEY=...
ACTIVATION_REQUEST_TO_EMAIL=your-admin-mailbox@example.com
ACTIVATION_REQUEST_FROM_EMAIL=Your verified sender <licenses@your-domain.com>
```

The desktop application's website settings should use:

```text
Website: https://www.sinolyg.com
Activation request API: https://www.sinolyg.com/api/container-tracking/activation-requests
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
