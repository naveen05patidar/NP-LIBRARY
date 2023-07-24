import React from "react";
import {Link} from 'react-router-dom'

const Header = ()=>{

    return(
        <header>
            <Link className="Link" to='/adddata'>Add Data</Link>
            <Link className="Link" to='/showdata'>ShowData</Link>
        </header>
    )
}
export default Header;
