
import { useState, useEffect, ChangeEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Define the Project type
type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  status: "ongoing" | "completed";
  createdAt: string;
};

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  // Project state
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Omit<Project, 'id' | 'createdAt'>>({
    name: "",
    description: "",
    image: "",
    status: "ongoing",
  });
  
  // For image preview
  const [imagePreview, setImagePreview] = useState("");
  
  // For editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState("");

  // Load projects from localStorage
  useEffect(() => {
    const storedProjects = localStorage.getItem('vijayaProjects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('vijayaProjects', JSON.stringify(projects));
      
      // Dispatch storage event for real-time sync with user page
      const event = new StorageEvent('storage', {
        key: 'vijayaProjects',
        newValue: JSON.stringify(projects),
        storageArea: localStorage
      });
      window.dispatchEvent(event);
    }
  }, [projects]);

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for demo
    // In a real app, you would validate against a secure backend
    if (email === "admin@vijayabuilders.com" && password === "admin123") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  // Handle image input change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const result = reader.result as string;
      setNewProject({ ...newProject, image: result });
      setImagePreview(result);
    };
    
    reader.readAsDataURL(file);
  };

  // Add a new project
  const addProject = () => {
    if (!newProject.name || !newProject.description || !newProject.image) {
      alert("Please fill out all fields and upload an image");
      return;
    }
    
    const newProjectWithId = {
      ...newProject,
      id: Date.now().toString(), // Use timestamp as a simple ID
      createdAt: new Date().toISOString(),
    };
    
    setProjects([newProjectWithId, ...projects]);
    
    // Reset the form
    setNewProject({
      name: "",
      description: "",
      image: "",
      status: "ongoing",
    });
    setImagePreview("");
  };

  // Start editing a project
  const startEditingProject = (project: Project) => {
    setIsEditing(true);
    setEditingProjectId(project.id);
    setNewProject({
      name: project.name,
      description: project.description,
      image: project.image,
      status: project.status,
    });
    setImagePreview(project.image);
  };

  // Save edited project
  const saveEditedProject = () => {
    if (!newProject.name || !newProject.description || !newProject.image) {
      alert("Please fill out all fields and upload an image");
      return;
    }
    
    const updatedProjects = projects.map(project => 
      project.id === editingProjectId 
        ? { ...project, ...newProject } 
        : project
    );
    
    setProjects(updatedProjects);
    
    // Exit editing mode
    setIsEditing(false);
    setEditingProjectId("");
    
    // Reset the form
    setNewProject({
      name: "",
      description: "",
      image: "",
      status: "ongoing",
    });
    setImagePreview("");
  };

  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false);
    setEditingProjectId("");
    setNewProject({
      name: "",
      description: "",
      image: "",
      status: "ongoing",
    });
    setImagePreview("");
  };

  // Update project status
  const updateProjectStatus = (id: string, newStatus: "ongoing" | "completed") => {
    const updatedProjects = projects.map(project => 
      project.id === id 
        ? { ...project, status: newStatus } 
        : project
    );
    
    setProjects(updatedProjects);
  };

  // Remove a project
  const removeProject = (id: string) => {
    if (window.confirm("Are you sure you want to remove this project?")) {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
    }
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/" className="block text-center mb-6">
              <h1 className="text-2xl font-playfair font-bold text-warmOrange">
                Vijaya<span className="text-darkText">Builders</span>
              </h1>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to manage projects
            </p>
            {loginError && (
              <div className="mt-2 p-2 bg-red-100 text-red-700 text-sm rounded">
                {loginError}
              </div>
            )}
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-warmOrange focus:border-warmOrange focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-warmOrange focus:border-warmOrange focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-warmOrange hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warmOrange"
              >
                Sign in
              </button>
            </div>
          </form>
          
          {/* Demo credentials */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <strong>Demo Credentials:</strong><br />
              Email: admin@vijayabuilders.com<br />
              Password: admin123
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-warmOrange hover:text-orange-600 flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-playfair font-bold text-warmOrange">
                  Vijaya<span className="text-darkText">Builders</span>
                </h1>
              </Link>
              <span className="ml-4 text-gray-500">|</span>
              <h2 className="ml-4 text-gray-500 text-lg">Admin Panel</h2>
            </div>
            <div className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-warmOrange mr-4 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="text-warmOrange hover:text-orange-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Add/Edit Project Form */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold font-playfair mb-6">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name*
                  </label>
                  <input
                    id="project-name"
                    type="text"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description*
                  </label>
                  <textarea
                    id="project-description"
                    rows={4}
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="project-status" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Status*
                  </label>
                  <select
                    id="project-status"
                    value={newProject.status}
                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value as "ongoing" | "completed" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    required
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <label htmlFor="project-image" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Image*
                  </label>
                  <input
                    id="project-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                  />
                </div>
                
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Image Preview
                    </label>
                    <div className="mt-1 h-48 border rounded-lg overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-3">
              {isEditing && (
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="button"
                onClick={isEditing ? saveEditedProject : addProject}
                className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {isEditing ? "Save Changes" : "Add Project"}
              </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold font-playfair mb-6">Manage Projects</h2>
            
            {projects.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No projects available. Add your first project above.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Project
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Added
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full object-cover" src={project.image} alt={project.name} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{project.name}</div>
                              <div className="text-sm text-gray-500 truncate max-w-xs">{project.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status === "completed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {project.status === "completed" ? "Completed" : "Ongoing"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(project.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <button
                            onClick={() => updateProjectStatus(
                              project.id, 
                              project.status === "ongoing" ? "completed" : "ongoing"
                            )}
                            className={`${
                              project.status === "ongoing" 
                                ? "text-green-600 hover:text-green-800" 
                                : "text-blue-600 hover:text-blue-800"
                            }`}
                          >
                            {project.status === "ongoing" ? "Mark Completed" : "Mark Ongoing"}
                          </button>
                          <button
                            onClick={() => startEditingProject(project)}
                            className="text-warmOrange hover:text-orange-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => removeProject(project.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
