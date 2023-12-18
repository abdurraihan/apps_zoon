
import { Route, Router, Routes } from 'react-router-dom'
import Login from './component/Login'
import DownloadAppsPage from './component/DownloadAppsPage'


function App() {
  


  return (
    <div>
    <Routes>
    <Route path="/" exact element={<Login></Login>} />
    <Route path="/apps" element={<DownloadAppsPage></DownloadAppsPage>} />
    </Routes>
  </div>
  )
}

export default App
