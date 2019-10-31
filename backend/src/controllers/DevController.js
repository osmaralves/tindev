const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const dev = await Dev.create({
            name: response.data.name,
            user: username,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        });

        return res.json(dev);
    }
};