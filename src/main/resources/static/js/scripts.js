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

//    const githubModal = document.getElementById("githubModal");
//    const openGithubBtn = document.getElementById("openGithubModalBtn");
//    const closeGithubBtn = document.getElementById("closeGithubModalBtn");
//
//    openGithubBtn.addEventListener("click", function() {
//        githubModal.style.display = "block";
//    });
//
//    closeGithubBtn.addEventListener("click", function() {
//        githubModal.style.display = "none";
//    });
//
//    window.addEventListener("click", function(event) {
//        if (event.target === githubModal) {
//            githubModal.style.display = "none";
//        }
//    });
//
//    const notionModal = document.getElementById("notionModal");
//    const openNotionBtn = document.getElementById("openNotionModalBtn");
//    const closeNotionBtn = document.getElementById("closeNotionModalBtn");
//
//    openNotionBtn.addEventListener("click", function() {
//        notionModal.style.display = "block";
//    });
//
//    closeNotionBtn.addEventListener("click", function() {
//        notionModal.style.display = "none";
//    });
//
//    window.addEventListener("click", function(event) {
//        if (event.target === notionModal) {
//            notionModal.style.display = "none";
//        }
//    });
//    const blogModal = document.getElementById("blogModal");
//    const openBlogBtn = document.getElementById("openBlogModalBtn");
//    const closeBlogBtn = document.getElementById("closeBlogModalBtn");
//
//    openBlogBtn.addEventListener("click", function() {
//        blogModal.style.display = "block";
//    });
//
//    closeBlogBtn.addEventListener("click", function() {
//        blogModal.style.display = "none";
//    });
//
//    window.addEventListener("click", function(event) {
//        if (event.target === blogModal) {
//            blogModal.style.display = "none";
//        }
//    });

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

});