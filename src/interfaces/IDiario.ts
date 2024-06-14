export interface IDiario {
  id: string;
  titulo: string;
  conteudo: string;
  resumo?: string | undefined;
  data: string;
  humor: number; // Ou outro tipo adequado para representar o humor
}
