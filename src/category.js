class Category { 
    constructor(category, categoryAttributes) {
        this.id = category.id 
        this.name = categoryAttributes.name 
        Category.all.push(this) 
    }

      static renderCategory() { 

             let choose = document.getElementById("questionBox")
                 choose.innerHTML = "Choose a Category" 
        //         Category.all.forEach(category => {
        //            let category1 = document.getElementById("opt1") 
        //            category1.innerHTML = `${category.name}` 
        //            let category2 = document.getElementById("opt2")
        //            category2.innerHTML = `${category.name}` 
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
                
            //})         
    }
    
}

Category.all = [] 






