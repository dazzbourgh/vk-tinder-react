import React from "react";
import PhotoFrame from "./photo/PhotoFrame";
import ActionButton from "./buttons/ActionButton";
import vkService from "../service/VkService";
import dataService, {Reactions} from "../service/DataService";
import {UserBar} from "./bars/UserBar";

const likeIcon = `${process.env.PUBLIC_URL}/icons/like.png`;
const dislikeIcon = `${process.env.PUBLIC_URL}/icons/dislike.png`;

export default class Reaction extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            appUser: {},
            user: {},
            users: []
        };
    }

    render() {
        return (
            <div className='grid'>
                <UserBar/>
                <PhotoFrame user={this.state.user}/>
                <div className='button-container'>
                    <ActionButton imageLink={dislikeIcon} onClick={dislike.bind(this)}/>
                    <ActionButton imageLink={likeIcon} onClick={like.bind(this)}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetchUsersBatch.call(this);
    }
}

function like() {
    dataService.saveReaction(this.state.appUser.id,
        this.state.user.id,
        Reactions.like);
    updateUsers.call(this);
}

function dislike() {
    dataService.saveReaction(this.state.appUser.id,
        this.state.user.id,
        Reactions.dislike);
    updateUsers.call(this);
}

function fetchUsersBatch() {
    const self = this;
    vkService.getUsers()
        .then(users => {
            return self.setState({
                user: users[0],
                users: users
            });
        });
}

function updateUsers() {
    const users = this.state.users.slice(1, this.state.users.length);
    if (users.length > 0) {
        const user = users[0];
        this.setState({
            user: user,
            users: users
        });
    } else {
        fetchUsersBatch.call(this);
    }
}
