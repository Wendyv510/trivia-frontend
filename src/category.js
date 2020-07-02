class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
        Category.all.push(this) 
    }

      static renderCategory() { 

        let choose = document.getElementById("questionBox")
        choose.innerHTML = "Choose a Category" 
        let ul = document.getElementById("ul") 
        Category.all.forEach(category => { 
        let li = document.createElement("li") 
        li.setAttribute("id", `${category.id}`);
        li.innerHTML = `${category.name}`
        ul.appendChild(li) 
        li.addEventListener('click', function() { 
                    getQuestions()
                    })    
      })         
    }  
}

Category.all = [] 






