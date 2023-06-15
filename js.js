let items = document.querySelectorAll('.res');
let questions = document.querySelectorAll('.question');

items.forEach( el =>
    {   
        el.style.display = 'none';
    }
    )

function toggleAnswer(index) {
        var answers = document.getElementsByClassName("res");
        let arrow = document.getElementsByClassName('arrow');
        let question = document.getElementsByClassName('question');
        var answer = answers[index];
        if (answer.style.display === "none") {

        items.forEach( el =>{   
                el.style.display = 'none';
        })
        questions.forEach( el =>{   
            el.style = '';
        })
        
          answer.style.display = "block";
          arrow[index].style = "transform: rotate(180deg);"
          question[index].style = "font-weight: 700;";

        } else {
          answer.style.display = "none";
          arrow[index].style = ""
          question[index].style = "";
        }
}