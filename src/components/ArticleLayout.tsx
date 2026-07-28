import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const accentClasses: Record<string, { text: string; bg: string; border: string }> = {
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  pink: { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  sky: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
}

interface ArticleLayoutProps {
  icon: LucideIcon
  accent: 'orange' | 'pink' | 'sky' | 'cyan' | 'purple'
  category: string
  title: string
  date: string
  readTime: string
  children: React.ReactNode
}

export default function ArticleLayout({
  icon: Icon,
  accent,
  category,
  title,
  date,
  readTime,
  children,
}: ArticleLayoutProps) {
  const acc = accentClasses[accent]
  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 hero-grid opacity-30" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 py-24">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className={`w-14 h-14 rounded-2xl ${acc.bg} border ${acc.border} flex items-center justify-center mb-6`}>
            <Icon className={`w-7 h-7 ${acc.text}`} />
          </div>

          <span className="section-tag">{category}</span>
          <h1
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-3xl lg:text-5xl font-800 tracking-tight text-white mt-2 mb-4"
          >
            {title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <article className="space-y-4">{children}</article>

        <div className="mt-16 bg-slate-900/50 border border-slate-800/60 rounded-2xl p-8 text-center">
          <h2
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-xl lg:text-2xl font-700 text-white mb-3"
          >
            Envie d'un module sur mesure pour votre activité ?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Parlons de vos besoins et voyons comment WebMétier peut digitaliser votre gestion
            quotidienne.
          </p>
          <Link
            to="/contact/"
            className="inline-flex btn-primary px-6 py-3 rounded-lg text-sm font-semibold text-white"
          >
            Démarrer un projet
          </Link>
        </div>
      </main>
    </div>
  )
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{ fontFamily: 'Outfit, sans-serif' }}
      className="text-xl lg:text-2xl font-700 text-white pt-6"
    >
      {children}
    </h2>
  )
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-400 leading-relaxed">{children}</p>
}

export function ArticleList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-slate-400 leading-relaxed list-disc list-inside">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
