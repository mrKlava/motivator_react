import { Routes, Route } from "react-router-dom";
import { Landing, Explore, SignIn } from './pages'

import './App.scss'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="explore" element={<Explore />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
