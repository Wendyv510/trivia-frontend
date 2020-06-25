class User { 
    constructor(user, userAttributes) {
        this.id = user.id  
        this.username = user.username  
        this.score = user.score
        User.all << this  
    }
}

function renderUsers(users) { 
    let player1 = document.getElementById("player1")
    player1.innerHTML = `${this.username} - ${this.score}` 
    let player2 = document.getElementById("player2")
    player2.innerHTML = `${this.username}-${this.score}`
    let player3 = document.getElementById("player3")
    player3.innerHTML = `${this.username}-${this.score}`
}

//let player1 = new User("lila123", 8);
//let player2 = new User("phil9876", 5);
//let player3 = new User("songbir45d", 7);
//let player4 = new User("rainbow36", 8);
//let player5 = new User("sarah0", 9);
//let player6 = new User("bigone999", 7);
//let player7 = new User("ziggy87", 10);
//let player8 = new User("starlight11", 8);
//let player9 = new User("pj1886", 7);
//let player10 = new User("stella87", 8);

User.all = [] 
