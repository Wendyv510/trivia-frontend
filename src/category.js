class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
        Category.all.push(this) 
    }

      static renderCategory() { 
    
                 let choose = document.getElementById("questionBox")
                 choose.innerHTML = "Choose a Category" 
                // let ul = document.getElementById("ul") 
                // Category.all.forEach(category => { 
                //     let li = document.createElement("li") 
                //     li.innerHTML = `${category.name}`
                //     ul.appendChild(li) 
                // })
                 Category.all.forEach(category => {
                 let category1 = document.getElementById("opt1") 
                 category1.innerHTML = `${category.name}` 
                 let category2 = document.getElementById("opt2")
                 category2.innerHTML = `${category.name}` 
    
                ul.addEventListener('click', function() { 
                    
                    getQuestions()
                })
                ul.addEventListener('click', function() { 
                    
                    getQuestions()
                })
            })         
    }
    
}

Category.all = [] 






