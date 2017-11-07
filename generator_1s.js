var data = require("randomstring").generate(1024);
var maxMs = -1, minMs = Number.MAX_SAFE_INTEGER;
var intervalMs = 1000;

setInterval(() => {
  if (maxMs === -1) { return; }
  console.log('Max=', maxMs, 'ms', 'Min=', minMs, 'ms');
  maxMs = -1; minMs = Number.MAX_SAFE_INTEGER;
}, intervalMs)

module.exports = {
	/**
	* Before connection (optional, just for faye)
	* @param {client} client connection
	*/
	beforeConnect : function(client) {
		// Example:
		// client.setHeader('Authorization', 'OAuth abcd-1234');
		// client.disable('websocket');
	},

	/**
	* On client connection (required)
	* @param {client} client connection
	* @param {done} callback function(err) {}
	*/
	onConnect : function(client, done) {
		// Faye client
		// client.subscribe('/channel', function(message) { });

		// Socket.io client
		// client.emit('test', { hello: 'world' });

		// Primus client
		// client.write('Sailing the seas of cheese');

		// WAMP session
		// client.subscribe('com.myapp.hello').then(function(args) { });
		setInterval(() => {
			client.emit('message', {data: data, time: (new Date()).getTime()})
		}, intervalMs);

		client.on('message', (msg) => {
      var ms = (new Date()).getTime() - msg.time;
      maxMs = Math.max(maxMs, ms);
      minMs = Math.min(minMs, ms);
			//console.log('message', data, ':', (new Date()).getTime() - data, 'ms');
		});

		done();
	},

	/**
	* Send a message (required)
	* @param {client} client connection
	* @param {done} callback function(err) {}
	*/
	sendMessage : function(client, done) {
		// Example:
		// client.emit('test', { hello: 'world' });
		// client.publish('/test', { hello: 'world' });
		// client.call('com.myapp.add2', [2, 3]).then(function (res) { });
		done();
	},

	/**
	* WAMP connection options
	*/
	options : {
		// realm: 'chat'
	}
};

