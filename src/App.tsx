
import './App.css'
import Header from './component/header/Hearder'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/Home';
import MoviePage from './pages/movie/Movie';
import RootPage from './Root/Root';
import ErrorPage from './pages/error/Error';
import PersonPage from './pages/person/Person';
import ActorPage from './pages/actor/Actor';



const routers = createBrowserRouter(
	[
    { path: "/", element: <RootPage />,
    children : [
      { path: "/", element: <HomePage /> },
      { path: "/movie", element: <MoviePage /> },
      { path: "/person", element:<PersonPage />},
      { path: "/actor", element:<ActorPage />},
    ],
    errorElement: <ErrorPage/>
  },
	]
);

function App() {


  return (
    <>
      <Header />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
