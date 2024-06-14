import DiarioForm from "../../components/DiarioForm";
import BannerHome from "../../components/bannerHome";
import bannerluke1 from "../../assets/bannerluke1.jpg";

const PaginaForm = () => {
  return (
    <section className="FormOrganizer">
      <BannerHome src={bannerluke1} />
      <DiarioForm></DiarioForm>
    </section>
  );
};

export default PaginaForm;
