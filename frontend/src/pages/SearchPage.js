import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import ProductList from "../features/product/components/ProductList";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    priceMin: "",
    priceMax: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    bodyType: "",
    condition: "",
    location: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      make: "",
      model: "",
      year: "",
      priceMin: "",
      priceMax: "",
      mileage: "",
      fuelType: "",
      transmission: "",
      bodyType: "",
      condition: "",
      location: ""
    });
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Vehicles</h1>
            
            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Advanced Filters</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                  <input
                    type="text"
                    name="make"
                    value={filters.make}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Toyota, Honda"
                  />
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                  <input
                    type="text"
                    name="model"
                    value={filters.model}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Camry, Civic"
                  />
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <select
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Year</option>
                    {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      name="priceMin"
                      value={filters.priceMin}
                      onChange={handleFilterChange}
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      name="priceMax"
                      value={filters.priceMax}
                      onChange={handleFilterChange}
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                  <select
                    name="fuelType"
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Fuel Type</option>
                    <option value="gasoline">Gasoline</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="plug-in-hybrid">Plug-in Hybrid</option>
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
                  <select
                    name="transmission"
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Transmission</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="cvt">CVT</option>
                  </select>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Body Type</label>
                  <select
                    name="bodyType"
                    value={filters.bodyType}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Body Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="coupe">Coupe</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="wagon">Wagon</option>
                    <option value="convertible">Convertible</option>
                    <option value="motorcycle">Motorcycle</option>
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select
                    name="condition"
                    value={filters.condition}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Condition</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="certified">Certified Pre-owned</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Clear Filters
                </button>
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <ProductList />
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default SearchPage; 