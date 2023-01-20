import { createContext, useState } from "react";

export const ModalContext = createContext()
function ModalProvider({children}) {
    const initialModalFields = {
        show:false,
        modalType:"",
        identifiers:{
            folderId:"",
            cardId:""
        }
    }
    const [isOpenModal, setisOpenModal] = useState({...initialModalFields})

    const openModal=(value)=>{
        setisOpenModal(value)
    }
    const closedModal=(value)=>{
        setisOpenModal({...initialModalFields})
    }
    const modalFeatures={
        isOpenModal:isOpenModal,
        openModal:openModal,
        closedModal:closedModal
    }
  return (
    <ModalContext.Provider value={modalFeatures}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider 