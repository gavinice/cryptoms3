import React from 'react';
export default () => {
  // function toggle() {
  //   var videoContainer = document.querySelector('.video-container');
  //   videoContainer.classList.toggle('active');
  // }
  return (
    <>
      <div className="main">
        <div className="bg bg-cover bg-no-repeat bg-center relative">
          <div className="container text-white z-10 relative px-6 mx-auto lg:max-w-7xl lg:mx-auto lg:pb-12" id="header">
            <div className="flex justify-between items-center pt-6">
              <a href="#header">
                <img src="../logo.png" alt="" className="w-32 lg:w-44" />
              </a>
              <i className="hamburger fas fa-bars text-white lg:hidden "></i>
              <div className="nav hidden lg:flex lg:items-center lg:flex-grow ">
                <div className="flex ml-12 flex-grow">
                  <a href="#header" className="text-white uppercase text-sm hover-primary-text">
                    Home
                  </a>

                  <a href="#pricing" className="text-white uppercase text-sm  ml-10 hover-primary-text">
                    Pricing
                  </a>
                  <a href="#footer" className="text-white uppercase text-sm  ml-10 hover-primary-text">
                    Contact
                  </a>
                </div>
                <a
                  href="#"
                  className="hover-btn btn primary-btn text-center border-2 border-solid border-primary text-primary"
                >
                  Subscribe
                </a>
                <a href="#" className="text-white uppercase text-sm  ml-10 hover-primary-text">
                  Sign In
                </a>
              </div>
            </div>
            <div className="content text-white text-center mt-8 lg:mt-12">
              <div className="lg:flex lg:justify-between items-center">
                <div className="mb-8 lg:text-left">
                  <div className="flex justify-center lg:justify-start">
                    <h1 className="title lg:max-w-md mr-1 text-xl lg:text-4xl text-primary lg:mr-2 xl:text-5xl">
                      Crypto
                    </h1>
                    <h1 className="title font-bold lg:max-w-md text-xl lg:text-4xl xl:text-5xl"> Made Simple</h1>
                  </div>
                  <div className="p my-4 lg:max-w-xl lg:my-5 lg:leading-loose lg:text-md">
                    We strive to take every day people and transform them into motivated, knowledgeable and financially
                    intelligent investors with a whole new method to managing their income to become wealthy.
                  </div>
                  <a
                    href="#"
                    className="hover-btn btn primary-btn text-center border-2 border-solid border-white mx-auto  mb-4 lg:mx-0 lg:mr-4 lg:my-0 "
                  >
                    Subscribe
                  </a>
                </div>
                <div className="video-preview-container mx-auto lg:mx-0">
                  <div className="bg-primary text-darkbluebg rounded-t-lg uppercase font-bold font-xs p-4">
                    introduction to cryptocurrency
                  </div>
                  <div className="border-4 border-primary rounded-b-lg ">
                    <div className="relative">
                      <video src="assets/main.mp4" controls="true">
                        <i className="far fa-play-circle text-5xl z-10 play-btn"></i>
                      </video>
                      {/* <a
                        href="#"
                        className="video-preview-img w-100  bg-cover bg-no-repeat bg-center max-w-full h-40 flex justify-center items-center"
                      >
                      </a> */}
                    </div>
                    <div className="video-container invisible">
                      <video src="assets/main.mp4" controls="true"></video>
                      <i className="fas fa-times absolute top-9 right-9 close-btn cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 pb-6 lg:grid lg:justify-center">
                <div className="lg:flex lg:justify-center lg:text-xl lg:mb-2 lg:mt-12 xl:text-3xl">
                  <div className="text-primary lg:mr-1 xl:mr-2">"From complete beginner to expert</div>
                  <div>with a brand new source of income,</div>
                </div>
                <div className="lg:flex lg:justify-center lg:text-xl xl:text-3xl">
                  <div className="lg:mr-1 xl:mr-2">mindset & outlook on life,</div>
                  <div className="text-primary">by watching our short clips"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbluebg py-6" id="pricing">
          <div className="container  px-6 lg:max-w-7xl mx-auto text-center lg:py-14">
            <h1 className="text-primary text-3xl mb-3">Pricing Plan</h1>
            <p className="text-white my-4 lg:mb-12">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt{' '}
            </p>
            <div className="grid gap-8 justify-center lg:grid-cols-3 lg:gap-0 lg:justify-items-center">
              <div className="border-primary border-solid border-4 text-white p-6 relative w-72">
                <div className="uppercase font-bold text-xs text-left">30 day trial</div>
                <div className="flex justify-center items-center my-12">
                  <div>$</div>
                  <div className="text-3xl font-bold">00</div>
                  <div>/month</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20 mb-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <a
                  href="#"
                  className="hover-white-text bg-primary text-darkbluebg text-center text-darkbluebg uppercase mt-20 w-full block absolute left-0 bottom-0 h-12 flex justify-center items-center font-bold text-sm"
                >
                  upgrade now
                </a>
              </div>
              <div className="border-primary border-solid border-4 text-white p-6 relative w-72">
                <div className="uppercase font-bold text-xs text-left">30 day trial</div>
                <div className="flex justify-center items-center my-12">
                  <div>$</div>
                  <div className="text-3xl font-bold">00</div>
                  <div>/month</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20 mb-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <a
                  href="#"
                  className="hover-white-text bg-primary text-darkbluebg text-center text-darkbluebg uppercase mt-20 w-full block absolute left-0 bottom-0 h-12 flex justify-center items-center font-bold text-sm"
                >
                  upgrade now
                </a>
              </div>
              <div className="border-primary border-solid border-4 text-white p-6 relative w-72">
                <div className="uppercase font-bold text-xs text-left">30 day trial</div>
                <div className="flex justify-center items-center my-12">
                  <div>$</div>
                  <div className="text-3xl font-bold">00</div>
                  <div>/month</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-white border-opacity-20 mb-20">
                  <div>Members</div>
                  <div className="font-bold">Free</div>
                </div>
                <a
                  href="#"
                  className="hover-white-text bg-primary text-darkbluebg text-center text-darkbluebg uppercase mt-20 w-full block absolute left-0 bottom-0 h-12 flex justify-center items-center font-bold text-sm"
                >
                  upgrade now
                </a>
              </div>
            </div>

            <div className="text-white text-xs text-center mt-8 lg:mt-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
              et dolore*
            </div>
          </div>
        </div>
        <div className="flex bg-darkbluebg text-white text-center footer lg:py-14" id="footer">
          <div className="container  px-6 py-6 lg:max-w-7xl mx-auto lg:flex lg:justify-between">
            <div className="lg:flex lg:items-center">
              <div className="lg:mr-12 lg:text-left">
                <a href="#header">
                  <img src="../logo.png" alt="" className="w-32 lg:w-44 mx-auto lg:mb-2" />
                </a>
                <div className="text-xs lg:ml-3">© CryptoMS 2021</div>
              </div>
              <div className="my-8 lg:my-0 lg:text-left text-sm">
                <a href="" className="lg:mb-2 block hover-primary-text">
                  About Us
                </a>
                <a href="" className="lg:mb-2  block hover-primary-text">
                  Contact Us
                </a>
                <a href="" className="  block hover-primary-text">
                  Terms and Conditions
                </a>
              </div>
            </div>
            <div className="lg:flex items-center">
              <div className="lg:flex  lg:mr-12 lg:flex-col">
                <div className="flex justify-center items-center lg:text-left lg:justify-start text-sm lg:mb-2 hover-primary-text">
                  <a href="#" className="block mr-2 lg:mr-12">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="block">
                    Twitter
                  </a>
                </div>
                <div
                  href=""
                  className="flex justify-center items-center lg:text-left lg:justify-start text-sm hover-primary-text"
                >
                  <a href="#" className="block mr-2 lg:mr-12">
                    <i class="fab fa-instagram "></i>
                  </a>
                  <a href="#" className="block ">
                    Instagram
                  </a>
                </div>
              </div>
              <div className="text-sm">Admin@CryptoMS.co.uk</div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="flex items-center justify-between ">
          <i class="close fas fa-times pl-4 pt-8"></i>
        </div>
        <ul className=" p-0 ml-4 mt-16">
          <li>
            <a href="#header" className="mb-4 block">
              <span class="text text-lg hover-primary-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#pricing" className="mb-4 block">
              <span class="text text-lg hover-primary-text">Pricing Plan</span>
            </a>
          </li>

          <li>
            <a href="#footer" className="mb-4 block">
              <span class="text text-lg hover-primary-text">Contact</span>
            </a>
          </li>

          <li>
            <a href="#" className="mb-4 block hover-primary-text">
              <span class="text text-lg">Sign In</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn primary-btn text-center border-2 border-solid border-primary text-primary mb-4 ml-0 hover-btn"
            >
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
