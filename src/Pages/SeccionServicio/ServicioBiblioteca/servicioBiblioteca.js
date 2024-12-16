import React from "react";
import "./servicioBiblioteca.css";
export default function ServicioBiblioteca() {
  return (
    <div className="servicio-biblioteca">
      <h2>SERVICIOS BIBLIOTECARIOS</h2>
      <div className="servicio-biblioteca-texto">
        <ol>
          <li>
            Préstamos internos bibliográficos y audiovisuales con estantería
            abierta.
          </li>
          <li>
            <a
              href="http://gomezmorin.queretaro.gob.mx/assets/prestamos.pdf"
              className="servicio-biblioteca-vinculo"
            >
              Préstamo bibliográfico a domicilio (límite tres libros).
            </a>
          </li>
          <li>Servicio de consulta y orientación a los usuarios.</li>
          <li>Programa de animación a la lectura y escritura.</li>
          <li>Material Braille.</li>
          <li>
            Módulo de Servicios Digitales (MSD) y enciclopedias digitales.
          </li>
          <li>Sala de lectura general e informal.</li>
          <li>Audiovisuales (videoteca y audioteca).</li>
        </ol>
        <p className="servicio-biblioteca-texto-marcado">
          REQUISITOS PARA TRAMITAR TU REGISTRO COMO USUARIO DE LA BIBLIOTECA
          PÚBLICA CENTRAL ESTATAL "FRANCISCO CERVANTES"
        </p>
        <p>
          El usuario deberá registrarse para tener derecho a los servicios que
          ofrece la biblioteca como son: apartado de libros y préstamo a
          domicilio del acervo bibliográfico, así como para el uso de nuestra
          área de Cómputo. Requisitos:
        </p>
        <p>
          Si el trámite es de manera presencial deberá presentar original y
          copia.
        </p>
        <ul className="servicio-biblioteca-lista">
          <li>
            Comprobante de domicilio vigente, con fecha máxima de 2 meses de
            antigüedad. (Recibo de luz, agua, teléfono fijo o predial)
          </li>
          <li>Identificación (Credencial del INE o INAPAM, o Pasaporte).</li>
          <li>CURP.</li>
          <li>
            Deberá contar con una Referencia mismo que a su vez tendrá que
            presentar la misma documentación
          </li>
        </ul>
        <p>
          Nota: En el caso de menores de edad, el trámite lo deberá realizar la
          madre, padre o tutor. El formato deberá llenarse proporcionando los
          datos del menor y en este caso los datos de la referencia serán de los
          padres o del tutor.
        </p>
        <p>
          Su referencia debe vivir en Ciudad de Querétaro, pero no en el mismo
          domicilio que el solicitante. La vigencia de su registro es por dos
          años. Podrá renovar inmediatamente una vez terminado el plazo. El
          registro lo puedes realizar de manera presencial acudiendo a la
          Biblioteca Pública Central Estatal en el mostrador de atención al
          usuario o de manera digital
        </p>
        <p className="servicio-biblioteca-texto-marcado">
          IMPORTANTE CONSIDERAR
        </p>
        <ol>
          <li>La credencial es personal, gratuita e intransferible .</li>
          <li>
            La credencial tiene una vigencia de 2 años. Al vencimiento se deberá
            realizar nuevamente todo el trámite, conservando el mismo número de
            usuario.
          </li>
          <li>
            La credencial tramitada se entregará en un máximo de 4 días hábiles
            después de su solicitud.
          </li>
          <li>
            Las credenciales estarán a su disposición por un lapso de 30 días,
            en caso de no ser reclamadas serán dadas de baja.
          </li>
          <li>
            Al interesado se le entregará durante su trámite, el reglamento
            general de los servicios bibliotecarios correspondiente.
          </li>
          <li>
            El usuario deberá presentar su credencial enmicada para poder
            tramitar su segundo préstamo.
          </li>
        </ol>
        <p className="servicio-biblioteca-texto-marcado">
          Nota importante: Los datos proporcionados por los interesados, serán
          estrictamente confidenciales en términos de la ley aplicable.
        </p>
      </div>
    </div>
  );
}
