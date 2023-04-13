import Image from "next/image";
import Link from "next/link";
import NavigationPanelMobile from "./navigation/NavigationPanelMobile";

export default function MainContent({ children }) {
  return (
    <section className="relative h-full w-full bg-white">
      <header className="sticky top-0 z-20 flex justify-between border-b border-solid border-grey-500 bg-white px-4 py-[18px] lg:justify-end lg:px-8">
        <Link href="/" className="block lg:hidden">
          <Image
            src="/klasha-letter-logo.svg"
            width={35}
            height={35}
            alt="Klasha logo"
          />
        </Link>

        <NavigationPanelMobile />

        <div className="hidden items-center gap-x-4 lg:flex">
          <div className="inline-flex items-center gap-x-1 text-black-500">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8434 15.9995C28.8434 23.0803 22.8319 28.8435 15.9995 28.8435C9.16708 28.8435 3.15552 23.0803 3.15552 15.9995C3.15552 8.90598 8.90595 3.15555 15.9995 3.15555C23.093 3.15555 28.8434 8.90598 28.8434 15.9995Z"
                className="stroke-current stroke-2"
              />
              <circle
                cx="15.9991"
                cy="10.8089"
                r="3.32624"
                className="stroke-current stroke-2"
              />
              <path
                d="M22.7872 20.7606C22.7872 21.2529 22.362 21.9679 21.0591 22.6193C19.816 23.2409 18.0287 23.6542 15.9999 23.6542C13.9711 23.6542 12.1838 23.2409 10.9407 22.6193C9.63784 21.9679 9.21271 21.2529 9.21271 20.7606C9.21271 20.2847 9.26521 19.9215 9.38689 19.6282C9.49973 19.3562 9.69298 19.093 10.0733 18.8467C10.9008 18.3107 12.5908 17.8669 15.9999 17.8669C19.409 17.8669 21.0991 18.3107 21.9266 18.8467C22.3069 19.093 22.5001 19.3562 22.613 19.6282C22.7347 19.9215 22.7872 20.2847 22.7872 20.7606Z"
                className="stroke-current stroke-2"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L12 16L18 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current stroke-2"
              />
            </svg>
          </div>

          <div className="inline-flex items-center gap-x-1 text-black-500">
            <span className="text-sm/[22px] font-semibold">En</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L12 16L18 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current stroke-2"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="h-full overflow-y-auto overflow-x-hidden px-4 pb-40 pt-16 lg:px-8 lg:pt-[104px]">
        {children}
      </div>
    </section>
  );
}
