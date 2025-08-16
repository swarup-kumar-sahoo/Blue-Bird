"use client";

import { useEffect, useState } from "react";

interface Stock {
  symbol: string;
  longName?: string;
  regularMarketPrice?: number;
  regularMarketChangePercent?: number;
}

const companyLogos: Record<string, string> = {
  AAPL: "https://logo.clearbit.com/apple.com",
  GOOGL: "https://logo.clearbit.com/abc.xyz",
  MSFT: "https://logo.clearbit.com/microsoft.com",
  TSLA: "https://logo.clearbit.com/tesla.com",
  AMZN: "https://logo.clearbit.com/amazon.com",
};

export default function StocksPage() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setError(null);
        setLoading(true); // ensure loading state is active before new fetch
        const symbols = "AAPL,GOOGL,MSFT,TSLA,AMZN";
        const res = await fetch(`/api/stocks?symbols=${symbols}`);

        if (!res.ok) throw new Error(`API request failed: ${res.status}`);

        const data = await res.json();
        setStocks(data);
      } catch (err: any) {
        console.error("Error fetching stocks:", err);
        setError(err.message || "Failed to fetch stock data");
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-900 dark:text-gray-900 font-medium">
            Fetching live stock data...
          </p>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center p-4 text-red-500 font-medium">{error}</p>
    );

  return (
    <div className="p-6 pt-[70px]">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl border border-gray-200 dark:border-gray-100">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-100">
              <th className="p-3 text-left">Company</th>
              <th className="p-3">Price</th>
              <th className="p-3">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr
                key={stock.symbol}
                className="border-t border-gray-200 dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-100 transition"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={companyLogos[stock.symbol] || ""}
                    alt={stock.symbol}
                    className="w-8 h-8 rounded-full border border-gray-200"
                  />
                  <div>
                    <div className="font-semibold">{stock.longName || "N/A"}</div>
                    <div className="text-gray-500 text-xs">{stock.symbol}</div>
                  </div>
                </td>
                <td className="p-3 font-medium">
                  {stock.regularMarketPrice != null
                    ? `$${stock.regularMarketPrice.toFixed(2)}`
                    : "N/A"}
                </td>
                <td
                  className={`p-3 font-medium ${
                    (stock.regularMarketChangePercent ?? 0) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stock.regularMarketChangePercent != null
                    ? `${stock.regularMarketChangePercent.toFixed(2)}%`
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="p-4 bg-white dark:bg-neutral-100 rounded-xl shadow-md border border-gray-200 dark:border-gray-100 flex items-center gap-4"
          >
            <img
              src={companyLogos[stock.symbol] || ""}
              alt={stock.symbol}
              className="w-12 h-12 rounded-full border border-gray-200"
            />
            <div className="flex-1">
              <div className="font-semibold">{stock.longName || "N/A"}</div>
              <div className="text-gray-500 text-xs">{stock.symbol}</div>
              <div className="mt-2 text-sm">
                <span className="font-medium">
                  {stock.regularMarketPrice != null
                    ? `$${stock.regularMarketPrice.toFixed(2)}`
                    : "N/A"}
                </span>
                <span
                  className={`ml-3 font-medium ${
                    (stock.regularMarketChangePercent ?? 0) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stock.regularMarketChangePercent != null
                    ? `${stock.regularMarketChangePercent.toFixed(2)}%`
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
