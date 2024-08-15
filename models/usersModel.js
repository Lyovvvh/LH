import _ from 'lodash';

import db from '../clients/db.mysql.js'

export default {
    async getUserByEmail(email) {
        const [raws] = await db.query('SELECT * FROM customers WHERE email= ?', [email])
        return _.head(raws) || null
    },
    async registration({name, email, number}) {
        const [raws] = await db.query(
            'INSERT INTO customers (name, email, phone_number) VALUES (?, LOWER(?), ?)',
            [name, email, number]
        );

        const newUser = await this.getUserByEmail(email);
        return {newUser, raws}
    },
}