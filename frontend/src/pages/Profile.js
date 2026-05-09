import React from "react";
import {
	User,
	Clock,
	List,
	Plus,
	BookX,
	BookOpen,
	CheckCircle,
} from "lucide-react";

const Profile = ({ books }) => {
	return (
		<div className="profile-page animate-fade-in pb-5">
			<div className="row g-4">
				{/* --- SIDEBAR: USER INFO --- */}
				<div className="col-md-4">
					<div
						className="card book-card p-4 text-center border-0 shadow-sm sticky-md-top"
						style={{ top: "100px", zIndex: "1" }}>
						<div
							className="mx-auto bg-light rounded-circle p-4 mb-3"
							style={{ width: "fit-content", border: "2px solid var(--oat)" }}>
							<User size={60} color="var(--cinnamon)" />
						</div>
						<h3 className="fw-bold mb-1">Reader #402</h3>
						<p className="text-muted small">
							Collector of stories & coffee enthusiast
						</p>

						<div className="d-flex justify-content-around my-4 border-top border-bottom py-3">
							<div>
								<h6 className="fw-bold mb-0">{books.length}</h6>
								<small className="text-muted">Books</small>
							</div>
							<div>
								<h6 className="fw-bold mb-0">4</h6>
								<small className="text-muted">Lists</small>
							</div>
							<div>
								<h6 className="fw-bold mb-0">12</h6>
								<small className="text-muted">Reviews</small>
							</div>
						</div>

						<button className="btn btn-cinnamon w-100">Settings</button>
					</div>
				</div>

				{/* --- MAIN CONTENT --- */}
				<div className="col-md-8">
					{/* Section: Reading History */}
					<div className="card book-card p-4 mb-4 border-0 shadow-sm">
						<h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
							<Clock size={22} color="var(--cinnamon)" /> Recent Activity
						</h4>
						<div className="activity-list">
							{books.slice(0, 3).map((book) => (
								<div
									key={book.id}
									className="d-flex justify-content-between align-items-center py-3 border-bottom">
									<div>
										<h6 className="mb-0 fw-bold">{book.title}</h6>
										<small className="text-muted">Updated 2 days ago</small>
									</div>
									<span className="badge rounded-pill status-badge">
										{book.status}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Section: THE SHELF (This is where the Home Page button will scroll to) */}
					<div
						id="my-library"
						className="card book-card p-4 border-0 shadow-sm">
						<div className="d-flex justify-content-between align-items-center mb-4">
							<h4 className="fw-bold m-0 d-flex align-items-center gap-2">
								<List size={22} color="var(--cinnamon)" /> My Library & Lists
							</h4>
							<button className="btn btn-sm btn-outline-secondary rounded-pill">
								<Plus size={16} /> New List
							</button>
						</div>

						{/* Standard Category Tabs */}
						<div className="row g-3">
							{/* Currently Reading */}
							<div className="col-sm-6 col-lg-4">
								<div
									className="p-3 rounded-4 text-center border-0 shadow-sm"
									style={{ background: "#eef2ff", cursor: "pointer" }}>
									<BookOpen className="mb-2" color="#4f46e5" />
									<p className="mb-0 fw-bold small">Currently Reading</p>
									<small className="text-muted">2 Books</small>
								</div>
							</div>

							{/* Finished / Read */}
							<div className="col-sm-6 col-lg-4">
								<div
									className="p-3 rounded-4 text-center border-0 shadow-sm"
									style={{ background: "#ecfdf5", cursor: "pointer" }}>
									<CheckCircle className="mb-2" color="#10b981" />
									<p className="mb-0 fw-bold small">Finished</p>
									<small className="text-muted">15 Books</small>
								</div>
							</div>

							{/* DNF Section (Did Not Finish) */}
							<div className="col-sm-6 col-lg-4">
								<div
									className="p-3 rounded-4 text-center border-0 shadow-sm"
									style={{ background: "#fff1f2", cursor: "pointer" }}>
									<BookX className="mb-2" color="#f43f5e" />
									<p className="mb-0 fw-bold small">DNF (Dropped)</p>
									<small className="text-muted">1 Book</small>
								</div>
							</div>

							{/* Custom List Example */}
							<div className="col-sm-6 col-lg-4">
								<div
									className="p-3 rounded-4 text-center border-0 shadow-sm"
									style={{ background: "var(--oat)", cursor: "pointer" }}>
									<span className="fs-4 mb-2 d-block">🍷</span>
									<p className="mb-0 fw-bold small">Dark Academia</p>
									<small className="text-muted">8 Books</small>
								</div>
							</div>

							{/* Add New List Button */}
							<div className="col-sm-6 col-lg-4">
								<div
									className="p-3 rounded-4 text-center border-secondary border-dashed h-100 d-flex flex-column align-items-center justify-content-center"
									style={{
										border: "2px dashed #ccc",
										cursor: "pointer",
										background: "transparent",
									}}>
									<Plus size={24} color="#999" />
									<p className="mb-0 small text-muted fw-bold">
										Add Custom List
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
