import React from 'react'
import useFetch from '../../hooks/useFetch'
import { ContainerModal, DivTitle, DivTransfer, ModalDiv, P } from './Modal.style'

const Modal = ({onClose =() => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === "modal") onClose()
    }
    
    const { current } = useFetch()

    return (
        <ModalDiv id="modal" onClick={handleOutsideClick}>
            <ContainerModal>
                <div>
                    <button onClick={onClose} />
                </div>
                
                <DivTitle>
                    <p>{current.title}</p>
                </DivTitle>
                <div>
                    progress bar
                </div>
                <DivTransfer>
                    <P>Transferindo de</P>
                    <div>
                    <p>{current.from}</p>
                    <p>R$ {current.amount}</p>
                    </div>
                </DivTransfer>
                <DivTransfer>
                    <P>Para</P>
                    <div>
                    <p>{current.to}</p>
                    <p>R$ {current.amount}</p>
                    </div>
                </DivTransfer>
            </ContainerModal>
        </ModalDiv>
    )
}

export default Modal
