const Database = require('../db/config')

module.exports = {

    async create(req, res){

        
        const password = req.body.password
        let roomId = ''
        
        for(let i = 0; i < 6; i++){
            roomId += Math.floor(Math.random() * 10)
        }
        
        const db = await Database()

        await db.run(`
            INSERT INTO room VALUES
            ('${roomId}', '${password}')
        `)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}