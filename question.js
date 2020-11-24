
function getAssessmentQuestions(questionIds=[]){
    let url = "https://assessment-mock-api.herokuapp.com/api/questions";

    fetch(url).then(res=>res.json()).then(res=>{
        console.log(res);
        let allquestions = res;
        
        
        let questions = allquestions.filter(obj =>questionIds.includes( obj.id));
        console.log(JSON.stringify(questions));
        //todo: filter only questions related to that specifyc assessment
        localStorage.setItem("QUESTIONS", JSON.stringify(questions));
       
        
        next();

        
    });
}

function loadAssessment(id){
    
    let url = "https://assessment-mock-api.herokuapp.com/api/assessments/"+id;

    fetch(url).then(res=>res.json()).then(res=>{
        console.log(res);
        let assessment = res;
        let questionIds = assessment.questions;
        console.log(questionIds);
        getAssessmentQuestions(questionIds);
       
    })
}

function loadQuestion(id){
    let url = "https://assessment-mock-api.herokuapp.com/api/questions/"+ id;

    fetch(url).then(res=>res.json()).then(res=>{
        let question = res;
        console.log(res);
        let content = generate(question);
        document.querySelector("#qpanel").innerHTML = content;

    })
}






//json array movement variable
var i=0;
var correctCount = 0;
//initiallize the first question
//generate(0);

// generate from json querry array Data with index1
function generate(obj,current=0){
    // document.getElementById("question").innerHTML = obj.question;
    // document.getElementById("optt1").innerHTML = obj.opt1;
    // document.getElementById("optt2").innerHTML = obj.opt2;
    // document.getElementById("optt3").innerHTML =obj.opt3;


    let template =`
    <div id="question"> Question #${obj.id} - ${obj.question}</div>
    <div><input type="radio" id="opt1" name="options" value="${obj.opt1}">
        <span id="optt1">${obj.opt1}</span>
    </div>
    <div><input type="radio" id="opt2" name="options" value="${obj.opt2}">
        <span id="optt2">${obj.opt2}</span>
    </div>
    <div><input type="radio" id="opt3" name="options" value="${obj.opt3}">
        <span id="optt3">${obj.opt3}</span>
    </div>
    
    `;

    return template;
    
}


function next(index=0){
    let questions = JSON.parse(localStorage.getItem("QUESTIONS")) || [];    
    let question = questions[index];
    
    let content = generate(question,index);
    content+=`
    <button type="button" onclick="next(${index-1})"> Previous</button>
    <button type="button" onclick="next(${index+1})"> Next</button>
    
    `;
    document.querySelector("#questionsection").innerHTML = content
}
function checkAnswer(){
    if(document.getElementById("opt1").checked && obj[i].opt1 == obj[i].answer){
        correctCount ++;

    }
    if(document.getElementById("opt2").checked && obj[i].opt2 == obj[i].answer){
        correctCount ++;

    }
    if(document.getElementById("opt3").checked && obj[i].opt3 == obj[i].answer){
        correctCount ++;
    }

        // increment i for next question
        i++;
        if(obj.length-1 < i){
            document.write("*******your score is : "+correctCount+"*****");
        }
        //callback to generate
        generate(i);
    
}