import { Link } from 'react-router-dom'
import { ArrowLeft, Map, ArrowUpRight, ChefHat, Scissors, Car, CalendarCheck, Puzzle } from 'lucide-react'
import { routes, blogPosts } from '../seo.mjs'

const moduleLinks = [
  {
    icon: ChefHat,
    label: 'Réservation Restaurant',
    text: 'Gestion des réservations, des tables et des rappels clients pour les restaurants.',
  },
  {
    icon: Scissors,
    label: 'Planning Coiffeur',
    text: 'Prise de rendez-vous en ligne et planning par praticien pour salons de coiffure et instituts.',
  },
  {
    icon: Car,
    label: 'Gestion Garage',
    text: 'Suivi véhicules, devis en ligne et historique des interventions pour garages automobiles.',
  },
  {
    icon: CalendarCheck,
    label: 'Prise de RDV',
    text: 'Module générique de prise de rendez-vous adaptable à tout métier de service.',
  },
  {
    icon: Puzzle,
    label: 'Module sur mesure',
    text: "Développement d'un module métier spécifique, adapté aux process de votre activité.",
  },
]

export default function Sitemap() {
  const pages = routes.filter((r) => r.path !== '/sitemap/')

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
              <Map className="w-7 h-7 text-cyan-400" />
            </div>

            <div>
              <span className="section-tag">Navigation</span>
              <h1
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-4xl lg:text-6xl font-800 tracking-tight text-white mt-2"
              >
                Plan du site
              </h1>
            </div>
          </div>

          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Retrouvez ici l'ensemble des pages de WebMétier : notre agence de
            création de sites web et de modules métier sur mesure (réservation
            restaurant, planning coiffeur, gestion garage...). Cette page facilite
            la navigation sur le site et son référencement auprès des moteurs de
            recherche.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-10">
          <SitemapSection title="Pages principales">
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-white hover:text-cyan-400 font-600 transition-colors flex items-center gap-1 group"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {page.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{page.description}</p>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection title="Articles du blog">
            <ul className="space-y-4">
              {blogPosts.map((post) => (
                <li key={post.path}>
                  <Link
                    to={post.path}
                    className="text-white hover:text-cyan-400 font-600 transition-colors flex items-center gap-1 group"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {post.heading}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{post.excerpt}</p>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection title="Modules métier">
            <p className="mb-6">
              WebMétier conçoit des modules métier sur mesure, intégrés à votre
              site vitrine ou e-commerce. Détail de nos modules sur la page{' '}
              <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
                Modules Métier
              </Link>
              .
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {moduleLinks.map((module) => (
                <li
                  key={module.label}
                  className="flex items-start gap-3 bg-slate-900/50 border border-slate-800/60 rounded-xl p-4"
                >
                  <module.icon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-600 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {module.label}
                    </div>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{module.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SitemapSection>
        </div>
      </main>
    </div>
  )
}

function SitemapSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 lg:p-8">
      <h2
        style={{ fontFamily: 'Outfit, sans-serif' }}
        className="text-xl lg:text-2xl font-700 text-white mb-6"
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
