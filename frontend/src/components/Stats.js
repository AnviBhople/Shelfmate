import React from "react";
import { Coffee, Target } from "lucide-react";

const Stats = () => {
	return (
		<div className="row g-4 mb-5">
			<div className="col-md-6">
				<div className="card border-0 rounded-4 shadow-sm p-4 h-100 d-flex flex-row align-items-center gap-3">
					<div
						className="p-3 rounded-circle"
						style={{ background: "var(--oat)" }}>
						<Coffee color="var(--cinnamon)" />
					</div>
					<div>
						<h5 className="mb-0 fw-bold">4,200 Pages</h5>
						<small className="text-muted">Read this year</small>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="card border-0 rounded-4 shadow-sm p-4 h-100 d-flex flex-row align-items-center gap-3">
					<div
						className="p-3 rounded-circle"
						style={{ background: "var(--oat)" }}>
						<Target color="var(--cinnamon)" />
					</div>
					<div>
						<h5 className="mb-0 fw-bold">12 / 20 Books</h5>
						<small className="text-muted">Annual Goal</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
