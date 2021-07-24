# Configure your Server

You need to configure Becca's settings using the becca!config command.

- `becca!config set prefix [prefix]`: This command determines what symbol Becca looks for to trigger a command. The default is becca!, but you may change this to whatever you wish. Note that uppercase characters will be stored as lowercase, to allow Becca to respond to either casing.

- `becca!config set log_channel [#channel]`: This command determines the name of the channel where Becca should log things like deleted messages, and kick/ban instances.

- `becca!config set welcome_channel [#channel]`: This command allows you to set the name of the channel for user welcome/depart messages.

- `becca!config set level_channel [#channel]`: Setting this to a text channel in your server means Becca will send all level up notifications to that channel. When this is not set, she will send the notification in the same channel as the message that triggered the level up.

- `becca!config set suggestion_channel [#channel]`: This is the channel where Becca will send suggestions to. Using reactions she adds, users can then upvote/downvote suggestions.

- `becca!config set muted_role [@role]`: This command sets the name of the Discord role your server uses to restrict a user's ability to send messages.

- `becca!config set hearts [@user]`: This command adds the id of the user mentioned to the hearts list - Becca automatically adds a heart react to the messages of that user. If that user is already set to receive hearts, she will remove that user instead.

- `becca!config set blocked [@user]`: This command adds the id of the user mentioned to the blocked list. Becca will refuse command access to users in the block list. If the user is already present, she will remove them instead.

- `becca!config set thanks [`on`/`off`]`: This command will turn the thanks listener on and off.

- `becca!config set levels [`on`/`off`]`: This command will turn the levels listener on and off.

- `becca!config set custom_welcome [message]:` This command will set a custom welcome message for your server. The value of [message] can be a standard sentence, and supports Discord markup - but must be kept under 1000 characters. Additionally, a couple of special strings will be replaced: `{@username}` will be replaced with the username of the new member, and `{@servername}` will be replaced with your server's name.

- `becca!config set self_roles [@role]`: This command will add or remove a role from the self-assignable list (for use with the role command).

> [!NOTE]
> Config settings are set on a per-server basis. Only moderators with the "Manage Server" permission can change the settings.

## Link Detection

Becca offers link detection as an auto-moderation feature, also managed through the config command.

Link detection will not affect messages sent by members with the `Manage Messages` permission.

- `becca!config set anti_link [#channel]`: This sets the channels where messages containing links will be automatically deleted. Use a `#channel` tag to add a single channel, or use `all` to enable it globally.

- `becca!config set permit_links [#channel]`: This sets the channels where links will *not* be automatically deleted - if you set `anti_link` to all, you can allow specific channels still with this config.

- `becca!config set link_roles [@role]`: This sets roles as immune to link moderation - you can use this to identify regulars by a role and allow them to still send links, for example.

- `becca!config set allowed_links [text]`: This command is for advanced users! You can pass a JavaScript RegExp syntax string to `text` to add a valid domain. For example, if you wanted to allow your members to share links from GitHub, you would use `becca!config set allowed_links github\.com`. Becca will not delete links that match a RegExp you provide here.

- `becca!config set link_message [...text]`: This allows you to set a custom message Becca will send when she deletes a link.

## Viewing Your Config

You can view most of your configuration settings with `becca!config view`. The three exceptions to that are `hearts`, `self_roles`, and `blocked`. These three are each viewed individually due to the potential length.

To view one of these, use `becca!config view <setting>`. For example, to view your self-assignable roles you'd use `becca!config view self_roles`.

These lists are also paginated, so you can pass a page number to view that specific page such as `becca!config view self_roles 2`.

## Resetting a Setting

If you want to reset any of the settings to their default values, run `becca!config reset <setting_name>`.
