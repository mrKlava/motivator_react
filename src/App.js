import './App.scss'
import { About, Header, Sign, Footer} from './containers'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Sign />
      <Footer />
    </div>
  )
}

export default App
