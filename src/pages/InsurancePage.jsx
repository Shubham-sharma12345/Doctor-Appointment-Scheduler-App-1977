import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiCreditCard, FiUser, FiCalendar, FiDollarSign, FiFileText, FiCheck, FiX } = FiIcons;

const InsurancePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const insuranceInfo = {
    provider: 'Blue Cross Blue Shield',
    planName: 'Premium Health Plan',
    memberId: 'BC123456789',
    groupNumber: 'GRP001234',
    effectiveDate: '2024-01-01',
    deductible: {
      individual: 1500,
      family: 3000,
      used: 450,
      remaining: 1050
    },
    outOfPocketMax: {
      individual: 5000,
      family: 10000,
      used: 850,
      remaining: 4150
    }
  };

  const coverageBenefits = [
    {
      category: 'Primary Care',
      inNetwork: '$25 copay',
      outOfNetwork: '40% after deductible',
      covered: true
    },
    {
      category: 'Specialist Care',
      inNetwork: '$50 copay',
      outOfNetwork: '40% after deductible',
      covered: true
    },
    {
      category: 'Emergency Room',
      inNetwork: '$300 copay',
      outOfNetwork: '$300 copay',
      covered: true
    },
    {
      category: 'Urgent Care',
      inNetwork: '$40 copay',
      outOfNetwork: '40% after deductible',
      covered: true
    },
    {
      category: 'Prescription Drugs',
      inNetwork: '$10/$40/$70 copay',
      outOfNetwork: '40% after deductible',
      covered: true
    },
    {
      category: 'Preventive Care',
      inNetwork: 'No charge',
      outOfNetwork: 'Not covered',
      covered: true
    },
    {
      category: 'Lab Tests',
      inNetwork: '20% after deductible',
      outOfNetwork: '40% after deductible',
      covered: true
    },
    {
      category: 'Mental Health',
      inNetwork: '$25 copay',
      outOfNetwork: '40% after deductible',
      covered: true
    }
  ];

  const recentClaims = [
    {
      id: 1,
      date: '2024-01-10',
      provider: 'Dr. Sarah Williams',
      service: 'Office Visit - Cardiology',
      amount: 250,
      copay: 50,
      insurancePaid: 200,
      status: 'paid'
    },
    {
      id: 2,
      date: '2024-01-05',
      provider: 'LabCorp',
      service: 'Blood Panel',
      amount: 180,
      copay: 0,
      insurancePaid: 144,
      status: 'paid'
    },
    {
      id: 3,
      date: '2023-12-20',
      provider: 'City Pharmacy',
      service: 'Prescription - Lisinopril',
      amount: 45,
      copay: 10,
      insurancePaid: 35,
      status: 'paid'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'denied': return 'bg-red-100 text-red-800';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance</h1>
            <p className="text-gray-600">Manage your insurance coverage and claims</p>
          </div>

          {/* Insurance Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{insuranceInfo.provider}</h2>
              <SafeIcon icon={FiShield} className="h-8 w-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-100 text-sm">Plan Name</p>
                <p className="text-lg font-semibold">{insuranceInfo.planName}</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm">Member ID</p>
                <p className="text-lg font-semibold">{insuranceInfo.memberId}</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm">Group Number</p>
                <p className="text-lg font-semibold">{insuranceInfo.groupNumber}</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm">Effective Date</p>
                <p className="text-lg font-semibold">{insuranceInfo.effectiveDate}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['overview', 'benefits', 'claims'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Deductible Progress */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Deductible Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Individual Deductible</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${insuranceInfo.deductible.used} / ${insuranceInfo.deductible.individual}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(insuranceInfo.deductible.used / insuranceInfo.deductible.individual) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      ${insuranceInfo.deductible.remaining} remaining
                    </p>
                  </div>
                </div>
              </div>

              {/* Out-of-Pocket Progress */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Out-of-Pocket Maximum</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Individual Maximum</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${insuranceInfo.outOfPocketMax.used} / ${insuranceInfo.outOfPocketMax.individual}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(insuranceInfo.outOfPocketMax.used / insuranceInfo.outOfPocketMax.individual) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      ${insuranceInfo.outOfPocketMax.remaining} remaining
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon={FiCreditCard} className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">View ID Card</span>
                  </button>
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon={FiFileText} className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-sm font-medium">Submit Claim</span>
                  </button>
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon={FiUser} className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="text-sm font-medium">Find Provider</span>
                  </button>
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <SafeIcon icon={FiDollarSign} className="h-6 w-6 text-orange-600 mr-2" />
                    <span className="text-sm font-medium">Cost Estimator</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Coverage Benefits</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Service</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">In-Network</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Out-of-Network</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {coverageBenefits.map((benefit, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{benefit.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{benefit.inNetwork}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{benefit.outOfNetwork}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <SafeIcon 
                                icon={benefit.covered ? FiCheck : FiX} 
                                className={`h-4 w-4 mr-2 ${benefit.covered ? 'text-green-600' : 'text-red-600'}`} 
                              />
                              <span className={`text-sm ${benefit.covered ? 'text-green-600' : 'text-red-600'}`}>
                                {benefit.covered ? 'Covered' : 'Not Covered'}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'claims' && (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Claims</h3>
                <div className="space-y-4">
                  {recentClaims.map((claim) => (
                    <motion.div
                      key={claim.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{claim.service}</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                            {claim.date} • {claim.provider}
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(claim.status)}`}>
                          {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Total Amount:</span>
                          <p className="font-medium text-gray-900">${claim.amount}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Your Copay:</span>
                          <p className="font-medium text-gray-900">${claim.copay}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Insurance Paid:</span>
                          <p className="font-medium text-gray-900">${claim.insurancePaid}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Your Responsibility:</span>
                          <p className="font-medium text-gray-900">${claim.amount - claim.insurancePaid}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;