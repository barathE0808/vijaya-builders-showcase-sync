
import React from "react";

export default function Products() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Cement",
      category: "Building Materials",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=600&auto=format&fit=crop",
      description: "High-grade cement suitable for all construction purposes. Offers exceptional strength and durability.",
      features: ["Superior strength", "Quick setting", "Weather resistant", "Eco-friendly"]
    },
    {
      id: 2,
      name: "Construction Steel",
      category: "Building Materials",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
      description: "High tensile strength construction steel for reinforced concrete structures. Available in various gauges.",
      features: ["Corrosion resistant", "High tensile strength", "Flexible specifications", "Quality tested"]
    },
    {
      id: 3,
      name: "Concrete Blocks",
      category: "Building Materials",
      image: "https://images.unsplash.com/photo-1590374504314-3dcda3bb43ef?q=80&w=600&auto=format&fit=crop",
      description: "Precision-engineered concrete blocks for walls and partitions. Available in various sizes.",
      features: ["Uniform dimensions", "High compression strength", "Sound insulation", "Fire resistant"]
    },
    {
      id: 4,
      name: "Architectural Glass",
      category: "Finishing Materials",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop",
      description: "Premium architectural glass for windows, facades, and interior partitions. Available in various tints and finishes.",
      features: ["UV protection", "Energy efficient", "Sound insulation", "Safety features"]
    },
    {
      id: 5,
      name: "Ceramic Tiles",
      category: "Finishing Materials",
      image: "https://images.unsplash.com/photo-1560185127-2ed016ce3867?q=80&w=600&auto=format&fit=crop",
      description: "High-quality ceramic tiles for floors and walls. Available in various designs, colors, and sizes.",
      features: ["Stain resistant", "Durable", "Easy to clean", "Wide variety of designs"]
    },
    {
      id: 6,
      name: "Electrical Wiring",
      category: "Electrical Components",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=600&auto=format&fit=crop",
      description: "Safety-certified electrical wiring for residential and commercial buildings.",
      features: ["Fire resistant", "High conductivity", "Long-lasting", "Safety certified"]
    },
    {
      id: 7,
      name: "Plumbing Fixtures",
      category: "Plumbing Components",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
      description: "High-quality plumbing fixtures including faucets, sinks, and fittings for bathrooms and kitchens.",
      features: ["Leak proof", "Corrosion resistant", "Elegant designs", "Easy to install"]
    },
    {
      id: 8,
      name: "Metal Roofing",
      category: "Roofing Materials",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=600&auto=format&fit=crop",
      description: "Durable metal roofing sheets for industrial and residential buildings. Weather and corrosion resistant.",
      features: ["Weather resistant", "Long lifespan", "Low maintenance", "Environmentally friendly"]
    }
  ];

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-warmPeach bg-opacity-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our <span className="text-warmOrange">Products</span>
            </h1>
            <p className="text-lg text-gray-700">
              Discover our range of high-quality building materials and construction products.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Product Categories */}
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold font-playfair mb-8 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-playfair mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                      
                      <button className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                        Request Quote
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
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
              Need Custom Building Materials?
            </h2>
            <p className="text-gray-700 mb-8">
              We provide custom building materials tailored to your specific project requirements.
              Contact our team for more information and personalized quotes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                Contact Sales Team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a href="/products" className="bg-white border border-warmOrange text-warmOrange hover:bg-warmPeach hover:bg-opacity-20 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                Download Catalog
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
