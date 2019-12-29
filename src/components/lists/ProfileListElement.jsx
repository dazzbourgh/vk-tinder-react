import * as React from "react";

export class ProfileListElement extends React.Component {

    render() {
        let fullName = `${this.props.user.name} ${this.props.user.surname}`;
        return (
            <span className='profile-list-element'>
                <img src={this.props.user.photo} alt={fullName}/>
                {fullName}
            </span>
        );
    }
}
