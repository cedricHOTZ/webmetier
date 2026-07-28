import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Seo from './components/Seo'
import Home from './pages/Home'
import Modules from './pages/Modules'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Legal from './pages/legal'
import Sitemap from './pages/Sitemap'
import Blog from './pages/Blog'
import ReservationRestaurant from './pages/blog/ReservationRestaurant'
import PlanningCoiffeur from './pages/blog/PlanningCoiffeur'
import GestionGarage from './pages/blog/GestionGarage'
import NotFound from './pages/NotFound'
import { routes, blogPosts } from './seo.mjs'

const allPages = [...routes, ...blogPosts]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

function RouteSeo() {
  const { pathname } = useLocation()
  const route = allPages.find((r) => r.path === pathname)
  if (!route) {
    return <Seo title="Page introuvable — WebMétier" description="La page demandée n'existe pas." noindex />
  }
  return <Seo title={route.title} description={route.description} />
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/reservation-restaurant-en-ligne" element={<ReservationRestaurant />} />
          <Route path="/blog/planning-rdv-coiffeur" element={<PlanningCoiffeur />} />
          <Route path="/blog/gestion-garage-automobile" element={<GestionGarage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
