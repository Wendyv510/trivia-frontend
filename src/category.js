class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
        Category.all.push(this) 
    }

      static renderCategory() { 
        //console.log(category)
    
                 let choose = document.getElementById("questionBox")
                 choose.innerHTML = "Choose a Category" 
                 Category.all.forEach(category => {
                 let category1 = document.getElementById("opt1") 
                 category1.innerHTML = `${category.name}` 
                 let category2 = document.getElementById("opt2")
                 category2.innerHTML = `${category.name}` 
    
                category1.addEventListener('click', function() { 
                    
                    getQuestions()
                })
                category2.addEventListener('click', function() { 
                    
                    getQuestions()
                })
            })         
    }
    
}

Category.all = [] 






