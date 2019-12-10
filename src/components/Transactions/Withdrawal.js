import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Withdrawal = () => (
<Container>
    
    <Row className="justify-content-md-left">
 
     <Col xs lg="6">
       <Col md="auto">
         <br></br>
            <h3>Withdrawal</h3>
            <br></br> 
            <Form>
            <Form.Group controlId="formBasicOriginWithdrawal">
              <Form.Label>Origin acount</Form.Label>
              <Form.Control type="text" placeholder="Number acount" required/>
            </Form.Group>

            <Form.Group controlId="formBasicAmountWithdrawal">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="numeric" placeholder="0.00" required/>
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Ok
            </Button>
          </Form>
           
        </Col>
      </Col>
     </Row>
     </Container>
  )

export default Withdrawal