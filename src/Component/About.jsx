import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  const handleService = () => {
    navigate("/service");
  };
  return (
    <div id="webcrumbs">
      <div className="min-h-screen bg-white font-sans">
        {/* Header Section */}
        <header className="relative py-20 bg-beige-50 overflow-hidden">
          <div className="absolute inset-0 opacity-10 z-0">
            <img
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Background"
              className="w-full h-full object-cover"
              keywords="travel, adventure, happiness, journey, landscape"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">
                About Us
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Who we are, what we believe, and how we create unforgettable
                experiences.
              </p>
            </div>
          </div>
        </header>

        {/* Company Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                  Our Passion for Creating Memories
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded in 2018, Happiness Plans was born from a simple idea:
                  travel and events should be joyful from planning to memories.
                  We believe that every journey and celebration deserves
                  meticulous attention and personalized care.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our team of passionate experts combines global travel
                  knowledge with event management precision to craft experiences
                  that exceed expectations. Whether it's a destination wedding
                  in Bali, a corporate retreat in the Swiss Alps, or a family
                  reunion in Tuscany, we handle every detail with care.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At Happiness Plans, we don't just plan trips and events – we
                  create stories that last a lifetime. Our commitment to
                  excellence, transparency, and personalized service has made us
                  a trusted partner for thousands of clients worldwide.
                </p>
              </div>
              <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Our Team"
                  className="w-full h-auto"
                  keywords="team, collaboration, office, planning, professionals"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-16 bg-beige-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Our Journey
            </h3>

            <div className="relative">
              {/* Timeline Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 z-0"></div>

              {/* Timeline Items */}
              <div className="space-y-20">
                {/* 2018 */}
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-teal-600 mb-2">
                        2018
                      </h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-2">
                        Founded in San Francisco
                      </h5>
                      <p className="text-gray-600">
                        Started with a team of 3 passionate travelers and event
                        planners with a vision to transform the industry.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white">
                        rocket_launch
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2019 */}
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-0">
                    <div className="bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white">
                        celebration
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-0 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-teal-600 mb-2">
                        2019
                      </h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-2">
                        First 100 Events
                      </h5>
                      <p className="text-gray-600">
                        Successfully organized 100 events across 12 countries,
                        with a 98% client satisfaction rate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2021 */}
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-teal-600 mb-2">
                        2021
                      </h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-2">
                        Global Expansion
                      </h5>
                      <p className="text-gray-600">
                        Opened offices in London, Tokyo, and Sydney, expanding
                        our reach to over 50 countries worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white">
                        public
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-0">
                    <div className="bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white">
                        lightbulb
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-0 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-teal-600 mb-2">
                        2022
                      </h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-2">
                        Innovation & Technology
                      </h5>
                      <p className="text-gray-600">
                        Launched our event automation platform and mobile app,
                        revolutionizing how clients plan and attend events.
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2023 */}
                <div className="flex flex-col md:flex-row items-center relative z-10">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-teal-600 mb-2">
                        2023
                      </h4>
                      <h5 className="text-lg font-medium text-gray-800 mb-2">
                        Today & Beyond
                      </h5>
                      <p className="text-gray-600">
                        A team of 50+ specialists, 1000+ events, and countless
                        memories created. We continue to innovate and elevate
                        the art of experience creation.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-start md:justify-center">
                    <div className="bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-white">
                        trending_up
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Why Choose Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-teal-500">
                <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="material-symbols-outlined text-teal-600 text-3xl">
                    person_pin_circle
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Personalized Planning
                </h4>
                <p className="text-gray-600 text-center">
                  Every journey is unique. We tailor each experience to your
                  specific preferences, needs, and dreams.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-coral-500">
                <div className="bg-coral-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="material-symbols-outlined text-coral-600 text-3xl">
                    checklist
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">
                  End-to-End Execution
                </h4>
                <p className="text-gray-600 text-center">
                  From the initial concept to the final farewell, we handle
                  every detail with precision and care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-teal-500">
                <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="material-symbols-outlined text-teal-600 text-3xl">
                    language
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Global Expertise
                </h4>
                <p className="text-gray-600 text-center">
                  Our team's extensive network and local knowledge ensures
                  authentic and seamless experiences worldwide.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-coral-500">
                <div className="bg-coral-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="material-symbols-outlined text-coral-600 text-3xl">
                    visibility
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Transparent Pricing
                </h4>
                <p className="text-gray-600 text-center">
                  No hidden fees, no surprises. We believe in clear
                  communication and honest pricing from the start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-beige-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Meet Our Team
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
                  alt="Sarah Johnson"
                  className="w-full h-64 object-cover object-center"
                  keywords="female, professional, business, leader"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    Sarah Johnson
                  </h4>
                  <p className="text-teal-600 font-medium mb-3">
                    Co-Founder & CEO
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    With 15+ years in luxury travel and event planning, Sarah
                    leads our global vision and strategy.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Michael Chen"
                  className="w-full h-64 object-cover object-center"
                  keywords="male, professional, business, executive"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    Michael Chen
                  </h4>
                  <p className="text-teal-600 font-medium mb-3">
                    Co-Founder & Head of Events
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Michael's background in hospitality and event production
                    ensures flawless execution of every experience.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-instagram text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Elena Rodriguez"
                  className="w-full h-64 object-cover object-center"
                  keywords="female, professional, business, manager"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    Elena Rodriguez
                  </h4>
                  <p className="text-teal-600 font-medium mb-3">
                    Travel Specialist
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Having visited 60+ countries, Elena's expertise ensures
                    authentic and unforgettable journeys.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-pinterest text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="James Wilson"
                  className="w-full h-64 object-cover object-center"
                  keywords="male, professional, business, creative"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    James Wilson
                  </h4>
                  <p className="text-teal-600 font-medium mb-3">
                    Creative Director
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    With a background in design and photography, James ensures
                    each event has that perfect visual impact.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-teal-600 transition"
                    >
                      <i className="fa-brands fa-behance text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Want to know more about what we do?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how we can turn your travel dreams and event ideas into
              unforgettable experiences.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-coral-500 hover:text-teal transition duration-300 transform hover:scale-105 shadow-lg"
              onClick={handleService}
            >
              Explore Our Services
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}