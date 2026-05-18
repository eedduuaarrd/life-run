<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Project overview

Single-service Next.js 16 app (`life-run`) with Prisma ORM + SQLite. No external database server needed.

### Running the dev server

```bash
npm run dev          # starts Next.js on http://localhost:3000
```

### Lint / Build / Test

```bash
npm run lint         # ESLint
npm run build        # production build (also runs TypeScript checks)
```

No test framework is configured yet; there is no `npm test` script.

### Prisma notes

- The schema is at `prisma/schema.prisma` (currently has no models).
- `prisma.config.ts` imports `dotenv/config` — `dotenv` is available as a transitive dependency (no extra install needed).
- A `.env` file with `DATABASE_URL=file:./dev.db` must exist at the project root for Prisma commands to work.
- After changing the schema, run `npx prisma generate` to regenerate the client output at `src/generated/prisma/`.
- If models are added, run `npx prisma migrate dev` to apply migrations.
