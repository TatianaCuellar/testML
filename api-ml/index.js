const express = require('express');
const app = express();
const request = require('request');
const exphbs = require("express-handlebars");
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

let options = {
    url: ``,
    agentOptions: {
        rejectUnauthorized: false
    }
};

let price = {
    currency: '',
    amount: 0,
    decimals: 0
}


let products = {
    author: {
        'name': 'Tatiana',
        'lastname': 'Cuellar'
    },
    categories: [],
    items: []
};

let product = {
    author: {
        'name': 'Tatiana',
        'lastname': 'Cuellar'
    },
    items: []
}


app.get('/api/items/:query', (req, res) => {

    options.url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(req.params.query)}`;
    request(options, (err, response, body) => {
        if (!err) {
            const data = JSON.parse(body);
            let count = 1;
            products.items = [];
            let categories;
            data?.filters.forEach(filters => {
                filters.values.forEach(value => {
                    categories = value;
                });
            });
            products.categories = categories;
            for (let item of data.results) {
                if (count <= 4) {
                    if (typeof item.prices.prices === 'object') {
                        item.prices.prices.forEach(priceFor => {
                            price.currency = priceFor.currency_id;
                            price.amount = priceFor.amount;
                            price.decimals = 0;
                        });
                        products.items.push({
                            id: item?.id,
                            title: item?.title,
                            price: price,
                            picture: item?.thumbnail,
                            condition: item?.condition,
                            free_shipping: item?.shipping.free_shipping,
                            country: item?.address.state_name
                        });
                    }
                }

                count = count + 1;
            }
            res.send(products);
        } else {
            res.send('Error: ' + err)
        }
    })
});

app.get('/api/item/:id', (req, res) => {
    options.url = `https://api.mercadolibre.com/items/${req.params.id}`;
    request(options, (err, response, body) => {
        if (!err) {
            const data = JSON.parse(body);
            options.url = `https://api.mercadolibre.com/items/${data.id}/description`;
            request(options, (err1, response1, body1) => {
                if (!err1) {
                    const description = JSON.parse(body1);
                    product.items = {
                        id: data.id,
                        title: data.title,
                        price: {
                            currency: data.currency_id,
                            amount: data.price,
                            decimals: 0
                        },
                        picture: data.thumbnail,
                        condition: data.condition,
                        free_shipping: data.shipping.free_shipping,
                        sold_quantity: data.sold_quantity,
                        description: description.plain_text
                    }
                    res.send(product);
                } else {
                    res.send('Error: ' + err1);
                }
            });
        } else {
            res.send('Error: ' + err)
        }
    });
});


app.listen('8080', () => {
    console.log('listening')
});