const { User } = require('../database/index');

const postUser = async(req, res) =>{
  try {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password }
    });

    if (!created) {
      return res.status(200).json(user);
    }

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { postUser };
