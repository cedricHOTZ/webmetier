import { useNavigate } from 'react-router-dom'
import { CheckCircle, ChefHat, Scissors, Car, Puzzle, ArrowRight, Calendar, Clock, Bell, Star, BarChart3, MessageSquare, Wrench, FileText, History, Users, Package, Zap } from 'lucide-react'

const restaurantFeatures = [
  { icon: Calendar, text: 'Calendrier de réservations en temps réel' },
  { icon: Users, text: 'Gestion des tables et capacités par zone' },
  { icon: Bell, text: 'Confirmations et rappels automatiques par SMS/email' },
  { icon: BarChart3, text: 'Tableau de bord avec statistiques journalières' },
  { icon: Clock, text: "Gestion des créneaux horaires et durées de repas" },
  { icon: MessageSquare, text: 'Préférences et allergies notées sur la fiche client' },
]

const coiffeurFeatures = [
  { icon: Calendar, text: 'Prise de rendez-vous 24h/24, 7j/7' },
  { icon: Users, text: 'Planning individuel par coiffeur/praticien' },
  { icon: Star, text: "Programme de fidélité et gestion des clients" },
  { icon: Bell, text: 'Rappels automatiques 24h avant le rendez-vous' },
  { icon: Package, text: 'Catalogue de prestations avec tarifs' },
  { icon: BarChart3, text: 'Statistiques de chiffre d\'affaires par praticien' },
]

const garageFeatures = [
  { icon: Car, text: 'Fiches véhicules détaillées (immat., carnet entretien)' },
  { icon: History, text: 'Historique complet des interventions' },
  { icon: Bell, text: 'Rappels automatiques de révision et contrôle technique' },
  { icon: FileText, text: 'Devis en ligne et validation par le client' },
  { icon: Wrench, text: "Suivi des pièces et du stock atelier" },
  { icon: MessageSquare, text: 'Notifications par SMS à chaque étape' },
]

const techStack = [
  { name: 'React', desc: 'Interfaces modernes' },
  { name: 'Node.js', desc: 'API robuste' },
  { name: 'PostgreSQL', desc: 'Base de données' },
  { name: 'Redis', desc: 'Cache temps réel' },
  { name: 'Stripe', desc: 'Paiements sécurisés' },
  { name: 'Twilio', desc: 'SMS & notifications' },
  { name: 'Docker', desc: 'Déploiement fiable' },
  { name: 'AWS', desc: 'Hébergement cloud' },
]

const customProcess = [
  { num: '01', title: 'Atelier métier', text: "Deux heures avec vous pour cartographier vos processus, vos besoins et vos contraintes métier." },
  { num: '02', title: 'Conception', text: "Maquettes interactives de l'interface, validées avec votre équipe avant tout développement." },
  { num: '03', title: 'Développement', text: "Développement en cycles courts avec des démos régulières pour coller parfaitement à vos attentes." },
  { num: '04', title: 'Formation', text: "Formation de votre équipe, documentation et support continu après le lancement." },
]

function ModuleMockupRestaurant() {
  return (
    <div className="module-mockup">
      <div className="mockup-bar">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-500 font-mono">Module Restaurant — Espace gérant</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: '18', label: 'Réservations', color: 'text-cyan-400' },
            { val: '74', label: 'Couverts', color: 'text-blue-400' },
            { val: '3', label: 'En attente', color: 'text-yellow-400' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800/60 rounded-xl p-3 text-center">
              <div style={{ fontFamily: 'Outfit, sans-serif' }} className={`text-xl font-800 ${s.color}`}>{s.val}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        {/* Table map */}
        <div className="bg-slate-800/40 rounded-xl p-3">
          <p className="text-xs text-slate-500 mb-2 font-medium">Plan de salle — Soir du 15/11</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: '1', status: 'full', guests: 4 },
              { id: '2', status: 'free', guests: 0 },
              { id: '3', status: 'full', guests: 2 },
              { id: '4', status: 'reserved', guests: 6 },
              { id: '5', status: 'free', guests: 0 },
              { id: '6', status: 'full', guests: 4 },
              { id: '7', status: 'reserved', guests: 2 },
              { id: '8', status: 'free', guests: 0 },
            ].map((t) => (
              <div
                key={t.id}
                className={`rounded-lg p-2 text-center text-xs transition-colors cursor-pointer ${
                  t.status === 'full' ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300'
                  : t.status === 'reserved' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                  : 'bg-slate-700/50 border border-slate-600/30 text-slate-500'
                }`}
              >
                <div className="font-700">T{t.id}</div>
                <div className="opacity-70">{t.guests > 0 ? `${t.guests}p` : 'libre'}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Next resa */}
        <div>
          <p className="text-xs text-slate-500 mb-2 font-medium">Prochaines réservations</p>
          {[
            { time: '19:30', name: 'Famille Dupont', table: 'T4', nb: 4, status: 'confirmé' },
            { time: '20:00', name: 'Martin & Martin', table: 'T7', nb: 2, status: 'en attente' },
            { time: '20:15', name: 'Réservation groupe', table: 'T3+T6', nb: 8, status: 'confirmé' },
          ].map((r) => (
            <div key={r.name} className="flex items-center justify-between py-2 border-b border-slate-700/40 last:border-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-700 text-cyan-400 w-12">{r.time}</span>
                <div>
                  <p className="text-xs text-slate-200 font-600">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.table} · {r.nb} pers.</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                r.status === 'confirmé' ? 'bg-green-500/15 text-green-400' : 'bg-yellow-500/15 text-yellow-400'
              }`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ModuleMockupCoiffeur() {
  return (
    <div className="module-mockup">
      <div className="mockup-bar">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-500 font-mono">Module Coiffeur — Planning semaine</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Praticiens */}
        <div className="flex gap-2">
          {['Sophie', 'Marc', 'Léa'].map((p, i) => (
            <div key={p} className={`flex-1 px-2 py-1.5 rounded-lg text-center text-xs font-600 cursor-pointer transition-all ${
              i === 0 ? 'bg-pink-500/20 border border-pink-500/30 text-pink-300' : 'bg-slate-700/50 text-slate-400 border border-slate-700'
            }`}>
              {p}
            </div>
          ))}
        </div>
        {/* Schedule */}
        <div className="space-y-1.5">
          {[
            { time: '09:00', client: 'Emma R.', service: 'Coupe + Couleur', duration: 90, status: 'done' },
            { time: '10:30', client: 'Claire M.', service: 'Brushing', duration: 45, status: 'current' },
            { time: '11:30', client: 'Julie K.', service: 'Balayage', duration: 120, status: 'upcoming' },
            { time: '14:00', client: 'Nathalie B.', service: 'Coupe femme', duration: 60, status: 'upcoming' },
            { time: '15:30', client: '— Libre —', service: '', duration: 60, status: 'free' },
          ].map((slot) => (
            <div
              key={slot.time}
              className={`flex items-center gap-3 p-2.5 rounded-lg ${
                slot.status === 'current' ? 'bg-pink-500/15 border border-pink-500/25'
                : slot.status === 'done' ? 'opacity-50 bg-slate-800/40'
                : slot.status === 'free' ? 'border border-dashed border-slate-700'
                : 'bg-slate-800/50'
              }`}
            >
              <span className="text-xs font-700 text-slate-400 w-10 shrink-0">{slot.time}</span>
              <div className={`w-1 rounded-full self-stretch ${
                slot.status === 'current' ? 'bg-pink-400'
                : slot.status === 'done' ? 'bg-slate-600'
                : slot.status === 'free' ? 'bg-slate-600'
                : 'bg-blue-400'
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-600 text-slate-200 truncate">{slot.client}</p>
                {slot.service && <p className="text-xs text-slate-500">{slot.service} · {slot.duration}min</p>}
              </div>
              {slot.status === 'current' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 shrink-0">En cours</span>
              )}
            </div>
          ))}
        </div>
        {/* Stats */}
        <div className="flex gap-3 pt-1">
          <div className="flex-1 bg-slate-800/40 rounded-lg p-2.5 text-center">
            <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-800 text-pink-400">8</div>
            <div className="text-xs text-slate-500">RDV aujourd'hui</div>
          </div>
          <div className="flex-1 bg-slate-800/40 rounded-lg p-2.5 text-center">
            <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-800 text-green-400">340€</div>
            <div className="text-xs text-slate-500">CA estimé</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ModuleMockupGarage() {
  return (
    <div className="module-mockup">
      <div className="mockup-bar">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-500 font-mono">Module Garage — Fiche véhicule</span>
      </div>
      <div className="p-5 space-y-4">
        {/* Vehicle header */}
        <div className="flex items-center gap-3 bg-slate-800/40 rounded-xl p-3">
          <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
            <Car className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <p style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-700 text-white">Peugeot 308 — AB-452-CD</p>
            <p className="text-xs text-slate-400">Client : M. Bernard · 2021 · 87 000 km</p>
          </div>
        </div>
        {/* Status indicators */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Révision', date: 'Dépassée', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
            { label: 'CT', date: '03/2026', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
            { label: 'Huile', date: '2k km', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
          ].map((s) => (
            <div key={s.label} className={`rounded-lg p-2 text-center border ${s.bg}`}>
              <p className={`text-xs font-700 ${s.color}`}>{s.date}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        {/* History */}
        <div>
          <p className="text-xs text-slate-500 font-medium mb-2">Dernières interventions</p>
          {[
            { date: '14/09/24', op: 'Vidange + filtres', price: '89€', done: true },
            { date: '03/06/24', op: 'Freins AV + disques', price: '280€', done: true },
            { date: '12/01/24', op: 'Révision 80 000 km', price: '340€', done: true },
          ].map((h) => (
            <div key={h.date} className="flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-200 font-600">{h.op}</p>
                  <p className="text-xs text-slate-500">{h.date}</p>
                </div>
              </div>
              <span className="text-xs font-700 text-sky-400">{h.price}</span>
            </div>
          ))}
        </div>
        {/* Action */}
        <button className="w-full py-2.5 rounded-lg bg-sky-500/15 border border-sky-500/25 text-xs font-600 text-sky-400 hover:bg-sky-500/25 transition-colors">
          + Créer un devis pour ce véhicule
        </button>
      </div>
    </div>
  )
}

export default function Modules() {
  const routerNavigate = useNavigate()
  const navigate = (page: string) => routerNavigate(page === 'home' ? '/' : `/${page}/`)

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 hero-grid overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/8 blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
          <span className="section-tag block mb-5">Modules métier sur mesure</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-5xl lg:text-6xl xl:text-7xl font-800 tracking-tight mb-6">
            On pense à votre métier
            <br />
            <span className="gradient-text">avant votre site</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Chaque module est conçu pour un secteur précis. Pas d'adaptation d'un outil générique —
            une solution pensée de zéro pour votre activité quotidienne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-600 text-white"
            >
              <span>Discuter de mon besoin</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── MODULE RESTAURANT ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <ChefHat className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-700 text-orange-400 uppercase tracking-wider">Restauration</span>
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
                Module
                <br />
                <span className="text-orange-400">Réservation de table</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Dites adieu aux appels de réservation manqués. Vos clients réservent en ligne,
                vous gérez tout depuis un tableau de bord intuitif. Confirmations par SMS,
                gestion du plan de salle, liste d'attente — tout est automatisé.
              </p>
              <ul className="space-y-3 mb-8">
                {restaurantFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-600 text-white"
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('portfolio')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-600 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-white transition-all"
                >
                  Voir un exemple
                </button>
              </div>
            </div>
            <div className="float-anim">
              <ModuleMockupRestaurant />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE COIFFEUR ─── */}
      <section className="py-24 lg:py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 float-anim" style={{ animationDelay: '1s' }}>
              <ModuleMockupCoiffeur />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <Scissors className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-700 text-pink-400 uppercase tracking-wider">Beauté & Coiffure</span>
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
                Module
                <br />
                <span className="text-pink-400">Planning & RDV</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Un planning intelligents pour chaque praticien de votre salon. Vos clientes
                réservent en ligne, choisissent leur coiffeur préféré et reçoivent un rappel
                automatique. Vous réduisez les no-shows de 60%.
              </p>
              <ul className="space-y-3 mb-8">
                {coiffeurFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-pink-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('contact')}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-600 text-white"
              >
                <span>Demander une démo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE GARAGE ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <Car className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-700 text-sky-400 uppercase tracking-wider">Garage & Auto</span>
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
                Module
                <br />
                <span className="text-sky-400">Gestion véhicules</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Chaque véhicule a sa fiche digitale. Votre client reçoit un rappel avant sa
                révision, son contrôle technique, son changement de pneus. Vous gardez le
                contact, lui revient naturellement.
              </p>
              <ul className="space-y-3 mb-8">
                {garageFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-600 text-white"
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="float-anim" style={{ animationDelay: '2s' }}>
              <ModuleMockupGarage />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE SUR MESURE ─── */}
      <section className="py-24 lg:py-32 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
            <Puzzle className="w-8 h-8 text-cyan-400" />
          </div>
          <span className="section-tag block mb-4">Votre activité est unique</span>
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
            Un module pensé
            <br />
            <span className="gradient-text">rien que pour vous</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-14">
            Votre métier ne rentre dans aucune case ? Tant mieux. Nous adorons les défis.
            Décrivez-nous vos processus, on vous propose un module sur mesure.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {customProcess.map((step) => (
              <div key={step.num} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-left hover:border-cyan-500/30 transition-colors">
                <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-800 gradient-text mb-3">
                  {step.num}
                </div>
                <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="font-700 text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('contact')}
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-600 text-white"
          >
            <span>Discuter de mon module</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-10 tracking-wide uppercase font-medium">
            Des technologies robustes et éprouvées
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {techStack.map(({ name, desc }) => (
              <div key={name} className="text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors flex items-center justify-center mx-auto mb-2">
                  <span style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xs font-800 text-slate-300">{name.slice(0, 2)}</span>
                </div>
                <p className="text-xs text-slate-500">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
