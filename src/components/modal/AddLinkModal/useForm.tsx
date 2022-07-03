import React from 'react'
import {FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, SelectChangeEvent} from '@mui/material'
import {IGroup, ILink} from '../../../types/types'
import {useAppSelector} from '../../../store/hooks'

interface IError {
    nameLink?: string | boolean
    url?: string | boolean
    descriptionLink?: string | boolean
}

export const useForm = (initialValue: ILink) => {
    const [bookmark, setBookmark] = React.useState(initialValue)
    const [error, setError] = React.useState<IError>({})

    const groups = useAppSelector((state) => state.listGroups)

    const handleGroupChange = (event: SelectChangeEvent) => {
        setBookmark((prevState) => ({
            ...prevState,
            currentGroup: event.target.value,
        }))
    }

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBookmark({...bookmark, read: event.target.checked, currentGroup: ''})
    }

    const select = bookmark.read ? (
        <div>Список для чтения</div>
    ) : (
        <FormControl fullWidth margin="normal">
            <InputLabel>Group</InputLabel>
            <Select value={bookmark.currentGroup} onChange={handleGroupChange}>
                {groups.listGroups.map((group: IGroup) => (
                    <MenuItem key={group.id} value={group.group}>
                        {group.group}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )

    const box = (
        <FormControlLabel
            control={<Checkbox checked={bookmark.read} onChange={handleChangeCheckbox} />}
            label="Список для чтения"
        />
    )

    function validate() {
        let temp: any = []
        temp.nameLink = bookmark.nameLink ? '' : 'Это поле обязательно к заполнению'
        temp.url =
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=,\w]+@)[A-Za-z0-9.-]+)((?:\/[~%.\w-_]*)?\??(?:[-=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
                bookmark.url,
            )
                ? ''
                : 'Url-адрес недействителен'
        temp.descriptionLink = bookmark.descriptionLink ? '' : `Поле 'описание' обязательно для заполнения`
        setError({...temp})
        return Object.values(temp).every((x) => x === '')
    }

    return {
        bookmark,
        setBookmark,
        validate,
        error,
        setError,
        select,
        groups,
        box,
    }
}
