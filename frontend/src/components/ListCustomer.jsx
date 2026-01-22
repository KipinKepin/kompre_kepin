import React from "react";
import { NavLink } from "react-router-dom";

const customers = [
  {
    id: "CUST000001",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000002",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000003",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000004",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000005",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000006",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000007",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000008",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000009",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000010",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000011",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000012",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000013",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000014",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000015",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000016",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000017",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000018",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000019",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000020",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000021",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
  {
    id: "CUST000022",
    name: "Gina Mandasari",
    email: "customer1@bank.com",
    occupation: "Wiraswasta",
    accountType: "Gold",
  },
  {
    id: "CUST000023",
    name: "Jasmin Thamrin",
    email: "customer2@bank.com",
    occupation: "Pengusaha",
    accountType: "Gold",
  },
  {
    id: "CUST000024",
    name: "Maida Iswahyudi, M.M.",
    email: "customer3@bank.com",
    occupation: "Pegawai Swasta",
    accountType: "Current",
  },
];

const ListCustomer = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6">
        Customers <span className="text-gray-400">(400)</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b-2 border-[#FF7F00] border-rounded-md">
              <th className="pb-3 font-medium">Customer ID</th>
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Email</th>
              <th className="pb-3 font-medium">Occupation</th>
              <th className="pb-3 font-medium">Account Type</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((cust) => (
              <tr key={cust.id} className="hover:bg-base-200/40">
                <td className="py-4">{cust.id}</td>
                <td className="py-4">{cust.name}</td>
                <td className="py-4">{cust.email}</td>
                <td className="py-4">{cust.occupation}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cust.accountType === "Gold"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {cust.accountType}
                  </span>
                </td>
                <td className="py-4">
                  <NavLink
                    to={"/detail"}
                    className="btn btn-sm bg-[#00DDD8]/70 text-white hover:bg-[#00DDD8] rounded-md py-5 font-normal"
                  >
                    View Detail
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCustomer;
