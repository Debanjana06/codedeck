import React from 'react'
import LeftPaneScreen from '../Components/Home/LeftPaneScreen'
import RightPaneScreen from '../Components/Home/RightPaneScreen'
import Modal from '../Components/Modal'
import { ModalContext } from '../Context/ModalContext'
function Home() {
   const {isOpenModal} = React.useContext(ModalContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
       <div className='md:w-full sm:w-full '>
          <LeftPaneScreen/>
       </div>
       <div className='md:w-full sm:w-full '>
          <RightPaneScreen/>
       </div>
       {isOpenModal?.show && <Modal/>}
    </div>
  )
}

export default Home