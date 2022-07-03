import React, {FC} from 'react'
import './AddLinkButton.css'
import {AddLinkModal} from '../../modal/AddLinkModal/AddLinkModal'
import {Button, Stack} from '@mui/material'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import {ColorModeContext} from '../../Theme/Theme'

const AddLinkButton: FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const mode = React.useContext(ColorModeContext)
    const handleOpen = () => setIsOpen((prevState) => !prevState)

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button
                    variant={mode ? 'contained' : 'outlined'}
                    color="secondary"
                    startIcon={<StarOutlinedIcon />}
                    onClick={handleOpen}>
                    Добавить ссылку
                </Button>
            </Stack>
            <AddLinkModal handleOpen={handleOpen} isOpen={isOpen} />
        </div>
    )
}

export default AddLinkButton
