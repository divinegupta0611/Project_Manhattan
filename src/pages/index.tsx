const MinimalIndianLanding = () => {
  const featuredStates = [
    {
      name: "Kerala",
      sanskrit: "केरल",
      description: "Where tranquility flows through backwaters",
      image:
        "https://images.unsplash.com/photo-1712516905584-37b34fc5de86?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rajasthan",
      sanskrit: "राजस्थान",
      description: "Desert stories written in sandstone",
      image:
        "https://images.unsplash.com/photo-1712516905584-37b34fc5de86?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bengal",
      sanskrit: "बंगाल",
      description: "Where culture paints every corner",
      image:
        "https://images.unsplash.com/photo-1712516905584-37b34fc5de86?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <h1 className="text-xl text-white font-light tracking-wider">
                TIMELESS TRAILS
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <a
                href="discover"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discover
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Stories
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Gallery
              </a>
              <button
                className="px-6 py-2 text-orange-600 border border-orange-600 
                rounded-sm hover:bg-orange-600 hover:text-white transition-all"
              >
                Begin Journey
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Traditional pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('/api/placeholder/100/100')`,
              backgroundSize: "50px 50px",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-950/70"></div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h2 className="text-orange-600 text-lg mb-4 font-light tracking-widest">
              भारत की यात्रा
            </h2>
            <h1 className="text-6xl text-white font-light mb-8 tracking-wide">
              Journey Through
              <span className="font-normal text-orange-600">
                {" "}
                Eternal India
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl">
              Where every state tells a story, every corner holds a secret, and
              every journey becomes a tale worth telling.
            </p>
            <div className="flex space-x-6">
              <a
                className="px-8 py-3 bg-orange-600 text-white rounded-sm 
                hover:bg-orange-700 transition-colors"
                href="discover"
              >
                Explore States
              </a>
              <button
                className="px-8 py-3 text-white border border-white rounded-sm 
                hover:bg-white hover:text-gray-950 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* States Showcase */}
      <div className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-orange-600 mb-4 tracking-wider">
                FEATURED STATES
              </h2>
              <h3 className="text-3xl text-white font-light">
                Stories Waiting to be Discovered
              </h3>
            </div>
            <a
              href="discover"
              className="text-gray-400 hover:text-white transition-colors mt-4 md:mt-0"
            >
              View All States →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStates.map((state, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 
                      transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 
                    to-transparent opacity-90"
                  ></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="text-orange-600 mb-2 font-light tracking-wider">
                      {state.sanskrit}
                    </p>
                    <h3 className="text-2xl text-white mb-2">{state.name}</h3>
                    <p className="text-gray-300">{state.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <blockquote className="text-3xl text-gray-300 font-light leading-relaxed">
            "India is not just a land to be discovered, but a feeling to be
            experienced, a story to be lived, and a mystery to be unveiled with
            every step."
          </blockquote>
          <div className="mt-8 text-orange-600">— Ancient Sanskrit Proverb</div>
        </div>
      </div>

      {/* Experience Categories */}
      <div className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-gray-800 p-12 hover:border-orange-600 transition-colors">
              <h3 className="text-2xl text-white mb-6 font-light">
                Heritage & Architecture
              </h3>
              <p className="text-gray-400 mb-8">
                From ancient temples to magnificent palaces, discover the
                architectural marvels that stand as testament to India's rich
                history.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-500">
                Explore Heritage →
              </a>
            </div>
            <div className="border border-gray-800 p-12 hover:border-orange-600 transition-colors">
              <h3 className="text-2xl text-white mb-6 font-light">
                Arts & Culture
              </h3>
              <p className="text-gray-400 mb-8">
                Immerse yourself in the vibrant tapestry of Indian arts, from
                classical dance to contemporary expressions.
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-500">
                Discover Arts →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl text-white mb-8 font-light">
            Subscribe to Our Cultural Journey
          </h2>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-orange-600"
            />
            <button
              className="px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 
              transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalIndianLanding;
