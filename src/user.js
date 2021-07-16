class User { 
    constructor(user) {
        this.id = user.id  
        this.username = user.username  
        this.score = user.score
        User.all.push(this) 
    }


    renderUser() { 
        let ul1 = document.getElementById("ul1") 
        let li = document.createElement("li") 
        li.innerHTML = `${this.username} - Score: ${this.score}`
        ul1.appendChild(li) 
    }
}
User.all = [] 