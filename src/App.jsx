import Header from './layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SectionHero from './layout/SectionHero'
import SectionAbout from './layout/SectionAbout'
import SectionPortfolio from './layout/SectionPortfolio'
import SectionContact from './layout/SectionContact'
import Footer from './layout/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionPortfolio />
      <SectionContact />
      <Footer />
    </div>
  )
}

export default App
