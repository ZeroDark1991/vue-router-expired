var testUtils = require('../../lib/pipeline-test-util')
var test = testUtils.test
var routerUtil = require('../../../../src/util')

describe('expired-routes', function () {

  beforeEach(function () {
    spyOn(routerUtil, 'warn')
  })

  it('initial load', function (done) {
    test({
      data: {
        data: function (transition) {
          transition.to.router.pushExpired('helloValue')
        }
      }
    }, function (router, calls) {
      router.go('/data/hello')
      expect(router.expiredRoutes[0]).toBe('helloValue')
      done()
    })
  })
})
