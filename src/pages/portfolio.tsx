const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Replace with your actual project cards */}
        <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p className="mt-2 text-gray-600">Description of project 1.</p>
        </div>
        <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p className="mt-2 text-gray-600">Description of project 2.</p>
        </div>
        <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold">Project 3</h2>
          <p className="mt-2 text-gray-600">Description of project 3.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
