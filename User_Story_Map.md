# docs/User_Story_Map.md
# 用户故事地图 (User Story Map)

## 1. 用户故事地图概述

本用户故事地图旨在从用户视角出发，梳理“土壤固废监测智慧助教平台”的核心用户活动、任务和具体的用户故事。它有助于团队更好地理解用户需求，规划产品功能优先级，并作为迭代开发的基础。

## 2. 用户活动流 (横向) - 骨干 (Backbone)

* **教师核心活动:** 课前准备 -> 课堂教学/互动 -> 课后管理/辅导
* **学生核心活动:** 课前预习 -> 课堂学习/参与 -> 课后复习/作业

## 3. 用户任务分解 (纵向) 与 用户故事 (按版本规划)

---

### **用户角色: 教师 (王老师)**

| **活动 (Activity)** | **任务 (Task)** | **V1.0 (MVP) 用户故事** | **V1.1 用户故事** | **V2.0 用户故事** |
| :------------------ | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **课前准备** | **1. 管理教学资源** | 1.1 作为教师，我想要上传课件、图片、视频链接等资源到平台，并进行简单分类，以便备课时使用。                                     | 1.5 作为教师，我想要更精确地检索我的教学资源，以便快速找到所需内容。                                                | 1.6 作为教师，我想要添加H5互动课件或外部专业数据库的链接作为教学资源，以便丰富教学内容。                                                               |
|                     |                                     | 1.2 作为教师，我想要建立自己的个人资源文件夹，以便更好地组织私有资料。                                                           |                                                                                                               | 1.7 作为教师，我希望能看到资源被引用的情况或学生的查看热度，以便了解资源受欢迎程度。                                                                   |
|                     | **2. 规划与制作课程内容 (备课)** | 2.1 作为教师，我想要创建一个在线教案，并能在教案中添加文字、图片和之前上传的资源，以便结构化我的授课内容。                          |                                                                                                               | 2.5 作为教师，我想要使用预设的教案模板来快速开始备课，以便提高效率。                                                                                 |
|                     |                                     | 2.2 作为教师，我想要将完成的教案发布给学生查看，以便他们预习。                                                               |                                                                                                               | 2.6 作为教师，我想要在教案中嵌入可交互的Web元素（如在线投票、小测验链接），以便增强预习效果。                                                             |
|                     | **3. 布置预习任务** | 3.1 作为教师，我想要给学生布置预习任务（如阅读特定教案章节、观看视频），并设定截止日期，以便引导学生课前学习。                 | 3.2 作为教师，我想要查看学生预习任务的完成状态列表，以便了解整体预习情况。                                        |                                                                                                                                                |
| **课堂教学/互动** | **4. 进行课堂演示 (基础)** | 4.1 作为教师，我想要在课堂上方便地展示我准备的在线教案和资源，（配合浏览器或会议软件的屏幕共享）以便进行教学。                     |                                                                                                               | 4.2 作为教师，我想要在屏幕共享时，能对内容进行简单的实时标注或画笔操作，以便强调重点。                                                                   |
|                     | **5. 组织课堂互动** |                                                                                                                        | 5.1 作为教师，我想要快速发起一个单选或多选投票，并实时看到学生的作答结果，以便即时了解学生看法或掌握程度。              | 5.3 作为教师，我想要在讨论区创建不同的话题，并能设置匿名或实名发言，以便引导更深入的专业研讨。                                                         |
|                     |                                     |                                                                                                                        | 5.2 作为教师，我想要建立一个简单的在线讨论区，让学生可以就某个问题发表文字评论，以便促进交流。                        | 5.4 作为教师，我想要在课中快速布置一个限时的小测验（选择/判断），并能看到学生的即时答题统计，以便检验学习效果。                                             |
| **课后管理/辅导** | **6. 布置与管理作业** | 6.1 作为教师，我想要在线创建作业，包含作业要求和附件，并设定提交截止日期，以便学生明确任务。                                 |                                                                                                               | 6.4 作为教师，我想要创建包含客观题（选择、填空）的在线作业，并能设置自动批改，以便节省时间。                                                               |
|                     |                                     | 6.2 作为教师，我想要查看学生提交的作业列表和提交状态，以便管理作业。                                                           |                                                                                                               |                                                                                                                                                |
|                     | **7. 批阅作业与反馈** | 7.1 作为教师，我想要在线查看学生提交的作业文件（如PDF, Word），进行打分并添加文字评语，以便给予反馈。                             | 7.2 作为教师，我想要将批阅后的作业结果（分数和评语）一次性发布给所有学生或单个学生。                                | 7.3 作为教师，我想要在批阅PDF作业时，能使用高亮或简单批注工具，以便更直观地指出问题。                                                                 |
|                     | **8. 追踪与分析学情** |                                                                                                                        | 8.1 作为教师，我想要查看班级整体的作业平均分、提交率等统计数据，以便了解整体学习情况。                                | 8.3 作为教师，我想要看到学生对教学资源（如视频、文档）的详细查看行为，如观看时长、完成度，以便分析学习投入。                                             |
|                     |                                     |                                                                                                                        | 8.2 作为教师，我想要查看单个学生各项学习活动的简报（如资源查看次数、作业成绩列表），以便进行针对性辅导。                | 8.4 作为教师，我希望能收到关于学习进度缓慢或有困难学生的预警提示，以便及时介入。                                                                   |
|                     | **9. (未来) 专业实验辅助** |                                                                                                                        |                                                                                                               | 9.1 作为教师，我想要上传或链接实验操作规范视频、步骤分解图文、安全注意事项等资源，作为“实验预习/复习模块”，以便学生更好地准备和回顾线下实验。        |
|                     |                                     |                                                                                                                        |                                                                                                               | 9.2 作为教师，我想要（如果可能）在平台中嵌入或链接一些轻量级的、与课程内容相关的Web端虚拟仿真实验案例，以便学生进行探索式学习。                        |

---

### **用户角色: 学生 (李同学)**

| **活动 (Activity)** | **任务 (Task)** | **V1.0 (MVP) 用户故事** | **V1.1 用户故事** | **V2.0 用户故事** |
| :------------------ | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **课前预习** | **1. 查看学习资料与任务** | 1.1 作为学生，我想要方便地查看老师发布的教案、教学资源和预习任务，以便进行课前学习。                                           | 1.3 作为学生，我想要在我完成预习任务后标记为“已完成”，以便老师知晓。                                                 | 1.4 作为学生，我希望预习资源能有更丰富的展现形式（如交互图示链接），而不仅仅是文档和视频，以便提高学习兴趣。                                                |
|                     |                                     | 1.2 作为学生，我想要能下载老师分享的课件和资料到本地，以便离线学习。                                                           |                                                                                                                  |                                                                                                                                                   |
| **课堂学习/参与** | **2. 参与课堂互动** |                                                                                                                        | 2.1 作为学生，我想要参与老师发起的在线投票或快速问答，并能看到投票的整体结果（如果老师允许），以便表达我的看法和了解其他同学的想法。 | 2.3 作为学生，我想要在老师组织的在线讨论中，方便地发表我的观点并回复他人，以便参与研讨。                                                                 |
|                     |                                     |                                                                                                                        | 2.2 作为学生，我想要在老师建立的讨论区中，针对特定主题进行文字评论和交流，以便深化理解。                               |                                                                                                                                                   |
| **课后复习/作业** | **3. 提交作业** | 3.1 作为学生，我想要在线查看作业的具体要求、截止日期和附件材料，以便明确如何完成。                                             |                                                                                                                  | 3.3 作为学生，我想要在线完成客观题作业（选择、填空），并能即时看到部分题目的得分（如果老师设置），以便快速获得反馈。                                        |
|                     |                                     | 3.2 作为学生，我想要在线上传我的作业文件（如实验报告），并能收到提交成功的确认，以便完成任务。                                     |                                                                                                                  |                                                                                                                                                   |
|                     | **4. 查看反馈与成绩** | 4.1 作为学生，我想要在老师批阅作业后，及时收到通知，并能查看到我的分数和老师的评语，以便了解自己的不足。                           |                                                                                                                  | 4.2 作为学生，我希望老师的在线批注（如高亮）能够清晰展示在我的作业上，以便我准确理解反馈。                                                               |
|                     | **5. (未来) 进行在线实验学习** |                                                                                                                        |                                                                                                                  | 5.1 作为学生，我想要在“实验预习/复习模块”中，查看实验操作视频、步骤和安全须知，以便更好地准备线下实验或巩固知识。                                       |
|                     |                                     |                                                                                                                        |                                                                                                                  | 5.2 作为学生，我希望能有机会在Web端体验一些与课程相关的虚拟仿真实验，以便在无法进行实体操作时也能获得一定的实践感受，加深对实验过程的理解。          |

---

## 4. 故事优先级与版本映射

* **V1.0 (MVP):** 重点实现教师的资源管理、基础备课、文件型作业管理的核心流程；学生能查看资源、提交作业、查看反馈。目标是让产品能用起来，解决最基本的需求。
* **V1.1:** 在MVP基础上，增加课堂即时互动功能（投票、讨论区），提供基础的学情数据给教师，并对V1.0进行体验优化。
* **V2.0:** 深入专业化，提供更丰富的资源类型支持，增强作业系统（如客观题自动批改），探索Web端实验辅助功能，提升学情分析的深度。

**(注: 用户故事的粒度和具体内容会随着项目进展和用户反馈进一步细化和调整。)**