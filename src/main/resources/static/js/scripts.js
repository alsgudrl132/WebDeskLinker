document.addEventListener("DOMContentLoaded", function() {
    const aboutModal = document.getElementById("aboutModal");
    const openAboutBtn = document.getElementById("openAboutModalBtn");
    const closeAboutBtn = document.getElementById("closeAboutModalBtn");

    openAboutBtn.addEventListener("click", function() {
        aboutModal.style.display = "block";
    });

    closeAboutBtn.addEventListener("click", function() {
        aboutModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none";
        }
    });

    const projectsModal = document.getElementById("projectsModal");
    const openProjectsBtn = document.getElementById("openProjectsModalBtn");
    const closeProjectsBtn = document.getElementById("closeProjectsModalBtn");

    openProjectsBtn.addEventListener("click", function() {
        projectsModal.style.display = "block";
    });

    closeProjectsBtn.addEventListener("click", function() {
        projectsModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === projectsModal) {
            projectsModal.style.display = "none";
        }
    });

    const githubLink = "https://github.com/alsgudrl132";
    const notionLink = "https://imminent-friction-a4d.notion.site/b689df9e5a454f50861de9fa9f02a55b?pvs=4";

    function hrefGithubLink() {
        window.open(githubLink);
    }
    function hrefNotionLink() {
        window.open(notionLink);
    }

    document.querySelector("#openGithubModalBtn").addEventListener("click",() => hrefGithubLink());
    document.querySelector("#openNotionModalBtn").addEventListener("click",() => hrefNotionLink());

    //새로운 모달

    const eftHelperModal = document.getElementById("eftHelperModal");
    const openEftHelperBtn = document.getElementById("openEftHelperModalBtn");
    const closeEftHelperBtn = document.getElementById("closeEftHelperModalBtn");

    openEftHelperBtn.addEventListener("click", function() {
            console.log("eftHelperModal");
            eftHelperModal.style.display = "block";
        });

        closeEftHelperBtn.addEventListener("click", function() {
            eftHelperModal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === eftHelperModal) {
                eftHelperModal.style.display = "none";
            }
        });

    const blueOceanModal = document.getElementById("blueOceanModal");
    const openBlueOceanBtn = document.getElementById("openBlueOceanModalBtn");
    const closeBlueOceanBtn = document.getElementById("closeBlueOceanModalBtn");

    openBlueOceanBtn.addEventListener("click", function() {
        console.log("blueOceanModal");
        blueOceanModal.style.display = "block";
    });

    closeBlueOceanBtn.addEventListener("click", function() {
        blueOceanModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === blueOceanModal) {
            blueOceanModal.style.display = "none";
        }
    });

    const pillDexModal = document.getElementById("pillDexModal");
    const openPillDexBtn = document.getElementById("openPillDexModalBtn");
    const closePillDexBtn = document.getElementById("closePillDexModalBtn");

    openPillDexBtn.addEventListener("click", function() {
        console.log("pillDexModal");
        pillDexModal.style.display = "block";
    });

    closePillDexBtn.addEventListener("click", function() {
        pillDexModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === pillDexModal) {
            pillDexModal.style.display = "none";
        }
    });

//    const webDeskLinkerModal = document.getElementById("webDeskLinkerModal");
//    const openWebDeskLinkerBtn = document.getElementById("openWebDeskLinkerModalBtn");
//    const closeWebDeskLinkerBtn = document.getElementById("closeWebDeskLinkerModalBtn");
//
//    openWebDeskLinkerBtn.addEventListener("click", function() {
//        console.log("webDeskLinkerModal");
//        webDeskLinkerModal.style.display = "block";
//    });
//
//    closeWebDeskLinkerBtn.addEventListener("click", function() {
//        webDeskLinkerModal.style.display = "none";
//    });
//
//    window.addEventListener("click", function(event) {
//        if (event.target === webDeskLinkerModal) {
//            webDeskLinkerModal.style.display = "none";
//        }
//    });

});