import BannerHome from "../../components/bannerHome";
import MuralSection from "../../components/muralSection";
import bannerluke from "../../assets/bannerluke3.jpg"; // Importa a imagem
import Titulo from "../../components/Titulo/titulo";

const PaginaInicial = () => {
  return (
    <>
      <div className="BannerSpace">
        <BannerHome src={bannerluke} /> {/* Passa a variável importada */}
      </div>
      <Titulo titulo="Mural de Diários:"></Titulo>
      <div className="MuralSpace">
        <MuralSection />
      </div>
    </>
  );
};

export default PaginaInicial;
