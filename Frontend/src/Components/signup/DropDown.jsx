import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function DropDown() {
    const [data, setdata] = useState({
        acctype: 'Select Account Type',
    });

    const handleChange = (e) => {
        setdata({ acctype: e });
        console.log("Hey");
    }

    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Navbar.Brand href="#home">Account Type</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example" style={{ display: "flex", justifyContent: "right" }}>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={data.acctype}
                                value="Hy"
                                menuVariant="dark"
                                onSelect={handleChange}
                            >
                                <NavDropdown.Item eventKey='citizen'>Citizen</NavDropdown.Item>
                                <NavDropdown.Item eventKey='authority'>Authority</NavDropdown.Item>
                                <NavDropdown.Item eventKey='admin'>Admin</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default DropDown;
