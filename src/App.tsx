import Login from "./Components/Pages/Login/Login"
import Signup from "./Components/Pages/Signup/Signup"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from "./Components/Pages/Dashboard/Dashboard";


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

<Route
path="/dashboard"
element={<Dashboard/>
}/>
</Routes>
</BrowserRouter></>
  )
}

export default App
