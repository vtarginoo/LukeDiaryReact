import DiarioForm from "../../components/DiarioForm";
import BannerHome from "../../components/bannerHome";
import bannerluke1 from "../../assets/bannerluke1.jpg";
import Titulo from "../../components/Titulo/titulo";

const PaginaForm = () => {
  return (
    <section className="FormOrganizer">
      <BannerHome src={bannerluke1} />
      <Titulo titulo="Escrever diário:"></Titulo>
      <DiarioForm></DiarioForm>
    </section>
  );
};

export default PaginaForm;
