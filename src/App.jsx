import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Qualita from './pages/Qualita'
import Contatti from './pages/Contatti'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="prodotti" element={<Prodotti />} />
          <Route path="qualita" element={<Qualita />} />
          <Route path="contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
