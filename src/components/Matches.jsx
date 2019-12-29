import React from "react";
import {ProfileList} from "./lists/ProfileList";
import dataService from "../service/DataService";
import {Link} from "react-router-dom";

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
                <Link to='/' className='user-bar no-decor'>Back</Link>
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
