"use client";
import { useState } from "react";

type FormData = {
  companyName: string;
  owner: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
  industry: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Fundraise() {
  const industries = [
    "Technology", "Finance", "Healthcare", "Education", "Manufacturing",
    "Retail", "Hospitality", "Transportation", "Energy", "Construction",
    "Media", "Agriculture", "Real Estate", "Telecommunications", "Entertainment",
    "Food & Beverage", "Sports", "Fashion", "Aerospace", "Non-Profit",
  ];

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    owner: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    phone: "",
    industry: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: FormErrors = {};

    if (!formData.companyName.trim()) tempErrors.companyName = "Company name is required";
    if (!formData.owner.trim()) tempErrors.owner = "Owner name is required";
    if (!formData.address.trim()) tempErrors.address = "Mailing address is required";
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.state.trim()) tempErrors.state = "State is required";
    if (!formData.zip.trim() || isNaN(Number(formData.zip))) tempErrors.zip = "Valid ZIP code is required";
    if (!formData.country.trim()) tempErrors.country = "Country is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number";
    }

    if (!formData.industry) tempErrors.industry = "Please select an industry";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      alert("Form Submitted Successfully!");
      setFormData({
        companyName: "",
        owner: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        email: "",
        phone: "",
        industry: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pt-[70px] from-blue-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
          Register Your Company
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Company Name & Owner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            </div>
            <div>
              <input
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                type="text"
                placeholder="Owner"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.owner && <p className="text-red-500 text-sm">{errors.owner}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder="Company Mailing Address"
              className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                placeholder="City"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div>
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                type="text"
                placeholder="State"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div>
              <input
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                type="text"
                placeholder="Zip Code"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
          </div>

          {/* Country */}
          <div>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text"
              placeholder="Country"
              className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          {/* Industry Dropdown */}
          <div>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            >
              <option value="">Select Industry</option>
              {industries.map((industry, idx) => (
                <option key={idx} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold
              hover:from-blue-700 hover:to-blue-600 shadow-md transition-all duration-300 transform hover:scale-[1.02]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
