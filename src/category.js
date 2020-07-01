class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
        Category.all.push(this) 
    }

      static renderCategory() { 

             let choose = document.getElementById("questionBox")
                 choose.innerHTML = "Choose a Category" 
                 Category.all.forEach(category => {
                    let category1 = document.getElementById("opt1") 
                    category1.innerHTML = `${category.name}` 
                    let category2 = document.getElementById("opt2")
                    category2.innerHTML = `${category.name}` 
        //         let ul = document.getElementById("ul") 
        //         Category.all.forEach(category => { 
        //             let li = document.createElement("li") 
        //             li.innerHTML = `${category.name}`
        //             ul.appendChild(li) 
        //         })
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






