
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import VerifyButton from "@passbase/button/react";
import id from './images/id.jpg'

function Verification() {
  return (
  
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={id} />
          <Card.Body>
            <Card.Title>Verificaton</Card.Title>
            <Card.Text>
              Verify unleess you are not able to Exchange our site
            </Card.Text>
            <Button variant="primary">
               <VerifyButton
        apiKey="WzaBu8SlV9MXAUdt8N5j5s6Bi1HBvt3zYfWcGGtI5EILxF9akGrVNn565sR3pvNf"
        onStart={() => {}}
        onError={(errorCode) => {}}
        onFinish={(identityAccessKey) => {}}
      />
    </Button>
          </Card.Body>
        </Card>

   
  )
}

export default Verification

