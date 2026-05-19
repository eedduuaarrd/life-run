import type { Metadata } from "next";
import { BRAND_KEYWORD, getBusinessConfig } from "@/lib/business";

const site = getBusinessConfig();

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  alternates: { canonical: site.siteUrl },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.siteUrl,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <p className="text-xl font-bold tracking-tight">{site.name}</p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-14 px-6 py-16">
        <section className="space-y-6" aria-labelledby="hero-heading">
          <h1
            id="hero-heading"
            className="text-5xl font-bold tracking-tight sm:text-6xl"
          >
            {site.name}
          </h1>
          <p className="text-xl leading-relaxed text-slate-300">{site.tagline}</p>
          <p className="text-lg leading-relaxed text-slate-400">
            {site.description} Si has escrit{" "}
            <strong className="text-white">«{BRAND_KEYWORD.toLowerCase()}»</strong>{" "}
            o <strong className="text-white">«{BRAND_KEYWORD}»</strong> a Google, aquest
            és el lloc correcte.
          </p>
        </section>

        <section
          className="space-y-4"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="text-2xl font-semibold">
            Què és {site.name}?
          </h2>
          <p className="leading-relaxed text-slate-300">
            <strong>{site.name}</strong> és la presència oficial de la marca a
            internet. Tot el contingut d&apos;aquesta pàgina està optimitzat perquè
            quan algú busqui <em>{BRAND_KEYWORD}</em> a Google trobi aquesta web entre
            els primers resultats.
          </p>
        </section>

        {(site.email || site.phone) && (
          <section
            id="contacte"
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading" className="text-2xl font-semibold">
              Contacte {site.name}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {site.phone ? (
                <li>
                  Telèfon:{" "}
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-sky-400 hover:underline"
                  >
                    {site.phone}
                  </a>
                </li>
              ) : null}
              {site.email ? (
                <li>
                  Correu:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sky-400 hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </section>
        )}

        <section
          className="space-y-4 rounded-2xl border border-sky-900/50 bg-sky-950/20 p-8"
          aria-labelledby="seo-heading"
        >
          <h2 id="seo-heading" className="text-2xl font-semibold text-sky-100">
            Com sortir el primer quan es busca «{BRAND_KEYWORD}» a Google
          </h2>
          <ol className="list-decimal space-y-3 pl-5 leading-relaxed text-slate-300">
            <li>
              Desplega aquesta web amb un domini que inclogui la marca (ideal:{" "}
              <code className="rounded bg-slate-800 px-1.5 text-sm">veylora.com</code>
              ) i configura{" "}
              <code className="rounded bg-slate-800 px-1.5 text-sm">
                NEXT_PUBLIC_SITE_URL
              </code>{" "}
              al fitxer <code className="rounded bg-slate-800 px-1.5 text-sm">.env</code>.
            </li>
            <li>
              Registra el domini a{" "}
              <a
                href="https://search.google.com/search-console"
                className="text-sky-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Search Console
              </a>
              , verifica la propietat i envia el sitemap:{" "}
              <code className="rounded bg-slate-800 px-1 text-sm">
                {site.siteUrl}/sitemap.xml
              </code>
            </li>
            <li>
              Demana a Google que indexi la pàgina principal (Inspecció d&apos;URL →
              Sol·licitar indexació).
            </li>
            <li>
              Enllaços des de xarxes socials o altres webs cap a{" "}
              <code className="rounded bg-slate-800 px-1 text-sm">{site.siteUrl}</code>{" "}
              ajuden Google a veure aquest lloc com a oficial per a la marca{" "}
              {site.name}.
            </li>
          </ol>
          <p className="text-sm text-slate-500">
            Per a una marca poc común com {site.name}, amb domini coherent i
            indexació correcta, és habitual ocupar la primera posició en pocs dies o
            setmanes. La web no ho controla sola: cal que Google l&apos;hagi rastrejada i
            indexada.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {site.name} — web oficial
      </footer>
    </div>
  );
}
