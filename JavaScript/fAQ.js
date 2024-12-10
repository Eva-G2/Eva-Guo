//selecting all questions//

let question = document.querySelectorAll('.Qs');

question.forEach(question_1 =>{
    question_1.addEventListener('click',()=>{
        let answer = question_1.nextElementSibling;

        if(answer.style.display === 'block'){
            answer.style.display = 'none';
        }
        else{
            answer.style.display = 'block';
        }

    });

});
        
