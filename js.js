let govname,capital,language,population,area,unit,system,leader;
let govDisp = document.querySelector('.main');
let allGov =  [];
    
function dispCleaner(){
    while(govDisp.firstChild){
        govDisp.removeChild(govDisp.lastChild);
    }
}

function addGov(){
    allGov.push({
        govname : prompt('name'),
        capital : prompt("Введите столицу:"),
        language : prompt("Введите государственный язык:"),
        population : parseInt(prompt("Введите население:")),
        area : parseInt(prompt("Введите площадь территории:")),
        unit : prompt("Введите денежную единицу:"),
        system : prompt("Введите государственный строй:"),
        leader : prompt("Введите имя главы государства:"),
    })
    if(allGov[allGov.length - 1].govname === '' || allGov[allGov.length - 1].govname === null){
        delete allGov[allGov.length - 1];
    }
}

function viewGov(){
    dispCleaner();
    let choise = prompt('view : all , one');
    switch(choise){
        case 'all':
            for(let key in allGov){
                    let newEll = document.createElement('div');
                    newEll.innerHTML = allGov[key].govname;
                    govDisp.appendChild(newEll);
                }
            break;
        case 'one':
            let answer = findGov();
            for(let i = 0 ; i < answer.length;i++){
                for(let key in answer[i]){
                    let newEll = document.createElement('div');
                    newEll.innerHTML = key +': '+ answer[i][key];
                    govDisp.appendChild(newEll);
                } 
                let newEll = document.createElement('div');
                newEll.innerHTML = '---------------------------------';
                govDisp.appendChild(newEll);
            }
            break;
        default:
            alert("wrong do it again");
            break;
    }
}

function editGov(){
    dispCleaner();
    let answer = findGov();
    let choise;
    if(answer.length>=2){
        choise = prompt('choose one: name')
        for(let i = 0 ; i < answer.length ; i++){
            for(let key in answer[i]){
                if(answer[i][key] === choise){
                    choise = answer[i];
                }
            } 
        }
    }else{
        choise = answer[0]; 
    }
    let loop = true
    while(loop){
        let userChoise = prompt('change : govname, capital, language, population, area, unit, system, leader, exit');
        if(userChoise == 'change' || userChoise == 'govname' || userChoise == 'capital' || userChoise == ' language' || userChoise == 'area' || userChoise == 'unit' || userChoise == 'system' || userChoise == 'leader'){
            choise[userChoise] = prompt('');
        }
        else if(userChoise == 'exit'){
            loop = false;
        }
        else{
            alert("wrong do it again");
        }
    }
}

function findGov(){
    let ans = [];
    let userChoise = prompt('find by : govname, capital, language, population, area, unit, system, leader');
    let userPrmopt = prompt('');
    for(let key in allGov){
        if(allGov[key][userChoise] == userPrmopt) ans.push(allGov[key])
    }
    return ans;
} 