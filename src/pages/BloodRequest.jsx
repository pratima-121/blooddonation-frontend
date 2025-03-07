import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTint, FaHospital, FaCity, FaPhone, FaGlobe, FaMapMarkerAlt, FaUser } from "react-icons/fa";

function BloodRequest({ user }) { // user prop is passed to get requester_id
	const [formData, setFormData] = useState({
		requester_id: user?.id || "", // Auto-filled if user is logged in
		blood_type: "",
		hospital_name: "",
		hospital_address: "",
		country: "",
		city: "",
		contact_phone_number: "",
		status: "Pending", // Default status
	});

	const [loading, setLoading] = useState(false); // Loading effect on submit

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const requestData = JSON.stringify(formData);

		try {
			const response = await fetch("http://localhost:3000/api/blood-requests", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: requestData,
			});

			if (response.ok) {
				alert("Your blood request has been submitted successfully!");
				console.log("Blood Request Submitted:", formData);
			} else {
				alert("Failed to submit request. Please try again.");
			}
		} catch (error) {
			console.error("Error submitting blood request:", error);
		}

		setLoading(false);
	};

	return (
		<div className="container d-flex align-items-center justify-content-center min-vh-100">
			<div className="col-md-8">
				<div className="card shadow-lg p-4">
					<h2 className="text-center text-danger mb-4">Request Blood</h2>
					<form onSubmit={handleSubmit}>
						
						{/* Requester ID (Auto-filled) */}
						<div className="mb-3">
							<label className="form-label">Requester ID</label>
							<div className="input-group">
								<span className="input-group-text"><FaUser /></span>
								<input type="text" className="form-control" name="requester_id" value={formData.requester_id} disabled />
							</div>
						</div>

						{/* Blood Type */}
						<div className="mb-3">
							<label className="form-label">Blood Type</label>
							<div className="input-group">
								<span className="input-group-text"><FaTint /></span>
								<select className="form-select" name="blood_type" value={formData.blood_type} onChange={handleChange} required>
									<option value="">Select Blood Type</option>
									<option value="A+">A+</option>
									<option value="A-">A-</option>
									<option value="B+">B+</option>
									<option value="B-">B-</option>
									<option value="O+">O+</option>
									<option value="O-">O-</option>
									<option value="AB+">AB+</option>
									<option value="AB-">AB-</option>
								</select>
							</div>
						</div>

						{/* Hospital Name */}
						<div className="mb-3">
							<label className="form-label">Hospital Name</label>
							<div className="input-group">
								<span className="input-group-text"><FaHospital /></span>
								<input type="text" className="form-control" name="hospital_name" value={formData.hospital_name} onChange={handleChange} required />
							</div>
						</div>

						{/* Hospital Address */}
						<div className="mb-3">
							<label className="form-label">Hospital Address</label>
							<div className="input-group">
								<span className="input-group-text"><FaMapMarkerAlt /></span>
								<input type="text" className="form-control" name="hospital_address" value={formData.hospital_address} onChange={handleChange} required />
							</div>
						</div>

						{/* Country */}
						<div className="mb-3">
							<label className="form-label">Country</label>
							<div className="input-group">
								<span className="input-group-text"><FaGlobe /></span>
								<input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
							</div>
						</div>

						{/* City */}
						<div className="mb-3">
							<label className="form-label">City</label>
							<div className="input-group">
								<span className="input-group-text"><FaCity /></span>
								<input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
							</div>
						</div>

						{/* Contact Phone Number */}
						<div className="mb-3">
							<label className="form-label">Contact Phone Number</label>
							<div className="input-group">
								<span className="input-group-text"><FaPhone /></span>
								<input type="text" className="form-control" name="contact_phone_number" value={formData.contact_phone_number} onChange={handleChange} required />
							</div>
						</div>

						{/* Submit Button */}
						<div className="text-center">
							<button type="submit" className="btn btn-danger w-100 py-2" disabled={loading}>
								{loading ? "Submitting..." : "Submit Request"}
							</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
}

export default BloodRequest;
