import React from "react";

export default class PhotoFrame extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {user: this.props.user};
    }

    render() {
        return <img src={this.props.user.photo} alt='user' className='user-photo'/>;
    }
}
