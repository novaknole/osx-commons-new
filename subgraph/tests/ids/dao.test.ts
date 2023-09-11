import {Address} from '@graphprotocol/graph-ts';
import {getDaoId} from '../../src';
import {
  afterAll,
  assert,
  beforeAll,
  describe,
  test
} from 'matchstick-as/assembly/index';
import {ADDRESS_ONE} from '../constants';

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('DAO ID generation', () => {
  test('`getDaoId` should return the hexadecimal representation of the provided address', () => {
    const address = Address.fromString(ADDRESS_ONE);
    assert.stringEquals(getDaoId(address), ADDRESS_ONE);
  });
});