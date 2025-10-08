---
outline: deep
---

# Tech Stack

Zappol has several parts:

__Modified Datum server__
Ocean's [DATUM](https://ocean.xyz/docs/datum)
server is used to hand out work to the miners, and forward results to Ocean.
It also performs username conversion (proxy-mother pool), and has hooks to save work for accounting.

__Ligtning Node__
Used to receive payments from Ocean as well as to send out to users.

__Bitcoin Node__
To service Datum and the LN node.

__Backend with DB__
For accounting.

__Payer__
For executing Nostr-integrated payouts as requested.

