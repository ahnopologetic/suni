import React from 'react'
import styled from 'styled-components'
export const RowBlock: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`