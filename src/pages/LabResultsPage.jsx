import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiTrendingUp, FiTrendingDown, FiMinus, FiEye, FiDownload, FiCalendar } = FiIcons;

const LabResultsPage = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  const labResults = [
    {
      id: 1,
      testName: 'Complete Blood Count (CBC)',
      date: '2024-01-10',
      doctor: 'Dr. Sarah Williams',
      status: 'normal',
      summary: 'All values within normal range',
      results: [
        { parameter: 'White Blood Cells', value: '6.8', unit: 'K/uL', range: '4.0-11.0', status: 'normal' },
        { parameter: 'Red Blood Cells', value: '4.5', unit: 'M/uL', range: '4.2-5.4', status: 'normal' },
        { parameter: 'Hemoglobin', value: '14.2', unit: 'g/dL', range: '12.0-16.0', status: 'normal' },
        { parameter: 'Hematocrit', value: '42.1', unit: '%', range: '36.0-46.0', status: 'normal' },
        { parameter: 'Platelets', value: '275', unit: 'K/uL', range: '150-400', status: 'normal' }
      ]
    },
    {
      id: 2,
      testName: 'Comprehensive Metabolic Panel',
      date: '2024-01-08',
      doctor: 'Dr. Sarah Williams',
      status: 'abnormal',
      summary: 'Glucose slightly elevated, follow dietary recommendations',
      results: [
        { parameter: 'Glucose', value: '105', unit: 'mg/dL', range: '70-100', status: 'high' },
        { parameter: 'BUN', value: '18', unit: 'mg/dL', range: '7-20', status: 'normal' },
        { parameter: 'Creatinine', value: '1.0', unit: 'mg/dL', range: '0.6-1.2', status: 'normal' },
        { parameter: 'Sodium', value: '140', unit: 'mEq/L', range: '136-145', status: 'normal' },
        { parameter: 'Potassium', value: '4.2', unit: 'mEq/L', range: '3.5-5.1', status: 'normal' }
      ]
    },
    {
      id: 3,
      testName: 'Lipid Panel',
      date: '2023-12-20',
      doctor: 'Dr. Sarah Williams',
      status: 'abnormal',
      summary: 'LDL cholesterol elevated, recommend lifestyle changes',
      results: [
        { parameter: 'Total Cholesterol', value: '220', unit: 'mg/dL', range: '<200', status: 'high' },
        { parameter: 'LDL Cholesterol', value: '145', unit: 'mg/dL', range: '<100', status: 'high' },
        { parameter: 'HDL Cholesterol', value: '45', unit: 'mg/dL', range: '>40', status: 'normal' },
        { parameter: 'Triglycerides', value: '150', unit: 'mg/dL', range: '<150', status: 'normal' }
      ]
    },
    {
      id: 4,
      testName: 'Thyroid Function Tests',
      date: '2023-11-15',
      doctor: 'Dr. Michael Johnson',
      status: 'normal',
      summary: 'Thyroid function within normal limits',
      results: [
        { parameter: 'TSH', value: '2.1', unit: 'mIU/L', range: '0.4-4.0', status: 'normal' },
        { parameter: 'Free T4', value: '1.3', unit: 'ng/dL', range: '0.8-1.8', status: 'normal' },
        { parameter: 'Free T3', value: '3.2', unit: 'pg/mL', range: '2.3-4.2', status: 'normal' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'abnormal': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getParameterStatusColor = (status) => {
    switch (status) {
      case 'normal': return 'text-green-600';
      case 'high': return 'text-red-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getParameterIcon = (status) => {
    switch (status) {
      case 'high': return FiTrendingUp;
      case 'low': return FiTrendingDown;
      default: return FiMinus;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Lab Results</h1>
            <p className="text-gray-600">View and track your laboratory test results</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Tests</p>
                  <p className="text-2xl font-bold text-gray-900">{labResults.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiActivity} className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Normal Results</p>
                  <p className="text-2xl font-bold text-green-600">
                    {labResults.filter(r => r.status === 'normal').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Abnormal Results</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {labResults.filter(r => r.status === 'abnormal').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiTrendingDown} className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Recent Tests</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCalendar} className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Lab Results List */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Lab Results</h2>
              <div className="space-y-4">
                {labResults.map((result) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <SafeIcon icon={FiActivity} className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{result.testName}</h3>
                          <div className="flex items-center text-sm text-gray-600">
                            <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                            {result.date} • {result.doctor}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(result.status)}`}>
                          {result.status === 'normal' ? 'Normal' : 'Abnormal'}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedResult(selectedResult === result.id ? null : result.id)}
                            className="text-blue-600 hover:text-blue-700 p-2"
                          >
                            <SafeIcon icon={FiEye} className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-700 p-2">
                            <SafeIcon icon={FiDownload} className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{result.summary}</p>

                    {selectedResult === result.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 pt-4"
                      >
                        <h4 className="font-medium text-gray-900 mb-3">Detailed Results:</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Parameter</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Value</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Reference Range</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {result.results.map((param, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                  <td className="px-4 py-2 text-sm text-gray-900">{param.parameter}</td>
                                  <td className="px-4 py-2 text-sm font-medium text-gray-900">
                                    {param.value} {param.unit}
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-600">{param.range}</td>
                                  <td className="px-4 py-2">
                                    <div className={`flex items-center ${getParameterStatusColor(param.status)}`}>
                                      <SafeIcon icon={getParameterIcon(param.status)} className="h-4 w-4 mr-1" />
                                      <span className="text-sm font-medium capitalize">{param.status}</span>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
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

export default LabResultsPage;