# Deploy a mastaa diamond

## \_diamondCut

#### Format

```js
[...[facetAddress, actionCode, [...functionHexHash]]];
```

#### Example

Here we have:

- DiamondCutFacet - 0xe185eb297f436084b21670e1fe477fccf0a5c021 (Mumbai: 0x274c2dc37d37d684c8808ea2bedd391244e8d41a)
  - write:
    - diamondCut (0x1f931c1c)

- DiamondLoupeFacet - 0x635D2c973a812D1753a647D85785E0fDcfCBB4d4 (Mumbai: 0x274c2dc37d37d684c8808ea2bedd391244e8d41a)
  - read:
    - facetAddresses (0x52ef6b2c)
    - facetAddress (0xcdffacc6)
    - facets (0x7a0ed627)
    - facetFunctionSelect (0xadfca15e)
    - supportsInterface (0x01ffc9a7)

- OwnershipFacet - 0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c (Mumbai: 0xb54ef1a543429332618e42b7fb84a35cbe984ba7)
  - read:
    - owner (0x8da5cb5b)
  - write:
    - transferOwnership (0xf2fde38b)

- OpenBarPFacet - 0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7 (Mumbai: 0x310baabc806a4044978e06bb0cf0cf4f0c72a54c)
- ContractPFacet - 0x86db05917b297e1b2eb5216529f6b676197db936 (Mumbai: 0x635d2c973a812d1753a647d85785e0fdcfcbb4d4)
- MaxTxPFacet - 0x99c8bd4556bcffce832b4ff9848cf5826526cf79 (Mumbai: 0xe185eb297f436084b21670e1fe477fccf0a5c021)
  - read:
    - COST_OF_POST (0x796d4371)
    - entrypoint (0xb0d691fe)
    - getDeposit (0xc399ec88)
  - write:
    - addStake (0x0396cb60)
    - deposit (0xd0e30db0)
    - postOp (0xa9a23409)
    - unlockStake (0xbb9fe6bf)
    - validatePaymasterUserOp (0xf465c77e)
    - withdrawStake (0xc23a5cea)
    - withdrawTo (0x205c2878)

- AnalyticsPFacet - 0xba77e3e8843e2ed66b30d79edf9b7f4a6d7119c0 (Mumbai: 0x71c7875b324f3e4199cea5f10da882c77986dfa5)

```js
[
  (0xe185eb297f436084b21670e1fe477fccf0a5c021, 0, [0x1f931c1c]),
  (0x635D2c973a812D1753a647D85785E0fDcfCBB4d4, 0, [0x52ef6b2c,0xcdffacc6,0x7a0ed627,0xadfca15e,0x01ffc9a]),
  (0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c, 0, [0x8da5cb5b,0xf2fde38b]),
  (0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7, 0, [0x796d4371,0xb0d691fe,0xc399ec88,0x0396cb60,0xd0e30db0,0xa9a23409,0xbb9fe6bf,0xf465c77e,0xc23a5cea,0x205c2878])
]
```

## \_args

#### Format:

`[contractOwner]`

#### Example

```js
(0x0027d7ae9A69464E096971570782a118090B47f5, 0x556D138c2B9442beb6723Ca63AE0e71457942B6F, 5)
```
