module.exports = {
    joiOptions: {
        errors: {
            wrap: {
                label: ''
            }
        },
        abortEarly: false
    },
    swaggerOptions: {
        swaggerDefinition: {
            openapi: '3.0.1',
            info: {
                title: 'Getir Test Project API Documentation',
                version: '1.0.0'
            },
            servers: [
                {
                    url: 'https://getir-tp.herokuapp.com',
                    description: ''
                }
            ]
        },
        apis: [
            './apis/records/recordsAPI.js',
        ]
    }
}
