let launchButton = document.getElementById('oblicz');
launchButton.addEventListener('click', function () {
    let iterator = 1;
    nameArray = [];
    hoursArray = [];
    let bestArray = [nameArray, hoursArray];
    while (document.getElementById(`pracownik${iterator}`) !== null) {
        let worker = document.getElementById(`pracownik${iterator}`);
        let workerName = worker.children[0].innerHTML;
        let monthWork = 160;
        let workTime = parseFloat(worker.children[1].value);
        let workRate = parseFloat(worker.children[2].value);
        let spanSallary = worker.children[3];
        if (workTime < 100) {
            worker.classList.add('red');
        }
        function countSallary() {
            if (workTime < 160) {
                return `${workTime * workRate} zł`;
            }
            else {
                return `${(monthWork * workRate) + ((workTime - monthWork) * 2 * workRate)} zł`;
            }
        }
        if (nameArray.length < 3) {
            nameArray.push(workerName);
            hoursArray.push(workTime);
        }
        else {
            for (let i = 0; i < 3; i++) {
                if (workTime > hoursArray[0]) {
                    nameArray.unshift(workerName);
                    hoursArray.unshift(workTime);
                    nameArray.pop();
                    hoursArray.pop();
                }
            }
        }
        spanSallary.innerText = countSallary();
        iterator++;
    }
    bestWorkers(bestArray);
})
function bestWorkers(arrayInArray) {
    let spanParent = document.getElementById('najlepsi-pracownicy').parentElement;
    for (let i = 0; i < 3; i++) {
        console.log(arrayInArray[0][i]);
        console.log(arrayInArray[1][i]);
       let newBestWorker = document.createElement('h4');
       newBestWorker.innerHTML = `${arrayInArray[0][i]}, przepracował łącznie: ${arrayInArray[1][i]} godzin`;
       spanParent.append(newBestWorker);
    }
}


