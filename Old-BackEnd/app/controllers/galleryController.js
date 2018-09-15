"use strict"
var Image = rootRequire('app/models/post.js');
var multer  = require('multer');
var path    = require('path');

// Multer config to store images
const storage = multer.diskStorage({
    destination: 'assets/uploaded_photos/',

    filename: function (req, file, cb) {
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({

    storage: storage

}).single('image_upload');


//**************

module.exports = {

    index: {
        get : (req,res)=>{
               var galleryData = []; //array to store multiple array containing unique category with single image
            // var category =[]; //array to store to categories of images
            var cat = []
            Image.findAll({where:{category:'image', approval_status: true}}).then((image) => {
                for(var i = 0 ; i < image.length ; i++){
                    var img = image[i];
                    if(!(cat.includes(img.subcategory))){
                        galleryData.push(img);
                        cat.push(img.subcategory);
                    }
                }
                console.log(galleryData);
                res.render('gallery', {'galleryData': galleryData});
            })
            .catch((err) => {
                console.error(err);
                res.render('error.ejs');
            });

                
            //     category = Array.from(new Set(category));  // finding unique category

            //     category.forEach(function(cat){
            //         Image.findAll({where:{category:cat}}).then((res)=>{
            //             var data = [cat,res[0].dataValues.url];   // extracting first image associated with unique category
            //             galleryData.push(data);
            //             if(galleryData.length == category.length){
            //                 res.render('gallery',{galleryData: galleryData});
            //             }
            //         })
            //         .catch((err)=> {
            //             console.log(err);
            //             res.render('error.ejs')
            //         });
            //     });
                    
            // });
    }


},
upload:{
    get : (req,res)=>{


        res.render('gallery_upload');
    },
    post :(req ,res)=>{

        upload(req,res, (err)=>{
            if(err) throw err;
    else{
            //saving gallery photos to database
            var data = req.body;
            Image.create({category: data.category, title: data.title , url:req.file.path.replace('assets',''),article : data.article,blog:  data.blog})
                .then(result=>{console.log(result.dataValues); res.redirect('/gallery')})
        .catch((err)=> {
                console.log(err)
            res.render('error.ejs')

        });


        }

    })

    }


},

category: {
    get : (req,res)=>{
        var image_cat= [];
        var images = Image
            .findAll({ where : { subcategory : [req.params.subcategory], category: 'image', approval_status: true } })
            .then(image => {
            //image contains an array of images choose images according to category.
            console.log(image.length);
            res.render('gallery_single', {'galleryData' : image});
        })
        .catch((err) => {
            res.render('error.ejs');
        });
    }
}

}
