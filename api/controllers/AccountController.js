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
    let limit = req.query.limit || 10;
    let skip = ((req.query.page || 1) - 1) * limit;


    let query = {
      skip,
      limit,
      sort: req.query.sort || 'createdAt ASC'
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

    let accounts = await Account.find(query);
    let count = await Account.count({where: query.where});

    return res.send({
      count,
      data: accounts
    });
  },
  findOne: async (req, res) => {
    console.log('findOne');
    let id = req.param('id');
    let account = await Account.findOne({ id: id });
    return res.send(account);
  },
  create: async (req, res) => {
    console.log('create');
    let account = await Account.create(req.body).fetch();
    return res.send(account);
  },
  update: async (req, res) => {
    console.log('update');
    let id = req.param('id');
    let newVavlues = req.body;
    let updatedAccount = await Account.updateOne({ id }).set(newVavlues);
    return res.send(updatedAccount);
  },
  destroy: async (req, res) => {
    console.log('destroy');
    let id = req.param('id');
    let deletedAccount = await Account.destroyOne({ id });
    return res.send(deletedAccount);
  }
};
