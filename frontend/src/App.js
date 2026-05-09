import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	const [books] = useState([
		{
			id: 1,
			title: "The God of Small Things",
			author: "Arundhati Roy",
			status: "Reading",
			rating: 5,
		},
		{
			id: 2,
			title: "Norwegian Wood",
			author: "Haruki Murakami",
			status: "Read",
			rating: 4,
		},
		{
			id: 3,
			title: "Normal People",
			author: "Sally Rooney",
			status: "Want to Read",
			rating: 4,
		},
	]);

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home books={books} />} />
						<Route path="/profile" element={<Profile books={books} />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
