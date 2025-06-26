import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPill, FiUser, FiCalendar, FiRefreshCw, FiDownload, FiAlertCircle } = FiIcons;

const PrescriptionsPage = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentPrescriptions = [
    {
      id: 1,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescriber: 'Dr. Sarah Williams',
      dateIssued: '2024-01-10',
      refillsRemaining: 3,
      nextRefill: '2024-02-10',
      status: 'active'
    },
    {
      id: 2,
      medication: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily with meals',
      prescriber: 'Dr. Sarah Williams',
      dateIssued: '2024-01-05',
      refillsRemaining: 1,
      nextRefill: '2024-01-25',
      status: 'active'
    },
    {
      id: 3,
      medication: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily in evening',
      prescriber: 'Dr. Michael Johnson',
      dateIssued: '2023-12-15',
      refillsRemaining: 0,
      nextRefill: 'Contact doctor',
      status: 'refill_needed'
    }
  ];

  const pastPrescriptions = [
    {
      id: 4,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Three times daily',
      prescriber: 'Dr. Emily Brown',
      dateIssued: '2023-11-20',
      dateCompleted: '2023-11-27',
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'refill_needed': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'refill_needed': return 'Refill Needed';
      case 'completed': return 'Completed';
      case 'expired': return 'Expired';
      default: return status;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Prescriptions</h1>
            <p className="text-gray-600">Manage your medications and prescriptions</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Prescriptions</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiPill} className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Refills Due Soon</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiAlertCircle} className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Refills</p>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiRefreshCw} className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Prescribing Doctors</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['current', 'past'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab} Prescriptions
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Prescriptions List */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <div className="space-y-6">
                {(activeTab === 'current' ? currentPrescriptions : pastPrescriptions).map((prescription) => (
                  <motion.div
                    key={prescription.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <SafeIcon icon={FiPill} className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{prescription.medication}</h3>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(prescription.status)}`}>
                              {getStatusText(prescription.status)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Dosage:</span> {prescription.dosage}
                            </div>
                            <div>
                              <span className="font-medium">Frequency:</span> {prescription.frequency}
                            </div>
                            <div>
                              <span className="font-medium">Prescribed by:</span> {prescription.prescriber}
                            </div>
                            <div className="flex items-center">
                              <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                              <span className="font-medium">Date Issued:</span> {prescription.dateIssued}
                            </div>
                            {activeTab === 'current' && (
                              <>
                                <div>
                                  <span className="font-medium">Refills Remaining:</span> {prescription.refillsRemaining}
                                </div>
                                <div>
                                  <span className="font-medium">Next Refill:</span> {prescription.nextRefill}
                                </div>
                              </>
                            )}
                            {activeTab === 'past' && prescription.dateCompleted && (
                              <div>
                                <span className="font-medium">Completed:</span> {prescription.dateCompleted}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        {activeTab === 'current' && (
                          <>
                            <button
                              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                prescription.refillsRemaining > 0
                                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              }`}
                              disabled={prescription.refillsRemaining === 0}
                            >
                              <SafeIcon icon={FiRefreshCw} className="h-4 w-4 mr-2 inline" />
                              {prescription.refillsRemaining > 0 ? 'Request Refill' : 'Contact Doctor'}
                            </button>
                          </>
                        )}
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <SafeIcon icon={FiDownload} className="h-4 w-4 mr-2 inline" />
                          Download
                        </button>
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

export default PrescriptionsPage;