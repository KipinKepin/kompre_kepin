import React from "react";
import Layout from "./Layout";
import CustomerInformation from "../components/CustomerInformation";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import TransactionChannelChart from "../components/TransactionChannelChart";
import RecentTransactions from "../components/RecentTransactions";
import InsightByAI from "../components/InsightByAI";

const CustomerDetail = () => {
  return (
    <Layout>
      <div />
      <div className="flex flex-col gap-3">
        <CustomerInformation />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncomeExpenseChart />
          <TransactionChannelChart />
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <RecentTransactions />
          <InsightByAI />
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDetail;
