// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Connection from "./Components/Connection";
import Text from "./Components/Text";
import Button from "./Components/Button";
import Afficher from "./Components/Afficher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Afficher text="Bienvenue sur la page d'accueil" />,
      },
      {
        path: "message",
        element: <Text label="Laisse-moi un message" />,
      },
      {
        path: "connexion",
        element: <Connection onLogin={(e, p) => console.log(e, p)} />,
      },
      {
        path: "aide",
        element: <Button message="Besoin d'aide ?" />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

