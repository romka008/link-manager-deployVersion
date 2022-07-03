import {createSlice} from '@reduxjs/toolkit'
import {ILink} from '../types/types'

const listLinks = createSlice({
    name: 'listLinks',
    initialState: {
        listLinks: [
            {
                id: 1,
                nameLink: 'Это первое имя ссылки',
                url: 'Какая-то ссылка',
                descriptionLink: 'Её описание',
                currentGroup: '',
            },
            {
                id: 2,
                nameLink: 'Лёрнджаваскрипт',
                url: 'https://learn.javascript.ru/',
                descriptionLink: `Современный учебник JavaScript
        Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.`,
                currentGroup: '',
            },
            {
                id: 3,
                nameLink: 'React',
                url: 'https://reactjs.org/',
                descriptionLink: 'A JavaScript library for building user interfaces',
                currentGroup: '',
            },
        ],
        filterLinks: [] as Array<ILink>,
        remoteLinks: [] as Array<ILink>,
    },
    reducers: {
        addLink(state, action) {
            state.listLinks.push(action.payload)
        },
        filterLinks(state, action) {
            state.filterLinks = state.listLinks.filter((item) => item.currentGroup.includes(action.payload))
        },
        changeLink(state, action) {
            const updatedList = state.listLinks.map((linkItem) => {
                if (action.payload.id === linkItem.id) {
                    return action.payload
                }
                return linkItem
            })
            state.listLinks = updatedList
        },
        deleteLink(state, action) {
            state.listLinks = state.listLinks.filter((item) => item.id !== action.payload)
        },
        allLinks(state) {
            state.filterLinks = state.listLinks
        },
        findLinks(state, action) {
            state.filterLinks = state.listLinks.filter(
                (link) =>
                    link.nameLink.toLowerCase().includes(action.payload.toLowerCase()) ||
                    link.url.toLowerCase().includes(action.payload.toLowerCase()),
            )
        },
        saveRemoteLinks(state, action) {
            state.remoteLinks.push(action.payload)
        },
        remoteLinks(state) {
            state.filterLinks = state.remoteLinks
        },
        deletePermanentlyLink(state, action) {
            state.filterLinks = state.filterLinks.filter((item) => item.id !== action.payload)
            state.remoteLinks = state.remoteLinks.filter((item) => item.id !== action.payload)
        },
    },
})

export default listLinks.reducer
export const {
    filterLinks,
    addLink,
    changeLink,
    deleteLink,
    allLinks,
    findLinks,
    saveRemoteLinks,
    remoteLinks,
    deletePermanentlyLink,
} = listLinks.actions
