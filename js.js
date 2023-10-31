let govname,capital,language,population,area,unit,system,leader;
let govDisp = document.querySelector('.main');
let govCount = 3;
let allGov =  {
    0:{
        govname: 'russia',
        capital: 'moscov',
        language: 'ru',
        population: 250,
        area: 250,
        unit:'ruble',
        system:'communism',
        leader:'putin',
    },
    1:{
        govname: 'turkey',
        capital: 'ankara',
        language: 'tr',
        population: 50,
        area: 50,
        unit:'lira',
        system:'democracy',
        leader:'erdogan',
    },
    2:{
        govname: 'germany',
        capital: 'berlin',
        language: 'gr',
        population: 250,
        area: 250,
        unit:'pount',
        system:'democracy',
        leader:'kto-to_tam',
    },
}
function dispCleaner(){
    while(govDisp.firstChild){
        govDisp.removeChild(govDisp.lastChild);
    }
}

function addGov(){
    allGov[govCount] = {
        govname,
        capital,
        language,
        population,
        area,
        unit,
        system,
        leader,
    }
    allGov[govCount].govname = prompt('name')
    allGov[govCount].capital = prompt("Введите столицу:");
    allGov[govCount].language = prompt("Введите государственный язык:");
    allGov[govCount].population = parseInt(prompt("Введите население:"));
    allGov[govCount].area = parseInt(prompt("Введите площадь территории:"));
    allGov[govCount].unit = prompt("Введите денежную единицу:");
    allGov[govCount].system = prompt("Введите государственный строй:");
    allGov[govCount].leader = prompt("Введите имя главы государства:");
    if(allGov[govCount].govname === null){
        delete allGov[govCount];
    }
    govCount++;
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
        switch(userChoise){
            case 'govname':
                choise[userChoise] = prompt('govname');
                break;

            case 'capital':
                choise[userChoise] = prompt('capital');
                break;

            case 'language':
                choise[userChoise] = prompt('language');
                break;

            case 'population':
                choise[userChoise] = prompt('population');
                break;

            case 'area':
                choise[userChoise] = prompt('area');
                break;

            case 'unit':
                choise[userChoise] = prompt('unit');
                break;

            case 'system':
                choise[userChoise] = prompt('system');
                break;

            case 'leader':
                choise[userChoise] = prompt('leader');
                break;
            case 'exit':
                loop = false;
                break;
            default:
                alert("wrong do it again");
                break;
        }
    }
}

function findGov(){
    let ans = [];
    let userChoise = prompt('find by : govname, capital, language, population, area, unit, system, leader');
    let userPrmopt = prompt('');
    for(let key in allGov){
        if(allGov[key][userChoise] == userPrmopt){
            ans.push(allGov[key]);
        }
    }
    return ans;
}
