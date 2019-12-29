// TODO: implement
import {User} from "../domain/domain";

class DataService {
    matches = [];

    saveReaction(appUserId, userId, reaction) {
        if (reaction === Reactions.like) {
            this.matches.push(userId);
        }
    }

    getMatches() {
        return this.matches
            .map(id => new User(id,
                'Kek',
                id,
                'https://pbs.twimg.com/media/EM-13h3XsAMbpXC?format=jpg&name=4096x4096'));
    }
}

const dataService = new DataService();
export const Reactions = {
    'dislike': 0,
    'like': 1
};

Object.freeze(Reactions);

export default dataService;
