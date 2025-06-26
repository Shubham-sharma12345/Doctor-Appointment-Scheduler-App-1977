import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiHome, FiCalendar, FiUser, FiUsers, FiVideo, FiFileText, FiPill, FiActivity, FiShield, FiAlertTriangle, FiHeart, FiSettings } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FiHome },
    { path: '/appointments', label: 'Appointments', icon: FiCalendar },
    { path: '/doctors', label: 'Find Doctors', icon: FiUsers },
    { path: '/telehealth', label: 'Telehealth', icon: FiVideo },
    { path: '/health-records', label: 'Health Records', icon: FiFileText },
    { path: '/prescriptions', label: 'Prescriptions', icon: FiPill },
    { path: '/lab-results', label: 'Lab Results', icon: FiActivity },
    { path: '/insurance', label: 'Insurance', icon: FiShield },
    { path: '/emergency', label: 'Emergency', icon: FiAlertTriangle },
    { path: '/symptom-checker', label: 'Symptom Checker', icon: FiHeart },
    { path: '/wellness', label: 'Wellness', icon: FiActivity },
    { path: '/profile', label: 'Profile', icon: FiUser }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <span className="text-white text-xl font-bold">HealthCare+</span>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <SafeIcon icon={item.icon} className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;