initSidebarItems({"enum":[["Call","Contains one variant per dispatchable that can be called by an extrinsic."],["Error","Custom dispatch errors of this pallet."],["Event","The event emitted by this pallet."]],"struct":[["GenesisConfig","Can be used to configure the genesis state of this pallet."],["Pallet","The pallet implementing the on-chain logic."],["_GeneratedPrefixForStorageBlacklist",""],["_GeneratedPrefixForStorageCancellations",""],["_GeneratedPrefixForStorageDepositOf",""],["_GeneratedPrefixForStorageLastTabledWasExternal",""],["_GeneratedPrefixForStorageLocks",""],["_GeneratedPrefixForStorageLowestUnbaked",""],["_GeneratedPrefixForStorageNextExternal",""],["_GeneratedPrefixForStoragePreimages",""],["_GeneratedPrefixForStoragePublicPropCount",""],["_GeneratedPrefixForStoragePublicProps",""],["_GeneratedPrefixForStorageReferendumCount",""],["_GeneratedPrefixForStorageReferendumInfoOf",""],["_GeneratedPrefixForStorageVotingOf",""]],"trait":[["Config","Configuration trait of this pallet."]],"type":[["Blacklist","A record of who vetoed what. Maps proposal hash to a possible existent block number (until when it may not be resubmitted) and who vetoed it."],["Cancellations","Record of all proposals that have been subject to emergency cancellation."],["DepositOf","Those who have locked a deposit."],["LastTabledWasExternal","True if the last referendum tabled was submitted externally. False if it was a public proposal."],["Locks","Accounts for which there are locks in action which may be removed at some point in the future. The value is the block number at which the lock expires and may be removed."],["LowestUnbaked","The lowest referendum index representing an unbaked referendum. Equal to `ReferendumCount` if there isn’t a unbaked referendum."],["Module","Type alias to `Pallet`, to be used by `construct_runtime`."],["NextExternal","The referendum to be tabled whenever it would be valid to table an external proposal. This happens when a referendum needs to be tabled and one of two conditions are met:"],["Preimages","Map of hashes to the proposal preimage, along with who registered it and their deposit. The block number is the block at which it was deposited."],["PublicPropCount","The number of (public) proposals that have been made so far."],["PublicProps","The public proposals. Unsorted. The second item is the proposal’s hash."],["ReferendumCount","The next free referendum index, aka the number of referenda started so far."],["ReferendumInfoOf","Information concerning any given referendum."],["VotingOf","All votes for a particular voter. We store the balance for the number of votes that we have recorded. The second item is the total amount of delegations, that will be added."]]});