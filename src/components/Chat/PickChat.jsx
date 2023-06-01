import React from 'react'

const PickChat = () => {
  return (
    <div>
        {/* For Search Bar (visible only on /Search route) */}
        {isSearchRoute && (
          <div className="bg-yellow flex px-4 items-center justify-between">
            <input className="p-2 mr-5 rounded-md text-black" type="text" placeholder="Search" />
          </div>
        )}
    </div>
  )
}

export default PickChat