import { BrowserRouter,Routes,Route } from "react-router-dom";
import Inicio from "../Pages/Inicio/inicio";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}