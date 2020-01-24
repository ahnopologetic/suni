import React from 'react'
import styled from 'styled-components'
import {Headline2} from '@class101/ui'

export const Greeting = () => {
    return (
        <Container data-test-id='greeting'>
            <Headline2>가연님, <br />안녕하세요!</Headline2>
        </Container>
    )
}

const Container = styled.div`
    text-align: left;
`