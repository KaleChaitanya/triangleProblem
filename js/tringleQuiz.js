const form=document.querySelector('.quiz-form');
const btnSubmit=document.querySelector('#btnQuiz');
const outputEl=document.querySelector('#output');

const correct_answer=['90°','right angled'];

function calculateScore(){
    let score=0;
    let index=0;
    const formData=new FormData(form);
    
    for(let value of formData.values()){
        if(value==correct_answer[index]){
            score=score+1;            
        }
        index=index+1;
    }
    outputEl.innerText="Your final score is "+score;
}
btnSubmit.addEventListener('click',calculateScore);