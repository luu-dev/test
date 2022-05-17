const model = require("../model");
const notification = model.model('notification');
module.exports = {
    getList : async ()=>{
        try {
            var data = await notification.find().exec();
            return data;

        }catch (e) {
            return false;
        }
    },

    getById: async (id) => {
        try {
            return await notification.findById(id);

        } catch (e) {
            console.log('video getById error:', e.message);
            return false;
        }
    },
    insert: async (data) => {
        try {
            return await notification.create(data);

        } catch (e) {
            console.log('notification insert error:', e.message);
            return false;
        }
    },


    update: async (id, data) => {
        try {
            let item = await notification.findById(id);
            item.content = data.content;
            item.link = data.link;
            item.created_at = data.created_at;
            item.movie_id = data.movie_id;

            return await item.save();

        } catch (e) {
            console.log('notification update error:', e.message);
            return false;
        }
    },

    delete: async (id) => {
        try {
            return await notification.findByIdAndRemove(id);
        } catch (e) {
            return false
        }
    }
};