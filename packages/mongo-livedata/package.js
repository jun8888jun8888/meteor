Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '1.0.9-galaxy.0'
});

Package.onUse(function (api) {
  api.imply("mongo");
});
