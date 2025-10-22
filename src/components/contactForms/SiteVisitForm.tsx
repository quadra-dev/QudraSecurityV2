"use client";

import { LockIcon } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

export default function SiteVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullPhone = `+91${formData.phone.trim()}`;
    const isValidPhone = /^\+91[6-9][0-9]{9}$/.test(fullPhone);
    const nameRegex = /^[A-Za-z\s]+$/;

    // --- Validation ---
    if (!nameRegex.test(formData.name.trim())) {
      toast.error("Please enter a valid name (letters and spaces only)");
      return;
    }

    if (!isValidPhone) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    if (!formData.service || !formData.area) {
      toast.error("Please select both service and area");
      return;
    }

    setSubmitting(true);

    try {
      const payload = { ...formData, phone: fullPhone };
      console.log("📤 Sending payload:", payload);

      const response = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("✅ API response:", result);

      if (response.ok && result.success) {
        toast.success("We will contact you soon!");
        setFormData({ name: "", phone: "", service: "", area: "" });
      } else {
        toast.error(result.message || "Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("❌ Submission failed:", error);
      toast.error("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full shadow-xl max-w-md rounded-3xl bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] backdrop-blur-lg border border-white/20 p-[1px]"
    >
      {/* Inner container */}
      <div className="relative bg-gradient-to-b from-white/95 to-white/90 rounded-3xl p-6 md:p-8">
        {/* Floating Icon */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00CCCC] via-[#1ca9c9] to-[#00BFFF] p-3 rounded-full shadow-lg">
          <LockIcon className="text-white w-5 h-5" />
        </div>

        {/* Heading */}
        <div className="text-center mb-6 mt-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Schedule a Free Site Visit
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Our experts will reach out within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white/60 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#01024E] focus:ring-2 focus:ring-[#01024E]/30 outline-none transition-all"
            required
          />

          {/* Phone */}
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm pointer-events-none">
              +91
            </span>
            <motion.input
              whileFocus={{ scale: 1 }}
              type="tel"
              name="phone"
              maxLength={10}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 rounded-lg border border-gray-300 bg-white/60 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#01024E] focus:ring-2 focus:ring-[#01024E]/30 outline-none transition-all"
              required
            />
          </div>

          {/* Service */}
          <motion.select
            whileFocus={{ scale: 1 }}
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white/60 px-4 py-2.5 text-gray-900 focus:border-[#01024E] focus:ring-2 focus:ring-[#01024E]/30 outline-none transition-all"
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="cctv-surveillance">CCTV & Surveillance</option>
            <option value="biometric-systems">Biometric Systems</option>
            <option value="anpr">ANPR (Number Plate Recognition)</option>
            <option value="epabx-systems">EPABX Systems</option>
            <option value="interactive-display-panels">Display Panels</option>
            <option value="video-door-phones">Video Door Phones</option>
            <option value="baggage-scanners">Baggage Scanners</option>
            <option value="alarm-systems">Alarm Systems</option>
            <option value="metal-detectors">Metal Detectors</option>
            <option value="access-control-systems">Access Control Systems</option>
            <option value="boom-barriers-toll-solutions">
              Boom Barriers & Toll
            </option>
            <option value="electronic-door-locks">Electronic Door Locks</option>
          </motion.select>

          {/* Area */}
          <motion.select
            whileFocus={{ scale: 1 }}
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white/60 px-4 py-2.5 text-gray-900 focus:border-[#01024E] focus:ring-2 focus:ring-[#01024E]/30 outline-none transition-all"
            required
          >
            <option value="" disabled>
              Select Area/City
            </option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="DelhiNCR">Delhi NCR</option>
            <option value="Others">Others</option>
          </motion.select>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={submitting}
            className={`w-full py-3 mt-2 rounded-lg font-semibold tracking-wide text-white shadow-md transition-all ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-400 hover:bg-orange-800"
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
