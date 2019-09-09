const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  createStandart: async ()=>{
        const { stdout, stderr } = await exec(`cd ~/tezos-nft-sample
python -m client originatestandard
sudo npm run bake`);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
  },
  createWithBalance: async ()=>{
        const { stdout, stderr } = await exec(`cd ~/tezos-nft-sample
python -m client originatebalance
sudo npm run bake`);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
  }
}
