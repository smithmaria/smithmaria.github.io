import Navigation from './components/Navigation'
import { Home } from './components/sections/Home'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/sections/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
