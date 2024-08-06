import React from 'react';
import './App.css';
import './assets/style.css'; 
import './js/script.js';
 // Assuming you want to import your custom CSS

// Import local assets
import logo from './assets/logo.svg';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <header className="bg-gray-900 text-white py-2">
        <nav className="container relative mx-auto p-2">
          <div className="flex items-center justify-between px-6 md:px-12 py-4">
            {/* Logo */}
            <div>
              <img src={logo} alt="Nafsi Groove FM Logo" id="logo" className="h-16 md:h-20 w-auto" />
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-6 uppercase text-gray-600 font-bold">
              <a href="#shows" className="hover:text-softRed">Shows</a>
              <a href="#schedule" className="hover:text-softRed">Schedule</a>
              <a href="#blog" className="hover:text-softRed">Archives</a>
              <a href="#presenters" className="hover:text-softRed">Blog</a>
              <a href="#events" className="hover:text-softRed">Events</a>
              <a href="#about-us" className="hover:text-softRed">About</a>
              <a href="#contact" className="px-4 py-2 bg-softRed text-white rounded-lg shadow-md hover:bg-white hover:text-softRed">
                Contact
              </a>
              <a href="#" className="px-6 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">
                Login
              </a>
            </div>

            {/* Hamburger Button */}
            <button id="menu-btn" className="block md:hidden focus:outline-none">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="menu" className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-gray-900">
            <div className="w-full py-3 text-center">
              <a href="#shows" className="tracking-widest hover:text-softRed">Shows</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#schedule" className="tracking-widest hover:text-softRed">Schedule</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#blog" className="tracking-widest hover:text-softRed">Archives</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#blog" className="tracking-widest hover:text-softRed">Blog</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#events" className="tracking-widest hover:text-softRed">Events</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#about-us" className="tracking-widest hover:text-softRed">About</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#contact" className="tracking-widest hover:text-softRed">Contact</a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="#" className="tracking-widest hover:text-softRed">Login</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/*Hero Section --*/}
        <section id="hero">
            <div class="container flex flex-col-reverse mx-auto mt-6 p-6 lg:flex-row lg:mb-0">
                  {/*Content--*/}
                <div class="flex flex-col space-y-10 lg:mt-10 lg:w-1/2">
                    <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
                        Welcome To Nafsi Groove FM
                    </h1>
                    <p
                        class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                        Your ultimate destination for great music, conversations & latest news.
                    </p>

                      {/*Buttons Container --*/}
                    <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
                        <a href="#" class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md 
                            border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                            Live Stream
                        </a>
                        <a href="#" class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md 
                            border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">
                            Download Our Music Player
                        </a>
                    </div>
                </div>

                  {/*Image --*/}
                <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
                    <div class="bg-hero"></div>
                    <img src="images/nafsi-hero-2 (1).svg" alt="Nafsi Groove FM Hero"
                        class="relative z-10 lg:top-16 xl:top-0 overflow-x-visible" />
                </div>
            </div>
        </section>

          {/*Features Heading --*/}
        <section id="features">
            <div class="container mx-auto mt-32 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">Features</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Our aim is to provide you with an unparalleled audio experience with the following features:
                </p>
            </div>
        </section>

          {/*Features Tabs --*/}
        <section id="tabs">
            {/*Tabs Panels Container --*/}
            <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
                <div class="bg-tabs"></div>
                   {/*Tabs Flex Container --*/}
                <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
                       {/*-- Tab 1 --*/}
                    <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b 
                            md:border-b-0 hover:text-softRed w-1/4 tab" data-target="panel-1">
                        <div class="py-5 border-b-4 border-softRed" data-target="panel-1">Interactive Player</div>
                    </div>

                     {/*-- Tab 2 --*/}
                    <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b 
                            md:border-b-0 hover:text-softRed w-1/4 tab" data-target="panel-2">
                        <div class="py-5" data-target="panel-2">Archives Access</div>
                    </div>

                    {/*-- Tab 3 --*/}
                    <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b 
                            md:border-b-0 hover:text-softRed w-1/4 tab" data-target="panel-3">
                        <div class="py-5" data-target="panel-3">Community Engagement</div>
                    </div>

                     {/*-- Tab 4 --*/}
                    <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b 
                            md:border-b-0 hover:text-softRed w-1/4 tab" data-target="panel-4">
                        <div class="py-5" data-target="panel-4">Personalization Options</div>
                    </div>
                </div>

                 {/*Tabs Panels --*/}
                <div id="panels" class="container mx-auto">
                     {/* Panel 1 --*/}
                    <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                       {/* Panel Image --*/}
                        <div class="flex justify-center md:w-1/2">
                            <img src="images/illustration-features-tab-1.svg" alt="Interactive Player"
                                class="relative z-10" />
                        </div>
                         {/*-- Panels Content --*/}
                        <div class="flex flex-col space-y-8 md:w-1/2">
                            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Interactive Player
                            </h3>
                            <p class="max-w-md text-center text-grayishBlue md:text-left">
                                Enhance your listening experience with interactive controls and personalized playlists.
                                Enjoy seamless
                                playback and dynamic audio visualizations.
                            </p>
                            <div class="mx-auto md:mx-0">
                                <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white 
                                        rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue 
                                        hover:border-softBlue hover:border-2">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Panel 2 --*/}
                    <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2">
                           {/* Panel Image --*/}
                        <div class="flex justify-center md:w-1/2">
                            <img src="images/illustration-features-tab-2.svg" alt="Archives Access"
                                class="relative z-10" />
                        </div>
                        {/*-- Panels Content --*/}
                        <div class="flex flex-col space-y-8 md:w-1/2">
                            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Archives Access
                            </h3>
                            <p class="max-w-md text-center text-grayishBlue md:text-left">
                                Explore past shows and episodes easily. Search by date, genre, or presenter to find your
                                favorite content
                                and revisit memorable broadcasts.
                            </p>
                            <div class="mx-auto md:mx-0">
                                <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white 
                                        rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue 
                                        hover:border-softBlue hover:border-2">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>


                     {/* Panel 3 --*/}
                    <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3">
                         {/* Panel Image --*/}
                        <div class="flex justify-center md:w-1/2">
                            <img src="images/illustration-features-tab-3.svg" alt="Community Engagement"
                                class="relative z-10" />
                        </div>
                            {/*-- Panels Content --*/}
                        <div class="flex flex-col space-y-8 md:w-1/2">
                            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Community Engagement
                            </h3>
                            <p class="max-w-md text-center text-grayishBlue md:text-left">
                                Connect with fellow listeners through live chat during broadcasts. Share your favorite
                                shows on social media
                                and join discussions on the latest episodes.
                            </p>
                            <div class="mx-auto md:mx-0">
                                <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white 
                                        rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue 
                                        hover:border-softBlue hover:border-2">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>

                     {/* Panel 4 --*/}
                    <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-4">
                                  {/* Panel Image --*/}
                        <div class="flex justify-center md:w-1/2">
                            <img src="images/illustration-features-tab-4.svg" alt="Personalization Options"
                                class="relative z-10" />
                        </div>
                            {/*-- Panels Content --*/}
                        <div class="flex flex-col space-y-8 md:w-1/2">
                            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                                Personalization Options
                            </h3>
                            <p class="max-w-md text-center text-grayishBlue md:text-left">
                                Customize your listening experience with favorite shows, personalized playlists, and
                                notifications for new
                                episodes. Tailor your radio experience to suit your preferences.
                            </p>
                            <div class="mx-auto md:mx-0">
                                <a href="#" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white 
                                        rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue 
                                        hover:border-softBlue hover:border-2">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>

        {/* -- Schedule Heading --*/}
        <section id="schedule">
            <div class="container mx-auto mt-32 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">Weekly Schedule</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Catch Us Every Monday to Friday On:
                </p>
            </div>
        </section>


         {/* -- Schedule Section --*/}
        <section id="schedule">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                 {/* -- Schedule Item 1 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">The Breakfast Club</h3>
                    <p class="text-gray-600 mb-4">With Jerry & Precious</p>
                    <p class="text-gray-600 mb-4">8:00 - 10:00 AM</p>
                    <div
                        class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                             {/* -- Desktop Image--*/}
                            <img src="images/schedule.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />
                            <p class="text-sm mb-2">
                                Join us every morning for the latest news and great music to start your day right!
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> Jerry & Precious</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #MorningShow #DailyNews</p>

                             {/* -- Dots --*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                            border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                            transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                            border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                            transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                  {/* -- Schedule Item 1 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">The Nafsi Exchange Show</h3>
                    <p class="text-gray-600 mb-4">With Viggy & Wahome</p>
                    <p class="text-gray-600 mb-4">10:15 AM - 12:15 PM</p>
                    <div
                        class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                             {/* -- Desktop Image--*/}
                            <img src="images/profile-1.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />

                            <p class="text-sm mb-2">
                                Enjoy the best midday tunes to keep your energy up!
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> Viggy & Wahome</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #MiddayMusic #LunchHourBeats</p>

                           {/* -- Dots --*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                    border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                    transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                    border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                    transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                  {/* -- Schedule Item 3 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">The Walkman Show</h3>
                    <p class="text-gray-600 mb-4">With LutherTheDJ & Miss Dawa</p>
                    <p class="text-gray-600 mb-4">12:45 - 2:45 PM</p>
                    <div
                        class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                             {/* -- Desktop Image--*/}
                            <img src="images/schedule.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />
                            <p class="text-sm mt-12 mb-2">
                                Unwind with the best afternoon tunes and conversations.
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> LutherTheDJ & Miss Dawa</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #WalkmanShow #AfternonVibes</p>

                               {/* -- Dots --*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                    border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                    transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                    border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                    transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                   {/* -- Schedule Item 4 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">The Vibe check</h3>
                    <p class="text-gray-600 mb-4">With Rootsy & Shaggy</p>
                    <p class="text-gray-600 mb-4">3:00 - 5:00 PM</p>
                    <div
                        class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                              {/* -- Desktop Image--*/}
                            <img src="images/profile-1.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />
                            <p class="text-sm mt-12 mb-2">
                                Join us every evening for the latest news and great music to end your day right!
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> Rootsy & Shaggy</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #PositiveVibrations #DailyNews</p>

                             {/* -- Dots--*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                    border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                                        transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                                        border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                                        transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* -- Schedule Item 5 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">Club</h3>
                    <p class="text-gray-600 mb-4">With LutherTheDJ & Miss Dawa</p>
                    <p class="text-gray-600 mb-4">6:00 - 10:00 PM</p>
                    <div class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                              {/* -- Desktop Image--*/}
                            <img src="images/schedule.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />
                            <p class="text-sm mt-12 mb-2">
                                Unwind with the best afternoon tunes and conversations.
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> LutherTheDJ & Miss Dawa</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #WalkmanShow #AfternonVibes</p>
                
                             {/* -- Dots--*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                                    border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                                    transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                                    border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                                    transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                   {/* -- Schedule Item 5 --*/}
                <div class="relative bg-white rounded-lg shadow-md p-6 schedule-item group">
                    <h3 class="text-xl font-semibold mb-2">Sport Show</h3>
                    <p class="text-gray-600 mb-4">With Sporty</p>
                    <p class="text-gray-600 mb-4">Saturday 3:00 - 5:00 PM</p>
                    <div class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-opacity-90 schedule-info">
                        <div class="bg-white p-4 rounded-lg shadow-md max-w-full overflow-hidden">
                             {/* -- Desktop Image--*/}
                            <img src="images/schedule.jpg" alt="Profile of Jerry & Precious"
                                class="hidden w-full h-auto max-w-full object-cover duration-200 md:block group-hover:scale-110" />
                            <p class="text-sm mt-12 mb-2">
                                Unwind with the best afternoon tunes and conversations.
                            </p>
                            <p class="text-sm mb-2"><strong>Presenter:</strong> LutherTheDJ & Miss Dawa</p>
                            <p class="text-sm mb-4"><strong>Hashtags:</strong> #WalkmanShow #AfternonVibes</p>
                
                           {/* -- Dots --*/}
                            <div class="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                                <a href="#" class="px-4 py-2 mx-2 bg-gray-300 text-sm text-black font-semibold rounded-lg shadow-md 
                                                    border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                                                    transition-colors duration-300">
                                    Archives
                                </a>
                                <a href="#" class="px-4 py-2 bg-softRed text-white rounded-lg shadow-md 
                                                    border-2 border-softRed md:text-base hover:bg-white hover:text-softRed  
                                                    transition-colors duration-300">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>

         {/* -- Blog Heading--*/}
        <section id="features">
            <div class="container mx-auto mt-32 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">Our Blog</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Our aim is to provide you with an unbiased info
                </p>
            </div>
        </section>


        {/* -- Blog Section--*/}
        <section id="blog" class="bg-white py-20">
            <div class="container mx-auto px-6">
                <div class="flex flex-wrap justify-center">

                     {/* -- Blog Post--*/}
                    <div class="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                        <div
                            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div class="overflow-hidden">
                                <img class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                                    src="images/blog1.png" alt="Blog Post 1"/>
                            </div>
                            <div class="p-6">
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3A9 9 0 11 3 9a9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>2 hrs ago</span>
                                    </div>
                                </div>
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7h.01M12 12h.01M8 7h.01M12 12v.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01">
                                            </path>
                                        </svg>
                                        <span>Technology</span>
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-300">
                                    Zakayo
                                    Shuka
                                </h3>
                                <p class="text-gray-600 mt-4">
                                    You have no choice but to listen to Gen Zs now - UHURU tells RUTO as he supports the
                                    youth revolution 100%
                                </p>
                                <br/>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 inline-block mb-1 mr-1" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 14l7-3 7 3" />
                                    </svg>
                                    <p class="ml-1">Jack Jr</p>
                                </div>

                                <a href="#"
                                    class="inline-block mt-6 text-orange-500 hover:text-orange-600 transition-colors duration-300">Read
                                    More</a>
                            </div>
                        </div>
                    </div>

                     {/* -- Blog Post 2--*/}
                    <div class="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                        <div
                            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div class="overflow-hidden">
                                <img class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                                    src="images/blog2.jpg" alt="Blog Post 1"/>
                            </div>
                            <div class="p-6">
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3A9 9 0 11 3 9a9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>2 hrs ago</span>
                                    </div>
                                </div>
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7h.01M12 12h.01M8 7h.01M12 12v.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01">
                                            </path>
                                        </svg>
                                        <span>Gossip</span>
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-300">
                                    Taxpayer's Money Looting?
                                </h3>
                                <p class="text-gray-600 mt-4">
                                    Former Murang’a County Water CEC, PAUL MACHARIA, buys a house worth Ksh 258 Million
                                    in Washington State, U.S. - He
                                    looted the county dry
                                </p>
                                <br/>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 inline-block mb-1 mr-1" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 14l7-3 7 3" />
                                    </svg>
                                    <p class="ml-1">Jack Jr</p>
                                </div>

                                <a href="#"
                                    class="inline-block mt-6 text-orange-500 hover:text-orange-600 transition-colors duration-300">Read
                                    More</a>
                            </div>
                        </div>
                    </div>

                    {/* -- Blog Post 3--*/}
                    <div class="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
                        <div
                            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div class="overflow-hidden">
                                <img class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                                    src="images/blog3.jpg" alt="Blog Post 1"/>
                            </div>
                            <div class="p-6">
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3A9 9 0 11 3 9a9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>1 hr ago</span>
                                    </div>
                                </div>
                                <div class="text-gray-500 text-sm my-2">
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7h.01M12 12h.01M8 7h.01M12 12v.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01M12 16.01V16m-3-9h.01M12 7h.01M16 7h.01M12 7h.01M8 7h.01">
                                            </path>
                                        </svg>
                                        <span>Fiction</span>
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-300">
                                    Noon Bites & Brainwaves
                                </h3>
                                <p class="text-gray-600 mt-4">
                                    You want it so much you’re willing to live for it. Most people think the biggest
                                    sacrifice they can make is to die for
                                    something. Wrong!
                                </p>
                                <br/>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 inline-block mb-1 mr-1" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 14l7-3 7 3" />
                                    </svg>
                                    <p class="ml-1">Jack Jr</p>
                                </div>

                                <a href="#"
                                    class="inline-block mt-6 text-orange-500 hover:text-orange-600 transition-colors duration-300">Read
                                    More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* --Merch Heading --*/}
        <section id="merchandise">
            <div class="container mx-auto mt-20 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">Merchandise</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Groove With Us Anywhere You Go
                </p>
            </div>
        </section>


      {/* -- Merch Section--*/}
        <section class="container mx-auto px-4 py-8">
               {/* -- Merch Section--*/}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* -- Product 1--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/orange_hoodie.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi Orange Hoodie</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality hoodie featuring our signature logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                  {/* -- Product 2--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/white_hoodie.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi White Hoodie</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality hoodie featuring our signature logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                  {/* -- Product 3--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/white_tee.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi Tee</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality graphic-tee featuring our signature
                            logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                 {/* -- Product 3--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/profile-1.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi Hoodie</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality hoodie featuring our signature logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                 {/* -- Product 4--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/profile-1.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi Hoodie</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality hoodie featuring our signature logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                  {/* -- Product 5--*/}
                <div class="merch-item bg-white rounded-lg overflow-hidden shadow-md">
                    <img src="images/profile-1.jpg" alt="Product 1" class="w-full h-64 object-cover object-center"/>
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Nafsi Hoodie</h3>
                        <p class="text-gray-700 leading-relaxed mb-4">High-quality hoodie featuring our signature logo.
                            Perfect for any
                            season.</p>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-800 font-bold">KES 2500</p>
                            <button class="mt-4 bg-softRed hover:bg-softBlue text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>

          {/* -- Podcast/ Ad Heading --*/}
        <section id="pod-ad">
            <div class="container mx-auto mt-20 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">Podcast & Advertise Hub</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Hire Your Podcast Space or Advertise With Nafsi
                </p>
            </div>
        </section>

                  {/* -- Podcast/ Ad Container --*/}
        <section class="flex items-center justify-center min-h-screen">
            {/* -- Card Container --*/}
            <div class="relative flex flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                {/* -- Left Side --*/}
                <div class="relative bg-left bg-cover bg-center" style="background-image: url('images/podcast.jpg');">
                     {/* -- Overlay  --*/}
                    <div class="absolute inset-0 bg-black opacity-80"></div>

                    {/* -- Content Container --*/}
                    <div class="p-6 md:p-20 relative z-10 text-white">
                        {/* -- Top Content --*/}
                        <h2 class="font-mono mb-5 text-4xl font-bold">Hire a Podcast Space</h2>
                        <p class="max-w-sm mb-12 font-sans font-medium text-gray-200">
                            Have your voice heard! Hire our podcast space and reach out to our vibrant audience. Whether
                            you
                            are a seasoned podcaster or just starting out, our space is equipped with everything you
                            need.
                        </p>
                          {/* -- Feature Selection --*/}
                        <div class="space-y-6">
                            <div class="flex items-center">
                                <img class="h-12 w-12 rounded-full" src="images/schedule.jpg" alt="Podcast Space"/>
                                <div class="ml-4">
                                    <p class="text-lg font-medium">State-of-the-Art Equipment</p>
                                    <p class="text-base text-gray-200">Professional microphones, mixers, and more.</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <img class="h-12 w-12 rounded-full" src="images/calendar.jpg" alt="Podcast Space"/>
                                <div class="ml-4">
                                    <p class="text-lg font-medium">Flexible Scheduling</p>
                                    <p class="text-base text-gray-200">Book slots that fit your schedule.</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <img class="h-12 w-12 rounded-full" src="images/team.jpg" alt="Podcast Space"/>
                                <div class="ml-4">
                                    <p class="text-lg font-medium">Supportive Staff</p>
                                    <p class="text-base text-gray-200">Our team is here to assist you at every step.</p>
                                </div>
                            </div>
                        </div>
                        {/* -- Call To action Button --*/}
                        <div class="mt-16 text-center">
                            <a href="contact.html" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium 
                                rounded-md shadow-sm bg-softRed hover:bg-softBlue">
                                Book Your Space
                            </a>
                        </div>
                    </div>
                </div>



                  {/* -- Right Side  --*/}
                <div class="p-6 md:p-20 border-l-2 border-gray-200">
                    <h2 class="font-mono mb-5 text-4xl font-bold">Advertise with Us</h2>
                    <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
                        Partner with Nafsi Groove FM to amplify your message and connect with our vibrant community.
                    </p>
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                                  {/* -- Icon --*/}
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 17l4-4-4-4m5 8l4-4-4-4" />
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-lg font-medium text-gray-900">High Reach</p>
                                <p class="text-base text-gray-500">
                                    Expand your audience with our extensive listener base.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                                    {/* -- Icon --*/}
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v8m4-4H8" />
                                </svg>
                            </div>
                            <div class="ml-4">
                                <p class="text-lg font-medium text-gray-900">Flexible Packages</p>
                                <p class="text-base text-gray-500">
                                    Choose from a variety of advertising packages that suit your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                        {/* -- Steps to Hire/Advertise --*/}
                    <div class="mt-16">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">How to Get Started</h3>
                        <div class="mt-4 text-base text-gray-500">
                            <ol class="list-decimal ml-5 space-y-2">
                                <li>Contact our team via the form below or at info@nafsigroovefm.com.</li>
                                <li>Discuss your needs and goals with our advertising experts.</li>
                                <li>Choose a package that best fits your objectives.</li>
                                <li>Launch your advertisement or podcast with our support.</li>
                            </ol>
                        </div>
                    </div>

                   {/* -- Call To action Button --*/}
                    <div class="mt-16 text-center">
                        <a href="contact.html" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium 
                            rounded-md shadow-sm text-white bg-softRed hover:bg-softBlue">
                            Get Started Today
                        </a>
                    </div>
                </div>

               {/* -- Close Button --*/}
                <div
                    class="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            </div>
        </section>


       {/* -- FAQ Heading--*/}
        <section id="faq">
            <div class="container mx-auto mt-32 px-6">
                <h2 class="mb-6 text-4xl font-semibold text-center">FAQ</h2>
                <p class="max-w-md mx-auto text-center text-grayishBlue">
                    Here Are Some of Our FAQs
                </p>
            </div>
        </section>

        
       {/* -- FAQ accordion--*/}
        <section id="faq-accordion">
            
       {/* -- Main Container--*/}
            <div class="container mx-auto px-6 mb-32">
                
                {/* Accordion Container--*/}
                <div class="max-w-2xl m-8 mx-auto overflow-hidden">
              \       {/* Tab 1--*/}
                    <div class="py-1 border-b outline-none group" tabindex="1">
                          {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                               {/* Tab title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                How can I listen to live radio?
                            </div>
                                {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                            {/* Tab Inner Content--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                You can listen to live radio by clicking the "Live Stream" button on our homepage or by
                                visiting
                                our "Live" section in the app.
                            </p>
                        </div>
                    </div>

                         {/* Tab 2--*/}
                    <div class="py-1 border-b outline-none group" tabindex="2">
                         {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                              {/* Tab title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                Can I access past shows?
                            </div>
                                 {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                             {/* Tab Inner Content--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                Yes, you can access past shows by navigating to the "Archives" section in the app or on
                                our
                                website.
                            </p>
                        </div>
                    </div>

                            {/* Tab 3--*/}
                    <div class="py-1 border-b outline-none group" tabindex="3">
                                {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                                  {/* Tab title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                How do I request a song?
                            </div>
                              {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                             {/* Tab Inner Container--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                You can request a song by visiting our "Request a Song" page and filling out the request
                                form.
                            </p>
                        </div>
                    </div>

                            {/* Tab 4--*/}
                    <div class="py-1 border-b outline-none group" tabindex="4">
                                {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                                    {/* Tab title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                Do you have a mobile app?
                            </div>
                              {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                             {/* Tab Inner Container--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                Yes, our mobile app is available for both iOS and Android. You can download it from the
                                App
                                Store or Google Play Store.
                            </p>
                        </div>
                    </div>

                            {/* Tab 5--*/}
                    <div class="py-1 border-b outline-none group" tabindex="5">
                               {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                                    {/* Tab title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                How can I contact the station?
                            </div>
                              {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                             {/* Tab Inner Container--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                You can contact the station by visiting our "Contact Us" page and filling out the form,
                                or by
                                calling the number provided on the same page.
                            </p>
                        </div>
                    </div>

                     {/* -- Tab 6 --*/}
                    <div class="py-1 border-b outline-none group" tabindex="6">
                           {/* Tab Flex Container--*/}
                        <div
                            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                                {/* Tab Title--*/}
                            <div class="transition duration-500 ease group-hover:text-accentOrange">
                                Can I advertise on your station?
                            </div>
                              {/* Arrow--*/}
                            <div
                                class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-accentOrange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </div>
                        </div>
                            {/* Tab Inner Container--*/}
                        <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p class="py-2 text-justify text-gray-400">
                                Yes, you can advertise on our station. Visit our "Advertise with Us" page for more
                                information
                                on advertising packages and rates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                {/* Early Access --*/}
        <section id="early-access" class="py-16 bg-gradient-to-b from-white to-gray-900">
            <div class="container mx-auto text-center px-6">
                <h2 class="text-4xl font-semibold mb-6">Get Early Access</h2>
                <p class="max-w-md mx-auto mb-6 text-gray-800">
                    Sign up now to get early access to our music player and exclusive content. Don't miss out on the
                    best in music streaming!
                </p>
                <form action="#" method="POST" class="flex flex-col items-center sm:flex-row sm:justify-center">
                    <input type="email" placeholder="Your email address" class="px-4 py-3 mb-4 sm:mr-2 sm:mb-0 w-full sm:w-auto bg-white rounded shadow-md 
                        focus:outline-none focus:ring-2 focus:ring-softBlue" required />
                    <button type="submit" class="px-8 py-3 text-white bg-softBlue rounded shadow-md hover:bg-white 
                        hover:text-softBlue focus:outline-none focus:ring-2 focus:ring-softBlue">
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    </main>
    <footer class="bg-gray-900"/>
         {/* --Container--*/}
        <div class="container max-w-6xl py-10 mx-auto">
            {/* --Footer Flex Container--*/}
            <div
                class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                 {/* --Menuand logo Container--*/}
                <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                     {/* --Logo--*/}
                    <div>
                        <img src="images/Nafsi_Logo (1).svg" alt="Nafsi Groove FM Logo" id="logo"
                            class="h-16 md:h-20 w-auto" />
                    </div>
                        {/* --Menu Container--*/}
                    <div
                        class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                           {/* --Item 1--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">Shows</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                            {/* --Item 2--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">Schedule</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                         {/* --Item 3--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">Archives</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                            {/* --Item 4--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">Blog</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                            {/* --Item 5--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">Events</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                           {/* --Item 6--*/}
                        <div class="h-10 group">
                            <a href="#" class="hover:text-softRed">About</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-softRed"></div>
                        </div>
                    </div>
                </div>

                  {/* --Social and Copy Container --*/}
                <div class="flex flex-col items-start justify-between space-y-6 text-gray-500 md:space-y-0 md:ml-12">
                      {/* --Icons Container --*/}
                    <div class="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                           {/* --Icon 1--*/}
                        <div class="h-8 group">
                            <a href="#">
                                <img src="images/icon-facebook.svg" alt="Facebook" class="h-6" />
                            </a>
                        </div>
                          {/* --Icon 2--*/}
                        <div class="h-8 group">
                            <a href="#">
                                <img src="images/icon-twitter.svg" alt="Twitter" class="h-6" />
                            </a>
                        </div>
                           {/* --Icon 3--*/}
                        <div class="h-8 group">
                            <a href="#">
                                <img src="images/icon-youtube.svg" alt="Youtube" class="h-6" />
                            </a>
                        </div>
                        {/* --Icon 4--*/}
                        <div class="h-8 group">
                            <a href="#">
                                <img src="images/icon-instagram.svg" alt="Instagram" class="h-6" />
                            </a>
                        </div>
                    </div>

                             {/*-Copy--*/}
                    <div class="font-bold">
                        &copy; 2024. Nafsi Groove FM. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
