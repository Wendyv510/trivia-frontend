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



  renderUser() { 
    let ul1 = document.getElementById("ul1") 
    
        let li = document.createElement("li") 
        li.innerHTML = `${this.username} ${this.score}`
        ul1.appendChild(li) 
    
    
  }
}
User.all = [] 