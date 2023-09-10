const fs = require('fs')
const path = require('path')


function mockResult() {
    const result = fs.statSync('mock')
    // console.log(result);
    const isDirectory = result.isDirectory()
    let mockResult = []
    if (isDirectory) {
        mockResult = require(path.resolve(process.cwd(), 'mock/index.js'))
    }
    return mockResult
}
module.exports = () => {
    return {
        configureServer(server) {
            server.middlewares.use((req, res, next) => {

                const result = mockResult()
                let matchItem = result.find(mockDir => mockDir.url === req.url)
                if (matchItem) {
                    // console.log(matchItem.response);
                    const responseData = JSON.stringify(matchItem.response(req))
                    res.setHeader("content-Type", "application/json")
                    res.end(responseData)

                } else {
                    next()
                }

            })
        }
    }
}