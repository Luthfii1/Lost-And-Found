import React from 'react';
import avatar from '../../assets/ava.jpg';

const Receive = () => {
  return (
    <div className="sm:ml-[20rem] pb-16">
      <div className="flex max-w-[1240px] flex-col-reverse overflow-y-auto h-[calc(100vh-5rem-4rem)]">
        <div className="flex flex-col-reverse">
          <div className="flex items-center justify-end px-4 py-4">
            <div className="flex flex-col items-end">
              <div className="bg-yellow rounded-xl px-4 py-3">
                <div className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>
              </div>
              <div className="text-[#717978] text-sm mt-2">12:00</div>
            </div>
            <img className="w-12 h-12 rounded-full ml-4" src={avatar} alt="ava" />
          </div>
          <div className="flex items-center justify-start px-4 py-4">
            <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt="ava" />
            <div className="flex flex-col">
              <div className="bg-[#E4E6E8] rounded-xl px-4 py-3">
                <div className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </div>
              </div>
              <div className="text-[#717978] text-sm mt-2">12:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receive;
