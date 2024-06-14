import BannerHome from "../../components/bannerHome";
import MuralSection from "../../components/muralSection";
import bannerluke from "../../assets/bannerluke3.jpg"; // Importa a imagem

const PaginaInicial = () => {
  return (
    <>
      <div className="BannerSpace">
        <BannerHome src={bannerluke} /> {/* Passa a variável importada */}
      </div>
      <div className="MuralSpace">
        <MuralSection />
      </div>
    </>
  );
};

export default PaginaInicial;
