import React from 'react'
import styled from 'styled-components'

export const Block: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`