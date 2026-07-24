import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Modules from './pages/Modules'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Legal from './pages/legal'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'modules':
        return <Modules setCurrentPage={setCurrentPage} />
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />
      case 'legal':
        return <Legal setCurrentPage={setCurrentPage} />
        default:
        return <Home setCurrentPage={setCurrentPage} />

    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}
