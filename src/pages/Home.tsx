import { ArrowRight, CheckCircle, ChefHat, Scissors, Car, Globe, ShoppingCart, Puzzle, Star, TrendingUp, Users, Zap, Clock, Shield, ArrowUpRight } from 'lucide-react'

interface HomeProps {
  setCurrentPage: (page: string) => void
}

const stats = [
  { value: '120+', label: 'Clients satisfaits', icon: Users },
  { value: '15', label: 'Modules déployés', icon: Puzzle },
  { value: '7 ans', label: "D'expérience", icon: TrendingUp },
  { value: '98%', label: 'Taux de satisfaction', icon: Star },
]

const services = [
  {
    icon: Globe,
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
    title: 'Site Vitrine',
    description:
      'Une présence web professionnelle qui reflète votre image de marque. Design sur mesure, SEO optimisé et chargement ultra-rapide.',
    points: ['Design personnalisé', 'SEO technique', 'Responsive mobile', 'Module métier intégré'],
  },
  {
    icon: ShoppingCart,
    color: 'from-purple-500/20 to-purple-600/10',
    iconColor: 'text-purple-400',
    border: 'border-purple-500/20',
    title: 'E-commerce',
    description:
      'Boutique en ligne performante avec gestion des stocks, paiements sécurisés et tableau de bord administrateur complet.',
    points: ['Catalogue produits', 'Paiement sécurisé', 'Gestion des stocks', 'Analytics avancés'],
  },
  {
    icon: Puzzle,
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-500/20',
    title: 'Modules Métier',
    description:
      "Le cœur de notre expertise. Des modules développés spécifiquement pour votre secteur, connectés à votre site et à votre façon de travailler.",
    points: ['Sur mesure métier', 'Intégration native', 'Interface intuitive', 'Formation incluse'],
    featured: true,
  },
]

const modulesPrev = [
  {
    icon: ChefHat,
    sector: 'Restauration',
    title: 'Réservation de table',
    description:
      "Gérez vos réservations en temps réel. Vos clients réservent en ligne, vous gérez depuis votre tableau de bord.",
    features: ['Réservation 24h/24', 'Gestion des tables', 'Rappels automatiques', 'Liste d\'attente'],
    color: 'from-orange-500/15 to-amber-500/10',
    accent: 'text-orange-400',
    accentBorder: 'border-orange-500/20',
    tag: 'Restaurant',
    tagColor: 'bg-orange-500/15 text-orange-400',
  },
  {
    icon: Scissors,
    sector: 'Beauté & Coiffure',
    title: 'Planning & RDV',
    description:
      "Un système de prise de rendez-vous intelligent qui gère votre planning par coiffeur, vos prestations et vos clients.",
    features: ['RDV en ligne', 'Planning par coiffeur', 'Suivi fidélité', 'Rappels SMS/Email'],
    color: 'from-pink-500/15 to-rose-500/10',
    accent: 'text-pink-400',
    accentBorder: 'border-pink-500/20',
    tag: 'Coiffeur',
    tagColor: 'bg-pink-500/15 text-pink-400',
  },
  {
    icon: Car,
    sector: 'Garage & Auto',
    title: 'Gestion véhicules',
    description:
      'e module transforme un simple site vitrine en véritable outil commercial, en réduisant la dépendance aux plateformes tierces et en captant des prospects même quand le véhicule qu'ils cherchent n'est pas encore en stock (alertes email)',
    features: ['Fiche détail complète', 'Catalogue professionnel', 'Favoris sans compte', 'Alertes automatiques'],
    color: 'from-sky-500/15 to-blue-500/10',
    accent: 'text-sky-400',
    accentBorder: 'border-sky-500/20',
    tag: 'Garage',
    tagColor: 'bg-sky-500/15 text-sky-400',
  },
]

const process = [
  {
    num: '01',
    title: 'Analyse métier',
    description:
      'Nous étudions votre secteur, vos contraintes et vos besoins spécifiques pour concevoir la solution idéale.',
  },
  {
    num: '02',
    title: 'Design & maquettage',
    description:
      "Création des maquettes interactives validées avec vous avant tout développement. Vous voyez le résultat avant qu'il existe.",
  },
  {
    num: '03',
    title: 'Développement',
    description:
      "Développement du site et des modules métier avec des technologies modernes et robustes. Tests rigoureux.",
  },
  {
    num: '04',
    title: 'Formation & lancement',
    description:
      "Mise en ligne, formation avec votre outil. Vous êtes autonomes dès le départ.",
  },
]

const values = [
  { icon: Zap, title: 'Rapide à déployer', text: 'En production en 4 à 8 semaines selon la complexité du projet.' },
  { icon: Clock, title: 'Support réactif', text: 'Une équipe dédiée répond en moins de 4h en jours ouvrés.' },
  { icon: Shield, title: 'Sécurisé', text: 'Hébergement haute disponibilité, sauvegardes quotidiennes, RGPD.' },
]

export default function Home({ setCurrentPage }: HomeProps) {
  const navigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-grid">
        {/* Radial glow top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="section-tag">Agence spécialisée modules métier</span>
              </div>

              <h1
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-5xl lg:text-6xl xl:text-7xl font-800 leading-[1.05] tracking-tight mb-6"
              >
                Votre site.
                <br />
                <span className="gradient-text">Votre métier.</span>
                <br />
                Nos modules.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Nous créons des sites web professionnels enrichis de modules sur mesure pensés
                pour votre secteur d'activité — restaurants, coiffeurs, garages et bien plus.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('modules')}
                  className="btn-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-600 text-white shadow-xl"
                >
                  <span>Découvrir nos modules</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-600 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
                >
                  <span>Parler de mon projet</span>
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['bg-blue-500', 'bg-cyan-500', 'bg-purple-500', 'bg-orange-500'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-slate-950 flex items-center justify-center text-white text-xs font-bold`}>
                      {['M', 'J', 'S', 'A'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs">120+ clients nous font confiance</p>
                </div>
              </div>
            </div>

            {/* Right: floating mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative float-anim">
                {/* Main card */}
                <div className="module-mockup w-[420px]">
                  <div className="mockup-bar">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-500">Module Réservation — Restaurant</span>
                  </div>
                  <div className="p-5">
                    {/* Fake calendar header */}
                    <div className="flex items-center justify-between mb-4">
                      <span style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-600 text-slate-200">Novembre 2024</span>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-xs">‹</div>
                        <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-xs">›</div>
                      </div>
                    </div>
                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {['L','M','M','J','V','S','D'].map((d) => (
                        <div key={d} className="text-center text-xs text-slate-500 font-medium py-1">{d}</div>
                      ))}
                      {[null,null,null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((d, i) => (
                        <div
                          key={i}
                          className={`text-center text-xs py-1.5 rounded-md transition-colors cursor-pointer ${
                            d === 15
                              ? 'bg-cyan-500 text-white font-600'
                              : d === 8 || d === 12 || d === 22
                              ? 'bg-blue-500/20 text-blue-400'
                              : d
                              ? 'text-slate-300 hover:bg-slate-700'
                              : ''
                          }`}
                        >
                          {d || ''}
                        </div>
                      ))}
                    </div>
                    {/* Slots */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-slate-800/60 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-8 rounded-full bg-cyan-400" />
                          <div>
                            <p className="text-xs font-600 text-slate-200">19:30 — Table 4 (4 pers.)</p>
                            <p className="text-xs text-slate-500">Dupont — confirmé</p>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-800/60 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-8 rounded-full bg-blue-400" />
                          <div>
                            <p className="text-xs font-600 text-slate-200">20:00 — Table 2 (2 pers.)</p>
                            <p className="text-xs text-slate-500">Martin — en attente</p>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400">⏳</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 px-3 py-2 rounded-xl shadow-xl">
                  <p className="text-xs font-700 text-white">+12 réservations</p>
                  <p className="text-xs text-cyan-100">aujourd'hui</p>
                </div>

                {/* Floating badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 px-3 py-2 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-600 text-slate-200">SMS envoyé</p>
                      <p className="text-xs text-slate-500">Rappel automatique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-800 text-white mb-1">
                  {value}
                </div>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag block mb-4">Ce que nous faisons</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
              Une offre complète,
              <br />
              <span className="gradient-text">pensée pour vous</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Du site vitrine à la boutique en ligne, chaque projet intègre le module métier
              adapté à votre activité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card-hover relative rounded-2xl p-8 border ${s.featured ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/5' : `${s.border} bg-slate-900/50`}`}
              >
                {s.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-700 text-white shadow-lg">
                    Notre spécialité
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} border ${s.border} flex items-center justify-center mb-5`}>
                  <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-700 text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULES PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-tag block mb-4">Modules métier</span>
              <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight">
                Un module pour
                <br />
                <span className="gradient-text">chaque métier</span>
              </h2>
            </div>
            <button
              onClick={() => navigate('modules')}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-600 transition-colors whitespace-nowrap"
            >
              Voir tous les modules <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modulesPrev.map((m) => (
              <div
                key={m.title}
                className={`card-hover rounded-2xl border ${m.accentBorder} bg-gradient-to-br ${m.color} overflow-hidden`}
              >
                <div className="p-7">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-600 ${m.tagColor} mb-5`}>
                    <m.icon className="w-3.5 h-3.5" />
                    {m.sector}
                  </span>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-700 text-white mb-3">
                    {m.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{m.description}</p>
                  <ul className="space-y-2.5">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full ${m.accent.replace('text-', 'bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-6">
                  <button
                    onClick={() => navigate('modules')}
                    className={`flex items-center gap-1.5 text-sm font-600 ${m.accent} hover:opacity-80 transition-opacity`}
                  >
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag block mb-4">Notre méthode</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
              De l'idée au lancement
              <br />
              <span className="gradient-text">en 4 étapes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />

            {process.map((step, i) => (
              <div key={step.num} className="relative z-10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex flex-col items-center justify-center mb-5 transition-colors">
                    <span style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-800 gradient-text">
                      {step.num}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-700 text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-16 bg-slate-900/20 border-y border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="font-700 text-white mb-1">{title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-tag block mb-6">Prêt à commencer ?</span>
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-6xl font-800 tracking-tight mb-6">
            Votre projet mérite
            <br />
            <span className="gradient-text">le module qu'il vous faut</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Discutons de votre activité et voyons ensemble quel module peut transformer
            votre site en véritable outil métier.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-600 text-white shadow-2xl"
            >
              <span>Discuter de mon projet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('portfolio')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-600 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
            >
              Voir nos réalisations
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
