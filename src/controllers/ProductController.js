const {BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilierService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,

   } = require('../services/ProductServices')

    //ProductBrandList, ProductCategoryList, ProductSliderList 3 ta same
exports.ProductBrandList = async (req, res) =>{
    let result = await BrandListService();
    return res.status(200).json(result); 
}

exports.ProductCategoryList = async (req, res) =>{
    let result = await CategoryListService();
    return res.status(200).json(result);
 
}

exports.ProductSliderList = async (req, res) =>{
    let result = await SliderListService();
    return res.status(200).json(result);
}


//ProductListByBrand, ProductListByCategory, ProductListByRemark 3 ta same
exports.ProductListByBrand = async (req, res) =>{
   let result = await ListByBrandService (req);
   return res.status(200).json(result);
}

exports.ProductListByCategory = async (req, res) =>{
    let result = await ListByCategoryService (req);
    return res.status(200).json(result);
}

exports.ProductListByRemark = async (req, res) =>{
    let result = await ListByRemarkService(req);
    return res.status(200).json(result);
}





exports.ProductDetails = async (req, res) =>{
    let result = await DetailsService(req);
    console.log(result)
    return res.status(200).json(result)
}