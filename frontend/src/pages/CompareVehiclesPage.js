import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function CompareVehiclesPage() {
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [compareList, setCompareList] = useState([]);

  // Mock vehicle data for comparison
  const mockVehicles = [
    {
      id: 1,
      name: "2023 Toyota Camry",
      make: "Toyota",
      model: "Camry",
      year: 2023,
      price: 25000,
      mileage: 15000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "2.5L 4-Cylinder",
      horsepower: 203,
      mpg: "28 city / 39 highway",
      features: ["Bluetooth", "Backup Camera", "Lane Departure Warning", "Adaptive Cruise Control"],
      image: "https://via.placeholder.com/300x200?text=Toyota+Camry"
    },
    {
      id: 2,
      name: "2023 Honda Accord",
      make: "Honda",
      model: "Accord",
      year: 2023,
      price: 27000,
      mileage: 12000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "1.5L Turbo",
      horsepower: 192,
      mpg: "30 city / 38 highway",
      features: ["Apple CarPlay", "Android Auto", "Honda Sensing", "Blind Spot Monitor"],
      image: "https://via.placeholder.com/300x200?text=Honda+Accord"
    },
    {
      id: 3,
      name: "2023 Ford F-150",
      make: "Ford",
      model: "F-150",
      year: 2023,
      price: 45000,
      mileage: 8000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "3.5L V6 EcoBoost",
      horsepower: 400,
      mpg: "20 city / 26 highway",
      features: ["SYNC 4", "Pro Trailer Backup Assist", "360-Degree Camera", "Pro Power Onboard"],
      image: "https://via.placeholder.com/300x200?text=Ford+F-150"
    }
  ];

  const addToCompare = (vehicle) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  const removeFromCompare = (vehicleId) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  const clearCompare = () => {
    setSelectedVehicles([]);
  };

  const comparisonFields = [
    { key: 'name', label: 'Vehicle Name' },
    { key: 'price', label: 'Price', format: (value) => `$${value.toLocaleString()}` },
    { key: 'year', label: 'Year' },
    { key: 'mileage', label: 'Mileage', format: (value) => `${value.toLocaleString()} miles` },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'transmission', label: 'Transmission' },
    { key: 'engine', label: 'Engine' },
    { key: 'horsepower', label: 'Horsepower', format: (value) => `${value} hp` },
    { key: 'mpg', label: 'Fuel Economy' },
    { key: 'features', label: 'Key Features', format: (value) => value.join(', ') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Compare Vehicles</h1>
            
            {/* Vehicle Selection */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Select Vehicles to Compare (Max 3)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockVehicles.map(vehicle => (
                  <div key={vehicle.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-lg mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-2">${vehicle.price.toLocaleString()}</p>
                    <button
                      onClick={() => addToCompare(vehicle)}
                      disabled={selectedVehicles.find(v => v.id === vehicle.id)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {selectedVehicles.find(v => v.id === vehicle.id) ? 'Added' : 'Add to Compare'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            {selectedVehicles.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Vehicle Comparison</h2>
                  <button
                    onClick={clearCompare}
                    className="px-4 py-2 text-red-600 hover:text-red-700"
                  >
                    Clear All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Features</th>
                        {selectedVehicles.map(vehicle => (
                          <th key={vehicle.id} className="text-center p-3 font-semibold">
                            <div className="relative">
                              <img 
                                src={vehicle.image} 
                                alt={vehicle.name}
                                className="w-24 h-16 object-cover rounded-md mx-auto mb-2"
                              />
                              <h3 className="text-sm font-medium">{vehicle.name}</h3>
                              <button
                                onClick={() => removeFromCompare(vehicle.id)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs hover:bg-red-600"
                              >
                                ×
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFields.map(field => (
                        <tr key={field.key} className="border-b">
                          <td className="p-3 font-medium text-gray-700">{field.label}</td>
                          {selectedVehicles.map(vehicle => (
                            <td key={vehicle.id} className="p-3 text-center">
                              {field.format ? field.format(vehicle[field.key]) : vehicle[field.key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 mt-6">
                  <Link
                    to="/cart"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Add Selected to Cart
                  </Link>
                  <Link
                    to="/search"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Find More Vehicles
                  </Link>
                </div>
              </div>
            )}

            {/* Empty State */}
            {selectedVehicles.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles selected</h3>
                <p className="text-gray-500 mb-4">Select up to 3 vehicles to compare their features and specifications.</p>
                <Link
                  to="/search"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Browse Vehicles
                </Link>
              </div>
            )}
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default CompareVehiclesPage; 