(function(window) {
  'use strict';

  var originalBackbone = window.Backbone;

  module('Backbone.noConflict', {
    teardown: function() {
      window.Backbone = originalBackbone;
    }
  });

  test('noConflict', 2, function() {
    var noconflictBackbone = Backbone.noConflict();
    equal(window.Backbone, undefined, 'Returned window.Backbone');
    equal(noconflictBackbone, originalBackbone, 'No conflict Backbone is same as original');
  });
})(this);
