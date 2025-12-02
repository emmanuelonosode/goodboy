
export const mockMarketData = [
  { symbol: "BTC", name: "Bitcoin", price: 45000, change: 2.4, volume: "12B" },
  { symbol: "ETH", name: "Ethereum", price: 3200, change: -1.2, volume: "8B" },
  { symbol: "USDT", name: "Tether", price: 1.00, change: 0.01, volume: "45B" },
  { symbol: "BNB", name: "Binance Coin", price: 410, change: 1.5, volume: "2B" },
  { symbol: "SOL", name: "Solana", price: 110, change: 5.8, volume: "3B" },
  { symbol: "XRP", name: "Ripple", price: 0.65, change: -0.5, volume: "1.5B" },
  { symbol: "ADA", name: "Cardano", price: 0.55, change: 0.8, volume: "900M" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.08, change: 3.2, volume: "1.2B" },
  { symbol: "DOT", name: "Polkadot", price: 7.50, change: -2.1, volume: "600M" },
  { symbol: "MATIC", name: "Polygon", price: 0.95, change: 1.1, volume: "500M" },
];

export const mockPlans = [
  { 
    name: "Silver", 
    roi: "1.2%", 
    duration: "3 Days", 
    minDeposit: "$500", 
    maxDeposit: "$4,999",
    features: ["24/7 Support", "Instant Withdrawals", "Principal Returned"]
  },
  { 
    name: "Gold", 
    roi: "1.5%", 
    duration: "5 Days", 
    minDeposit: "$5,000", 
    maxDeposit: "$19,999",
    features: ["Priority Support", "Instant Withdrawals", "Principal Returned", "Compound Interest"]
  },
  { 
    name: "Platinum", 
    roi: "2.0%", 
    duration: "7 Days", 
    minDeposit: "$20,000", 
    maxDeposit: "$100,000",
    features: ["Dedicated Manager", "Instant Withdrawals", "Principal Returned", "Compound Interest", "Bonus Rewards"]
  },
];

export const mockUser = {
  name: "Alex Trader",
  email: "alex@elitecore.com",
  balance: 12450.00,
  activeInvestments: 3,
  totalProfit: 3240.50,
  referralEarnings: 450.00,
  avatar: "/avatars/alex.jpg", // Placeholder
};

export const mockHistory = [
  { id: "TX123456", type: "Deposit", amount: 5000, asset: "USDT", status: "Completed", date: "2023-10-25" },
  { id: "TX123457", type: "Investment", amount: 2000, plan: "Gold", status: "Active", date: "2023-10-26" },
  { id: "TX123458", type: "Profit", amount: 150, plan: "Gold", status: "Completed", date: "2023-10-27" },
  { id: "TX123459", type: "Withdrawal", amount: 1000, asset: "BTC", status: "Pending", date: "2023-10-28" },
  { id: "TX123460", type: "Referral", amount: 50, from: "User88", status: "Completed", date: "2023-10-29" },
];
