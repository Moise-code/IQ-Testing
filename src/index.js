import './style.css';
// target the results space 
const results = document.querySelector('.result');

// we are going to add the correct answers in an array.
const correctAnswers = ['A','B','C'];

//now lets target the form to add an event listener 

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e =>{
    e.preventDefault();

    // first af all let assume that each user starts with 0 as the initial score

    let score = 0;
    // then lets target the answers of the users targeting them by the name of attribute from form  within array 
    // so the array is going to target all the answers that the user entered, for it to be compared with the right answers in the end.
    const UserAnswers = [form.q1.value, form.q2.value, form.q3.value]
    
    //now let compare them to the correct answers from the top array of correct answers
    //we are going to use for each method to circle through each answer. and inside forEach method we are going to add a callback function which has two parameters answer and index

    UserAnswers.forEach((answer,index) => {

            if(answer === correctAnswers[index]) 
             // we are going to compare if each value picked by user equals the correct answer and then increment 33.3 to the original score 
            
             score +=33.3;

    })
     
    //show results on the page
    // we are going to target the result variable we declared eariler and add query selector to target the inner span which holds the percentage
    results.querySelector('span').textContent = `${score}%`;
    results.classList.remove('d-none');

     
})
