import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

const Cards = () => {


  const { t } = useTranslation()

  const handleClick = (value) => {
    i18next.changeLanguage(value)
  }

  const [data, setData] = useState(Cardsdata);
  const[input,setInput] = useState("")
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
           <NavDropdown title={t("text.choose")}  style={{ color: "black" }} id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1" onClick={() => handleClick("ru")}>Russian</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2" onClick={() => handleClick("uzb")}> Uzbek</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3" onClick={() => handleClick("eng")}>English</NavDropdown.Item>
                            </NavDropdown>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <input type="text" className='inputcha'   onChange={(e) => setInput(e.target.value)}  />

      <div className="row d-flex justify-content-center align-items-center">
        {
          data?.filter((item) => {
            return input.toLowerCase() === '' ? item : item.rname.toLowerCase( ).includes(input)
          }).map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>


                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards