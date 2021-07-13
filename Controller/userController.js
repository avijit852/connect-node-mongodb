const User = require('../Models/User')
const Post = require('../Models/Post')

exports.getUser = (req, res, next)=>{
    User.find().then( data =>{
        console.log(data)
    }).catch( err => console.log(err) )
}

exports.postUser = (req, res, next) =>{
    let user  = new User({
        name : "tarun"
    });
    user.save().then( data =>{
        console.log(data)
    }).catch( err => console.log(err))
}

exports.postPost = (req, res, next)=>{

    let post = new Post({
        username : "tarun",
        comment : "This is very good"
    });

    post.save().then( data =>{
        console.log(data)
    }).catch(err => console.log(err) )
}