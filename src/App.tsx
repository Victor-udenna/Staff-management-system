import Login from "./Components/Pages/Login/Login"
import Signup from "./Components/Pages/Signup/Signup"
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {

  return (
<>
<BrowserRouter>
<Routes>
<Route
path="/"
element={<Login/>
}/>

<Route
path="/signup"
element={<Signup/>
}/>
</Routes>
</BrowserRouter></>
  )
}

export default App
