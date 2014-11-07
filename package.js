Package.describe({
  name: 'peterellisjones:describe',
  summary: "Drop-in replacement for Meteor Tinytest to support 'describe', 'context' and 'it' blocks",
  version: '1.0.2',
  git: 'https://github.com/peterellisjones/describe.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('tinytest');
  api.addFiles('peterellisjones:describe.js');
  api.export('describe');
});
