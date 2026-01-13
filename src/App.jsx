import Navigation from './components/Navigation/Navigation'
import { Home } from './sections/Home/Home'
import { Languages } from './sections/Skills/Languages'
import { Projects } from './sections/Projects/Projects'
import { Footer } from './sections/Footer/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Languages />
      <Projects />
      <Footer />
    </>
  )
}

export default App
