import "./CartWidget.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
  const {totalCount} = useContext(CartContext);

  return (
  
  <div className="d-flex flex-row">
  <Badge badgeContent={totalCount} color="primary">
    <ShoppingCartIcon/>
  </Badge>
     
    </div>
  );
};
export default CartWidget;