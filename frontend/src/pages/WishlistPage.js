import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Mock wishlist data
  const mockWishlistItems = [
    {
      id: 1,
      vehicleId: 101,
      name: "2023 Toyota Camry",
      price: 25000,
      image: "https://via.placeholder.com/300x200?text=Toyota+Camry",
      year: 2023,
      mileage: 15000,
      dealer: "Premium Auto Sales",
      addedDate: "2024-01-15"
    },
    {
      id: 2,
      vehicleId: 102,
      name: "2023 Ford F-150",
      price: 45000,
      image: "https://via.placeholder.com/300x200?text=Ford+F-150",
      year: 2023,
      mileage: 8000,
      dealer: "Truck City Dealers",
      addedDate: "2024-01-10"
    },
    {
      id: 3,
      vehicleId: 103,
      name: "2023 Honda CR-V",
      price: 32000,
      image: "https://via.placeholder.com/300x200?text=Honda+CR-V",
      year: 2023,
      mileage: 12000,
      dealer: "Honda World",
      addedDate: "2024-01-08"
    },
    {
      id: 4,
      vehicleId: 104,
      name: "2023 Tesla Model 3",
      price: 42000,
      image: "https://via.placeholder.com/300x200?text=Tesla+Model+3",
      year: 2023,
      mileage: 5000,
      dealer: "Electric Auto Gallery",
      addedDate: "2024-01-05"
    }
  ];

  useEffect(() => {
    setWishlistItems(mockWishlistItems);
  }, []);

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map(item => item.id));
    }
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    setSelectedItems(prev => prev.filter(id => id !== itemId));
  };

  const removeSelected = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const addSelectedToCart = () => {
    // This would integrate with your cart functionality
    console.log("Adding to cart:", selectedItems);
    alert("Selected vehicles added to cart!");
  };

  const compareSelected = () => {
    if (selectedItems.length < 2) {
      alert("Please select at least 2 vehicles to compare");
      return;
    }
    if (selectedItems.length > 3) {
      alert("You can only compare up to 3 vehicles at a time");
      return;
    }
    // Navigate to compare page with selected items
    console.log("Comparing vehicles:", selectedItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
              <div className="flex space-x-2">
                {selectedItems.length > 0 && (
                  <>
                    <button
                      onClick={addSelectedToCart}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Add to Cart ({selectedItems.length})
                    </button>
                    <button
                      onClick={compareSelected}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Compare ({selectedItems.length})
                    </button>
                    <button
                      onClick={removeSelected}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Remove Selected
                    </button>
                  </>
                )}
              </div>
            </div>

            {wishlistItems.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === wishlistItems.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="font-medium">
                      {selectedItems.length} of {wishlistItems.length} selected
                    </span>
                  </div>
                </div>

                {/* Wishlist Items */}
                <div className="divide-y divide-gray-200">
                  {wishlistItems.map(item => (
                    <div key={item.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-16 object-cover rounded-md"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <p className="text-gray-600">{item.dealer}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                <span>{item.year}</span>
                                <span>{item.mileage.toLocaleString()} miles</span>
                                <span>Added {item.addedDate}</span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600 mb-2">
                                ${item.price.toLocaleString()}
                              </div>
                              <div className="flex space-x-2">
                                <Link
                                  to={`/product/${item.vehicleId}`}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                                >
                                  View Details
                                </Link>
                                <button
                                  onClick={() => removeFromWishlist(item.id)}
                                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-500 mb-6">Start browsing vehicles and add them to your wishlist to save them for later.</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    to="/search"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Browse Vehicles
                  </Link>
                  <Link
                    to="/categories"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    View Categories
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {wishlistItems.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/compare"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="text-lg font-semibold mb-2">Compare Vehicles</h3>
                  <p className="text-blue-100">Compare vehicles from your wishlist side by side</p>
                </Link>
                
                <Link
                  to="/search"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 hover:from-green-600 hover:to-green-700 transition-all"
                >
                  <div className="text-2xl mb-2">🚗</div>
                  <h3 className="text-lg font-semibold mb-2">Find More Vehicles</h3>
                  <p className="text-green-100">Discover more vehicles that match your preferences</p>
                </Link>
                
                <Link
                  to="/financing"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:from-purple-600 hover:to-purple-700 transition-all"
                >
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="text-lg font-semibold mb-2">Financing Options</h3>
                  <p className="text-purple-100">Explore financing options for your wishlist vehicles</p>
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

export default WishlistPage; 