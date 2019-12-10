import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'

const TransferMoney = () => (
<Container>
    
    <Row className="justify-content-md-left">
 
     <Col xs lg="6">
       <Col md="auto">
         <br></br>
          <h3>Transfer money</h3>
          <br></br>
          <Form>
          <Form.Group controlId="formBasicDt">
            <Form.Label>Origin acount</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              008535-1584755-2232321 / Active / 500
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">008535-1584755-2232322 / Active / 500</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">008535-1584755-2232323 / Blocked  / 1500</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">008535-1584755-2232324 / Active / 5000</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
          </Form.Group>

         <Form.Group controlId="formBasicDt">
          <Form.Label>Destination acount</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            008535-1584755-2232321 / Active / 500
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">008535-1584755-2232322 / Active / 500</Dropdown.Item>
                <Dropdown.Item href="#/action-2">008535-1584755-2232323 / Blocked / 1500</Dropdown.Item>
                <Dropdown.Item href="#/action-3">008535-1584755-2232324 / Active / 5000</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group controlId="formBasicAmountWithdrawal">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="numeric" placeholder="0.00" required/>
          </Form.Group>
          
            <Button variant="success" type="submit">
              OK
            </Button>
            </Form>
        </Col>
      </Col>
     </Row>
     </Container>
  )

export default TransferMoney
