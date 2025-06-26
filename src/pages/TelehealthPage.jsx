import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiVideo, FiPhone, FiMessageCircle, FiCalendar, FiClock, FiUser, FiCheck, FiX, FiMic, FiMicOff, FiVideoOff } = FiIcons;

const TelehealthPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Williams',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '30 min',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      date: '2024-01-18',
      time: '2:30 PM',
      duration: '45 min',
      status: 'pending'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: 'Dr. Emily Brown',
      specialty: 'Dermatology',
      date: '2024-01-10',
      time: '11:00 AM',
      duration: '25 min',
      status: 'completed',
      notes: 'Follow-up needed in 2 weeks'
    }
  ];

  const quickConsultDoctors = [
    {
      id: 1,
      name: 'Dr. Jennifer Smith',
      specialty: 'General Medicine',
      rating: 4.9,
      available: true,
      price: '$75'
    },
    {
      id: 2,
      name: 'Dr. Robert Wilson',
      specialty: 'Urgent Care',
      rating: 4.8,
      available: true,
      price: '$85'
    },
    {
      id: 3,
      name: 'Dr. Lisa Chen',
      specialty: 'Mental Health',
      rating: 4.9,
      available: false,
      price: '$90'
    }
  ];

  const startCall = () => {
    setIsInCall(true);
  };

  const endCall = () => {
    setIsInCall(false);
    setIsMuted(false);
    setIsVideoOff(false);
  };

  if (isInCall) {
    return (
      <div className="fixed inset-0 bg-gray-900 z-50">
        <div className="relative h-full">
          {/* Video Area */}
          <div className="relative h-full bg-gray-800">
            {/* Doctor Video */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Patient Video (PiP) */}
            <div className="absolute top-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden">
              {!isVideoOff ? (
                <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium">You</span>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <SafeIcon icon={FiVideoOff} className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>

            {/* Call Info */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-lg p-3">
              <div className="text-white">
                <h3 className="font-medium">Dr. Sarah Williams</h3>
                <p className="text-sm text-gray-300">Cardiology Consultation</p>
                <p className="text-sm text-gray-300">15:32</p>
              </div>
            </div>

            {/* Call Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isMuted ? 'bg-red-500' : 'bg-gray-700'
                  }`}
                >
                  <SafeIcon icon={isMuted ? FiMicOff : FiMic} className="h-5 w-5 text-white" />
                </button>
                
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isVideoOff ? 'bg-red-500' : 'bg-gray-700'
                  }`}
                >
                  <SafeIcon icon={isVideoOff ? FiVideoOff : FiVideo} className="h-5 w-5 text-white" />
                </button>
                
                <button
                  onClick={endCall}
                  className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-white transform rotate-135" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Telehealth</h1>
            <p className="text-gray-600">Connect with healthcare providers from anywhere</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white cursor-pointer"
            >
              <SafeIcon icon={FiVideo} className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Video Consultation</h3>
              <p className="text-blue-100">Face-to-face consultation with doctors</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white cursor-pointer"
            >
              <SafeIcon icon={FiPhone} className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Phone Call</h3>
              <p className="text-green-100">Audio-only consultation option</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white cursor-pointer"
            >
              <SafeIcon icon={FiMessageCircle} className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Chat Consultation</h3>
              <p className="text-purple-100">Text-based consultation service</p>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['upcoming', 'past', 'quick'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab === 'upcoming' && 'Upcoming Appointments'}
                    {tab === 'past' && 'Past Appointments'}
                    {tab === 'quick' && 'Quick Consult'}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-sm">
            {activeTab === 'upcoming' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Telehealth Appointments</h2>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <SafeIcon icon={FiUser} className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                              {appointment.date} at {appointment.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            appointment.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                          <button
                            onClick={startCall}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                          >
                            <SafeIcon icon={FiVideo} className="h-4 w-4 mr-2" />
                            Join Call
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'past' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Past Telehealth Appointments</h2>
                <div className="space-y-4">
                  {pastAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                            <SafeIcon icon={FiUser} className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                              {appointment.date} at {appointment.time}
                            </div>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600 mt-1">Notes: {appointment.notes}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View Summary
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'quick' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Consultation</h2>
                <p className="text-gray-600 mb-6">Connect with available doctors for immediate consultation</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickConsultDoctors.map((doctor) => (
                    <div key={doctor.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <SafeIcon icon={FiUser} className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">{doctor.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
                        <div className="flex items-center justify-center mb-3">
                          <SafeIcon icon={FiCheck} className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">{doctor.rating}</span>
                        </div>
                        <div className="flex items-center justify-center mb-4">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            doctor.available ? 'bg-green-500' : 'bg-gray-400'
                          }`}></div>
                          <span className={`text-sm ${
                            doctor.available ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {doctor.available ? 'Available Now' : 'Unavailable'}
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900 mb-4">{doctor.price}</p>
                        <button
                          disabled={!doctor.available}
                          className={`w-full py-2 px-4 rounded-lg font-medium ${
                            doctor.available
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {doctor.available ? 'Start Consultation' : 'Unavailable'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelehealthPage;