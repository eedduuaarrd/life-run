import Link from "next/link";
import {
  formatFullAddress,
  getBusinessConfig,
} from "@/lib/business";

export default function Home() {
  const business = getBusinessConfig();
  const fullAddress = formatFullAddress(business);
  const mapsUrl =
    business.googleMapsUrl ??
    (business.googlePlaceId
      ? `https://www.google.com/maps/place/?q=place_id:${business.googlePlaceId}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name)}`);

  return (
    <div className="flex min-h-full flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <p className="text-lg font-semibold tracking-tight">{business.name}</p>
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
          >
            Obrir a Google Maps
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-12 px-6 py-16">
        <section className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
            Troba {business.name} a Google Maps
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Cerca &ldquo;{business.name}&rdquo; a Maps i apareixerem amb tota la
            informació actualitzada
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            {business.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
            >
              Veure a Google Maps
            </Link>
            {business.phone ? (
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-400"
              >
                Trucar {business.phone}
              </a>
            ) : null}
          </div>
        </section>

        <section
          id="contacte"
          className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:grid-cols-2"
          aria-labelledby="contacte-heading"
        >
          <h2 id="contacte-heading" className="sr-only">
            Contacte i ubicació
          </h2>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
              Nom del negoci
            </h3>
            <p className="mt-2 text-2xl font-semibold">{business.name}</p>
            <p className="mt-1 text-slate-400">{business.tagline}</p>
          </div>
          {fullAddress ? (
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Adreça (NAP)
              </h3>
              <p className="mt-2 text-lg leading-relaxed">{fullAddress}</p>
              <p className="mt-2 text-sm text-slate-500">
                Ha de coincidir exactament amb Google Business Profile.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Adreça
              </h3>
              <p className="mt-2 text-slate-400">
                Configura{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm">
                  VEYLORA_STREET_ADDRESS
                </code>{" "}
                i{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm">
                  VEYLORA_ADDRESS_LOCALITY
                </code>{" "}
                al fitxer{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm">
                  .env
                </code>
                .
              </p>
            </div>
          )}
          {business.phone ? (
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Telèfon
              </h3>
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg text-sky-400 hover:underline"
              >
                {business.phone}
              </a>
            </div>
          ) : null}
          {business.email ? (
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Correu
              </h3>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block text-lg text-sky-400 hover:underline"
              >
                {business.email}
              </a>
            </div>
          ) : null}
          {business.openingHours && business.openingHours.length > 0 ? (
            <div className="sm:col-span-2">
              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Horari
              </h3>
              <ul className="mt-2 space-y-1 text-slate-200">
                {business.openingHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        <section className="space-y-4 rounded-2xl border border-amber-900/40 bg-amber-950/30 p-8">
          <h2 className="text-xl font-semibold text-amber-100">
            Com aparèixer el primer a Google Maps
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-slate-300">
            <li>
              Crea o reclama el perfil a{" "}
              <a
                href="https://business.google.com"
                className="text-sky-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Business Profile
              </a>{" "}
              amb el nom exacte{" "}
              <strong className="text-white">{business.name}</strong>.
            </li>
            <li>
              Enllaça aquesta web (
              <code className="rounded bg-slate-800 px-1 text-sm">
                {business.siteUrl}
              </code>
              ) al perfil i comprova que l&apos;adreça i el telèfon coincideixin.
            </li>
            <li>
              Demana ressenyes als clients i respon-les — Google prioritza la
              confiança i l&apos;activitat recent.
            </li>
            <li>
              Puja fotos, horaris i categories correctes; mantén el perfil
              verificat i actiu.
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
              </a>{" "}
              i envia el sitemap:{" "}
              <code className="rounded bg-slate-800 px-1 text-sm">
                {business.siteUrl}/sitemap.xml
              </code>
            </li>
          </ol>
          <p className="text-sm text-slate-400">
            La web sola no garanteix la primera posició; Google Maps ordena per
            rellevància, distància i prominència. Aquesta pàgina reforça la teva
            presència i enllaça el perfil oficial.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {business.name}. Tots els drets reservats.
      </footer>
    </div>
  );
}
