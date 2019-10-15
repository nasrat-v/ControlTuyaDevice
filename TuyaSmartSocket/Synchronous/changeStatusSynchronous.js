const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: '23106066bcddc298d80e',
  key: '0c4cb533c7013fce'});

(async () => {
  await device.find();

  await device.connect();

  let status = await device.get();

  console.log(`Current status: ${status}.`);

  await device.set({set: !status});

  status = await device.get();

  console.log(`New status: ${status}.`);

  device.disconnect();
})();
