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

// Load All Issues
function loadAllIssues() {
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
            <div id="issue-card" class="space-y-4 border-t-4 border-[#00A96E] rounded-lg p-3 shadow-md">
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
            <div id="issue-card" class="space-y-4 border-t-4 border-[#A855F7] rounded-lg p-3 shadow-md">
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
}

// Load Open Issues
function loadOpenIssues() {
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
            <div id="issue-card" class="space-y-4 border-t-4 border-[#00A96E] rounded-lg p-3 shadow-md">
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
}

// Load Closed Issues
function loadClosedIssues() {
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
            <div id="issue-card" class="space-y-4 border-t-4 border-[#A855F7] rounded-lg p-3 shadow-md">
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
}

// loadClosedIssues();

// loadOpenIssues();

loadAllIssues();