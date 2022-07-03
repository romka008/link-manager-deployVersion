import React, {useState, FC} from 'react'
import {Divider, ListItemButton, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import {addGroup, setCurrentGroup} from '../../store/listGroupsReducer'
import './sidebar.css'
import {allLinks, filterLinks, remoteLinks} from '../../store/listLinksReducer'
import { useAppSelector } from '../../store/hooks'
import { IGroup } from '../../types/types'

export const Sidebar:FC = () => {
    const [groupLink, setGroupLink] = useState<string>('')
    const groups: IGroup[] = useAppSelector(state=> state.listGroups.listGroups)
    const dispatch = useDispatch()

    const addGroupLink = (): void => {
        if (groupLink) {
            const group = {
                id: Date.now(),
                group: groupLink,
            }
            dispatch(addGroup(group))
            setGroupLink('')
        }
    }

    const onShowAllLinks = (): void => {
        dispatch(setCurrentGroup('Все закладки'))
        dispatch(allLinks())
    }

    const onClickCategory = (item: string): void => {
        dispatch(setCurrentGroup(item))
        dispatch(filterLinks(item))
    }

    const onShowRemoteLinks = (): void => {
        dispatch(setCurrentGroup('Корзина'))
        dispatch(remoteLinks())
    }

    return (
        <div className="sidebar">
            <div className="row">
                <TextField
                    id="standard-basic"
                    label="Добавить группу"
                    size="small"
                    variant="standard"
                    onChange={(e) => {
                        setGroupLink(e.target.value)
                    }}
                    value={groupLink}
                />
                <IconButton aria-label="delete" size="small" onClick={addGroupLink}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </div>

            {groups.map((group) => (
                <ListItemButton key={group.id} onClick={() => onClickCategory(group.group)}>
                    <ListItemText primary={group.group} />
                </ListItemButton>
            ))}

            <Divider />
            <ListItemButton onClick={() => onShowAllLinks()}>
                <ListItemText primary="Все закладки" />
            </ListItemButton>
            <Divider />

            <ListItemButton onClick={() => onClickCategory('Список для чтения')}>
                <ListItemText primary="Список для чтения" />
            </ListItemButton>

            <ListItemButton onClick={onShowRemoteLinks}>
                <ListItemText primary="Корзина" />
            </ListItemButton>
        </div>
    )
}
