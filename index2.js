//!!!REMEMBER TO CHECK WHICH STYLESHEET YOU HAVE LINKED IN HTML!!!

const questions = document.querySelectorAll(".question");
const question1 = document.getElementById("question1");

// question1.focus();

const expandButton = document.getElementById("expand");
const collapseButton = document.getElementById("collapse");



questions.forEach(function(question, index) {
    question.addEventListener("click", function() {
        let shouldShow = event.target.nextElementSibling.style.display === "none";
        toggleAnswer(event.target, shouldShow);//why
    });
    question.addEventListener("keydown", function(event) {
        
//         if(event.key === "Enter") {
//             event.preventDefault();
//             let shouldShow = event.target.nextElementSibling.style.display === "none";
//             toggleAnswer(event.target, shouldShow);
//         }
        if(event.key === "ArrowUp") {
            event.preventDefault();
            if(index > 0) {
                questions[index - 1].focus();
            }
        }
        if(event.key === "ArrowDown") {
            event.preventDefault();
            if(index < questions.length - 1) {
                questions[index + 1].focus();
            }
        }
    });
});

expandButton.addEventListener("click", expandAll);
collapseButton.addEventListener("click", collapseAll);

function expandAll() {
    questions.forEach(function(element) {
        toggleAnswer(element, true);
    });
}

function collapseAll() {
    questions.forEach(function(question) {
        toggleAnswer(question, false);
    });
}

function toggleAnswer(questionElement, show) {
    let answer = questionElement.nextElementSibling;
        let icon = questionElement.querySelector(".icon");
        if (show) {
            answer.style.display ="block";
            icon.src = "icon-minus.svg";
        }else {
            answer.style.display = "none";
            icon.src = "icon-plus.svg";
        }
};





