const Web3 = require('web3');
const { interface, bytecode } = require('./compile'); //That files come from the compile.js you can see it below.

const provider = "http://172.23.0.101:7545"
const web3 = new Web3(provider);

const deploy = async ()=> { //Create that function to use async & await
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: "0x"+bytecode})
        .send({ gas: '4700000', from: accounts[0]})
        .catch(console.log);

        console.log('Contract deployed to', result.options.address);

};
deploy();