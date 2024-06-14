import styled from "styled-components";
import BannerHome from "../../components/bannerHome";
import DetalheSection from "../../components/detalheSection";
import bannerluke from "../../assets/bannerluke2.jpg";

const DetalheOrganizer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
`;

const PaginaDetalhe = () => {
  return (
    <section>
      <BannerHome src={bannerluke} />
      <DetalheOrganizer>
        <DetalheSection />
      </DetalheOrganizer>
    </section>
  );
};

export default PaginaDetalhe;
