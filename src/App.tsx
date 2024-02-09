import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RoutePaths from './routes'
import './App.scss'
import { Suspense, lazy } from 'react'
import Loader from './Components/Organism/Loader/Loader'

const Login = lazy(() => import('./Components/Pages/Login/Login'))
const Signup = lazy(() => import('./Components/Pages/Signup/Signup'))
const PrivateRoute = lazy(() => import('./Config/PrivateRoute'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
              path="*"
              element={
                <PrivateRoute>
                  <RoutePaths />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

// `npm run dev -- --host or npm run start -- --host`
