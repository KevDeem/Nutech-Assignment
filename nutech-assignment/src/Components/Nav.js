import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';



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