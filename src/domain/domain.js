export class User {
    constructor(id, name, surname, photo) { 
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.photo = photo;
    }
}

export class Matches {
    constructor(community, user, matches) {
        this.community = community;
        this.user = user;
        this.matches = matches;
    }
}

export class Likes {
    constructor(community, user, likes) {
        this.community = community;
        this.user = user;
        this.likes = likes;
    }
}