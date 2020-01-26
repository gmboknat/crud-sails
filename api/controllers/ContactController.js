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

    let query = {
      skip: req.query.skip || 0,
      limit: req.query.limit || 10,
      sort: req.query.sort || 'createdAt DESC'
    };

    if (req.query.search) {
      const filterProps = ['firstname', 'lastname', 'email', 'phone'];
      query.where = {or: []};
      filterProps.forEach((prop) => {
        let obj = {};
        obj[prop] = {contains: req.query.search};
        query.where.or.push(obj);
      });
    }

    let contacts = await Contact.find(query);
    let count = await Contact.count();

    return res.send({
      count,
      data: contacts
    });
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
