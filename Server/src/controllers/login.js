const { User } = require('../database/index');

const login = async(req, res) =>{
    try {
        const { email, password } = req.query;

        if (!email || !password || email === '' || password === '') {
            return res.status(400).json({ message: 'Faltan datos' });
        }

        const user = await User.findOne(
            { where: { email } }
            );
    
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        if (user.password !== password) {
          return res.status(403).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json({ access: true });

    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { login };

