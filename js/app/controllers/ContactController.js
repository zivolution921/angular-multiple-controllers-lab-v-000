function ContactController() {
  var vm = this;

  vm.name = 'Ziv';
  vm.email = 'ziv@example.com';
  vm.phone = '800-800-9000';

  this.changeName = function() {
    vm.name = "NotZiv";
  }
}

angulalr 
  .module('app')
  .controller('ContactController', ContactController);