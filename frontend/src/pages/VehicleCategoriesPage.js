import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function VehicleCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All Vehicles",
      icon: "🚗",
      description: "Browse all available vehicles",
      count: 1250
    },
    {
      id: "cars",
      name: "Cars",
      icon: "🚙",
      description: "Sedans, coupes, hatchbacks, and wagons",
      count: 450,
      subcategories: ["Sedan", "Coupe", "Hatchback", "Wagon", "Convertible"]
    },
    {
      id: "suvs",
      name: "SUVs & Crossovers",
      icon: "🚐",
      description: "Sport utility vehicles and crossovers",
      count: 320,
      subcategories: ["Compact SUV", "Midsize SUV", "Full-size SUV", "Crossover"]
    },
    {
      id: "trucks",
      name: "Trucks",
      icon: "🛻",
      description: "Pickup trucks and commercial vehicles",
      count: 180,
      subcategories: ["Light Duty", "Heavy Duty", "Commercial"]
    },
    {
      id: "motorcycles",
      name: "Motorcycles",
      icon: "🏍️",
      description: "Motorcycles, scooters, and ATVs",
      count: 95,
      subcategories: ["Sport", "Cruiser", "Touring", "Dual Sport", "Scooter"]
    },
    {
      id: "vans",
      name: "Vans & Minivans",
      icon: "🚐",
      description: "Passenger vans and minivans",
      count: 75,
      subcategories: ["Minivan", "Passenger Van", "Cargo Van"]
    },
    {
      id: "luxury",
      name: "Luxury Vehicles",
      icon: "🏎️",
      description: "Premium and luxury vehicles",
      count: 120,
      subcategories: ["Luxury Sedan", "Luxury SUV", "Sports Car", "Exotic"]
    },
    {
      id: "electric",
      name: "Electric & Hybrid",
      icon: "⚡",
      description: "Electric and hybrid vehicles",
      count: 85,
      subcategories: ["Electric", "Hybrid", "Plug-in Hybrid"]
    }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: "2023 Toyota Camry",
      category: "cars",
      price: 25000,
      image: "https://via.placeholder.com/300x200?text=Toyota+Camry",
      year: 2023,
      mileage: 15000
    },
    {
      id: 2,
      name: "2023 Ford F-150",
      category: "trucks",
      price: 45000,
      image: "https://via.placeholder.com/300x200?text=Ford+F-150",
      year: 2023,
      mileage: 8000
    },
    {
      id: 3,
      name: "2023 Honda CR-V",
      category: "suvs",
      price: 32000,
      image: "https://via.placeholder.com/300x200?text=Honda+CR-V",
      year: 2023,
      mileage: 12000
    },
    {
      id: 4,
      name: "2023 Tesla Model 3",
      category: "electric",
      price: 42000,
      image: "https://via.placeholder.com/300x200?text=Tesla+Model+3",
      year: 2023,
      mileage: 5000
    }
  ];

  const filteredVehicles = selectedCategory === "all" 
    ? featuredVehicles 
    : featuredVehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Categories</h1>
            
            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {categories.map(category => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">{category.count} vehicles</span>
                    {selectedCategory === category.id && (
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Subcategories */}
            {selectedCategory !== "all" && categories.find(c => c.id === selectedCategory)?.subcategories && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.find(c => c.id === selectedCategory)?.subcategories.map(subcategory => (
                    <button
                      key={subcategory}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Vehicles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {selectedCategory === "all" ? "Featured Vehicles" : `${categories.find(c => c.id === selectedCategory)?.name}`}
                </h2>
                <Link
                  to="/search"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All →
                </Link>
              </div>

              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredVehicles.map(vehicle => (
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
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
                  <p className="text-gray-500 mb-4">No vehicles available in this category at the moment.</p>
                  <Link
                    to="/search"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Browse All Vehicles
                  </Link>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Link
                to="/compare"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Compare Vehicles</h3>
                <p className="text-blue-100">Side-by-side comparison of multiple vehicles</p>
              </Link>
              
              <Link
                to="/financing"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 hover:from-green-600 hover:to-green-700 transition-all"
              >
                <div className="text-2xl mb-2">💰</div>
                <h3 className="text-lg font-semibold mb-2">Financing Options</h3>
                <p className="text-green-100">Explore financing and payment options</p>
              </Link>
              
              <Link
                to="/wishlist"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                <div className="text-2xl mb-2">❤️</div>
                <h3 className="text-lg font-semibold mb-2">My Wishlist</h3>
                <p className="text-purple-100">Save vehicles for later consideration</p>
              </Link>
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default VehicleCategoriesPage; 