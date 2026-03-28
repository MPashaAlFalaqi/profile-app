import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PashaProfile from './pasha-al-falaqi'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pasha-al-falaqi" element={<PashaProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App