import { Link } from 'react-router-dom'
import { ArrowLeft, Scale } from 'lucide-react'

export default function Legal() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 hero-grid opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Scale className="w-7 h-7 text-cyan-400" />
            </div>

            <div>
              <span className="section-tag">Informations légales</span>
              <h1
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-4xl lg:text-6xl font-800 tracking-tight text-white mt-2"
              >
                Mentions légales & Politique de confidentialité
              </h1>
            </div>
          </div>

          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Les présentes mentions légales définissent les conditions
            d'utilisation du site WebMétier.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-10">

          <LegalSection title="1. Éditeur du site">
            <p>
              Le site est édité par :
            </p>

            <ul className="mt-4 space-y-2">
              <li><strong className="text-white">Nom / Raison sociale :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Forme juridique :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Capital social :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Adresse :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">SIRET :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Email :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Téléphone :</strong> À COMPLÉTER</li>
            </ul>

            <p className="mt-4">
              Directeur de la publication : À COMPLÉTER
            </p>
          </LegalSection>

          <LegalSection title="2. Hébergement">
            <p>
              Le site est hébergé par :
            </p>

            <ul className="mt-4 space-y-2">
              <li><strong className="text-white">Hébergeur :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Adresse :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Téléphone :</strong> À COMPLÉTER</li>
              <li><strong className="text-white">Site internet :</strong> À COMPLÉTER</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Propriété intellectuelle">
            <p>
              L'ensemble des éléments présents sur ce site, notamment les textes,
              images, graphismes, logos, icônes et contenus, est protégé par les
              dispositions relatives à la propriété intellectuelle.
            </p>

            <p className="mt-4">
              Toute reproduction, représentation, modification ou diffusion,
              totale ou partielle, est interdite sans l'autorisation préalable de
              l'éditeur du site.
            </p>
          </LegalSection>

          <LegalSection title="4. Responsabilité">
            <p>
              L'éditeur s'efforce de fournir des informations exactes et à jour.
              Toutefois, il ne peut garantir l'exhaustivité ou l'absence
              d'erreurs dans les contenus publiés.
            </p>

            <p className="mt-4">
              L'utilisateur reconnaît utiliser le site sous sa propre
              responsabilité. L'éditeur ne pourra être tenu responsable des
              dommages directs ou indirects liés à l'utilisation du site.
            </p>
          </LegalSection>

          <LegalSection title="5. Données personnelles">
            <p>
              Les informations transmises via le formulaire de contact sont
              utilisées uniquement pour répondre aux demandes des utilisateurs et
              assurer le suivi des échanges.
            </p>

            <p className="mt-4">
              Les données ne sont pas vendues à des tiers. Elles peuvent être
              transmises uniquement aux prestataires nécessaires au fonctionnement
              du site ou à la gestion de la demande.
            </p>

            <p className="mt-4">
              Conformément à la réglementation applicable, vous pouvez demander
              l'accès, la rectification, l'effacement ou la limitation du
              traitement de vos données en écrivant à :
            </p>

            <p className="mt-4 text-cyan-400">
              À COMPLÉTER — adresse email de contact
            </p>
          </LegalSection>

          <LegalSection title="6. Cookies">
            <p>
              Le site peut utiliser des cookies nécessaires à son fonctionnement
              ainsi que, le cas échéant, des cookies de mesure d'audience.
            </p>

            <p className="mt-4">
              Le site utilise Axeptio, une plateforme de gestion du consentement
              (CMP), pour recueillir votre consentement avant le dépôt de cookies
              non essentiels, conformément à la réglementation applicable
              (RGPD, directive ePrivacy). Un bandeau de consentement s'affiche
              lors de votre première visite et vous permet d'accepter, de refuser
              ou de personnaliser les cookies utilisés par catégorie.
            </p>

            <p className="mt-4">
              Vous pouvez modifier vos préférences à tout moment depuis le module
              de gestion des cookies du site (icône dédiée en bas de page) ou
              depuis les paramètres de votre navigateur.
            </p>
          </LegalSection>

          <LegalSection title="7. Liens externes">
            <p>
              Le site peut contenir des liens vers des sites externes. WebMétier
              ne contrôle pas ces sites et ne peut être tenu responsable de leur
              contenu ou de leurs pratiques.
            </p>
          </LegalSection>

          <LegalSection title="8. Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français.
              Tout litige relatif à l'utilisation du site relève des juridictions
              compétentes, sous réserve des règles impératives applicables.
            </p>
          </LegalSection>

          <div className="pt-8 border-t border-slate-800/60 text-sm text-slate-500">
            Dernière mise à jour : 24 juillet 2026
          </div>
        </div>
      </main>
    </div>
  )
}

function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 lg:p-8">
      <h2
        style={{ fontFamily: 'Outfit, sans-serif' }}
        className="text-xl lg:text-2xl font-700 text-white mb-4"
      >
        {title}
      </h2>

      <div className="text-slate-400 text-sm lg:text-base leading-relaxed">
        {children}
      </div>
    </section>
  )
}