export interface ILink{
    id: null | number
    nameLink: string
    url: string
    descriptionLink: string
    currentGroup: string
    read?: boolean
}

export interface IListGroups {
    listGroups:IGroup[]
    currentGroup: string 
}

export interface IGroup {
    id: number
    group: string
}

export interface Theme {
    setDarkMode: (arg: boolean) => boolean
    darkMode: boolean
}