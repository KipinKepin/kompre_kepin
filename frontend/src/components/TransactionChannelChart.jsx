import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile Banking", value: 125000000 },
  { name: "ATM", value: 82000000 },
  { name: "Branch", value: 43000000 },
  { name: "Internet Banking", value: 39000000 },
  { name: "EDC", value: 56000000 },
  { name: "QRIS", value: 67000000 },
];

const COLORS = [
  "#FF9AFF",
  "#A471E1",
  "#00DDD8",
  "#D9F634",
  "#FFC900",
  "#FF7F00",
];

const renderLabel = ({ cx, cy, midAngle, outerRadius, name, value }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 18;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#374151"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs"
    >
      {name}
      <tspan x={x} dy="1.2em" className="fill-gray-900 font-semibold">
        Rp {value.toLocaleString("id-ID")}
      </tspan>
    </text>
  );
};

const TransactionChannelChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Transaction Channel</h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={renderLabel}
              labelLine
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [
                `Rp ${value.toLocaleString("id-ID")}`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChannelChart;
