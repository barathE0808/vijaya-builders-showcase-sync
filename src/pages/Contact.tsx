
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd send this data to your server or an API
    console.log("Form submitted:", formData);
    
    // Simulate form submission success
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you soon."
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ""
      });
    }, 5000);
  };

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-warmPeach bg-opacity-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Contact <span className="text-warmOrange">Us</span>
            </h1>
            <p className="text-lg text-gray-700">
              Have questions or ready to start your project? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Office Address */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-10 w-10 text-warmOrange" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Our Office</h3>
              <p className="text-gray-600 mb-2">123 Construction Way</p>
              <p className="text-gray-600 mb-2">Building Zone, 500001</p>
              <p className="text-gray-600">India</p>
              <a 
                href="https://maps.google.com/?q=Vijaya+Builders,India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 text-warmOrange hover:text-orange-600 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
            
            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-10 w-10 text-warmOrange" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">Main Office:</p>
              <a 
                href="tel:+919876543210" 
                className="text-lg font-medium text-warmOrange hover:text-orange-600 transition-colors"
              >
                +91 9876 543 210
              </a>
              <p className="text-gray-600 mt-4 mb-2">Customer Support:</p>
              <a 
                href="tel:+919876543211" 
                className="text-lg font-medium text-warmOrange hover:text-orange-600 transition-colors"
              >
                +91 9876 543 211
              </a>
            </div>
            
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-10 w-10 text-warmOrange" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Email</h3>
              <p className="text-gray-600 mb-2">General Inquiries:</p>
              <a 
                href="mailto:info@vijayabuilders.com" 
                className="text-warmOrange hover:text-orange-600 transition-colors"
              >
                info@vijayabuilders.com
              </a>
              <p className="text-gray-600 mt-4 mb-2">Customer Support:</p>
              <a 
                href="mailto:support@vijayabuilders.com" 
                className="text-warmOrange hover:text-orange-600 transition-colors"
              >
                support@vijayabuilders.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold font-playfair mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {formStatus.message}
                </div>
              )}
              
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Consultation">Project Consultation</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Service Request">Service Request</option>
                      <option value="Career Information">Career Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-warmOrange focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-warmOrange hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map */}
            <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden">
              <div className="h-full min-h-[400px]">
                {/* Replace with your actual map integration */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7963389837463!2d78.45061121486844!3d17.423589688055078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d36c4213ef%3A0x4e549829760c62d8!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1666666666666!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vijaya Builders Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-playfair mb-6 text-center">Business Hours</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-600">
              <p>
                For emergency construction support outside business hours, 
                please call our 24/7 emergency line at <a href="tel:+919876543299" className="text-warmOrange hover:text-orange-600">+91 9876 543 299</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
