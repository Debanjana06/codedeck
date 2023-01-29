import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { ModalContext } from '../../Context/ModalContext'
import { PlayGroundContext } from '../../Context/PlayGroundContext';
function NewFolder() {
    const {closedModal} = React.useContext(ModalContext)
    const { addFolder } = React.useContext(PlayGroundContext);
    const [folderTitle, setFolderTitle] = React.useState('')
  return (
    <div>
        <div className='flex flex-row justify-end p-4'>
                <RxCross1 className='cursor-pointer' onClick={()=>closedModal()} />
        </div>
        <div className='px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6 '>
            <h2> Create a New Folder</h2>
            <div className='flex w-full'>
          <label>Enter Folder Name</label>
          <input
            type="text"
            value={folderTitle}
            placeholder="Please enter Playground title"
            onChange={(e) => setFolderTitle(e.target.value)}
            className='border-[.5px] text-sm  border-gray  rounded-lg shadow-sm  p-2 w-full'
          />
        </div>
            <button
            
            className='p-3 w-36 text-black bg-white rounded-lg font-semibold bg-darkBlue border-[0.5px border-gray shadow-lg'
            onClick={() => {
                addFolder(folderTitle);
                closedModal();
              }}>
                Create Folder
            </button>
        </div>

    </div>
  )
}

export default NewFolder