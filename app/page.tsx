'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://source.unsplash.com/100x60/?benjamin,franklin,portrait" 
                alt="Benjamin Franklin Logo" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-primary-700">Benjamin Franklin</h1>
                <p className="text-sm text-primary-600">The Punctual Plumber</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="tel:7173841610" className="text-xl font-bold text-accent-600">🕐 (717) 384-1610</a>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium py-2">Home</a>
                <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium py-2">Services</a>
                <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium py-2">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium py-2">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-secondary-50 to-primary-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-accent-500 text-white px-6 py-3 rounded-full inline-block mb-6">
                <span className="font-bold text-4xl">$25 OFF</span>
                <span className="ml-2 text-lg">ANY REPAIR OR SERVICE</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Lancaster's Most
                <span className="text-primary-600"> Punctual </span>
                Plumber
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Emergency plumbing services available 24/7. Professional, reliable, and always on time. 
                Serving Lancaster County with pride since day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:7173841610" className="bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-700 transition-colors text-center">
                  📞 CALL NOW: (717) 384-1610
                </a>
                <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors text-center">
                  Get Free Quote
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-600">Google Reviews - Trusted by 500+ customers</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://source.unsplash.com/600x700/?plumber,professional,uniform" 
                alt="Professional Plumber" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-accent-600">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Plumbing Services in Lancaster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we handle all your plumbing needs 
              with professional expertise and punctual service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?emergency,plumbing,repair" 
                alt="Emergency Repairs" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency plumbing services for burst pipes, severe leaks, and other urgent issues. 
                We respond fast to minimize damage to your property.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Burst pipe repair</li>
                <li>• Emergency leak fixes</li>
                <li>• Sewer backups</li>
                <li>• Water heater failures</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?drain,cleaning,plumbing" 
                alt="Drain Cleaning" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌊 Drain & Sewer Services</h3>
              <p className="text-gray-600 mb-4">
                Professional drain cleaning and sewer line services to keep your water flowing smoothly. 
                We use advanced equipment for thorough cleaning.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Drain cleaning & unclogging</li>
                <li>• Sewer line repair</li>
                <li>• Video pipe inspection</li>
                <li>• Hydro jetting</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?water,heater,installation" 
                alt="Water Heater Services" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔥 Water Heater Services</h3>
              <p className="text-gray-600 mb-4">
                Complete water heater installation, repair, and maintenance services. 
                We work with all brands and both traditional and tankless systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Water heater installation</li>
                <li>• Repair & maintenance</li>
                <li>• Tankless systems</li>
                <li>• Energy-efficient upgrades</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?pipe,repair,plumbing" 
                alt="Pipe Repair" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Pipe Repair & Installation</h3>
              <p className="text-gray-600 mb-4">
                Expert pipe repair, replacement, and installation services for residential and commercial properties. 
                We use quality materials for lasting results.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Pipe repair & replacement</li>
                <li>• Repiping services</li>
                <li>• Leak detection</li>
                <li>• Pipe insulation</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?bathroom,fixtures,faucet" 
                alt="Fixture Installation" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚿 Fixture Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional installation of faucets, toilets, sinks, and other plumbing fixtures. 
                Upgrade your home with modern, efficient fixtures.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Faucet installation</li>
                <li>• Toilet replacement</li>
                <li>• Sink installation</li>
                <li>• Shower & tub fixtures</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <img 
                src="https://source.unsplash.com/300x200/?plumbing,maintenance,inspection" 
                alt="Maintenance Services" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Maintenance & Inspections</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance and inspections to prevent costly repairs. 
                Keep your plumbing system running efficiently year-round.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Annual plumbing inspections</li>
                <li>• Preventive maintenance</li>
                <li>• System tune-ups</li>
                <li>• Water quality testing</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
              Request Service Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Benjamin Franklin Plumbing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're Lancaster's most trusted plumbing service, committed to providing punctual, 
                professional, and reliable service to every customer. Our team of licensed plumbers 
                brings years of experience to every job.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Guarantee</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary-600 mb-2">Licensed</div>
                  <div className="text-gray-600">& Insured</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Punctual Service</h3>
                    <p className="text-gray-600">We arrive on time, every time. Your time is valuable to us.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Technicians</h3>
                    <p className="text-gray-600">Licensed, experienced plumbers with ongoing training.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fair Pricing</h3>
                    <p className="text-gray-600">Transparent, upfront pricing with no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://source.unsplash.com/600x700/?plumbing,team,professional" 
                alt="Our Team" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-secondary-400 text-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">⭐ 4.9/5</div>
                  <div className="text-sm">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across Lancaster County.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6">
                "Benjamin Franklin Plumbing saved the day! Had a burst pipe emergency at 2 AM and they 
                were here within 30 minutes. Professional, courteous, and fixed everything perfectly."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://source.unsplash.com/80x80/?woman,professional,portrait" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Lancaster, PA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6">
                "Excellent service! They installed our new water heater quickly and efficiently. 
                Fair pricing and they cleaned up everything afterwards. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://source.unsplash.com/80x80/?man,professional,portrait" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">Lancaster, PA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6">
                "These guys are the real deal. Punctual, professional, and they stand behind their work. 
                We've used them multiple times and they never disappoint."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://source.unsplash.com/80x80/?elderly,woman,portrait" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Dorothy Chen</div>
                  <div className="text-sm text-gray-500">Lancaster, PA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-primary-50 px-6 py-3 rounded-full">
              <span className="text-2xl mr-2">🏆</span>
              <span className="font-semibold text-primary-700">Google Reviews: 4.9/5 Stars • 500+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready for Punctual Plumbing Service?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today for fast, reliable plumbing services in Lancaster County.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-300">24/7 Emergency Service</p>
                    <a href="tel:7173841610" className="text-accent-400 hover:text-accent-300 text-xl font-bold">
                      (717) 384-1610
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">Send us a message</p>
                    <a href="mailto:contact@example.com" className="text-accent-400 hover:text-accent-300">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-300">
                      518 Running Pump Rd<br/>
                      Lancaster, PA 17601, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                  <div className="text-accent-400 font-semibold mt-4">
                    🚨 24/7 Emergency Service Available
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Request Service</h3>
              
              <form className="space-y-6" data-netlify="true" method="post">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="drain-cleaning">Drain Cleaning</option>
                    <option value="water-heater">Water Heater Service</option>
                    <option value="pipe-repair">Pipe Repair</option>
                    <option value="fixture-installation">Fixture Installation</option>
                    <option value="maintenance">Maintenance/Inspection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Describe Your Issue
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                    placeholder="Please describe your plumbing issue or service needs..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="emergency" 
                      className="mr-3 rounded text-accent-500 focus:ring-accent-500"
                    />
                    <span className="text-sm">This is an emergency (we'll call you within 15 minutes)</span>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-700 transition-colors"
                >
                  Request Service Call
                </button>
                
                <p className="text-sm text-gray-400 text-center">
                  Or call us directly at <a href="tel:7173841610" className="text-accent-400">(717) 384-1610</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://source.unsplash.com/80x50/?benjamin,franklin,portrait" 
                  alt="Benjamin Franklin Logo" 
                  className="h-12 w-auto mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">Benjamin Franklin Plumbing</h3>
                  <p className="text-sm text-gray-400">The Punctual Plumber</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Lancaster County's most trusted plumbing service. Professional, punctual, and reliable 
                plumbing solutions for your home and business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.32-.293 1.175-.334 1.339-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Emergency Repairs</a></li>
                <li><a href="#services" className="hover:text-white">Drain Cleaning</a></li>
                <li><a href="#services" className="hover:text-white">Water Heaters</a></li>
                <li><a href="#services" className="hover:text-white">Pipe Repair</a></li>
                <li><a href="#services" className="hover:text-white">Fixture Installation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:7173841610" className="hover:text-white">
                    📞 (717) 384-1610
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@example.com" className="hover:text-white">
                    📧 contact@example.com
                  </a>
                </li>
                <li>📍 518 Running Pump Rd<br/>Lancaster, PA 17601</li>
                <li>🌐 https://benfranklinplumbingpros.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Benjamin Franklin Plumbing of Lancaster. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed & Insured • PA License #12345</p>
          </div>
        </div>
      </footer>
    </div>
  )
}