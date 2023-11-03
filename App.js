var questions = [
    {
        question:"<span>Q1</span>&nbsp;Which is the biggest mountain in Pakistan?",
        option1:"Rakaposhi",
        option2:"Nanga Parbat",
        option3:"Chogori/K-2",
        correctAns:"Chogori/K-2"
    },
    {
        question:"<span>Q2</span>&nbsp;Inside which HTML element do we put the JavaScript?",
        option1:"<scripting>",
        option2:"<script>",
        option3:"<Js>",
        correctAns:"<script>"
    },{
        question:"<span>Q3</span>&nbsp;The external JavaScript file must contain the script tag?",
        option1:"True",
        option2:"False",
        option3:"Both A,B",
        correctAns:"True"
    },{
        question:"<span>Q4</span>&nbsp;What is the correct syntax for referring to an external script called 'xxx.js'?",
        option1:"<script href='xxx.js'>",
        option2:"<script name='xxx.js'>",
        option3:"<script src='xxx.js'>",
        correctAns:"<script src='xxx.js'>"
    },{
        question:"<span>Q5</span>&nbsp;How do you write 'Hello World' in an alert box?",
        option1:"alertBox('Hello World');",
        option2:"alert('Hello World');",
        option3:"msgBox('Hello World');",
        correctAns:"alert('Hello World');"
    }
    ,{
        question:"<span>Q6</span>&nbsp;How do you create a function in JavaScript?",
        option1:"function = myFunction()",
        option2:"function:myFunction()",
        option3:"function myFunction()",
        correctAns:"function myFunction()"
    }];



var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var index = 0;
var score = 0;

function nextQuestion(){

    var getOptions = document.getElementsByName("options");

    for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            var selectedAns = questions[index-1][`option${selectedValue}`];
            var correctAns = questions[index - 1]["correctAns"];
            if(selectedAns === correctAns){
                score++
            }
        }
        getOptions[i].checked = false
    }

    button.disabled = true

    if(index > questions.length - 1){

        Swal.fire(
            'Good job!',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
            'success'
          )
    }
 else{

        
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++
    }
}

// nextQuestion()


function clicked()
{
    button.disabled = false
}



