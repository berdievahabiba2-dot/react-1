import React, { useState } from 'react'

const App = () => {
  const [data,setData]=useState([{
    id:1,
    name:"Habiba",
    age:18
  }])
  const [open,setOpen]=useState(false)
  const [idx,setIdx]=useState(null)

  const [editName,setEditName]=useState('')
  const [editAge,setEditAge]=useState('')

  const handleDelete=(id)=>{
    setData(data.filter((e)=>e.id!=id))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newUser={
      id:Date.now(),
      name:e.target.name.value,
      age:e.target.age.value,
    }
    setData([...data,newUser]) 
  }

   const handleEditSubmit=(e)=>{
    e.preventDefault()
    const newUser={
      id:idx,
      name:editName,
      age:editAge,
    }
    
    setData(data.map((e)=>e.id==idx?newUser:e))
    
  }
  return (

    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='name' />
          <input type="text" name='age'/>
          <button type='submit'>summit</button>
        </form>
      </div>
      {
        data.map((e)=>{
          return <div key={e.id}>
            <h1>Name:{e.name}</h1>
            <p>Age:{e.age}</p>
            <button onClick={()=>handleDelete(e.id)}>delete</button><br />
            <button onClick={()=>{opendEdit(true),setEditName(e.name),setEditAge(e.age),setIdx(e.id)}}>edit</button>
            {open? <form action="" onSubmit={handleEditSubmit}>
          <input value={editName} onChange={(e)=>setEditName(e.target.value)} type="text" name='name' />
          <input value={editAge} onChange={(e)=>setEditAge(e.target.value)}qq type="text" name='age'/>
          <button type='submit'>summit</button>
        </form> : null}
            
          </div>
        })
      }
    </div>
  )
}
export default App