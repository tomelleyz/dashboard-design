import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";

const dummyData = [
  {
    transactionID: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
  {
    transactionID: "CB328ABCEDF23416",
    source: "UBA",
    customerName: "Steve O'Shassy",
    customerEmail: "0982764829",
    amount: "$480.00",
    requestDate: "24.08.2021",
    status: "Successful",
  },
  {
    transactionID: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
  {
    transactionID: "GB124QWERTY12346",
    source: "GTB",
    customerName: "Mike Owen",
    customerEmail: "0223337281",
    amount: "$230.00",
    requestDate: "24.08.2021",
    status: "Pending",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Transactions</title>
        <meta name="description" content="Klasha dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef2c5a"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
          >
            <div>
              <h1 className="rounded-t-lg border border-solid border-grey-100 px-4 pb-6 pt-4 font-general-sans text-lg font-medium text-black-500">
                Transaction history
              </h1>
              <div className="flex flex-col gap-y-3 border-x border-b border-grey-100 px-4 py-2 md:flex-row md:items-center md:justify-between">
                <input
                  type="search"
                  placeholder="Search"
                  className="rounded-lg border border-grey-600 bg-white py-2 pl-3.5 pr-2 text-sm text-black-500 transition-colors placeholder:text-grey-700 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />

                <div className="flex gap-x-3">
                  <button className="inline-flex items-center gap-x-3 rounded-lg border border-solid border-black-500 bg-transparent px-5 py-3 text-black-500 transition-colors hover:border-transparent hover:bg-pink-500 hover:text-white">
                    Filter
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 8H12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M6.66675 11.3333H9.33341"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M2 4.66667H14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </button>

                  <button className="rounded-lg border border-solid border-black-500 bg-transparent px-5 py-3 text-black-500 transition-colors hover:border-transparent hover:bg-pink-500 hover:text-white">
                    Export
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto border-x border-grey-100">
              <table className="w-full border-collapse text-left">
                <thead className="font-general-sans text-base text-black-600">
                  <tr>
                    <th className="px-4 pt-8 font-semibold lg:px-8">
                      TransactionID
                    </th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">Source</th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">
                      Customer name
                    </th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">
                      Customer email
                    </th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">Amount</th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">
                      Request date
                    </th>
                    <th className="px-4 pt-8 font-semibold lg:px-8">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((data) => (
                    <tr
                      key={data.transactionID}
                      className="bg-white transition-colors hover:bg-grey-50"
                    >
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.transactionID}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.source}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.customerName}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.customerEmail}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.amount}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.requestDate}
                      </td>
                      <td className="border-b border-grey-100 px-4 py-6 text-sm text-black-700 lg:px-8">
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end rounded-b-lg border-x border-b border-grey-100 p-4">
              <div className="grid grid-cols-9 grid-rows-1 rounded-[5px] border border-grey-200 text-sm font-semibold">
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-[1.33333]"
                      />
                    </svg>
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-grey-100 text-black-500 transition-colors group-hover:bg-grey-100">
                    1
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    2
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    3
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    &#8230;
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    8
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    9
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    10
                  </span>
                </button>
                <button className="group flex items-center justify-center px-2 py-1.5 text-grey-300 hover:text-black-500">
                  <span className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-grey-100">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-[1.33333]"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
}
