import React , {useState} from 'react'


function SearchBar() {
    const [userName,setUsername] = useState('muffakiribnhamid')
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    
    return (
   <div>
     <div className='flex flex-wrap flex-shrink flex-col justify-center'>
        <label className='font-medium align-middle text-center flex justify-center p-7'>Enter Your Name</label>
        <input value={userName} onChange={handleChange} placeholder='Name' type="text" className='bg-slate-200 w-60 justify-center align-middle m-auto p-2 rounded-lg'/>
    </div>
    <button className='bg-blue-100 mx-auto my-4 p-2 flex rounded-lg'>Submit</button>

    <hr />
   </div>
  )
}

export default SearchBar