"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

export const ServicePageContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Name and Phone Number are required.");
      return;
    }

    // Validate Indian mobile number
    const fullMobile = formData.phone.startsWith("+91") ? formData.phone : "+91" + formData.phone;
    const mobileRegexStrict = /^\+91[7-9][0-9]{9}$/;
    if (!mobileRegexStrict.test(fullMobile)) {
        toast.error("Please enter a valid 10-digit Indian mobile number.");
        return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        mobile: fullMobile,
        email: formData.email,
        city: formData.city,
        service: formData.service,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          service: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Get a Free Consultation</h3>
        <p className="text-gray-500 text-sm mt-2">Expert advice for your security needs</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full placeholder-gray-400 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="sr-only">City</label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600"
            >
              <option value="">City</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="DelhiNCR">Delhi NCR</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="service" className="sr-only">Service</label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-600"
            >
              <option value="">Service</option>
              <option value="CCTV Installation">CCTV Installation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Access Control">Access Control</option>
              <option value="Video Door Phones">Video Door Phones</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get Callback <Send className="w-4 h-4" />
            </>
          )}
        </button>
        
        <p className="text-xs text-center text-gray-400 mt-4">
          Your details are safe with us. No spam.
        </p>
      </form>
    </div>
  );
};
