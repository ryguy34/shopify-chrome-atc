import "./Header.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
	return (
		<div className="Header-box">
			<div>
				<Navbar variant="dark" bg="dark" expand="md" fixed="top">
					<Container fluid>
						<Navbar.Brand>Shopify ATC</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbar-dark-example" />
						<Navbar.Collapse id="navbar-dark-example">
							<Nav>
								<NavDropdown
									id="nav-dropdown-dark-example"
									title="Menu"
									menuVariant="dark"
								>
									<NavDropdown.Item>Profiles</NavDropdown.Item>
									<NavDropdown.Item>Toolbox</NavDropdown.Item>
									<NavDropdown.Item>Tasks</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
