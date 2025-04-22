
import React from "react";

export default function About() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-warmPeach bg-opacity-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              About <span className="text-warmOrange">Vijaya Builders</span>
            </h1>
            <p className="text-lg text-gray-700">
              Building excellence and creating lasting impressions since 1998.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" 
                alt="Vijaya Builders Office" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 1998, Vijaya Builders began as a small family-owned construction company with a vision to 
                transform the urban landscape with quality structures built on the foundation of trust and excellence.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we have grown into one of the region's most respected construction companies, 
                with a portfolio spanning residential complexes, commercial buildings, and industrial structures.
                Our growth is a testament to our unwavering commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                Today, with a team of over 200 dedicated professionals, including architects, engineers, and skilled 
                craftsmen, we continue to push the boundaries of construction excellence, delivering projects that stand 
                the test of time and exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-playfair mb-6 text-warmOrange">Our Mission</h2>
              <p className="text-gray-700">
                To deliver construction excellence through innovation, quality materials, and exceptional craftsmanship, 
                creating structures that enhance communities and improve lives. We are committed to sustainable building 
                practices, ethical business conduct, and exceeding client expectations at every step of the journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-playfair mb-6 text-warmOrange">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading construction company known for architectural innovation, structural integrity, and 
                transformative buildings that stand as landmarks of excellence. We aim to set new standards in the 
                construction industry through continuous improvement, technological adoption, and a customer-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Vijaya Builders, our work is guided by a set of principles that define everything we do, from 
              planning to execution and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our materials, workmanship, or service delivery.
              </p>
            </div>
            
            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency are at the heart of all our client and partner relationships.
              </p>
            </div>
            
            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methods to deliver cutting-edge building solutions.
              </p>
            </div>
            
            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Teamwork</h3>
              <p className="text-gray-600">
                Our collaborative approach ensures the best minds work together on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Our Leadership Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our company with vision, expertise, and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-playfair mb-1">Rajesh Kumar</h3>
                <p className="text-warmOrange mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 30 years of industry experience, Rajesh founded Vijaya Builders with a vision to transform the construction landscape.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-playfair mb-1">Priya Sharma</h3>
                <p className="text-warmOrange mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Priya brings 15 years of operational excellence, ensuring every project is delivered on time and within budget.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" 
                  alt="Chief Architect" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-playfair mb-1">Vikram Singh</h3>
                <p className="text-warmOrange mb-3">Chief Architect</p>
                <p className="text-gray-600 mb-4">
                  As an award-winning architect, Vikram leads our design team, creating innovative and functional spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
