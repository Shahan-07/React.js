import {useState} from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="container flex justify-between w-3xl border-1 rounded-xl ml-50 py-4 px-4">
          <div>
            <a href="#">Ingpo Ioker</a>
          </div>

          <div className="space-x-4">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Career Tips</a>
            <a href="#">platform</a>
            <a href="#">Contact</a>
          </div>

          <div className="space-x-3">
            <a href="#">Login</a>
            <button className="border-black  text-purple-500 ">Sign up</button>
          </div>

        </div>
      </header>

      {/*   hero section  */}

      <div className="mt-20 ml-120 border-1 rounded-xl border-purple-500 w-65 pl-2 space-x-5">
        <p>1# Best job search service Asia</p>
      </div>
        <br />
      <div className="text-5xl  flex flex-row pl-70">
        <h1>Your Trusted platform for The <br /> &nbsp;&nbsp; Best Career Oppurtinities</h1>
      </div>
      <br />

      <div className="text-black pl-80">
        <p>Explore Thosands of job openings across various industries and find <br/>&nbsp;&nbsp;&nbsp;&nbsp; the positions that matches  your skilled and intrests.</p>
      </div>
      <br /><br /><br />

      <div className="flex items-center pl-110 space-x-6">
        <button className="border-2 bg-purple-400 text-white rounded-xl w-30 h-10">Get Started</button>
        <a href="#">How its work?</a>
      </div>
      
    </>
  )
}

export default App
