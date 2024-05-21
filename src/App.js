import Navbar from "./components/Navbar";
import Acceuil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import Produits from "./components/Produits";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Acceuil />
      <Apropos />
      <Produits />
      <Contact />
    </div>
  );
}

export default App;
