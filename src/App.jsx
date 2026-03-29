import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PashaProfile from './pasha-al-falaqi'
import KrisnaProfile from './krisna-asmara'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pasha-al-falaqi" element={<PashaProfile />} />
<<<<<<< HEAD
        
=======
        <Route path="/krisna-asmara" element={<KrisnaProfile />} />
>>>>>>> origin/dev/krisna-asmara
      </Routes>
    </BrowserRouter>
  )
}

export default App