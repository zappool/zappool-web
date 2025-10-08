---
outline: deep
---

# FAQ


## What is the status of this project?

Zappool is currently __pre-beta__ (as of Oct'25).


## When is the payout?

Payouts are scheduled once daily, at noon UTC time.


## Is there a minimum payout amount?

Yes. We use __10 sats__ as the minimum payout amount. If that amount is not reached, it will be accumulated. Why? To keep lightning fees low.


## Why does it take so long to find a work share?

Ocean uses a relatively large share difficulty (128k). Modern industrial miners can solve this difficulty in seconds, but for a lower-hashrate BitAxe it takes minutes. The time has a wide variation due to luck, it can be as low as less than a minute, but it can be as high as 20-30 minutes. This, however does not affect the overall performance of the miner.


## Is Zappool custodial?

Yes, but for short time and amounts. Zappool receives payouts from Ocean, and pays out to users daily. Should Zapool rug you or fail, you risk one day worth of mining rewards, which is typically a quite small amount.


## Why OCEAN is used as a mother pool?

There are two main reasons:

- Ocean pool is big enough, with well over __1%__ of global hashrate, finding block daily on average (in the range of 8-14 blocks per week).
- Ocean is __permissionless__.

Additionally, Ocean allows custom block templates as well.


## What block template is used, and who controls it?

Zappool controls the block template being used (using Ocean with Datum, the runner of Datum is in control of the block template).

Although we try to stay away of the Core-vs-Knots drama, we have to take a decision.

Zappool currently uses a __Bitcoin Core__ node, version __29.0__.

Our stance is that running a relay node with more restrictive rules than the consensus doesn't make much sense, but when running a node for block template generation, then (and only then) it makes sense to exclude some consensus-valid but disliked transactions -- although that is mostly ineffective in stopping any transaction.

In the future we may offer different block template versions (e.g. Block Core and Knots).


## Do I get the block reward, if I happen to find a block?

No. Zappool uses pooled mining, not solo mining, you can't have both.

In solo mining most miners get nothing most of the time, but in the very unlikely case someone finds a block, he gets the whole block reward. In the pooled mining (used by most miners), miners share the rewards proportionally.


## Can I use Zappool with a more powerful miner as well?

Yes you can. The focus is on small miners, but it can work with larger ones as well.


## TODO

Same Nostr account or new

Bridge loan by Zappool (not if daily payments)

Fees

Alternative pools (public-pool, Braiins, ...)

Accounting, fluctuation

Open source?
