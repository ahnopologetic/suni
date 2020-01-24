import { Colors } from '@class101/ui'
import React from 'react'
import styled from 'styled-components'

type Props = {
    name: string;
    value: string;
    icon?: any;
    selection: any;
    handleBottomNavClick: any;
}

export const BottomNavItem: React.FC<Props> = ({ name, icon, value, selection, handleBottomNavClick }) => (
    <Container data-test-id={`bottom-nav-item-${name}`} onClick={() => handleBottomNavClick(value)} isSelected={selection === value}>
        {icon}
        {name}
    </Container>
)

const Container = styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    flex: 1;
    color: ${props => props.isSelected ? Colors.orange700 : 'inherit'};
    & svg path {
        fill: ${props => props.isSelected ? Colors.orange700 : 'inherit'};
    }
    transition: all 300ms ease-in;
`