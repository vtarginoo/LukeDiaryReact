import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const CardTitle = styled(Title)`
  margin-bottom: 1.25rem;
  color: #f5e9c9;
  font-weight: bold;
  text-decoration: underline;

  // Optional specificity (as explained before)
  && {
    color: #f5e9c9 !important;
    font-weight: bold !important;
  }
`;

interface TituloProps {
  titulo: string;
}

const Titulo: React.FC<TituloProps> = ({ titulo }) => {
  return <CardTitle>{titulo}</CardTitle>; // Removed level attribute
};

export default Titulo;
