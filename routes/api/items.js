const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// Create some routes

// @route GET api/items
// @desk Get all items
// @access Public
router.get('/',  (req, res) => {
  Item.find()
  .sort({date: -1})
  .then(items => res.json(items))
});

// @route POST api/items
// @desk Create new Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
}) 

// @route DELETE api/items/:id
// @desk Delete item by id
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});


module.exports = router;