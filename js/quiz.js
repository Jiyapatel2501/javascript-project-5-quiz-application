let param = new URLSearchParams(window.location.search);
let quizObj = Number(param.get('id'));
let quizDetail = null;
let userAns = [];
let currentque = 0;
let count = 0;
let stop;

function $(ele) {
    return document.getElementById(ele);
}

function quizBanner(obj) {
    const idFound = quizz.find(item => item.id === obj);
    (idFound) ? quizDetail = idFound : window.location.href = 'index.html';
    $('dynamic-title').innerHTML = quizDetail.title;
    $('quiz-desc').innerHTML = quizDetail.description;
    $('quiz-banner').src = quizDetail.image;
    $('que-length').textContent=quizDetail.questions.length;
    $('duration').textContent=quizDetail.time;
}

quizBanner(quizObj);

function countdown() {
    stop = setInterval(() => {
        $('time').textContent = count--;
        
        if (count == 0) {
            finish();
        }
    }, 1000)
}
function showQue() {
    count = quizDetail.time;
    userAns = [];
    currentque = 0;
    $('detail-sec').classList.add("d-none")
    $('que-sec').classList.remove("d-none")
    $('quiz-score').classList.add("d-none")
    countdown();

    for (let i = 0; i < quizDetail.questions.length; i++) {
        userAns.push(null); 
    }

    questionLoader(); 
}



document.querySelector('.start-btn button').addEventListener("click", showQue);



function attempt() {
    let attemptQue = 0
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i] != null) {
            attemptQue++;
        }
    }
    return attemptQue;
}

function skipQue() {
    let skip = 0
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i] === null) {
            skip++;
        }
    }
    return skip;
}



function showAns(i) {
    userAns[currentque] = quizDetail.questions[currentque].options[i];
    $('attempted').textContent = attempt(); 
    renderOptions(); 
}

function renderOptions() {

    const optContainer = document.querySelector('.opt');
    optContainer.innerHTML = '';

    for (let i = 0; i < quizDetail.questions[currentque].options.length; i++) {
        let optionText = quizDetail.questions[currentque].options[i];
        let button = document.createElement('button');
        
        button.classList = (userAns[currentque] === optionText) 
            ? `btn bg-transparent py-2 text-light selected-option col-lg-5 col-md-9 col-12` 
            : `btn bg-transparent py-2 btn-outline-light text-light col-lg-5 col-md-9 col-12`;
            
        button.innerText = optionText;
        
        if (userAns[currentque] !== null && userAns[currentque] !== optionText) {
            button.disabled = true;
        }

        optContainer.append(button);
        
        button.addEventListener("click", () => {
            showAns(i);
        });
    }
}

function questionLoader() {

    $('que-num').innerText = currentque + 1;
    $('total-que').innerText = quizDetail.questions.length;
    $('progress').style.width = `${((currentque + 1) / quizDetail.questions.length) * 100}%`;
    $('attmp-total').innerHTML = quizDetail.questions.length;
    // $('attempted').textContent = attempt();
    if (quizDetail.questions[currentque].image == false) {
        $('dynamic-img').classList.add("d-none")
        $('dynamic-col').classList.remove("col-8")
    } else {
        $('dynamic-img').classList.remove("d-none");
        $('dynamic-col').classList.add("col-lg-8","col-12");
        document.querySelector('#que-meme').src = quizDetail.questions[currentque].image
    }

    $('que').innerHTML = quizDetail.questions[currentque].question;
    document.querySelector('.next-btn').textContent = (currentque < quizDetail.questions.length - 1) ? `Next` : `Finish`;

    renderOptions();
}

function resultMessage() {
    // let mark = showScore()
    let mark = scoreChecker().correct;
    let percentage = mark / quizDetail.questions.length * 100;

    if (percentage > 80) {
        $('meme-icon').textContent = `👑`
        $('meme-category').textContent = `Meme Legend`
        $('meme-title').textContent = `Meme Legend `
        $('meme-desc').textContent = `Absolute internet kid! You know your memes inside out.`

    } else if (percentage > 40) {
        $('meme-icon').textContent = `😎`
        $('meme-category').textContent = `Casual Fan`
        $('meme-title').textContent = `Casual Scroller`
        $('meme-desc').textContent = `Solid effort! You know your classic internet references.`
    } else {
        $('meme-icon').textContent = `😅`
        $('meme-category').textContent = `Meme Novice`
        $('meme-title').textContent = `Meme Novice`
        $('meme-desc').textContent = `Nice try! Time to catch up on your meme lore.`
    }


}

function scoreChecker() {
    let correct = 0;
    let wrong = 0;
    
    for (let i=0;i<userAns.length;i++) {
        if (userAns[i] == quizDetail.questions[i]['true-ans']) {
            correct++;
        } else {
            wrong++;
        }
    }

    $('total-score').textContent = quizDetail.questions.length;
    
    return {correct,wrong};
}

function finish() {

    let scoreObj=scoreChecker();
    resultMessage();
    $('que-sec').classList.add("d-none")
    $('quiz-score').classList.remove("d-none")
    $('result').textContent = attempt();
    $('skip').textContent = skipQue();
    $('correct-que').textContent=scoreObj.correct;
    console.log(scoreObj.correct);
    
    $('wrong-que').textContent=scoreObj.wrong;
    clearInterval(stop)
}

function nextQue() {
    if (currentque < quizDetail.questions.length - 1) {
        currentque++;
    } else {
        finish();
    }

}

function previousque() {
    if (currentque > 0) {
        currentque--;
    }
}


$('quiz-detail-home-btn').addEventListener("click",()=>{
    window.location.href='index.html'
})

document.querySelector('.next-btn').addEventListener("click", () => {
    nextQue()
    questionLoader()

});

document.querySelector('.previous-btn').addEventListener("click", () => {
    previousque()
    questionLoader()
})

document.querySelector('.play-btn').addEventListener("click", () => {
    showQue();
    questionLoader();
})

$('score-back').addEventListener("click",()=>{
    window.location.href='index.html'
})

questionLoader()


