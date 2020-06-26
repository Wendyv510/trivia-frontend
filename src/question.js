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
        for (let i = 0; i < questions.length; i++) {
        let question = document.getElementById("questionBox")
        question.innerHTML = `${this.description}`   
        let opt1 = document.getElementById("opt1")
        opt1.innerHTML = `${this.option}`
        opt1.addEventListener("onclick", function(e) {
            e.preventDefault(); 
            alert; "Incorrect" 
        }) 
        let opt2 = document.getElementById("opt2")
        opt2.innerHTML = `${this.answer}`
        opt2.addEventListener("onclick", function(e) { 
            e.preventDefault(); 
            score ++; 
            alert; "Correct" 
        })  
            return score   
      }
    
    }
    
    
}

Question.all = [] 

