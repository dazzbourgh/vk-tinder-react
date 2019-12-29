import React from "react";
import UsernameComponent from "../captions/Username";

export default class PhotoFrame extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {user: this.props.user};
    }

    render() {
        return <div className='user-photo-container'>
            <img src={this.props.user.photo} alt='user' className='user-photo'/>
            <div className='user-photo-overlay' />
            <UsernameComponent user={this.props.user}/>
        </div>;
    }
}
