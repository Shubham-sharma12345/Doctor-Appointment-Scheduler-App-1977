import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiUser, FiPhone, FiVideo, FiEdit, FiX, FiPlus } = FiIcons;

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Williams',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'In-Person',
      status: 'confirmed',
      location: 'Main Medical Center'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      date: '2024-01-18',
      time: '2:30 PM',
      type: 'Telehealth',
      status: 'pending',
      location: 'Video Call'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: 'Dr. Emily Brown',
      specialty: 'Dermatology',
      date: '2024-01-10',
      time: '11:00 AM',
      type: 'In-Person',
      status: 'completed',
      location: 'Dermatology Clinic'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments</h1>
                <p className="text-gray-600">Manage your healthcare appointments</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                <SafeIcon icon={FiPlus} className="h-5 w-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['upcoming', 'past'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab} Appointments
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                {(activeTab === 'upcoming' ? upcomingAppointments : pastAppointments).map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <SafeIcon icon={FiUser} className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                            {appointment.date} at {appointment.time}
                            <span className="mx-2">•</span>
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                          <p className="text-sm text-gray-500 mt-1">{appointment.type}</p>
                        </div>
                        
                        {activeTab === 'upcoming' && (
                          <div className="flex space-x-2">
                            {appointment.type === 'Telehealth' && (
                              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                                <SafeIcon icon={FiVideo} className="h-4 w-4 mr-2" />
                                Join
                              </button>
                            )}
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                              <SafeIcon icon={FiEdit} className="h-4 w-4 mr-2" />
                              Edit
                            </button>
                            <button className="border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 flex items-center">
                              <SafeIcon icon={FiX} className="h-4 w-4 mr-2" />
                              Cancel
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;