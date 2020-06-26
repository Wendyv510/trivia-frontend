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
    
  }
}
User.all = [] 