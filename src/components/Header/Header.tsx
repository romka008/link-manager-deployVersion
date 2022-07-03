import React, {FC} from 'react'
import {Search} from './Search/Search'
import './Header.css'

import LogIn from './LogIn/LogIn'
import AddLinkButton from './AddLinkButton/AddLinkButton'

const Header: FC = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="title">LinkManager</div>
                <Search />
                <AddLinkButton />
                <LogIn />
            </div>
        </div>
    )
}

export default Header
