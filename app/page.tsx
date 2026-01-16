'use client'

import React, { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form will be handled by Netlify
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-bf-blue font-bold text-2xl">
                Benjamin Franklin
              </div>
              <div className="ml-2 text-bf-gold font-semibold text-lg">
                THE PUNCTUAL PLUMBER
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-bf-blue transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-bf-blue transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-bf-blue transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-bf-blue transition-colors">Contact</a>
              <a href="tel:717-707-7811" className="bg-bf-red text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors">
                (717) 707-7811
              </a>
            </div>
            <div className="md:hidden">
              <a href="tel:717-707-7811" className="bg-bf-red text-white px-4 py-2 rounded-lg font-bold text-sm">
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-bf-gold to-yellow-400 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Lancaster's Most
                <span className="block text-bf-navy">Reliable Plumber</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Emergency repairs, drain cleaning, water heater service & more. 
                Professional plumbing services you can trust.
              </p>
              <div className="bg-bf-blue text-white p-6 rounded-xl mb-8 inline-block">
                <div className="text-4xl font-bold mb-2">$25 OFF</div>
                <div className="text-lg">ANY REPAIR OR SERVICE</div>
                <div className="text-sm opacity-90 mt-1">*Cannot be combined with other offers</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:717-707-7811" className="bg-bf-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors transform hover:scale-105 text-center">
                  📞 CALL NOW: (717) 707-7811
                </a>
                <a href="#contact" className="bg-white text-bf-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 text-center border-2 border-bf-blue">
                  GET FREE ESTIMATE
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-6 space-x-2">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-white font-semibold">Google Reviews</span>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=500&fit=crop" 
                alt="Professional Plumber" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bf-navy mb-4">Our Expert Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we handle all your plumbing needs with professional expertise and guaranteed satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Emergency Plumbing</h3>
              <p className="text-gray-600 mb-6">24/7 emergency service for burst pipes, major leaks, and urgent plumbing issues. Fast response guaranteed.</p>
              <a href="tel:717-707-7811" className="bg-bf-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block">
                CALL NOW
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Drain Cleaning</h3>
              <p className="text-gray-600 mb-6">Professional drain cleaning services to clear clogs and restore proper flow in sinks, toilets, and main lines.</p>
              <a href="#contact" className="bg-bf-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                GET QUOTE
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Water Heater Service</h3>
              <p className="text-gray-600 mb-6">Water heater installation, repair, and maintenance. Traditional and tankless systems available.</p>
              <a href="#contact" className="bg-bf-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                SCHEDULE SERVICE
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚿</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Fixture Installation</h3>
              <p className="text-gray-600 mb-6">Expert installation of faucets, toilets, showers, and other plumbing fixtures. Quality workmanship guaranteed.</p>
              <a href="#contact" className="bg-bf-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                LEARN MORE
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Leak Detection</h3>
              <p className="text-gray-600 mb-6">Advanced leak detection technology to find hidden leaks and prevent water damage to your property.</p>
              <a href="#contact" className="bg-bf-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                DETECT LEAKS
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-bf-navy mb-4">Whole Home Repiping</h3>
              <p className="text-gray-600 mb-6">Complete repiping services for older homes. Upgrade to modern, reliable plumbing systems.</p>
              <a href="#contact" className="bg-bf-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-block">
                FREE ESTIMATE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-bf-navy mb-6">Why Choose Benjamin Franklin Plumbing?</h2>
              <p className="text-xl text-gray-600 mb-8">
                As Lancaster's trusted plumbing professionals, we combine old-fashioned reliability with modern expertise to deliver exceptional service every time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bf-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bf-navy mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed Pennsylvania plumbers with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bf-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bf-navy mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Plumbing emergencies don't wait. Neither do we. Call anytime for immediate assistance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bf-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bf-navy mb-2">Upfront Pricing</h3>
                    <p className="text-gray-600">No surprises. We provide clear, upfront pricing before any work begins.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bf-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bf-navy mb-2">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop" 
                alt="Professional Plumbing Service" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bf-navy mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - see what Lancaster residents say about our service!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-bf-navy">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Exceptional service! They fixed our emergency leak within an hour of calling. Professional, clean, and reasonably priced. Highly recommend!"
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Mike Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-bf-navy">Mike Rodriguez</h4>
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Best plumber in Lancaster! They installed our new water heater quickly and explained everything clearly. Fair pricing and excellent work."
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/67.jpg" 
                  alt="Lisa Chen" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-bf-navy">Lisa Chen</h4>
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Outstanding customer service! They were punctual, professional, and solved our drain problem completely. Will definitely use them again!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-bf-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Estimate Today</h2>
            <p className="text-xl text-gray-300">Ready to solve your plumbing problems? Contact us now!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-bf-navy mb-6">Request Service</h3>
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="Emergency Plumbing">Emergency Plumbing</option>
                    <option value="Drain Cleaning">Drain Cleaning</option>
                    <option value="Water Heater Service">Water Heater Service</option>
                    <option value="Fixture Installation">Fixture Installation</option>
                    <option value="Leak Detection">Leak Detection</option>
                    <option value="Repiping">Whole Home Repiping</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bf-blue focus:border-transparent"
                    placeholder="Please describe your plumbing issue or service needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-bf-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors transform hover:scale-105"
                >
                  GET FREE ESTIMATE
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="text-white">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-bf-gold rounded-full p-3 mr-4">
                      <div className="text-bf-navy text-xl">📞</div>
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <a href="tel:717-707-7811" className="text-bf-gold hover:text-yellow-300 transition-colors text-lg">
                        (717) 707-7811
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-bf-gold rounded-full p-3 mr-4">
                      <div className="text-bf-navy text-xl">📧</div>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <a href="mailto:contact@benfranklinplumbingpros.com" className="text-bf-gold hover:text-yellow-300 transition-colors">
                        contact@benfranklinplumbingpros.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-bf-gold rounded-full p-3 mr-4">
                      <div className="text-bf-navy text-xl">📍</div>
                    </div>
                    <div>
                      <h4 className="font-bold">Service Area</h4>
                      <p className="text-gray-300">Lancaster, PA & Surrounding Areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-bf-gold rounded-full p-3 mr-4">
                      <div className="text-bf-navy text-xl">🕒</div>
                    </div>
                    <div>
                      <h4 className="font-bold">Hours</h4>
                      <p className="text-gray-300">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-bf-blue bg-opacity-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency? Call Now!</h3>
                <p className="mb-6 text-gray-200">
                  Don't wait when you have a plumbing emergency. Our experienced technicians are standing by 24/7 to help.
                </p>
                <a href="tel:717-707-7811" className="bg-bf-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors transform hover:scale-105 inline-block">
                  📞 CALL (717) 707-7811
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Benjamin Franklin Plumbing</h3>
              <p className="text-gray-400 mb-4">The Punctual Plumber</p>
              <p className="text-gray-400">
                Professional plumbing services in Lancaster, PA. Licensed, insured, and ready to serve you 24/7.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Drain Cleaning</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Water Heater Service</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Fixture Installation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 <a href="tel:717-707-7811" className="hover:text-white transition-colors">(717) 707-7811</a></p>
                <p>📧 <a href="mailto:contact@benfranklinplumbingpros.com" className="hover:text-white transition-colors">contact@benfranklinplumbingpros.com</a></p>
                <p>📍 516 Running Pump Road, Lancaster, PA 17601</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Benjamin Franklin Plumbing of Lancaster. All rights reserved.</p>
            <p className="mt-2">Licensed & Insured Pennsylvania Plumbing Contractor</p>
          </div>
        </div>
      </footer>
    </div>
  )
}