import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Home'
import PashaProfile from './pasha-al-falaqi'
import KrisnaProfile from './krisna-asmara'
import AkmalProfile from './afifudin-akmal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pasha-al-falaqi" element={<PashaProfile />} />
        <Route path="/krisna-asmara" element={<KrisnaProfile />} />
        <Route path="/afifudin-akmal" element={<AkmalProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App