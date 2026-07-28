import { Link } from 'react-router-dom'
import { Code2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-700">
                Web<span className="gradient-text">Métier</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              L'agence web qui pense à votre métier. Des modules sur mesure pour chaque secteur d'activité.
            </p>
            {/* <div className="flex gap-3">
              {['in', 'tw', 'fb'].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer text-xs font-bold uppercase"
                >
                  {s}
                </div>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-600 text-slate-200 mb-5 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sites Vitrine', path: '/' },
                { label: 'E-commerce', path: '/' },
                { label: 'Modules Métier', path: '/modules/' },
                { label: 'Nos Réalisations', path: '/portfolio/' },
                { label: 'Maintenance & Support', path: '/contact/' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-600 text-slate-200 mb-5 tracking-wide">
              Modules
            </h4>
            <ul className="space-y-3">
              {[
                'Réservation Restaurant',
                'Planning Coiffeur',
                'Gestion Garage',
                'Prise de RDV',
                'Module sur mesure',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/modules/"
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-600 text-slate-200 mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <span>contact@domoweb.fr</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <span>06 74 21 90 30 </span>
              </li>
              {/* <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <span>12 Rue de l'Innovation<br />75008 Paris</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 WebMétier. Tous droits réservés.
          </p>
          <div className="flex gap-6">
  {[
    { label: 'Plan du site', path: '/sitemap/' },
    { label: 'Mentions légales & Politique de confidentialité', path: '/legal/' },
  ].map((item) => (
    <Link
      key={item.label}
      to={item.path}
      className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
    >
      {item.label}
    </Link>
  ))}
</div>
        </div>
      </div>
    </footer>
  )
}
