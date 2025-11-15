import React from 'react';
import { CheckCircle, Hammer, Home, Ruler, Star, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-linear-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Crafting Furniture That Fits Your Life</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We bring expert craftsmanship directly to your home, creating custom furniture that perfectly matches your space, style, and needs.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-gray-700 mb-4">
                Pradeep Furniture is a team of skilled craftsmen dedicated to creating high-quality, custom furniture for homes across Uttar Pradesh. Unlike traditional furniture stores, we operate exclusively through on-site service, bringing our workshop directly to you.
              </p>
              <p className="text-gray-700">
                With years of experience in custom furniture making, we specialize in transforming spaces with perfectly fitted pieces that combine functionality, beauty, and durability. From modular kitchens to bespoke wardrobes, every piece we create is tailored to your exact specifications.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <Ruler className="text-amber-700 w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To deliver exceptional custom furniture solutions that enhance living spaces through expert craftsmanship, quality materials, and personalized service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Hammer className="text-amber-700 w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h4>
              <p className="text-gray-600">
                Our skilled craftsmen bring decades of experience to every project, ensuring precision and attention to detail in every piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="text-amber-700 w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">
                We use only the finest materials and finishes to create furniture that not only looks beautiful but stands the test of time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Home className="text-amber-700 w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Perfect Fit</h4>
              <p className="text-gray-600">
                Every piece is made-to-measure for your space, ensuring optimal use of your home's unique dimensions and layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Customers Trust Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Superior Quality Materials</h4>
                <p className="text-gray-600">
                  We source the finest wood, hardware, and finishing materials to ensure your furniture is not only beautiful but also durable and long-lasting.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Impeccable Finishing</h4>
                <p className="text-gray-600">
                  Our attention to detail extends to the finishing touches, with smooth surfaces, precise edges, and flawless coatings that enhance the natural beauty of the materials.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Complete Customization</h4>
                <p className="text-gray-600">
                  From design to dimensions, materials to colors, every aspect of your furniture is tailored to your preferences and requirements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Convenient On-Site Service</h4>
                <p className="text-gray-600">
                  We bring our expertise directly to your location, eliminating the need for showrooms and ensuring your furniture is crafted in context with your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
            <div className="text-gray-700 space-y-4">
              <p>
                Pradeep Furniture began with a simple belief: furniture should be as unique as the people who use it. Our founder, Pradeep Kumar, started this journey over 15 years ago with a small workshop and a passion for woodworking.
              </p>
              <p>
                What began as a local service in a few neighborhoods of Uttar Pradesh has grown into a trusted name for custom furniture across the region. Throughout our growth, we've maintained our commitment to quality craftsmanship and personalized service.
              </p>
              <p>
                Our work ethic is built on three principles: respect for materials, dedication to craftsmanship, and commitment to customer satisfaction. We treat every project as if we were creating furniture for our own homes, ensuring attention to detail and quality at every step.
              </p>
              <p>
                Today, our team of skilled craftsmen continues to honor these traditions while embracing modern techniques and designs. We take pride in helping homeowners, builders, and interior designers bring their visions to life through custom furniture that combines beauty, functionality, and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Custom Furniture Solutions</h3>
            <p className="text-xl text-gray-700">
              We specialize in creating made-to-measure furniture for every room in your home
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Kitchen & Storage</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Modular Kitchens</li>
                <li>• Custom Wardrobes</li>
                <li>• Storage Cabinets</li>
                <li>• Pantry Units</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Living & Entertainment</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• TV Units & Consoles</li>
                <li>• Display Cabinets</li>
                <li>• Bookshelves</li>
                <li>• Center Tables</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Bedroom & Doors</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom Beds</li>
                <li>• Dressing Tables</li>
                <li>• Interior Doors</li>
                <li>• Window Designs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

      {/* Footer */}
     
    </div>
  );
};

export default AboutPage;