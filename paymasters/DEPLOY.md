
// Deploy a Diamond

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

- OwnershipFacet
0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c

- OpenBarPFacet
0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7

```js
[
    ["0xe185eb297f436084b21670e1fe477fccf0a5c021", 0, ["0x1f931c1c"]],
]
```

## _args

#### Format:

`[contractOwner]`

#### Example

```js
["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]
```