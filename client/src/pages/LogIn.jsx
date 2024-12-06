import React from 'react'

const LogIn = () => {
  return (
    <>
        <div className='container m-auto bg-slate-400 '>
          <p className='text-3xl font-semibold text-center mt-3'>
            LogIn page
          </p>
          <div className="text-center mt-5">
              <form action="">
                <div className="fields my-2">
                  <input type="text" placeholder='Username here' className='border-blue-400 border-2 rounded-lg text-center'/>
                </div>
                <div className="fields my-2">
                  <input type="text" placeholder='Password here' className='border-blue-400 border-2 rounded-lg text-center'/>
                </div>
                <button className='form_button mt-1'>Enter!</button>
              </form>
            </div> 
        </div>
    </>
  )
}

export default LogIn