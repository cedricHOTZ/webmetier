import { useState, useEffect } from 'react'
import { Menu, X, Code2, ChevronDown } from 'lucide-react'

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const pages = [
  { id: 'home', label: 'Accueil' },
  { id: 'modules', label: 'Modules Métier' },
  { id: 'portfolio', label: 'Réalisations' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = (page: string) => {
    setCurrentPage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-xl font-700 tracking-tight"
            >
              Web<span className="gradient-text">Métier</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === p.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* CTA + mobile burger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('contact')}
              className="hidden md:flex btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg"
            >
              <span>Démarrer un projet</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2 bg-slate-950/98 backdrop-blur-xl border-t border-slate-800/50 space-y-1">
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(p.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                currentPage === p.id
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="w-full btn-primary px-4 py-3 rounded-lg text-sm font-semibold text-white mt-2"
          >
            <span>Démarrer un projet</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
