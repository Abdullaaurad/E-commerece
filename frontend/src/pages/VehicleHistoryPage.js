import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function VehicleHistoryPage() {
  const [vin, setVin] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [searchType, setSearchType] = useState("vin");
  const [vehicleHistory, setVehicleHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setVehicleHistory({
        vin: "1HGBH41JXMN109186",
        make: "Honda",
        model: "Accord",
        year: 2021,
        color: "Blue",
        engine: "1.5L Turbo",
        transmission: "Automatic",
        mileage: 45000,
        titleStatus: "Clean",
        accidentHistory: [
          {
            date: "2023-06-15",
            severity: "Minor",
            description: "Rear bumper damage",
            cost: 2500
          }
        ],
        ownershipHistory: [
          {
            owner: "John Smith",
            purchaseDate: "2021-03-10",
            saleDate: "2023-08-20",
            mileage: 35000
          },
          {
            owner: "Current Owner",
            purchaseDate: "2023-08-20",
            saleDate: null,
            mileage: 45000
          }
        ],
        maintenanceHistory: [
          {
            date: "2023-09-15",
            service: "Oil Change",
            mileage: 42000,
            cost: 45
          },
          {
            date: "2023-07-20",
            service: "Brake Service",
            mileage: 40000,
            cost: 320
          },
          {
            date: "2023-05-10",
            service: "Tire Rotation",
            mileage: 38000,
            cost: 35
          }
        ],
        recalls: [
          {
            date: "2023-01-15",
            description: "Software update for infotainment system",
            status: "Completed"
          }
        ],
        marketValue: {
          excellent: 28000,
          good: 26000,
          fair: 24000,
          poor: 22000
        }
      });
      setIsLoading(false);
    }, 2000);
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "minor":
        return "text-yellow-600 bg-yellow-100";
      case "moderate":
        return "text-orange-600 bg-orange-100";
      case "major":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle History Report</h1>
            
            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Search Vehicle History</h2>
              
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="flex space-x-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="searchType"
                      value="vin"
                      checked={searchType === "vin"}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="mr-2"
                    />
                    VIN Number
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="searchType"
                      value="license"
                      checked={searchType === "license"}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="mr-2"
                    />
                    License Plate
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {searchType === "vin" ? "VIN Number" : "License Plate"}
                  </label>
                  <input
                    type="text"
                    value={searchType === "vin" ? vin : licensePlate}
                    onChange={(e) => searchType === "vin" ? setVin(e.target.value) : setLicensePlate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={searchType === "vin" ? "1HGBH41JXMN109186" : "ABC123"}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Searching..." : "Get Vehicle History"}
                </button>
              </form>
            </div>

            {/* Vehicle History Report */}
            {vehicleHistory && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Vehicle History Report</h2>
                
                {/* Vehicle Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">VIN:</span>
                        <span className="font-mono">{vehicleHistory.vin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Make/Model:</span>
                        <span>{vehicleHistory.year} {vehicleHistory.make} {vehicleHistory.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Color:</span>
                        <span>{vehicleHistory.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engine:</span>
                        <span>{vehicleHistory.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transmission:</span>
                        <span>{vehicleHistory.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Mileage:</span>
                        <span>{vehicleHistory.mileage.toLocaleString()} miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Title Status:</span>
                        <span className="text-green-600 font-semibold">{vehicleHistory.titleStatus}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Market Value</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Excellent:</span>
                        <span className="text-green-600">${vehicleHistory.marketValue.excellent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Good:</span>
                        <span className="text-blue-600">${vehicleHistory.marketValue.good.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fair:</span>
                        <span className="text-yellow-600">${vehicleHistory.marketValue.fair.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Poor:</span>
                        <span className="text-red-600">${vehicleHistory.marketValue.poor.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accident History */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Accident History</h3>
                  {vehicleHistory.accidentHistory.length > 0 ? (
                    <div className="space-y-4">
                      {vehicleHistory.accidentHistory.map((accident, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(accident.severity)}`}>
                                {accident.severity}
                              </span>
                              <span className="ml-2 text-gray-600">{accident.date}</span>
                            </div>
                            <span className="text-red-600 font-semibold">${accident.cost.toLocaleString()}</span>
                          </div>
                          <p className="text-gray-700">{accident.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-green-600 font-medium">No accidents reported</p>
                  )}
                </div>

                {/* Ownership History */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Ownership History</h3>
                  <div className="space-y-4">
                    {vehicleHistory.ownershipHistory.map((owner, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{owner.owner}</h4>
                            <p className="text-sm text-gray-600">
                              {owner.purchaseDate} - {owner.saleDate || "Current Owner"}
                            </p>
                          </div>
                          <span className="text-gray-600">{owner.mileage.toLocaleString()} miles</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maintenance History */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Maintenance History</h3>
                  <div className="space-y-4">
                    {vehicleHistory.maintenanceHistory.map((service, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{service.service}</h4>
                            <p className="text-sm text-gray-600">{service.date}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-600">{service.mileage.toLocaleString()} miles</span>
                            <div className="text-green-600 font-semibold">${service.cost}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recalls */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Recalls</h3>
                  {vehicleHistory.recalls.length > 0 ? (
                    <div className="space-y-4">
                      {vehicleHistory.recalls.map((recall, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{recall.description}</h4>
                              <p className="text-sm text-gray-600">{recall.date}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              recall.status === "Completed" ? "text-green-600 bg-green-100" : "text-yellow-600 bg-yellow-100"
                            }`}>
                              {recall.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-green-600 font-medium">No recalls reported</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Download Report
                  </button>
                  <Link
                    to="/search"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Search Another Vehicle
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Link
                to="/search"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Search Vehicles</h3>
                <p className="text-blue-100">Find vehicles with clean history reports</p>
              </Link>
              
              <Link
                to="/compare"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 hover:from-green-600 hover:to-green-700 transition-all"
              >
                <div className="text-2xl mb-2">📊</div>
                <h3 className="text-lg font-semibold mb-2">Compare Reports</h3>
                <p className="text-green-100">Compare multiple vehicle histories</p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-semibold mb-2">Get Help</h3>
                <p className="text-purple-100">Contact our vehicle history experts</p>
              </Link>
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default VehicleHistoryPage;