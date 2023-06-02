const { Favorite } = require('../database/index');

const postFav = async(req, res) =>{
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status|| !image || !species || !gender ||
         name === '' || origin === '' || status === '' || 
         image === '' || species === '' || gender === '' ) {
      return res.status(401).json({ message: 'Faltan datos' });
    }

    await Favorite.create(
        {
         name, 
         origin, 
         status, 
         image, 
         species, 
         gender 
        });

    const favorites = await Favorite.findAll();
    
    res.status(200).json(favorites)

  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { postFav };
