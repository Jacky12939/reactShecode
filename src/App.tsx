
// import { Routes, Route } from "react-router-dom";
// import { Navbar } from "./Components/Navbar";
// import Connection from "./Components/Connection";
// import Text from "./Components/Text";
// import Button from "./Components/Button";
// import Afficher from "./Components/Afficher";

// function App() {

//   const navigationConfig = [
//     { name: "Accueil", path: "/" },
//     { name: "Ton message", path: "/message" },
//     { name: "Connexion", path: "/connexion" },
//     { name: "FAQ", path: "/aide" },
//   ];

//   const handleLogin = (email: string, password: string) => {
//     console.log("Tentative de connexion :", email);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       <Navbar links={navigationConfig} />

//       <main className="p-4">
//         <Routes>
//           <Route path="/" element={<Afficher text="Bienvenue sur la page d'accueil" />} />
//           <Route path="/message" element={<Text label="Laisse-moi un message" />} />
//           <Route path="/connexion" element={<Connection onLogin={handleLogin} />} />
//           <Route path="/aide" element={<Button message="Besoin d'aide ?" />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;




import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

function App() {
  const navigationConfig = [
    { name: "Accueil", path: "/" },
    { name: "Ton message", path: "/message" },
    { name: "Connexion", path: "/connexion" },
    { name: "FAQ", path: "/aide" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar links={navigationConfig} />

      <main className="p-4">
        <Outlet /> 
      </main>
    </div>
  );
}

export default App;


