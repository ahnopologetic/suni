import React, { useState, useCallback } from 'react'
import styled from 'styled-components';

type Props = {
    children: [JSX.Element, JSX.Element]
}

export const CollapsibleBlock: React.FC<Props> = ({ children }) => {
    const [collapsed, updateCollapse] = useState(false);
    const [preview, detail] = children;
    const toggleCollapse = useCallback(() => {
        updateCollapse(col => !col);
    }, [])
    return (
        <CollapsibleBlockContainer onClick={toggleCollapse}>
            {!collapsed ? (<>{preview}</>) : (<>{detail}</>)}
        </CollapsibleBlockContainer>
    )
}

const CollapsibleBlockContainer = styled.div`
    min-height: 60px;
    max-height: 200px;
    display: flex;
    align-items: center;
`