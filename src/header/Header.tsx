import "./Header.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Header = (): JSX.Element => {
	return (
		<Navbar variant="dark" bg="dark" expand="md" fixed="top">
			<Container fluid>
				<LinkContainer to="/">
					<Navbar.Brand>Shopify ATC</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="navbar-dark-example" />
				<Navbar.Collapse id="navbar-dark-example">
					<Nav>
						<NavDropdown
							id="nav-dropdown-dark-example"
							title="Menu"
							menuVariant="dark"
						>
							<LinkContainer to="/">
								<NavDropdown.Item>Proxies</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/profiles">
								<NavDropdown.Item>Profiles</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/tasks">
								<NavDropdown.Item>Tasks</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/toolbox">
								<NavDropdown.Item>Toolbox</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
