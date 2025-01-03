document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const modalsSection = document.getElementById('modals');

    function updateThemeIcon(theme) {
        themeSwitch.checked = theme === 'light';
    }

    function createModal(projectId) {
        const data = projectData[projectId];
        if (!data) return '';

        let tasksHTML = '';
        data.tasks.forEach(task => {
            const imagesHTML = task.images ? task.images.map(img =>
                `<img src="img/${img}" class="task-img" alt="${task.title}">`
            ).join('') : '';

            const descriptionHTML = task.description.map(desc =>
                `<li>${desc}</li>`
            ).join('');

            tasksHTML += `
                <div class="task-container task-flex-container">
                    <div>
                        <h4>${task.title}</h4>
                        ${task.subtitle ? `<span>${task.subtitle}</span>` : ''}
                        <ul>${descriptionHTML}</ul>
                    </div>
                    <div class="task-img-container">
                        ${imagesHTML}
                    </div>
                </div>
            `;
        });

        return `
            <div id="${projectId}Modal" class="modal">
                <div class="modal-content">
                    <div class="close-box">
                        <span class="close" onclick="closeModal('${projectId}')">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="project-title">
                            <img src="img/${projectId}300.png" class="modal-image">
                            <div class="project-title-content">
                                <h2 class="modal-title">${data.title}</h2>
                                <p>${data.subtitle}</p>
                                <p>${data.description}</p>
                                ${data.link ? `<a href="${data.link}" target="_blank">기획서로 이동</a>` : ''}
                            </div>
                        </div>
                        <hr>
                        <div class="modal-section">
                            <h3>프로젝트 기간</h3>
                            <p>${data.period}</p>
                        </div>
                        <hr>
                        <div class="modal-section">
                            <h3>개발 환경</h3>
                            <ul>
                                ${data.environment.map(env => `<li>${env}</li>`).join('')}
                            </ul>
                        </div>
                        <hr>
                        <div class="modal-section">
                            <h3>담당업무 및 프로젝트 소개</h3>
                            ${tasksHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function openModal(projectId) {
        const modal = document.getElementById(projectId + 'Modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(projectId) {
        const modal = document.getElementById(projectId + 'Modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    themeSwitch.addEventListener('change', function() {
        const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
    updateThemeIcon(savedTheme);

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    Object.keys(projectData).forEach(projectId => {
        modalsSection.innerHTML += createModal(projectId);
    });

    window.openModal = openModal;
    window.closeModal = closeModal;
});

const projectData = {
    efthelper: {
        title: "EFT HELPER 소개",
        subtitle: "Escape From Tarkov 도우미 서비스",
        description: "Escape From Tarkov Helper 이 프로젝트는 '이스케이프 프롬 타르코프 (Escape from Tarkov)' 게임 정보를 제공하는 웹 사이트입니다. 이 웹 사이트는 게임에 관한 탄약, 방탄, 헬멧, 마켓 정보 및 게임 맵 정보를 제공합니다.",
        period: "2023.10 - 2023.11",
        environment: [
            "Web Frontend(HTML5, CSS3, JS, REACT)",
            "Web Backend(Python, Flask, Swagger, Oracle)",
            "Versioning(Git, Github)"
        ],
        tasks: [
            {
                title: "카테고리, 검색",
                description: [
                    "사용자는 Ammo, Armor, Headwear, Market, Map의 기능을 사용할 수 있습니다.",
                    "그중 Ammo에관한 부분이며 각종 탄약에대한 종류를 확인할 수 있습니다.",
                    "검색기능으로 탄 종류를 입력하면 해당값만 불러올 수 있습니다."
                ],
                images: ["kategorie500.png", "kategorie-2-500.png"]
            },
            {
                title: "탄약확인",
                description: [
                    "탄 목록에서 선택한 탄의 정보를 불러옵니다.",
                    "이미지, 종류, 탄약이름, 데미지, 탄속, 반동, 정밀도, 관통수치를 나타냅니다.",
                    "타르코프를 플레이하는 유저들이 가장 많이 확인하는부분이며 보기편하게 색상을 입혀두었습니다."
                ],
                images: ["ammo500.png"]
            },
            {
                title: "방탄복",
                description: [
                    "카테고리에서 Armor로 들어갈때 보여지는 화면입니다.",
                    "탄약과 마찬가지로 방탄복에대한 정보를 불러옵니다."
                ],
                images: ["armor500.png"]
            },
            {
                title: "방탄헬멧",
                description: [
                    "카테고리에서 Headwear로 들어갈때 보여지는 화면입니다.",
                    "방탄복과 마찬가지로 방탄헬멧에대한 정보를 불러옵니다."
                ],
                images: ["headwear500.png"]
            },
            {
                title: "마켓",
                description: [
                    "카테고리에서 market에 들어갈때 보여지는 화면입니다.",
                    "실제 게임속에서 마켓에 올라와있는 정보를 불러옵니다.",
                    "해외 사이트 tarkov-market에서 제공하는 api를 이용하여 데이터를 가져왔습니다."
                ],
                images: ["market500.png"]
            },
            {
                title: "지도",
                description: [
                    "카테고리에서 map에 들어갈때 보여지는 화면입니다.",
                    "현재까지 나온 모든 맵에대한 정보를 나타내는 페이지입니다.",
                    "기본적으로 해당맵에대한 배경화면이 나오며 클릭시 그 맵에대한 자세한 정보가 나타납니다.",
                    "사이트 내에 모든 api와 지도의 저작권에대한 표시를 해두었습니다."
                ],
                images: ["map500.png", "map-2-500.png"]
            }
        ]
    },
    blueocean: {
        title: "BLUEOCEAN 소개",
        subtitle: "주식정보 및 주식종목 추천 웹사이트",
        description: "딥러닝을 통한 주식종목 추천 사이트입니다. 이 웹사이트는 프로젝트이름인 블루오션에 맞게 일반 주식투자자들이 먼저 투자하기 좋도록 분석하여 예측하고 알려주는 방식을 목표로 만들었습니다.",
        link: "https://drive.google.com/drive/folders/1SqSiXyLJsZjynxjxNv6VglFPq7ctKm3u",
        period: "2023.7 - 2023.9",
        environment: [
            "Web Frontend(HTML5, CSS3, JS, Jquery, Bootstrap)",
            "Web Backend(Java, Spring, Mybatis, jsp, Python, Flask, Swagger, Oracle, Numpy, Pandas)",
            "Versioning(Git, Github)"
        ],
        tasks: [
            {
                title: "상세페이지 제작",
                subtitle: "차트",
                description: [
                    "사용자가 선택한 종목의 가격 변동을 보여주는 차트입니다.",
                    "'lightweight-charts' 라이브러리를 활용하여 구현되었으며, BlueOceans API에서 제공하는 데이터로 차트가 생성됩니다.",
                    "기본적으로 1개월 기준의 차트가 표시되며, 사용자는 버튼을 사용하여 차트의 단위를 변경할 수 있습니다.",
                    "사용자는 차트를 상하좌우로 이동하여 특정 기간의 가격 변동을 자세히 살펴볼 수 있습니다."
                ],
                images: ["detail500.png"]
            },
            {
                title: "주식정보",
                description: [
                    "BlueOceans API에서 해당 종목의 주식 정보를 가져와서 표시합니다.",
                    "주식 정보에는 현재가, 전일대비, 등락률, 거래량, 전일가, 시가, 고가, 저가 등이 포함됩니다."
                ]
            },
            {
                title: "관심페이지 제작",
                subtitle: "차트",
                description: [
                    "관심페이지에서도 상세 페이지와 동일한 라이브러리를 사용하여 종목의 가격 변동을 시각화하는 차트를 제공합니다.",
                    "사용자는 종목 이름을 클릭하여 해당 종목의 상세 페이지로 이동할 수 있습니다."
                ],
                images: ["favorite500.png"]
            },
            {
                title: "관리자페이지 제작",
                subtitle: "회원관리",
                description: [
                    "관리자는 현재 웹 페이지에 가입된 회원들의 정보를 확인할 수 있습니다.",
                    "아이디를 통해 특정 회원을 검색할 수 있습니다.",
                    "회원의 탈퇴 여부를 확인하고 조정할 수 있습니다.",
                    "탈퇴한 회원의 정보도 관리자가 확인할 수 있습니다."
                ],
                images: ["user500.png", "log500.png"]
            }
        ]
    },
    pilldex: {
        title: "PILLDEX 소개",
        subtitle: "약정보 찾기 및 근처 약국, 병원찾기 서비스",
        description: "약에대한 형태로 약의 정보를 찾을수있도록 도와드리는 사이트입니다. 이 웹사이트는 프로젝트이름인 PILLDEX(알약도감)에 맞게 약의 형태에대해 해당하는 약이 무엇이고 각종 약에대한 성분과 주의사항, 집주변 약국과 병원까지 찾아주는 기능을 합니다.",
        period: "2023.4 - 2023.6",
        environment: [
            "Web Frontend(HTML5, CSS3, JS, Jquery, Bootstrap)",
            "Web Backend(Java, Spring, Mybatis, jsp, Oracle)",
            "Versioning(Git, Github)"
        ],
        tasks: [
            {
                title: "돋보기페이지 제작",
                subtitle: "검색",
                description: [
                    "약의 이름으로 검색하면 해당 키워드가 들어간 약 목록을 불러옵니다.",
                    "카테고리화된 검색 결과를 표시하여 사용자가 관심 있는 약을 쉽게 찾을 수 있도록 합니다.",
                    "약의 모양으로 검색할 때는 해당 약의 형태, 색상, 제형, 분할선, 식별문자를 기준으로 약 목록을 불러옵니다.",
                    "검색 결과는 효과적인 약품 검색을 지원하기 위해 정확한 결과를 제공합니다."
                ],
                images: ["scale500.png"]
            },
            {
                title: "상세페이지 제작",
                subtitle: "약정보",
                description: [
                    "외형정보, 저장방법, 효능효과, 용법용량, 사용 시 주의사항 등은 공공데이터포털에서 제공하는 API를 기반으로 표시됩니다.",
                    "이러한 정보는 사용자에게 정확하고 신뢰할 수 있는 약물 정보를 제공하기 위해 공공 데이터를 활용합니다.",
                    "사용자는 해당 정보를 확인하여 약물에 대한 이해를 높이고, 안전한 복용을 할 수 있습니다."
                ],
                images: ["pilldex-favorite500.png"]
            },
            {
                title: "API 수집 및 연동",
                description: [
                    "공공데이터포털에서 제공하는 약 이름에 대한 형태를 제공하는 API 정보를 수집하였습니다.",
                    "공공데이터포털에서 제공하는 약 이름에 대한 상세정보를 제공하는 API 정보를 수집하였습니다.",
                    "두가지의 API를 불러와 두개의 DB테이블에 저장하였습니다.",
                    "먼저 약 형태에 대해 조건을 검색하면 나오는 약 이름을 골라내고 그중 원하는 약을 골라 상세페이지로 이동하면 해당하는 약의 상세정보를 얻어오도록 연결하였습니다."
                ]
            }
        ]
    },
    boardify: {
       title: "Boardify",
       subtitle: "협업 프로젝트 관리 도구",
       description: "Vue.js와 Supabase 기반의 현대적인 협업 프로젝트 관리 웹 애플리케이션이며 트렐로를 참고하여 만들어봤습니다.",
       period: "2023.10 - 2023.11",
       environment: [
           "Web Frontend(Vue.js, Nuxt.js, Vuex)",
           "Backend(Supabase, Supabase Authentication)",
           "Versioning(Git, Github)"
       ],
       tasks: [
           {
               title: "팀 관리",
               description: [
                   "사용자는 우선 회원가입을 하며 팀 선택을 할 수 있고, 팀이 없어서 하지 못했다 하더라도 팀을 생성하거나 마이페이지에서 팀을 다시 선택할 수 있습니다.",
                   "사용자는 팀을 생성하고 비밀번호를 설정할 수 있습니다.",
                   "같은 팀으로 지정된 사용자들끼리만 같은 카드와 내용들이 보이며, 다른 팀은 해당 팀의 데이터를 확인할 수 없습니다."
               ],
               images: ["team.png"]
           },
           {
               title: "카드 생성",
               description: [
                   "팀 구성원들은 작업을 나타내는 카드를 만들고, 그룹과 세부 정보를 추가할 수 있습니다. 각 카드에는 우선순위, 태그, 담당자 등 다양한 메타데이터를 포함할 수 있어 효과적인 작업 관리가 가능합니다.",
                   "카드 생성은 물론 카드 제목 수정과 카드 삭제도 가능합니다."
               ],
               images: ["card-add.png"]
           },
           {
               title: "드래그 앤 드롭",
               description: [
                   "카드를 쉽게 드래그하여 다른 섹션으로 이동할 수 있으며, 데이터베이스에 실시간으로 반영됩니다. 부드럽고 즉각적인 상태 동기화로 사용자 경험을 극대화합니다.",
                   "카드뿐만 아니라 카드 내에 있는 내용도 드래그 앤 드롭이 가능합니다."
               ],
               images: ["drag.png", "drop.png"]
           },
           {
               title: "협업",
               description: [
                   "팀 구성원들이 함께 카드를 수정하고 진행 상황을 업데이트할 수 있습니다. 댓글 기능을 통해 원활한 팀 커뮤니케이션을 지원합니다.",
                   "카드 생성일, 댓글 생성일 등도 나타내며, 수정 및 삭제 또한 가능합니다."
               ],
               images: ["cooperation.png"]
           },
           {
               title: "반응형 디자인",
               description: [
                   "데스크톱부터 모바일까지 다양한 기기에 최적화되어 있습니다. Mobile-First 접근 방식을 통해 모든 디바이스에서 일관되고 직관적인 사용자 인터페이스를 제공합니다."
               ],
               images: ["responsive.png"]
           }
       ]
    }
};