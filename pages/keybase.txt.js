import React, { Component } from 'react';

export default class KeybaseTxt extends Component {
  static getInitialProps({ res }) {
    res.end(claim);
  }

  render() {
    return <div>We'll never get this far</div>;
  }
}

const claim = `==================================================================
https://keybase.io/dawsonbotsford
--------------------------------------------------------------------

I hereby claim:

  * I am an admin of https://dawsbot.com
  * I am dawsonbotsford (https://keybase.io/dawsonbotsford) on keybase.
  * I have a public key ASDJzw6qFpV1UYX6mBcg_nwO09No6c7S9w7MIwcFszV_CQo

To do so, I am signing this object:

{
  "body": {
    "key": {
      "eldest_kid": "0120c9cf0eaa1695755185fa981720fe7c0ed3d368e9ced2f70ecc230705b3357f090a",
      "host": "keybase.io",
      "kid": "0120c9cf0eaa1695755185fa981720fe7c0ed3d368e9ced2f70ecc230705b3357f090a",
      "uid": "069fe282939fda0de3c4603163d27419",
      "username": "dawsonbotsford"
    },
    "merkle_root": {
      "ctime": 1548819361,
      "hash": "58c211e1b8cb4008302b1b5a0b1672f55d483cd2ddc9bb56184c843682f8057107beee1098450d080bf2f41aa7b25a4c9d65179c54336c09a70965b4ec8be23f",
      "hash_meta": "a580303796737b60c62640eace93ae02e2d40699b43a8bef6983b2d5ae90e3b2",
      "seqno": 4654222
    },
    "service": {
      "entropy": "2l8xwgKZaIpwWQjak24bHaOW",
      "hostname": "dawsbot.com",
      "protocol": "https:"
    },
    "type": "web_service_binding",
    "version": 2
  },
  "client": {
    "name": "keybase.io go client",
    "version": "2.13.2"
  },
  "ctime": 1548819375,
  "expire_in": 504576000,
  "prev": "1706be4291aec8b4319603e2efaf92e09382c853e23e47e1d68bc71b843f32d6",
  "seqno": 11,
  "tag": "signature"
}

which yields the signature:

hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEgyc8OqhaVdVGF+pgXIP58DtPTaOnO0vcOzCMHBbM1fwkKp3BheWxvYWTESpcCC8QgFwa+QpGuyLQxlgPi76+S4JOCyFPiPkfh1ovHG4Q/MtbEIIolrLvkQom3d+n8SP8DVred30i5WtmAB6cnT2L49UxHAgHCo3NpZ8RAKvmsCcOrcETiTS9MfGSoKZ0XVf0PJG37prmp8bWIhFJpxMKPDLC7nWF9csOm53w8TiMx7GvRS5OoXPTDrx6uCKhzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIBLCxPdBI7XFIXnDKoxgKcQ5Prg5/+Q9vMq9IbLUyd8Yo3RhZ80CAqd2ZXJzaW9uAQ==

And finally, I am proving ownership of this host by posting or
appending to this document.

View my publicly-auditable identity here: https://keybase.io/dawsonbotsford

==================================================================`;
