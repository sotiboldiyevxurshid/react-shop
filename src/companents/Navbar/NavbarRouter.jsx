import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarRouter = () => {
  return (
    <>
    <Container>
        <Row>
            <Col>
            <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
       <Link to ="/home" style={{textDecoration:"none"}}>
       <li style={{color: "#000", paddingTop:"10px "}}>Home</li>
       </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to ="/create" style={{textDecoration:"none"}}>
       <li  style={{color: "#000", paddingTop:"10px "}}>Create Data</li>
       </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to ="/table" style={{textDecoration:"none"}}>
       <li  style={{color: "#000", paddingTop:"10px "}}>Table List</li>
       </Link>
      </Nav.Item>
     
    </Nav>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default NavbarRouter