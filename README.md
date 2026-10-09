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

## SEO and multilingual content

Chinese pages use `/`, `/routes`, `/requirements` and `/guides`; their English equivalents use `/en`. Language links navigate to the matching URL. Each URL keeps its language regardless of browser headers or saved preferences, with its own canonical and reciprocal `zh-CN`, `en` and `x-default` alternates.

`app/sitemap.ts` generates `/sitemap.xml` from the homepage, sections and article data in both languages. Article `updatedAt` values are real content update dates; only change them when the content changes. No publication dates are inferred from update dates. `app/robots.ts` allows public search crawlers, including AI search crawlers, and points to this sitemap. API responses carry `X-Robots-Tag: noindex`.

The shared entity IDs and homepage search metadata live in `app/seo.ts`. Article pages expose author, update date, navigation to related preparation guides and visible FAQs. New articles should include complete Chinese and English copies, practical shipment details and sources for any changing schedule, fee or document requirement. Business volumes, partnerships, qualifications and testimonials must be backed by actual records.

### Company and author profile

`/about` and `/en/about` identify Li Haiwen (Bryce Lee), Sales Manager at Global View Logistics in Lianyungang, and link to the separate corporate website. The public identity and office data in `app/company-profile.ts` comes from the supplied company brochure and business card. The card lists both the Lianyungang branch of Qingdao Global View Logistics Co., Ltd. and 连云港港威国际供应链管理有限公司; these are kept as separate entities. No registered English name is inferred for the latter.

The shared graph links the person to the Lianyungang branch through `worksFor`. The personal website and its articles use the person as publisher. Company memberships, licensing numbers, client endorsements, asset ownership and experience figures need current evidence before publication. The brochure's team experience must not become a company founding date or the author's experience. Update the profile date only when its content changes.

Optional ownership verification tokens can be configured in the deployment environment:

```text
GOOGLE_SITE_VERIFICATION=...
BING_SITE_VERIFICATION=...
```

These are public verification values rendered in HTML. Configure them before building the deployment, then submit `https://www.sinolyg.com/sitemap.xml` in the verified search-engine properties. Use those properties to measure indexing and query performance; metadata and a successful build do not confirm search visibility.

## Container Tracking activation requests

The desktop Container Tracking System submits activation applications to:

```text
POST /api/container-tracking/activation-requests
```

The desktop settings dialog checks endpoint health with:

```text
GET /api/container-tracking/activation-requests
```

The health response reports whether the endpoint is online and whether Resend delivery is configured, without exposing any key value.

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
