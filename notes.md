const categoryMarkup =  
            <div class="categories"> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;

            document.querySelector('#categories-container').innerHTML += categoryMarkup 

<img src ="https://www.salidalibrary.org/wp-content/uploads/2018/12/trivia.png">


const categoryMarkup =  
            <div data-id="${category.id}">
                <h1> Choose a Category </h1> 
                <button> ${category.attributes.name} </button>
            </div>
            <br> </br>;
             document.querySelector('#quiz-wrapper').innerHTML += categoryMarkup 
}


-- in classes render 

 renderCategory() {
        return  
          <div data-id = "${this.id}">
              <h1> ${this.description} </h1>
              <button> ${this.option} </button>
              <button> ${this.answer} </button>
          </div> 
    }  


renderCategory() {
      return  
        <div data-id = "${this.id}">
            <button data-id = "${this.id}"> "${this.name}" </button>
        </div> 
  }  
           
  

  console.log(categoriesObjects)
}
        // method: "POST"; 
        // headers: {
        //     "Content-Type"; "application/json";
        //     "Accept"; "application/json" 
        // };  
        // body: JSON.stringify(categories) 
    
    // fetch(categories) 
    // .then(response => response.json())
     
    // .then(json => 
    //     console.log(json) 