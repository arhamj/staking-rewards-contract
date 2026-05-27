# Staking Rewards Contract

A time-based ERC20 staking rewards contract, derived from the Synthetix
`StakingRewards` design. Users deposit a staking token and continuously
accrue a rewards token over a configurable distribution period.

## Contracts

- `StakingRewards.sol` — core staking contract. Users `stake`, `withdraw`,
  `getReward`, or `exit`. The owner can recover non-staking ERC20s and
  configure the rewards duration; the designated rewards distributor calls
  `notifyRewardAmount` to start or top up a reward epoch.
- `StakingRewardUpdater.sol` — helper used by the deployer to roll multiple
  expired `StakingRewards` instances into a new epoch in one transaction
  (accept ownership, set duration, fund, notify, hand ownership back).
- `RewardsDistributionRecipient.sol`, `Owned.sol`, `Pausable.sol` — access
  control and pause primitives used by the core contract.
- `interfaces/IStakingRewards.sol` — external interface.
- `utils/ERC20Token.sol` — minimal ERC20 used in tests/migrations.

## Requirements

- [Node.js](https://nodejs.org/) and npm
- [Truffle](https://trufflesuite.com/) (`npm install -g truffle`)
- Solidity `0.5.16` (resolved automatically by Truffle)

## Setup

```sh
npm install
```

## Build

```sh
make build
# or
truffle compile
```

## Develop

Launches the Truffle development console with an in-memory chain:

```sh
make develop
# or
truffle develop
```

## Deploy

Configure a network in `truffle-config.js`, then update the constructor
arguments in `migrations/3_deploy_staking_rewards.js` (owner, rewards
distributor, rewards token, staking token) and run:

```sh
truffle migrate --network <network-name>
```

## Usage

1. Deploy `StakingRewards` with the owner, rewards distributor, rewards
   token, and staking token addresses.
2. Optionally call `setRewardsDuration` (default is 7 days).
3. Transfer the reward budget to the contract.
4. The rewards distributor calls `notifyRewardAmount(reward)` to begin the
   epoch.
5. Users approve and `stake`, then claim with `getReward` or unwind with
   `exit`.

## License

Released under the [MIT License](./LICENSE).
