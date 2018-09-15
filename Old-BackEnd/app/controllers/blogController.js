"use strict"
var Posts = require('../models/post.js');
var User = require('../models/user.js');
var Bio = require('../models/bio.js');
module.exports = {

    index: {

        get : (req,res)=>{
        Posts.findAll({where:{approval_status:true}}).then(post=>{
        	console.log(post);
        	res.render('blog',{posts:post});

	});

		}
	},
	single: {
		get : (req,res)=>{
			Posts.findAll({where:{id:req.params.id}}).then(post=>{
				console.log(post);
				User.findAll({where: {id: post[0].userId}}).then(usr => {
					console.log(usr);
					Bio.findAll({where: {userId: usr[0].id}}).then(bio =>{
						console.log(bio[0].profile_pic);
                		res.render('blog-single',{post: post[0], user: usr[0].username, profile_pic: bio[0].profile_pic});
					})
					.catch(err => {
						console.log(err);
						res.render('error.ejs');
					})
				})
			});
		}
	}

}