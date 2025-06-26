import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAlertTriangle, FiPhone, FiMapPin, FiClock, FiHeart, FiActivity, FiUser, FiNavigation } = FiIcons;

const EmergencyPage = () => {
  const [selectedEmergency, setSelectedEmergency] = useState(null);

  const emergencyContacts = [
    { service: 'Emergency Services', number: '911', description: 'Life-threatening emergencies' },
    { service: 'Poison Control', number: '1-800-222-1222', description: 'Poisoning emergencies' },
    { service: 'Mental Health Crisis', number: '988', description: 'Suicide & Crisis Lifeline' },
    { service: 'Hospital Emergency', number: '(555) 123-4567', description: 'Local hospital emergency room' }
  ];

  const emergencyTypes = [
    {
      id: 'chest-pain',
      title: 'Chest Pain',
      description: 'Severe chest pain or pressure',
      severity: 'critical',
      actions: [
        'Call 911 immediately',
        'Chew aspirin if not allergic',
        'Sit upright and stay calm',
        'Loosen tight clothing'
      ]
    },
    {
      id: 'breathing',
      title: 'Difficulty Breathing',
      description: 'Severe shortness of breath',
      severity: 'critical',
      actions: [
        'Call 911 immediately',
        'Sit upright',
        'Use rescue inhaler if available',
        'Stay calm and breathe slowly'
      ]
    },
    {
      id: 'allergic',
      title: 'Severe Allergic Reaction',
      description: 'Swelling, hives, difficulty breathing',
      severity: 'critical',
      actions: [
        'Call 911 immediately',
        'Use EpiPen if available',
        'Remove allergen source',
        'Lie down with legs elevated'
      ]
    },
    {
      id: 'bleeding',
      title: 'Severe Bleeding',
      description: 'Heavy bleeding that won\'t stop',
      severity: 'urgent',
      actions: [
        'Apply direct pressure',
        'Elevate injured area',
        'Call 911 if bleeding is severe',
        'Use clean cloth or bandage'
      ]
    }
  ];

  const nearbyHospitals = [
    {
      name: 'City General Hospital',
      address: '123 Medical Center Dr',
      distance: '2.3 miles',
      phone: '(555) 123-4567',
      waitTime: '15 min',
      hasER: true
    },
    {
      name: 'Regional Medical Center',
      address: '456 Health Plaza',
      distance: '4.1 miles',
      phone: '(555) 987-6543',
      waitTime: '8 min',
      hasER: true
    },
    {
      name: 'Urgent Care Plus',
      address: '789 Quick Care Blvd',
      distance: '1.8 miles',
      phone: '(555) 456-7890',
      waitTime: '20 min',
      hasER: false
    }
  ];

  const firstAidSteps = {
    'chest-pain': [
      'Have the person sit down and rest',
      'Loosen any tight clothing',
      'If prescribed, help them take nitroglycerin',
      'Give aspirin if not allergic (and conscious)',
      'Monitor breathing and pulse',
      'Begin CPR if person becomes unconscious'
    ],
    'breathing': [
      'Help person sit upright',
      'Loosen tight clothing around neck/chest',
      'Help use rescue inhaler if available',
      'Encourage slow, deep breaths',
      'Stay calm and reassuring',
      'Prepare for CPR if needed'
    ],
    'allergic': [
      'Remove or avoid the allergen',
      'Help use EpiPen if available',
      'Have person lie down with legs elevated',
      'Loosen tight clothing',
      'Monitor breathing closely',
      'Be prepared to give CPR'
    ],
    'bleeding': [
      'Apply direct pressure with clean cloth',
      'Maintain pressure continuously',
      'Elevate injured area above heart',
      'Apply pressure to pressure points',
      'Apply tourniquet if trained',
      'Treat for shock if needed'
    ]
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <SafeIcon icon={FiAlertTriangle} className="h-8 w-8 text-red-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Emergency Care</h1>
            </div>
            <p className="text-gray-600">Quick access to emergency information and services</p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-medium text-red-800">
                If you're experiencing a life-threatening emergency, call 911 immediately
              </span>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => window.open(`tel:${contact.number}`)}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={FiPhone} className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{contact.service}</h3>
                  <p className="text-xl font-bold text-red-600 mb-2">{contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Emergency Types */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Emergency Situations</h2>
                <div className="space-y-4">
                  {emergencyTypes.map((emergency) => (
                    <div
                      key={emergency.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedEmergency === emergency.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedEmergency(selectedEmergency === emergency.id ? null : emergency.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            emergency.severity === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                          }`}></div>
                          <div>
                            <h3 className="font-medium text-gray-900">{emergency.title}</h3>
                            <p className="text-sm text-gray-600">{emergency.description}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          emergency.severity === 'critical' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {emergency.severity}
                        </span>
                      </div>

                      {selectedEmergency === emergency.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <h4 className="font-medium text-gray-900 mb-3">Immediate Actions:</h4>
                          <div className="space-y-2">
                            {emergency.actions.map((action, index) => (
                              <div key={index} className="flex items-start">
                                <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="text-sm text-gray-700">{action}</span>
                              </div>
                            ))}
                          </div>
                          
                          {firstAidSteps[emergency.id] && (
                            <div className="mt-4">
                              <h4 className="font-medium text-gray-900 mb-3">First Aid Steps:</h4>
                              <div className="space-y-2">
                                {firstAidSteps[emergency.id].map((step, index) => (
                                  <div key={index} className="flex items-start">
                                    <SafeIcon icon={FiActivity} className="h-4 w-4 text-blue-600 mt-0.5 mr-2" />
                                    <span className="text-sm text-gray-700">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nearby Hospitals */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Nearby Hospitals</h2>
                <div className="space-y-4">
                  {nearbyHospitals.map((hospital, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{hospital.name}</h3>
                        {hospital.hasER && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            ER
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                          {hospital.address}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiNavigation} className="h-4 w-4 mr-1" />
                          {hospital.distance}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                          Wait time: {hospital.waitTime}
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => window.open(`tel:${hospital.phone}`)}
                          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
                        >
                          Call
                        </button>
                        <button
                          onClick={() => window.open(`https://maps.google.com/?q=${hospital.address}`)}
                          className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50"
                        >
                          Directions
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="h-5 w-5 mr-2" />
                    Call 911
                  </button>
                  <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                    <SafeIcon icon={FiMapPin} className="h-5 w-5 mr-2" />
                    Find Nearest Hospital
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="h-5 w-5 mr-2" />
                    Emergency Contacts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;