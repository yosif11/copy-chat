
import selfcore from "selfcore";

const client = new selfcore();
const Gateway = new selfcore.Gateway(
  "NjUxNzk4NDE0MTA3MDgyNzUy.XefIkw.qSnWRAZFHCC5BUZNEZVUvqQ6yPY"
);

Gateway.on("message", (msg) => {
  if (msg.channel_id === "894315213132804149") {
    let content = msg.content ? msg.content : { embeds: [msg.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/900113940611207219/PbTdAihQZwq4PcY4zL95BuRCXnmmhN7SuLKFl-abz4qSozrTSNsyW6zXvSkQFn8e-ijp",
      content
    );
  }
});







