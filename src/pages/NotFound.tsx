import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7 text-cyan-400" />
        </div>

        <h1
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="text-6xl font-800 tracking-tight text-white mb-4"
        >
          404
        </h1>

        <p className="text-slate-400 leading-relaxed mb-8">
          Cette page n'existe pas ou a été déplacée. Retrouvez toutes nos pages
          depuis l'accueil ou le{' '}
          <Link to="/sitemap/" className="text-cyan-400 hover:text-cyan-300">
            plan du site
          </Link>
          .
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg text-sm font-semibold text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
