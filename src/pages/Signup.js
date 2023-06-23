import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import logo from "../sources/img/logo3.png";
import "../sources/signup.css";

const Signup = () => {
  const [showModal, setShowModal] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleAccept = () => {
    setShowModal(false);
    setShowForm(true);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="form-container">
      {showModal ? (
        <Modal centered show={showModal} onHide={() => setShowModal(true)}>
          <Modal.Header>
            <Modal.Title>Políticas de Tratamiento de Datos</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "justify" }}>
            Al aceptar esta política, el usuario otorga su consentimiento libre
            y expreso para el uso de sus datos personales de acuerdo con la
            legislación colombiana vigente. Los datos suministrados serán
            utilizados con el fin de gestionar la relación con el usuario,
            realizar estudios estadísticos, enviar información sobre nuestras
            propuestas y cumpliendo con obligaciones legales. Se implementarán
            medidas de seguridad para proteger la información y se respetarán
            los derechos del usuario, incluyendo acceso, rectificación,
            cancelación y oposición. En caso necesario, los datos podrán ser
            transferidos a terceros de forma confidencial. Los datos serán
            conservados por el tiempo necesario.El usuario puede comunicarse con
            correodecontactp@gmail.com para ejercer sus derechos o realizar
            consultas. Al aceptar esta política, el usuario manifiesta su
            entendimiento y consentimiento para el tratamiento de sus datos
            personales según lo establecido.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" href="/">
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleAccept}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <form
          className="w3-container w3-card-4 w3-light-grey"
          id="formReg"
          onKeyPress={handleKeyPress}
        >
          <br />
          <div className="form-header">
            <img src={logo} alt="Logo" className="logo" />
            <span>
              <b>
                "En Puerto Colombia habrá otra alternativa para decidir
                inteligente y libremente"
              </b>
            </span>
          </div>
          <h4>Inscribete y se parte del cambio.</h4>
          <br />
          <p>
            <label>Nombres</label>
            <input
              className="w3-input w3-border"
              name="fname"
              type="text"
              id="fname"
              placeholder="Ingrese nombre completo"
            />
          </p>
          <p>
            <label>Apellidos</label>
            <input
              className="w3-input w3-border"
              name="lname"
              type="text"
              id="lname"
              placeholder="Ingrese apellidos"
            />
          </p>
          <p>
            <label>Sexo</label>
            <select className="w3-select w3-border" name="sex" id="sex">
              <option value="" disabled selected>
                Seleccione una opción
              </option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="N">No especifica</option>
            </select>
          </p>
          <p>
            <label>Numero de identificacion</label>
            <input
              className="w3-input w3-border"
              name="nid"
              type="text"
              id="celular"
              placeholder="Ingrese numero de Identifiacion"
            />
          </p>
          <p>
            <label>Celular</label>
            <input
              className="w3-input w3-border"
              name="celular"
              type="text"
              id="celular"
              placeholder="Ingrese numero de celular"
            />
          </p>
          <p>
            <label>Email</label>
            <input
              className="w3-input w3-border"
              name="email"
              type="text"
              id="email"
              placeholder="Ingrese mail"
            />
          </p>
          <p>
            <label>Direccion</label>
            <input
              className="w3-input w3-border"
              name="address"
              type="text"
              id="address"
              placeholder="Ingrese Direccion"
            />
          </p>
          <p>
            <label>Barrio</label>
            <select className="w3-select w3-border" name="barrio" id="barrio">
              <option value="" disabled selected>
                Seleccione una opción
              </option>
              <option value="Ancla">Ancla</option>
              <option value="Altos de Cupino">Altos de Cupino</option>
              <option value="Aurora">Aurora</option>
              <option value="Bello Mar">Bello Mar</option>
              <option value="Brisas de Puerto">Brisas de puerto</option>
              <option value="Centro 1">Centro 1</option>
              <option value="Centro 2">Centro 2</option>
              <option value="Colinas del Sol">Colinas del sol</option>
              <option value="Costa Azul">Costa Azul</option>
              <option value="El Carmen">El Carmen</option>
              <option value="El Corso">El Corso</option>
              <option value="Las Americas">Las Americas</option>
              <option value="Loma de Oro">Loma de Oro</option>
              <option value="Loma Fresca">Loma Fresca</option>
              <option value="Mar Azul">Mar Azul</option>
              <option value="las Margaritas">Las Margaritas</option>
              <option value="Miramar">Miramar</option>
              <option value="Muelle">Muelle</option>
              <option value="Norte 1">Norte 1</option>
              <option value="Norte 2">Norte 2</option>
              <option value="Nuevo Horizonte">Nuevo Horizonte</option>
              <option value="Pastrana">Pastrana</option>
              <option value="Pradomar">Pradomar</option>
              <option value="Punta Brava">Punta Brava</option>
              <option value="Risota">Risota</option>
              <option value="San Carlos">San Carlos</option>
              <option value="Union Paraiso">Union Paraiso</option>
              <option value="Urba Terminal">Urba Terminal</option>
              <option value="Victoria">Victoria</option>
              <option value="Villa Encanto">Villa Encanto</option>
              <option value="Villa de Rosario">Villa de Rosario</option>
              <option value="Vistamar">Vistamar</option>
              <option value="Punta Roca">Punta Roca</option>
              <option value="Sabanilla">Sabanilla</option>
              <option value="Sabanilla">Sabanilla</option>
              <option value="Salgar">Salgar</option>
            </select>
          </p>
          <p>
            <label>Has pertenecido a un grupo político, ¿cuál?</label>
            <input
              className="w3-input w3-border"
              name="pgrup"
              type="text"
              id="psw"
              placeholder="Reingrese password"
            />
          </p>
          <p />
          <br />
          <input
            type="button"
            className="w3-btn w3-blue-grey"
            value="Enviar"
            onClick={handleSubmit}
          />
        </form>
      )}
    </div>
  );
};

export default Signup;
