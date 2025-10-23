import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#151560] via-[#071e54] to-[#050560]


 text-white pt-12 pb-8 px-6 font-[family-name:var(--font-urbanist)]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Important Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-200">Important Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/solutions/apartments" className="hover:text-white transition">Solutions</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-200">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services#cctv-surveillance" className="hover:text-white transition">CCTV & Surveillance</Link></li>
            <li><Link href="/services#biometric-systems" className="hover:text-white transition">Biometric Systems</Link></li>
            <li><Link href="/services#anpr" className="hover:text-white transition">ANPR</Link></li>
            <li><Link href="/services#epabx-systems" className="hover:text-white transition">EPABX Systems</Link></li>
            <li><Link href="/services" className="hover:text-white transition">View All →</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="space-y-3">
          <p className="text-sm text-gray-300 mb-3 italic">Protecting What Matters Most</p>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-indigo-400" /> Gurugram, Delhi NCR, Noida
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-indigo-400" />
              <a
                href="mailto:accounts@quadrasecurity.com"
                className="hover:text-white transition"
              >
                accounts@quadrasecurity.com
              </a>
            </p>
            <a
              href="https://maps.app.goo.gl/UHFq6mFBaGgDoGm76"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-white transition"
            >
              <FaMapMarkerAlt /> View on Google Maps
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-200">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/quadra_security" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/quadra-security/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=61577161615068" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Quadra Security. All rights reserved.
      </div>
    </footer>
  );
}

