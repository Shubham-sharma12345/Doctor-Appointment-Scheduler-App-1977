import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiUser, FiHeart, FiActivity, FiPill, FiFileText, FiBell, FiPlus, FiTrendingUp } = FiIcons;

const DashboardPage = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Williams',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'In-Person',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      date: '2024-01-18',
      time: '2:30 PM',
      type: 'Telehealth',
      status: 'pending'
    }
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72 bpm', trend: 'stable', color: 'red' },
    { label: 'Blood Pressure', value: '120/80', trend: 'good', color: 'green' },
    { label: 'Weight', value: '165 lbs', trend: 'down', color: 'blue' },
    { label: 'Steps Today', value: '8,432', trend: 'up', color: 'purple' }
  ];

  const recentActivity = [
    { type: 'appointment', text: 'Appointment with Dr. Sarah Williams completed', time: '2 hours ago' },
    { type: 'prescription', text: 'Prescription for Lisinopril refilled', time: '1 day ago' },
    { type: 'lab', text: 'Lab results available for Blood Panel', time: '3 days ago' },
    { type: 'wellness', text: 'Completed daily wellness check-in', time: '1 week ago' }
  ];

  const quickActions = [
    { label: 'Book Appointment', icon: FiCalendar, action: () => navigate('/book'), color: 'blue' },
    { label: 'View Prescriptions', icon: FiPill, action: () => navigate('/prescriptions'), color: 'green' },
    { label: 'Health Records', icon: FiFileText, action: () => navigate('/health-records'), color: 'purple' },
    { label: 'Emergency Care', icon: FiHeart, action: () => navigate('/emergency'), color: 'red' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning, John!</h1>
            <p className="text-gray-600">Here's your health overview for today</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {healthMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
                  <div className={`w-3 h-3 rounded-full bg-${metric.color}-500`}></div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="flex items-center">
                  <SafeIcon icon={FiTrendingUp} className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">{metric.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                  <button
                    onClick={() => navigate('/appointments')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center p-4 border border-gray-100 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <SafeIcon icon={FiUser} className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                          {appointment.date} at {appointment.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{appointment.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={action.action}
                      className={`p-4 rounded-lg border-2 border-gray-100 hover:border-${action.color}-200 transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={action.icon} className={`h-6 w-6 text-${action.color}-600 mb-2`} />
                      <p className="text-sm font-medium text-gray-900">{action.label}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Health Insights */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiHeart} className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Great Progress!</h3>
                <p className="text-sm text-gray-600">Your heart rate has improved 5% this month</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiActivity} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Stay Active</h3>
                <p className="text-sm text-gray-600">You're 2,000 steps away from your daily goal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiPill} className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Medication Reminder</h3>
                <p className="text-sm text-gray-600">Don't forget your evening medication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;