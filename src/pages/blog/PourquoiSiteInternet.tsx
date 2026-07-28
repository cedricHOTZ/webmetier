import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArticleLayout, { ArticleH2, ArticleP, ArticleList } from '../../components/ArticleLayout'
import { blogPosts } from '../../seo.mjs'

const post = blogPosts.find((p) => p.path === '/blog/pourquoi-avoir-un-site-internet/')!

export default function PourquoiSiteInternet() {
  return (
    <ArticleLayout
      icon={Globe}
      accent="cyan"
      category={post.category}
      title={post.heading}
      date={post.date}
      readTime={post.readTime}
    >
      <ArticleP>
        Bouche-à-oreille, réseaux sociaux, vitrine physique : beaucoup d'entreprises et de
        commerces locaux fonctionnent encore très bien sans site internet. Mais avant de
        pousser une porte ou de décrocher le téléphone, un client potentiel a de plus en plus
        souvent le réflexe de chercher l'entreprise sur Google. Sans site, cette recherche ne
        mène nulle part.
      </ArticleP>

      <ArticleH2>Être trouvé, même en dehors de vos horaires</ArticleH2>
      <ArticleP>
        Un site internet reste accessible 24h/24 et 7j/7, contrairement à un magasin ou une
        ligne téléphonique. Un client peut consulter vos horaires, votre offre ou vos
        coordonnées un dimanche soir, et revenir vous contacter au bon moment. C'est autant de
        demandes qui, sans site, seraient simplement passées à côté.
      </ArticleP>

      <ArticleH2>Ce qu'un site apporte concrètement à une entreprise locale</ArticleH2>
      <ArticleList
        items={[
          'Une image professionnelle et rassurante avant le premier contact',
          'Une présentation claire de votre activité, vos services et vos tarifs',
          'Un moyen de se démarquer d\'une concurrence parfois absente du web',
          'Un formulaire de contact ou un module de réservation qui capte des demandes sans mobiliser votre équipe',
          'Un meilleur référencement local, donc plus de visibilité sur les recherches Google',
        ]}
      />

      <ArticleH2>Un site vitrine, oui, mais pas seulement</ArticleH2>
      <ArticleP>
        Un site qui se contente de présenter l'activité a déjà de la valeur. Mais un site qui
        intègre aussi un outil métier, réservation, prise de rendez-vous ou gestion client, va
        plus loin : il fait gagner du temps au quotidien en plus d'apporter de la visibilité.
        C'est cette approche que nous développons chez WebMétier, avec des{' '}
        <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
          modules métier
        </Link>{' '}
        pensés pour des activités comme la restauration, la coiffure ou l'automobile.
      </ArticleP>

      <ArticleH2>Par où commencer ?</ArticleH2>
      <ArticleP>
        Pas besoin d'un site complexe pour démarrer : l'essentiel est d'avoir une présence
        claire, à votre image, et adaptée à la façon dont vos clients vous contactent
        aujourd'hui. Jetez un œil à nos{' '}
        <Link to="/portfolio/" className="text-cyan-400 hover:text-cyan-300">
          réalisations
        </Link>{' '}
        ou{' '}
        <Link to="/contact/" className="text-cyan-400 hover:text-cyan-300">
          parlons de votre projet
        </Link>
        .
      </ArticleP>
    </ArticleLayout>
  )
}
