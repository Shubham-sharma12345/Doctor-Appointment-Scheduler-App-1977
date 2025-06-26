import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiActivity, FiTarget, FiTrendingUp, FiCalendar, FiClock, FiAward, FiCheck } = FiIcons;

const WellnessPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const wellnessMetrics = [
    { 
      id: 'steps', 
      label: 'Daily Steps', 
      current: 8432, 
      target: 10000, 
      unit: 'steps',
      icon: FiActivity,
      color: 'blue'
    },
    { 
      id: 'water', 
      label: 'Water Intake', 
      current: 6, 
      target: 8, 
      unit: 'glasses',
      icon: FiHeart,
      color: 'cyan'
    },
    { 
      id: 'sleep', 
      label: 'Sleep Hours', 
      current: 7.5, 
      target: 8, 
      unit: 'hours',
      icon: FiClock,
      color: 'purple'
    },
    { 
      id: 'exercise', 
      label: 'Exercise Minutes', 
      current: 45, 
      target: 60, 
      unit: 'minutes',
      icon: FiTarget,
      color: 'green'
    }
  ];

  const wellnessGoals = [
    {
      id: 1,
      title: 'Walk 10,000 Steps Daily',
      description: 'Maintain an active lifestyle by walking at least 10,000 steps each day',
      progress: 84,
      daysCompleted: 21,
      totalDays: 30,
      category: 'Physical Activity'
    },
    {
      id: 2,
      title: 'Drink 8 Glasses of Water',
      description: 'Stay hydrated by drinking 8 glasses of water throughout the day',
      progress: 75,
      daysCompleted: 15,
      totalDays: 30,
      category: 'Hydration'
    },
    {
      id: 3,
      title: 'Sleep 8 Hours Nightly',
      description: 'Get quality sleep by maintaining 8 hours of sleep each night',
      progress: 93,
      daysCompleted: 28,
      totalDays: 30,
      category: 'Sleep'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', steps: 9500, water: 7, sleep: 7.5, exercise: 30 },
    { day: 'Tue', steps: 10200, water: 8, sleep: 8, exercise: 45 },
    { day: 'Wed', steps: 8900, water: 6, sleep: 7, exercise: 60 },
    { day: 'Thu', steps: 11000, water: 8, sleep: 8.5, exercise: 40 },
    { day: 'Fri', steps: 9800, water: 7, sleep: 7.5, exercise: 55 },
    { day: 'Sat', steps: 12000, water: 9, sleep: 9, exercise: 75 },
    { day: 'Sun', steps: 8432, water: 6, sleep: 7.5, exercise: 45 }
  ];

  const healthTips = [
    {
      category: 'Nutrition',
      tip: 'Include more colorful vegetables in your meals for better antioxidants',
      icon: FiHeart
    },
    {
      category: 'Exercise',
      tip: 'Take the stairs instead of elevators to increase daily activity',
      icon: FiActivity
    },
    {
      category: 'Mental Health',
      tip: 'Practice 5 minutes of deep breathing exercises daily',
      icon: FiTarget
    },
    {
      category: 'Sleep',
      tip: 'Keep your bedroom cool and dark for better sleep quality',
      icon: FiClock
    }
  ];

  const achievements = [
    { title: 'Step Master', description: 'Walked 10,000+ steps for 7 days straight', earned: true },
    { title: 'Hydration Hero', description: 'Drank 8 glasses of water daily for 14 days', earned: true },
    { title: 'Sleep Champion', description: 'Maintained 8+ hours of sleep for 30 days', earned: false },
    { title: 'Fitness Enthusiast', description: 'Exercised for 30+ minutes daily for 21 days', earned: false }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wellness Dashboard</h1>
            <p className="text-gray-600">Track your health goals and build healthy habits</p>
          </div>

          {/* Today's Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {wellnessMetrics.map((metric) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-full flex items-center justify-center`}>
                    <SafeIcon icon={metric.icon} className={`h-6 w-6 text-${metric.color}-600`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{metric.current}</div>
                    <div className="text-sm text-gray-500">/ {metric.target} {metric.unit}</div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{metric.label}</span>
                    <span className="text-gray-500">{Math.round((metric.current / metric.target) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={`bg-${metric.color}-500 h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wellness Goals */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Wellness Goals</h2>
                <div className="space-y-4">
                  {wellnessGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{goal.title}</h3>
                        <span className="text-sm text-gray-500">{goal.category}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-500">{goal.daysCompleted}/{goal.totalDays} days</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">{goal.progress}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
                      }`}>
                        <SafeIcon 
                          icon={achievement.earned ? FiAward : FiTarget} 
                          className={`h-4 w-4 ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`} 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-sm font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Tips */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Health Tips</h2>
                <div className="space-y-4">
                  {healthTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <SafeIcon icon={tip.icon} className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{tip.category}</h3>
                        <p className="text-sm text-gray-600 mt-1">{tip.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Progress</h2>
            <div className="grid grid-cols-7 gap-4">
              {weeklyProgress.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                  <div className="space-y-2">
                    <div className="bg-blue-100 rounded p-2">
                      <div className="text-xs text-blue-600">Steps</div>
                      <div className="text-sm font-medium">{day.steps.toLocaleString()}</div>
                    </div>
                    <div className="bg-cyan-100 rounded p-2">
                      <div className="text-xs text-cyan-600">Water</div>
                      <div className="text-sm font-medium">{day.water}gl</div>
                    </div>
                    <div className="bg-purple-100 rounded p-2">
                      <div className="text-xs text-purple-600">Sleep</div>
                      <div className="text-sm font-medium">{day.sleep}h</div>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <div className="text-xs text-green-600">Exercise</div>
                      <div className="text-sm font-medium">{day.exercise}m</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessPage;