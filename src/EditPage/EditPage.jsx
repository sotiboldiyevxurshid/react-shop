import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {


    const[name , setName] = useState("")
    const[text , setText] = useState("")
    const[price , setPrice] = useState("")
    const[amount , setAmount] = useState("")
    const[image , setImage] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    const getOne = (id) => {
      
        axios.get(`https://serverkerak.onrender.com/data/${id}`).then((data) => {
            alert(data.statusText)
            setName(data.data.name)
            setText(data.data.text)
            setPrice(data.data.price)
            setAmount(data.data.amount)
            setImage(data.data.image)


        })
    }
  
useEffect(() => {
    getOne(id)
}, [])

const editData = () => {
  let obj = {
    name:name,
    text:text,
    price:price,
    amount:amount,
    image:image
  }
axios.put(`https://serverkerak.onrender.com/data/${id}`, obj).then((res) =>  {
  alert(res.statusText)
  navigate('/table')
})}


  return (
    <>
     <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={7}>
          <h1 style={{textAlign:"center"}}>Hello edit page</h1>
     
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
      
        <Form.Control value={name} type="text"  placeholder="Hotel Name" onChange={(e) => setName(e.target.value)} />
      
      {name.length < 1 ? <p style={{color:"red"}}>Error</p> : <p style={{color:"blue"}}>succes</p>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control value={text} type="text"  placeholder="location" onChange={(e) => setText(e.target.value)} />
        {text.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control value={price} type="text"  placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sale</Form.Label>
        <Form.Control value={amount} type="text"  placeholder="sale" onChange={(e) => setAmount(e.target.value)} />
        {amount.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img</Form.Label>
        <Form.Control value={image} type="text"  placeholder="img" onChange={(e) => setImage(e.target.value)} />
        {image.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>
      {name.length  < 2 ?
               <Button style={{width:"100%" }}variant="danger"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={editData}>
              Submit
            </Button> 
          }
      
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default EditPage









