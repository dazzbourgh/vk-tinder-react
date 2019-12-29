import React from "react";
import {Link} from "react-router-dom";

const matchIcon = `${process.env.PUBLIC_URL}/icons/match.png`;

export class UserBar extends React.Component {

    render() {
        return (
            <Link to='/matches' className='user-bar no-decor'>
                Matches
                <img src={matchIcon} alt='Matches' className='match-icon'/>
            </Link>
        );
    }
}
