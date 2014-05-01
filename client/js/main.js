Meteor.startup(function () {
  Router.configure({
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
    },
  })
	Router.map(function () {
    this.route('landing', {
      path: '/',
      layoutTemplate: 'nolayout',
    });
    this.route('list', {
      data: function () { return List.find(); }
    });
    this.route('stores', {
      data: function () { return Stores.find(); }
    });
    this.route('store', {
      path: "store/:id",
      data: function () { return Stores.findOne(this.params.id); }
    })
  });
});
