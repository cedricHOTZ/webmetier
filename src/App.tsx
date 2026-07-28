import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Seo from './components/Seo'
import { routes, blogPosts } from './seo.mjs'

const Home = lazy(() => import('./pages/Home'))
const Modules = lazy(() => import('./pages/Modules'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/legal'))
const Sitemap = lazy(() => import('./pages/Sitemap'))
const Blog = lazy(() => import('./pages/Blog'))
const ReservationRestaurant = lazy(() => import('./pages/blog/ReservationRestaurant'))
const PlanningCoiffeur = lazy(() => import('./pages/blog/PlanningCoiffeur'))
const GestionGarage = lazy(() => import('./pages/blog/GestionGarage'))
const PourquoiSiteInternet = lazy(() => import('./pages/blog/PourquoiSiteInternet'))
const CeQueWebMetierApporte = lazy(() => import('./pages/blog/CeQueWebMetierApporte'))
const NotFound = lazy(() => import('./pages/NotFound'))

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

function PageFallback() {
  return <div className="min-h-screen bg-slate-950" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <main>
        <Suspense fallback={<PageFallback />}>
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
            <Route path="/blog/pourquoi-avoir-un-site-internet" element={<PourquoiSiteInternet />} />
            <Route path="/blog/ce-que-webmetier-vous-apporte" element={<CeQueWebMetierApporte />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
