'use strict';

// Configuring the Adjust module
angular.module('templateform').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Template Form',
      state: 'templateform',
      type: 'dropdown',
      roles: ['admin', 'user']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'templateform', {
      title: 'Form',
      state: 'templateform.form',
      roles: ['admin', 'user']
    });
  }
]);
