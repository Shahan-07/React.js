import {useState,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed]= useState(false)
  const[Password,setPassword]= useState("")

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,"

    for(let i = 1; i<= length;i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);


  },[length,numberAllowed,charAllowed,setPassword]);


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(()=>{
    passwordgenerator();
  }, [length,numberAllowed,charAllowed,passwordgenerator])




  return (
    <>
    <div className='w-full h-30 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center  my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='password'
        readOnly
        ref={passwordRef}
      />

      <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{setNumberAllowed((prev)=> !prev);}}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charcterInput'
          onChange={()=>{setCharAllowed((prev)=> !prev);}}
          />
          <label htmlFor="charcterInput">Characters</label>
        </div>
      </div>

    </div>

    </>
  )
}

export default App
