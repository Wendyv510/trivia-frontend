class Question { 
    constructor(question, questionAttributes) { 
        this.id = question.id
        this.description = questionAttributes.description 
        this.answer = questionAttributes.answer 
        this.option = questionAttributes.option 
        this.category_id = questionAttributes.category_id 
        Question.all.push(this) 
    }

    static renderQuestions() {
      
        let score = document.getElementById("scoreCard"); 
        let  resultContainer = document.getElementById("correct-incorrect")
        let categoryQuestions = document.getElementById("category-questions") 
            
        Question.all.forEach(question => {  
        let ol = document.createElement("ol")
        ol.innerHTML = `${question.description}`   
        categoryQuestions.appendChild(ol)
        
        let button1 = document.createElement("BUTTON") 
        button1.innerHTML = `${question.option}`
        ol.appendChild(button1)
        button1.addEventListener('click', function(e) {
           e.preventDefault() 
           resultContainer.innerHTML =  "Incorrect"
        })
         
        let button2 = document.createElement("BUTTON") 
        button2.innerHTML = `${question.answer}`
        ol.appendChild(button2)
        button2.addEventListener('click', function(e) {
            e.preventDefault()
            resultContainer.innerHTML =  "Correct"
            score++;
        })     
      })
    }
}

Question.all = [] 

