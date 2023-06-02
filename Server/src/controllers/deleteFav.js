const { Favorite } = require('../database/index');

const deleteFav = async(res, req)=>{
   try {
       const { id } = req.params;

       await Favorite.destroy({ where: { id } });
       
       const favorites = await Favorite.findAll();
    
       res.status(200).json(favorites)
    
   } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
   }
   


}

module.exports = { deleteFav }