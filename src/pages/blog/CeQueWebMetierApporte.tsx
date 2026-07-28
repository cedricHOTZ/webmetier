import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArticleLayout, { ArticleH2, ArticleP, ArticleList } from '../../components/ArticleLayout'
import { blogPosts } from '../../seo.mjs'

const post = blogPosts.find((p) => p.path === '/blog/ce-que-webmetier-vous-apporte/')!

export default function CeQueWebMetierApporte() {
  return (
    <ArticleLayout
      icon={Sparkles}
      accent="purple"
      category={post.category}
      title={post.heading}
      date={post.date}
      readTime={post.readTime}
    >
      <ArticleP>
        Choisir une agence pour créer son site, c'est choisir un partenaire autant qu'un
        prestataire technique. Chez WebMétier, cela se traduit par une approche sur mesure,
        un vrai souci du détail, et des outils modernes — dont l'intelligence artificielle —
        utilisés pour aller plus vite sans rogner sur la qualité.
      </ArticleP>

      <ArticleH2>Une approche vraiment sur mesure</ArticleH2>
      <ArticleP>
        Pas de template générique habillé à vos couleurs : chaque projet démarre par un atelier
        métier pour comprendre vos process, vos contraintes et la façon dont vos clients vous
        contactent. Cette étape conditionne tout le reste, du choix des fonctionnalités à
        l'organisation du site. Retrouvez le détail de notre démarche sur la page{' '}
        <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
          Modules Métier
        </Link>
        .
      </ArticleP>

      <ArticleH2>L'intelligence artificielle comme accélérateur, pas comme raccourci</ArticleH2>
      <ArticleP>
        Nous utilisons des outils d'intelligence artificielle à plusieurs étapes de nos
        projets : pour accélérer le développement, explorer plus rapidement différentes pistes
        techniques, ou encore optimiser le contenu et le référencement d'un site. L'objectif
        n'est pas de remplacer l'expertise humaine, mais de dégager du temps pour ce qui compte
        vraiment : bien comprendre votre activité et soigner les détails qui font la
        différence.
      </ArticleP>

      <ArticleH2>Une exigence technique qui se voit</ArticleH2>
      <ArticleP>
        Un beau site qui charge lentement ou reste invisible sur Google ne sert à rien. C'est
        pourquoi chaque site que nous livrons est pensé pour être rapide et bien référencé dès
        le départ : structure technique soignée, contenu optimisé pour les moteurs de
        recherche, et suivi dans la durée plutôt qu'une simple mise en ligne.
      </ArticleP>

      <ArticleH2>Un accompagnement de bout en bout</ArticleH2>
      <ArticleList
        items={[
          'Un atelier métier pour cartographier vos besoins réels',
          'Des maquettes validées avec vous avant tout développement',
          'Un développement par cycles courts, avec des démos régulières',
          'Une formation de votre équipe et un support après la mise en ligne',
        ]}
      />

      <ArticleH2>Voir le résultat concrètement</ArticleH2>
      <ArticleP>
        La meilleure façon de juger une agence reste de regarder ce qu'elle a déjà livré.
        Consultez nos{' '}
        <Link to="/portfolio/" className="text-cyan-400 hover:text-cyan-300">
          réalisations
        </Link>{' '}
        ou{' '}
        <Link to="/contact/" className="text-cyan-400 hover:text-cyan-300">
          échangeons directement
        </Link>{' '}
        sur votre projet.
      </ArticleP>
    </ArticleLayout>
  )
}
