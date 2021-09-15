import { Badge } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export default function MyButton({ _handleSelectFromButton, nombres }) {
  return (
    // <Image
    //   onClick={(event) => _handleSelectFromButton(event)}
    //   value="miValor"
    //   id="carrito"
    //   src="https://picsum.photos/40/40?random=1"
    //   roundedCircle
    // />

    <section>
      <ShoppingCartOutlinedIcon
        value="miValor"
        id="Carrito"
        onClick={(event) => _handleSelectFromButton(event)}
        style={{ color: "white" }}
        fontSize="large"
      />
      <Badge pill bg="danger">
        {nombres.length}
      </Badge>
    </section>
  );
}
