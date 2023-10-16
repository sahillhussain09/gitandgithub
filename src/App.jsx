import { useState } from 'react'
import './App.css'
import { Typography, Box } from '@mui/material'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [name, setName] = useState("");
  const [nameVal, setNameVal] = useState("");

  const handleName = () => {
    if (nameVal.length > 0) {
      setName(nameVal)
    } else {
      alert("please enter your name");
    }
  }

  return (
    <>
      <Box>
        <Typography variant='h4'>Hello, {name ? name : ".................,"}</Typography>
        <Box sx={{ margin: "10px" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' onChange={(e) => setNameVal(e.target.value)} />
          <Button color="secondary" placeholder='enter name' sx={{
            marginLeft: "10px"
          }} onClick={handleName}>Secondary</Button>
        </Box>
      </Box>
    </>
  )
}

export default App
