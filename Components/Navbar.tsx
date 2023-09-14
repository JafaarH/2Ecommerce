import { Badge, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import {useContext} from "react"
import { ShopContext } from "../Context/Context";


const Header =() => {
const {products} = useContext(ShopContext)

    return (
        <Navbar className="bg-body-tertiary" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="link">
                Shopping cart
            </Link>
          </Navbar.Brand>
          <Link to="/cart" className="cart">
            <AiOutlineShoppingCart style={{fontSize: 25}}  />
            <Badge className="badge">
                {products.length}
            </Badge>
          </Link>
        </Container>
      </Navbar>
    )
}
export default Header;