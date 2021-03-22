import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import userIcon from "../../images/logos/users-alt.png";

const Header = () => {
	const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	return (
		<header className="px-lg-5 px-0">
			<nav className="navbar navbar-expand-md navbar-light">
				<Link className="navbar-brand" to="/">
					<img style={{ width: "202.81px" }} src={logo} alt="" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto align-items-md-center">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/events">
								Events
							</Link>
						</li>
						{!loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
						)}
						{!loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									<button className="btn btn-primary">Register</button>
								</Link>
							</li>
						)}
						{loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/admin">
									<button className="btn btn-dark">Admin</button>
								</Link>
							</li>
						)}
						{loggedInUser.isLoggedIn && (
							<li className="nav-item user">
								<img src={userIcon} alt="" />
								{loggedInUser.name ? loggedInUser.name.split(" ").slice(0, 1) : "User"}
							</li>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;







// import React, { useContext } from 'react';
// import './Header.css'
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';

// const Header = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     return (
//         <Container fluid>
//             <Container>
//                 <Navbar expand="lg" className="fixed">
//                     <Navbar.Brand><Link to="/home"><img src="https://iili.io/2VACFV.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ml-auto">
//                             <Link to="/" className="navLink font-weight-bold">Home</Link>
//                             <Link to="/" className=" navLink font-weight-bold">Donation</Link>
//                             <Link to="/" className="navLink font-weight-bold">Events</Link>
//                             <Link to="/" className="navLink font-weight-bold">Blog</Link>
//                             <Link to="/userRegister" className="navLink font-weight-bold">{loggedInUser.name}</Link>
//                             {!loggedInUser.isSiggnedIn && <Link to="/login" className="navLink btn btn-primary pr-4 pl-4">Register</Link>}
//                             {!loggedInUser.isSiggnedIn && <Link to="/login" className="navLink btn btn-dark pr-4 pl-4">Admin</Link>}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </Container>
//         </Container>
//     );
// };

// export default Header;