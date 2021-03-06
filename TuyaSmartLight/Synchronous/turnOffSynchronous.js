
const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: '40770742dc4f227126be',
  key: 'b0e7dffc708e8587'});

(async () => {
  await device.find();

  await device.connect();

  let status = await device.get();

  console.log(`Current status: ${status}.`);

    await device.set({dps: 20, set: false});

  status = await device.get();

  console.log(`New status: ${status}.`);

  device.disconnect();
})();
