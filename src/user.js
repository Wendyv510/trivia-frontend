class User { 
    constructor(user, userAttributes) {
        this.username = userAttributes.username  
        this.score = userAttributes.score
        User.all.push(this)  
    }
}

let player1 = new User("lila123", '8');
let player2 = new User("phil9876", 5);
let player3 = new User("songbir45d", 7);
let player4 = new User("rainbow36", 8);
let player5 = new User("sarah0", 9);
let player6 = new User("bigone999", 7);
let player7 = new User("ziggy87", 10);
let player8 = new User("starlight11", 8);
let player9 = new User("pj1886", 7);
let player10 = new User("stella87", 8);

User.all = [] 
