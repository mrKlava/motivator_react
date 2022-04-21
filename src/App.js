import './App.scss'
import { About, Header, Sign, Footer} from './containers'
import { Navbar } from './components'
import Button from './UI/button/Button'

function App() {
  return (
    <div className="App">
      <Button className='btn btn_big btn_thr'>button</Button>
      <Navbar />
      <Header />
      <About />
      <Sign />
      <Footer />
    </div>
  )
}

export default App
