'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            let data = {
              "products": [
                { "Name": "Cheese", "Price": 2.5, "Location": "Refrigerated foods" },
                { "Name": "Crisps", "Price": 3, "Location": "the Snack isle" },
                { "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods" },
                { "Name": "Chocolate", "Price": 1.5, "Location": "the Snack isle" },
                { "Name": "Self-raising flour", "Price": 1.5, "Location": "Home baking" },
                { "Name": "Ground almonds", "Price": 3, "Location": "Home baking" }
              ]
            }

            return data;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();