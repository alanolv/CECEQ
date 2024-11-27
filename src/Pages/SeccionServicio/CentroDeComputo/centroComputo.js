import React from "react";
import "./centroComputo.css";

export default function CentroComputo() {
  return (
    <div className="centro-computo">
      <h2>Centro de Computo</h2>
      <div className="centro-computo-texto">
        <p>
          Esta área cuenta con 122 computadoras conectadas a Internet que se
          facilitan en préstamo a quienes estén inscritos como usuarios. Además,
          se ofrece orientación en ofimática y navegación web para realizar
          trabajos escolares o de investigación.
        </p>
        <p>
          Contamos también con Internet inalámbrica para aquellas personas que
          prefieran trabajar en sus laptops o dispositivos móviles. Este
          servicio se encuentra en todo el CECEQ. Adicionalmente, tenemos cursos
          gratuitos de Informática Básica, con los que se adquieren los
          conocimientos necesarios para el trabajo y otras actividades. Para los
          cursos se tienen destinadas 3 aulas, dos con 25 y otra con 18
          computadoras.
        </p>
        <p className="centro-computo-texto-marcado">
          Recuerda: Las instalaciones son tuyas, haz buen uso de ellas.
        </p>
      </div>
      <h2>REQUISITOS PARA SER USUARIO</h2>
      <div className="centro-computo-texto">
        <p className="centro-computo-texto-marcado">Para mayores de 18 años:</p>
        <ol>
          <li>
            Copia de identificación oficial: únicamente credencial de elector,
            Instituto Nacional de las Personas Adultas Mayores (INAPAM),
            pasaporte, cédula profesional o licencia para conducir (registrado
            en la ciudad de Querétaro o su área metropolitana).
          </li>
          <li>
            Copia de comprobante de domicilio vigente (máximo 2 meses de
            antigüedad).
          </li>
          <li>Una fotografía tamaño infantil.</li>
        </ol>
        <p className="centro-computo-texto-marcado">
          Para jóvenes de 13 a 17 años:
        </p>
        <ol>
          <li>
            Copia de identificación vigente (credencial de estudiante, del
            Instituto Mexicano del Seguro Social (IMSS), Instituto de Seguridad
            y Servicios Sociales de los Trabajadores del Estado (ISSSTE),
            etcétera).
          </li>
          <li>
            Copia de identificación oficial de padre, madre o tutor mayor de 18
            años.
          </li>
          <li>
            Copia de comprobante de domicilio vigente (máximo 2 meses de
            antigüedad).
          </li>
          <li>Una fotografía tamaño infantil.</li>
        </ol>
        <p className="centro-computo-texto-marcado">
          Es necesario en ambos casos:
        </p>
        <ol>
          <li>
            Llenar un formato al momento de entregar los documentos, con lo cual
            se le asigna un número de usuario que tiene una vigencia de un año a
            partir de la fecha en que se realiza el trámite.
          </li>
          <li>
            Tomarse una fotografía al momento del registro para el sistema de
            usuarios.
          </li>
        </ol>
      </div>
      <h2>Servicios</h2>
      <div className="centro-computo-texto">
        <ol>
          <li>
            Acceso al uso de equipo de cómputo, registrando su número de usuario
            en el mostrador de recepción.
          </li>
          <li>
            Acceso a Internet y Microsoft Office (Word, Excel, PowerPoint).
          </li>
          <li>Internet Inalámbrica.</li>
          <li>
            Área para usuarios que requieren trabajar con sus propias
            computadoras portátiles o dispositivos móviles.
          </li>
          <li>Orientación a usuarios registrados con problemas técnicos.</li>
          <li>Informes e inscripciones a cursos gratuitos de computación.</li>
        </ol>
        <p className="centro-computo-texto-marcado">
          Nota: Es indispensable presentar número de usuario para recibir los
          servicios.
        </p>
      </div>
      <h2>ÁREA INFANTIL</h2>
      <div className="centro-computo-texto">
        <p>
          El área para niños de 5 a 12 años tiene 108 computadoras con software
          didáctico, que  de acuerdo a la edad del niño, éste podrá acceder de
          una manera divertida a aprender sobre diversas temáticas educativas y
          culturales, que apoyan a su desarrollo integral.
        </p>
        <p>
          Se ofrece apoyo técnico para elaborar trabajos escolares e
          investigaciones en Internet. En este lugar se reciben visitas
          escolares para acercar a los niños a estas herramientas de software.
        </p>
        <h3>INSCRIPCIÓN A LOS CURSOS</h3>
        <p>
          Al igual que en el Área de Adultos, se ofrecen cursos diseñados
          especialmente para los niños, brindando la posibilidad de acrecentar
          su nivel de conocimientos en materia de cómputo.
        </p>
        <h3>REQUISITOS:</h3>
        <ol>
          <li>
          Sólo presentarse en la recepción de la red central de informática niños, y pedir al encargado que anote al niño en el curso requerido.
          </li>
          <li>
          La edad permitida para los cursos del área infantil es mayor de 7 años y que sea menor de los 12 años.
          </li>
        </ol>
      </div>
    </div>
  );
}
