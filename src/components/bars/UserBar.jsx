import React from "react";

const matchIcon = `${process.env.PUBLIC_URL}/icons/match.png`;

export class UserBar extends React.Component {

    render() {
        return (
            <div className='user-bar' onClick={this.props.onClick}>
                <a href='#' className='no-decor'>Matches</a>
                <img src={matchIcon} alt='Matches' className='match-icon'/>
            </div>
        );
    }
}
