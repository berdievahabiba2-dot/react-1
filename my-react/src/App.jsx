
import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
const App = () => {
  const [data, setData] = useState(rows)
  const [open, setOpen] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  })
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleAdd = (event) => {
  event.preventDefault()

  const newRow = createData(
    form.name,
    Number(form.calories),
    Number(form.fat),
    Number(form.carbs),
    Number(form.protein)
  )

  if (editIndex !== null) {
    setData((prev) =>
      prev.map((row, index) =>
        index === editIndex ? newRow : row
      )
    )
  } else {
    setData((prev) => [...prev, newRow])
  }

  setForm({
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  })

  setEditIndex(null)
  setOpen(false)
}
  const handleEdit = (row, index) => {
  setForm({
    name: row.name,
    calories: String(row.calories),
    fat: String(row.fat),
    carbs: String(row.carbs),
    protein: String(row.protein),
  })

  setEditIndex(index)
  setOpen(true)
}
  const handleDelete = (index) => {
    setData((prev) => prev.filter((row, i) => i !== index))
  }
  const filterData = data.filter((row) =>
  row.name.toLowerCase().includes(search.toLowerCase())
)
  return (
    <div style={{ padding: '20px' }}>
      <Button variant="contained"color="success"size="large" onClick={() => {setForm({name: '',calories: '',fat: '',carbs: '', protein: '',})
                   setEditIndex(null)
                   setOpen(true)
                   }}>Add</Button>
      <TextField label="Search" variant="outlined" size="small" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filterData.map((row, index) => (
              <TableRow key={`${row.name}-${index}`}><TableCell>{row.name}</TableCell>
                <TableCell align="right"> {row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="center">
                  <Box>
                    
                    <Button variant="contained"color="error" size="small" onClick={() => handleDelete(index)}>Delete</Button>
                    <Button variant="contained"color="primary"size="small"onClick={() => handleEdit(row, index)}>Edit</Button>
                  </Box>
                </TableCell>
              </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={() => setOpen(false)}>
        
        <Box component="form" onSubmit={handleAdd}
          sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 300,bgcolor: 'white',p: 2,display: 'flex',flexDirection: 'column',gap: 2,}}>
            <div
            style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',}}>
            <h3 style={{ margin: 0 }}>{editIndex !== null ? 'Edit Dessert' : 'Добавить'}</h3>
            <button type="button" onClick={() => setOpen(false)} style={{border: 'none',background: 'transparent',fontSize: '18px',}}>X</button>
          </div>

          <TextField label="Name" name="name" value={form.name} onChange={handleChange} required size="small"/>
          <TextField label="Calories"name="calories" type="number" value={form.calories} onChange={handleChange}required size="small"slotProps={{ htmlInput: { min: 0 } }}/>
          <TextField label="Fat"  name="fat"  type="number"  value={form.fat}  onChange={handleChange}required  size="small"  slotProps={{ htmlInput: { min: 0, step: 'any' } }}  />
          <TextField label="Carbs"  name="carbs"  type="number"  value={form.carbs}  onChange={handleChange}  required size="small"  slotProps={{ htmlInput: { min: 0, step: 'any' } }}  />
          <TextField label="Protein"  name="protein"  type="number"  value={form.protein}  onChange={handleChange}  required  size="small"  slotProps={{ htmlInput: { min: 0, step: 'any' } }}  />

          <Button type="submit"  variant="contained"  color="success">Save</Button>
        </Box>
      </Modal>

    </div>
  )
}
export default App