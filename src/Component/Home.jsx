/* eslint-disable no-unused-vars */
// app/page.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Home,
  Table, 
  Sparkles, 
  ChevronRight, 
  Star, 
  Quote,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Palette,
  Upload,
  MessageSquare,
  Brush,
  TvIcon,
  BoxIcon,
  UtensilsCrossed
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ setActiveCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designPreference: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const categories = [
     { id: 1, name: 'Kitchen', icon: UtensilsCrossed, color: 'bg-blue-100' },
  { id: 2, name: 'Almirah', icon: BoxIcon, color: 'bg-orange-100' },
  { id: 3, name: 'TV Cabinet', icon: TvIcon, color: 'bg-yellow-100' },
  { id: 4, name: 'Side Table', icon: Table, color: 'bg-yellow-50' },
  { id: 5, name: 'Dressing Table', icon: Brush, color: 'bg-orange-50' },
    { id: 6, name: 'All', icon: Home, color: 'bg-yellow-50' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Woodify helped me design the perfect custom bookshelf for my living room. The AI suggestions were spot on!',
      image: 'https://picsum.photos/seed/person1/100/100.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'I uploaded a sketch of my dream dining table, and Woodify brought it to life. The quality exceeded my expectations.',
      image: 'https://picsum.photos/seed/person2/100/100.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The consultation service was invaluable. They helped me choose the right materials and finishes for my space.',
      image: 'https://picsum.photos/seed/person3/100/100.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/90 rounded-md flex items-center justify-center">
              <img className="text-white/90 font-bold" src="/dist/Logo.svg" alt="Logo" />
            </div>
            <span className="text-xl font-semibold text-gray-800">Pradeep Furniture</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#categories" className="text-gray-600 hover:text-blue-700 transition-colors">Categories</a>
            <a href="#ai-design" className="text-gray-600 hover:text-blue-700 transition-colors">AI Design</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-700 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">Testimonials</a>
            <a href="#consultation" className="text-gray-600 hover:text-blue-700 transition-colors">Consultation</a>
          </div>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#categories" className="text-gray-600 hover:text-blue-700 transition-colors">Categories</a>
              <a href="#ai-design" className="text-gray-600 hover:text-blue-700 transition-colors">AI Design</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-700 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">Testimonials</a>
              <a href="#consultation" className="text-gray-600 hover:text-blue-700 transition-colors">Consultation</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/dist/Background.png" 
            alt="Modern furniture setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          > 
            Design Furniture That Fits Your Imagination
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Create custom furniture with AI-powered design tools or upload your own ideas. Your dream space is just a few clicks away.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center">
              Start Designing
              <ArrowRight className="ml-2" size={18} />
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-md hover:bg-white/30 transition-colors flex items-center justify-center">
              Watch Demo
              <ChevronRight className="ml-2" size={18} />
            </button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="rotate-90" size={24} />
        </div>
      </section>

      {/* Category Section */}
      <section id="categories" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Explore Our Categories
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From sofas to cabinets, find the perfect piece for your space or create something entirely new.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${category.color} rounded-lg p-6 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-40`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon size={32} className="text-blue-700 mb-3" />
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* AI Design Assistant Section */}
      <section id="ai-design" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Sparkles className="text-blue-700 mr-2" size={24} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">AI Design Assistant</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Upload a photo of your space or describe what you're looking for, and our AI will generate custom furniture designs that match your style and requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Upload className="text-blue-700 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Upload Your Ideas</h3>
                    <p className="text-gray-600">Share sketches, photos, or inspiration images</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Palette className="text-blue-700 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Customize Every Detail</h3>
                    <p className="text-gray-600">Choose materials, colors, dimensions, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="text-blue-700 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Describe Your Vision</h3>
                    <p className="text-gray-600">Tell us what you want in natural language</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
                Try AI Designer
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-96 relative">
                <img 
                  src="https://picsum.photos/seed/ai-design/600/400.jpg" 
                  alt="AI design visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">See Your Vision Come to Life</h3>
                    <p className="text-sm">AI-generated 3D visualization of your custom furniture</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Creating custom furniture is simple with our three-step process.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Choose</h3>
              <p className="text-gray-600">
                Select from our catalog of designs or start with a blank canvas to create something entirely new.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customize</h3>
              <p className="text-gray-600">
                Adjust dimensions, materials, colors, and features to match your exact requirements and style.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Consult</h3>
              <p className="text-gray-600">
                Review your design with our experts, get recommendations, and finalize your order for production.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Real stories from people who transformed their spaces with Woodify.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-blue-500 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="text-blue-200 mb-2" size={24} />
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get a Free Consultation
              </h2>
              <p className="text-lg text-gray-600">
                Speak with our design experts to bring your vision to life.
              </p>
            </motion.div>
            
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="designPreference" className="block text-gray-700 font-medium mb-2">
                  Design Preference
                </label>
                <textarea
                  id="designPreference"
                  name="designPreference"
                  value={formData.designPreference}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your design ideas, space, or any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Request Consultation
                <CheckCircle className="ml-2" size={18} />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="text-xl font-semibold">Pradeep Furniture</span>
              </div>
              <p className="text-gray-400">
                Design furniture that fits your imagination with our AI-powered customization tools.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://www.instagram.com/pradeepfurniture.in?igsh=MWxteTc2aGxieGhiaw==" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Woodify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}