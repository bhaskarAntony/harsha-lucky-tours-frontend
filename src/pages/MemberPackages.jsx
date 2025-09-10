import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Users, MapPin, Gift } from 'lucide-react';
import { memberPackages } from '../data/packages';

const MemberPackages = () => {
  return (
    <>
      <Helmet>
        <title>Member Packages | Harsha Lucky Tours | Lucky Draw Travel Packages</title>
        <meta name="description" content="Explore our exclusive member travel packages. Pay monthly installments and win amazing trips through lucky draws. Destinations across India and abroad." />
        <meta name="keywords" content="member packages, lucky draw travel, monthly installment tours, Bangalore travel packages, Karnataka tours" />
      </Helmet>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Member Travel Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our exclusive membership program and participate in monthly lucky draws. 
              All members pay affordable monthly installments and get the chance to win incredible travel experiences!
            </p>
            <div className="mt-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Gift className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">How It Works</h3>
              </div>
              <p className="text-gray-700">
                <strong>No upfront payment required!</strong> Pay small monthly installments and automatically enter our transparent lucky draw system. 
                Winners are selected every month and enjoy their dream vacation completely free!
              </p>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberPackages.map((pkg) => (
              <div key={pkg.packageId} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.images[0]} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Member Only
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {pkg.destination.join(', ')}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

                  {/* Package Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <span className="font-semibold text-gray-800">{pkg.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-medium">For Couples</span>
                      </div>
                      <span className="font-semibold text-gray-800">{pkg.couples} People</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Gift className="h-5 w-5 mr-2" />
                        <span className="font-medium">Draw Date</span>
                      </div>
                      <span className="font-semibold text-blue-600">{pkg.Month} {pkg.year}</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Package Inclusions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.inclusions.map((inclusion, index) => (
                        <span 
                          key={index} 
                          className="bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 px-3 py-1 rounded-full text-sm border border-blue-100"
                        >
                          {inclusion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Draw Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">Draw No: {pkg.drawNo}</span>
                      <span className="text-sm text-gray-600">
                        {pkg.drawDate.toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Monthly installment members automatically enter this draw
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Join Our Membership?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Start your journey with affordable monthly payments and get the chance to win incredible travel experiences!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Gift className="mr-2 h-5 w-5" />
                Join Membership Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPackages;