var Columns = rootRequire('app/models/post.js');
var User = require('../models/user.js');

module.exports = {

 //   index: {
 //        get : (req,res)=>{ 
 //        		// res.render('column-dashboard');
	// 			res.send('Columns list');
	// 		}
	// },
	// edit:{
 //        get : (req,res)=>{

 //                console.log(req.user);

 //                res.render('column-form',{currentUser:req.user});


 //        },
		// post :(req ,res)=>{
  //       	var data = req.body;
  //       	console.log(data);

  //       	Columns.create({category: data.category, title: data.title , article:data.article,tag:null,subcategory:[data.subcategory],userId: req.user.id})
		// 		.then(result => {
  //                   var col=result;
  //                   Columns.findAll({category: data.category, title: data.title}).then({console.log(col.dataValues)});
  //               })
  //               .catch((err)=> { 
  //                             console.log(err)
  //                             res.render('error.ejs')

  //                         });



		// }


	// },
    delete:{
        get :(req ,res)=>{
                console.log('Deleting');
                User.findOne({where: {id: req.user.id}}).then(usr => {
                    console.log('User recognized');
                    var position = usr.position;
                    console.log(position);
                    if(position == "student head" || position == "web development head" || position == "editor in cheif" || position == "assistant editor" || position == "student advisor" || position == "student coordinator" || position == "assosiate editor" || position == "head of photography" || position == "illustrator head"){
                        // Columns.findOne({where: {id:req.params.post_id}}).then(result=>delete(result)).catch((err) => {console.log(err);});
                        Columns.destroy({where: {id:req.params.post_id}})
                            .then((num) => {
                                if(num == 1){
                                    console.log('Deleted Successfuly');
                                }
                                else{
                                    console.log('Delete operation failed');
                                }
                                res.redirect('/user/profile');
                            })
                            .catch((err) =>{
                                console.log(err);
                                res.render('error.ejs');
                            });
                    }
                })
                .catch((err) => {
                    res.render('error.ejs');
                })

        }
    }
}
