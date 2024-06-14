import { IDiario } from "../interfaces/IDiario";
import api from "./api";

export async function getDiarios(): Promise<IDiario[]> {
  const response = await api.get(""); // GET na mesma URL base
  return response.data;
}

export async function postDiario(novoDiario: IDiario): Promise<IDiario> {
  const response = await api.post("", novoDiario); // POST na mesma URL base
  return response.data;
}

export async function getDiarioById(id: string): Promise<IDiario> {
  // Altere o tipo de id para string
  const response = await api.get(`/${id}`); // GET para /diarios/:id
  return response.data;
}
