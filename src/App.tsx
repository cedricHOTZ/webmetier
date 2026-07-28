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
import { routes } from './seo.mjs'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

function RouteSeo() {
  const { pathname } = useLocation()
  const route = routes.find((r) => r.path === pathname) ?? routes[0]
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
