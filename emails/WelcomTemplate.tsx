import React from 'react'

import {Html, Body, Container, Text, Link, Preview} from '@react-email/components'

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Body>
            <Container>
                <Text>
                    Welcome aboard {name}! You have successfully registered to our platform.
                </Text>
                <Link href="zkr.fr">Visit our website</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomeTemplate