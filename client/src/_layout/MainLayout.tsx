import React, { useState, useCallback } from 'react'
import { BottomNav } from './BottomNav';
import { MainScreen } from '../_view/MainScreen'

type Props = {
    children: [JSX.Element, JSX.Element, JSX.Element,]
}

export enum Page {
    Home = 'home',
    Schedule = 'schedule',
    Setting = 'setting'
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    const [selection, updateSelection] = useState<Page>(Page.Home);
    const handleBottomNavClick = useCallback((pageValue: Page) => {
        updateSelection(pageValue);
    }, [])
    const MainContent = selection === Page.Home ? children[0] : selection === Page.Schedule ? children[1] : children[2]
    return (
        <>
            <MainScreen>
                {MainContent}
            </MainScreen>
            <BottomNav selection={selection} handleBottomNavClick={handleBottomNavClick} />
        </>
    )
}