import { useMemo } from "react";

const generateTransactions = (count = 50) => {
  const types = ["debit", "credit"];
  const channels = ["ATM", "Internet", "Mobile", "Branch"];
  const categories = [
    "Transportation",
    "Food & Beverage",
    "Salary",
    "Utilities",
    "Shopping",
    "Entertainment",
    "Transfer",
  ];

  return Array.from({ length: count }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      id: `TRX-${100000 + i}`,
      date: new Date(
        2026,
        0,
        Math.floor(Math.random() * 28) + 1,
      ).toLocaleDateString("id-ID"),
      type,
      amount: `Rp ${(Math.random() * 9_000_000 + 300_000).toLocaleString(
        "id-ID",
      )}`,
      channel: channels[Math.floor(Math.random() * channels.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
    };
  });
};

const RecentTransactions = () => {
  const transactions = useMemo(() => generateTransactions(80), []);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-10">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

      <div className="max-h-145 overflow-y-auto pr-2">
        <table className="w-full border-collapse py-4">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b-2 border-[#FF7F00] border-rounded-md text-sm text-gray-500">
              <th className="text-left py-3 px-2">id</th>
              <th className="text-left py-3 px-2">Date</th>
              <th className="text-left py-3 px-2">Type</th>
              <th className="text-left py-3 px-2">Amount</th>
              <th className="text-left py-3 px-2">Channel</th>
              <th className="text-left py-3 px-2">Category</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {transactions.map((trx) => (
              <tr key={trx.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-2 whitespace-nowrap">{trx.id}</td>
                <td className="py-4 px-2 whitespace-nowrap">{trx.date}</td>

                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${
                      trx.type === "debit"
                        ? "text-[#02C694] border border-[#02C694]"
                        : "text-[#D65C5B] border border-[#D65C5B]/90"
                    }`}
                  >
                    <div className="flex items-center">
                      {trx.type === "debit" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trending-down w-3 h-3 mr-1"
                          aria-hidden="true"
                        >
                          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                          <polyline points="16 17 22 17 22 11"></polyline>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trending-up w-3 h-3 mr-1"
                          aria-hidden="true"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                      )}
                      <span>{trx.type}</span>
                    </div>
                  </span>
                </td>

                <td className="py-4 px-2 font-medium whitespace-nowrap">
                  {trx.amount}
                </td>

                <td className="py-4 px-2">{trx.channel}</td>
                <td className="py-4 px-2">{trx.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
