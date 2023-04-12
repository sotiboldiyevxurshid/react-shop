import React, { useState } from 'react'
import { Button, Col, Container,Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import createData from '../../dynamikAxios/dynamikAxios'


const CreateData = () => {

  
  
  const[name , setName] = useState("")
  const[text , setText] = useState("")
  const[price , setPrice] = useState("")
  const[amount , setAmount] = useState("")
  const[image , setImage] = useState("")
  const navigate = useNavigate()



  
  
  const createAllData = async () => {
  
  let data = {
      
    name:name,
    text:text,
    price:price,
    amount:amount,
    image:image
    }

  
    let url = "https://serverkerak.onrender.com/data"
    await createData(url, data)
  .then((res) => {
    if(res.status === 201){
      alert("succes")
      setName("")
      setText("")
      setPrice("")
      setAmount("")
      setImage("")
      navigate("/table")
    }
  }) 
}



 

  return (
    <>



    
    <Container>
      <Row className='justify-content-center mt-5'>
        <Col xs={7}>
          <h1 style={{textAlign:"center"}}>Hello create page</h1>
     
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
      
        <Form.Control type="text"  placeholder="Hotel Name" onChange={(e) => setName(e.target.value)} />
      
      {name.length < 1 ? <p style={{color:"red"}}>Error</p> : <p style={{color:"blue"}}>succes</p>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text"  placeholder="text" onChange={(e) => setText(e.target.value)} />
        {text.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        {price.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>amount</Form.Label>
        <Form.Control type="text"  placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
        {amount.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Img</Form.Label>
        <Form.Control type="text"  placeholder="img" onChange={(e) => setImage(e.target.value)} />
        {image.length < 1 ? <p style={{color:"red"}}>error</p> : <p style={{color:"blue"}}>success</p>}
      </Form.Group>
      {name.length  < 2 ?
               <Button style={{width:"100%" }}variant="danger"> Submit </Button>:<Button style={{width:"100%"}} variant="primary" onClick={createAllData}>
              Submit
            </Button> 
          }
      {/* <Button style={{width: "100%"}} variant="primary" onClick={createAllData} type="submit">
        Submit
      </Button> */}
    </Form>
        </Col>
      </Row>
    </Container>
   
    </>
  )
}

export default CreateData