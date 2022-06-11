const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path')

class Backend{
    constructor(telephone, password){
        this.telephone = telephone
        this.password = password
        this.id = uuidv4()
    }

    static async getAllUsers(){
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname,'..', 'backend', 'users.json'), 'utf-8', (err, content) => {
                if (err) reject(err)
                else resolve(JSON.parse(content).users)
            })
        })
    }

    static async findByTelephone(telephone) {
        const users = await Backend.getAllUsers()

        return new Promise((resolve, reject) => {
            const user = users.find(user => user.telephone === telephone)
            console.log(user);
            if (!user) {
                return reject('user topilmadi')
            }
            resolve(user)
        })
    }

    static async findByPassword(password) {
        const users = await Backend.getAllUsers()

        return new Promise((resolve, reject) => {
            const user = users.find(user => user.password === password)
            console.log(user);
            if (!user) {
                return reject('user topilmadi')
            }
            resolve(user)
        })
    }
}

module.exports = Backend