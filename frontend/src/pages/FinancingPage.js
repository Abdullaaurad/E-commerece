import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function FinancingPage() {
  const [loanCalculator, setLoanCalculator] = useState({
    vehiclePrice: 25000,
    downPayment: 5000,
    loanTerm: 60,
    interestRate: 4.5,
    creditScore: "good"
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateLoan = () => {
    const principal = loanCalculator.vehiclePrice - loanCalculator.downPayment;
    const monthlyRate = loanCalculator.interestRate / 100 / 12;
    const numberOfPayments = loanCalculator.loanTerm;
    
    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalInterest(0);
      setTotalAmount(payment * numberOfPayments);
    } else {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
      setTotalInterest((payment * numberOfPayments) - principal);
      setTotalAmount(payment * numberOfPayments);
    }
  };

  const handleCalculatorChange = (e) => {
    const { name, value } = e.target;
    setLoanCalculator(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleCreditScoreChange = (e) => {
    setLoanCalculator(prev => ({
      ...prev,
      creditScore: e.target.value
    }));
  };

  // Auto-calculate when values change
  useState(() => {
    calculateLoan();
  }, [loanCalculator]);

  const financingOptions = [
    {
      name: "Bank Auto Loan",
      rate: "3.5% - 6.5%",
      term: "12-84 months",
      minCreditScore: 650,
      pros: ["Competitive rates", "Flexible terms", "No prepayment penalty"],
      cons: ["Requires good credit", "Down payment required"]
    },
    {
      name: "Credit Union Loan",
      rate: "2.9% - 5.8%",
      term: "12-84 months",
      minCreditScore: 600,
      pros: ["Lower rates", "Member benefits", "Personal service"],
      cons: ["Membership required", "Limited locations"]
    },
    {
      name: "Dealer Financing",
      rate: "0% - 7.5%",
      term: "12-84 months",
      minCreditScore: 550,
      pros: ["Convenient", "Special offers", "Quick approval"],
      cons: ["Higher rates", "Limited options"]
    },
    {
      name: "Online Lender",
      rate: "4.2% - 8.1%",
      term: "12-84 months",
      minCreditScore: 580,
      pros: ["Fast application", "Competitive rates", "No fees"],
      cons: ["Less personal service", "Limited support"]
    }
  ];

  const creditScoreRanges = [
    { value: "excellent", label: "Excellent (750+)", rate: 3.2 },
    { value: "good", label: "Good (700-749)", rate: 4.5 },
    { value: "fair", label: "Fair (650-699)", rate: 6.8 },
    { value: "poor", label: "Poor (600-649)", rate: 9.5 },
    { value: "very-poor", label: "Very Poor (<600)", rate: 12.5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Financing</h1>
            
            {/* Loan Calculator */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Loan Calculator</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">$</span>
                      <input
                        type="number"
                        name="vehiclePrice"
                        value={loanCalculator.vehiclePrice}
                        onChange={handleCalculatorChange}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="25000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">$</span>
                      <input
                        type="number"
                        name="downPayment"
                        value={loanCalculator.downPayment}
                        onChange={handleCalculatorChange}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="5000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Term (months)
                    </label>
                    <select
                      name="loanTerm"
                      value={loanCalculator.loanTerm}
                      onChange={handleCalculatorChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={36}>36 months</option>
                      <option value={48}>48 months</option>
                      <option value={60}>60 months</option>
                      <option value={72}>72 months</option>
                      <option value={84}>84 months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Credit Score
                    </label>
                    <select
                      value={loanCalculator.creditScore}
                      onChange={handleCreditScoreChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {creditScoreRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      name="interestRate"
                      value={loanCalculator.interestRate}
                      onChange={handleCalculatorChange}
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="4.5"
                    />
                  </div>
                </div>

                {/* Calculator Results */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${monthlyPayment.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest:</span>
                      <span className="text-lg font-semibold text-red-600">
                        ${totalInterest.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="text-lg font-semibold text-blue-600">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Loan Amount:</span>
                        <span>${(loanCalculator.vehiclePrice - loanCalculator.downPayment).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Down Payment:</span>
                        <span>${loanCalculator.downPayment.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financing Options */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Financing Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {financingOptions.map((option, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rate:</span>
                        <span className="font-semibold text-green-600">{option.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Term:</span>
                        <span className="font-semibold">{option.term}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Min Credit Score:</span>
                        <span className="font-semibold">{option.minCreditScore}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium text-green-700 mb-1">Pros:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {option.pros.map((pro, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-red-700 mb-1">Cons:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {option.cons.map((con, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/search"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="text-lg font-semibold mb-2">Browse Vehicles</h3>
                <p className="text-blue-100">Find vehicles that fit your budget</p>
              </Link>
              
              <Link
                to="/compare"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 hover:from-green-600 hover:to-green-700 transition-all"
              >
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Compare Options</h3>
                <p className="text-green-100">Compare different financing options</p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-semibold mb-2">Get Help</h3>
                <p className="text-purple-100">Contact our financing experts</p>
              </Link>
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default FinancingPage;