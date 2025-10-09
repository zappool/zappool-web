---
outline: deep
---

# Accounting

Some details about reward accounting and fees.


## Short Version

In Zappool, whatever the group of miners earn at Ocean, is distributed among them. The reward is distributed proportionally.

- What Zappool receives from Ocean, is distributed to the miners
- Zappool does not charge any additional fees, but Ocean takes some fees, and the lighting payments also have some fees.


## Reward Distribution

Ocean assign rewards with each found block. Zappool distributes this to affected work shares. Each work share gets the corresponding 1/6th constribution from the next 6 found blocks. The reward for each user is the sum of their work contributions.


## Optimistic Pre-Pay

A submitted work share will have its full reward committed only after future 6 blocks are found. In order not to delay payouts, Zappool estimates the reward from future blocks, and account it to the users right away. So new users or newly added devices will see their rewards right away.

This means that Zappool may pay out rewards early (earlier than it receives from the mother pool), This is a risk Zappool takes.

Since the estimation is not precise, 75% of the pending earnings are considered for the next payout (the rest is not lost, but carried over, and will be accounted as blocks come in).


## Fees

Zappool does not currently charge any fees. Currently no plans to change this, but it may happen.

Ocean takes a 1% fee from rewards (1% is the discounted rate, due to Datum usage).

The fees of the lighting payouts is deducted from the rewards.


## Fluctuations due to block randomness

If a user has a constant hashrate (e.g. an always-on BitAxe), the stream of payouts will be relatively consistent. However, fluctuations may happen, due to the random nature of how blocks are found. This affects how Ocean attributes rewards, and how Zappool estimates pending rewards (see above). In the long run the sums compensate, computing the next payout considers the totals (total rewards earned minus total payouts).

If you hashrate fluctuates, the payout will follow it, but not exactly, and with some delay.

