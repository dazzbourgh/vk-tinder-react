import React from "react";
import PhotoFrame from "./photo/PhotoFrame";
import ActionButton from "./buttons/ActionButton";
import vkService from "../service/VkService";
import {User} from "../domain/domain";

const like = `${process.env.PUBLIC_URL}/icons/like.png`;
const dislike = `${process.env.PUBLIC_URL}/icons/dislike.png`;

export default class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: {}
        };
    }

    render() {
        return (
            <div className="vk-tinder-main">
                <PhotoFrame user={this.state.user}/>
                <div className='button-container'>
                    <ActionButton imageLink={dislike}/>
                    <ActionButton imageLink={like}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        vkService.getUser()
            .then(usr => new User(usr.id, usr.first_name, usr.last_name, usr.photo_200))
            .then(usr => {
                return this.setState({
                    user: usr
                });
            });
    }
}
