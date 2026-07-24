import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, CheckCircle, Clock, MessageSquare, ChefHat, Scissors,CalendarCheck , Car,PackageCheck ,BedDouble , Puzzle, Globe,FileSignature , ShoppingCart } from 'lucide-react'

interface ContactProps {
  setCurrentPage: (page: string) => void
}

const faqs = [
  {
    q: "Combien de temps faut-il pour développer un module métier sur mesure ?",
    a: "En général entre 4 et 8 semaines selon la complexité du module. Nous travaillons en cycles courts avec des démos toutes les deux semaines pour valider ensemble chaque étape du développement.",
  },
  {
    q: "Mes données sont-elles hébergées en France ?",
    a: "Oui, tous nos projets sont hébergés dans des datacenters français ou européens certifiés ISO 27001. Nous veillons au respect du RGPD et vous accompagnons dans la rédaction des mentions légales.",
  },
  {
    q: "Est-ce que je peux modifier mon site moi-même après livraison ?",
    a: "Absolument. Chaque projet livré intègre une interface d'administration intuitive. Nous vous formons à son utilisation et documentons l'ensemble. Pour les modifications plus techniques, notre équipe de maintenance est disponible.",
  },
  {
    q: "Proposez-vous un contrat de maintenance ?",
    a: "Oui, nous proposons des contrats de maintenance mensuels à partir de 19€/mois incluant : mises à jour de sécurité, sauvegardes quotidiennes, monitoring 24h/24 et un quota d'heures de développement mensuel.",
  },
 
  {
    q: "Quels sont vos tarifs ?",
    a: "Nos tarifs dépendent de la complexité du projet. Un site vitrine avec module démarre à partir de 800€. Un projet e-commerce complet avec module sur mesure commence autour de 1 500€. Nous établissons systématiquement un devis détaillé et gratuit après notre premier échange.",
  },
]

const modules = [
  { id: 'restaurant', label: 'Réservation restaurant', icon: ChefHat },
  { id: 'coiffeur', label: 'Planning coiffeur/beauté', icon: Scissors },
  { id: 'garage', label: 'Gestion garage', icon: Car },
  { id: 'rdv', label: 'Prise de RDV générique', icon: Clock },
  { id: 'hotellerie', label: 'Réservation de chambre', icon: BedDouble },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
  { id: 'clickcollect', label: 'Click & Collect', icon: PackageCheck },
  { id: 'evenement', label: "Réservation d'évènement", icon: CalendarCheck },
  { id: 'vitrine', label: 'Site vitrine', icon: Globe },
  { id: 'mesure', label: 'Module sur mesure', icon: Puzzle },
  { id: 'devis', label: 'Gestion de devis', icon: FileSignature },
]

const advantages = [
  { icon: Clock, title: 'Réponse sous 4h', text: 'En jours ouvrés, un membre de notre équipe vous répond rapidement.' },
  { icon: CheckCircle, title: 'Premier échange offert', text: 'Un appel de 30 min pour comprendre votre besoin, sans engagement.' },
  { icon: MessageSquare, title: 'Devis sous 48h', text: "Après notre échange, vous recevez un devis détaillé et transparent." },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-800/60 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-800/30 transition-colors"
      >
        <span style={{ fontFamily: 'Outfit, sans-serif' }} className="font-600 text-white text-sm leading-relaxed">
          {q}
        </span>
        <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
          {open
            ? <ChevronUp className="w-4 h-4 text-cyan-400" />
            : <ChevronDown className="w-4 h-4 text-slate-400" />
          }
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800/40 pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', budget: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const subject = encodeURIComponent(`Demande de contact - ${formData.name}`)

  const body = encodeURIComponent(`
Nom : ${formData.name}
Email : ${formData.email}
Entreprise : ${formData.company}
Téléphone : ${formData.phone}
Budget : ${formData.budget}
Modules : ${selectedModules.join(', ')}

Message :
${formData.message}
  `)

  window.location.href = `mailto:contact@domoweb.fr?subject=${subject}&body=${body}`
}

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 hero-grid overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-cyan-500/6 blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative">
          <span className="section-tag block mb-5">Contactez-nous</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-5xl lg:text-6xl xl:text-7xl font-800 tracking-tight mb-5">
            Parlons de
            <br />
            <span className="gradient-text">votre projet</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Premier échange gratuit. Décrivez-nous votre activité et vos besoins,
            on revient vers vous avec des idées concrètes.
          </p>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map(({ icon: Icon, title, text }) => (
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

      {/* ─── FORM + INFO ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-800 text-white mb-8">
                Décrivez votre projet
              </h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-2xl font-800 text-white mb-3">Message envoyé !</h3>
                  <p className="text-slate-400 max-w-sm">
                    Merci pour votre message. Un membre de notre équipe vous contactera sous 4h en jours ouvrés.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Modules selector */}
                  <div>
                    <label className="block text-sm font-600 text-slate-300 mb-3">
                      Quels modules vous intéressent ?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {modules.map(({ id, label, icon: Icon }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleModule(id)}
                          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-600 border transition-all ${
                            selectedModules.includes(id)
                              ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
                              : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Votre nom *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@monentreprise.fr"
                        className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Entreprise</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Mon Restaurant"
                        className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Téléphone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Budget envisagé</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all appearance-none"
                    >
                      <option value="" className="bg-slate-900">Sélectionner une fourchette</option>
                      <option value="1k-3k" className="bg-slate-900">1 500€ – 3 000€</option>
                      <option value="3k-6k" className="bg-slate-900">3 000€ – 6 000€</option>
                      <option value="6k-12k" className="bg-slate-900">6 000€ – 12 000€</option>
                      <option value="12k+" className="bg-slate-900">12 000€ et plus</option>
                      <option value="nsp" className="bg-slate-900">Je ne sais pas encore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-600 text-slate-400 mb-2 uppercase tracking-wide">Décrivez votre projet *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de votre activité, de vos besoins, des problèmes que vous souhaitez résoudre..."
                      className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2.5 py-4 rounded-xl text-base font-600 text-white"
                  >
                    <span>Envoyer ma demande</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                    Vos données ne seront jamais transmises à des tiers.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6">
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-700 text-white mb-5">Nos coordonnées</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@domoweb.fr" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email</p>
                      <p className="text-sm text-slate-200 group-hover:text-cyan-400 transition-colors">contact@domoweb.fr</p>
                    </div>
                  </a>
                  <a href="tel:+33123456789" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Téléphone</p>
                      <p className="text-sm text-slate-200 group-hover:text-cyan-400 transition-colors">06 74 21 90 30</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    {/* <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div> */}
                    {/* <div>
                      <p className="text-xs text-slate-500 mb-0.5">Adresse</p>
                      <p className="text-sm text-slate-200">12 Rue de l'Innovation<br />75008 Paris</p>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6">
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-700 text-white mb-3">Horaires</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Lundi – Vendredi', hours: '9h00 – 18h00' },
                    { day: 'Samedi', hours: '8h00 – 12h00' },
                    { day: 'Dimanche', hours: 'Fermé' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-slate-400">{day}</span>
                      <span className={hours === 'Fermé' ? 'text-slate-600' : 'text-slate-200'}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              {/* <div className="rounded-2xl overflow-hidden border border-slate-800/60 bg-slate-900/50 h-44 flex items-center justify-center relative"> */}
                {/* <div className="absolute inset-0 hero-grid opacity-40" /> */}
                {/* <div className="relative text-center"> */}
                  {/* <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" /> */}
                  {/* <p className="text-sm text-slate-400">12 Rue de l'Innovation</p>
                  <p className="text-xs text-slate-500">75008 Paris — 8e arrondissement</p> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 lg:py-32 bg-slate-900/20 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag block mb-4">Questions fréquentes</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-800 tracking-tight">
              Vous avez des questions ?
              <br />
              <span className="gradient-text">On a les réponses.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm mb-4">Votre question n'est pas listée ?</p>
            <a
              href="mailto:contact@domoweb.fr"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Écrivez-nous directement
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-slate-950 to-cyan-900/15" />
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p style={{ fontFamily: 'Outfit, sans-serif' }} className="text-slate-400 text-sm font-600 uppercase tracking-widest mb-4">
            Prêt à passer à l'étape suivante ?
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl lg:text-5xl font-800 tracking-tight mb-5">
            Votre métier mérite
            <br />
            <span className="gradient-text">un site à sa hauteur</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Premier échange gratuit. Devis sous 48h. Aucun engagement.
          </p>
          <a
            href="tel:+33123456789"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-600 text-white shadow-2xl"
          >
            <Phone className="w-4 h-4" />
            <span>Appelez-nous : 01 23 45 67 89</span>
          </a>
        </div>
      </section>
    </div>
  )
}
