import React from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import { BiEditAlt } from 'react-icons/bi'
import { IoTrashOutline } from 'react-icons/io5'
// import PlayGround from '../../Pages/PlayGround'
import Card from '../Card'
import { ModalContext } from '../../Context/ModalContext'
import { PlayGroundContext } from '../../Context/PlayGroundContext'
import { useNavigate } from 'react-router-dom'

function RightPaneScreen() {
  const { openModal } = React.useContext(ModalContext)
  const { folders, deleteFolder, deleteCard } = React.useContext(PlayGroundContext);
  const navigate = useNavigate();
  return (
      <div className='h-screen p-8'>
        <div className='flex justify-between placeholder:mt-8 items-center'>
          <h2> My <span className='font-semibold text-2xl'> PlayGround</span></h2>
          <h4
            onClick={() => {
              openModal({
                show: true,
                modalType: 1,
                identifiers: {
                  folderId: "null",
                  playgroundId: "null",
                }
              })
            }}
  
          > <span className='font-semibold text-2xl'> +</span> New Folder</h4>
  
        </div>
        <hr className='mb-12 mt-4 bg-black' />
        {
          folders && Object.entries(folders).map(([folderId, folder]) => (
            <div className='flex-col flex my-8'>
              <div className='flex justify-between placeholder:mt-8 items-center'>
                <div className='flex gap-4 items-center'>
                  <FcOpenedFolder size={'2em'} />
                  <h5 className='font-semibold'>{folder.title} </h5>
                </div>
                <div className='flex gap-4 items-center'>
                  <BiEditAlt size={'1.12em'} onClick={() => openModal({
                    show: true,
                    modalType: 4,
                    identifiers: {
                      folderId: "",
                      cardId: "",
                    }
                  })} />
                  <IoTrashOutline size={'1.2em'} onClick={() => {
                    console.log("clicked");
                    deleteFolder(folderId)
                  }} />
                  <h5 onClick={() => openModal({
                    show: true,
                    modalType: 2,
                    identifiers: {
                      folderId: "",
                      cardId: "",
                    }
                  })}
                    className='font-semibold'>+ <span>{" "}New PlayGround</span> </h5>
                </div>
              </div>
              <hr className='mb-12 mt-4 bg-black' />
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                {Object.entries(folder["playgrounds"]).map(([playgroundId, playground]) => (
                  <Card key={playgroundId} >
                    <div onClick={(e) => {
                      e.stopPropagation(); // stop click progation to parent
                      navigate(`/playground/${folderId}/${playgroundId}`)
                    }} className='flex items-center justify-between'>
                      <div className='flex gap-4 items-center '>
                      <img src="./logo.jpg" alt="logo" className='w-20 h-15' />
                        <div>
                          <h6>{playground?.title}</h6>
                          <h6>Language: {playground?.language}</h6>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center ' onClick={(e) => {
                        e.stopPropagation(); // stop click progation to parent
                      }}>
                        <BiEditAlt size={'1.12em'}
                          onClick={() => openModal({
                            show: true,
                            modalType: 5,
                            identifiers: {
                              folderId: folderId,
                              cardId: playgroundId,
                            }
                          })}
                        />
                        <IoTrashOutline size={'1.2em'} onClick={() => {
                          console.log("clicked");
                          deleteCard(folderId, playgroundId)
                        }} />
                      </div>
                    </div>
                  </Card>
                ))}
  
              </div>
            </div>
          )
          )}
      </div>
    )
  }
  

export default RightPaneScreen