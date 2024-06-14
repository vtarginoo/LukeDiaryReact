import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import logo from "../../assets/logoluke.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f5e9c9;
`;

const Logo = styled.img`
  height: 40px;
`;

const StyledMenu = styled(Menu)`
  background-color: transparent;

  .ant-menu-item-selected .ant-menu-item-icon {
    color: #533a22 !important;
  }

  /* Letra no item selecionado */
  .ant-menu-item-selected {
    color: #533a22 !important;
  }

  /* Barra inferior no hover */
  .ant-menu-item-active::after {
    border-bottom: 2px solid #533a22 !important; /* Cor e espessura da barra */
  }

  /* Barra inferior no item selecionado */
  .ant-menu-item-selected::after {
    border-bottom: 2px solid #533a22 !important; /* Cor e espessura da barra */
  }
`;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Página Inicial",
    key: "firstPage",
    icon: <SettingOutlined />,
  },
  {
    label: "Escreva novo diário",
    key: "WritePage",
    icon: <SettingOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("firstPage");

  const navigate = useNavigate(); // Hook para navegar entre as rotas

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);

    if (e.key === "firstPage") {
      navigate("/home"); // Navega para /home
    } else if (e.key === "WritePage") {
      navigate("/escreva"); // Navega para /escreva
    }
  };

  return (
    <HeaderContainer>
      <Logo
        src={logo}
        alt="Logo"
      />

      <StyledMenu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </HeaderContainer>
  );
};

export default Navbar;
