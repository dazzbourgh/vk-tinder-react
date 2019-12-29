import React from "react";

const matchIcon = `${process.env.PUBLIC_URL}/icons/match.png`;

export class UserBar extends React.Component {

    render() {
        return <div className='user-bar'>
            Matches
            <img src={matchIcon} alt='Matches' className='match-icon'/>
        </div>
    }
}
