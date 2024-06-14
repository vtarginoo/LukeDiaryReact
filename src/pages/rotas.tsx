import { Navigate, Route, Routes } from "react-router-dom";
import PaginaBase from "./paginaBase";
import PaginaInicial from "./paginaInicial";
import PaginaForm from "./paginaForm";
import PaginaDetalhe from "./paginaDetalhe";

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />
      <Route element={<PaginaBase />}>
        <Route
          path="/home"
          element={<PaginaInicial />}
        />

        <Route
          path="/escreva"
          element={<PaginaForm />}
        />
        <Route
          path="/detalhe/:id"
          element={<PaginaDetalhe />}
        />
      </Route>

      {/* Outras rotas */}
    </Routes>
  );
};

export default Rotas;
