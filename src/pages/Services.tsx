
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  // Service categories
  const serviceCategories = [
    {
      id: 1,
      title: "Construction Services",
      services: [
        {
          id: 101,
          name: "Residential Construction",
          description: "Complete construction services for houses, apartments, and residential complexes. From foundation to finishing touches, we handle every aspect of building your dream home.",
          image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=600&auto=format&fit=crop",
          features: [
            "Turnkey residential construction",
            "Custom home building",
            "Multi-family housing projects",
            "Luxury home development",
            "Eco-friendly housing solutions"
          ]
        },
        {
          id: 102,
          name: "Commercial Construction",
          description: "End-to-end construction services for office buildings, retail spaces, warehouses, and other commercial properties designed to meet your business needs.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
          features: [
            "Office building construction",
            "Retail and commercial space development",
            "Industrial facility construction",
            "Hospitality construction",
            "Commercial renovation and expansion"
          ]
        },
        {
          id: 103,
          name: "Industrial Construction",
          description: "Specialized construction services for factories, warehouses, and industrial facilities with focus on functionality, safety, and efficiency.",
          image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop",
          features: [
            "Factory and manufacturing facility construction",
            "Warehouse and logistics center development",
            "Industrial renovation and retrofitting",
            "Clean room and specialized industrial spaces",
            "Energy-efficient industrial buildings"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Planning & Design",
      services: [
        {
          id: 201,
          name: "Architectural Planning",
          description: "Comprehensive architectural planning services including concept development, space planning, and detailed architectural drawings for your construction project.",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
          features: [
            "Concept development and design",
            "Space planning and utilization",
            "3D modeling and visualization",
            "Sustainable architecture solutions",
            "Interior architectural detailing"
          ]
        },
        {
          id: 202,
          name: "Structural Engineering",
          description: "Expert structural engineering services to ensure the safety, stability, and longevity of your building with adherence to local building codes and standards.",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
          features: [
            "Structural analysis and design",
            "Foundation engineering",
            "Seismic design and evaluation",
            "Structural rehabilitation and retrofit",
            "Load calculation and engineering reports"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Consultation & Management",
      services: [
        {
          id: 301,
          name: "Project Management",
          description: "End-to-end project management services to ensure your construction project is completed on time, within budget, and to your specifications.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
          features: [
            "Schedule development and management",
            "Budget planning and cost control",
            "Quality assurance and control",
            "Risk management",
            "Stakeholder communication and reporting"
          ]
        },
        {
          id: 302,
          name: "Construction Consultation",
          description: "Expert advice on all aspects of construction including material selection, construction methods, budget optimization, and regulatory compliance.",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
          features: [
            "Construction feasibility studies",
            "Material selection guidance",
            "Construction method recommendations",
            "Regulatory and compliance consultation",
            "Cost optimization strategies"
          ]
        },
        {
          id: 303,
          name: "Pre-Construction Services",
          description: "Comprehensive pre-construction services including site analysis, cost estimation, scheduling, and procurement strategy to set your project up for success.",
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
          features: [
            "Site analysis and evaluation",
            "Design development assistance",
            "Budgeting and cost estimation",
            "Value engineering",
            "Construction phasing and scheduling"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Specialized Services",
      services: [
        {
          id: 401,
          name: "Renovation & Remodeling",
          description: "Transform existing spaces with our renovation and remodeling services, bringing new life to older properties while preserving their character and integrity.",
          image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=600&auto=format&fit=crop",
          features: [
            "Complete home renovations",
            "Commercial space remodeling",
            "Historic building restoration",
            "Building additions and extensions",
            "Interior space transformation"
          ]
        },
        {
          id: 402,
          name: "Green Building Solutions",
          description: "Sustainable construction practices and eco-friendly building solutions that minimize environmental impact while maximizing efficiency and comfort.",
          image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop",
          features: [
            "LEED certified construction",
            "Energy-efficient building systems",
            "Sustainable material selection",
            "Water conservation solutions",
            "Solar and renewable energy integration"
          ]
        }
      ]
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-warmPeach bg-opacity-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our <span className="text-warmOrange">Services</span>
            </h1>
            <p className="text-lg text-gray-700">
              Comprehensive construction solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map(category => (
            <div key={category.id} className="mb-20">
              <h2 className="text-3xl font-bold font-playfair mb-8 pb-2 border-b border-gray-200">
                {category.title}
              </h2>

              <div className="space-y-16">
                {category.services.map((service, index) => (
                  <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="order-2 lg:order-1">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                    <div className={`order-1 lg:order-2 ${index % 2 === 1 ? 'lg:pr-0 lg:pl-8' : 'lg:pl-0 lg:pr-8'}`}>
                      <h3 className="text-2xl font-bold font-playfair mb-4 text-warmOrange">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-warmOrange mr-2">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="inline-flex items-center font-medium text-warmOrange hover:text-orange-600 transition-colors">
                        Inquire About This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warmOrange bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact us today to discuss your construction needs and get a personalized proposal for your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/projects" className="bg-white border border-warmOrange text-warmOrange hover:bg-warmPeach hover:bg-opacity-20 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
