
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClimaReq from './components/ClimaReq/ClimaReq'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClimaReq/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
