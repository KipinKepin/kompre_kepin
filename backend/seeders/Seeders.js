import db from "../config/Database.js";
import Customers from "../models/CustomerModel.js";
import PersonaCategories from "../models/PersonaCategory.js";
import Personas from "../models/PersonaModel.js";
import PersonaUserCategory from "../models/PersonaUserCategory.js";
import Transactions from "../models/TransactionModel.js";

async function seed() {
  try {
    await db.authenticate();
    console.log("connected");

    const customers = await Customers.bulkCreate([
      {
        cif: "CIF001",
        name: "Kevin Samosir",
        birth_date: "1999-04-12",
        city: "Medan",
        job: "Software Engineer",
        monthly_income: 12000000,
      },
      {
        cif: "CIF002",
        name: "Andi Wijaya",
        birth_date: "1995-02-20",
        city: "Jakarta",
        job: "Sales",
        monthly_income: 8000000,
      },
      {
        cif: "CIF003",
        name: "Maria Hutagalung",
        birth_date: "1988-11-05",
        city: "Balige",
        job: "Entrepreneur",
        monthly_income: 30000000,
      },
    ]);
    console.log("cust seeded\n");

    const transactions = [];
    const cifs = ["CIF001", "CIF002", "CIF003"];
    const merchants = ["Tokopedia", "Shopee", "ATM BNI", "Gojek", "Grab"];
    const channels = ["mobile", "atm", "teller"];

    for (let i = 0; i < 50; i++) {
      transactions.push({
        cif: cifs[i % 3],
        transaction_date: new Date(Date.now() - i * 86400000),
        transaction_type: "payment",
        merchant: merchants[i % merchants.length],
        amount: Math.floor(Math.random() * 5000000) + 50000,
        channel: channels[i % channels.length],
      });
    }

    await Transactions.bulkCreate(transactions);
    console.log("trans seeded\n");

    await Personas.bulkCreate([
      {
        cif: "CIF001",
        last_transaction_date: new Date(),
      },
      {
        cif: "CIF002",
        last_transaction_date: new Date(),
      },
      {
        cif: "CIF003",
        last_transaction_date: new Date(),
      },
    ]);

    console.log("pers seeded\n");

    await PersonaCategories.bulkCreate([
      {
        cif: "CIF001",
        category_group: "fraud",
        category_name: "sudden_spike",
        score: 0.7,
        result_json: {
          description: "2 high-value transfers to unknown wallet",
          related_transaction_ids: [2, 3],
        },
      },
      {
        cif: "CIF001",
        category_group: "marketing",
        category_name: "digital_shopper",
        score: null,
        result_json: {
          description: "Frequent online purchases",
          related_transaction_ids: [1, 4],
        },
      },
      {
        cif: "CIF002",
        category_group: "risk",
        category_name: "medium_risk",
        score: 0.5,
        result_json: {
          description: "Expenses temporarily exceeded income",
          related_transaction_ids: [6, 7],
        },
      },
      {
        cif: "CIF003",
        category_group: "wealth",
        category_name: "affluent",
        score: null,
        result_json: {
          description: "Stable high income, low expenses",
          related_transaction_ids: [10, 11],
        },
      },
    ]);

    console.log("pers cat seeded\n");

    await PersonaUserCategory.bulkCreate([
      {
        cif: "CIF001",
        category_name: "cash_flow_anomaly",
        description: "Transaction amounts exceed usual pattern",
      },
      {
        cif: "CIF001",
        category_name: "lifestyle_upgrade",
        description: "Frequent online purchases",
      },
      {
        cif: "CIF002",
        category_name: "high_risk_transfer",
        description: "Multiple large transfers to new accounts",
      },
      {
        cif: "CIF003",
        category_name: "investment_behavior",
        description: "Regular high-value deposits",
      },
    ]);

    console.log("per user cat seeded\n");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
