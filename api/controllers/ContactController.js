/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    console.log('find');
    console.log('req.query', req.query);
    let contacts = await Contact.find({
      skip: req.query.skip || 0,
      limit: req.query.limit || 10,
    });
    return res.send(contacts);
  },
  findOne: async (req, res) => {
    console.log('findOne');
    let id = req.param('id');
    let contact = await Contact.findOne({ id: id });
    return res.send(contact);
  },
  create: async (req, res) => {
    console.log('create');
    let contact = await Contact.create(req.body).fetch();
    return res.send(contact);
  },
  update: async (req, res) => {
    console.log('update');
    let id = req.param('id');
    let newVavlues = req.body;
    let updatedContact = await Contact.updateOne({ id }).set(newVavlues);
    return res.send(updatedContact);
  },
  destroy: async (req, res) => {
    console.log('destroy');
    let id = req.param('id');
    let deletedContact = await Contact.destroyOne({ id });
    return res.send(deletedContact);
  }
};
