const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: '23106066bcddc298d80e',
  key: '6df35ba291cb464b'});

(async () => {
  await device.find();

  await device.connect();

  //await device.set({ dps: true });
  await device.set({ dps: 28, set: 'colour' });
  await device.set({ dps: 31, set: 'ff040000016464' });
  /*await device.set({
    multiple: true,
    data: {
      '1': true,
      '27': true,
      '28': 'colour',
      '31': 'ff040000016464'
   }}).then(() => console.log('device was changed'))*/

//  await device.get({schema: true}).then(data => console.log(data))

  device.disconnect();
})();
