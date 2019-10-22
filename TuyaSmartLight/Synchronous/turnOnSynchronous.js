const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: '40770742dc4f227126be',
  key: '1aaf91783df2d4e7'});

(async () => {
  await device.find();

  await device.connect();

  let status = await device.get();

  console.log(`Current status: ${status}.`);

    await device.set({dps: 20, set: true});

  status = await device.get();

  console.log(`New status: ${status}.`);

  device.disconnect();
})();
