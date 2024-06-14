import { Affix, Layout } from "antd";

import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #533a22;
  overflow-y: auto;
`;

const StyledHeader = styled(Navbar)`
  padding: 0rem;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 1000;
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

const PaginaBase = () => {
  return (
    <StyledLayout>
      <Affix offsetTop={0}>
        <StyledHeader />
      </Affix>
      <div>
        <Outlet />
      </div>
      <Footer />
    </StyledLayout>
  );
};

export default PaginaBase;
