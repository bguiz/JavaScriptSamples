'use strict';

describe('Service: myProvider', function () {

  // load the service's module
  beforeEach(module('angularFullstackApp'));

  // instantiate service
  var myProvider;
  beforeEach(inject(function (_myProvider_) {
    myProvider = _myProvider_;
  }));

  it('should do something', function () {
    expect(!!myProvider).toBe(true);
  });

});
