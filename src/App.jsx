import Navigation from './components/Navigation/Navigation'
import { Home } from './sections/Home/Home'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Footer } from './sections/Footer/Footer'
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
