import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Home</title>
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
            <h1 className="mb-6 font-general-sans text-xl font-medium text-black-900">
              Sales overview
            </h1>

            <div className="flex flex-col flex-wrap gap-6 md:flex-row">
              <div className="group flex min-h-[240px] w-full flex-col justify-between rounded-lg border border-solid border-black-950 bg-white p-6 text-sm text-black-950 transition-colors duration-300 hover:bg-black-950 hover:text-white md:w-[calc(50%_-_12px)] lg:w-[calc(33.333333%_-_16px)] xl:w-[calc(25%_-_18px)]">
                <div>
                  <p className="mb-[5px]">Today&apos;s sales</p>
                  <span className="font-general-sans text-xl font-medium">
                    ₦1,652.50
                  </span>
                </div>
              </div>
              <div className="group flex min-h-[240px] w-full flex-col justify-between rounded-lg border border-solid border-black-950 bg-white p-6 text-sm text-black-950 transition-colors duration-300 hover:bg-black-950 hover:text-white md:w-[calc(50%_-_12px)] lg:w-[calc(33.333333%_-_16px)] xl:w-[calc(25%_-_18px)]">
                <p>24 Aug - 01 Sep 21</p>

                <div className="relative h-[69px] w-full">
                  <Image
                    src="/chart-1.png"
                    alt=""
                    fill
                    className="object-scale-down object-center"
                  />
                </div>

                <div>
                  <p className="mb-[5px]">This week</p>
                  <span className="font-general-sans text-xl font-medium">
                    ₦1,652.50
                  </span>
                </div>
              </div>
              <div className="group flex min-h-[240px] w-full flex-col justify-between rounded-lg border border-solid border-black-950 bg-white p-6 text-sm text-black-950 transition-colors duration-300 hover:bg-black-950 hover:text-white md:w-[calc(50%_-_12px)] lg:w-[calc(33.333333%_-_16px)] xl:w-[calc(25%_-_18px)]">
                <p>24 Aug - 01 Sep 21</p>

                <div className="relative h-[78px] w-full">
                  <Image
                    src="/chart-2.png"
                    alt=""
                    fill
                    className="object-scale-down object-center"
                  />
                </div>

                <div>
                  <p className="mb-[5px]">This month</p>
                  <span className="font-general-sans text-xl font-medium">
                    ₦1,652.50
                  </span>
                </div>
              </div>
              <div className="group flex min-h-[240px] w-full flex-col justify-between rounded-lg border border-solid border-black-950 bg-white p-6 text-sm text-black-950 transition-colors duration-300 hover:bg-black-950 hover:text-white md:w-[calc(50%_-_12px)] lg:w-[calc(33.333333%_-_16px)] xl:w-[calc(25%_-_18px)]">
                <p>24 Aug - 01 Sep 21</p>

                <div className="relative h-[74px] w-full">
                  <Image
                    src="/chart-3.png"
                    alt=""
                    fill
                    className="object-scale-down object-center"
                  />
                </div>

                <div>
                  <p className="mb-[5px]">Last month</p>
                  <span className="font-general-sans text-xl font-medium">
                    ₦1,652.50
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-[42px] flex flex-col gap-6 lg:flex-row lg:items-end">
              <div className="flex grow flex-wrap items-end justify-between gap-x-2.5 gap-y-0.5">
                <div className="flex grow flex-wrap items-baseline gap-2.5">
                  <h1 className="font-general-sans text-xl font-medium text-black-900">
                    Sales
                  </h1>
                  <div className="h-6 w-[1px] self-center bg-black-950/10"></div>
                  <div className="text-500 gap inline-flex items-baseline gap-x-6">
                    <span className="text-sm/[22px] font-semibold transition-colors hover:text-pink-500">
                      7 days
                    </span>
                    <span className="text-sm/[22px] font-semibold transition-colors hover:text-pink-500">
                      30 days
                    </span>
                    <button className="flex items-center gap-x-1.5 rounded-md border border-solid border-black-500 px-5 py-2.5 text-black-500">
                      <span>USD</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-current stroke-2"
                        />
                      </svg>
                    </button>
                  </div>
                  <input
                    className="grow rounded-lg border border-solid border-grey-600 bg-white py-2 pl-3.5 pr-2 text-sm text-grey-700"
                    type="email"
                    defaultValue="Email"
                  />
                </div>
                <button className="ml-auto inline-flex items-center gap-x-4 rounded-lg border border-solid border-black-500 bg-white px-4 py-3 text-xs font-semibold text-black-500 transition-colors hover:border-transparent hover:bg-pink-500 hover:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66667 1.66666L7.66667 14.3333M7.66667 14.3333L13.6667 8.79166M7.66667 14.3333L1.66667 8.79166"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current stroke-2"
                    />
                  </svg>
                  <span>Download</span>
                </button>

                <div className="min-h-[284px] w-full rounded-lg border border-solid border-black-500">
                  <div className="relative mx-auto h-[162px] w-full">
                    <Image
                      src="/chart-4.png"
                      alt=""
                      fill
                      className="object-scale-down object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-h-[284px] w-full shrink-0 flex-col items-center justify-between rounded-lg bg-pink-500 bg-[url('/lines.png')] bg-cover bg-center bg-no-repeat p-6 text-center text-white md:w-[304px] md:items-start md:text-left">
                <h2 className="max-w-[192px] font-general-sans text-xl font-medium">
                  KlashaWire - send money to businesses globally from Africa
                </h2>
                <Link
                  href="#"
                  className="w-3/5 rounded-lg bg-black-500 px-6 py-3 text-sm/[22px] font-semibold md:w-fit"
                >
                  Send a wire
                </Link>
              </div>
            </div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
}
