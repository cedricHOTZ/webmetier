import { Scissors } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArticleLayout, { ArticleH2, ArticleP, ArticleList } from '../../components/ArticleLayout'
import { blogPosts } from '../../seo.mjs'

const post = blogPosts.find((p) => p.path === '/blog/planning-rdv-coiffeur/')!

export default function PlanningCoiffeur() {
  return (
    <ArticleLayout
      icon={Scissors}
      accent="pink"
      category={post.category}
      title={post.heading}
      date={post.date}
      readTime={post.readTime}
    >
      <ArticleP>
        Répondre au téléphone les mains dans les cheveux d'une cliente, jongler entre un agenda
        papier et un planning par praticien, relancer soi-même les rendez-vous du lendemain :
        la gestion des rendez-vous reste l'un des points de friction les plus fréquents dans les
        salons de coiffure et instituts. Un logiciel de planning en ligne change concrètement ce
        quotidien.
      </ArticleP>

      <ArticleH2>Pourquoi la prise de rendez-vous papier montre ses limites</ArticleH2>
      <ArticleP>
        Un salon qui grandit, c'est plusieurs praticiens, plusieurs plannings à coordonner, et
        des clientes qui souhaitent réserver en dehors des horaires d'ouverture. Le papier ou un
        simple agenda partagé ne permet ni la réservation autonome par la cliente, ni les
        rappels automatiques, ni une vue claire du taux de remplissage par coiffeur ou
        praticien.
      </ArticleP>

      <ArticleH2>Ce qu'apporte un planning en ligne</ArticleH2>
      <ArticleP>
        Le module Planning Coiffeur de WebMétier est pensé pour les salons et instituts qui
        veulent reprendre la main sur leur agenda :
      </ArticleP>
      <ArticleList
        items={[
          'Prise de rendez-vous en ligne accessible 24h/24 et 7j/7',
          'Planning individuel pour chaque coiffeur ou praticien',
          'Programme de fidélité et suivi de la clientèle',
          'Rappels automatiques 24h avant le rendez-vous',
          'Catalogue de prestations avec tarifs à jour',
          'Statistiques de chiffre d\'affaires par praticien',
        ]}
      />

      <ArticleH2>Moins de rendez-vous manqués, plus de temps pour le service</ArticleH2>
      <ArticleP>
        Les rappels automatiques par SMS ou email limitent les oublis, sans que l'équipe ait à y
        penser. Et parce que chaque praticien dispose de son propre planning, il devient facile
        d'ouvrir des créneaux, de bloquer une pause, ou de visualiser sa charge de la semaine en
        un coup d'œil.
      </ArticleP>

      <ArticleH2>Un fonctionnement adapté à la réalité du salon</ArticleH2>
      <ArticleP>
        Chaque salon a ses propres habitudes : durée des prestations, nombre de praticiens,
        politique d'annulation. Le module est configuré autour de votre organisation réelle,
        et intégré à votre propre site plutôt qu'à une plateforme tierce. Pour aller plus loin,
        découvrez l'ensemble de nos{' '}
        <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
          modules métier
        </Link>{' '}
        ou{' '}
        <Link to="/contact/" className="text-cyan-400 hover:text-cyan-300">
          contactez-nous
        </Link>{' '}
        pour en discuter.
      </ArticleP>
    </ArticleLayout>
  )
}
