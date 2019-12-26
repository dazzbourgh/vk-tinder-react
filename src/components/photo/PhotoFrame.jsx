import React from "react";

export default class PhotoFrame extends React.Component {
    render() {
        return <img src={this.props.user.photo} alt='user' className='user-photo' />;
    }
}
