// app/mentions-legales/page.tsx
"use client";

export default function MentionsLegalesPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-indigo-400 uppercase mb-6">
          Mentions Légales
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
          Informations légales conformément à la législation française
        </p>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Éditeur du Site
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Raison sociale :</span> NeximusAI
              SAS
            </p>
            <p className="mb-2">
              <span className="font-semibold">Forme juridique :</span> Société
              par Actions Simplifiée (SAS)
            </p>
            <p className="mb-2">
              <span className="font-semibold">Capital social :</span> [À
              compléter]
            </p>
            <p className="mb-2">
              <span className="font-semibold">Siège social :</span> [Adresse du
              siège social à compléter]
            </p>
            <p className="mb-2">
              <span className="font-semibold">SIREN :</span> [Numéro SIREN à
              compléter]
            </p>
            <p className="mb-2">
              <span className="font-semibold">RCS :</span> [RCS à compléter]
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email :</span> neximusai@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Directeur de la Publication
            </h2>
            <p>[Nom du directeur de la publication à compléter]</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Hébergement
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Hébergeur :</span> Vercel Inc.
            </p>
            <p className="mb-2">
              <span className="font-semibold">Adresse :</span> 340 S Lemon Ave
              #4133, Walnut, CA 91789, USA
            </p>
            <p>
              <span className="font-semibold">Site web :</span>{" "}
              <a
                href="https://vercel.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                https://vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Propriété Intellectuelle
            </h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support
              électronique quel qu'il soit est formellement interdite sauf
              autorisation expresse du directeur de la publication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Protection des Données Personnelles
            </h2>
            <p className="mb-4">
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978
              modifiée et au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification, de
              suppression et d'opposition aux données personnelles vous
              concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse :
              neximusai@gmail.com
            </p>
            <p>
              Pour plus d'informations sur notre politique de confidentialité,
              consultez notre{" "}
              <a
                href="/privacy"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Politique de Confidentialité
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience
              utilisateur. En continuant à naviguer sur ce site, vous acceptez
              l'utilisation de cookies conformément à notre politique de
              confidentialité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
