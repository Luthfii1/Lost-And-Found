import React from 'react'

// Create a trending component that will display the trending hastags today including the number of posts that have used that hashtag
const Trending = () => {
  return (
    <div className='mt-8'>
        {/* Add Header title of "Most Hashtag Today" */}
        <div className="flex mt-6 rounded-t-lg justify-center bg-yellow items-center">
            <h1 className="text-2xl text-center py-3 text-slate-800 font-bold">Most Hashtag Today</h1>
        </div>
        {/* Give some trending hashtag component up to 5 hashtag with Title and how much frequently upvote*/}
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
        <div className="flex  hover:bg-yellow  flex-col hover:text-black text-[#FAFAFA] sm:w-96 justify-center bg-[#222831] pl-5 py-2">
            <h1 className="text-xl  font-semibold">#Hashtag1</h1>
            <h1 className="text-xs  font-light">1000 UpVote</h1>
            <div className='border-b-2   border-[#717978]'></div>
        </div>
    </div>
  )
}

export default Trending