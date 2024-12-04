

const Body = () => {
  return (
    <div className="bg-black pb-5">
        <div className="container text-red-500 m-auto">
            hooooi
        
          <div className="day_content border-green-500 border-2">
            <div className="date text-2xl text-right font-bold">
              November_24,2024
            </div>
            
            <div className="posts my-5 text-gray-300 rounded-xl">
              <div className="info flex text-white p-1">
                <div className="photo w-10 h-10 mx-5 rounded-full border-red-600 border-4 overflow-hidden">
                  <img className="w-full h-full object-cover" src="/imgs/user.png" alt="" />
                </div>
                <div className="user my-auto">
                  Alu Baigan
                </div>
              </div>
              <div className="content">
                <div className="ul"></div>
                <img src="/imgs/post_2.jpg" alt="" className="w-full"/> 
              </div>
              <div className="bottom_text p-1 text-center w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="btn">
                <button className="like_button text-right">Like</button>
                </div>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Body