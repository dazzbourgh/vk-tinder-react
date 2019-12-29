import React from "react";

export default class UsernameComponent extends React.Component {

    render() {
        return <div className='username'>{`${this.props.user.name} ${this.props.user.surname}`}</div>
    }
}
