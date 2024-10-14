import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from "../Pages/Inicio/inicio";
import Layout from "../LayoutInicio/layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Inicio/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}