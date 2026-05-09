// import React from "react";
// import { NavHashLink as Link } from "react-router-hash-link"; // Use this for scrolling
// import { User, Bell, Search } from "lucide-react";
// import logo from "./images/logo.png";

// const Navbar = () => {
// 	const navStyle = {
// 		height: "150px",
// 		backgroundColor: "#780000",
// 	};
// 	return (
// 		<nav style={navStyle} className="shelfmate-navbar">
// 			<div className="container">
// 				<Link
// 					to="/"
// 					className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
// 					<div className="navbar-logo">
// 						<img
// 							src={logo}
// 							alt=""
// 							style={{ height: "100px", width: "200px" }}
// 						/>
// 					</div>
// 					{/* <h2
// 						className="fw-bold m-0"
// 						style={{ letterSpacing: "-1.5px", color: "black" }}>
// 						Shelf<span style={{ color: "var(--cinnamon)" }}>mate</span>
// 					</h2> */}
// 				</Link>

// 				<div className="mx-lg-5 flex-grow-1 d-none d-md-block">
// 					<div className="input-group bg-light rounded-pill px-3 py-1 border">
// 						<span className="input-group-text bg-transparent border-0">
// 							<Search size={18} className="text-muted" />
// 						</span>
// 						<input
// 							type="text"
// 							className="form-control bg-transparent border-0 shadow-none"
// 							placeholder="Search authors, books..."
// 						/>
// 					</div>
// 				</div>

// 				<div className="d-flex align-items-center gap-3">
// 					{/* Scroll directly to the library on the profile page */}
// 					<Link
// 						smooth
// 						to="/profile#my-library"
// 						className="btn btn-light rounded-pill px-3 fw-bold text-dark border d-none d-sm-block">
// 						My Shelf
// 					</Link>

// 					<div className="d-flex gap-3 align-items-center ms-lg-2">
// 						<Bell
// 							size={20}
// 							className="text-muted d-none d-md-block"
// 							style={{ cursor: "pointer" }}
// 						/>
// 						<Link to="/profile" className="text-decoration-none">
// 							<div
// 								className="rounded-circle overflow-hidden shadow-sm"
// 								style={{
// 									width: "40px",
// 									height: "40px",
// 									background: "var(--oat)",
// 									display: "grid",
// 									placeContent: "center",
// 									border: "1px solid #ddd",
// 								}}>
// 								<User size={22} color="var(--cinnamon)" />
// 							</div>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, BookMarked } from "lucide-react";
import "./Navbar.css"; // We will create this file next

const Navbar = () => {
	return (
		<nav className="shelfmate-navbar">
			<div className="container d-flex align-items-center justify-content-between">
				{/* --- LOGO SECTION --- */}
				<Link to="/" className="navbar-brand-custom">
					<div className="logo-icon">
						<BookMarked size={24} />
					</div>
					<span className="logo-text">
						Shelf<span>mate</span>
					</span>
				</Link>

				{/* --- SEARCH BAR (Goodreads Style) --- */}
				<div className="search-container d-none d-md-flex">
					<Search size={18} className="search-icon" />
					<input
						type="text"
						placeholder="Search books, authors, or genres..."
						className="search-input"
					/>
				</div>

				{/* --- NAV ACTIONS --- */}
				<div className="nav-actions">
					<Link
						to="/profile#my-library"
						className="nav-link-custom d-none d-lg-block">
						<button className="btn-shelfmate">My Books</button>
					</Link>
					<div className="icon-group">
						<div className="notification-dot">
							<Bell size={20} />
						</div>
						<Link to="/profile" className="profile-trigger">
							<div className="profile-avatar">
								<User size={20} />
							</div>
							<span className="d-none d-sm-block">Account</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
