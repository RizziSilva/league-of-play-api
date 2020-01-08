# League of Play API

-   [League of Play API]()
    -   [First Step's](#First-Step's)
    -   [Comands](#comands)
    -   [Structure](#structure)
    -   [Most Relevant Dependencies](#most-relevant-dependencies)

## First Step's

-   Update settings.json on vscode:
    `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }, "editor.formatOnSave": true, "[javascript]": { "editor.formatOnSave": true }, "[typescript]": { "editor.formatOnSave": true }`

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
|  |  :: services, helpers...
|
```

## Most Relevant Dependencies

-   Express - Server
