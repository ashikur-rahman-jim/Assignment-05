const allBtn = document.getElementById('all-btn');
const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');

const allIssues = document.getElementById('all-issues');
const openCard = document.getElementById('open-card');
const closedCard = document.getElementById('closed-card');

// Filter Button
function filterBtn(id) {
    allBtn.classList.remove('btn-primary');
    openBtn.classList.remove('btn-primary');
    closedBtn.classList.remove('btn-primary');

    allBtn.classList.add('btn-outline');
    openBtn.classList.add('btn-outline');
    closedBtn.classList.add('btn-outline');

    const selectBtn = document.getElementById(id);
    selectBtn.classList.remove('btn-outline');
    selectBtn.classList.add('btn-primary');

    if (id === 'all-btn') {
        // console.log('all button clicked');
        openCard.classList.add('hidden');
        closedCard.classList.add('hidden');
        allIssues.classList.remove('hidden');
        loadAllIssues();
    } else if (id === 'open-btn') {
        // console.log('open button clicked');
        allIssues.classList.add('hidden');
        openCard.classList.remove('hidden');
        loadOpenIssues();
    } else if (id === 'closed-btn') {
        // console.log('closed button clicked');
        allIssues.classList.add('hidden');
        openCard.classList.add('hidden');
        closedCard.classList.remove('hidden');
        loadClosedIssues();
    }
}

// Spinner functionality
const manageSpinner = (status) => {
    if(status == true) {
        document.getElementById("spinner").classList.remove('hidden');
        document.getElementById("issues-container").classList.add('hidden');
    } else {
        document.getElementById("issues-container").classList.remove('hidden');
        document.getElementById("spinner").classList.add('hidden');
    }
}

// Load All Issues
function loadAllIssues() {
    manageSpinner(true);
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((res) => res.json())
        .then((data) => displayAllIssues(data.data))
}

// Display All Issues
function displayAllIssues(issues) {
    const allCards = document.getElementById('all-cards');
    allCards.innerHTML = "";


    for (let issue of issues) {
        // console.log(issue);
        const div = document.createElement('div');

        if (issue.status === "open") {
            let textColor = "";
            let bgColor = "";

            let labelTxtColor = "text-[#EF4444]";
            let labelBgColor = "bg-[#FEECEC]";
            let labelBorderColor = "border-[#FECACA]";
            let labelImg = "./assets/BugDroid.png";

            if (issue.priority === "high") {
                textColor = "text-[#EF4444]";
                bgColor = "bg-[#FEECEC]";
            }
            else if (issue.priority === "medium") {
                textColor = "text-[#F59E0B]";
                bgColor = "bg-[#FFF6D1]";
            }
            else if (issue.priority === "low") {
                textColor = "text-[#9CA3AF]";
                bgColor = "bg-[#EEEFF2]";
            }

            if (issue.labels[0] === "enhancement") {
                labelTxtColor = "text-[#00A96E]";
                labelBgColor = "bg-[#DEFCE8]";
                labelBorderColor = "border-[#BBF7D0]";
                labelImg = "./assets/Sparkle.png";
            }

            div.innerHTML = `
            <div onclick="loadIssuesDetails(${issue.id})" id="issue-card" class="cursor-pointer space-y-4 border-t-4 border-[#00A96E] rounded-lg p-3 shadow-md">
                <div class="flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="${textColor} ${bgColor} font-medium text-[12px] px-3 text-center rounded-full">
                        ${issue.priority.toUpperCase()}</p>
                </div>
                <div class="space-y-1">
                    <h3 class="font-semibold text-[14px] text-[#1F2937]">${issue.title}</h3>
                    <p class="text-[12px] text-[#64748B]">${issue.description}</p>
                </div>
                <div class="flex gap-5 border-b border-gray-300 pb-2">
                    <div class="flex gap-1 items-center justify-center  ${labelBgColor} border ${labelBorderColor} rounded-full">
                        <div><img src=${labelImg} alt=""></div>
                        <p class=" ${labelTxtColor}  font-medium text-[10px]">${issue.labels[0].toUpperCase()}</p>
                    </div>
                    <div class="flex gap-1 items-center justify-center bg-[#FFF8DB] border border-[#FDE68A] rounded-full">
                        <div><img src="./assets/Lifebuoy.png" alt=""></div>
                        <p class="text-[#D97706] font-medium text-[10px]">${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NOT FOUND'}</p>
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="text-[12px] text-[#64748B]">${issue.author}</p>
                    <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
                </div>
            </div>
            `;
        } else if (issue.status === "closed") {
            let textColor = "";
            let bgColor = "";

            let labelTxtColor = "text-[#EF4444]";
            let labelBgColor = "bg-[#FEECEC]";
            let labelBorderColor = "border-[#FECACA]";
            let labelImg = "./assets/BugDroid.png";

            if (issue.priority === "high") {
                textColor = "text-[#EF4444]";
                bgColor = "bg-[#FEECEC]";
            }
            else if (issue.priority === "medium") {
                textColor = "text-[#F59E0B]";
                bgColor = "bg-[#FFF6D1]";
            }
            else if (issue.priority === "low") {
                textColor = "text-[#9CA3AF]";
                bgColor = "bg-[#EEEFF2]";
            }

            if (issue.labels[0] === "enhancement") {
                labelTxtColor = "text-[#00A96E]";
                labelBgColor = "bg-[#DEFCE8]";
                labelBorderColor = "border-[#BBF7D0]";
                labelImg = "./assets/Sparkle.png"
            }

            div.innerHTML = `
            <div onclick="loadIssuesDetails(${issue.id})" id="issue-card" class="cursor-pointer space-y-4 border-t-4 border-[#A855F7] rounded-lg p-3 shadow-md">
                <div class="flex justify-between items-center">
                    <img src="./assets/Closed- Status .png" alt="">
                    <p class="${textColor} ${bgColor} font-medium text-[12px] px-3 text-center rounded-full">
                        ${issue.priority.toUpperCase()}</p>
                </div>
                <div class="space-y-1">
                    <h3 class="font-semibold text-[14px] text-[#1F2937]">${issue.title}</h3>
                    <p class="text-[12px] text-[#64748B]">${issue.description}</p>
                </div>
                <div class="flex gap-5 border-b border-gray-300 pb-2">
                    <div class="flex gap-1 items-center justify-center ${labelBgColor} border ${labelBorderColor} rounded-full">
                        <div><img src=${labelImg} alt=""></div>
                        <p class="${labelTxtColor} font-medium text-[10px]">${issue.labels[0].toUpperCase()}</p>
                    </div>
                    <div class="flex gap-1 items-center justify-center bg-[#FFF8DB] border border-[#FDE68A] rounded-full">
                        <div><img src="./assets/Lifebuoy.png" alt=""></div>
                        <p class="text-[#D97706] font-medium text-[10px]">${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NOT FOUND'}</p>
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="text-[12px] text-[#64748B]">${issue.author}</p>
                    <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
                </div>
            </div>
            `;
        }

        allCards.append(div);
    }

    manageSpinner(false);
}

// Load Open Issues
function loadOpenIssues() {
    manageSpinner(true);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((res) => res.json())
        .then((data) => displayOpenIssues(data.data))
}

// Display Open Issues
function displayOpenIssues(issues) {
    const openIssues = document.getElementById('open-issues');
    openIssues.innerHTML = "";

    for (let issue of issues) {
        // console.log(issue);

        if (issue.status === "open") {
            const div = document.createElement('div');

            let textColor = "";
            let bgColor = "";

            let labelTxtColor = "text-[#EF4444]";
            let labelBgColor = "bg-[#FEECEC]";
            let labelBorderColor = "border-[#FECACA]";
            let labelImg = "./assets/BugDroid.png";

            if (issue.priority === "high") {
                textColor = "text-[#EF4444]";
                bgColor = "bg-[#FEECEC]";
            }
            else if (issue.priority === "medium") {
                textColor = "text-[#F59E0B]";
                bgColor = "bg-[#FFF6D1]";
            }
            else if (issue.priority === "low") {
                textColor = "text-[#9CA3AF]";
                bgColor = "bg-[#EEEFF2]";
            }

            if (issue.labels[0] === "enhancement") {
                labelTxtColor = "text-[#00A96E]";
                labelBgColor = "bg-[#DEFCE8]";
                labelBorderColor = "border-[#BBF7D0]";
                labelImg = "./assets/Sparkle.png";
            }

            div.innerHTML = `
            <div onclick="loadIssuesDetails(${issue.id})" id="issue-card" class="cursor-pointer space-y-4 border-t-4 border-[#00A96E] rounded-lg p-3 shadow-md">
                <div class="flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="${textColor} ${bgColor} font-medium text-[12px] px-3 text-center rounded-full">
                        ${issue.priority.toUpperCase()}</p>
                </div>
                <div class="space-y-1">
                    <h3 class="font-semibold text-[14px] text-[#1F2937]">${issue.title}</h3>
                    <p class="text-[12px] text-[#64748B]">${issue.description}</p>
                </div>
                <div class="flex gap-5 border-b border-gray-300 pb-2">
                    <div class="flex gap-1 items-center justify-center  ${labelBgColor} border ${labelBorderColor} rounded-full">
                        <div><img src=${labelImg} alt=""></div>
                        <p class=" ${labelTxtColor}  font-medium text-[10px]">${issue.labels[0].toUpperCase()}</p>
                    </div>
                    <div class="flex gap-1 items-center justify-center bg-[#FFF8DB] border border-[#FDE68A] rounded-full">
                        <div><img src="./assets/Lifebuoy.png" alt=""></div>
                        <p class="text-[#D97706] font-medium text-[10px]">${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NOT FOUND'}</p>
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="text-[12px] text-[#64748B]">${issue.author}</p>
                    <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
                </div>
            </div>
            `;

            openIssues.append(div);
        }

    }

    manageSpinner(false);
}

// Load Closed Issues
function loadClosedIssues() {
    manageSpinner(true);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((res) => res.json())
        .then((data) => displayClosedIssues(data.data))
}

// Display Open Issues
function displayClosedIssues(issues) {
    const closedIssues = document.getElementById('closed-issues');
    closedIssues.innerHTML = "";

    for (let issue of issues) {
        // console.log(issue);

        if (issue.status === "closed") {
            const div = document.createElement('div');

            let textColor = "";
            let bgColor = "";

            let labelTxtColor = "text-[#EF4444]";
            let labelBgColor = "bg-[#FEECEC]";
            let labelBorderColor = "border-[#FECACA]";
            let labelImg = "./assets/BugDroid.png";

            if (issue.priority === "high") {
                textColor = "text-[#EF4444]";
                bgColor = "bg-[#FEECEC]";
            }
            else if (issue.priority === "medium") {
                textColor = "text-[#F59E0B]";
                bgColor = "bg-[#FFF6D1]";
            }
            else if (issue.priority === "low") {
                textColor = "text-[#9CA3AF]";
                bgColor = "bg-[#EEEFF2]";
            }

            if (issue.labels[0] === "enhancement") {
                labelTxtColor = "text-[#00A96E]";
                labelBgColor = "bg-[#DEFCE8]";
                labelBorderColor = "border-[#BBF7D0]";
                labelImg = "./assets/Sparkle.png"
            }

            div.innerHTML = `
            <div onclick="loadIssuesDetails(${issue.id})" id="issue-card" class="cursor-pointer space-y-4 border-t-4 border-[#A855F7] rounded-lg p-3 shadow-md">
                <div class="flex justify-between items-center">
                    <img src="./assets/Closed- Status .png" alt="">
                    <p class="${textColor} ${bgColor} font-medium text-[12px] px-3 text-center rounded-full">
                        ${issue.priority.toUpperCase()}</p>
                </div>
                <div class="space-y-1">
                    <h3 class="font-semibold text-[14px] text-[#1F2937]">${issue.title}</h3>
                    <p class="text-[12px] text-[#64748B]">${issue.description}</p>
                </div>
                <div class="flex gap-5 border-b border-gray-300 pb-2">
                    <div class="flex gap-1 items-center justify-center ${labelBgColor} border ${labelBorderColor} rounded-full">
                        <div><img src=${labelImg} alt=""></div>
                        <p class="${labelTxtColor} font-medium text-[10px]">${issue.labels[0].toUpperCase()}</p>
                    </div>
                    <div class="flex gap-1 items-center justify-center bg-[#FFF8DB] border border-[#FDE68A] rounded-full">
                        <div><img src="./assets/Lifebuoy.png" alt=""></div>
                        <p class="text-[#D97706] font-medium text-[10px]">${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NOT FOUND'}</p>
                    </div>
                </div>
                <div class="space-y-1">
                    <p class="text-[12px] text-[#64748B]">${issue.author}</p>
                    <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
                </div>
            </div>
            `;

            closedIssues.append(div);
        }

    }

    manageSpinner(false);
}

// Load Issues Details
function loadIssuesDetails(id) {
    manageSpinner(true);

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
        .then((res) => res.json())
        .then((data) => displayIssuesDetails(data.data))
}

function displayIssuesDetails(details) {
    // console.log(details);
    const detailsCard = document.getElementById('details-card');
    detailsCard.innerHTML = `
    <h2 class="font-bold text-2xl text-[#1F2937]">${details.title}</h2>
                    
    <div class="flex items-center mt-4">
        <p class="font-medium text-[12px] bg-[#00A96E] px-2 rounded-full text-white text-center">${details.status}</p>
        <p class="text-[12px] text-[#64748B]"> - Opened by ${details.author} - ${details.createdAt}</p>
        
    </div>
    <div class="flex items-center gap-1 my-6">
        <div class="flex items-center px-1 bg-[#FEECEC] border border-[#FECACA] rounded-full text-[12px]">
            <img src="./assets/BugDroid.png" alt="">
            <p class="text-[#EF4444]">${details.labels[0].toUpperCase()}</p>
        </div>
        <div class="flex items-center px-1 bg-[#FEECEC] border border-[#FECACA] rounded-full text-[12px]">
            <img src="./assets/Lifebuoy.png" alt="">
            <p>${details.labels[1] ? details.labels[1].toUpperCase() : "NOT FOUND"}</p>
        </div>
    </div>
    <p class="text-[16px] text-[#64748B] my-6">${details.description}</p>
    <div class="flex items-center gap-20">
        <div>
            <p class="text-[16px] text-[#64748B]">Assignee:</p>
            <p class="text-[16px] text-[#1F2937] font-semibold">${details.assignee}</p>
        </div>
        <div>
            <p class="text-[16px] text-[#64748B]">Priority:</p>
            <p class="bg-[#EF4444] text-[12px] font-medium text-white text-center rounded-full">${details.priority.toUpperCase()}</p>
        </div>
    </div>
    `;
    document.getElementById('my_modal_5').showModal();

    manageSpinner(false);
}

loadAllIssues();

document.getElementById('issue-btn').addEventListener("click", () => {
    manageSpinner(true);
    const input = document.getElementById('input-search');
    const searchValue = input.value.trim().toLocaleLowerCase();
    // console.log(searchValue);
    
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
        const allIssue = data.data;
        // console.log(allIssue);
        
        const filterIssues = allIssue.filter((word) => word.title.toLocaleLowerCase().includes(searchValue))
        displayAllIssues(filterIssues);

        input.value = "";

        manageSpinner(false);
    });
})