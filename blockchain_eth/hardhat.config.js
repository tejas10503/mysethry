require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Fn3NM1DQDBdc8QODBreE0V-MFFXRyCcq',
      accounts: ['3e4dad9ff27db888825796d8fb0f75cbe5d3d021a780bed65b6535ab777c3042'],
    },
  },
};
