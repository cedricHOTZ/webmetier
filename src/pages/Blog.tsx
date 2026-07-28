import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '../seo.mjs'
import { blogCategoryStyle } from '../blogCategoryStyles'

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 hero-grid opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
          <span className="section-tag">Blog</span>
          <h1
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-4xl lg:text-6xl font-800 tracking-tight text-white mt-2 mb-6"
          >
            Conseils pour digitaliser votre métier
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Guides pratiques pour les restaurateurs, coiffeurs et garagistes qui veulent
            simplifier leur gestion quotidienne avec les bons outils.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const style = blogCategoryStyle[post.category]
            const Icon = style.icon
            const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })

            return (
              <Link
                key={post.path}
                to={post.path}
                className="card-hover flex flex-col bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 group"
              >
                <div className={`w-11 h-11 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${style.text}`} />
                </div>

                <span className={`text-xs font-600 ${style.text} mb-2`}>{post.category}</span>

                <h2
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  className="text-lg font-700 text-white mb-3 group-hover:text-cyan-400 transition-colors"
                >
                  {post.heading}
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-sm text-cyan-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
