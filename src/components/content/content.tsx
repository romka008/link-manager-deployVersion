import React, {FC} from 'react'
import ListLinks from './listLinks/listLinks'
import './content.css'
import {Typography} from '@mui/material'

import { useAppSelector } from '../../store/hooks'
const Content:FC = () => {
    const currentGroup = useAppSelector(state=> state.listGroups.currentGroup)
    return (
        <div className="content">
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {currentGroup}
            </Typography>
            <ListLinks />
        </div>
    )
}

export default Content
