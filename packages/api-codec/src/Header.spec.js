// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Header from './Header';
import json from './Header.only.json';

describe('Header', () => {
  it('decodes an actual JSON response', () => {
    const header = new Header();

    header.fromJSON(json);

    expect(
      header.blockNumber.toNumber()
    ).toEqual(0);
    expect(
      header.extrinsicsRoot.toString()
    ).toEqual('0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0');
    expect(
      header.parentHash.toString()
    ).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000');
    expect(
      header.stateRoot.toString()
    ).toEqual('0x294c3470ae3be7555240b9d034ec19c3715ba2c3f20b92441f8cea0cab66ab56');
    expect(
      header.digest.logs.toString()
    ).toEqual('[]');
  });
});
