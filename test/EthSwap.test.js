const Token = artifacts.require('Token');
const EthSwap = artifacts.require('EthSwap');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('EthSwap', ([deployer, investor]) => {
  // to make it visible for all the functions
  let token, ethSwap;

  before(async () => {
    token = await Token.new();
    ethSwap = await EthSwap.new(token.address);

    // Trnasfer all tokens to EthSwap
    await token.transfer(ethSwap.address, '1000000000000000000');
  });

  describe('EthSwap deployment', async () => {
    it('contract has a name', async () => {
      const name = await ethSwap.name();
      assert.equal(name, 'EthSwap Instant Exchange');
    });
  });

  describe('Token deployment', async () => {
    it('contract has a name', async () => {
      const name = await token.name();
      assert.equal(name, 'DApp Token');
    });

    it('contract has token', async () => {
      let balance = await token.balanceOf(ethSwap.address);
      assert.equal(balance.toString(), '1000000000000000000');
    });
  });

  describe('buyTokens()', async () =>{
let result
      before(async () => {
        token = await Token.new();
        ethSwap = await EthSwap.new(token.address);

        // Trnasfer all tokens to EthSwap
        await token.transfer(ethSwap.address, '1000000000000000000');
  });
      it('Allows user to instantly purchase tokens from ethSwap for a fixed price', async () => {
          ethSwap.buyTokens({from: investor,  value: web3.utils.toWei('1', 'ether')})
      })
  })
});
