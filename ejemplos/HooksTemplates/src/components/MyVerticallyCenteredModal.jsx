import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import Usuarios from "../routers/UsuariosRouters";

export default function MyVerticallyCenteredModal({
  nombres,
  _handleClick,
  ...otherProps
}) {
  return (
    <Modal
      {...otherProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          User Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Usuarios data={nombres} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={_handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
