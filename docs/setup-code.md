# Creating Your Bot Application and Connecting it to Your Instance

Once your environment is set up, you need to connect the code to a Discord Bot application. If you have not created a Discord Bot application, you will need to follow these steps:

- Log in to the [Discord Developer site](https://discord.com/developers)
- Create a new application by clicking on the "New Application" button.
- On the left, select "Bot", then create a new bot.

## Create a Webhook (Optional)

Becca is configured to send an online notice, and updates on servers it leaves or joins, through a Discord Webhook. In your server, create a new Webhook and copy the URL. You will need the ID and Token from that URL for the next step. These values are obtained from the URL in the format:

`https://discordapp.com/api/webhooks/ID/TOKEN`

## Link Your Bot Application to Becca's Code

Now that you have a bot application, you'll need to create a file called .env. You can either create the file manually, or copy the `sample.env` file. This file will contain the following variables:

- `DISCORD_TOKEN` (REQUIRED) - The value of this variable will be your Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your Discord Bot application.
- `HABITICA_KEY` (OPTIONAL) - This is your API key for Habitica.
- `HP_KEY` (OPTIONAL) - This is the API key for the Harry Potter API
- `MONGODB` (REQUIRED) - The value of this variable will be your MongoDB authentication URI. Like the token, this needs to be kept secret to prevent unauthorised access to and modification of your database.
- `NASA_API` (OPTIONAL) - This is the API key for the NASA API
- `OWNER_ID` (OPTIONAL) - This tells Becca which Discord account is her owner. She will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.
- `NODE_ENV` (OPTIONAL) - This tells Becca whether she is in a development state or production state - the webhook message includes this value.
- `WH_ID` (RECOMMENDED) - This is the ID for the Discord webhook. Becca will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.
- `WH_TOKEN` (RECOMMENDED) - This is the token for the Discord webhook. Becca will log when it goes online, connects to the database, and any time a server has an error. This is not a required value, but highly recommended.
- `BECCA_YES` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with on successful command calls.
- `BECCA_NO` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with on failed/errored command calls.
- `BECCA_LOVE` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will use for the hearts listener.
- `BECCA_THINK` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with when she is @mentioned.
- `ENCRYPTION_KEY` (REQUIRED) - This is a 32-Byte Base64 string used to encrypt database entries. Generate this with openssl rand -base64 32.
- `SIGINING_KEY` (REQUIRED) - This is a 64-Byte Base64 string used to authenticate database entries. Generate this with openssl rand -base64 64.
- `SENTRY_DSN` (OPTIONAL) - This enables external logging through Sentry.io - you will need to set up and configure a project there.
