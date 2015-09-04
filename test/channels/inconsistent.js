var test = require('tape')
  , uuid = require('uuid')
  , Channel = require('../../lib/channels/unimplemented-test')

test('channels throw when inconsistent', function (t) {
  t.throws(function () {
    var c = new Channel({id: uuid.v4()})
    c._recieve('bogus', 'data')
  }, 'throws when _recieve is called when channel is disconnected')

  t.throws(function () {
    var c = new Channel({id: uuid.v4()})
    c._connected()
    c._connected()
  }, 'throws when _connected is called when channel is already connected')

  t.throws(function () {
    var c = new Channel({id: uuid.v4()})
    c._disconnected()
  }, 'throws when _disconnected is called when channel is already disconnected')

  t.end()
})
