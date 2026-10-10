import React, { useState } from 'react'
import Modal from './Companenets/Modal'

const App = () => {
  const [data,setData] = useState([{
    id:1,
    name:"Habiba",
    age:"19",
    status:false
  },{
    id:2,
    name:"Zebo",
    age:16,
    status:false

  }])
  const [openAdd,setOpenAdd] = useState(false)
  const [openEdit,setOpenEdit] = useState(false)
  const [elemEdit,setElemEdit] = useState(null)
  const [search,setSearch]=useState("")

  const filterData=data.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()))
  

const handleSubmitAdd =(event)=>{
event.preventDefault()
const newUser ={
  id:Date.now(),
  name:event.target.name.value,
  age:event.target.age.value,
  status:false
}
setData((prev)=>[...prev,newUser])
setOpenAdd((prev)=>!prev)
  }

  const handleSubmitEdit =(event)=>{
    event.preventDefault()
   
  setData((prev)=>prev.map((e)=>e.id == elemEdit.id?elemEdit:e))
  setOpenEdit((prev)=>!prev)
    }
  const handleDelete=(id)=>{
    setData((prev)=>prev.filter((e)=>e.id!=id))
  }
  const handleEdit=(e)=>{
    setOpenEdit(true)
    setElemEdit(e)
  }
  return (
    <div>
      <button onClick={()=>setOpenAdd((prev)=>!prev)}>Add+</button>
      <input type="text" placeholder='search by name...' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", margin:"10px"}}>
         {
        filterData.map((e)=>{
          return <div style={{border:"1px solid grey", padding:'10px', fontSize:"50px"}}>
            <h1>Name:{e.name}</h1>
            <p>Age: {e.age}</p>
              <p>Status: {e.status ? "Active" : "Inactive"}</p>
              <select value={e.status ? "Active" : "Inactive"} onChange={(event) => {
                setData((prev) =>prev.map((item) =>item.id === e.id? { ...item, status: event.target.value === "Active" }: item))}}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
              </select>
            <button className='p-5' onClick={()=>handleEdit(e)}>edit</button>
            <button onClick={()=>handleDelete(e.id)}>delete</button>
          </div>
        })
      }
      </div>
<Modal open={openAdd} setOpen={setOpenAdd} title="Add">
<form  onSubmit={handleSubmitAdd} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
  <input name='name' placeholder='name' style={{border: "1px solid grey", padding: "10px",borderRadius: "8px"}} type="text" />
  <input name='age' placeholder='age' style={{border: "1px solid grey", padding: "10px",borderRadius: "8px"}} type="text" />
  <button style={{ border: "1px solid #4ade80", padding: "10px",borderRadius: "16px",color: "#22c55e", fontSize: "20px"}} type='submit'>Save</button>
</form>
</Modal>
<Modal open={openEdit} setOpen={setOpenEdit} title="Edit">
<form  onSubmit={handleSubmitEdit} style={{display:'grid', width:"50%", margin:"0 auto", gap:"10px"}} action="">
  <input value={elemEdit?.name} onChange={(e)=>setElemEdit((prev)=>({...prev,name:e.target.value}))} name='name' placeholder='name'style={{border: "1px solid grey", padding: "10px",borderRadius: "8px"}} type="text" />
  <input value={elemEdit?.age} onChange={(e)=>setElemEdit((prev)=>({...prev,age:e.target.value}))} name='age' placeholder='age' style={{border: "1px solid grey", padding: "10px",borderRadius: "8px"}} type="text" />
  <button style={{ border: "1px solid #4ade80", padding: "10px",borderRadius: "16px",color: "#22c55e", fontSize: "20px"}} type='submit'>Save</button>
</form>
</Modal>
     
     
    </div>
  )
}

export default App