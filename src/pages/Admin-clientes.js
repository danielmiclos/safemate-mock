import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AdminClientes() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <div>
          <nav className='lg:hidden flex items-center justify-between p-8 bg-gray-700 mb-3'>
            <div className='w-full xl:w-auto px-2 xl:mr-12'>
              <div className='flex items-center justify-between'>
                <a className='inline-flex items-center h-8' href='#'>
                  <img src='trizzle-assets/logos/trizzle-logo.svg' alt='' />
                </a>
                <div className='xl:hidden'>
                  <button className='navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none'>
                    <svg
                      width={20}
                      height={12}
                      viewBox='0 0 20 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Mobile menu</title>
                      <path
                        d='M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className='hidden lg:block navbar-menu relative z-50'>
            <div className='lg:hidden navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50' />
            <nav className='fixed top-0 left-0 bottom-0 w-full max-w-xxs flex flex-col h-full py-8 px-4 bg-gray-700 overflow-auto'>
              <div className='mb-6'>
                <a className='inline-block mb-12' href='index.html'>
                  <img
                    className='h-7 m-4'
                    src='images/SafeMate2-svg-1710082572716.webp'
                    alt=''
                  />
                </a>
                <ul className='mb-8'>
                  <li className='mb-4'>
                    <a
                      className='flex items-center p-4 rounded-xl'
                      href='admin-dashboard.html'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H8C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM7 18H2V13H7V18ZM19 0H12C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9H19C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 7H13V2H18V7ZM19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM18 18H13V13H18V18ZM8 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0ZM7 7H2V2H7V7Z'
                          fill='currentColor'
                        />
                      </svg>
                      <span className='ml-4 text-sm font-semibold'>
                        Overview
                      </span>
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                      href='#'
                    >
                      <span className='text-gray-400'>
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16C10.2652 16 10.5196 15.8946 10.7071 15.7071C10.8946 15.5196 11 15.2652 11 15V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4ZM5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16C5.26522 16 5.51957 15.8946 5.70711 15.7071C5.89464 15.5196 6 15.2652 6 15V11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      <span className='ml-4 text-sm font-semibold'>
                        Analytics
                      </span>
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      className='flex items-center p-4 hover:bg-gray-800 rounded-xl'
                      href='admin-clientes.html'
                    >
                      <span className='text-gray-400'>
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className=''
                        >
                          <path
                            d='M12.81 10.28C13.443 9.60024 13.7996 8.70877 13.81 7.78C13.81 6.77748 13.4118 5.81602 12.7029 5.10714C11.994 4.39825 11.0325 4 10.03 4C9.02748 4 8.06602 4.39825 7.35714 5.10714C6.64825 5.81602 6.25 6.77748 6.25 7.78C6.26044 8.70877 6.61702 9.60024 7.25 10.28C6.36865 10.7189 5.61022 11.3699 5.04292 12.1746C4.47561 12.9793 4.11723 13.9124 4 14.89C3.97083 15.1552 4.0482 15.4212 4.21511 15.6293C4.38202 15.8375 4.62478 15.9708 4.89 16C5.15522 16.0292 5.42116 15.9518 5.62932 15.7849C5.83749 15.618 5.97083 15.3752 6 15.11C6.11933 14.1411 6.58885 13.2494 7.32009 12.6027C8.05133 11.956 8.99382 11.599 9.97 11.599C10.9462 11.599 11.8887 11.956 12.6199 12.6027C13.3512 13.2494 13.8207 14.1411 13.94 15.11C13.9678 15.3664 14.0936 15.6022 14.2911 15.768C14.4887 15.9339 14.7426 16.017 15 16H15.11C15.3721 15.9698 15.6117 15.8373 15.7766 15.6313C15.9414 15.4252 16.0181 15.1624 15.99 14.9C15.8815 13.9276 15.5344 12.997 14.9796 12.191C14.4248 11.3851 13.6796 10.7286 12.81 10.28ZM10 9.56C9.64795 9.56 9.3038 9.4556 9.01108 9.26002C8.71836 9.06443 8.49022 8.78643 8.35549 8.46118C8.22077 8.13592 8.18552 7.77803 8.2542 7.43274C8.32288 7.08745 8.49241 6.77029 8.74135 6.52135C8.99029 6.27241 9.30745 6.10288 9.65274 6.0342C9.99803 5.96552 10.3559 6.00077 10.6812 6.13549C11.0064 6.27022 11.2844 6.49837 11.48 6.79109C11.6756 7.0838 11.78 7.42795 11.78 7.78C11.78 8.25208 11.5925 8.70484 11.2586 9.03865C10.9248 9.37247 10.4721 9.56 10 9.56ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      <span className='ml-4 text-sm font-semibold'>
                        Clientes
                      </span>
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      className='flex items-center p-4 hover:bg-gray-800 rounded-xl'
                      href='admin-cadastros.html'
                    >
                      <span className='text-gray-400'>
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className=''
                        >
                          <path
                            d='M17 4.5H14V3.5C14 2.70435 13.6839 1.94129 13.1213 1.37868C12.5587 0.816071 11.7956 0.5 11 0.5H9C8.20435 0.5 7.44129 0.816071 6.87868 1.37868C6.31607 1.94129 6 2.70435 6 3.5V4.5H3C2.20435 4.5 1.44129 4.81607 0.87868 5.37868C0.316071 5.94129 0 6.70435 0 7.5V16.5C0 17.2956 0.316071 18.0587 0.87868 18.6213C1.44129 19.1839 2.20435 19.5 3 19.5H17C17.7956 19.5 18.5587 19.1839 19.1213 18.6213C19.6839 18.0587 20 17.2956 20 16.5V7.5C20 6.70435 19.6839 5.94129 19.1213 5.37868C18.5587 4.81607 17.7956 4.5 17 4.5ZM8 3.5C8 3.23478 8.10536 2.98043 8.29289 2.79289C8.48043 2.60536 8.73478 2.5 9 2.5H11C11.2652 2.5 11.5196 2.60536 11.7071 2.79289C11.8946 2.98043 12 3.23478 12 3.5V4.5H8V3.5ZM18 16.5C18 16.7652 17.8946 17.0196 17.7071 17.2071C17.5196 17.3946 17.2652 17.5 17 17.5H3C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V11C2.97544 11.3869 3.97818 11.7011 5 11.94V12.53C5 12.7952 5.10536 13.0496 5.29289 13.2371C5.48043 13.4246 5.73478 13.53 6 13.53C6.26522 13.53 6.51957 13.4246 6.70711 13.2371C6.89464 13.0496 7 12.7952 7 12.53V12.32C7.99435 12.4554 8.99649 12.5255 10 12.53C11.0035 12.5255 12.0057 12.4554 13 12.32V12.53C13 12.7952 13.1054 13.0496 13.2929 13.2371C13.4804 13.4246 13.7348 13.53 14 13.53C14.2652 13.53 14.5196 13.4246 14.7071 13.2371C14.8946 13.0496 15 12.7952 15 12.53V11.94C16.0218 11.7011 17.0246 11.3869 18 11V16.5ZM18 8.81C17.0274 9.22049 16.0244 9.55483 15 9.81V9.5C15 9.23478 14.8946 8.98043 14.7071 8.79289C14.5196 8.60536 14.2652 8.5 14 8.5C13.7348 8.5 13.4804 8.60536 13.2929 8.79289C13.1054 8.98043 13 9.23478 13 9.5V10.24C11.0113 10.54 8.98875 10.54 7 10.24V9.5C7 9.23478 6.89464 8.98043 6.70711 8.79289C6.51957 8.60536 6.26522 8.5 6 8.5C5.73478 8.5 5.48043 8.60536 5.29289 8.79289C5.10536 8.98043 5 9.23478 5 9.5V9.83C3.97562 9.57483 2.9726 9.24049 2 8.83V7.5C2 7.23478 2.10536 6.98043 2.29289 6.79289C2.48043 6.60536 2.73478 6.5 3 6.5H17C17.2652 6.5 17.5196 6.60536 17.7071 6.79289C17.8946 6.98043 18 7.23478 18 7.5V8.81Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      <span className='ml-4 text-sm font-semibold'>
                        Cadastros
                      </span>
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      className='flex items-center p-4 rounded-xl items-center hover:bg-gray-800 text-white bg-blue-500'
                      href='admin-chamados.html'
                    >
                      <span className='text-gray-400'>
                        <svg
                          width={20}
                          height={21}
                          viewBox='0 0 20 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12 17C12.2653 17 12.5196 16.8947 12.7071 16.7071C12.8947 16.5196 13 16.2652 13 16V14C13 13.7348 12.8947 13.4805 12.7071 13.2929C12.5196 13.1054 12.2653 13 12 13C11.7348 13 11.4805 13.1054 11.2929 13.2929C11.1054 13.4805 11 13.7348 11 14V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4805 16.8947 11.7348 17 12 17ZM8.00004 17C8.26525 17 8.51961 16.8947 8.70714 16.7071C8.89468 16.5196 9.00004 16.2652 9.00004 16V14C9.00004 13.7348 8.89468 13.4805 8.70714 13.2929C8.51961 13.1054 8.26525 13 8.00004 13C7.73482 13 7.48047 13.1054 7.29293 13.2929C7.10539 13.4805 7.00004 13.7348 7.00004 14V16C7.00004 16.2652 7.10539 16.5196 7.29293 16.7071C7.48047 16.8947 7.73482 17 8.00004 17ZM17 5.00003H15.62L13.89 1.55003C13.8372 1.42308 13.7587 1.3084 13.6595 1.21316C13.5603 1.11791 13.4426 1.04414 13.3136 0.996469C13.1846 0.948794 13.0472 0.928235 12.9099 0.936075C12.7726 0.943915 12.6384 0.979987 12.5157 1.04204C12.3929 1.10408 12.2843 1.19078 12.1966 1.2967C12.1089 1.40261 12.044 1.52548 12.006 1.65762C11.9679 1.78976 11.9575 1.92833 11.9754 2.06467C11.9933 2.20102 12.0391 2.3322 12.11 2.45003L13.38 5.00003H6.62004L7.89004 2.45003C7.9871 2.21693 7.9924 1.95575 7.90486 1.71891C7.81732 1.48208 7.64343 1.28712 7.4181 1.17319C7.19277 1.05926 6.93268 1.03479 6.69005 1.10469C6.44742 1.17458 6.24022 1.33368 6.11004 1.55003L4.38004 5.00003H3.00004C2.29323 5.01078 1.61291 5.27077 1.07909 5.73416C0.545259 6.19755 0.192211 6.83455 0.0822073 7.53283C-0.0277959 8.23112 0.112313 8.94581 0.477823 9.55088C0.843332 10.1559 1.41076 10.6125 2.08004 10.84L2.82004 18.3C2.89466 19.0426 3.24338 19.7307 3.79811 20.2299C4.35284 20.7292 5.07374 21.0038 5.82004 21H14.2C14.9463 21.0038 15.6672 20.7292 16.222 20.2299C16.7767 19.7307 17.1254 19.0426 17.2 18.3L17.94 10.84C18.6108 10.6118 19.1791 10.1536 19.5443 9.54651C19.9096 8.93942 20.0482 8.22266 19.9356 7.52317C19.823 6.82368 19.4665 6.18661 18.9292 5.7248C18.3919 5.26299 17.7085 5.00624 17 5.00003ZM15.19 18.1C15.1652 18.3475 15.0489 18.5769 14.864 18.7433C14.6791 18.9098 14.4388 19.0013 14.19 19H5.81004C5.56127 19.0013 5.32097 18.9098 5.13606 18.7433C4.95115 18.5769 4.83491 18.3475 4.81004 18.1L4.10004 11H15.9L15.19 18.1ZM17 9.00003H3.00004C2.73482 9.00003 2.48047 8.89467 2.29293 8.70713C2.10539 8.5196 2.00004 8.26524 2.00004 8.00003C2.00004 7.73481 2.10539 7.48046 2.29293 7.29292C2.48047 7.10538 2.73482 7.00003 3.00004 7.00003H17C17.2653 7.00003 17.5196 7.10538 17.7071 7.29292C17.8947 7.48046 18 7.73481 18 8.00003C18 8.26524 17.8947 8.5196 17.7071 8.70713C17.5196 8.89467 17.2653 9.00003 17 9.00003Z'
                            fill='currentColor'
                            className='text-white'
                          />
                        </svg>
                      </span>
                      <span className='ml-4 mr-auto text-sm font-semibold'>
                        Chamados
                      </span>
                      <span className='flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-semibold rounded-full'>
                        4
                      </span>
                    </a>
                  </li>
                </ul>
                <div>
                  <span className='block mb-8 text-xs font-semibold text-gray-400 uppercase'>
                    Teams
                  </span>
                  <ul>
                    <li>
                      <a
                        className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                        href='#'
                      >
                        <div className='w-2 h-2 mr-2 bg-blue-300 rounded-full' />
                        <span className='text-sm font-semibold'>
                          Front-End Team
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                        href='#'
                      >
                        <div className='w-2 h-2 mr-2 bg-green-400 rounded-full' />
                        <span className='text-sm font-semibold'>
                          Back-End Team
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                        href='#'
                      >
                        <div className='w-2 h-2 mr-2 bg-yellow-400 rounded-full' />
                        <span className='text-sm font-semibold'>Design</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                        href='#'
                      >
                        <div className='w-2 h-2 mr-2 bg-red-400 rounded-full' />
                        <span className='text-sm font-semibold text-gray-300'>
                          Marketing
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-auto'>
                <a
                  className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                  href='#'
                >
                  <span className='text-gray-400'>
                    <svg
                      width={21}
                      height={22}
                      viewBox='0 0 21 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.90002C20.3209 8.74269 20.4085 8.54472 20.4301 8.33452C20.4516 8.12433 20.4061 7.9127 20.2999 7.73002L18.2999 4.27002C18.1948 4.08754 18.0348 3.94289 17.8426 3.8567C17.6505 3.77051 17.4361 3.74718 17.2299 3.79002L15.3499 4.17002C15.1107 4.21945 14.8616 4.17961 14.6498 4.05802C14.4379 3.93643 14.2779 3.7415 14.1999 3.51002L13.5899 1.68002C13.5228 1.4814 13.395 1.30888 13.2245 1.18686C13.0541 1.06484 12.8495 0.999476 12.6399 1.00002H8.6399C8.42183 0.988635 8.20603 1.04894 8.02546 1.17173C7.84489 1.29452 7.70948 1.47304 7.6399 1.68002L7.0799 3.51002C7.0019 3.7415 6.84187 3.93643 6.63001 4.05802C6.41815 4.17961 6.16911 4.21945 5.9299 4.17002L3.9999 3.79002C3.80445 3.7624 3.6052 3.79324 3.42724 3.87866C3.24929 3.96407 3.1006 4.10025 2.9999 4.27002L0.999896 7.73002C0.891056 7.91067 0.842118 8.1211 0.860079 8.33124C0.878039 8.54138 0.961979 8.74046 1.0999 8.90002L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4587 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2529 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0006 13.1241 20.9352 13.2945 20.8132C13.465 20.6912 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2529 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1819 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1619 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54004 3.8699 8.99002L3.0699 8.09002L4.3499 5.89002L5.5299 6.13002C6.25012 6.27724 6.99932 6.1549 7.6353 5.78622C8.27128 5.41753 8.74975 4.82818 8.9799 4.13002L9.3599 3.00002H11.9199L12.2999 4.14002C12.53 4.83818 13.0085 5.42753 13.6445 5.79622C14.2805 6.1649 15.0297 6.28724 15.7499 6.14002L16.9299 5.90002L18.2099 8.12002L17.4099 9.02002C16.9235 9.56878 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4513 17.4099 13ZM10.6399 7.00002C9.84877 7.00002 9.07541 7.23461 8.41761 7.67414C7.75982 8.11366 7.24713 8.73838 6.94438 9.46928C6.64163 10.2002 6.56241 11.0045 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3879 9.08361 14.7688 9.85954 14.9232C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93915 14.2185 8.92174 13.4683 8.17159C12.7182 7.42144 11.7008 7.00002 10.6399 7.00002ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.663C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86551 9.22568 9.5858C9.50539 9.3061 9.86175 9.11562 10.2497 9.03845C10.6377 8.96128 11.0398 9.00088 11.4053 9.15226C11.7707 9.30363 12.0831 9.55998 12.3028 9.88888C12.5226 10.2178 12.6399 10.6045 12.6399 11C12.6399 11.5304 12.4292 12.0392 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  <span className='ml-4 text-sm font-semibold'>
                    Configurações
                  </span>
                </a>
                <a
                  className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                  href='#'
                >
                  <span className='text-gray-400'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.59 11L8.29 13.29C8.19627 13.383 8.12188 13.4936 8.07111 13.6154C8.02034 13.7373 7.9942 13.868 7.9942 14C7.9942 14.132 8.02034 14.2627 8.07111 14.3846C8.12188 14.5064 8.19627 14.617 8.29 14.71C8.38296 14.8037 8.49356 14.8781 8.61542 14.9289C8.73728 14.9797 8.86799 15.0058 9 15.0058C9.13201 15.0058 9.26272 14.9797 9.38458 14.9289C9.50644 14.8781 9.61704 14.8037 9.71 14.71L13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86347 13.92 9.62001C13.8724 9.49726 13.801 9.38511 13.71 9.29001L9.71 5.29001C9.61676 5.19677 9.50607 5.12281 9.38425 5.07235C9.26243 5.02189 9.13186 4.99592 9 4.99592C8.86814 4.99592 8.73757 5.02189 8.61575 5.07235C8.49393 5.12281 8.38324 5.19677 8.29 5.29001C8.19676 5.38325 8.1228 5.49394 8.07234 5.61576C8.02188 5.73758 7.99591 5.86815 7.99591 6.00001C7.99591 6.13187 8.02188 6.26244 8.07234 6.38426C8.1228 6.50608 8.19676 6.61677 8.29 6.71001L10.59 9.00001H1C0.734784 9.00001 0.48043 9.10537 0.292893 9.2929C0.105357 9.48044 0 9.73479 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8947 0.734784 11 1 11H10.59ZM10 8.14093e-06C8.13109 -0.00833565 6.29724 0.507221 4.70647 1.4882C3.11569 2.46918 1.83165 3.87632 1 5.55001C0.880653 5.7887 0.861015 6.06503 0.945406 6.31821C1.0298 6.57138 1.21131 6.78066 1.45 6.90001C1.68869 7.01936 1.96502 7.03899 2.2182 6.9546C2.47137 6.87021 2.68065 6.6887 2.8 6.45001C3.43219 5.17333 4.39383 4.08863 5.58555 3.308C6.77727 2.52736 8.15582 2.07913 9.57876 2.0096C11.0017 1.94007 12.4174 2.25178 13.6795 2.91252C14.9417 3.57325 16.0045 4.55904 16.7581 5.768C17.5118 6.97697 17.9289 8.36526 17.9664 9.78939C18.0039 11.2135 17.6605 12.6219 16.9715 13.8688C16.2826 15.1158 15.2731 16.1562 14.0475 16.8824C12.8219 17.6087 11.4246 17.9945 10 18C8.50888 18.0065 7.04615 17.5924 5.77969 16.8053C4.51323 16.0181 3.49435 14.8899 2.84 13.55C2.72065 13.3113 2.51137 13.1298 2.2582 13.0454C2.00502 12.961 1.72869 12.9807 1.49 13.1C1.25131 13.2194 1.0698 13.4286 0.985406 13.6818C0.901015 13.935 0.920653 14.2113 1.04 14.45C1.83283 16.0455 3.03752 17.4002 4.52947 18.3741C6.02142 19.3479 7.74645 19.9054 9.52612 19.989C11.3058 20.0726 13.0755 19.6792 14.6521 18.8495C16.2288 18.0198 17.5552 16.784 18.4941 15.2698C19.433 13.7557 19.9503 12.0181 19.9925 10.237C20.0347 8.45588 19.6003 6.6958 18.7342 5.13884C17.8682 3.58188 16.6018 2.28457 15.0663 1.38111C13.5307 0.477653 11.7816 0.000844593 10 8.14093e-06Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  <span className='ml-4 text-sm font-semibold'>Sair</span>
                </a>
              </div>
            </nav>
          </div>
          <div className='mx-auto lg:ml-80' />
        </div>
        <div className='ml-72'>
          <section>
            <div className='px-8 pt-8 pb-2 bg-gray-600'>
              <div className='pb-6 border-b-2 border-gray-500'>
                <div className='flex flex-wrap justify-between -mx-4'>
                  <div className='w-full lg:w-auto px-4 mb-5 lg:mb-0'>
                    <h4 className='text-2xl font-bold text-white tracking-wide leading-6 mb-1'>
                      Clientes
                    </h4>
                    <p className='text-xs leading-5 text-gray-300'>
                      Lorem ipsum dolor sit amet consectutar domor at elis
                    </p>
                  </div>
                  <div className='w-full lg:w-auto px-4'>
                    <div className='flex flex-wrap items-center'>
                      <a
                        className='inline-flex h-9 py-1 px-4 mb-2 mr-4 items-center text-center text-sm font-bold text-white hover:bg-gray-700 transition duration-200 rounded-lg'
                        href='#'
                      >
                        Todos
                      </a>
                      <a
                        className='inline-flex h-9 py-1 px-4 mb-2 mr-4 items-center text-center text-sm font-bold text-white bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-200 rounded-lg'
                        href='#'
                      >
                        Ativos
                      </a>
                      <a
                        className='inline-flex h-9 py-1 px-4 mb-2 mr-4 items-center text-center text-sm font-bold text-white bg-blue-800 hover:bg-blue-700 transition duration-200 rounded-lg'
                        href='#'
                      >
                        Gratuitos
                      </a>
                      <a
                        className='inline-flex h-9 py-1 px-4 mb-2 items-center text-center text-sm font-bold text-white bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-lg'
                        href='#'
                      >
                        Pendentes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='py-3'>
            <div className='container px-4 mx-auto'>
              <div className='pt-6 pb-8 bg-gray-500 rounded-xl'>
                <div className='px-6'>
                  <h4 className='text-lg text-gray-100 font-semibold mb-6'>
                    Clientes
                  </h4>
                  <div className='w-full mt-6 pb-6 overflow-x-auto'>
                    <table className='w-full min-w-max'>
                      <thead>
                        <tr className='text-left'>
                          <th className='p-0'>
                            <div className='py-3 px-6 rounded-l-xl bg-gray-600'>
                              <span className='text-xs text-gray-300 font-semibold'>
                                NAME
                              </span>
                            </div>
                          </th>
                          <th className='p-0'>
                            <div className='py-3 px-6 bg-gray-600'>
                              <span className='text-xs text-gray-300 font-semibold'>
                                INDUSTRY
                              </span>
                            </div>
                          </th>
                          <th className='p-0'>
                            <div className='py-3 px-6 bg-gray-600'>
                              <span className='text-xs text-gray-300 font-semibold'>
                                LOCATION
                              </span>
                            </div>
                          </th>
                          <th className='p-0'>
                            <div className='py-3 px-6 bg-gray-600'>
                              <span className='text-xs text-gray-300 font-semibold'>
                                ENROLLMENT
                              </span>
                            </div>
                          </th>
                          <th className='p-0'>
                            <div className='py-3 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-xs text-gray-300 font-semibold'>
                                LAST CONTACT
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-l-xl bg-gray-600'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-l-xl bg-gray-600'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-l-xl bg-gray-600'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-l-xl bg-gray-600'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-l-xl bg-gray-600'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 bg-gray-600'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6 rounded-r-xl bg-gray-600'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <div className='flex items-center'>
                                <div className='flex items-center justify-center w-10 h-10 mr-3 bg-gray-400 bg-opacity-20 rounded-md'>
                                  <img
                                    src='trizzle-assets/logos/artemis.svg'
                                    alt=''
                                  />
                                </div>
                                <span className='text-sm text-gray-100 font-medium'>
                                  Artemis
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block px-2 py-1 text-xs text-gray-300 font-medium bg-gray-700 rounded-full'>
                                NO-CODE
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                Warsaw, Poland
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='inline-block w-2 h-2 mr-1 bg-green-500 rounded-full' />
                              <span className='text-sm font-medium text-gray-100'>
                                Enrolled
                              </span>
                            </div>
                          </td>
                          <td className='p-0'>
                            <div className='flex items-center h-16 px-6'>
                              <span className='text-sm text-gray-100 font-medium'>
                                June 06, 2022
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='flex flex-wrap items-center justify-between px-6 pt-8 border-t border-gray-400'>
                  <div className='w-full sm:w-auto mb-6 sm:mb-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-400'>
                        <span>Showing</span>
                        <span className='px-px text-gray-200'>1</span>
                        <span>to</span>
                        <span className='px-px text-gray-200'>10</span>
                        <span>of 20 results</span>
                      </p>
                    </div>
                  </div>
                  <div className='w-full sm:w-auto mb-6 sm:mb-0'>
                    <div className='flex flex-wrap items-center -m-1.5'>
                      <div className='w-auto p-1.5'>
                        <a
                          className='inline-flex items-center h-9 py-1 px-4 text-xs text-gray-400 font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200'
                          href='#'
                        >
                          Previous
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='inline-flex items-center h-9 py-1 px-4 text-xs text-blue-50 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200'
                          href='#'
                        >
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div>
            <nav className='lg:hidden flex items-center justify-between p-8 bg-gray-700 mb-3'>
              <div className='w-full xl:w-auto px-2 xl:mr-12'>
                <div className='flex items-center justify-between'>
                  <a className='inline-flex items-center h-8' href='#'>
                    <img src='trizzle-assets/logos/trizzle-logo.svg' alt='' />
                  </a>
                  <div className='xl:hidden'>
                    <button className='navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none'>
                      <svg
                        width={20}
                        height={12}
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Mobile menu</title>
                        <path
                          d='M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z'
                          fill='currentColor'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div className='hidden lg:block navbar-menu relative z-50'>
              <div className='lg:hidden navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50' />
              <nav className='fixed top-0 left-0 bottom-0 w-full max-w-xxs flex flex-col h-full py-8 px-4 bg-gray-700 overflow-auto'>
                <div className='mb-6'>
                  <a className='inline-block mb-12' href='index.html'>
                    <img
                      className='h-7 m-4'
                      src='images/SafeMate2-svg-1710082572716.webp'
                      alt=''
                    />
                  </a>
                  <ul className='mb-8'>
                    <li className='mb-4'>
                      <a
                        className='flex items-center p-4 rounded-xl'
                        href='admin-dashboard.html'
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H8C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM7 18H2V13H7V18ZM19 0H12C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9H19C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 7H13V2H18V7ZM19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM18 18H13V13H18V18ZM8 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0ZM7 7H2V2H7V7Z'
                            fill='currentColor'
                          />
                        </svg>
                        <span className='ml-4 text-sm font-semibold'>
                          Overview
                        </span>
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                        href='#'
                      >
                        <span className='text-gray-400'>
                          <svg
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16C10.2652 16 10.5196 15.8946 10.7071 15.7071C10.8946 15.5196 11 15.2652 11 15V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4ZM5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16C5.26522 16 5.51957 15.8946 5.70711 15.7071C5.89464 15.5196 6 15.2652 6 15V11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                        <span className='ml-4 text-sm font-semibold'>
                          Analytics
                        </span>
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='flex items-center p-4 hover:bg-gray-800 rounded-xl'
                        href='admin-clientes.html'
                      >
                        <span className='text-gray-400'>
                          <svg
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className=''
                          >
                            <path
                              d='M12.81 10.28C13.443 9.60024 13.7996 8.70877 13.81 7.78C13.81 6.77748 13.4118 5.81602 12.7029 5.10714C11.994 4.39825 11.0325 4 10.03 4C9.02748 4 8.06602 4.39825 7.35714 5.10714C6.64825 5.81602 6.25 6.77748 6.25 7.78C6.26044 8.70877 6.61702 9.60024 7.25 10.28C6.36865 10.7189 5.61022 11.3699 5.04292 12.1746C4.47561 12.9793 4.11723 13.9124 4 14.89C3.97083 15.1552 4.0482 15.4212 4.21511 15.6293C4.38202 15.8375 4.62478 15.9708 4.89 16C5.15522 16.0292 5.42116 15.9518 5.62932 15.7849C5.83749 15.618 5.97083 15.3752 6 15.11C6.11933 14.1411 6.58885 13.2494 7.32009 12.6027C8.05133 11.956 8.99382 11.599 9.97 11.599C10.9462 11.599 11.8887 11.956 12.6199 12.6027C13.3512 13.2494 13.8207 14.1411 13.94 15.11C13.9678 15.3664 14.0936 15.6022 14.2911 15.768C14.4887 15.9339 14.7426 16.017 15 16H15.11C15.3721 15.9698 15.6117 15.8373 15.7766 15.6313C15.9414 15.4252 16.0181 15.1624 15.99 14.9C15.8815 13.9276 15.5344 12.997 14.9796 12.191C14.4248 11.3851 13.6796 10.7286 12.81 10.28ZM10 9.56C9.64795 9.56 9.3038 9.4556 9.01108 9.26002C8.71836 9.06443 8.49022 8.78643 8.35549 8.46118C8.22077 8.13592 8.18552 7.77803 8.2542 7.43274C8.32288 7.08745 8.49241 6.77029 8.74135 6.52135C8.99029 6.27241 9.30745 6.10288 9.65274 6.0342C9.99803 5.96552 10.3559 6.00077 10.6812 6.13549C11.0064 6.27022 11.2844 6.49837 11.48 6.79109C11.6756 7.0838 11.78 7.42795 11.78 7.78C11.78 8.25208 11.5925 8.70484 11.2586 9.03865C10.9248 9.37247 10.4721 9.56 10 9.56ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V17Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                        <span className='ml-4 text-sm font-semibold'>
                          Clientes
                        </span>
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='flex items-center p-4 hover:bg-gray-800 rounded-xl'
                        href='admin-cadastros.html'
                      >
                        <span className='text-gray-400'>
                          <svg
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className=''
                          >
                            <path
                              d='M17 4.5H14V3.5C14 2.70435 13.6839 1.94129 13.1213 1.37868C12.5587 0.816071 11.7956 0.5 11 0.5H9C8.20435 0.5 7.44129 0.816071 6.87868 1.37868C6.31607 1.94129 6 2.70435 6 3.5V4.5H3C2.20435 4.5 1.44129 4.81607 0.87868 5.37868C0.316071 5.94129 0 6.70435 0 7.5V16.5C0 17.2956 0.316071 18.0587 0.87868 18.6213C1.44129 19.1839 2.20435 19.5 3 19.5H17C17.7956 19.5 18.5587 19.1839 19.1213 18.6213C19.6839 18.0587 20 17.2956 20 16.5V7.5C20 6.70435 19.6839 5.94129 19.1213 5.37868C18.5587 4.81607 17.7956 4.5 17 4.5ZM8 3.5C8 3.23478 8.10536 2.98043 8.29289 2.79289C8.48043 2.60536 8.73478 2.5 9 2.5H11C11.2652 2.5 11.5196 2.60536 11.7071 2.79289C11.8946 2.98043 12 3.23478 12 3.5V4.5H8V3.5ZM18 16.5C18 16.7652 17.8946 17.0196 17.7071 17.2071C17.5196 17.3946 17.2652 17.5 17 17.5H3C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V11C2.97544 11.3869 3.97818 11.7011 5 11.94V12.53C5 12.7952 5.10536 13.0496 5.29289 13.2371C5.48043 13.4246 5.73478 13.53 6 13.53C6.26522 13.53 6.51957 13.4246 6.70711 13.2371C6.89464 13.0496 7 12.7952 7 12.53V12.32C7.99435 12.4554 8.99649 12.5255 10 12.53C11.0035 12.5255 12.0057 12.4554 13 12.32V12.53C13 12.7952 13.1054 13.0496 13.2929 13.2371C13.4804 13.4246 13.7348 13.53 14 13.53C14.2652 13.53 14.5196 13.4246 14.7071 13.2371C14.8946 13.0496 15 12.7952 15 12.53V11.94C16.0218 11.7011 17.0246 11.3869 18 11V16.5ZM18 8.81C17.0274 9.22049 16.0244 9.55483 15 9.81V9.5C15 9.23478 14.8946 8.98043 14.7071 8.79289C14.5196 8.60536 14.2652 8.5 14 8.5C13.7348 8.5 13.4804 8.60536 13.2929 8.79289C13.1054 8.98043 13 9.23478 13 9.5V10.24C11.0113 10.54 8.98875 10.54 7 10.24V9.5C7 9.23478 6.89464 8.98043 6.70711 8.79289C6.51957 8.60536 6.26522 8.5 6 8.5C5.73478 8.5 5.48043 8.60536 5.29289 8.79289C5.10536 8.98043 5 9.23478 5 9.5V9.83C3.97562 9.57483 2.9726 9.24049 2 8.83V7.5C2 7.23478 2.10536 6.98043 2.29289 6.79289C2.48043 6.60536 2.73478 6.5 3 6.5H17C17.2652 6.5 17.5196 6.60536 17.7071 6.79289C17.8946 6.98043 18 7.23478 18 7.5V8.81Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                        <span className='ml-4 text-sm font-semibold'>
                          Cadastros
                        </span>
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='flex items-center p-4 rounded-xl items-center hover:bg-gray-800 text-white bg-blue-500'
                        href='admin-chamados.html'
                      >
                        <span className='text-gray-400'>
                          <svg
                            width={20}
                            height={21}
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 17C12.2653 17 12.5196 16.8947 12.7071 16.7071C12.8947 16.5196 13 16.2652 13 16V14C13 13.7348 12.8947 13.4805 12.7071 13.2929C12.5196 13.1054 12.2653 13 12 13C11.7348 13 11.4805 13.1054 11.2929 13.2929C11.1054 13.4805 11 13.7348 11 14V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4805 16.8947 11.7348 17 12 17ZM8.00004 17C8.26525 17 8.51961 16.8947 8.70714 16.7071C8.89468 16.5196 9.00004 16.2652 9.00004 16V14C9.00004 13.7348 8.89468 13.4805 8.70714 13.2929C8.51961 13.1054 8.26525 13 8.00004 13C7.73482 13 7.48047 13.1054 7.29293 13.2929C7.10539 13.4805 7.00004 13.7348 7.00004 14V16C7.00004 16.2652 7.10539 16.5196 7.29293 16.7071C7.48047 16.8947 7.73482 17 8.00004 17ZM17 5.00003H15.62L13.89 1.55003C13.8372 1.42308 13.7587 1.3084 13.6595 1.21316C13.5603 1.11791 13.4426 1.04414 13.3136 0.996469C13.1846 0.948794 13.0472 0.928235 12.9099 0.936075C12.7726 0.943915 12.6384 0.979987 12.5157 1.04204C12.3929 1.10408 12.2843 1.19078 12.1966 1.2967C12.1089 1.40261 12.044 1.52548 12.006 1.65762C11.9679 1.78976 11.9575 1.92833 11.9754 2.06467C11.9933 2.20102 12.0391 2.3322 12.11 2.45003L13.38 5.00003H6.62004L7.89004 2.45003C7.9871 2.21693 7.9924 1.95575 7.90486 1.71891C7.81732 1.48208 7.64343 1.28712 7.4181 1.17319C7.19277 1.05926 6.93268 1.03479 6.69005 1.10469C6.44742 1.17458 6.24022 1.33368 6.11004 1.55003L4.38004 5.00003H3.00004C2.29323 5.01078 1.61291 5.27077 1.07909 5.73416C0.545259 6.19755 0.192211 6.83455 0.0822073 7.53283C-0.0277959 8.23112 0.112313 8.94581 0.477823 9.55088C0.843332 10.1559 1.41076 10.6125 2.08004 10.84L2.82004 18.3C2.89466 19.0426 3.24338 19.7307 3.79811 20.2299C4.35284 20.7292 5.07374 21.0038 5.82004 21H14.2C14.9463 21.0038 15.6672 20.7292 16.222 20.2299C16.7767 19.7307 17.1254 19.0426 17.2 18.3L17.94 10.84C18.6108 10.6118 19.1791 10.1536 19.5443 9.54651C19.9096 8.93942 20.0482 8.22266 19.9356 7.52317C19.823 6.82368 19.4665 6.18661 18.9292 5.7248C18.3919 5.26299 17.7085 5.00624 17 5.00003ZM15.19 18.1C15.1652 18.3475 15.0489 18.5769 14.864 18.7433C14.6791 18.9098 14.4388 19.0013 14.19 19H5.81004C5.56127 19.0013 5.32097 18.9098 5.13606 18.7433C4.95115 18.5769 4.83491 18.3475 4.81004 18.1L4.10004 11H15.9L15.19 18.1ZM17 9.00003H3.00004C2.73482 9.00003 2.48047 8.89467 2.29293 8.70713C2.10539 8.5196 2.00004 8.26524 2.00004 8.00003C2.00004 7.73481 2.10539 7.48046 2.29293 7.29292C2.48047 7.10538 2.73482 7.00003 3.00004 7.00003H17C17.2653 7.00003 17.5196 7.10538 17.7071 7.29292C17.8947 7.48046 18 7.73481 18 8.00003C18 8.26524 17.8947 8.5196 17.7071 8.70713C17.5196 8.89467 17.2653 9.00003 17 9.00003Z'
                              fill='currentColor'
                              className='text-white'
                            />
                          </svg>
                        </span>
                        <span className='ml-4 mr-auto text-sm font-semibold'>
                          Chamados
                        </span>
                        <span className='flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-semibold rounded-full'>
                          4
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div>
                    <span className='block mb-8 text-xs font-semibold text-gray-400 uppercase'>
                      Teams
                    </span>
                    <ul>
                      <li>
                        <a
                          className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                          href='#'
                        >
                          <div className='w-2 h-2 mr-2 bg-blue-300 rounded-full' />
                          <span className='text-sm font-semibold'>
                            Front-End Team
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                          href='#'
                        >
                          <div className='w-2 h-2 mr-2 bg-green-400 rounded-full' />
                          <span className='text-sm font-semibold'>
                            Back-End Team
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                          href='#'
                        >
                          <div className='w-2 h-2 mr-2 bg-yellow-400 rounded-full' />
                          <span className='text-sm font-semibold'>Design</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                          href='#'
                        >
                          <div className='w-2 h-2 mr-2 bg-red-400 rounded-full' />
                          <span className='text-sm font-semibold text-gray-300'>
                            Marketing
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='mt-auto'>
                  <a
                    className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                    href='#'
                  >
                    <span className='text-gray-400'>
                      <svg
                        width={21}
                        height={22}
                        viewBox='0 0 21 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.90002C20.3209 8.74269 20.4085 8.54472 20.4301 8.33452C20.4516 8.12433 20.4061 7.9127 20.2999 7.73002L18.2999 4.27002C18.1948 4.08754 18.0348 3.94289 17.8426 3.8567C17.6505 3.77051 17.4361 3.74718 17.2299 3.79002L15.3499 4.17002C15.1107 4.21945 14.8616 4.17961 14.6498 4.05802C14.4379 3.93643 14.2779 3.7415 14.1999 3.51002L13.5899 1.68002C13.5228 1.4814 13.395 1.30888 13.2245 1.18686C13.0541 1.06484 12.8495 0.999476 12.6399 1.00002H8.6399C8.42183 0.988635 8.20603 1.04894 8.02546 1.17173C7.84489 1.29452 7.70948 1.47304 7.6399 1.68002L7.0799 3.51002C7.0019 3.7415 6.84187 3.93643 6.63001 4.05802C6.41815 4.17961 6.16911 4.21945 5.9299 4.17002L3.9999 3.79002C3.80445 3.7624 3.6052 3.79324 3.42724 3.87866C3.24929 3.96407 3.1006 4.10025 2.9999 4.27002L0.999896 7.73002C0.891056 7.91067 0.842118 8.1211 0.860079 8.33124C0.878039 8.54138 0.961979 8.74046 1.0999 8.90002L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4587 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2529 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0006 13.1241 20.9352 13.2945 20.8132C13.465 20.6912 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2529 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1819 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1619 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54004 3.8699 8.99002L3.0699 8.09002L4.3499 5.89002L5.5299 6.13002C6.25012 6.27724 6.99932 6.1549 7.6353 5.78622C8.27128 5.41753 8.74975 4.82818 8.9799 4.13002L9.3599 3.00002H11.9199L12.2999 4.14002C12.53 4.83818 13.0085 5.42753 13.6445 5.79622C14.2805 6.1649 15.0297 6.28724 15.7499 6.14002L16.9299 5.90002L18.2099 8.12002L17.4099 9.02002C16.9235 9.56878 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4513 17.4099 13ZM10.6399 7.00002C9.84877 7.00002 9.07541 7.23461 8.41761 7.67414C7.75982 8.11366 7.24713 8.73838 6.94438 9.46928C6.64163 10.2002 6.56241 11.0045 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3879 9.08361 14.7688 9.85954 14.9232C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93915 14.2185 8.92174 13.4683 8.17159C12.7182 7.42144 11.7008 7.00002 10.6399 7.00002ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.663C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86551 9.22568 9.5858C9.50539 9.3061 9.86175 9.11562 10.2497 9.03845C10.6377 8.96128 11.0398 9.00088 11.4053 9.15226C11.7707 9.30363 12.0831 9.55998 12.3028 9.88888C12.5226 10.2178 12.6399 10.6045 12.6399 11C12.6399 11.5304 12.4292 12.0392 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    <span className='ml-4 text-sm font-semibold'>
                      Configurações
                    </span>
                  </a>
                  <a
                    className='flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl'
                    href='#'
                  >
                    <span className='text-gray-400'>
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.59 11L8.29 13.29C8.19627 13.383 8.12188 13.4936 8.07111 13.6154C8.02034 13.7373 7.9942 13.868 7.9942 14C7.9942 14.132 8.02034 14.2627 8.07111 14.3846C8.12188 14.5064 8.19627 14.617 8.29 14.71C8.38296 14.8037 8.49356 14.8781 8.61542 14.9289C8.73728 14.9797 8.86799 15.0058 9 15.0058C9.13201 15.0058 9.26272 14.9797 9.38458 14.9289C9.50644 14.8781 9.61704 14.8037 9.71 14.71L13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86347 13.92 9.62001C13.8724 9.49726 13.801 9.38511 13.71 9.29001L9.71 5.29001C9.61676 5.19677 9.50607 5.12281 9.38425 5.07235C9.26243 5.02189 9.13186 4.99592 9 4.99592C8.86814 4.99592 8.73757 5.02189 8.61575 5.07235C8.49393 5.12281 8.38324 5.19677 8.29 5.29001C8.19676 5.38325 8.1228 5.49394 8.07234 5.61576C8.02188 5.73758 7.99591 5.86815 7.99591 6.00001C7.99591 6.13187 8.02188 6.26244 8.07234 6.38426C8.1228 6.50608 8.19676 6.61677 8.29 6.71001L10.59 9.00001H1C0.734784 9.00001 0.48043 9.10537 0.292893 9.2929C0.105357 9.48044 0 9.73479 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8947 0.734784 11 1 11H10.59ZM10 8.14093e-06C8.13109 -0.00833565 6.29724 0.507221 4.70647 1.4882C3.11569 2.46918 1.83165 3.87632 1 5.55001C0.880653 5.7887 0.861015 6.06503 0.945406 6.31821C1.0298 6.57138 1.21131 6.78066 1.45 6.90001C1.68869 7.01936 1.96502 7.03899 2.2182 6.9546C2.47137 6.87021 2.68065 6.6887 2.8 6.45001C3.43219 5.17333 4.39383 4.08863 5.58555 3.308C6.77727 2.52736 8.15582 2.07913 9.57876 2.0096C11.0017 1.94007 12.4174 2.25178 13.6795 2.91252C14.9417 3.57325 16.0045 4.55904 16.7581 5.768C17.5118 6.97697 17.9289 8.36526 17.9664 9.78939C18.0039 11.2135 17.6605 12.6219 16.9715 13.8688C16.2826 15.1158 15.2731 16.1562 14.0475 16.8824C12.8219 17.6087 11.4246 17.9945 10 18C8.50888 18.0065 7.04615 17.5924 5.77969 16.8053C4.51323 16.0181 3.49435 14.8899 2.84 13.55C2.72065 13.3113 2.51137 13.1298 2.2582 13.0454C2.00502 12.961 1.72869 12.9807 1.49 13.1C1.25131 13.2194 1.0698 13.4286 0.985406 13.6818C0.901015 13.935 0.920653 14.2113 1.04 14.45C1.83283 16.0455 3.03752 17.4002 4.52947 18.3741C6.02142 19.3479 7.74645 19.9054 9.52612 19.989C11.3058 20.0726 13.0755 19.6792 14.6521 18.8495C16.2288 18.0198 17.5552 16.784 18.4941 15.2698C19.433 13.7557 19.9503 12.0181 19.9925 10.237C20.0347 8.45588 19.6003 6.6958 18.7342 5.13884C17.8682 3.58188 16.6018 2.28457 15.0663 1.38111C13.5307 0.477653 11.7816 0.000844593 10 8.14093e-06Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    <span className='ml-4 text-sm font-semibold'>Sair</span>
                  </a>
                </div>
              </nav>
            </div>
            <div className='mx-auto lg:ml-80' />
          </div>
        </div>
      </>
    </React.Fragment>
  );
}

