import { Card, Rate, Space, Typography } from "antd";
import { useEffect, useState } from "react";

import { getDiarioById } from "../../http/diarioService";
import { useParams } from "react-router-dom";
import { IDiario } from "../../interfaces/IDiario";
import { SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const CardContainer = styled.section`
  padding: 20px;
`;

export const DataContainer = styled.div`
  //21PX
  font-size: 1.3rem;
  text-align: center;
`;

export const TituloContainer = styled(Typography.Title)`
  //26PX
  && {
    text-align: center;
    font-size: 1.6rem;
  }
`;

const StyledRate = styled(Rate)`
  display: flex; /* Garante que o Rate seja um flex container */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

const DetalheSection: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Tipando o useParams
  const [diario, setDiario] = useState<IDiario | null>(null);

  useEffect(() => {
    const fetchDiario = async () => {
      try {
        if (id) {
          console.log(id);
          // Verifica se o id existe
          const diarioData = await getDiarioById(id);
          setDiario(diarioData);
        }
      } catch (error) {
        console.error("Erro ao buscar diário:", error);
      }
    };

    fetchDiario();
  }, [id]);
  if (!diario) {
    return <div>Carregando...</div>;
  }

  return (
    <CardContainer>
      <Card
        title={
          <>
            <DataContainer>{diario.data}</DataContainer>
            <TituloContainer>{diario.titulo}</TituloContainer>
          </>
        }
        style={{ width: 500 }}
      >
        <Space
          direction="vertical"
          size="large"
        >
          <Typography.Paragraph>{diario.conteudo}</Typography.Paragraph>
          <StyledRate
            character={<SmileOutlined />}
            value={diario.humor}
            disabled
          />
        </Space>
      </Card>
    </CardContainer>
  );
};

export default DetalheSection;
