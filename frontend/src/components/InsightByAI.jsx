import { useState } from "react";

const TABS = ["Fraud", "Risk", "Marketing", "Collection", "Wealth"];

const InsightByAI = () => {
  const [activeTab, setActiveTab] = useState("Fraud");

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-5">AI Insights by Division</h3>

      <div className="bg-gray-100 rounded-xl p-2 flex gap-1 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-sm py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-[#D9F634] shadow text-[#121212] font-bold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-black/10 shadow-md rounded-2xl p-6">
        {activeTab === "Fraud" && (
          <>
            <h4 className="font-semibold mb-1">Fraud Analysis</h4>
            <p className="text-sm text-gray-500 mb-4">
              Anomaly detection and risk scoring
            </p>
            <p className="text-sm text-gray-500">
              No fraud analysis available. Click{" "}
              <span className="font-medium text-gray-700">
                Refresh Insights
              </span>{" "}
              to generate.
            </p>
          </>
        )}

        {activeTab === "Risk" && (
          <>
            <h4 className="font-semibold mb-1">Credit & Behavioral Risk</h4>
            <p className="text-sm text-gray-500 mb-4">
              Risk assessment and recommendations
            </p>
            <p className="text-sm text-gray-500">
              No risk analysis available. Click{" "}
              <span className="font-medium text-gray-700">
                Refresh Insights
              </span>{" "}
              to generate.
            </p>
          </>
        )}

        {activeTab === "Marketing" && (
          <>
            <h4 className="font-semibold mb-1">Marketing Insights</h4>
            <p className="text-sm text-gray-500 mb-4">
              Customer segmentation and campaign analysis
            </p>
            <p className="text-sm text-gray-500">
              No marketing insights available.
            </p>
          </>
        )}

        {activeTab === "Collection" && (
          <>
            <h4 className="font-semibold mb-1">Collection Insights</h4>
            <p className="text-sm text-gray-500 mb-4">
              Delinquency and repayment behavior
            </p>
            <p className="text-sm text-gray-500">
              No collection insights available.
            </p>
          </>
        )}

        {activeTab === "Wealth" && (
          <>
            <h4 className="font-semibold mb-1">Wealth Insights</h4>
            <p className="text-sm text-gray-500 mb-4">
              Investment and wealth profiling
            </p>
            <p className="text-sm text-gray-500">
              No wealth insights available.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default InsightByAI;
