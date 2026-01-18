import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
   return (
      <>
         <footer className="bg-[#03624c] w-full h-full py-5">
            <h1 className="text-center pt-4 text-2xl text-white font-extrabold capitalize">main partners</h1>
            <ul className="grid grid-cols-3 lg:justify-self-center lg:gap-10">
               <li className="">
                  <img src="https://images.seeklogo.com/logo-png/55/2/marsa-maroc-logo-png_seeklogo-550043.png" alt="" />
               </li>
               <li className="">
                  <img src="https://images.seeklogo.com/logo-png/61/2/changan-logo-png_seeklogo-613940.png" alt="" />
               </li>
               <li className="">
                  <img src="https://images.seeklogo.com/logo-png/3/2/coca-cola-logo-png_seeklogo-32862.png" alt="mn akbar W9" />
               </li>
            </ul>

            <hr className="w-full h-full text-white" />

            <div className="w-30 h-30 flex justify-self-center">
               <img className="w-full h-full" src="https://images.seeklogo.com/logo-png/25/2/raja-club-athletic-rca-logo-png_seeklogo-256064.png" alt="" />
            </div>
            <h1 className="text-center mt-3 text-white font-extrabold">Follow Raja CA on social media</h1>
            
            <ul className="grid grid-cols-5 justify-self-center mt-5 gap-5">
               <li>
                  <a href="https://www.instagram.com/rcaofficiel/">
                     <button role="link"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl lg:text-3xl" />
                     </button>
                  </a>
               </li>
               <li>
                  <a href="https://www.facebook.com/RajaClubAthleticOfficiel/?locale=ar_AR">
                     <button role="link"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        <FontAwesomeIcon icon={faSquareFacebook} className="text-white text-2xl lg:text-3xl" />
                     </button>
                  </a>
               </li>
               <li>
                  <a href="https://www.youtube.com/@RajaClubAthleticOfficiel">
                     <button role="link"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl lg:text-3xl" />
                     </button>
                  </a>
               </li>
               <li>
                  <a href="https://x.com/RCAofficiel">
                     <button role="link"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl lg:text-3xl" />
                     </button>
                  </a>
               </li>
               <li>
                  <a href="https://www.tiktok.com/@rcaofficiel?lang=ar">
                     <button role="link"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
                        <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl lg:text-3xl" />
                     </button>
                  </a>
               </li>
            </ul>

               <p className="text-center text-gray-400 mt-3 text-sm">&copy; 2026 Raja Club Athletic. All rights reserved.</p>
         </footer>
      </>
   )
}