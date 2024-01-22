export{loadProjectBar};
let todayList = localStorage.getItem("today") ? JSON.parse(localStorage.getItem("today")) : [];
let weekList = localStorage.getItem("week") ? JSON.parse(localStorage.getItem("week")) : [];
let choice = "today"

function loadProjectBar() {
    displayProjects();
    const addProj = document.querySelector(".button-add-project");
    const popUp = document.querySelector(".add-project-popup");
    const adding = document.querySelector(".button-add-project-popup");
    const cancel = document.querySelector(".button-cancel-project-popup");
    const week = document.querySelector(".week");
    const today = document.querySelector(".today");
    const weekBtn = document.querySelector(".week-button");
    const todayBtn = document.querySelector(".today-button");

    todayBtn.addEventListener("click", () => {
        week.classList.remove("active");
        today.classList.add("active");
        choice = "today";
        loadProjectBar();
    })

    weekBtn.addEventListener("click", () => {
        today.classList.remove("active");
        week.classList.add("active");
        choice = "week";
        loadProjectBar();
    })

    addProj.addEventListener("click", () => {
        addProj.style.display = "none";
        popUp.style.display = "block";
    })

    cancel.addEventListener("click", () => {
        addProj.style.display = "block";
        popUp.style.display = "none";
    })

    adding.addEventListener("click", () => {
        //retrieving inputs
        let choiceList = todayList;
        if (choice == "week") {
            choiceList = weekList;
        }

        var inputVal = document.querySelector(".input-add-project-popup").value;
        if (inputVal === "") {
            return
        }
        document.querySelector(".input-add-project-popup").value = "";
        //creating new project
        createProject(inputVal, choiceList);
        //display project
        displayProjects();
    });

    let deleteBtn = document.querySelectorAll(".delProj");
    deleteBtn.forEach((db,i) => {
        db.addEventListener("click", () => {deleteProject(i)});
    });

}


function deleteProject(i) {
    let choiceList = todayList;
    if (choice == "week") {
        choiceList = weekList;
    }
    choiceList.splice(i, 1);
    localStorage.setItem(choice, JSON.stringify(choiceList));
    location.reload();
}

export function displayProjects() {
    let txt = "";
    let choiceList = todayList;
    if (choice == "week") {
        choiceList = weekList;
    }
    for (let i =0; i < choiceList.length; i++) {
        txt += `<div class="projstyle"> 
                    <button class="newProj">${choiceList[i]}</button>
                    <button class="delProj">X</button>
                </div>`;
    }
    document.querySelector(".projects-list").innerHTML = txt;
}

function createProject(project, choiceList) {
    choiceList.push(project);
    localStorage.setItem(choice, JSON.stringify(choiceList));
    location.reload();
}