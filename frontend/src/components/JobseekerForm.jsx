import React, { useState } from "react";
import axios from "axios";

function JobseekerForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    jobInterest: "",
    availability: "",
    qualification: "",
    fieldOfStudy: "",
    experience: "",
    skills: "",
    language: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name is too short";
    if (!formData.jobInterest) newErrors.jobInterest = "Required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post("http://localhost:5050/api/users", {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()),
      });
      setSuccess(true);
      setFormData({
        name: "",
        location: "",
        jobInterest: "",
        availability: "",
        qualification: "",
        fieldOfStudy: "",
        experience: "",
        skills: "",
        language: "",
      });
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Jobseeker Sign-up
        </h2>

        {success && (
          <p className="text-green-600 text-center mb-4">
            Your info has been submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            ["name", "Full Name"],
            ["location", "Location"],
            ["jobInterest", "Job type filtering (e.g. Retail, IT, Sales)"],
            ["availability", "Availability (e.g., Immediate, 1 Week)"],
            ["qualification", "Highest Qualification"],
            ["fieldOfStudy", "Matching to specific industries (e.g. IT, HR)"],
            ["experience", "Experience (e.g., 2 years retail)"],
            ["skills", "e.g. JavaScript, POS (comma separated)"],
            ["language", "Preferred Language"],
          ].map(([key, label]) => (
            <div key={key}>
              <input
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={label}
                className={`w-full p-3 border rounded-md ${
                  errors[key] ? "border-red-500" : ""
                }`}
              />
              {errors[key] && (
                <p className="text-red-500 text-sm">{errors[key]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1da851] transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default JobseekerForm;