import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function DealerProfilePage() {
  const { dealerId } = useParams();
  const [dealer, setDealer] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [activeTab, setActiveTab] = useState("vehicles");

  // Mock dealer data
  const mockDealer = {
    id: dealerId || "1",
    name: "Premium Auto Sales",
    logo: "https://via.placeholder.com/150x150?text=Premium+Auto",
    banner: "https://via.placeholder.com/1200x300?text=Dealer+Banner",
    description: "Premium Auto Sales is a trusted dealership with over 15 years of experience in the automotive industry. We specialize in quality used vehicles and provide exceptional customer service.",
    rating: 4.8,
    reviewCount: 127,
    location: "123 Main Street, City, State 12345",
    phone: "(555) 123-4567",
    email: "info@premiumautosales.com",
    website: "https://premiumautosales.com",
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed"
    },
    certifications: ["Certified Pre-owned", "BBB Accredited", "5-Star Dealer"],
    specialties: ["Luxury Vehicles", "SUVs", "Trucks", "Electric Vehicles"]
  };

  const mockVehicles = [
    {
      id: 1,
      name: "2023 Toyota Camry",
      price: 25000,
      image: "https://via.placeholder.com/300x200?text=Toyota+Camry",
      year: 2023,
      mileage: 15000,
      condition: "Used"
    },
    {
      id: 2,
      name: "2023 Ford F-150",
      price: 45000,
      image: "https://via.placeholder.com/300x200?text=Ford+F-150",
      year: 2023,
      mileage: 8000,
      condition: "Used"
    },
    {
      id: 3,
      name: "2023 Honda CR-V",
      price: 32000,
      image: "https://via.placeholder.com/300x200?text=Honda+CR-V",
      year: 2023,
      mileage: 12000,
      condition: "Used"
    },
    {
      id: 4,
      name: "2023 Tesla Model 3",
      price: 42000,
      image: "https://via.placeholder.com/300x200?text=Tesla+Model+3",
      year: 2023,
      mileage: 5000,
      condition: "Used"
    }
  ];

  const mockReviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent service and great selection of vehicles. Highly recommended!"
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2024-01-10",
      comment: "Very professional staff and fair pricing. Found exactly what I was looking for."
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      date: "2024-01-05",
      comment: "Best car buying experience I've ever had. Will definitely return for my next vehicle."
    }
  ];

  useEffect(() => {
    // Simulate API call
    setDealer(mockDealer);
    setVehicles(mockVehicles);
  }, [dealerId]);

  if (!dealer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading dealer information...</p>
            </div>
          </div>
        </NavBar>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dealer Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative">
              <img 
                src={dealer.banner} 
                alt="Dealer Banner"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <img 
                  src={dealer.logo} 
                  alt={dealer.name}
                  className="w-20 h-20 rounded-lg border-4 border-white"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{dealer.name}</h1>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(dealer.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{dealer.rating} ({dealer.reviewCount} reviews)</span>
                  </div>
                  <p className="text-gray-600">{dealer.location}</p>
                </div>
                
                <div className="text-right">
                  <div className="flex space-x-2 mb-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Contact Dealer
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      Follow
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>📞 {dealer.phone}</p>
                    <p>📧 {dealer.email}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{dealer.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {dealer.certifications.map(cert => (
                  <span key={cert} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab("vehicles")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "vehicles"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Vehicles ({vehicles.length})
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "about"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "reviews"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Reviews ({mockReviews.length})
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "vehicles" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Available Vehicles</h2>
                    <Link
                      to="/search"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View All →
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {vehicles.map(vehicle => (
                      <div key={vehicle.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={vehicle.image} 
                          alt={vehicle.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">{vehicle.year}</span>
                            <span className="text-gray-600">{vehicle.mileage.toLocaleString()} miles</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-green-600">
                              ${vehicle.price.toLocaleString()}
                            </span>
                            <Link
                              to={`/product/${vehicle.id}`}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      {Object.entries(dealer.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {dealer.specialties.map(specialty => (
                        <span key={specialty} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="space-y-6">
                    {mockReviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{review.user}</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default DealerProfilePage; 