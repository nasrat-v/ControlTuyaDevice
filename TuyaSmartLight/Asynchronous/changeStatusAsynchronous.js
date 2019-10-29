
const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: '40770742dc4f227126be',
  key: '144ea7591e111996'});

let stateHasChanged = false;

// Find device on network
device.find().then(() => {
  // Connect to device
  device.connect();
});

// Add event listeners
device.on('connected', () => {
  console.log('Connected to device!');
});

device.on('disconnected', () => {
  console.log('Disconnected from device.');
});

device.on('error', error => {
  console.log('Error!', error);
});

device.on('data', data => {
  console.log('Data from device:', data);

  console.log(`Boolean status of default property: ${data.dps['20']}.`);

  // Set default property to opposite
    if (!stateHasChanged) {
      device.set({dps: 20, set: true}).then(() => console.log('Device was changed'))
      // set multiple properties
      /*device.set({
          multiple: true,
          data: {
              '20': true,
              '21': 'white',
	      '22': 1500,
	      '23': 900,
	      '24': '000303e803e8',
	      '25': '04464602007803e803e800000000464602007803e8000a00000000',
	      '26': 0
         }}).then(() => console.log('Device was changed'))*/

    // Otherwise we'll be stuck in an endless
    // loop of toggling the state.
    stateHasChanged = true;
  }
});

// Disconnect after 3 seconds
setTimeout(() => { device.disconnect(); }, 3000);