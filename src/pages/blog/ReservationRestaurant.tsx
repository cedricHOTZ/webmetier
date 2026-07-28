import { ChefHat } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArticleLayout, { ArticleH2, ArticleP, ArticleList } from '../../components/ArticleLayout'
import { blogPosts } from '../../seo.mjs'

const post = blogPosts.find((p) => p.path === '/blog/reservation-restaurant-en-ligne/')!

export default function ReservationRestaurant() {
  return (
    <ArticleLayout
      icon={ChefHat}
      accent="orange"
      category={post.category}
      title={post.heading}
      date={post.date}
      readTime={post.readTime}
    >
      <ArticleP>
        Cahier papier posé près du téléphone, appels qui interrompent le service, créneaux
        notés deux fois par erreur : la réservation manuelle reste très répandue dans la
        restauration, mais elle atteint vite ses limites dès que l'établissement tourne bien.
        Un module de réservation en ligne s'attaque directement à ces frictions du quotidien.
      </ArticleP>

      <ArticleH2>Les limites du cahier de réservations</ArticleH2>
      <ArticleP>
        Le téléphone reste le principal point de friction : chaque appel mobilise un membre de
        l'équipe pendant le coup de feu, et un appel manqué peut signifier une réservation
        perdue. À cela s'ajoutent les erreurs de saisie, les doubles réservations sur un même
        créneau, et l'absence de visibilité en temps réel sur le taux de remplissage de la
        salle.
      </ArticleP>

      <ArticleH2>Ce que change un module de réservation en ligne</ArticleH2>
      <ArticleP>
        Le module Réservation Restaurant développé par WebMétier permet aux clients de réserver
        directement depuis le site, à toute heure, sans passer par le téléphone. Côté gestion,
        l'équipe dispose de :
      </ArticleP>
      <ArticleList
        items={[
          'Un calendrier de réservations en temps réel, visible par toute l\'équipe',
          'Une gestion des tables et des capacités par zone de la salle',
          'Des confirmations et rappels automatiques par SMS ou email',
          'Un tableau de bord avec les statistiques de fréquentation par jour',
          'La gestion fine des créneaux horaires et des durées de repas',
          'Un espace pour noter les préférences et allergies de chaque client',
        ]}
      />

      <ArticleH2>Des bénéfices concrets pour l'équipe en salle</ArticleH2>
      <ArticleP>
        En centralisant les réservations, l'équipe passe moins de temps au téléphone et peut se
        concentrer sur le service. Les rappels automatiques avant le service limitent les
        oublis côté client, et la vue d'ensemble sur les couverts aide à mieux anticiper les
        besoins en cuisine et en salle, service après service.
      </ArticleP>

      <ArticleH2>Un module intégré à votre site, à votre image</ArticleH2>
      <ArticleP>
        Contrairement à une plateforme de réservation tierce qui redirige vos clients ailleurs
        et prélève une commission, le module WebMétier est intégré directement à votre propre
        site vitrine. Vous gardez la main sur vos données clients et sur votre image de marque.
        Retrouvez le détail de nos{' '}
        <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
          modules métier
        </Link>{' '}
        ou consultez nos{' '}
        <Link to="/portfolio/" className="text-cyan-400 hover:text-cyan-300">
          réalisations
        </Link>{' '}
        pour voir des exemples concrets.
      </ArticleP>
    </ArticleLayout>
  )
}
