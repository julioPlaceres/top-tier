const { Reviews } = require("../models/Reviews");

const resolvers = {
    Query: {
        reviews: async () => {
            return Reviews.find({}); 
        }
    }
}

module.exports = resolvers;