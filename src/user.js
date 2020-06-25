class User { 
    constructor(user, userAttributes) {
        this.id = user.id  
        this.username = userAttributes.username  
        this.score = userAttributes.score
        User.all.push(this) 
    }

// render user is going to be static method (which is a class method)
// inside of render users we're going to find the ul and then do a forEach on User.all
// for each user we're going to create an li and the inner HTML is going to be w/e you want it to be.
// you then append that to the UL



 static renderUsers() { 
    let ul1 = document.getElementById("ul1") 
    User.all.forEach(user => { 
        let li = document.createElement("li") 
        li.innerHTML = `${user.username} ${user.score}`
        ul1.appendChild(li) 
    })
    // let player1 = document.getElementById("player1")
    // player1.innerHTML = `${this.username} - ${this.score}` 
    // let player2 = document.getElementById("player2")
    // player2.innerHTML = `${this.username}-${this.score}`
    // let player3 = document.getElementById("player3")
    // player3.innerHTML = `${this.username}-${this.score}`
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

}
User.all = [] 