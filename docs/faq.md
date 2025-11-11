---
outline: deep
---

# FAQ

## Using Zappool

### When is the payout?

Payouts are scheduled once daily, __at noon UTC time__.


### Is there a minimum payout amount?

Yes. We use __10 sats__ as the minimum payout amount. If that amount is not reached, it will be accumulated. Why? To keep lightning fees low.


### Get me up to speed from zero! I don't know anything about Lightning or Nostr, I just have a Bitaxe

We encourage you to start learning about Lightning and Nostr!

Here is the absolute starter kit:

- Install [Wallet of Satoshi](https://walletofsatoshi.com/) lightning wallet
- Take your lightning address from WoS (Receive tab), ex. `something@walletofsatoshi.com`
- Open your Bitaxe config
- For Stratum host and port enter `pool.zappool.org` and `23334`
- For username enter your lightning address, with "LA:" in front and all '.' dots changed to '_' underscores -- ex. `LA:something@walletofsatoshi_com`

But please check the rest of the docs, and the basics of the wallet and the Bitaxe.


### What fees are collected.

Zappool does not take any fees (as of now, Zappool beta).
Note however, that Ocean pool takes its fee -- 1% (for users with Datum).

We don't plan to charge a fee, but it may happen in the future.


### Where I can see stats?

Here: https://dashboard.zappool.org/

There is also an option to filter to your own stats (you have to enter your npub).


### Should I use my personal Nostr account, or create a new?

It depends on your privacy-paranoia level.

The recommended simple way is to use your 'regular' Nostr npub. However, it will be visible that you are mining on Zappool (your payour zaps, etc.). For most, you should be proud of this, not hide it!

If privacy is important, you can easily create a new Nostr identity, link it with a Lightning wallet, and use that with Zappool. Don't forget to back up your keys, though!


### Why does it take so long to find a work share?

Ocean uses a relatively large share difficulty (128k). Modern industrial miners can solve this difficulty in seconds, but for a lower-hashrate Bitaxe it takes minutes. The time has a wide variation due to luck, it can be as low as less than a minute, but it can be as high as 20-30 minutes. This, however does not affect the overall performance of the miner.


### Can I use Zappool with a more powerful miner as well?

Yes you can. The focus is on small miners, but it works with larger ones as well.


### Can I get paid to a lightning address without the Nostr hoopla?

It is possible, though for the full Zappool experience using of a Nostr account is strongly recommended.

It's possible to set a lightning address as username (instead of an npub), with the following important details:

- the dot '.' characters has to be changed to underscore '_' (because dot is used as the separator for the device)
- it has to be prefixed with "LA:" (3 characters)

Example: `LA:zappool@blink_sv` or `LA:zappool@blink_sv.device`.


### Do I get the block reward, if I happen to find a block?

No. Zappool uses pooled mining, not solo mining, you can't have both.

In solo mining most miners get nothing most of the time, but in the very unlikely case someone finds a block, he gets the whole block reward. In the pooled mining (used by most miners), miners share the rewards proportionally.


## About Zappool

### What is the status of this project?

Zappool is currently __beta__ (as of Nov'25).


### Is Zappool custodial?

Yes, but for short time and small amounts. Zappool receives payouts from Ocean, and pays out to users daily. Should Zapool rug you or fail, you risk one day worth of mining rewards, which is typically a quite small amount.


### Why OCEAN is used as a mother pool?

There are two main reasons:

- Ocean pool is big enough, with well over __1%__ of global hashrate, finding blocks daily on average (in the range of 8-14 blocks per week).
- Ocean is __permissionless__.

Moreover, Ocean allows custom block templates as well.

Also note that for Lightning payouts (which Zappool uses) Ocean is custodial.


### Is Zappool open source?

Yes, some parts of the software can be found here:
[github.com/zappool](https://github.com/zappool).

Zappool consists of several backend components, not all of which will be opened, but we plan to publish more of them in the near future.


### What block template is used?

Zappool controls the block template being used (using Ocean with Datum, the runner of Datum is in control of the block template).

We try to stay away of the Core-vs-Knots drama (please don't start a flame war, this is a loud-but-insignificant debate).

Zappool currently uses a Bitcoin Core node (v. 29, with customized config).

In the future we may offer different block template options (e.g. Bitcoin Core and Knots).


## General mining-related

### What alternative pools are there?

For _solo_ mining, the two most used and recommended pools are:

- __CKPool__ [solo.ckpool.org](https://solo.ckpool.org/)

- __Public Pool__ [web.public-pool.io](https://web.public-pool.io/)

For _pooled_ mining, I can recommend __Braiins__ ([pool.braiins.com](https://pool.braiins.com/)): LN payouts are possible, but it's a traditional pool with registration.
(Trivia: Did you know that they were the first mining pool ever?)


### Can I make even on my Bitaxe (using Zappool)?

Short answer: no. Even with pooled mining, you will not be able to recover the cost of your Bitaxe; if you are lucky, you may earn enough for the electricity cost.

Bitaxe is not about making money from mining, but about mining decentralization and learning. If you want profit, you need big miners, and access to a huge amounts of cheap electricity, and face a fierce competition.

So forget about profits, relax, and zap away your earning sats!


## TODO

Accounting, fluctuation

Privacy

Bridge loan by Zappool (not if daily payments)

Proxy pool - what, why?

Who, History

Donate (your hash)

Stratum v2?

Why, money for the pool?
