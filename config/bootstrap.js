/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // Set up fake development data (or if we already have some, avast)
  if ((await Contact.count()) > 0) {
    return;
  }

  await Contact.createEach([
    {
      firstname: 'Dean',
      lastname: 'Soto',
      email: 'dean.soto@email.com',
      phone: '+1 (886) 576-3549',
    },
    {
      firstname: 'Marquez',
      lastname: 'Barrera',
      email: 'marquez.barrera@email.com',
      phone: '+1 (809) 406-2468',
    },
    {
      firstname: 'Irene',
      lastname: 'Blanchard',
      email: 'irene.blanchard@email.com',
      phone: '+1 (995) 549-3152',
    },
    {
      firstname: 'Bennett',
      lastname: 'Castro',
      email: 'bennett.castro@email.com',
      phone: '+1 (892) 513-3854',
    },
    {
      firstname: 'Vilma',
      lastname: 'Lester',
      email: 'vilma.lester@email.com',
      phone: '+1 (984) 446-2298',
    },
    {
      firstname: 'Gayle',
      lastname: 'Carrillo',
      email: 'gayle.carrillo@email.com',
      phone: '+1 (888) 580-3769',
    },
    {
      firstname: 'Kane',
      lastname: 'Sharp',
      email: 'kane.sharp@email.com',
      phone: '+1 (880) 504-2753',
    },
    {
      firstname: 'Allie',
      lastname: 'Maynard',
      email: 'allie.maynard@email.com',
      phone: '+1 (929) 495-2576',
    },
    {
      firstname: 'Crawford',
      lastname: 'Fernandez',
      email: 'crawford.fernandez@email.com',
      phone: '+1 (870) 439-2585',
    },
    {
      firstname: 'Sadie',
      lastname: 'Blackwell',
      email: 'sadie.blackwell@email.com',
      phone: '+1 (973) 431-2707',
    },
    {
      firstname: 'Vera',
      lastname: 'George',
      email: 'vera.george@email.com',
      phone: '+1 (945) 556-2476',
    },
    {
      firstname: 'Clements',
      lastname: 'Wilkerson',
      email: 'clements.wilkerson@email.com',
      phone: '+1 (952) 514-2805',
    },
    {
      firstname: 'Hopper',
      lastname: 'Padilla',
      email: 'hopper.padilla@email.com',
      phone: '+1 (986) 524-2508',
    },
    {
      firstname: 'Sandra',
      lastname: 'Battle',
      email: 'sandra.battle@email.com',
      phone: '+1 (942) 496-2292',
    },
  ]);
  // ```
};
