import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiDownload, FiEye, FiPlus, FiCalendar, FiUser, FiActivity, FiHeart, FiFilter } = FiIcons;

const HealthRecordsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRecord, setSelectedRecord] = useState(null);

  const categories = [
    { id: 'all', label: 'All Records', count: 24 },
    { id: 'lab', label: 'Lab Results', count: 8 },
    { id: 'imaging', label: 'Imaging', count: 5 },
    { id: 'prescriptions', label: 'Prescriptions', count: 6 },
    { id: 'visits', label: 'Visit Notes', count: 5 }
  ];

  const healthRecords = [
    {
      id: 1,
      type: 'lab',
      title: 'Complete Blood Count (CBC)',
      date: '2024-01-10',
      doctor: 'Dr. Sarah Williams',
      status: 'Normal',
      category: 'Lab Results',
      description: 'Routine blood work showing normal values'
    },
    {
      id: 2,
      type: 'imaging',
      title: 'Chest X-Ray',
      date: '2024-01-08',
      doctor: 'Dr. Michael Johnson',
      status: 'Normal',
      category: 'Imaging',
      description: 'Clear chest X-ray with no abnormalities'
    },
    {
      id: 3,
      type: 'prescriptions',
      title: 'Lisinopril 10mg',
      date: '2024-01-05',
      doctor: 'Dr. Sarah Williams',
      status: 'Active',
      category: 'Prescriptions',
      description: 'Blood pressure medication'
    },
    {
      id: 4,
      type: 'visits',
      title: 'Annual Physical Exam',
      date: '2024-01-03',
      doctor: 'Dr. Emily Brown',
      status: 'Complete',
      category: 'Visit Notes',
      description: 'Comprehensive annual health examination'
    },
    {
      id: 5,
      type: 'lab',
      title: 'Lipid Panel',
      date: '2023-12-20',
      doctor: 'Dr. Sarah Williams',
      status: 'Elevated',
      category: 'Lab Results',
      description: 'Cholesterol levels slightly elevated'
    }
  ];

  const vitalSigns = [
    { label: 'Blood Pressure', value: '120/80 mmHg', status: 'normal', trend: 'stable' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', trend: 'stable' },
    { label: 'Temperature', value: '98.6°F', status: 'normal', trend: 'stable' },
    { label: 'Weight', value: '165 lbs', status: 'normal', trend: 'down' },
    { label: 'BMI', value: '24.2', status: 'normal', trend: 'stable' }
  ];

  const allergies = [
    { allergen: 'Penicillin', reaction: 'Skin rash', severity: 'Moderate' },
    { allergen: 'Shellfish', reaction: 'Swelling, difficulty breathing', severity: 'Severe' },
    { allergen: 'Pollen', reaction: 'Sneezing, runny nose', severity: 'Mild' }
  ];

  const medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Daily', prescriber: 'Dr. Sarah Williams' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', prescriber: 'Dr. Sarah Williams' },
    { name: 'Atorvastatin', dosage: '20mg', frequency: 'Daily', prescriber: 'Dr. Sarah Williams' }
  ];

  const filteredRecords = selectedCategory === 'all' 
    ? healthRecords 
    : healthRecords.filter(record => record.type === selectedCategory);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'elevated': return 'text-yellow-600 bg-yellow-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'complete': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'lab': return FiActivity;
      case 'imaging': return FiEye;
      case 'prescriptions': return FiFileText;
      case 'visits': return FiUser;
      default: return FiFileText;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Records</h1>
            <p className="text-gray-600">Access and manage your medical records and health information</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Records</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiFileText} className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Recent Tests</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiActivity} className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Medications</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHeart} className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Records List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                {/* Categories */}
                <div className="border-b border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Medical Records</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                      <SafeIcon icon={FiPlus} className="h-4 w-4 mr-2" />
                      Add Record
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.label} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Records */}
                <div className="p-6">
                  <div className="space-y-4">
                    {filteredRecords.map((record) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer"
                        onClick={() => setSelectedRecord(record)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                              <SafeIcon icon={getTypeIcon(record.type)} className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{record.title}</h3>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                                {record.date}
                                <span className="mx-2">•</span>
                                <SafeIcon icon={FiUser} className="h-4 w-4 mr-1" />
                                {record.doctor}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(record.status)}`}>
                              {record.status}
                            </span>
                            <div className="flex space-x-2">
                              <button className="text-gray-400 hover:text-blue-600">
                                <SafeIcon icon={FiEye} className="h-4 w-4" />
                              </button>
                              <button className="text-gray-400 hover:text-blue-600">
                                <SafeIcon icon={FiDownload} className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vital Signs */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest Vital Signs</h2>
                <div className="space-y-3">
                  {vitalSigns.map((vital, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{vital.label}</p>
                        <p className="font-medium text-gray-900">{vital.value}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        vital.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allergies */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Allergies</h2>
                <div className="space-y-3">
                  {allergies.map((allergy, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-3">
                      <p className="font-medium text-gray-900">{allergy.allergen}</p>
                      <p className="text-sm text-gray-600">{allergy.reaction}</p>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${
                        allergy.severity === 'Severe' ? 'bg-red-100 text-red-800' :
                        allergy.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {allergy.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Medications */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Medications</h2>
                <div className="space-y-3">
                  {medications.map((medication, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-gray-900">{medication.name}</p>
                      <p className="text-sm text-gray-600">{medication.dosage} - {medication.frequency}</p>
                      <p className="text-xs text-gray-500 mt-1">Prescribed by {medication.prescriber}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecordsPage;