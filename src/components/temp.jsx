import React, { useState, useEffect } from 'react';

const NavbarChoice = () => {
      return (
        <div>
          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
              <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
              </li>
              <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
              </li>
              <li>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </li>
            </ul>
          </div>

          {/* // For chat Features */}
          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                  <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      View all
                  </a>
            </div>
            <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="#" alt="Neil image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Neil Sims
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $320
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="#" alt="Bonnie image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Bonnie Green
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $3467
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="#" alt="Michael image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Michael Gough
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $67
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="#" alt="Lana image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Lana Byrd
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $367
                              </div>
                          </div>
                      </li>
                      <li class="pt-3 pb-0 sm:pt-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="#" alt="Thomas image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Thomes Lean
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $2367
                              </div>
                          </div>
                      </li>
                  </ul>
            </div>
          </div>

          {/* // For Image carousel  https://flowbite.com/docs/components/carousel/*/}
          <div id="default-carousel" class="relative w-full" data-carousel="slide">
              {/* <!-- Carousel wrapper --> */}
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                  {/* <!-- Item 1 --> */}
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="#" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="#" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 3 --> */}
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="#" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 4 --> */}
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="#" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 5 --> */}
                  <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="#" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                      <span class="sr-only">Previous</span>
                  </span>
              </button>
              <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      <span class="sr-only">Next</span>
                  </span>
              </button>
          </div>

        </div>

        
      );
};

export default NavbarChoice;
