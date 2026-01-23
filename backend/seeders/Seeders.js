import db from "../config/Database.js";

import Customers from "../models/CustomerModel.js";
import Products from "../models/ProductModel.js";
import CustomerProducts from "../models/CustomerProduct.js";
import Transactions from "../models/TransactionModel.js";
import Personas from "../models/PersonaModel.js";
import PersonaCategories from "../models/PersonaCategory.js";
import PersonaUserCategory from "../models/PersonaUserCategory.js";

async function seed() {
  try {
    await db.authenticate();
    console.log("DB connected\n");

    await Customers.bulkCreate([
      {
        cif: "CIF001",
        name: "Kevin Samosir",
        occupation: "Software Engineer",
        monthly_income: 12000000,
      },
      {
        cif: "CIF002",
        name: "Andi Wijaya",
        occupation: "Sales",
        monthly_income: 8000000,
      },
      {
        cif: "CIF003",
        name: "Maria Hutagalung",
        occupation: "Entrepreneur",
        monthly_income: 30000000,
      },
    ]);
    console.log("Customers seeded");

    const products = await Products.bulkCreate([
      {
        product_code: "SAV001",
        product_name: "BNI Taplus",
        product_type: "deposit",
      },
      {
        product_code: "LN001",
        product_name: "Kredit Usaha",
        product_type: "loan",
      },
      {
        product_code: "CC001",
        product_name: "BNI Credit Card",
        product_type: "credit_card",
      },
    ]);
    console.log("Products seeded");

    await CustomerProducts.bulkCreate([
      {
        cif: "CIF001",
        product_id: products[0].id,
        balance: 8000000,
        outstanding: 0,
      },
      {
        cif: "CIF001",
        product_id: products[1].id,
        balance: 0,
        outstanding: 150000000,
      },
      {
        cif: "CIF002",
        product_id: products[0].id,
        balance: 3000000,
        outstanding: 0,
      },
      {
        cif: "CIF003",
        product_id: products[0].id,
        balance: 120000000,
        outstanding: 0,
      },
    ]);
    console.log("Customer products seeded");

    const transactions = [];
    const cifs = ["CIF001", "CIF002", "CIF003"];
    const merchants = ["Tokopedia", "Shopee", "ATM BNI", "Gojek", "Grab"];
    const channels = ["mobile", "atm", "teller"];

    const now = new Date();

    for (const cif of cifs) {
      for (let m = 0; m < 3; m++) {
        transactions.push({
          cif,
          transaction_date: new Date(
            now.getFullYear(),
            now.getMonth() - m,
            1,
            9,
            0,
            0,
          ),
          transaction_type: "income",
          merchant: "Salary / Income",
          amount: Math.floor(Math.random() * 3000000) + 7000000,
          channel: "teller",
        });
      }

      for (let i = 0; i < 14; i++) {
        const daysAgo = Math.floor(Math.random() * 60);

        transactions.push({
          cif,
          transaction_date: new Date(Date.now() - daysAgo * 86400000),
          transaction_type: "payment",
          merchant: merchants[Math.floor(Math.random() * merchants.length)],
          amount: Math.floor(Math.random() * 5000000) + 50000,
          channel: channels[Math.floor(Math.random() * channels.length)],
        });
      }
    }

    await Transactions.bulkCreate(transactions);
    console.log("Transactions seeded");

    await Personas.bulkCreate([
      { cif: "CIF001", last_transaction: now },
      { cif: "CIF002", last_transaction: now },
      { cif: "CIF003", last_transaction: now },
    ]);
    console.log("Personas seeded");

    await PersonaUserCategory.bulkCreate([
      {
        category_group: "fraud",
        category_name: "cash_flow_anomaly",
        description: "Transaction amounts exceed usual pattern",
      },
      {
        category_group: "risk",
        category_name: "lifestyle_upgrade",
        description: "Frequent online purchases",
      },
      {
        category_group: "fraud",
        category_name: "high_risk_transfer",
        description: "Multiple large transfers to new accounts",
      },
      {
        category_group: "wealth",
        category_name: "investment_behavior",
        description: "Regular high-value deposits",
      },
    ]);
    console.log("Persona user categories seeded");

    await PersonaCategories.bulkCreate([
      {
        cif: "CIF001",
        category_group: "fraud",
        category_name: "cash_flow_anomaly",
        score: 72,
        resultJSON: {
          source: "user",
          summary: "Several unusually high-value transactions detected",
          transaction_ids: [2, 5, 9],
        },
      },
      {
        cif: "CIF002",
        category_group: "risk",
        category_name: "medium_risk_spending",
        score: 55,
        resultJSON: {
          source: "ai",
          summary: "Expenses occasionally exceed income",
          transaction_ids: [6, 8],
        },
      },
      {
        cif: "CIF003",
        category_group: "wealth",
        category_name: "affluent_pattern",
        score: 90,
        resultJSON: {
          source: "ai",
          summary: "High balance with stable income and low expenses",
          transaction_ids: [11, 13],
        },
      },
    ]);
    console.log("Persona categories seeded");

    console.log("\n✅ SEEDING COMPLETE");
    process.exit(0);
  } catch (error) {
    console.error("❌ SEED ERROR:\n", error);
    process.exit(1);
  }
}

seed();
