
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              Building Excellence, <span className="text-warmOrange">Crafting Dreams</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              With over 25 years of experience, Vijaya Builders delivers construction excellence 
              through innovative design, quality materials, and professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn bg-white hover:bg-gray-100 text-darkText px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-warmOrange">Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction solutions tailored to meet your specific needs,
              ensuring quality and excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg transition-transform hover:-translate-y-1">
              <div className="bg-warmOrange rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Construction</h3>
              <p className="text-gray-600 mb-4">
                From residential buildings to commercial complexes, we deliver high-quality construction services.
              </p>
              <Link to="/services" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg transition-transform hover:-translate-y-1">
              <div className="bg-warmOrange rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive planning services to ensure your project is executed seamlessly from start to finish.
              </p>
              <Link to="/services" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-warmPeach bg-opacity-20 p-6 rounded-lg transition-transform hover:-translate-y-1">
              <div className="bg-warmOrange rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Consultation</h3>
              <p className="text-gray-600 mb-4">
                Expert advice on design, materials, budgeting, and all aspects of your construction project.
              </p>
              <Link to="/services" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Featured <span className="text-warmOrange">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed and ongoing projects that showcase our commitment to quality and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop" 
                  alt="Commercial Building" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-warmOrange bg-opacity-20 text-warmOrange text-sm font-medium px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Modern Office Complex</h3>
                <p className="text-gray-600 mb-4">
                  A state-of-the-art office building with sustainable design features and modern amenities.
                </p>
                <Link to="/projects" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=800&auto=format&fit=crop" 
                  alt="Residential Complex" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">Ongoing</span>
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Luxury Apartment Complex</h3>
                <p className="text-gray-600 mb-4">
                  Premium residential apartments with high-end finishes and modern living spaces.
                </p>
                <Link to="/projects" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=800&auto=format&fit=crop" 
                  alt="Commercial Tower" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-warmOrange bg-opacity-20 text-warmOrange text-sm font-medium px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold font-playfair mb-2">Commercial Tower</h3>
                <p className="text-gray-600 mb-4">
                  A landmark commercial tower with contemporary design and energy-efficient features.
                </p>
                <Link to="/projects" className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-warmOrange bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Ready to Start Your <span className="text-warmOrange">Project</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Connect with us today to discuss your construction needs and get a personalized consultation.
            </p>
            <Link to="/contact" className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
              Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
