import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "../Layout/LayoutInicio/layout";
import {Inicio, Bienvenida, Directorio, HorarioAtencion, MarcoJuridico, Nosotros} from "../Pages/SeccionInicio/ExportPagesInicio/exportPagesInicio";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        //Rutas de la seccion de inicio
        // Ruta de acceso a la pagina de inicio
        <Route path="/" element={<Layout><Inicio/></Layout>}/>
        // Ruta de acceso a la pagina de bienvenida
        <Route path="/Bienvenida" element={<Layout><Bienvenida/></Layout>}/>
        //Ruta de acceso a la pagina de Directorio
        <Route path="/Directorio" element={<Layout><Directorio/></Layout>}/>
        //Ruta de acceso a la pagina de HorarioAtencion
        <Route path="/HorarioAtencion" element={<Layout><HorarioAtencion/></Layout>}/>
        //Ruta de acceso a la pagina de MarcoJuridico
        <Route path="/MarcoJuridico" element={<Layout><MarcoJuridico/></Layout>}/>
        //Ruta de acceso a la pagina de Nosotros
        <Route path="/Nosotros" element={<Layout><Nosotros/></Layout>}/>

      </Routes>
    </BrowserRouter>
  );
}