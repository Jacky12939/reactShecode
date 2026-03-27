import { useState } from "react";
import Connection from "./Components/Connection";
import { Navbar } from "./Components/Navbar";
import Text from "./Components/Text";
import Button from "./Components/Button";

function App() {
  // State pour savoir quel "page/composant" afficher
  const [activePage, setActivePage] = useState<string>("Accueil");

  const handleLogin = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Navbar links={["Accueil", "Ton message", "Connection", "Button"]} onLinkClick={setActivePage} />

      <div className="p-4">
        {activePage === "Connection" && <Connection onLogin={handleLogin} />}
        {activePage === "Accueil" && <h1 className="text-2xl">Bienvenue sur l’accueil</h1>}
        {activePage === "Ton message" && <Text label="Laisse moi un message "/>}
        {activePage === "Button" && <Button message="Merci bien!" />}
      </div>
    </div>
  );
}

export default App;