import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckCircle, FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiMapPin, FiHome, FiDownload } = FiIcons;

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointmentData;

  useEffect(() => {
    if (!appointmentData) {
      navigate('/');
    }
  }, [appointmentData, navigate]);

  if (!appointmentData) {
    return null;
  }

  const specialtyNames = {
    cardiology: 'Cardiology',
    dermatology: 'Dermatology',
    orthopedics: 'Orthopedics',
    pediatrics: 'Pediatrics',
    psychiatry: 'Psychiatry',
    general: 'General Medicine'
  };

  const doctorNames = {
    'dr-williams': 'Dr. Sarah Williams',
    'dr-johnson': 'Dr. Michael Johnson',
    'dr-brown': 'Dr. Emily Brown',
    'dr-davis': 'Dr. James Davis',
    'dr-wilson': 'Dr. Robert Wilson',
    'dr-miller': 'Dr. Lisa Miller',
    'dr-garcia': 'Dr. Maria Garcia',
    'dr-martinez': 'Dr. Carlos Martinez',
    'dr-anderson': 'Dr. Jennifer Anderson',
    'dr-taylor': 'Dr. David Taylor',
    'dr-white': 'Dr. Thomas White',
    'dr-lewis': 'Dr. Patricia Lewis'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const generateAppointmentId = () => {
    return 'APT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const appointmentId = generateAppointmentId();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
          >
            <SafeIcon icon={FiCheckCircle} className="h-12 w-12 text-green-600" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Appointment Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Your appointment has been successfully booked.
          </p>
          <p className="text-lg text-gray-500">
            Appointment ID: <span className="font-semibold text-blue-600">{appointmentId}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Appointment Details</h2>
            <p className="text-blue-100">Please save these details for your records</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Doctor</h3>
                    <p className="text-gray-600">{doctorNames[appointmentData.doctor]}</p>
                    <p className="text-sm text-gray-500">{specialtyNames[appointmentData.specialty]}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCalendar} className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Date</h3>
                    <p className="text-gray-600">{formatDate(appointmentData.date)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiClock} className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Time</h3>
                    <p className="text-gray-600">{appointmentData.time}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Patient</h3>
                    <p className="text-gray-600">{appointmentData.firstName} {appointmentData.lastName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{appointmentData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{appointmentData.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {appointmentData.reason && (
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reason for Visit</h3>
                <p className="text-gray-600">{appointmentData.reason}</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMail} className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmation Email</h3>
              <p className="text-gray-600">You'll receive a confirmation email with all the details shortly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPhone} className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reminder Call</h3>
              <p className="text-gray-600">We'll call you 24 hours before your appointment as a reminder.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMapPin} className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinic Location</h3>
              <p className="text-gray-600">Address and directions will be included in your confirmation email.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Reminders</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              Please arrive 15 minutes early for your appointment
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              Bring a valid ID and insurance card
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              If you need to reschedule, please call at least 24 hours in advance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              Contact us at (555) 123-4567 if you have any questions
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiHome} className="h-5 w-5" />
            Back to Home
          </motion.button>
          
          <motion.button
            onClick={() => window.print()}
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiDownload} className="h-5 w-5" />
            Print Details
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationPage;