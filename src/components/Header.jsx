import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingCart, User } from 'lucide-react';
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navLinks = [
      { name: 'HOME', href: '#' },
      {
         name: 'TEAM',
         href: '#team',
         dropdown: ['First Team', 'Legends']
      },
      {
         name: 'MATCHES',
         href: '#matches',
         dropdown: ['Fixtures', 'League Table', 'Statistics']
      },
      {
         name: 'NEWS',
         href: '#news',
         dropdown: ['Latest News', 'Interviews']
      },
      {
         name: 'TICKETS',
         href: '#tickets',
         dropdown: ['Buy Tickets', 'Hospitality', 'Away Tickets']
      },
      { name: 'SHOP', href: '#shop' },
      { name: 'CLUB', href: '#club' },
   ];

   return (
      <div className="min-h-screen bg-gray-100">
         <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#03624c] shadow-lg' : 'bg-[#03624c] shadow-md'
               }`}
         >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
               <div className="flex justify-between items-center h-20 lg:h-30">
                  <div className="flex items-center flex-shrink-0">
                     <img className='w-15 h-15 sm:w-30 sm:h-30 sm:mt-10 lg:w-40 lg:h-40 lg:mt-10 z-100 lg:-ml-10' src="https://images.seeklogo.com/logo-png/25/2/raja-club-athletic-rca-logo-png_seeklogo-256064.png" alt="" /><span className='text-white font-bold text-2xl lg:text-3xl'>RAJA CA</span>
                  </div>

                  <div className="hidden lg:flex items-center space-x-1">
                     {navLinks.map((link, idx) => (
                        <div
                           key={idx}
                           className="relative group"
                           onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                           onMouseLeave={() => setActiveDropdown(null)}
                        >
                           <a
                              href={link.href}
                              className="px-4 py-2 text-sm font-bold text-white hover:text-green-200 transition flex items-center"
                           >
                              {link.name}
                              {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                           </a>

                           {link.dropdown && activeDropdown === link.name && (
                              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg py-2 mt-1">
                                 {link.dropdown.map((item, i) => (
                                    <a
                                       key={i}
                                       href="#"
                                       className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-200 transition"
                                    >
                                       {item}
                                    </a>
                                 ))}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>

                  <div className="flex items-center space-x-4">
                     <button className="hidden md:block p-2 text-white hover:text-green-200 transition">
                        <User size={20} />
                     </button>

                     <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     >
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={25} />}
                     </button>
                  </div>
               </div>
            </div>

            <div
               className={`lg:hidden  overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
                  }`}
            >
               <div className="px-4 pt-4 pb-6 text-white border-t space-y-2">
                  {navLinks.map((link, idx) => (
                     <div key={idx}>
                        <a
                           href={link.href}
                           className="flex items-center justify-between py-3 text-white font-bold hover:text-green-200 transition"
                           onClick={() => {
                              if (link.dropdown) {
                                 setActiveDropdown(activeDropdown === link.name ? null : link.name);
                              }
                           }}
                        >
                           {link.name}
                           {link.dropdown && (
                              <ChevronDown
                                 size={20}
                                 className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''
                                    }`}
                              />
                           )}
                        </a>

                        {link.dropdown && activeDropdown === link.name && (
                           <div className="pl-4 space-y-2 pb-2">
                              {link.dropdown.map((item, i) => (
                                 <a
                                    key={i}
                                    href="#"
                                    className="block py-2 text-sm text-white hover:text-green-200 transition"
                                 >
                                    {item}
                                 </a>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}

                  <div className="pt-4 border-t flex space-x-4">
                     <button className="flex-1 py-3 px-4 bg-gray-100 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-200 transition flex items-center justify-center">
                        <Search size={20} className="mr-2" />
                        Search
                     </button>
                     <button className="flex-1 py-3 px-4 bg-gray-100 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-200 transition flex items-center justify-center">
                        <User size={20} className="mr-2" />
                        Account
                     </button>
                  </div>
               </div>
            </div>
         </nav>
         <div className='bg-[#03624c] -z-100 w-full h-fit md:hidden lg:hidden'>
            <form class="max-w-md mx-auto py-2">
               <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg class="w-4 h-4 text-body text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                  </div>
                  <input type="search" id="search" class="block w-full text-white  border-white rounded-full p-3 ps-9 bg-transparent border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" requigreen />
                  <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
               </div>
            </form>
            <ul className='flex justify-around py-5'>
               <li><h1 className='text-center text-white text-3xl'><FontAwesomeIcon icon={faTv} /></h1><h1 className='text-white pt-2 font-bold'>RAJA TV</h1></li>
               <li><h1 className='text-center text-white text-3xl'><FontAwesomeIcon icon={faStore} /></h1><h1 className='text-white pt-2 font-bold'>Store</h1></li>
               <li><h1 className='text-center text-white text-3xl'><FontAwesomeIcon icon={faTicket} /></h1><h1 className='text-white pt-2 font-bold'>Tickets</h1></li>
               <li><h1 className='text-center text-white text-3xl'><FontAwesomeIcon icon={faCircleUser} /></h1><h1 className='text-white pt-2 font-bold'>myRAJA.CA</h1></li>
            </ul>
         </div>
      </div>
   );
}