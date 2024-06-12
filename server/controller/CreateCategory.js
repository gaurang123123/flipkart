import CategoryModel from "../model/CategoryModel.js";
import slugify from "slugify";
const CreateCategory = async (req,res) =>{
    try{
        const {name} = req.body;
        if(!name)
        {
            return res.status(401).send({message : "Name is required"})
        }
        const existingCategory = await CategoryModel.findOne({name})
        if(existingCategory)
        {
            return res.status(200).send({
                success : false,
                message : 'category Already exist'
            })
        }
        else{
            const category = await new CategoryModel({name , slug:slugify(name)}).save();
           return res.status(200).send({
                success : true,
                message : "New category created",
                category
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            error,
            message : 'Error in Category'
        })
    }
}
export default CreateCategory;


export const updateCategoryController = async (req,res) =>{
    try{
     const {name} = req.body;
     const {id} = req.params;
     const category = await CategoryModel.findByIdAndUpdate(id,{name,slug : slugify(name)},{new:true});
     res.status(200).send({
    success: true,
    message : "Category Updated successfully",
    category,
     })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            error,
            message : 'Error while updating in Category'
        })
    }
}

export const categoryController = async (req,res) =>{
    try{
        const category = await CategoryModel.find({});
        res.status(200).send({
            success : true,
            message : "List",
            category,
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            error,
            message : 'Error while loading in Category'
        })
    }
}
export const singlecategoryController = async (req,res) =>{
    try{
        // const {id} = req.params;
        const category = await CategoryModel.findOne({slug : req.params.slug});
        res.status(200).send({
            success : true,
            message : "List",
            category,
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            error,
            message : 'Error while loading in Category'
        })
    }

}
//delete
export const deletecategorycontroller = async (req,res) =>{
    try{
    const {id} =  req.params;
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({
        success:true,
        message: "Successfully deleted",
        
    })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success : false,
            error,
            message : 'Error while loading in Category'
        })
    }
}