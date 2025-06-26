import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiAlertTriangle, FiInfo, FiCheckCircle, FiXCircle, FiArrowRight } = FiIcons;

const SymptomCheckerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [severity, setSeverity] = useState('');
  const [duration, setDuration] = useState('');
  const [results, setResults] = useState(null);

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Sore Throat', 'Fatigue', 'Nausea',
    'Dizziness', 'Chest Pain', 'Shortness of Breath', 'Stomach Pain',
    'Back Pain', 'Joint Pain', 'Skin Rash', 'Vomiting', 'Diarrhea'
  ];

  const severityLevels = [
    { level: 'mild', label: 'Mild', description: 'Barely noticeable, doesn\'t interfere with daily activities' },
    { level: 'moderate', label: 'Moderate', description: 'Noticeable but manageable, some impact on daily activities' },
    { level: 'severe', label: 'Severe', description: 'Significantly impacts daily activities, hard to ignore' }
  ];

  const durationOptions = [
    { value: 'hours', label: 'A few hours' },
    { value: 'days', label: '1-3 days' },
    { value: 'week', label: 'About a week' },
    { value: 'weeks', label: 'Several weeks' },
    { value: 'months', label: 'Several months' }
  ];

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = () => {
    // Mock analysis - in real app, this would use AI/ML
    const mockResults = {
      possibleConditions: [
        { name: 'Common Cold', probability: 85, severity: 'low' },
        { name: 'Flu', probability: 60, severity: 'moderate' },
        { name: 'Allergies', probability: 45, severity: 'low' }
      ],
      recommendations: [
        'Get plenty of rest',
        'Stay hydrated',
        'Consider over-the-counter pain relievers',
        'Monitor symptoms for worsening'
      ],
      urgency: severity === 'severe' ? 'high' : 'low'
    };
    setResults(mockResults);
    setCurrentStep(4);
  };

  const resetChecker = () => {
    setCurrentStep(1);
    setSelectedSymptoms([]);
    setSeverity('');
    setDuration('');
    setResults(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Checker</h1>
            <p className="text-gray-600">Get insights about your symptoms and when to seek care</p>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium text-yellow-800">Important Disclaimer</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  This tool is for informational purposes only and should not replace professional medical advice. 
                  If you have severe symptoms or are experiencing a medical emergency, please seek immediate medical attention.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    step <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What symptoms are you experiencing?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {commonSymptoms.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedSymptoms.includes(symptom)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={selectedSymptoms.length === 0}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How severe are your symptoms?</h2>
                <div className="space-y-4">
                  {severityLevels.map((level) => (
                    <button
                      key={level.level}
                      onClick={() => setSeverity(level.level)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        severity === level.level
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{level.label}</div>
                      <div className="text-sm text-gray-600 mt-1">{level.description}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!severity}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How long have you had these symptoms?</h2>
                <div className="space-y-3">
                  {durationOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setDuration(option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        duration === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={analyzeSymptoms}
                    disabled={!duration}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Analyze Symptoms
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Symptom Analysis Results</h2>
                
                {/* Urgency Alert */}
                {results.urgency === 'high' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-red-600 mr-2" />
                      <span className="font-medium text-red-800">High Priority - Consider seeking immediate medical attention</span>
                    </div>
                  </div>
                )}

                {/* Possible Conditions */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Possible Conditions</h3>
                  <div className="space-y-3">
                    {results.possibleConditions.map((condition, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{condition.name}</span>
                          <span className="text-sm text-gray-600">{condition.probability}% match</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className={`h-2 rounded-full ${
                              condition.severity === 'high' ? 'bg-red-500' : 
                              condition.severity === 'moderate' ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${condition.probability}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recommendations</h3>
                  <div className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start">
                        <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                        <span className="text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={resetChecker}
                    className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Check Again
                  </button>
                  <button
                    onClick={() => window.location.href = '/book'}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center"
                  >
                    Book Appointment
                    <SafeIcon icon={FiArrowRight} className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomCheckerPage;