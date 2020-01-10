# League of Play API

-   [League of Play API]()
    -   [First Step's](#First-Step's)
    -   [Comands](#comands)
    -   [Structure](#structure)
    -   [Most Relevant Dependencies](#most-relevant-dependencies)

## First Steps

-   Update settings.json on vscode:
    `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "editor.formatOnSave": true, "[javascript]": { "editor.formatOnSave": true }, "[typescript]": { "editor.formatOnSave": true }`

## Alias Config

-   Creating alias:
    -   1 - Go to webpack.config.js and create the alias in `resolve: { alias: { 'alias-name': path.resolve(__dirname + "path/archive/index.ts") } }`.
    -   2 - Go to babelrc and create the alias in `plugins: { alias: { 'alias-name': "./path/archive/index.ts" } } -> Path starting in project root.`.
    -   3 - Go to tsconfig.json and create the alias in `paths: { 'alias-name': ["./caminho/arquivo/index.ts"] } -> Path starting in baseUrl property(tsconfig). Prevent ESlint module not found on alias import`.

## Comands

-   Install packages (only needed on first run)
    `npm install`

-   Run development (with hot reload)
    `npm run dev`

## Structure

```
|--src
|  |--controller
|  |  :: api routes
|  |
|  |--middleware
|  |  :: middlewares, handlers
|  |
|  |--repository
|  |  :: data access and manipulation
|  |
|  |--service
|  |  :: services
|  |
|  |--utils
|  |  :: helpers
|
```

## Most Relevant Dependencies

-   Express - Server
-   Webpack
