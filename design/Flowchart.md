```markdown
# 用户操作流程图 - 土壤固废监测智慧助教平台 (MVP + V1.1 核心流程)

本文档使用 Mermaid.js 语法描述核心用户操作流程。

## 1. 通用流程

### 1.1 用户登录与注册

```mermaid
graph TD
    A[用户访问平台] --> B{已有账户?};
    B -- 是 --> C[进入登录页面];
    C --> D[输入用户名/邮箱];
    D --> E[输入密码];
    E --> F{登录信息正确?};
    F -- 是 --> G[进入对应角色仪表盘];
    F -- 否 --> H[提示错误信息，停留在登录页];
    B -- 否 --> I[进入注册页面 (或管理员邀请)];
    I --> J[输入注册信息];
    J --> K[提交注册];
    K --> L{注册成功?};
    L -- 是 --> C;
    L -- 否 --> M[提示错误信息，停留在注册页];

    subgraph 教师仪表盘
        G_Teacher[教师仪表盘 Teacher Dashboard]
    end
    subgraph 学生仪表盘
        G_Student[学生仪表盘 Student Dashboard]
    end

    G -- 教师角色 --> G_Teacher;
    G -- 学生角色 --> G_Student;