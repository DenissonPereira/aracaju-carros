import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { LuLogOut } from "react-icons/lu";
import { logoutService } from '../../../services/auth/logout';

import './navbar.sass'
import { useAracajuCarrosContext } from '../../../context';


export function NavBar() {

    const { usuario } = useAracajuCarrosContext();

    const sair = () => {
        logoutService();
        window.location.reload();
    }

    return (
        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="#home">Aracaju Carros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {usuario.tipo === 'admin' ?
                            <NavDropdown title="Editar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> : <Nav.Link href="#link" disabled>Editar</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end gap-3">
                    <Navbar.Text>
                        Olá, {usuario.nome}!
                    </Navbar.Text>
                    <Button variant="outline-light" className='btn_sair' onClick={sair}>
                        <LuLogOut /> Sair
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
