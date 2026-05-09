import React from "react";
import { Book, Star, Trash2 } from "lucide-react";

// const BookCard = ({ title, author, status, rating }) => {
// 	return (
// 		<div className="col">
// 			<div className="card book-card h-100 p-3">
// 				<div className="card-body d-flex flex-column justify-content-between">
// 					<div>
// 						<div className="d-flex justify-content-between align-items-start mb-3">
// 							<span className="badge rounded-pill status-badge px-3 py-2">
// 								{status}
// 							</span>
// 							<div className="d-flex gap-1">
// 								{[...Array(rating)].map((_, i) => (
// 									<Star
// 										key={i}
// 										size={14}
// 										fill="var(--cinnamon)"
// 										color="var(--cinnamon)"
// 									/>
// 								))}
// 							</div>
// 						</div>
// 						<h4 className="fw-bold mb-1">{title}</h4>
// 						<p className="text-muted small">{author}</p>
// 					</div>
// 					<div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
// 						<div className="d-flex align-items-center gap-2 text-muted small">
// 							<Book size={16} /> <span>Hardcover</span>
// 						</div>
// 						<button className="btn btn-link text-danger p-0 opacity-50">
// 							<Trash2 size={18} />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
const BookCard = ({ title, author, status, rating }) => {
	const getStatusColor = () => {
		if (status === "Reading") return "#4f46e5";
		if (status === "Read") return "#10b981";
		return "#8e5d3f";
	};

	return (
		<div className="col animate-fade-in">
			<div
				className="card book-card h-100 p-3"
				style={{ borderLeft: `6px solid ${getStatusColor()}` }}>
				<div className="card-body d-flex flex-column justify-content-between">
					{/* ... existing content ... */}
					<span className="badge rounded-pill status-badge px-3 py-2">
						{" "}
						{status}
					</span>
					<div className="d-flex gap-1">
						{[...Array(rating)].map((_, i) => (
							<Star
								key={i}
								size={14}
								fill="var(--cinnamon)"
								color="var(--cinnamon)"
							/>
						))}
					</div>
				</div>
				<h4 className="fw-bold mb-1">{title}</h4>
				<p className="text-muted small">{author}</p>
			</div>
			<div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
				<div className="d-flex align-items-center gap-2 text-muted small">
					<Book size={16} />
					<span>Hardcover</span>
				</div>
				<button className="btn btn-link text-danger p-0 opacity-50">
					<Trash2 size={18} />
				</button>{" "}
			</div>
		</div>
	);
};

export default BookCard;
