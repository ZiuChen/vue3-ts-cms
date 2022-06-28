export const projectDir = `
vue3-ts-cms
 ├── babel.config.js
 ├── commitlint.config.js
 ├── node_modules
 ├── package-lock.json
 ├── package.json
 ├── public
 │   ├── favicon.ico
 │   └── index.html
 ├── README.md
 ├── src
 │   ├── App.vue
 │   ├── assets
 │   │   ├── css
 │   │   │   ├── base.less
 │   │   │   └── index.less
 │   │   └── img
 │   │       ├── login-bg.svg
 │   │       └── logo.svg
 │   ├── base-ui
 │   │   ├── breadcrumb
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── breadcrumb.vue
 │   │   │   └── types
 │   │   │       └── index.ts
 │   │   ├── card
 │   │   │   ├── index.ts
 │   │   │   └── src
 │   │   │       └── card.vue
 │   │   ├── code
 │   │   │   ├── index.ts
 │   │   │   └── src
 │   │   │       └── code.vue
 │   │   ├── descriptions
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── descriptions.vue
 │   │   │   └── types
 │   │   │       └── types.ts
 │   │   ├── form
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── form.vue
 │   │   │   └── types
 │   │   │       └── index.ts
 │   │   ├── table
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── table.vue
 │   │   │   └── types
 │   │   │       └── index.ts
 │   │   └── text-link
 │   │       ├── index.ts
 │   │       └── src
 │   │           └── textlink.vue
 │   ├── components
 │   │   ├── nav-header
 │   │   │   ├── index.ts
 │   │   │   └── src
 │   │   │       ├── cpns
 │   │   │       │   ├── bread-crumb.vue
 │   │   │       │   ├── user-info.vue
 │   │   │       │   └── user-options.vue
 │   │   │       └── nav-header.vue
 │   │   ├── nav-menu
 │   │   │   ├── index.ts
 │   │   │   └── src
 │   │   │       └── nav-menu.vue
 │   │   ├── page-content
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── page-content.vue
 │   │   │   └── types
 │   │   │       └── index.ts
 │   │   ├── page-modal
 │   │   │   ├── index.ts
 │   │   │   ├── src
 │   │   │   │   └── page-modal.vue
 │   │   │   └── types
 │   │   │       └── index.ts
 │   │   └── page-search
 │   │       ├── index.ts
 │   │       ├── src
 │   │       │   └── page-search.vue
 │   │       └── types
 │   │           └── index.ts
 │   ├── global
 │   │   ├── index.ts
 │   │   ├── register-element.ts
 │   │   ├── register-icons.ts
 │   │   └── register-properties.ts
 │   ├── hooks
 │   │   ├── useModuleListData.ts
 │   │   ├── usePageModal.ts
 │   │   ├── usePageSearch.ts
 │   │   └── usePermission.ts
 │   ├── main.ts
 │   ├── router
 │   │   ├── index.ts
 │   │   └── main
 │   │       ├── analysis
 │   │       │   ├── dashboard
 │   │       │   │   └── dashboard.ts
 │   │       │   └── overview
 │   │       │       └── overview.ts
 │   │       ├── product
 │   │       │   ├── category
 │   │       │   │   └── category.ts
 │   │       │   └── goods
 │   │       │       └── goods.ts
 │   │       ├── story
 │   │       │   ├── chat
 │   │       │   │   └── chat.ts
 │   │       │   └── list
 │   │       │       └── list.ts
 │   │       └── system
 │   │           ├── department
 │   │           │   └── department.ts
 │   │           ├── menu
 │   │           │   └── menu.ts
 │   │           ├── role
 │   │           │   └── role.ts
 │   │           └── user
 │   │               └── user.ts
 │   ├── service
 │   │   ├── axios-demo.ts
 │   │   ├── index.ts
 │   │   ├── login
 │   │   │   ├── login.ts
 │   │   │   └── type.ts
 │   │   ├── main
 │   │   │   └── system
 │   │   │       ├── system.ts
 │   │   │       └── type.ts
 │   │   ├── request
 │   │   │   ├── config.ts
 │   │   │   ├── index.ts
 │   │   │   └── type.ts
 │   │   └── types.ts
 │   ├── shims-vue.d.ts
 │   ├── store
 │   │   ├── actions
 │   │   │   └── getPageListAction.ts
 │   │   ├── index.ts
 │   │   ├── login
 │   │   │   ├── login.ts
 │   │   │   └── types.ts
 │   │   ├── main
 │   │   │   ├── product
 │   │   │   │   ├── good
 │   │   │   │   │   └── types.ts
 │   │   │   │   ├── product.ts
 │   │   │   │   └── types.ts
 │   │   │   └── system
 │   │   │       ├── system.ts
 │   │   │       └── types.ts
 │   │   └── types.ts
 │   ├── utils
 │   │   ├── cache.ts
 │   │   ├── date-format.ts
 │   │   ├── map-menus.ts
 │   │   └── upper-initial-character.ts
 │   └── views
 │       ├── login
 │       │   ├── config
 │       │   │   └── account-config.ts
 │       │   ├── cpns
 │       │   │   ├── login-account.vue
 │       │   │   ├── login-panel.vue
 │       │   │   └── login-phone.vue
 │       │   └── login.vue
 │       ├── main
 │       │   ├── analysis
 │       │   │   ├── dashboard
 │       │   │   │   └── dashboard.vue
 │       │   │   └── overview
 │       │   │       ├── config
 │       │   │       │   ├── dependencies.ts
 │       │   │       │   ├── dev-dependencies.ts
 │       │   │       │   ├── index.ts
 │       │   │       │   ├── project-dir.ts
 │       │   │       │   └── technology-stacks.ts
 │       │   │       └── overview.vue
 │       │   ├── main.vue
 │       │   ├── product
 │       │   │   ├── category
 │       │   │   │   └── category.vue
 │       │   │   └── goods
 │       │   │       ├── config
 │       │   │       │   ├── content.config.ts
 │       │   │       │   └── search.config.ts
 │       │   │       └── goods.vue
 │       │   ├── story
 │       │   │   ├── chat
 │       │   │   │   └── chat.vue
 │       │   │   └── list
 │       │   │       └── list.vue
 │       │   └── system
 │       │       ├── department
 │       │       │   ├── config
 │       │       │   │   ├── content.config.ts
 │       │       │   │   ├── modal.config.ts
 │       │       │   │   └── search.config.ts
 │       │       │   └── department.vue
 │       │       ├── menu
 │       │       │   ├── config
 │       │       │   │   └── content.config.ts
 │       │       │   └── menu.vue
 │       │       ├── role
 │       │       │   ├── config
 │       │       │   │   ├── content.config.ts
 │       │       │   │   ├── modal.config.ts
 │       │       │   │   └── search.config.ts
 │       │       │   └── role.vue
 │       │       └── user
 │       │           ├── config
 │       │           │   ├── content.config.ts
 │       │           │   ├── modal.config.ts
 │       │           │   └── search.config.ts
 │       │           └── user.vue
 │       └── not-found
 │           └── not-found.vue
 ├── tsconfig.json
 └── vue.config.js
`
