import React, { useState, useEffect } from "react";
import { quotes } from "../data/quotes";
import Stats from "../components/Stats";
import BookCard from "../components/BookCard";
import ReviewEntry from "../components/ReviewEntry";
import Recommendations from "../components/Recommendations";
import { HashLink as Link } from "react-router-hash-link";

const Home = ({ books }) => {
	const [quoteIndex, setQuoteIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setQuoteIndex((prev) => (prev + 1) % quotes.length);
		}, 10000);
		return () => clearInterval(timer);
	}, []);

	const quoteBox = {
		marginTop: "20px",
	};
	return (
		<div className="home-container">
			<div className="hero-section mb-5 animate-fade-in">
				<div
					className="stat-box p-5 rounded-5 shadow-lg position-relative overflow-hidden"
					style={quoteBox}>
					<div className="quote-content py-4">
						<h1 className="display-4 fw-bold mb-3 italic-font text-white">
							"{quotes[quoteIndex].text}"
						</h1>
						<p className="fs-5 opacity-75">— {quotes[quoteIndex].author}</p>
					</div>
					<div className="mt-4">
						<Link
							to="/profile#my-library"
							className="btn btn-cinnamon btn-lg shadow-lg px-5">
							Add Discovery
						</Link>
					</div>
				</div>
			</div>

			<Stats />
			<ReviewEntry />
			<Recommendations />

			<h3 className="fw-bold mb-4" id="bookshelf">
				My Bookshelf
			</h3>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
				{books.map((book) => (
					<BookCard key={book.id} {...book} />
				))}
			</div>

			<footer className="text-center py-5 mt-5 border-top">
				<p className="text-muted fw-medium">Made with ♡ by Shelfmate | 2026</p>
			</footer>
		</div>
	);
};

export default Home;
