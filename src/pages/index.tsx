import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold text-center">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="mt-4 text-lg text-center">A passionate web developer</p>
        <button className="mt-8 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
          View My Work
        </button>
      </main>

      <footer className="absolute bottom-0 w-full text-center p-4">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
