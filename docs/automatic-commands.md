# Automatic Commands

There are a few messages that Becca will automatically send when certain conditions are met.

- `Welcome Messages` - Becca will send a welcome message directly to a new user in the form of an embed. This message details how to use Becca's command and what the command prefix is. Additionally, if a valid channel is provided for the `becca!config set channel welcomes [#channel]` setting, she will send a message to the channel inviting the user to introduce themselves.
- `Depart Messages` - If a valid channel is provided for the `becca!config set channel welcomes [#channel]` setting, Becca will send a message to that channel notifying the server when a user has left. She will also document the roles that user had, so server moderators can reassign the roles if the user returns.
- `Deleted Message Log` - If a valid channel is provided for the `becca!config set channel logs [#channel] setting`, Becca will send an embed message to that channel when someone deletes a message. The embed will contain the deleted message's author and content. She will also log deleted message embeds or attachments.
- `Levelling System` - Becca listens to each message and gives experience points to the message author. The values are stored in a MongoDB database. Becca will only give experience points to a member once per minute. A message will generate experience points between 5 and X, where X is 25 + one tenth of the message length. Levels are earned on a sliding scale - check the Level Scale link in the navbar to see how levels are calculated. Becca will react to messages with `UP` to indicate that message generated experience points.
- `Command Usage Tracking` - Becca logs each command that is called and keeps a record of the number of calls for each command globally, and a record of calls on a per-server basis. The values are stored in a MongoDB database.
- `Heart Reactions`- Becca will check the ID of each message's author. If the ID is in the array provided in the `becca!config add/remove hearts [@user]` config setting, she will add the `BECCA_LOVE` react to the message.
- `Thank You Messages` - Becca checks for messages that thank a user (using a heavy regex for multi-lingual support) and will also thank that user.
- `Becca Lyria Mentions` - Becca listens for mentions (without thanks) of its own username, and responds accordingly.
- `Blocked Users` - Becca verifies on each command call that the calling user is not blocked. She will respond accordingly if the user is blocked.
