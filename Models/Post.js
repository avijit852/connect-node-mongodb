const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Post', postSchema)