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
        //console.log(question)
        
        let score = document.getElementById("score-card");
        let correct = "Correct" 
        let incorrect = "Incorrect" 
        //let  resultContainer = document.getElementsByClass("correct/incorrect") 
        //resultContainer.innerHTML =  "Correct"
        for (let i = 0; i < questions.length; i++) {
        Question.all.forEach(question => {  
        let question1 = document.getElementById("questionBox")
        question1.innerHTML = `${question.description}`   
        let opt1 = document.getElementById("opt1")
        opt1.innerHTML = `${question.option}`
        opt1.addEventListener('click', function() {
              
            
        })
        let opt2 = document.getElementById("opt2")
        opt2.innerHTML = `${question.answer}`
        opt2.addEventListener('click', function() { 
            
            score ++; 
        
        }) 
        }) 
         
      }
    }   
}



Question.all = [] 

