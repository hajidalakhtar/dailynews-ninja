import React from "react";
 
const Popup = props => {
  return (

    <div >
      <div class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" >
            <div class=" rounded-xl shadow-2xl p-6 sm:w-5/12 mx-10" style={{backgroundColor:"#1C1F26"}}>
                <span class="font-bold block text-2xl mb-3 text-white">🍺 Login </span>
                        <div class="mb-4 mt-2">
                            <label class="block text-grey-darker text-sm font-bold mb-2 text-white" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                        </div>
                         <div class="mb-4 mt-2">
                            <label class="block text-grey-darker text-sm font-bold mb-2 text-white" for="username">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2 text-white" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
                            {/* <p class="text-red text-xs italic">Please choose a password.</p> */}
                        </div>
                        {/* <div class="flex items-center justify-between">
                            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                                Forgot Password?
                            </a>
                        </div> */}
                <div class="text-right space-x-5 mt-5">
                    <button class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo" onClick={props.handleClose}>Cancel</button>
                    <button   class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-black focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo" onClick={props.handleLogin}> Login</button>
                </div>
            </div>
        </div>
    </div>

  );
};
 
export default Popup;