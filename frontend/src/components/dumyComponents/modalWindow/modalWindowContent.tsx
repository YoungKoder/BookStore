import React, { ReactNode } from "react";
import ReactDOM from 'react-dom';

interface OwnProps{
    content:ReactNode,
    closeModal: ()=>void,
    onKeyDown: (e:React.KeyboardEvent)=>void
}
export const ModalContent:React.FC<OwnProps> = ({content,closeModal,onKeyDown}:OwnProps)=>{
    const root = document.getElementById('root');
    return ReactDOM.createPortal(
        <>
            <aside 
                tabIndex = {-1}
                className="modal-cover d-flex align-items-center justify-content-center"
                aria-modal= "true"
                role="dialog" 
                onKeyDown={onKeyDown}>
                <div className="modal-area">
                    <div className="modal-headBar d-flex justify-content-end">
                        <button aria-label="Close Modal" aria-labelledby="modal-close" className="modal-closeButton" onClick={closeModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    {content}
                </div>
                
            </aside>
        </>,
        document.body
    )
}