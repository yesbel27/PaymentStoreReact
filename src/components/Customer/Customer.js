import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Customer = () => (
  <Container>
    
   <Row className="justify-content-md-left">

    <Col xs lg="6">
      <Col md="auto">
        <br></br>
      <h3>Create customer</h3>
      <br></br> 
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>

            <Form.Group controlId="formBasicLasttName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
          
            <Form.Group controlId="formBasicDocumentNumber">
              <Form.Label>Document number</Form.Label>
              <Form.Control type="numeric" required/>
            </Form.Group>

            <Button variant="success" type="submit">
              Register
            </Button>
          </Form>
       </Col>
     </Col>
    </Row>
    </Container>
  )

export default Customer
