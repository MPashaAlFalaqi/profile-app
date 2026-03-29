import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PashaProfile from './pasha-al-falaqi'
import KrisnaProfile from './krisna-asmara'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pasha-al-falaqi" element={<PashaProfile />} />
        <Route path="/krisna-asmara" element={<KrisnaProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App