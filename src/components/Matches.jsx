import React from "react";
import {ProfileList} from "./lists/ProfileList";
import dataService from "../service/DataService";

export class Matches extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            users: []
        }
    }

    render() {
        const empty = this.state.users.length === 0;
        const list = empty
            ? <div className='text-bar'>No matches yet</div>
            : <ProfileList users={this.state.users}/>;
        return (
            <div className='grid'>
                <div className='user-bar' onClick={() => window.location = '/'}>
                    <a href='/' className='no-decor'>Back</a>
                </div>
                {list}
            </div>
        );
    }


    componentDidMount() {
        this.setState({
            users: dataService.getMatches()
        })
    }
}
