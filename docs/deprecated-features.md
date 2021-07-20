# Deprecated Features

This page documents former features which have been deprecated, including the version that deprecated the feature and the reason for removal.

- `purge` *(deprecated in 6.9.1)* - Removed due to Discord API limitations on the age at which messages could no longer be bulk deleted.
- `inulove` *(deprecated in 6.10.2)* - Removed as incomplete, not used enough to warrant completion.
- `inuquote` *(deprecated in 6.10.2)* - Removed as incomplete, not used enough to warrant completion
- `optout` *(deprecated in 7.0.8)* - Removed as unused, unneeded for GDPR compliance.
- `block` *(deprecated in 7.1.0)* - Removed as blocking users became server-specific
- `profile` *(deprecated in 9.0.3)* - Type definition conflicts with mongoose, and lack of usage.
- `hpchar` *(deprecated in 9.2.0)* - API no longer available.
- `hpsort` *(deprecated in 9.2.0)* - API no longer available.
- `hpspell` *(deprecated in 9.2.0)* - API no longer available.
- `usage` *(deprecated in 10.2.1)* - Unused, and caused extraneous database calls.
- `contributors` *(deprecated in 10.2.5)* - Removal of all-contributors integration, issues with http request.
- `adventure` *(deprecated in 11.4.0)* - Removed due to noops API outages and unreliability.
- `challenge` *(deprecated in 11.4.0)* - Removed due to noops API outages and unreliability.
- `maze` *(deprecated in 11.4.0)* - Removed due to noops API outages and unreliability.
- `riddle` *(deprecated in 11.4.0)* - Removed due to noops API outages and unreliability.
- `title` *(deprecated in 11.4.0)* - Removed due to noops API outages and unreliability.
- `Emote Commands` *(boop, hug, tickle) (deprecated in 13.0.0)* - Removed during a refactor of Becca's personality.
- `listeners` command *(deprecated in 14.0.0)* - Removed as extraneous, listeners are documented here.
- `support` command *(deprecated in 14.0.0)* - Rolled in to the `help` command.
- `levelscale` command *(deprecated in 14.0.0)* - Available in the docs, removed to prevent noise in the channel where the command is called.
- `close` command *(deprecated in 14.0.0)* - Removed as unneeded with refactor of `mute/unmute` logic.
- `moderator_role` config setting *(deprecated in 14.0.0)* - Removed as unneeded with refactor of `mute/unmute` logic.
- `compliment` command *(deprecated in 14.0.0)* - Data was not always logical.
- `echo` command *(deprecated in 14.0.0)* - Was restricted to bot owner and unused.
- `jobs` command *(deprecated in 14.0.0)* - Poorly written, not worth the overhead for refactoring.
- `maths` command *(deprecated in 14.0.0)* - Unused, allowed for removal of dependency.
- `search` command *(deprecated in 14.0.0)* - Poorly written, not worth the overhead for refactoring.
- `dnd` commands *(deprecated in 14.0.0)* - Poorly written, not worth the overhead for refactoring.
- `pokemon` command *(deprecated in 14.0.0)* - Poorly written, not worth the overhead for refactoring.
- `fortune` command *(deprecated in 14.0.0)* - Removed due to lack of data needed for functionality.
- `kirby` command *(deprecated in 14.0.0)* - Lack of use.
- `piglating` command *(deprecated in 14.0.0)* - Extraneous, lack of use.
- `roll` command *(deprecated in 14.0.0)* - Extraneous, lack of use.

## Temporary Deprecations

These features have been temporarily removed, but are planned for a future version.

- `github` command *(deprecated in 14.0.0)* - May restore in a future version after implementing proper ratelimiting.
- `wiki` command *(deprecated in 14.0.0)* - May restore in a future version using the Wikipedia API.
- `habitica` command *(deprecated in 14.0.0)* - Removed due to cognitive complexity, may restore with a new approach.
