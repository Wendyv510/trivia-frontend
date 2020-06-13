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
  