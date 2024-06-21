import {
  Form,
  Input,
  DatePicker,
  Button,
  Rate,
  Card,
  Col,
  Row,
  message,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useState } from "react";
import { IDiario } from "../../interfaces/IDiario";
import styled from "styled-components";
import { postDiario } from "../../http/diarioService";

export const CardContainer = styled.section`
  padding: 20px;
`;

const FormCard = styled(Card)`
  align-items: center;
  padding: 1rem;
`;

const SubmitButton = styled(Button)`
  background-color: #533a22;
  font-weight: bold;
  color: black;

  &:hover {
    background-color: #f5e9c9 !important;
    color: black !important;
    font-weight: bold;
  }
`;

const DiarioForm = () => {
  const [form] = Form.useForm();
  const [resumo, setResumo] = useState("");
  const [diarios, setDiarios] = useState<IDiario[]>([]); // Estado para os diários

  const onFinish = async (values: IDiario) => {
    const novoDiario: IDiario = {
      id: Math.random().toString(36).substr(2, 9), // Gera um ID único com base no timestamp
      titulo: values.titulo,
      conteudo: values.conteudo,
      resumo: resumo || values.conteudo.slice(0, 100),
      data: dayjs(values.data).format("YYYY-MM-DD"),
      humor: values.humor,
    };

    try {
      const response = await postDiario(novoDiario);
      setDiarios([...diarios, response]); // Adiciona o novo diário à lista
      form.resetFields(); // Limpa o formulário
      setResumo(""); // Limpa o resumo
      message.success("Diário salvo com sucesso!"); // Mensagem de sucesso
    } catch (error) {
      console.error("Erro ao salvar o diário:", error);
      message.error("Erro ao salvar o diário."); // Mensagem de erro
    }
  };

  return (
    <CardContainer>
      <FormCard title="Novo Diário">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={18}>
              <Form.Item
                label="Título"
                name="titulo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Data"
                name="data"
                rules={[{ required: true }]}
              >
                <DatePicker
                  defaultValue={dayjs()}
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Humor"
            name="humor"
          >
            <Rate character={<SmileOutlined />} />
          </Form.Item>

          <Form.Item
            label="Conteúdo"
            name="conteudo"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={4}
              onChange={(e) => setResumo(e.target.value.slice(0, 100))}
            />
          </Form.Item>

          <Form.Item>
            <SubmitButton
              type="primary"
              htmlType="submit"
            >
              Salvar
            </SubmitButton>
          </Form.Item>
        </Form>
      </FormCard>
    </CardContainer>
  );
};

export default DiarioForm;
