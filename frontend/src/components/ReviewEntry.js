import React from "react";
import { PenTool, Users, Map } from "lucide-react";

const ReviewEntry = () => {
	return (
		<div
			className="card book-card p-4 mb-5 border-0 shadow-sm"
			style={{ background: "linear-gradient(135deg, #fff 0%, #fdfbf7 100%)" }}>
			<h4 className="fw-bold mb-4">Log a New Review</h4>
			<div className="row g-3">
				<div className="col-md-4">
					<input
						type="text"
						className="form-control rounded-4 border-light shadow-sm"
						placeholder="Book Name"
					/>
				</div>
				<div className="col-md-4">
					<input
						type="text"
						className="form-control rounded-4 border-light shadow-sm"
						placeholder="Author"
					/>
				</div>
				<div className="col-md-4">
					<select className="form-select rounded-4 border-light shadow-sm">
						<option>Genre</option>
						<option>Magical Realism</option>
						<option>Classic</option>
						<option>Mystery</option>
					</select>
				</div>
				<div className="col-12">
					<textarea
						className="form-control rounded-4 border-light shadow-sm"
						rows="3"
						placeholder="Thoughts on characters, world-building, and vibes..."></textarea>
				</div>
				<div className="col-12 text-end">
					<button className="btn btn-cinnamon px-5">Post Review</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewEntry;
