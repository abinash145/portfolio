import Header from './layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SectionHero from './layout/SectionHero'
import SectionAbout from './layout/SectionAbout'
import SectionPortfolio from './layout/SectionPortfolio'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SectionHero />
        <SectionAbout />
      </BrowserRouter>
      <SectionPortfolio />
    </div>
  )
}

export default App
