Package.describe({
  summary: "Ordered traversable dictionary with a mutable ordering",
  version: '1.0.4-galaxy.0',
  documentation: null
});

Package.onUse(function (api) {
  api.use('underscore');
  api.export('OrderedDict');
  api.addFiles('ordered_dict.js', ['client', 'server']);
});
