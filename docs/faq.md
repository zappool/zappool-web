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

See also: [privacy](faq.md#what-are-the-privacy-considerations).


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


### What are the privacy considerations?

If you are worried about privacy, consider using a custom Nostr identity for this, [see above](faq.md#should-i-use-my-personal-nostr-account-or-create-a-new).

Zappool can see your IP, use VPN if concerned (router level).

Zappool does not store client IP addresses.

Zappool stores the configured miner username (and device name), and time for each submitted work share, for operational accounting.


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

Also note that for Lightning payouts (which Zappool uses) Ocean is plain custodial.


### Is Zappool open source?

Yes, some parts of the software can be found here:
[github.com/zappool](https://github.com/zappool).

Zappool consists of several backend components, not all of which will be opened, but we plan to publish more of them in the near future.


### What block template is used?

Zappool controls the block template being used (using Ocean with Datum, the runner of Datum is in control of the block template).

We try to stay away of the Core-vs-Knots drama (please don't start a flame war, this is a loud-but-insignificant debate).

Zappool currently uses a Bitcoin Core node (v. 29, with customized config).

In the future we may offer different block template options (e.g. Bitcoin Core and Knots).


### What's the goal of this project?

Several goals:
- Offer a very low-barrier way for hoome miners to earn daily sats (as opposed to lottery mining)
- Demonstrate the feasability of the concept by growing to a respectable number of real users (a thousand npubs?)
- Prove the value of the Nostr-homeminers synergy
- Nudge other pools towards Nostr integration
- Show a working example of a proxy-pool, and help others start one (currently I don't know of any other one)
- Encourage both Nostr and Bitaxe usage


### Who is behind Zappool?

[Optout](https://nostr.eu/npub1kxgpwh80gp79j0chc925srk6rghw0akggduwau8fwdflslh9jvqqd3lecx)


### What's the story behind Zappool?

After looking at the [Hashpool](https://hashpool.dev) project
(of [vnprc](https://nostr.eu/npub16vzjeglr653mrmyqvu0trwaq29az753wr9th3hyrm5p63kz2zu8qzumhgd)),
I saw two avenues:

1. Build a new pool from scratch, starting with small hashrates (=very long times for finding a block), and bridge the long times with a local market for hash-ehash (custodial but blinded, option to early exit via market)

2. Create a proxy pool, based on Ocean, with periodic payouts from Ocean.

Thinking about 2. I realized that there is not much need for a hash market, nor for ecash in fact, as there is no long period to bridge.

I turned my focus to a proxy pool, which is old-style custodial, but only for a day (and small user amounts). I also realized there is a lot of synergy with Nostr!

For home miners, zapping away is a perfect and fun usecase of the the small daily payouts. Miner ID being a Nostr ID also opens up many possibilites -- payout to LN address of the npub, payout as zap, donation to someone else's npub, payout as nutzap, nostr login to your bitaxe, etc.

I put a proof-of-concept together, and launched the beta version (in October 2025).


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


### What is a Proxy Pool?

A proxy pool appears to a 'mother pool' as a mining client -- submits work shares and receives earnings. To its clients the proxy pool appears as a mining pool: it provides work, accepts shares, and distributes earnings.

The proxy pool forwards work shares to the mother pool, and disrtributes its earnings to its clients.

A proxy pool makes sense if its mode of operation -- e.g. payout mechanism -- differs from the mother pool.


## TODO

Accounting, fluctuation

Why is it paying less than Braiin?

Bridge loan by Zappool (not if daily payments)

Donate (your hash)

Pool server in Europe/America

Stratum v2?

money for the pool?
