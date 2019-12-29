import * as React from "react";

export class ProfileListElement extends React.Component {

    render() {
        let fullName = `${this.props.user.name} ${this.props.user.surname}`;
        return (
            <span onClick={() => window.location = `https://vk.com/id${this.props.user.id}`}>
                <img src={this.props.user.photo} alt='a match' className='match-profile-pic'/>
                {fullName}
            </span>
        );
    }
}
