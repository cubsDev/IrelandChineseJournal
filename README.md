# Ireland Chinese Journal / 爱尔兰华人志

A modern Chinese-language news and journal prototype for Chinese residents, students, families, professionals, and businesses in Ireland.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Local mock data in `src/data`

## Routes

- `/` homepage
- `/news` article archive
- `/news/[slug]` article detail
- `/video` video reports
- `/events` events
- `/study-in-ireland` student-focused page
- `/about` about, contact, and cooperation

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

This project uses `next dev --webpack` and `next build --webpack` because Turbopack currently panics when this local workspace path contains Chinese characters. On Vercel, the deployment path is normally ASCII, but the Webpack scripts are kept for reliable local development.

## Checks

```bash
npm run lint
npm run build
```
