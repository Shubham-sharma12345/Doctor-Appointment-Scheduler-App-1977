import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiStar, FiClock, FiCalendar, FiFilter, FiUser } = FiIcons;

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'dermatology', name: 'Dermatology' },
    { id: 'general', name: 'General Medicine' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'psychiatry', name: 'Psychiatry' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'downtown', name: 'Downtown Medical Center' },
    { id: 'northside', name: 'Northside Clinic' },
    { id: 'westend', name: 'West End Hospital' },
    { id: 'suburban', name: 'Suburban Health Center' }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      specialty: 'Cardiology',
      location: 'Downtown Medical Center',
      rating: 4.9,
      reviews: 127,
      experience: '15 years',
      nextAvailable: 'Tomorrow 2:00 PM',
      acceptingPatients: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      location: 'Northside Clinic',
      rating: 4.8,
      reviews: 89,
      experience: '12 years',
      nextAvailable: 'Today 4:30 PM',
      acceptingPatients: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialty: 'Dermatology',
      location: 'West End Hospital',
      rating: 4.9,
      reviews: 156,
      experience: '10 years',
      nextAvailable: 'Next Week',
      acceptingPatients: false,
      image: 'https://images.unsplash.com/photo-1594824475048-87b2a6b62a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Dr. James Davis',
      specialty: 'Orthopedics',
      location: 'Suburban Health Center',
      rating: 4.7,
      reviews: 203,
      experience: '18 years',
      nextAvailable: 'Tomorrow 10:00 AM',
      acceptingPatients: true,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 5,
      name: 'Dr. Maria Garcia',
      specialty: 'Pediatrics',
      location: 'Downtown Medical Center',
      rating: 4.9,
      reviews: 98,
      experience: '11 years',
      nextAvailable: 'Today 3:00 PM',
      acceptingPatients: true,
      image: 'https://images.unsplash.com/photo-1627026345773-4909a31b0ac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 6,
      name: 'Dr. David Taylor',
      specialty: 'Psychiatry',
      location: 'Northside Clinic',
      rating: 4.8,
      reviews: 74,
      experience: '16 years',
      nextAvailable: 'Next Tuesday',
      acceptingPatients: true,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty.toLowerCase() === selectedSpecialty;
    const matchesLocation = selectedLocation === 'all' || doctor.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex-1 md:ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Doctors</h1>
            <p className="text-gray-600">Search and book appointments with healthcare professionals</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Specialty Filter */}
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>

              {/* Filter Button */}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <SafeIcon icon={FiFilter} className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Doctor Photo */}
                  <div className="relative mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    {doctor.acceptingPatients && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Doctor Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
                      <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                      {doctor.location}
                    </div>
                  </div>

                  {/* Rating and Experience */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center">
                      <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-500 ml-1">({doctor.reviews})</span>
                    </div>
                    <span className="text-gray-600">{doctor.experience}</span>
                  </div>

                  {/* Availability */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Next Available:</span>
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        <SafeIcon icon={FiClock} className="h-4 w-4 mr-1" />
                        {doctor.nextAvailable}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      disabled={!doctor.acceptingPatients}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        doctor.acceptingPatients
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {doctor.acceptingPatients ? 'Book Appointment' : 'Not Accepting Patients'}
                    </button>
                    <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <SafeIcon icon={FiUser} className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;