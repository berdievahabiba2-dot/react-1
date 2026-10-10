import React, { useState } from 'react'
import Modal from "./Companenets/Modal"

const App = () => {
  const [data, setData]=useState([{
    name:"Habiba",
    age:18,
    status:false,
    id:1
  },{
    name:"Zebo",
    age:16,
    status:false,
    id:2
  }])

  const [openAdd, setOpenAdd]=useState(false)
  const [openEdit, setOpenEdit]=useState(false)
  const [elemEdit, setElemEdit]=useState(null)
  const [search, setSearch]=useState("")

  const filterData=data.filter((e)=>e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  const hendleSubmitAdd=(event)=>{
    event.preventDefault()
    const newUser={
      id:Date.now(),
      name:event.target.name.value,
      age:event.target.age.value,
      status:false
    }
    setData((prev)=>[...prev,newUser])
    setOpenAdd((prev)=>!prev)
  }

  const hendleSubmitEdit=(event)=>{
    event.preventDefault()

    setData((prev)=>prev.map((e)=>e.id==elemEdit.id?elemEdit:e))
    setOpenEdit((prev)=>!prev)
  }

  const hendleDelete=(id)=>{
    setData((prev)=>prev.filter((e)=>e.id!=id))
  }

  const hendleEdit=(e)=>{
    setOpenEdit(true)
    setElemEdit(e)
  }

  return (
    <div>
      <button onClick={()=>setOpenAdd((prev)=>!prev)}>Add+</button>
      <input type="text" placeholder='search by name' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", margin:"10px"}}>
        {
          filterData.map((e)=>{
            return <div style={{border:"1px solid grey", padding:"10px",}}>
              <h1>Name:{e.name}</h1>
              <p>Age:{e.age}</p>
              <p>Status:{e.status ? "Active" : "Inactive"}</p>
              <select value={e.status ?"Active":"Inactive"} onChange={(event)=>{
                setData((prev)=>prev.map((item)=>item.id===e.id?{...item, status:event.target.value==="Active"}:item))}}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>

                <button onClick={()=>hendleEdit(e)}>edit</button>
                <button onClick={()=>hendleDelete(e.id)}>delete</button>
            </div>
          })
        }
      </div>

      <Modal open={openAdd} setOpen={setOpenAdd} title="Add">
        <form onSubmit={hendleSubmitAdd} action="">
          <input name='name' placeholder='name' type="text" />
          <input name='age' placeholder='age' type="text" />
          <button type='submit'>Save</button>
        </form>
      </Modal>

      <Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
        <form onSubmit={hendleSubmitEdit} action="">
          <input type="text" name="name" placeholder='name' value={elemEdit?.name} onChange={(e)=>setElemEdit((prev)=>({...prev,name:e.target.value}))} />
          <input type="text" name="age" placeholder='age' value={elemEdit?.age} onChange={(e)=>setElemEdit((prev)=>({...prev,age:e.target.value}))}/>
          <button type='submit'>Edit</button>
        </form>
      </Modal>

    </div>
  )
}
export default App
