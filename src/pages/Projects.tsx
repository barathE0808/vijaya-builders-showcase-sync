
import { useState, useEffect } from "react";

// Define the Project type
type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  status: "ongoing" | "completed";
  createdAt: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Sample projects to start with
  const sampleProjects: Project[] = [
    {
      id: "1",
      name: "Modern Office Complex",
      description: "A state-of-the-art office building with sustainable design features and modern amenities.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
      status: "completed",
      createdAt: new Date(2024, 1, 15).toISOString(),
    },
    {
      id: "2",
      name: "Luxury Apartment Complex",
      description: "Premium residential apartments with high-end finishes and modern living spaces.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=800&auto=format&fit=crop",
      status: "ongoing",
      createdAt: new Date(2023, 11, 10).toISOString(),
    },
    {
      id: "3",
      name: "Commercial Tower",
      description: "A landmark commercial tower with contemporary design and energy-efficient features.",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=800&auto=format&fit=crop",
      status: "completed",
      createdAt: new Date(2023, 9, 20).toISOString(),
    },
    {
      id: "4",
      name: "Residential Villa Community",
      description: "Exclusive community of luxury villas with premium amenities and landscaped gardens.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
      status: "ongoing",
      createdAt: new Date(2024, 0, 5).toISOString(),
    },
    {
      id: "5",
      name: "Shopping Mall",
      description: "Modern shopping complex with retail spaces, food courts, and entertainment areas.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
      status: "completed",
      createdAt: new Date(2023, 6, 12).toISOString(),
    },
  ];

  // Initialize projects with sample data
  useEffect(() => {
    // First check if there's any data in localStorage
    const storedProjects = localStorage.getItem('vijayaProjects');
    
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      // If no data in localStorage, use sample data
      setProjects(sampleProjects);
      // Store sample data in localStorage for future use
      localStorage.setItem('vijayaProjects', JSON.stringify(sampleProjects));
    }
  }, []);

  // Listen for changes in localStorage from the admin panel
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'vijayaProjects' && e.newValue) {
        setProjects(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Get ongoing and completed projects
  const ongoingProjects = projects.filter(project => project.status === "ongoing");
  const completedProjects = projects.filter(project => project.status === "completed");

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-warmPeach bg-opacity-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our <span className="text-warmOrange">Projects</span>
            </h1>
            <p className="text-lg text-gray-700">
              Explore our portfolio of completed and ongoing construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair mb-8 pb-2 border-b border-gray-200">
            Ongoing Projects
          </h2>

          {ongoingProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No ongoing projects at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map(project => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">Ongoing</span>
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair mb-8 pb-2 border-b border-gray-200">
            Completed Projects
          </h2>

          {completedProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No completed projects to display.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map(project => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-warmOrange bg-opacity-20 text-warmOrange text-sm font-medium px-3 py-1 rounded-full">Completed</span>
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-warmOrange hover:text-orange-600 font-medium inline-flex items-center">
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
