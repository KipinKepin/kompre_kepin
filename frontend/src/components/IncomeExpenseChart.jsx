import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 2000000, expense: 8000000 },
  { month: "Feb", income: 15000000, expense: 9000000 },
  { month: "Mar", income: 10000000, expense: 7000000 },
  { month: "Apr", income: 8000000, expense: 11000000 },
  { month: "May", income: 16000000, expense: 10000000 },
  { month: "Jun", income: 14000000, expense: 9500000 },
  { month: "Jul", income: 7000000, expense: 12000000 },
  { month: "Aug", income: 19000000, expense: 13000000 },
  { month: "Sep", income: 20000000, expense: 14000000 },
  { month: "Oct", income: 22000000, expense: 15000000 },
  { month: "Nov", income: 1000000, expense: 14500000 },
  { month: "Dec", income: 23000000, expense: 16000000 },
];

const IncomeExpenseChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Income vs Expense (Yearly)</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 40,
              bottom: 10,
            }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              itemSorter={(item) => (item.dataKey === "income" ? -1 : 1)}
              formatter={(value) => `Rp ${value.toLocaleString("id-ID")}`}
              margin={{
                top: 10,
                right: 20,
                left: 40,
                bottom: 10,
              }}
            />
            <Bar dataKey="income" fill="#02C694" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" fill="#D65C5B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
