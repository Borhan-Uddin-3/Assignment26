const BrandModel = require('../models/BrandModel')
const CategoryModel = require('../models/CategoryModel')
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductModel = require('../models/ProductModel')

const mongoose = require("mongoose")


const ObjectId = mongoose.Types.ObjectId;

const BrandListService = async ()=>{
    try{
       let data = await BrandModel.find();
       return {status: "success", data: data}
    }catch(e){
        return {status:"fail", data:e}
    }
}

const CategoryListService = async ()=>{
    try{
        let data = await CategoryModel.find();
        return {status: "success", data: data}
    }catch(e){
        return {status:"fail", data:e}
    }
}

const SliderListService = async ()=>{
    try{
        let data = await ProductSliderModel.find();
        return {status: "success", data: data}
    }catch(e){
        return {status:"fail", data:e}
    }
}


const ListByBrandService = async (req)=>{
     
    try{

        let BrandID = new ObjectId(req.params.BrandID)
        let MatchStage = {$match:{brandID:BrandID}};
        let joinWithBrandStage = {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
        let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage= {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage, joinWithBrandStage, joinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage,ProjectionStage
        ])
        return {status:"success", data:data}
    } catch(e){
        return {status:"fail", data:e}
    }
}
//ListByCategoryService
const ListByCategoryService = async (req)=>{
   
    try{
       
       let CategoryID = new ObjectId(req.params.CategoryID)
       let MatchStage = {$match:{categoryID: CategoryID}}
       let joinWithBrandStage = {$lookup:{from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}}
       let joinWithCategoryStage = {$lookup:{from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
       let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage= {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}


       let data = await ProductModel.aggregate([
        MatchStage, joinWithBrandStage, joinWithCategoryStage, UnwindBrandStage, UnwindCategoryStage, ProjectionStage
       ])
       return {status:"success", data:data}
    } catch(e){
        return {status:"fail", data:e}
    }
}

// ListByRemarkService
const ListByRemarkService = async (req)=>{
    try{
        let Remark = req.params.Remark;
       let MatchStage = {$match:{remark:Remark}};
    
       let joinWithBrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
       let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
       let UnwindBrandStage= {$unwind:"$brand"}
       let UnwindCategoryStage= {$unwind:"$category"}
    
       let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
    
       let data = await ProductModel.aggregate([
          MatchStage,
          joinWithBrandStage,
          joinWithCategoryStage,
          UnwindBrandStage,
          UnwindCategoryStage,
          ProjectionStage
       ])
       return {status:"success", data:data}
       }catch(e){
        return {status:"fail", data:e}
       }
}

//DetailsService
const DetailsService = async (req)=>{
    try{
        let ProductID = new ObjectId(req.params.ProductID);
        let MatchStage = {$match:{_id:ProductID}};
      
        let joinWithBrandStage = {$lookup:{from:"brands",localField:"brandID", foreignField:"_id", as:"brand"}};
         let joinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID", foreignField:"_id", as:"category"}};
      
         let joinWithDetailsStage ={$lookup:{from:"productdetails",localField:"_id", foreignField:"productID", as:"details"}};
      
         let UnwindBrandStage= {$unwind:"$brand"}
         let UnwindCategoryStage= {$unwind:"$category"}
         let UnwindDetailsStage= {$unwind:"$details"}
         let ProjectionStage = {$project: 
           {'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
      
         let data = await ProductModel.aggregate([
          MatchStage,
          joinWithBrandStage,
          joinWithCategoryStage,
          joinWithDetailsStage,
          UnwindBrandStage,
          UnwindCategoryStage,
          UnwindDetailsStage,
          ProjectionStage
       ])
       
       return {status:"success", data:data}
      }catch(e) {
        return {status:"fail", data:e}
        
      }
}
module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListByRemarkService,
    DetailsService,
 
  
}