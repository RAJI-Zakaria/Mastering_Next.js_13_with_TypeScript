import React, { CSSProperties } from 'react'

import {Html, Body, Button, Tailwind, Container, Text, Preview} from '@react-email/components'

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview style={title}>Welcome aboard!</Preview>
        <Tailwind>
          <Body>
              <Container>
                  <Text>
                      Welcome aboard {name}! You have successfully registered to our platform.
                  </Text>
                  <Button href="https://zkr.fr" className="btn btn-success">
                    Click me
                  </Button>              
      </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

const title:CSSProperties = {
  textAlign:'center',
  fontSize:'22px'
}

export default WelcomeTemplate