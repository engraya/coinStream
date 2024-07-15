import React from 'react'

function NewsCard() {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg">
    <span className="absolute top-10 z-0 rounded-full bg-teal-800 transition-all duration-300 group-hover:scale-[10]" />
    <div>
  <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-32 object-cover" />
  <div className="p-4">
    <h2 className="text-md font-bold text-gray-800 mb-2">Beautiful Mountain View</h2>
    <p className="text-gray-700 leading-tight mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
      vehicula elit. Nunc et ex at turpis rutrum viverra.
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
        <span className="text-gray-800 font-normal">John Doe</span>
      </div>
      <span className="text-gray-600">2 hours ago</span>
    </div>
  </div>
  <div className="mt-3 mb-2 justify-center flex items-center">
  <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-black px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Reading</button>
</div>

</div>

  </div>
  )
}

export default NewsCard
