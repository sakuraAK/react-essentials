import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({children, ref}) {

    const dialog = useRef();

    useImperativeHandle(ref, () => 
        { return {
            open: () => {
                //open internal dialog
                dialog.current.showModal();
            }
            ,
            close: () => {
                //close internal dialog
                dialog.current.close();
            }
        }
     }
    );



    return createPortal(
    <dialog className="modal" ref={dialog}>
        {children}
    </dialog>
    , document.getElementById('modal'));
}


export default Modal;
