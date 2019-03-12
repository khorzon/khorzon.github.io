let launchButton = document.getElementById('oblicz');
launchButton.addEventListener('click', function () {
    let it = 1;
    while ((document.getElementById(`uczen${it}`)) !== null) {
        let student = document.getElementById(`uczen${it}`);
        let studentName = student.firstElementChild;
        let avGradeField = student.lastElementChild;
        let additionalLessonsArray = student.querySelector('.zajecia-dodatkowe').value.split(',');
        let gradesArray = [];
        let subjectArray = []
        let accumulateArray = [subjectArray, gradesArray];
        let gradesCollection = student.querySelectorAll('input[type="number"]');
        gradesCollection.forEach(function (element) {
            gradesArray.push(parseFloat(element.value));
            subjectArray.push(element.className);
        })
        console.log(studentName.innerHTML);
        let averageGrade = (countAverageGrade(accumulateArray, additionalLessonsArray)).toFixed(2);
        if (averageGrade >= 4.75) {
            studentName.classList.add('green');
        }
        for (let i = 0; i < gradesArray.length; i++) {
            if (gradesArray[i] === 1) {
                studentName.classList.add('red');
            }
        }
        avGradeField.innerText = averageGrade;
        it++;
    }
})
function countAverageGrade(grades, additionals) {
    console.log(grades[1]);
    additionals.forEach(function (element) {
        for (let i = 0; i < grades[0].length; i++) {
            if ((element === grades[0][i]) && grades[1][i] < 6) {
                grades[1][i] += 0.5;
            }
        }
    })
    let avGrade = 0;
    grades[1].forEach(function (element) { avGrade += element })
    console.log(grades[1]);
    return (avGrade / grades[0].length);
};

