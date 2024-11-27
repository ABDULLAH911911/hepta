import React from "react";
import { useEffect, useRef } from "react";  
import background from "../assets/hero_1.jpeg";
import secondpic from "../assets/img_1_long.jpeg";
import lemonade from "../assets/lemonade.webp";
import man1 from "../assets/man1.webp";
import girl from "../assets/girl.webp";
import girl2 from "../assets/girl2.webp";
import breakfast from "../assets/001-breakfast.svg";
import travel from "../assets/002-planet-earth.svg";
import airplane from "../assets/003-airplane.svg";
import beach from "../assets/004-beach.svg";
import hot_air_ballon from "../assets/006-hot-air-balloon.svg";
import mountain from "../assets/005-mountains.svg";
import sofa from "../assets/sofa.webp";
import profile from "../assets/profile.webp";
import profile2 from "../assets/profile2.webp";
import profile3 from "../assets/profile3.webp";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

function Home() {
    const galleryRef = useRef(null);
    const imagesRef = useRef([]);
    const prevArrowRef = useRef(null);
    const nextArrowRef = useRef(null);
    let currentImageIndex = 0;

    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
      // Define the function to toggle the menu
      const toggleMenu = () => {
        if (menuRef.current) {
          menuRef.current.classList.toggle("visible");
        }
      };
  
      const hamburger = hamburgerRef.current;
      const menu = menuRef.current;
  
      if (hamburger && menu) {
        hamburger.addEventListener("click", toggleMenu);
        menu.classList.toggle('hidden');
        menu.classList.toggle('scale-0');
        menu.classList.toggle('opacity-0');
      }
  
      // Cleanup the event listener on unmount
      return () => {
        if (hamburger) {
          hamburger.removeEventListener("click", toggleMenu);
          menu.classList.toggle('hidden');
          menu.classList.toggle('scale-0');
          menu.classList.toggle('opacity-0');
        }
      };
    }, []);
  
    useEffect(() => {
      const gallery = galleryRef.current;
      const images = gallery.querySelectorAll('img');
      const prevArrow = prevArrowRef.current;
      const nextArrow = nextArrowRef.current;
  
      imagesRef.current = images;
      prevArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
      });
  
      nextArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
      });
  
      function updateImage() {
        images.forEach((image, index) => {
          image.classList.toggle('hidden', index !== currentImageIndex);
        });
      }
  
      images[0].classList.remove('hidden');
    }, []);
    return (
        <div>
          
            {/* Hero Section */}
            <div
                className="relative h-screen bg-cover bg-center "
                style={{
                    backgroundImage: `url('${background}')`,
                    filter: "brightness(100%)",
                }}
            >   
         <div>
            {/* Hamburger Icon */}
              <button
                ref={hamburgerRef}
                className="fixed top-8 right-10 w-8 h-8 bg-transparent border-none cursor-pointer z-50"
                onClick={() => menuRef.current.classList.toggle('hidden')} // Toggle the visibility of the menu
              >
                <span className="block w-10 h-0.5 bg-gray-600 mb-2"></span>
                <span className="block w-10 h-0.5 bg-gray-600 mb-2"></span>
                <span className="block w-10 h-0.5 bg-gray-600 mb-2"></span>
              </button>
              {/* logo */}
          <div className="absolute top-6 left-4 font-hepta text-2xl">
            HEPTA
          </div>

              {/* Fullscreen Menu hamburger */}
              <div
                ref={menuRef}
                className=" fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center hidden z-50"
              >
                <div className="absolute top-4 right-4">
                  {/* Close Button (X) */}
                  <button
                    className="text-black font-hepta text-8xl pr-4 " 
                    onClick={() => menuRef.current.classList.add('hidden')}
                  >
                    &times; {/* This is the cross (X) symbol */}
                  </button>
                </div>


                <ul className="flex flex-col items-center justify-center h-screen">
                  
                  <li className="mb-4">
                    <Link to="/hotels" className="font-hepta text-4xl hover:text-teal-300 hover:text-3xl transition-all duration-300">
                      Hotels
                    </Link>
                  </li>
                
                  <li className="mb-4">
                    <Link to="/about-us" className="font-hepta text-4xl hover:text-teal-300 hover:text-3xl transition-all duration-300">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                  <Link to="/gallery" className="font-hepta text-4xl hover:text-teal-300 hover:text-3xl transition-all duration-300">Gallery</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/news" className="font-hepta text-4xl hover:text-teal-300 hover:text-3xl transition-all duration-300">News</Link>
                  </li>
                  <li className="mb-4">
                  <Link to="/contact" className="font-hepta text-4xl hover:text-teal-300 hover:text-3xl transition-all duration-300">Contact</Link>
                  </li>
                </ul>


              </div>


          </div>

                {/* Content */}
                
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className=" font-hepta text-gray-600 text-8xl font-bold leading-tight glow">
                        Travel & Tours
                    </h1>
                    <p className="text-gray-800 text-2xl mt-4 font-hepta">
                        A free template by Colorlib. Download and share!
                    </p>
                    <button className="font-hepta mt-8 px-8 py-3 bg-white text-grey-600 font-bold rounded-lg  hover:bg-transparent ">
                        Visit Colorlib
                    </button>
                </div>
            </div>

            {/* Second Background Image Section */}
            {/* pt means padding top , flex default is horizontal while we can use flex flex-col to */}
            <div className="flex pt-12 bg-white-200">
              <div className="relative w-1/2 h-screen bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${secondpic}')`,
                  backgroundSize: 'contain',
                }}
              >
              </div>
              {/* By adding flex-1 to the container, we're telling it to take up the full height and width of the parent container. Then, by using flex, justify-center, and items-center classes, we're centering the content both horizontally and vertically.w-1/2 means 1/2 width 50% of the screen */}
              <div className="w-1/2 flex-1 flex justify-center items-center">
                {/* Additional Content can go here */}
                <div className="text-center">
                  <h2 className="font-hepta text-3xl font-bold">Welcome To Our Website</h2>
                  <p className="font-hepta pt-14 text-gray-600 text-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p className="text-gray-600 font-hepta text-left">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <a href="https://www.youtube.com/watch?v=CHSnz0bCaUk" target="_blank" rel="noopener noreferrer">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-8 rounded">
                    Watch The Video
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* third section cards */}
            <div className=" pt-12 bg-grey-200  ">
                <div className="text-center">
                    {/* Additional Content can go here */}
                    <h3 className="text-3xl pt-14 font-bold">Experience Once In Your Life</h3>
                    <p className="font-hepta  text-gray-600 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                    <p className="font-hepta  text-gray-600 ">there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the,</p>
                    <p className="font-hepta  text-gray-600 ">Semantics, a large language ocean.</p>
                </div>
                {/* cards */}
                <div className="bg-grey-200"> 
                    <div className="flex mt-20" >
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={breakfast} alt="Breakfast " className="w-[30%] h-[20vh] " />
                            <h3 className="text-2xl font-bold">Good Foods</h3>
                            <p className="font-hepta text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                        </div>
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={travel} alt="Travel" className="w-[30%] h-[20vh]" />
                            <h3 className="text-2xl font-bold">Travel Anywhere</h3>
                            <p className="font-hepta text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={airplane} alt="Airplane" className="w-[30%] h-[20vh]" />
                            <h3 className="text-2xl font-bold">Airplane</h3>
                            <p className="font-hepta text-center text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="flex mt-20 mb-40 ml-10">
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={beach} alt="Beach" className="w-[30%] h-[20vh]" />
                            <h3 className="text-2xl font-bold">Beach Resort</h3>
                            <p className="font-hepta text-center text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={hot_air_ballon} alt="Hot Air Ballon" className="w-[30%] h-[20vh]" />
                            <h3 className="text-2xl font-bold">Hot Air Ballon</h3>
                            <p className="font-hepta text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                        <div className="flex flex-col ml-32 items-center mr-32">
                            <img src={mountain} alt="Mountain" className="w-[30%] h-[20vh]" />
                            <h3 className="text-2xl font-bold">Mountain Climbing</h3>
                            <p className="font-hepta text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                {/* cards end */}
            </div>
            {/* fourth section start */}
            <div className="flex flex-col pt-12 bg-gradient-to-t from-teal-300 items-center">
              <h1 className="text-6xl font-bold font-hepta text-center">
                International Tour <br /> Management
              </h1>
              <p className="font-hepta pt-12 text-gray-600 text-center">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,<br /> there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              {/* photo div */}
              <div ref={galleryRef} class="gallery relative w-4/5 h-screen mx-auto">
                <img src={lemonade} alt="lemonade" class="absolute top-10 left-0 w-full h-full object-cover hidden"/>
                
                <img src={girl2} alt="girl1" class="absolute top-10 left-0 w-full h-full object-cover hidden"/>
                
                <img src={girl} alt="girl" class="absolute top-10 left-0 w-full h-full object-cover hidden"/>
                
                <img src={man1} alt="man1" class="absolute top-10 left-0 w-full h-full object-cover hidden"/>
                
                <div class="nav-arrows absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
                  <button ref={prevArrowRef} class="prev-arrow text-6xl text-grey-300 cursor-pointer absolute top-1/2 transform -translate-y-1/2 -left-12 z-10">&lt;</button>
                  <button ref={nextArrowRef} class="next-arrow text-6xl text-grey-300 cursor-pointer absolute top-1/2 transform -translate-y-1/2 -right-12 z-10">&gt;</button>
                </div>
              </div>
              {/* photo div end */}
            </div>
            {/* fourth section end */}
            <div className="flex flex-col pt-12 bg-teal-300 items-center">
                <h2 className="font-hepta pt-12 text-6xl font-bold text-black-600 text-center">Recent Blog Posts</h2>
                <p className="font-hepta  text-gray-600 pt-12">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                <p className="font-hepta  text-gray-600 ">there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the,</p>
                <p className="font-hepta  text-gray-600 ">Semantics, a large language ocean.</p>
                {/* cards start */}

                <div className="flex mt-20 mb-40 ml-10 bg-teal-300">
                    <div className="flex flex-col ml-32 items-center mr-10 bg-white">
                        <img src={lemonade} alt="lemonade" className="w-[160vh] h-[50vh]" />
                        <div className="flex items-start mr-32">
                          <h1 className="text-1xl font-hepta pt-10 mr-32 ml-5  text-grey-600">NOVEMBER 23, 2024</h1>
                        </div>
                        <h3 className="text-2xl pt-5 mr-48 ml-1 font-bold ">45 Best places To<br /> Unwind</h3>
                        <p className="font-hepta pt-5 pb-5 text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="flex flex-col ml-2  items-center mr-2 bg-white">
                        <img src={man1} alt="man" className="w-[160vh] h-[50vh]" />
                        <div className="flex items-start mr-32">
                          <h1 className="text-1xl font-hepta pt-10 mr-32 ml-5  text-grey-600">NOVEMBER 23, 2024</h1>
                        </div>
                        <h3 className="text-2xl pt-5 mr-48 ml-1 font-bold">45 Best places To<br /> Unwind</h3>
                        <p className="font-hepta pt-5 pb-5 text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="flex flex-col ml-10 items-center mr-32 bg-white">
                        <img src={sofa} alt="sofa" className="w-[160vh] h-[50vh]" />
                        <div className="flex items-start mr-32">
                          <h1 className="text-1xl font-hepta pt-10 mr-32 ml-5  text-grey-600">NOVEMBER 23, 2024</h1>
                        </div>
                        <h3 className="text-2xl pt-5 mr-48 ml-1 font-bold">45 Best places To<br /> Unwind</h3>
                        <p className="font-hepta pt-5 pb-5 text-center  text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                </div>
                {/* cards end */}
            </div>
            {/*fourth section end */}
            <div className="flex flex-col pt-12 items-center">
              <h1 className="font-hepta pt-12 pb-12 text-6xl font-bold text-black-600 text-center">Happy Customers</h1>
              <div className="flex items-center"> 

                  <div className="flex flex-col ml-32 items-center mr-32">
                    <img src={profile} alt="profile" className="w-[35%] h-[13vh] rounded-full" />
                    <p className="font-hepta pt-10 text-balance text-gray-600 italic"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                    <h1 className="font-hepta pt-12 pb-32 pr-28 text-1xl font-bold text-black-600 italic">-Clarie Gupta</h1>
                  </div>
                  <div className="flex flex-col ml-32 items-center mr-32">
                    <img src={profile2} alt="profile2" className="w-[35%] h-[13vh] rounded-full" />
                    <p className="font-hepta pt-10 text-balance text-gray-600 italic"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                    <h1 className="font-hepta pt-12 pb-32 pr-28 text-1xl font-bold text-black-600 italic">-Rogie Slater</h1>
                  </div>
                  <div className="flex flex-col ml-32 items-center mr-32">
                    <img src={profile3} alt="profile3" className="w-[35%] h-[13vh] rounded-full" />
                    <p className="font-hepta pt-10 text-balance text-gray-600 italic"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                    <h1 className="font-hepta pt-12 pb-32 pr-28 text-1xl font-bold text-black-600 italic ">-John Doe</h1>
                  </div>
              </div>
            </div>
            {/* fourth section end */}
            <div className="flex flex-col pb-24 pt-12 items-center bg-gray-100">
                <div>
                    <h1 className="font-hepta pt-12 pb-12 text-6xl font-bold text-black-600 text-center">Top Destination</h1>
                    <p className="font-hepta pt-12 pb-12 text-1xl text-gray-600 text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque<br /> quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro,<br /> culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
                </div>
                <div>
                    <div className="flex items-center"> 
                        <div className="flex flex-col ml-32 items-center mr-10">
                            <img src={lemonade} alt="lemonade" className="w-[120%] h-[30vh] " />
                            <h1 className="font-hepta pt-5 pb-1 pr-28 text-1xl font-bold text-black-600">Food & Wines</h1>
                            <div class="flex items-center">
                              <span class="text-yellow-400 text-3xl">
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                              </span>
                              <span class="text-gray-600 text-lg ml-2">
                                4211 reviews
                              </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-10 items-center mr-10">
                            <img src={man1} alt="lemonade2" className="w-[120%] h-[30vh] " />
                            <h1 className="font-hepta pt-5 pb-1 pr-28 text-1xl font-bold text-black-600">Resorts & Spa</h1>
                            <div class="flex items-center">
                               <span class="text-yellow-400 text-3xl">
                                 &#9733;&#9733;&#9733;&#9733;&#9734;
                                </span>
                                <span class="text-gray-600 text-lg ml-2">
                                 4200 reviews
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-10 items-center mr-10">
                            <img src={sofa} alt="lemonade3" className="w-[120%] h-[30vh] " />
                            <h1 className="font-hepta pt-5 pb-1 pr-28 text-1xl font-bold text-black-600">Hotel Rooms</h1>
                            <div class="flex items-center">
                               <span class="text-yellow-400 text-3xl">
                                 &#9733;&#9733;&#9733;&#9733;&#9734;
                                </span>
                                <span class="text-gray-600 text-lg ml-2">
                                 3275 reviews
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-10 items-center mr-32">
                            <img src={girl} alt="lemonade3" className="w-[120%] h-[30vh] " />
                            <h1 className="font-hepta pt-5 pb-1 pr-12 text-1xl font-bold text-black-600 text-balance">Mountain & Climbing</h1>
                            <div class="flex items-center">
                               <span class="text-yellow-400 text-3xl">
                                 &#9733;&#9733;&#9733;&#9733;&#9733;
                                </span>
                                <span class="text-gray-600 text-lg ml-2">
                                 3955 reviews
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fifth section end */}
            {/* footer section start */}
            <div className="flex pt-2 pb-20 items-center bg-cyan-900 bg-opacity-55">

                <div className="flex flex-col items-left pl-60">
                    <h1 className="font-hepta pt-20 pb-10 text-2xl font-bold text-black">Quick Link</h1>
                    <a className="font-hepta pt-2" href="#" onclick="alert('Clicked!')">About Us</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Help</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Privacy Policy</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Terms & Conditions</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Rooms</a>

                </div>
                <div className="flex flex-col items-left pl-40">

                    <h1 className="font-hepta pt-20 pb-10  text-2xl font-bold text-black">Support</h1>
                    <a className="font-hepta pt-2" href="#" onclick="alert('Clicked!')">Our Location</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">The Hosts</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">About</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Contact</a>
                    <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">Restaurants</a>

                </div>
                <div className="flex flex-col items-left pl-40">

                   <h1 className="font-hepta pt-36 pb-10  text-2xl font-bold text-black">Contact Info</h1>
                   <a className="font-hepta italic pt-1" href="#" onclick="alert('Clicked!')">Address</a>
                   <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">123 Street, New York, NY 10013</a>
                   <a className="font-hepta italic pt-8" href="#" onclick="alert('Clicked!')">Phone</a>
                   <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">+92 336-6992123</a>
                   <a className="font-hepta italic pt-8" href="#" onclick="alert('Clicked!')">Email</a>
                   <a className="font-hepta pt-8" href="#" onclick="alert('Clicked!')">info@yourdomain.com</a>

                </div>
                <div className="flex flex-col items-left pl-36 pr-8  ">

                   <h1 className="font-hepta pt-80 pb-5  text-2xl font-bold text-black">Subscribe</h1>
                   <a className="font-hepta pb-5" href="#" onclick="alert('Clicked!')">Signup for our newsletter</a>
                   <div class="flex items-center pt-4 pb-96">
                     <input type="email" class="bg-transparent border border-gray-300 rounded-md px-4 py-2 placeholder:text-white"  placeholder="Enter your email" />
                     <button class="ml-2 bg-cyan-900 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-md">
                        <span class="ml-2">&#8594;</span>
                     </button>
                   </div>

                </div> 
            </div>
            <div className="flex flex-col items-center pb-32 pt-20  bg-cyan-900 bg-opacity-55">
                <h1 className="text-black pt-20">_______________________________________________________________________________________________________________</h1>
                <h2 className="pt-5 text-black font-hepta">Copyright © 2024 All rights reserved | This Template is made by Abdullah Azhar</h2>
            </div>
            {/* footer section end */}

        </div>
    );
}

export default Home;
