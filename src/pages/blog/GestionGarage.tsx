import { Car } from 'lucide-react'
import { Link } from 'react-router-dom'
import ArticleLayout, { ArticleH2, ArticleP, ArticleList } from '../../components/ArticleLayout'
import { blogPosts } from '../../seo.mjs'

const post = blogPosts.find((p) => p.path === '/blog/gestion-garage-automobile/')!

export default function GestionGarage() {
  return (
    <ArticleLayout
      icon={Car}
      accent="sky"
      category={post.category}
      title={post.heading}
      date={post.date}
      readTime={post.readTime}
    >
      <ArticleP>
        Retrouver l'historique d'entretien d'un véhicule, penser à relancer un client pour son
        contrôle technique, envoyer un devis avant d'entamer une réparation : la gestion d'un
        garage automobile repose sur beaucoup de suivi, souvent réparti entre carnets, fichiers
        Excel et mémoire de l'équipe. Un logiciel de gestion dédié centralise tout ça.
      </ArticleP>

      <ArticleH2>Le suivi client et véhicule, un vrai point de friction</ArticleH2>
      <ArticleP>
        Sans outil centralisé, l'historique d'un véhicule est dispersé entre plusieurs
        supports, voire uniquement dans la mémoire du garagiste. Résultat : du temps perdu à
        rechercher une information, des relances de révision ou de contrôle technique oubliées,
        et des devis qui prennent plus de temps à formaliser qu'ils ne le devraient.
      </ArticleP>

      <ArticleH2>Ce que permet le module Gestion Garage</ArticleH2>
      <ArticleP>
        Le module développé par WebMétier centralise l'ensemble du suivi client et véhicule au
        même endroit :
      </ArticleP>
      <ArticleList
        items={[
          'Fiches véhicules détaillées, avec immatriculation et carnet d\'entretien',
          'Historique complet des interventions par véhicule',
          'Rappels automatiques de révision et de contrôle technique',
          'Devis en ligne, consultables et validables directement par le client',
          'Suivi des pièces et du stock atelier',
          'Notifications par SMS à chaque étape de la réparation',
        ]}
      />

      <ArticleH2>Un gain de temps pour l'atelier comme pour l'accueil</ArticleH2>
      <ArticleP>
        Quand chaque véhicule a une fiche à jour, l'équipe retrouve immédiatement l'historique
        des interventions passées, sans avoir à rappeler le client pour vérifier une information.
        Les devis en ligne accélèrent aussi la validation côté client, et les notifications
        automatiques réduisent le nombre d'appels pour connaître l'avancement d'une réparation.
      </ArticleP>

      <ArticleH2>Un outil taillé pour votre organisation</ArticleH2>
      <ArticleP>
        Chaque garage a ses spécificités : mécanique générale, carrosserie, entretien rapide.
        Le module s'adapte à votre activité plutôt que l'inverse. Consultez nos{' '}
        <Link to="/modules/" className="text-cyan-400 hover:text-cyan-300">
          modules métier
        </Link>{' '}
        pour en savoir plus, ou{' '}
        <Link to="/contact/" className="text-cyan-400 hover:text-cyan-300">
          échangeons directement
        </Link>{' '}
        sur votre projet.
      </ArticleP>
    </ArticleLayout>
  )
}
