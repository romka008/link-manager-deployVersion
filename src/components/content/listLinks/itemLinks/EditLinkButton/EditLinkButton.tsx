import React, {FC} from 'react'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import {EditModal} from '../../../../modal/EditModal/EditModal'
import { ILink} from '../../../../../types/types'



interface EditLinkButtonProps {
    link: ILink
}

export const EditLinkButton: FC<EditLinkButtonProps> = ({link}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const handleOpenModal = () => setIsOpen((prevState) => !prevState)

    return (
        <div>
            <IconButton type="submit" sx={{p: '8px'}} aria-label="search" onClick={handleOpenModal}>
                <EditIcon sx={{color: '#00c853'}} />
            </IconButton>
            <EditModal link={link} isOpen={isOpen} handleOpen={handleOpenModal} />
        </div>
    )
}
