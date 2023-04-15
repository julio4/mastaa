# Deploy a mastaa diamond

## _diamondCut

#### Format

```js
[
    ...[facetAddress, actionCode, [...functionHexHash]]
]
```

#### Example

Here we have:

- DiamondCutFacet
0xe185eb297f436084b21670e1fe477fccf0a5c021

- DiamondLoupeFacet
0x635D2c973a812D1753a647D85785E0fDcfCBB4d4
read:
facetAddresses 52ef6b2c
facetAddress cdffacc6
facets 7a0ed627
facetFunctionSelect adfca15e
supportsInterface 01ffc9a

- OwnershipFacet
0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c
read:
owner 8da5cb5b
write:
1. transferOwnership (0xf2fde38b)

- OpenBarPFacet
0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7
read:
COST OF POST 796d4371
entrypoint b0d691fe
getDeposit c399ec88
owner 8da5cb5b
write:
1. addStake (0x0396cb60)
2. deposit (0xd0e30db0)
3. postOp (0xa9a23409)
4. renounceOwnership (0x715018a6)
5. transferOwnership (0xf2fde38b)
6. unlockStake (0xbb9fe6bf)
7. validatePaymasterUserOp (0xf465c77e)
8. withdrawStake (0xc23a5cea)
9. withdrawTo (0x205c2878)

```js
[
    ["0xe185eb297f436084b21670e1fe477fccf0a5c021", 0, ["0x1f931c1c"]],
    ["0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c", 0, ["0xf2fde38b"]],
    ["0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7", 0, ["0x0396cb60","0xd0e30db0","0xa9a23409","0x715018a6","0xf2fde38b","0xbb9fe6bf","0xf465c77e","0xc23a5cea","0x205c2878"]]
]
```

## _args

#### Format:

`[contractOwner]`

#### Example

```js
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]
```