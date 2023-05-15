import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import MenuLinkMobile from "./MenuLinkMobile";
import Link from "next/link";

export default function NavigationPanelMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="flex h-[35px] w-[35px] items-center justify-center transition-all lg:hidden"
        >
          <span className="inline-flex flex-col items-center justify-center overflow-visible">
            <span
              className={`my-1 h-[2px] w-[21px] bg-black-500 transition-transform duration-[400ms] ${
                isMenuOpen ? "translate-y-[5px] rotate-45" : "transform-none"
              }`}
            ></span>
            <span
              className={`my-1 h-[2px] w-[21px] bg-black-500 transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[-5px] -rotate-45" : "transform-none"
              }`}
            ></span>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 top-[73px] z-10 overflow-y-auto bg-pink-400">
          <Dialog.Content className="relative w-full bg-pink-400 px-4 pb-16 data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn lg:px-8">
            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            <Dialog.Description className="sr-only">
              Menu links to navigate dashboard
            </Dialog.Description>
            <nav>
              <div className="space-y-8 pb-[146px] pt-[50px]">
                <div className="space-y-4">
                  <h1 className="font-general-sans text-base font-medium text-black-400">
                    Main pages
                  </h1>
                  <MenuLinkMobile href="/" title="Dashboard">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M12 12V3"
                        className="stroke-current stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.7906 7.5L4.20935 16.5"
                        className="stroke-current stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.14997 13.65C3.04765 13.106 2.99742 12.5535 2.99997 12C2.99878 10.1387 3.57533 8.32287 4.65004 6.80317C5.72475 5.28346 7.24464 4.13477 8.99997 3.51562V10.2656L3.14997 13.65Z"
                        className="stroke-current stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3C13.577 3.00018 15.1263 3.41474 16.4927 4.20215C17.8591 4.98957 18.9946 6.12219 19.7854 7.48658C20.5763 8.85096 20.9948 10.3992 20.9989 11.9762C21.0031 13.5533 20.5928 15.1037 19.8092 16.4722C19.0255 17.8408 17.896 18.9794 16.5338 19.774C15.1716 20.5686 13.6245 20.9914 12.0475 20.9999C10.4705 21.0084 8.91897 20.6024 7.54827 19.8225C6.17757 19.0426 5.03586 17.9163 4.23749 16.5563"
                        className="stroke-current stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="#" title="Balances">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M3.37685 5.92566L3.375 18.5C3.375 18.8978 3.375 19.625 3.37596 20C3.74874 20 4.47717 20 4.875 20H19.875C20.0739 20 20.625 20 20.625 20C20.625 19.625 20.625 19.4489 20.625 19.25V8.75C20.625 8.55109 20.625 8 20.625 8C20.625 8 20.0739 8 19.875 8H4.875C4.058 8 3.37685 6.87434 3.37685 5.92566ZM3.37685 5.92566C3.37685 4.97698 4.058 4 4.875 4H17.625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M16.5 15.125C17.1213 15.125 17.625 14.6213 17.625 14C17.625 13.3787 17.1213 12.875 16.5 12.875C15.8787 12.875 15.375 13.3787 15.375 14C15.375 14.6213 15.8787 15.125 16.5 15.125Z"
                        className="fill-current"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="/transactions" title="Transactions">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M7.46875 19.1563L7.46875 4.53125M7.46875 4.53125L4.46875 7.53125M7.46875 4.53125L10.4687 7.53125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M17.1562 4.53125V19.1562M17.1562 19.1562L14.1562 16.1562M17.1562 19.1562L20.1562 16.1562"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="#" title="Analytics">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <rect
                        x="2.25"
                        y="12.75"
                        width="4.5"
                        height="7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <rect
                        x="9.75"
                        y="9"
                        width="4.5"
                        height="11.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <rect
                        x="17.25"
                        y="3.75"
                        width="4.5"
                        height="16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="#" title="Marketing">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M8.22214 8.7627L10.6097 20.1111C10.6365 20.2329 10.6321 20.3594 10.597 20.479C10.5619 20.5986 10.4971 20.7074 10.4088 20.7953L9.5405 21.6773C9.45646 21.7632 9.35304 21.8276 9.23894 21.8651C9.12483 21.9026 9.00338 21.9122 8.88479 21.893C8.76621 21.8739 8.65397 21.8265 8.55752 21.7549C8.46106 21.6833 8.38322 21.5896 8.33053 21.4816L6.09658 16.8741"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M6.09685 16.8735C5.1236 17.0782 4.10886 16.888 3.27588 16.3446C2.4429 15.8012 1.8599 14.9491 1.65514 13.9759C1.45038 13.0026 1.64063 11.9879 2.18403 11.1549C2.72744 10.3219 3.5795 9.73891 4.55275 9.53415L8.22241 8.7621C8.22241 8.7621 13.2223 7.71018 17.1823 2.67134C17.2706 2.56036 17.3885 2.4767 17.5225 2.43006C17.6564 2.38342 17.8008 2.37571 17.939 2.40782C18.0771 2.43994 18.2033 2.51056 18.3029 2.6115C18.4026 2.71245 18.4715 2.83957 18.5018 2.97812L21.5051 17.2531C21.5332 17.3921 21.5213 17.5363 21.4708 17.6688C21.4203 17.8013 21.3332 17.9168 21.2198 18.0019C21.1063 18.0869 20.971 18.138 20.8296 18.1493C20.6882 18.1606 20.5466 18.1316 20.421 18.0656C14.7664 15.0495 9.76652 16.1014 9.76652 16.1014L6.09685 16.8735Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="#" title="Exchange rates">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M4.125 12.75V12.75C4.125 8.40076 7.65076 4.875 12 4.875H19.875M19.875 4.875L17.0956 1.5M19.875 4.875L17.0956 8.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M19.875 11.25V11.25C19.875 15.5992 16.3492 19.125 12 19.125H4.125M4.125 19.125L6.90441 22.5M4.125 19.125L6.90441 15.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>
                </div>

                <div className="space-y-4">
                  <h1 className="font-general-sans text-base font-medium text-black-400">
                    Accept payments
                  </h1>
                  <MenuLinkMobile href="#" title="Checkout">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M7.5 21.75C8.32843 21.75 9 21.0784 9 20.25C9 19.4216 8.32843 18.75 7.5 18.75C6.67157 18.75 6 19.4216 6 20.25C6 21.0784 6.67157 21.75 7.5 21.75Z"
                        className="fill-current"
                      />
                      <path
                        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                        className="fill-current"
                      />
                      <path
                        d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>

                  <MenuLinkMobile href="#" title="Payment Links">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M11.4662 6.69381L13.3225 4.83756C14.1084 4.12124 15.1401 3.73529 16.2032 3.7599C17.2663 3.78451 18.279 4.2178 19.0309 4.96972C19.7829 5.72164 20.2161 6.73438 20.2408 7.79747C20.2654 8.86057 19.8794 9.89227 19.1631 10.6782L16.51 13.3219C16.1276 13.7057 15.6732 14.0103 15.1729 14.2181C14.6725 14.4259 14.1361 14.5328 13.5943 14.5328C13.0526 14.5328 12.5161 14.4259 12.0158 14.2181C11.5155 14.0103 11.0611 13.7057 10.6787 13.3219"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M12.5344 17.3048L10.6782 19.1611C9.89228 19.8774 8.86057 20.2634 7.79748 20.2387C6.73438 20.2141 5.72164 19.7808 4.96972 19.0289C4.2178 18.277 3.78451 17.2643 3.7599 16.2012C3.73529 15.1381 4.12124 14.1064 4.83756 13.3205L7.49069 10.6767C7.87306 10.2929 8.32744 9.98837 8.82778 9.78058C9.32811 9.57279 9.86455 9.46582 10.4063 9.46582C10.9481 9.46582 11.4845 9.57279 11.9849 9.78058C12.4852 9.98837 12.9396 10.2929 13.3219 10.6767"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>
                </div>

                <div className="space-y-4">
                  <h1 className="font-general-sans text-base font-medium text-black-400">
                    Send payments
                  </h1>

                  <MenuLinkMobile href="#" title="Wire">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M5 7L19.625 7M19.625 7L16.625 4M19.625 7L16.625 10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                      <path
                        d="M19.625 16.6875L5 16.6875M5 16.6875L8 13.6875M5 16.6875L8 19.6875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current stroke-2"
                      />
                    </svg>
                  </MenuLinkMobile>
                </div>
              </div>

              <div className="space-y-3.5">
                <Link
                  href="#"
                  className="inline-flex items-center gap-x-4 rounded-full bg-pink-500 py-2 pl-2.5 pr-6 text-xs font-semibold text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path
                      d="M10.8221 14.264V14.1255C10.8257 13.4828 10.886 12.9714 11.0032 12.5915C11.124 12.2115 11.2944 11.9061 11.5146 11.6753C11.7347 11.4409 12.0029 11.226 12.3189 11.0307C12.5355 10.8958 12.7291 10.7484 12.8995 10.5886C13.0735 10.4253 13.2102 10.2442 13.3097 10.0453C13.4091 9.84287 13.4588 9.61738 13.4588 9.3688C13.4588 9.08826 13.3931 8.845 13.2617 8.63904C13.1303 8.43307 12.9528 8.27327 12.7291 8.15964C12.5089 8.046 12.2621 7.98918 11.9887 7.98918C11.7365 7.98918 11.4968 8.04422 11.2695 8.15431C11.0458 8.26084 10.8594 8.42419 10.7102 8.64437C10.5646 8.86098 10.483 9.1362 10.4652 9.47H8.56891C8.58666 8.79529 8.75002 8.23066 9.05897 7.77611C9.37147 7.32157 9.7834 6.98066 10.2948 6.75338C10.8097 6.52611 11.3779 6.41248 11.9993 6.41248C12.6776 6.41248 13.2742 6.53144 13.7891 6.76936C14.3075 7.00729 14.7106 7.34642 14.9982 7.78677C15.2894 8.22356 15.435 8.74202 15.435 9.34216C15.435 9.74699 15.3693 10.1092 15.2379 10.4288C15.1101 10.7484 14.9272 11.0325 14.6893 11.2811C14.4514 11.5297 14.1691 11.7516 13.8423 11.9469C13.5547 12.1245 13.3186 12.3091 13.1339 12.5009C12.9528 12.6927 12.8178 12.9182 12.7291 13.1774C12.6438 13.4331 12.5994 13.7491 12.5959 14.1255V14.264H10.8221ZM11.749 17.5879C11.4293 17.5879 11.1541 17.4743 10.9233 17.247C10.6925 17.0197 10.5771 16.7427 10.5771 16.416C10.5771 16.0964 10.6925 15.823 10.9233 15.5957C11.1541 15.3684 11.4293 15.2548 11.749 15.2548C12.065 15.2548 12.3384 15.3684 12.5693 15.5957C12.8036 15.823 12.9208 16.0964 12.9208 16.416C12.9208 16.6326 12.8658 16.8297 12.7557 17.0073C12.6492 17.1848 12.5071 17.3269 12.3296 17.4334C12.1556 17.5364 11.962 17.5879 11.749 17.5879Z"
                      className="fill-current"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current stroke-2"
                    />
                  </svg>
                  <span className="shrink-0">Support</span>
                </Link>
              </div>
            </nav>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
