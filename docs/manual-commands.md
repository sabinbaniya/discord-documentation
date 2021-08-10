# Manual Commands

These commands are run manually by sending the prefix and the associated command keyword (listed below) and arguments.

## Bot Commands

These commands are related to Becca's information, development, or functionality.

- `about` - This command generates an embed message that provides a link to Becca's source code, the date she was created, the number of commands she can perform, and her favourite colour. The embed is sent to the channel the command message came from.

- `art` - This command returns an embed containing a Becca art! Many thanks to our wonderful artist contributors.

- `bugreport` - This command returns an embed containing a link to the GitHub issue selection page.

- `help [?command]` - This command returns an embed containing a list of available commands. If the optional `[command]` parameter is passed, Becca will return the description for that command (or an error, if that command does not exist).

- `invite` - This command returns an embed containing the link to invite Becca to a Discord server.

- `ping` - This command will generate the latency for Becca. She will send a response back with the communication time in milliseconds.

- `privacy` - This command provides information on Becca's privacy policy.

- `sponsor` - This command returns an embed with the development sponsorship/donation links.

- `uptime` - This command returns the amount of time Becca has currently been awake.

## Game Commands

These commands are related to games of some sort, or are just playful commands.

- `cat` - This command sends a random string of letters of a random length, to simulate a cat walking across your keyboard.

- `fact` - This command generates an embed containing a fun fact!

- `guess` - This command starts a game of Guess the Number. Becca will generate a number between 1 and 1000. Players have ten seconds to submit guesses, then she will announce the winner based on the closest guess.

- `joke` - This command tells you a silly joke!

- `magic [cardname]` - This command queries the Magic: The Gathering API for cards that match `[cardname]`. Becca will send a message to the channel the message contains to confirm the command was received and the search was started. For each card she finds, Becca sends an embed containing the card information. She sends a notification after 30 seconds, when the search is complete. NOTE: The API can be slow to respond so this command may take some time.

- `sus` - This command sends a message embed to the channel the user called the command in. The command will say that a certain color looks sus just like in Among Us Emergency Meetings.

- `trivia` - This command fetches a trivia question and returns an embed. The question is multiple choice, and Becca will listen for answers to the question. After 30 seconds, she will display the correct answer and announce any winners.

- `xkcd [?number]` - This command returns an embed containing today's XKCD comic. Optionally pass a comic `[number]` to get that specific comic instead.

## General Commands

These are Becca's general purpose commands.

- `becca` - This command returns an embed containing information on Becca's character.

- `caniuse [feature]` - This command returns an embed containing the `caniuse` data on the specific programming .

- `colour [hex]` - This command takes a `hex` value (with or without the # symbol) and returns an embed containing a sample of that hex colour.

- `http [status]` - This command accesses the HTTP Cat API and returns a cat photo for the given `[status]`.

- `motivation` - This command returns a motivational quote to raise your spirits. Quotes are obtained from freeCodeCamp.

- `orbit` - This command returns our global cross-platform community leaderboard.

- `space [?date (YYYY-MM-DD)]` - This command gets NASA's Space Photo of the day. Optionally pass a `[date]` to get the photo for that day instead.

- `star [@username] [?reason]` - This command sends a message embed to channel. The embed contains the command author's name, the `[reason]` if provided, and a shiny gold star! Becca will track the number of stars a user receives in the server.

- `starcount` - This command sends an embed to the channel. contains the top ten (or less) users in the server, sorted by the number of stars they have been given. The command also includes the caller's rank.

- `userinfo [?@username]` - This command returns a message embed about the message author. The embed contains their nickname, full username, account creation date, date they joined the server, roles they have, and their avatar. Optionally pass a user mention as `[@username]` to retrieve an embed containing that user's information instead.

- `username [?length]` - This command generates a DigitalOcean themed username, courtesy of MattIPv4. Optionally pass a number for `[length]` to limit the length of the username (the default value is 30).

## Moderation Commands

These are Becca's moderation commands.

- `ban [@username] [?reason]` - This command requires that the user sending it has the "Ban Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command bans `[@username]` from the server. If the `becca!config set logs_channel [#channel]` option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the ban, the name of the banned user, and the reason provided. If no reason was provided, the embed will state that. This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command kicks `[@username]` from the server. If the `becca!config set log_channel [#channel]` option is set, she will send an embed to that channel. The embed will contain the name of the user performing the kick, the name of the kicked user, and the reason provided. If no reason was provided, the embed will state that.

- `mute [@username] [?reason]` - This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will set the `[@username]`'s role provided in the `becca!config set muted_role [@role]` option, and remove all other roles. If the role option is not set, Becca will send a message to notify the author. If the `becca!config set log_channel [#channel]` option is not set, Becca will send a message to notify the author. Otherwise, she will send an embed to the log channel. The embed will contain the name of the user performing the command, the name of the restricted user, the roles that user had, and the reason provided. If no reason was provided, the embed will state that.

- `unmute [@username] [?reason]` - This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. Otherwise, the command will remove the `[@username]`'s role provided in the `muted_role` option. If the role option is not set, Becca will send a message to notify the user. If the `becca!config set log_channel [#channel]` option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the command, the name of the unrestricted user, and the reason provided. If no reason was provided, the embed will state that.

- `warn [@username] [?reason]` - This command requires that the user sending it has the "Kick Members" permission. If the permission is missing, Becca responds with a notice that the user lacks permission. If the `becca!config set log_channel [#channel]` option is set, Becca will send an embed to that channel. The embed will contain the name of the user performing the warning, the name of the warned user, and the reason provided. If no reason was provided, the embed will state that.

## Server Commands

These commands are related to server information or data.

- `config [?set] [?key] [?value]` - This command lists the current server configuration, for logging channels etc. This command is locked to moderators with the Manage Server permission. The Discord user associated with the `process.env.OWNER_ID` can access this command regardless of permissions, but should only do so for the sake of development purposes.

- `leave [server]` - Pass a server ID value for server, and Becca will leave that server. This command is locked to the Discord user associated with the `process.env.OWNER_ID` value.

- `leaderboard` - Generates an embed containing the top ten users (by points) in the server, and the level + rank of the user who called the command.

- `level` - This command sends an embed containing the message author's level and current experience points.

- `list` - This command returns embed(s) containing a list of the servers Becca is in, and the owner information for each server. This command is restricted to the bot owner only.

- `permissioncheck` - This command is locked to the `Manage Server` permission. When you run this command, Becca will check if she has the required permissions in the channel the command is used in, as well as at the server level. Becca will report the permissions she checked, the results for each permission, and a notice whether things need fixed or not.

- `resetlevel` - This command resets the level data for the server. The command requires the "Manage Server" permission. Becca will clear all level data and set every user back to 0 points.

- `resetstar` - This command resets the star counts for the server. The command requires the "Manage Server" permission. Becca will clear all of the star counts.

- `role [role]` - This command accepts the name or Discord ID of a role as `[role]`. If that role exists and is in the server `self_roles` list, Becca will add or remove the role from the user. If the role parameter is omitted, Becca will return a list of self-assignable roles.

- `server` - This command returns a message embed containing information about the current server. The information includes the server name, creation date, the user's join date, the server owner, member information, channel information, and role information.

- `suggest [suggestion]` - Sends your suggestion to the server suggestions channel. If one is not configured, rejects the command. No special formatting is required for the suggestion parameter - Becca will use all of the text following the command itself.

- `suggestion [approve|deny] [message_id] [?reason]` - Either approves or denies the suggestion in the message ID. Updates the embed with the approval/denial, the moderator who took the action, and the reason (if provided). This command requires the Manage Server permission.
