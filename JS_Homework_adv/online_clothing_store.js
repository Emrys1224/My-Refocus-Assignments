const online_store_records = {
    store_info: {
        name: "Zara",
        address: "Manhattan Avenue, New York",
        code: "NY656"
    },

    client_list: [
        {
            user_name: "AnJo123",
            password: "zxc123",
            first_name: "Angelina",
            surname: "Jolie",
            age: 47,
            birthday: "4.06.1975",
            cart: []
        }
    ],

    item_list: [
        {
            name: "Blue jeans",
            category: "Trousers",
            price_$: 50,
            stock_quantity: 456
        }
    ],

    addClient(client) {
        let user_name_taken = this.client_list.some((user) => {
            return user.user_name == client.user_name;
        });

        if (user_name_taken) {
            console.log(`Sorry this user name ${client.user_name} has been taken`)

        } else {
            this.client_list.push(client);
            console.log(`${client.user_name} has been added`)
        }
    },

    createClient(user_name, password, first_name, surname, age, birthday) {
        const client = {
            user_name: user_name,
            password: password,
            first_name: first_name,
            surname: surname,
            age: age,
            birthday: birthday,
            cart: []
        };
        this.addClient(client);
    },

    removeClient(user_name) {
        let client_index = this.client_list.findIndex(client => {
            return client.user_name == user_name;
        });

        if (client_index >= 0) {
            this.client_list.splice(client_index, 1);
            console.log(`${user_name} has been removed`)

        } else {
            console.log(`${user_name} is not registered`)
        }
    },

    loginClient(user_name, password) {
        let user_name_exist = false;
        let password_matched = false;
        this.client_list.forEach(client => {
            if (client.user_name == user_name) {
                user_name_exist = true;
                if (client.password == password) password_matched = true;
            }
        });

        if (user_name_exist) {
            if (password_matched) {
                console.log(`${user_name} has been logged in`)
                return user_name;

            } else {
                console.log(`You have entered a wrong password`)
                return "";
            }

        } else {
            console.log(`${user_name} is not registered. Please sign up.`)
            return "";
        }
    },

    addItem(item) {
        let item_exist = false;
        this.item_list.forEach(stock => {
            if (stock.name == item.name) {
                item_exist = true;
                stock.stock_quantity += item.stock_quantity;
                console.log(`${stock.name} updated stock quantity: ${stock.stock_quantity} pcs`)
            }
        });

        if (!item_exist) {
            this.item_list.push(item);
            console.log(`${item.name} has been added to the inventory`)
        }
    },

    createItem(name, category, price_$, quantity) {
        const item = {
            name: name,
            category: category,
            price_$: price_$,
            stock_quantity: quantity
        }
        this.addItem(item);
    },

    removeItem(item_name) {
        let item_index = this.item_list.findIndex(item => {
            return item.name == item_name;
        });

        if (item_index >= 0) {
            this.item_list.splice(item_index, 1);
            console.log(`${item_name} has been removed from the inventory`)

        } else {
            console.log(`${item_name} is not in the inventory`)
        }
    },

    addToCart(item_name, quantity, loggedinClient) {
        let item_is_in_inventory = this.item_list.some(item => {
            return item.name == item_name;
        });

        if (item_is_in_inventory) {
            let client_index = this.client_list.findIndex(client => {
                return client.user_name == loggedinClient;
            });

            if (client_index < 0) {
                console.log("No client has logged in")

            } else {
                let client_cart = this.client_list[client_index].cart;
                let item_is_in_cart = client_cart.some(item => {
                    return item.name == item_name;
                });

                if (item_is_in_cart) {
                    console.log(`${item_name} is already in cart`)

                } else {
                    client_cart.push(
                        {
                            name: item_name,
                            quantity: quantity
                        }
                    );
                }
            }

        } else {
            console.log(`${item_name} is not in inventory`)
        }
    },

    checkoutOrder(loggedinClient, payment_amount) {
        let client_index = this.client_list.findIndex(client => {
            return client.user_name == loggedinClient;
        });
        let puchase_amount = 0;

        if (client_index < 0) {
            console.log("No client has logged in")

        } else {
            let enough_stock = true;
            let receipt = `
====================================\n
Purchase Receipt\n
Items\n
-----------------------------------\n`;

            this.item_list.forEach(item => {
                this.client_list[client_index].cart.forEach(order => {
                    if (item.name == order.name) {

                        if (item.stock_quantity >= order.quantity) {
                            order_price_$ = order.quantity * item.price_$;
                            puchase_amount += order_price_$;
                            item.stock_quantity -= order.quantity;

                            receipt += `${order.quantity}  ${order.name} @ $${item.price_$} ..... $${order_price_$}.00\n`;

                        } else {
                            enough_stock = false;
                            console.log(`There is not enough inventory for ${order.name}`)
                        }
                    }
                });
            });

            if (enough_stock) {
                if (payment_amount >= puchase_amount) {
                    let change = payment_amount - puchase_amount;

                    receipt += `
-----------------------------------\n
Total ..... $${puchase_amount}.00\n
Cash  ..... $${payment_amount}.00\n
Change..... $${change}.00`;

                    console.log(receipt)

                } else {
                    console.log("The payment amount is not enough for this purchase order")
                }

            } else {
                console.log("There is not enough stocks for this purchase order")
            }
        }
    }
}

var loggedinClient = "";