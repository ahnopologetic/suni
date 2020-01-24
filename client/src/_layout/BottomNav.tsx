import React from 'react'
import styled from 'styled-components'
import { BottomNavItem } from '../_view/BottomNavItem'
import { Icon } from '@class101/ui'
import { Page } from './MainLayout'

type Props = {
    selection: any;
    handleBottomNavClick: any;
}

export const BottomNav: React.FC<Props> = ({ selection, handleBottomNavClick }) => {

    return (
        <Container data-test-id='bottom-nav'>
            <BottomNavItem name='홈' icon={<Icon.Home />} value={Page.Home} {...{ selection, handleBottomNavClick }} />
            <BottomNavItem name='스케줄' icon={<Icon.LeesonTime />} value={Page.Schedule} {...{ selection, handleBottomNavClick }} />
            <BottomNavItem name='설정' icon={<Icon.Gear />} value={Page.Setting} {...{ selection, handleBottomNavClick }} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
`