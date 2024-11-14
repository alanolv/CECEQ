import { BrowserRouter,Routes,Route } from "react-router-dom";
//import de la plantilla de la pagina
import Layout from "../Layout/LayoutInicio/layout";
//import de las paginas 
import *  as Pagina from "../sources/utilities/ExportPages/exportPages"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        //Rutas de la seccion de inicio//
        // Ruta de acceso a la pagina de inicio
        <Route path="/" element={<Layout><Pagina.Inicio/></Layout>}/>
        // Ruta de acceso a la pagina de bienvenida
        <Route path="/Bienvenida" element={<Layout><Pagina.Bienvenida/></Layout>}/>
        //Ruta de acceso a la pagina de Directorio
        <Route path="/Directorio" element={<Layout><Pagina.Directorio/></Layout>}/>
        //Ruta de acceso a la pagina de HorarioAtencion
        <Route path="/HorarioAtencion" element={<Layout><Pagina.HorarioAtencion/></Layout>}/>
        //Ruta de acceso a la pagina de MarcoJuridico
        <Route path="/MarcoJuridico" element={<Layout><Pagina.MarcoJuridico/></Layout>}/>
        //Ruta de acceso a la pagina de Nosotros
        <Route path="/Nosotros" element={<Layout><Pagina.Nosotros/></Layout>}/>

        //Rutas de la seccion de Servicios//

        // Ruta de acceso a la pagina de Biblioteca
        <Route path="/Biblioteca" element={<Layout><Pagina.Biblioteca/></Layout>}/>
        //Ruta de acceso a la pagina de Centro de computo        
        <Route path="/CentroComputo" element={<Layout><Pagina.CentroComputo/></Layout>}/>
        //Ruta de acceso a la pagina de Talleres
        <Route path="/Talleres" element={<Layout><Pagina.Talleres/></Layout>}/>
        //Ruta de acceso a la pagina de Instalaciones
        <Route path="/Instalaciones" element={<Layout><Pagina.Instalaciones/></Layout>}/>
        //Ruta de acceso a la pagina de Sitios de interes
        <Route path="/SitiosInteres" element={<Layout><Pagina.SitiosInteres/></Layout>}/>
        //Ruta de acceso a la pagina de Visitas
        <Route path="/Visitas" element={<Layout><Pagina.Visitas/></Layout>}/>

        //Rutas de la seccion de Comunicacion//
        //Ruta de acceso a la pagina de Centro de computo        
        <Route path="/Boletines" element={<Layout><Pagina.Boletines/></Layout>}/>
        //Ruta de acceso a la pagina de Talleres
        <Route path="/Triptico" element={<Layout><Pagina.Triptico/></Layout>}/>
        //Ruta de acceso a la pagina de Instalaciones
        <Route path="/EjeRadio" element={<Layout><Pagina.EjeRadio/></Layout>}/>

        //Rutas de la seccion de Dependencias//
        //Ruta de acceso a la pagina de Dependencias        
        <Route path="/Dependencias" element={<Layout><Pagina.Dependencias/></Layout>}/>

      </Routes>
    </BrowserRouter>
  );
}