import React, { useState, useCallback } from 'react'
import { Modal } from '../atom'

type Props = {
    button?: JSX.Element;
    hasSubmit?: boolean;
    hasCancel?: boolean;
    handleSubmit?: () => void;
}
export const ModalWithButton: React.FC<Props> = ({ button, children, hasSubmit, hasCancel, handleSubmit }) => {
    const [isToggled, toggleSwitch] = useState(true)
    const handleClick = useCallback(() => { toggleSwitch((current: boolean) => !current) }, []);
    const handleClose = useCallback(() => { toggleSwitch(true) }, []);
    return (
        <>
            {!button ? <h1 onClick={handleClick}>Modal Toggle</h1> : button}

            <Modal
                hidden={isToggled}
                handleClose={handleClose}
                hasCancel={hasCancel}
                hasSubmit={hasSubmit}
                handleSubmit={handleSubmit}
            >
                {children}
            </Modal>

        </>
    )
}