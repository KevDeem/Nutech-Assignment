import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Transaction from '../Pages/Transaction';
import Profile from '../Pages/Profile';


function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/Transaction">Transaction</Navbar.Brand>
        <Navbar.Brand href="/TopUp">Top Up</Navbar.Brand>
        <Navbar.Brand href="/Profile">Profile</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;