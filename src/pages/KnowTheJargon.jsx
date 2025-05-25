import React from "react";
import TopBar from "../components/top-bar";

const KnowTheJargon = () => {
  return (
    <div>
      <TopBar />
      <p className="text-center p-3 text-3xl font-bold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(204,85,0,0.5))] text-transparent bg-clip-text ">
        Know The Basic Jargons
      </p>
      <div className="flex justify-center px-2 sm:px-4">
        <div className="flex flex-col items-center w-full max-w-[1100px]">
          {terms.map((term) => (
            <JargonContainer key={term.id} props={term} />
          ))}
        </div>
      </div>
    </div>
  );
};

const JargonContainer = ({ props }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-lg p-6 sm:p-7 my-4 w-full max-w-[1000px] bg-neutral-900 shadow-md shadow-orange-600/30 hover:scale-105 transition">
      <p className="text-lg font-semibold p-3">{props.id}.</p>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{props.title}</p>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
};

const terms = [
  {
    id: 1,
    title: "Balance Sheet",
    description:
      "A list of what a company owns (assets), owes (liabilities), and the leftover portion for owners (equity). It's like a photo of your bank account, debts, and net worth at one moment.",
  },
  {
    id: 2,
    title: "Income Statement (Profit & Loss Statement)",
    description:
      "Shows how much money the company made, spent, and kept as profit during a period. Like your monthly salary vs expenses report.",
  },
  {
    id: 3,
    title: "Cash Flow Statement",
    description:
      "Tracks where the actual cash came from and went — from operations, investments, or financing. Even profitable businesses can run out of cash, and this shows why.",
  },
  {
    id: 4,
    title: " Non-Performing Assets (NPAs)",
    description:
      "Loans where the borrower hasn't paid interest or repaid the principal for 90+ days. Like lending ₹1000 to a friend and they stop answering your calls.",
  },
  {
    id: 5,
    title: " Gross NPAs",
    description:
      "The total value of all bad loans before any adjustments. Reflects the scale of loan repayment problems.",
  },
  {
    id: 6,
    title: " Net NPAs",
    description:
      "Bad loans minus the money already set aside to cover those losses. It shows what risk still remains.",
  },
  {
    id: 7,
    title: "Loan Book / Advances",
    description:
      "The total amount a bank has given out as loans. It's like the company's list of people it has lent money to.",
  },
  {
    id: 8,
    title: "Net Interest Margin (NIM)",
    description:
      "Difference between interest a bank earns from loans and pays on deposits. Shows how profitably the bank is lending money.",
  },

  {
    id: 9,
    title: "Slippage Ratio",
    description:
      "Rate at which good loans turn into NPAs.High ratio = trouble is growing under the surface.",
  },
  {
    id: 10,
    title: "CASA Ratio",
    description:
      "% of a bank's money that comes from current and savings accounts (cheap sources). Higher CASA = stable, low-cost funds.",
  },
  {
    id: 11,
    title: "Provisioning Coverage Ratio (PCR)",
    description:
      "Percentage of NPAs for which the bank has already kept backup money. A higher PCR = better protection from future losses.",
  },
  {
    id: 12,
    title: " Dividend",
    description:
      "Part of the profit given to shareholders. Like getting a bonus because you own part of the company.",
  },
  {
    id: 13,
    title: "Debt-to-Equity Ratio (D/E)",
    description:
      "Compares what a company owes to what it owns. Higher ratio = more borrowing = higher risk.",
  },
  {
    id: 14,
    title: "Return on Equity (ROE)",
    description:
      "How much profit the company makes with each rupee of shareholder investment. Higher ROE = efficient use of investor money.",
  },
  {
    id: 15,
    title: "Corporate Governance",
    description:
      "How fairly and transparently a company is being run. Includes board decisions, audits, and ethical conduct.",
  },
  {
    id: 16,
    title: "Capital Adequacy Ratio (CAR)",
    description:
      "How much capital a bank has to absorb unexpected losses. Think of it as the strength of a building's foundation.",
  },
  {
    id: 17,
    title: "Assets",
    description:
      "Everything the company owns — cash, buildings, machines, etc. Think of this as your valuables.",
  },
  {
    id: 18,
    title: "Liabilities",
    description:
      "Everything the company owes — loans, bills, unpaid dues. Think of this as your credit card dues or EMIs.",
  },
  {
    id: 19,
    title: "Promoter Pledging",
    description:
      "When company founders borrow money using their shares as security. Risky if the share price falls — they could lose control of the company.",
  },
  {
    id: 20,
    title: "Equity",
    description:
      "Owner's share after subtracting liabilities from assets. It's like your actual net worth.",
  },
];

export default KnowTheJargon;
