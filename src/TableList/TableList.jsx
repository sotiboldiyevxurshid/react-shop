import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap'
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableList = () => {

 
  
  const[rows , setRows] = useState()
  const[input,setInput] = useState("")

  const getAllData = () => {
    let url = "https://serverkerak.onrender.com/data"
    axios.get(url).then((data) => {
      setRows(data?.data)
   
    })
  }


  const deleteFunc = (id) => {
    axios.delete(`https://serverkerak.onrender.com/data/${id}`).then((res) =>{
       alert(res.statusText)
  })
    // rows.filter(id)
  }

  useEffect(() => {
    getAllData()
  },[])

  console.log(rows);




  return (
    <>
   
  <Container>
    <Row>

      {
        
      }
    </Row>
    <Row className="justify-content-center mt-5">
      <Col xs={8}>

      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <TableContainer component={Paper}>
      <Table aria-label="simple table">

        <TableHead>

          <TableRow>
            <TableCell>Images</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Text</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.filter((item) => {
              return input.toLowerCase() === '' ? item : item.name.toLowerCase( ).includes(input)
            }).map((row) => (
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={row.id}
            >
              <TableCell component="th" scope="row">
              <img src={row?.image} width={100} height={50} alt="" />
              </TableCell>
              <TableCell align="right">{row?.name}</TableCell>
              <TableCell align="right">{row?.text}</TableCell>
              <TableCell align="right">{row?.price}</TableCell>
              <TableCell align="right">{row?.amount}</TableCell>
              <Link to={`/table/edit/${row.id}`} >
                <TableCell align="right"><Button sx={{marginTop: "10px"}} variant="contained">Edit</Button></TableCell>
              </Link>
              {/* <TableCell align="right"><Button variant="contained">Edit</Button></TableCell> */}
              <TableCell align="right"><Button variant="contained" color="error" onClick={() => deleteFunc(row?.id)}>Delete</Button></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
      </Col>
    </Row>
  </Container>
    </>
  ) 
}

export default TableList