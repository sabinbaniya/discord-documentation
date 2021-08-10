# Creating Your Bot Application and Connecting it to Your Instance

Once your environment is set up, you need to connect the code to a Discord Bot application. If you have not created a Discord Bot application, you will need to follow these steps:

- Log in to the [Discord Developer site](https://discord.com/developers)

- Create a new application by clicking on the "New Application" button.

- On the left, select "Bot", then create a new bot.

## Create a Webhook

Becca is configured to send an online notice, and updates on servers it leaves or joins, through a Discord Webhook. In your server, create a new Webhook and copy the URL. You will need the ID and Token from that URL for the next step. These values are obtained from the URL in the format:

`https://discordapp.com/api/webhooks/ID/TOKEN`

## Link Your Bot Application to Becca's Code

Now that you have a bot application, you'll need to create a file called .env. You can either create the file manually, or copy the `sample.env` file. This file will contain the following variables:

> [!WARNING]
> It is highly recommended that you use the `sample.env` file as a starting point. While some of these values are optional, the code validation will fail if they are not present (or are empty) and will prevent the application from starting. The default values in the `sample.env` will allow the application to load correctly.

These values are necessary for the overall operation of the bot.

- `DISCORD_TOKEN` (REQUIRED) - The value of this variable will be your Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your Discord Bot application.

- `MONGODB` (REQUIRED) - The value of this variable will be your MongoDB authentication URI. Like the token, this needs to be kept secret to prevent unauthorised access to and modification of your database.

- `NODE_ENV` (REQUIRED) - This tells Becca whether she is in a development state or production state - the webhook message includes this value. Set this to `development` when working locally, and `production` if you are running your own instance.

- `WH_URL` (REQUIRED) - This is the URL for the Discord webhook. Becca will log when it goes online, connects to the database, and any time a server has an error.

These values are necessary for specific commands.Using an invalid value will prevent certain commands from functioning.

- `NASA_API` (OPTIONAL) - This is the API key for the NASA API

- `HABITICA_KEY` (OPTIONAL) - This is your API key for Habitica.

- `ORBIT_KEY` (OPTIONAL) - This is your API key for the Orbit.Love dashboard.

This value grants you owner privileges on your bot instance. Set this to your Discord ID.

- `OWNER_ID` (OPTIONAL) - This tells Becca which Discord account is her owner. She will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.

These values are optional and will fall back to standard Unicode characters if not present.

- `BECCA_YES` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with on successful command calls.

- `BECCA_NO` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with on failed/errored command calls.

- `BECCA_LOVE` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will use for the hearts listener.

- `BECCA_THINK` (OPTIONAL) - This is the ID or Unicode character for the emoji Becca will react with when she is @mentioned.

This is required for the Sentry logging.

- `SENTRY_DSN` (REQUIRED) - This enables external logging through Sentry.io - you will need to set up and configure a project there.
