import React from "react";
import { Plus } from "lucide-react";

const Hero = () => {
	return (
		<div className="stat-box mb-4">
			<div className="row align-items-center">
				<div className="col-md-8">
					<h1 className="display-4 fw-bold mb-3">
						Your library is a map of your mind.
					</h1>
					<p className="opacity-75 fs-5">
						Track your journey, one page at a time.
					</p>
				</div>
				<div className="col-md-4 text-md-end">
					<button className="btn btn-cinnamon btn-lg shadow">
						<Plus size={24} className="me-2" /> Add a New Discovery
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
