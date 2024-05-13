import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.css';


 function Menu() {
     return (
<Navbar appearance='inverse'>
    <Navbar.Brand  href="#">Espaço Familia & Pets</Navbar.Brand>
    <Nav>
      <Nav.Item href="/">Home</Nav.Item>
      <Nav.Item href="/Pesquisa">Pesquisa</Nav.Item>
    </Nav>
  </Navbar>
     )
 }

 export default Menu;