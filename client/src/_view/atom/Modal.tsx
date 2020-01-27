import React from 'react'
import styled from 'styled-components'
import { Icon, Button, ButtonColor } from '@class101/ui'

type Props = {
    hidden?: boolean;
    handleClose: () => void;
    handleSubmit?: () => void;
    hasSubmit?: boolean;
    hasCancel?: boolean;
}

const ModalBase: React.FC<Props> = React.memo(({ children, hidden, handleClose, hasCancel, hasSubmit, handleSubmit }) => {
    return (
        <ModalContainer hidden={hidden}>
            <ModalTopParagraph data-test-id='modal-top-close'>
                <Button onClick={handleClose}>
                    <Icon.Close />
                </Button>
            </ModalTopParagraph>
            <ModalMainContent data-test-id='modal-main-content'>
                {children}
            </ModalMainContent>

            <div>
                {hasCancel ? <Button color={ButtonColor.RED_LIGHT} onClick={handleClose}>취소</Button> : ''}
                {hasSubmit ? <Button color={ButtonColor.BLUE_LIGHT} onClick={handleSubmit}>확인</Button> : ''}
            </div>
        </ModalContainer>
    )
})

const ModalMainContent = styled.div`
    text-align: left;
`

const ModalTopParagraph = styled.p`
    text-align: left;
`

const ModalContainer = styled.div`
    position: absolute;
    background: white;
    height: 100vh;
    top: 0;
    opacity: ${props => props.hidden ? 0 : 1};
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    transition: all 300ms ease-in;
    left: 0;
    padding: 14px;
    width: calc(100% - 28px);   
    display: flex;
    flex-direction: column;
`

export const Modal = styled(ModalBase)`
    display: ${props => props.hidden ? 'none' : 'inherit'};
`


