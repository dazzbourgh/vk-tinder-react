import * as React from "react";
import {ProfileListElement} from "./ProfileListElement";

export class ProfileList extends React.Component {

    render() {
        return (
            <div className='no-dot'>
                {this.props.users.map(user =>
                    <div className='profile-list-element'>
                        <ProfileListElement user={user}/>
                    </div>)}
            </div>
        );
    }
}
