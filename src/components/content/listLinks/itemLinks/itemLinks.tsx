import React, {FC} from 'react'
import {Card, CardActions, CardContent, Typography, Link} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import './itemLinks.css'
import {allLinks, deleteLink, deletePermanentlyLink, filterLinks, saveRemoteLinks} from '../../../../store/listLinksReducer'
import {useDispatch, useSelector} from 'react-redux'
import {EditLinkButton} from './EditLinkButton/EditLinkButton'
import {ColorModeContext} from '../../../Theme/Theme'
import { ILink} from '../../../../types/types'
import { useAppSelector } from '../../../../store/hooks'

export interface IItemLinks {
    link: ILink
}

const ItemLinks: FC<IItemLinks> = ({link}) => {
    const mode = React.useContext(ColorModeContext)
    const currentGroup = useAppSelector(state=> state.listGroups.currentGroup)
    const dispatch = useDispatch()
    const onRemoveLink = (id: number|null) => {
        if (currentGroup === 'Корзина') {
            dispatch(deletePermanentlyLink(id))
        } else if (currentGroup === 'Все закладки') {
            dispatch(saveRemoteLinks(link))
            dispatch(deleteLink(id))
            // dispatch(allLinks(link)) Нужен для того чтобы обновлялось отображение элементов при удалении, когда мы находимся в разделе "Все закладки"
        } else if (currentGroup === link.currentGroup) {
            dispatch(saveRemoteLinks(link))
            dispatch(deleteLink(id))
            dispatch(filterLinks(link.currentGroup))
        } else {
            dispatch(saveRemoteLinks(link))
            dispatch(deleteLink(id))
        }
    }

    return (
        <div>
            <Card
                sx={{minWidth: 275, marginBottom: '10px', borderColor: '#512da8', backgroundColor: mode ? '#2d333b' : '#e6e8e8'}}>
                <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom >
                            {link.nameLink}
                        </Typography>

                        <Typography variant="body2">
                            <Link href={link.url} underline="always" color="text.secondary">
                                {link.url}
                            </Link>
                        </Typography>

                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {link.descriptionLink}
                        </Typography>
                    </div>

                    <CardActions sx={{p: 0, alignItems: 'flex-start'}}>
                        <EditLinkButton link={link} />
                        <IconButton type="submit" sx={{p: '8px'}} onClick={() => onRemoveLink(link.id)}>
                            <DeleteIcon sx={{color: mode ? '#9e9e9e' : '#0d47a1'}} />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemLinks
