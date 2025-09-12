import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Plane, Target, Eye, Heart, Users, Award, Shield, Star } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Harsha Lucky Tours | Travel Lucky Draw Company Bangalore</title>
        <meta name="description" content="Learn about Harsha Lucky Tours - a unique travel company making dreams come true through lucky draws. Based in Bangalore, serving Karnataka and beyond." />
        <meta name="keywords" content="about harsha lucky tours, travel company bangalore, lucky draw tours, travel dreams, bangalore tour company" />
      </Helmet>

      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 rounded-full shadow-lg">
                <Plane className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              About Harsha Lucky Tours
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to Harsha Lucky Tours, where dreams take flight! ✈️
            </p>
          </div>

          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Making Travel Dreams Come True
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  We are a unique draw-based travel company that gives lucky winners the chance to explore exciting destinations. 
                  With just a simple entry, you could be the next traveler to pack your bags and fly to your dream location.
                </p>
                <p>
                  Our mission is to make travel fun, thrilling, and full of surprises. We believe that everyone deserves to 
                  experience the joy of travel, regardless of their financial situation. Through our innovative lucky draw system, 
                  we make premium travel experiences accessible to everyone.
                </p>
                <p>
                  Safe, reliable, and exciting – we make travel dreams come true. Our transparent process and commitment to 
                  customer satisfaction have made us a trusted name in the travel industry.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://media.easemytrip.com/media/Deal/DL638361835404889668/SightSeeing/SightSeeingEYfqaA.jpg" 
                alt="Travel destination" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OW-8LZ6FnMM6kOYZlyufxHwWv91vPv4BSr6aSIxVvW7Z_h-g6ptq5ErLGwpmh3-WSyM&usqp=CAU" 
                alt="Happy travelers" 
                className="rounded-xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://www.gafencushop.com/wp-content/uploads/2020/10/Ajanta-and-Ellora-Indias-iconic-ancient-caves-gafencu-magazine-travel-feature.jpg" 
                alt="Adventure moments" 
                className="rounded-xl shadow-lg h-48 w-full object-cover -mt-8"
              />
              <img 
                src="https://odishadairy.wordpress.com/wp-content/uploads/2015/07/jagannath-03.jpg" 
                alt="Scenic views" 
                className="rounded-xl shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make travel accessible, exciting, and memorable for everyone through our innovative lucky draw system and exceptional service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted and loved travel company, transforming how people experience and afford travel adventures.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparency, reliability, customer satisfaction, and creating magical travel experiences that last a lifetime.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Promise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every member is treated like family, with personalized service and support throughout their journey with us.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
       <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 mb-20 text-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Our Vision for the Future
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">🎁</div>
      <div className="text-xl opacity-90">Monthly Lucky Draws</div>
      <p className="text-sm opacity-75 mt-2">Win exciting holiday packages every month</p>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">🌍</div>
      <div className="text-xl opacity-90">Unique Destinations</div>
      <p className="text-sm opacity-75 mt-2">From temples to beaches to international trips</p>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">🤝</div>
      <div className="text-xl opacity-90">Member Benefits</div>
      <p className="text-sm opacity-75 mt-2">Exclusive travel deals and discounts</p>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">✈️</div>
      <div className="text-xl opacity-90">Hassle-Free Trips</div>
      <p className="text-sm opacity-75 mt-2">Well-organized tours with everything included</p>
    </div>
  </div>
</div>


          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Why Travelers Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Transparent Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our lucky draw process is completely transparent with live draws streamed online. 
                  No hidden conditions or manipulations - just fair chances for everyone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your payments and personal information are completely secure. We maintain the highest standards 
                  of data protection and financial security.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every package includes premium accommodations, guided tours, meals, and transportation. 
                  We ensure winners have an unforgettable travel experience.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Stories */}
          {/* <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Customer Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg" 
                    alt="Happy customer" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Rajesh & Priya Kumar</h4>
                    <p className="text-gray-600">Won Kerala Backwaters Package</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "We never imagined we could afford such a luxury trip! The houseboat experience in Alleppey was 
                  magical. Harsha Lucky Tours made our anniversary unforgettable. The process was transparent and 
                  the team was incredibly supportive."
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
                    alt="Happy customer" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">Suresh & Lakshmi</h4>
                    <p className="text-gray-600">Won Goa Beach Package</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "Being first-time winners, we were amazed by the quality of accommodation and activities. 
                  The beach resort was fantastic and everything was well organized. Thank you Harsha Lucky Tours 
                  for this wonderful experience!"
                </p>
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join our growing family of happy travelers and experience the thrill of winning your dream vacation. 
                Your adventure awaits!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/packages/member"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                 View Monthly Draw Packages
                </a>
                <a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;