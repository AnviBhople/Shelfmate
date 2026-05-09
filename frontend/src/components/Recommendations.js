import React from "react";
import { Sparkles } from "lucide-react";

const RecommendationItem = ({ genre, title, img }) => (
	<div className="genre-card p-3 rounded-4 shadow-sm text-center mb-3">
		<div
			className="genre-img mb-2 rounded-3"
			style={{
				background: "var(--cinnamon)",
				height: "120px",
				display: "grid",
				placeContent: "center",
				color: "white",
			}}>
			{genre}
		</div>
		<h6 className="fw-bold mb-0">{title}</h6>
	</div>
);

const Recommendations = () => {
	return (
		<div className="mb-5">
			<h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
				<Sparkles color="var(--cinnamon)" /> For Your Soul
			</h3>
			<div className="row row-cols-2 row-cols-md-4 g-4">
				<RecommendationItem genre="Feminist Lit" title="The Bell Jar" />
				<RecommendationItem genre="Poetry" title="Milk & Honey" />
				<RecommendationItem genre="History" title="The Silk Roads" />
				<RecommendationItem genre="Sci-Fi" title="Dune" />
			</div>
		</div>
	);
};

export default Recommendations;
