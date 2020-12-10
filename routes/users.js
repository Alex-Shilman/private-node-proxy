var axios = require('axios');
var SocksProxyAgend = require('socks-proxy-agent');
var express = require('express');
var router = express.Router();
var agent = new SocksProxyAgend('socks5h://tor:9050');


/* GET users listing. */
router.get('/', function(req, res, next) {
  axios({
    url: 'https://ifconfig.me',
    httpsAgent: agent,
  })
  .then(({
    data
  }) => {
    console.log(data);
    res.json({data}); 
  });
  // res.send('respond with a resource');
});

module.exports = router;
