import * as React from "react";
import {ProfileListElement} from "./ProfileListElement";

export class ProfileList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.users.map(user =>
                    <li>
                        <ProfileListElement user={user}/>
                    </li>)}
            </ul>
        );
    }
}
