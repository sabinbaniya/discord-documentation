# How to Create New Commands

This pages documents the creation process for a new command.

## Structure

Every command uses the `CommandInt` interface on which you can find these properties:

- `name` - This property is used to set the name of the command.
- `description` - This property is used to set the description of the command, or describe what the command will do when its called. This will show in the help command.
- `parameters` - (Optional) - This property is used to define the available parameters of the command. This will show in the help command. To define an optional parameter use `<?name-of-parameter>`, or use `<name-of-parameter>` if the parameter is required. When a parameter has specific values use `<action (action-1/action-2)>`.
- `category` - This property sets the category for the command. Available options are "bot", "game", "general", "mod", and "server".
- `run` - This property is the action the command takes. In this you set what the command will do when called.

## Example Command: Message Repeater

First, go to `./src/commands/general/` and create a new file called `messageRepeater.ts` or as you wish.

Then add the basic structure of our command. Note that all commands should be wrapped in a `try/catch` block and use Becca's standard error handler:

```ts
import CommandInt from "../../interfaces/CommandInt";
import { beccaErrorHandler } from "../../utils/beccaErrorHandler";

const messageRepeater: CommandInt = {
  name: "messageRepeater",
  description: "Send a message to the current channel using Becca.",
  parameters: ["<message>: Message to send."],
  category: "general",
  run: async (message) => {
    try {
      console.log("Message repeater command called!");
    } catch (error) {
      await beccaErrorHandler(
        error,
        message.guild?.name || "undefined",
        "about command",
        message.Becca.debugHook,
        message
      );
    }
  },
};
export default messageRepeater;
```

Save the file, start Becca, then in the chat write `{prefix}messageRepeater` and in the console you will see `Message repeater command called!`.

At this moment you have created a simple command that shows you a message in the console, but it does not do what we want. First, replace the `console.log` line with `const { channel, commandArguments } = message;`. With this you will get the arguments of the command, or the content of the message split by whitespaces and ignoring the first element (The first element is the command name), and the channel of the message. Now, add `const msg = commandArguments.join(" ");` to join the arguments with whitespaces to get the parameter that we require.

After you get the message, you need to send it back to the current channel. To do this, add this line: `await channel.send(msg);`. Now you can test the command! If you write `{prefix}messageRepeater Hello` in the channel, Becca will send `Hello` back to the current channel. But what will happen if you send `{prefix}messageRepeater`? You will get an error in the console because Becca cannot send an empty message. So how do you fix it? You need to verify the command arguments have a length before sending the message. Add these lines below before the `await channel.send(msg);`:

```ts
if (!msg.length) {
  await message.reply("Sorry, but you must enter a valid message.");
  return;
}
```

Now when you call the command with an empty message Becca will respond with a message saying you need to enter a message.

Congratulations! You have written your first command for Becca. We hope you are motivated to contribute to the project with more commands or fixes.
