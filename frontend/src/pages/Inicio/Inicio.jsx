import Hero from "../../components/Hero/Hero";
import Destacados from "../../components/Destacados/Destacados";
import SeccionInfo from "../../components/SeccionInfo/SeccionInfo";
import "./Inicio.css";


const Inicio = () => {
  return (
    <main className="pagina-inicio">
      <Hero />
      <Destacados />
      <SeccionInfo />

    </main>
  );
};

export default Inicio;