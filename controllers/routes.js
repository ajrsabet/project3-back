// npm packages
const router = express.Router();

// required files
// const authRoutes = require('./authController');
const inventoryRoutes = require('./inventory');
const donationRoutes = require('./donation');
const locationRoutes = require('./location');
const scheduleRoutes = require('./schedule');
const userRoutes = require('./userProfile');

// Routes
router.route('/auth', authRoutes);

// User Routes
router.route('/api/user/').get(userRoutes.getUsers);
router.route('/api/user/new').post(userRoutes.newUser);
router.route('/api/user/:id')
  .get(userRoutes.getSingleUser)
  .put(userRoutes.editUser)
  .delete(userRoutes.deleteUser)

// Inventory Routes
router.route('/api/inventory/').get(inventoryRoutes.getInventory);
router.route('/api/inventory/new').post(inventoryRoutes.newInventory);
router.route('/api/inventory/:id')
  .get(inventoryRoutes.getSingleInventory)
  .put(inventoryRoutes.editInventory)
  .delete(inventoryRoutes.deleteInventory)

// Location Routes
router.route('/api/location/').get(locationRoutes.getLocations);
router.route('/api/location/new').post(locationRoutes.newLocation);
router.route('/api/location/:id')
  .get(locationRoutes.getSingleLocation)
  .put(locationRoutes.editLocation)
  .delete(locationRoutes.deleteLocation)

// schedule Routes
router.route('/api/schedule/').get(scheduleRoutes.getSchedule);
router.route('/api/schedule/new').post(scheduleRoutes.newSchedule);
router.route('/api/schedule/:id')
  .get(scheduleRoutes.getSingleSchedule)
  .put(scheduleRoutes.editSchedule)
  .delete(scheduleRoutes.deleteSchedule)

// donation Routes
router.route('/api/donation/').get(donationRoutes.getDonations);
router.route('/api/donation/new').post(donationRoutes.newDonation);
router.route('/api/donation/:id')
  .get(donationRoutes.getSingleDonation)
  .put(donationRoutes.editDonation)
  .delete(donationRoutes.deleteDonation)




module.exports = router