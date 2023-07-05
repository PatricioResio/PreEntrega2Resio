import "./CartWidget.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const totalQuantity = (1);

  return (
    <div className="d-flex flex-row">
  <Badge badgeContent={totalQuantity} color="primary">
    <ShoppingCartIcon/>
  </Badge>
     
    </div>
  );
};
export default CartWidget;