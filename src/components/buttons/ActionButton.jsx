import * as React from "react";

export default class ActionButton extends React.Component {
    render() {
        return (
            <img src={this.props.imageLink} className='action-button' alt='whatever'
            onClick={this.props.onClick}/>
        );
    }
}
