module.exports = {
    create(req, res){

        let roomId = '12346'

        res.redirect(`/room/${roomId}`)
    }
}