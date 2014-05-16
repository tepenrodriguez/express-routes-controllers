module.exports = {
  options: {
    before: {}
  },
  index: function(req,res) {
    res.json({ msg: 'custom_name/index'} );
  },
  create: function(req,res) {
    res.json({ msg: 'custom_name/create'} );
  },
  show: function(req,res) {
    res.json( { msg: 'custom_name/show' } );
  },
  destroy: function(req,res) {
    res.json({ msg: 'custom_name/destroy'} );
  },
  update: function(req,res) {
    res.json( { msg: 'custom_name/update' } );
  }
}