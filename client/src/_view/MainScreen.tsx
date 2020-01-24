import React from 'react'
import styled from 'styled-components'

export const MainScreen: React.FC = ({ children }) => {
    return (
        <Container data-test-id='main-screen'>
            {children}
        </Container>
    )
}

const Container = styled.div`
    height: calc(100% - 116px);
    padding: 18px 16px;
`