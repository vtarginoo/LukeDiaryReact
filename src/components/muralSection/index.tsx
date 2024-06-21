import { Typography, Card, Rate, Space, Col, Row } from "antd";
import styled from "styled-components";
import { IDiario } from "../../interfaces/IDiario";
import { useEffect, useState } from "react";
import { getDiarios } from "../../http/diarioService";
import { SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const MuralSectionContainer = styled.section`
  padding: 1.25rem;
`;

const CardTitle = styled(Title)`
  margin-bottom: 1.25rem;
  color: #f5e9c9 !important;
  font-weight: bold !important;
  text-decoration: underline;
`;

const DataContainer = styled.div`
  font-size: 0.75rem; // Diminui o tamanho da fonte da data
  text-align: center;
  margin-bottom: 1rem;
`;

const TituloContainer = styled(Typography.Title)`
  && {
    text-align: center;
    font-size: 1.2rem; // Aumenta o tamanho da fonte do título
  }
`;

const ResumoContainer = styled.p`
  height: 3em; /* Altura fixa para o resumo */
  overflow: hidden;
`;

const StyledCardGrid = styled(Card.Grid)`
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100% !important;
  margin: 0;

  &:hover {
    transform: translateY(-2px);
  }
`;

const MuralSection: React.FC = () => {
  const [diarios, setDiarios] = useState<IDiario[]>([]); // Use a interface IDiario
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiarios = async () => {
      try {
        const diariosData = await getDiarios();
        setDiarios(diariosData);
      } catch (error) {
        console.error("Erro ao buscar diários:", error);
      }
    };

    fetchDiarios();
  }, []); // Executa apenas uma vez quando o componente é montado

  const handleCardClick = (diarioId: string) => {
    navigate(`/detalhe/${diarioId}`);
  };

  return (
    <MuralSectionContainer>
      <CardTitle level={2}>Mural de Diários:</CardTitle>

      <Card title="Relembre o seu dia clicando em um dos cards!">
        <Row>
          {diarios.map((diario) => (
            <Col
              span={6}
              key={diario.id}
            >
              <StyledCardGrid
                hoverable
                onClick={() => handleCardClick(diario.id)}
              >
                <Card>
                  <DataContainer>{diario.data}</DataContainer>
                  <TituloContainer level={3}>{diario.titulo}</TituloContainer>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: "100%" }}
                  >
                    <ResumoContainer>{diario.resumo}</ResumoContainer>
                    <Rate
                      character={<SmileOutlined />}
                      value={diario.humor}
                      disabled
                    />
                  </Space>
                </Card>
              </StyledCardGrid>
            </Col>
          ))}
        </Row>
      </Card>
    </MuralSectionContainer>
  );
};

export default MuralSection;
