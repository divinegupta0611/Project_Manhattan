import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  Utensils,
  Video,
  X,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
import { stateDataMap } from "../../data";
import { StateData, ContentItem } from "../../data/types";
import Link from "next/link";

const StatePage: React.FC<{ stateData: StateData }> = ({ stateData }) => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [activeTab, setActiveTab] = useState<"places" | "food" | "guides">(
    "places"
  );

  const categories: Record<
    string,
    { icon: LucideIcon; title: string; color: string }
  > = {
    places: { icon: MapPin, title: "Places", color: "orange" },
    food: { icon: Utensils, title: "Cuisine", color: "rose" },
    guides: { icon: Video, title: "Guides", color: "amber" },
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
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

        <div className="absolute inset-0">
          <img
            src={stateData.coverImage}
            alt={stateData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-950/70"></div>
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="flex items-center text-white hover:text-orange-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="ml-2"><a href='../discover.tsx'>Back to States</a></span>
          </Link>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div>
            <h2 className="text-orange-600 text-lg mb-4 font-light tracking-widest">
              {stateData.sanskrit}
            </h2>
            <h1 className="text-6xl text-white font-light mb-4">
              {stateData.name}
            </h1>
            <p className="text-2xl text-orange-600 mb-8">
              {stateData.headline}
            </p>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              {stateData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {Object.entries(categories).map(
              ([key, { icon: Icon, title, color }]) => (
                <button
                  key={key}
                  onClick={() =>
                    setActiveTab(key as "places" | "food" | "guides")
                  }
                  className={`py-6 flex items-center space-x-2 border-b-2 transition-colors ${
                    activeTab === key
                      ? `border-${color}-600 text-${color}-600`
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{title}</span>
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateData[activeTab]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden"
            >
              {/* Fixed aspect ratio container */}
              <div className="relative w-full pb-[75%]">
                <div className="absolute inset-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 
                      transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 
                      to-transparent opacity-90"
                  ></div>
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3
                      className="text-xl text-white mb-2 group-hover:text-orange-600 
                        transition-colors line-clamp-1"
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/90">
          <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden relative">
            <button title="ds"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Fixed aspect ratio for modal image */}
              <div className="md:w-1/2 relative pb-[75%] md:pb-0">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="absolute inset-0 w-full h-full object-cover md:relative"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl text-white mb-4">
                  {selectedItem.name}
                </h3>
                <p className="text-gray-300 mb-6">{selectedItem.desc}</p>
                {selectedItem.link && (
                  <Link
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-500"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Page Component
const State: NextPage = () => {
  const router = useRouter();
  const { state } = router.query;
  const [stateData, setStateData] = useState<StateData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!state || typeof state !== "string") return;

    try {
      const data = stateDataMap[state.toLowerCase()];

      if (!data) {
        setError("State data not found");
        setStateData(null);
      } else {
        setStateData(data);
        setError(null);
      }
    } catch (err) {
      setError("State data not found");
      setStateData(null);
    } finally {
      setIsLoading(false);
    }
  }, [state]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !stateData) {
    return (
      <div className="min-h-screen bg-gray-950">
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

          {/* Back button */}
          <div className="absolute top-6 left-6">
            <Link
              href="/"
              className="flex items-center text-white hover:text-orange-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-2">Back to States</span>
            </Link>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl text-white font-light mb-6 text-center">
              Coming Soon
            </h1>
            <p className="text-2xl text-orange-600 mb-8 text-center capitalize">
              {state as string}
            </p>
            <p className="text-gray-300 text-lg max-w-2xl text-center leading-relaxed">
              We're currently crafting an amazing journey through {state}. Stay
              tuned as we bring you the best places, authentic cuisine, and
              insider guides for this beautiful state.
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-12 px-8 py-3 border-2 border-orange-600 text-orange-600 
                hover:bg-orange-600 hover:text-white transition-colors rounded-sm"
            >
              Explore Other States
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <StatePage stateData={stateData} />;
};

export default State;
