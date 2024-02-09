// made by daniel 🔥

const laws = [
    {
        "content": "Terrorism 🎉",
        "url": "Terrorism/Terrorism-webpage.html",
    },
    {
        "content": "Data Protection Act",
        "url": "Data-Protection-Act-(2018)/index.html",
    },
    {
        "content": "Copyright Designs and Patents Act",
        "url": "CDP-1988-(Oli)/index.html",
    },
    {
        "content": "Communications Act",
        "url": "https://izakstudios.github.io/communications-act/",
    },
    {
        "content": "Regulation of Investigatory Powers Act",
        "url": "RIPA(2000)-IPA(2016)/indexnew.html",
    },
]

const loadButtons = async() => {
    const listElement = document.getElementById("list");

    laws.forEach(lawInfo => {
        const button = document.createElement("button");
        listElement.appendChild(button);

        button.textContent = lawInfo.content;

        button.addEventListener("click", () => {
            window.open(lawInfo.url);
        });
    });

    document.getElementsByClassName("container")[0].style = `height: calc(160px + 40px * ${laws.length});`
};

const onWindowLoad = async() => { loadButtons() };
window.addEventListener("load", onWindowLoad);
