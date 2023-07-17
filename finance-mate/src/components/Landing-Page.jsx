import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col   p-4">

        <h6 className="text-white my-10 bg-green-600 p-4 rounded-md text-2xl" >finance.mate</h6>

        <div className='flex items-end justify-between p-12 pt-16'>
            <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold mb-4 text-5xl">Send Money Instantly</h1>
                <p className="text-lg mb-2">Finance-Mate keeps track of your expenses</p>
                <p className="text-lg mb-2">Need some capital? Try our SUSU feature</p>

            </div>

            <div className="flex flex-col">

                <button className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mb-4 shadow-md ">
                    <p className="text-black mr-2">Plaid Required</p>
                    <p className='bg-white p-1.5 rounded-md text-white'>LogIn</p>
                    
                </button>

                <button className="bg-green-600 flex rounded-md px-4 py-2 mr-4 items-center mv-4 shadow-md">
                    <p className="text-black mr-2">Plaid Required</p>
                    <p className='bg-white p-1.5 rounded-md text-black'>SignUp</p>
                    
                </button>

            </div>

        </div>
            <footer className='bg-green-600 '>
                  
            </footer>

    </div>
  );
}

export default LandingPage;
