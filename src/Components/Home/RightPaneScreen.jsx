import React from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import { BiEditAlt } from 'react-icons/bi'
import { IoTrashOutline } from 'react-icons/io5'
// import PlayGround from '../../Pages/PlayGround'
import Card from '../Card'
import { ModalContext } from '../../Context/ModalContext'

function RightPaneScreen() {
  const { openModal } = React.useContext(ModalContext)
  return (
    <div className='h-screen p-8'>
      <div className='flex justify-between placeholder:mt-8 items-center'>
        <h2>My <span className='font-semibold text-2xl'>PlayGround</span></h2>
        <h4
          onClick={() => {
            openModal({
              show: true,
              modalType: 1,
              identifires: {
                folderId: "null",
                playgroundId: "null",
              }
            })
          }}
        > <span className='font-semibold text-2xl cursor-pointer'> +</span>New Folder</h4>
      </div>
      <hr className='mb-12 mt-4 bg-black' />
      <div className='flex-col flex my-8'>
        <div className='flex justify-between placeholder:mt-8 items-center'>
          <div className='flex gap-4 items-center'>
            <FcOpenedFolder size={'2em'} />
            <h5 className='font-semibold'>Title</h5>
          </div>
          <div className='flex gap-4 items-center'>
            <BiEditAlt size={'1.2em'} />
            <IoTrashOutline size={'1.2em'} />
            <h5 className='font-semibold'>+ <span>{" "}New PlayGround</span></h5>
          </div>
        </div>
      </div>
      <hr className='mb-12 mt-4 bg-black' />
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
        <Card>
          <div className='flex items-center justify-between'>
            <div className='flex gap-10 items-center'>
              <img src="./logo.jpg" alt="logo" className='w-20 h-15' />
              <div>
                <h6>DSA</h6>
                <h6>Language: C++</h6>
              </div>
              <div className='flex gap-4 items-center'>
                <BiEditAlt size={'1.12em'} />
                <IoTrashOutline size={'1.2em'} />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className='flex items-center justify-between'>
            <div className='flex gap-10 items-center'>
              <img src="./logo.jpg" alt="logo" className='w-20 h-15' />
              <div>
                <h6>DSA</h6>
                <h6>Language: Python</h6>
              </div>
              <div className='flex gap-4 items-center'>
                <BiEditAlt size={'1.12em'} />
                <IoTrashOutline size={'1.2em'} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default RightPaneScreen