function StaffController() {
  var vm = this;
  vm.name = "Joe";
  vm.email = "joe@fakeemail.com";
  vm.phone = "999-999-9999";
}

angular
  .module('app')
  .controller('StaffController', StaffController);