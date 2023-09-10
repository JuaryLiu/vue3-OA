module.exports = (options) => {
    return {
        transformIndexHtml:(html,ctx) => {
            return html.replace(/<%= title %>/g,options.title)
        }
    }
}