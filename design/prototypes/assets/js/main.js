document.addEventListener('DOMContentLoaded', () => {
    const showcaseContainer = document.getElementById('prototype-showcase');

    // --- Logic for index.html tabbed browser mock ---
    // This assumes each prototype is wrapped in a structure that can have its own tabs
    // For a simpler index.html where each prototype is just embedded sequentially,
    // we might not need complex JS for tab switching within each mock.
    // The current index.html will show all prototypes sequentially, each in its own browser mock.

    // If we were to make the tabs in the *main* index.html switchable (e.g., one big browser mock):
    const mainBrowserTabs = document.querySelectorAll('#main-browser-tabs .browser-tab');
    const mainBrowserContentFrame = document.getElementById('main-browser-content-frame');

    if (mainBrowserTabs.length > 0 && mainBrowserContentFrame) {
        mainBrowserTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                mainBrowserTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const pageUrl = tab.dataset.page;
                if (pageUrl) {
                    mainBrowserContentFrame.src = pageUrl;
                    const addressBar = mainBrowserContentFrame.closest('.browser-mockup').querySelector('.browser-address-bar');
                    if (addressBar) {
                        addressBar.textContent = `localhost:3000/${pageUrl}`;
                    }
                }
            });
        });

        // Activate the first tab by default
        if (mainBrowserTabs.length > 0) {
            mainBrowserTabs[0].click();
        }
    }


    // --- Logic for individual pages (if any simple JS is needed) ---

    // Example: Toggle a mobile menu if any page has one
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Example: Simple modal toggle
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-modal-hide]');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.dataset.modalTarget);
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex'); // Assuming modals use flex for centering
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.dataset.modalHide);
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    });

    // Close modal when clicking outside of it
    const modals = document.querySelectorAll('.modal-backdrop'); // Add this class to your modal's backdrop
    modals.forEach(modalBackdrop => {
        modalBackdrop.addEventListener('click', (event) => {
            if (event.target === modalBackdrop) { // if click is directly on the backdrop
                const modal = modalBackdrop.closest('[role="dialog"]'); // or the modal container itself
                 if (modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            }
        });
    });


    // Placeholder for dynamic content loading in index.html (if not using iframes for all)
    // This is more complex and might be overkill for the prototype.
    // For now, we'll rely on iframes or direct embedding for simplicity.

    console.log("Main JavaScript initialized for prototypes.");
});

// Helper function to simulate content loading for the main index.html iframes
// This is just for the main index.html to list all prototypes.
function loadPrototypesIntoIndex() {
    const prototypeSections = [
        { title: "登录页面", file: "login.html", description: "用户登录界面。" },
        { title: "注册页面", file: "registration.html", description: "新用户注册界面。" },
        { title: "教师仪表盘", file: "teacher_dashboard.html", description: "教师登录后的主界面。" },
        { title: "教学资源管理 (教师)", file: "teacher_resource_management.html", description: "教师管理和上传教学资源的界面。" },
        { title: "在线备课 (教师)", file: "teacher_lesson_planning.html", description: "教师创建和编辑教案的界面。" },
        { title: "作业创建 (教师)", file: "teacher_assignment_creation.html", description: "教师创建和发布作业的界面。" },
        { title: "作业批阅 (教师)", file: "teacher_assignment_grading.html", description: "教师批阅学生作业的界面。" },
        { title: "学情概览 (教师)", file: "teacher_student_progress_overview.html", description: "教师查看学生学习进展的界面。" },
        { title: "学生仪表盘", file: "student_dashboard.html", description: "学生登录后的主界面。" },
        { title: "课程资源 (学生)", file: "student_course_resources.html", description: "学生查看课程资料的界面。" },
        { title: "作业提交 (学生)", file: "student_assignment_submission.html", description: "学生提交作业的界面。" },
        { title: "成绩与反馈 (学生)", file: "student_grades_feedback.html", description: "学生查看作业成绩和教师反馈的界面。" },
    ];

    const showcaseContainer = document.getElementById('prototype-showcase');
    if (!showcaseContainer) return;

    showcaseContainer.innerHTML = ''; // Clear existing content

    prototypeSections.forEach(proto => {
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'embedded-prototype-wrapper bg-slate-800 p-6 rounded-lg shadow-xl';

        const title = document.createElement('h2');
        title.className = 'text-2xl font-semibold text-white mb-2';
        title.textContent = proto.title;
        sectionWrapper.appendChild(title);

        const description = document.createElement('p');
        description.className = 'text-slate-300 mb-4';
        description.textContent = proto.description;
        sectionWrapper.appendChild(description);

        const browserMockupDiv = document.createElement('div');
        browserMockupDiv.className = 'browser-mockup';
        browserMockupDiv.innerHTML = `
            <div class="browser-header">
                <div class="browser-dots">
                    <span class="browser-dot-red"></span>
                    <span class="browser-dot-yellow"></span>
                    <span class="browser-dot-green"></span>
                </div>
                <div class="browser-address-bar">localhost:3000/${proto.file}</div>
            </div>
            <div class="browser-tabs">
                <div class="browser-tab active" data-page="${proto.file}">${proto.title}</div>
            </div>
            <iframe class="browser-content" src="${proto.file}" title="${proto.title}"></iframe>
        `;
        sectionWrapper.appendChild(browserMockupDiv);
        showcaseContainer.appendChild(sectionWrapper);
    });
}

// If index.html uses the showcase container, call this function
if (document.getElementById('prototype-showcase')) {
    loadPrototypesIntoIndex();
}