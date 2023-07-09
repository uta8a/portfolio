import { Head } from "$fresh/runtime.ts";
import ContactCards from "../islands/ContactCards.tsx";

export default function Contact() {
  const contact = [
    {
      name: "GitHub",
      alias: "@uta8a",
      url: "https://github.com/uta8a",
      comment: "コードを書きます",
    },
    { name: "discord", alias: "uta8a", url: null, comment: "DMお気軽に" },
    {
      name: "mastodon わくわく鮟鱇ランド",
      alias: "@uta8a",
      url: "https://mstdn.anqou.net/@uta8a",
      comment: "一番気軽に使っています",
    },
    {
      name: "Threads",
      alias: "@uta8a",
      url: "https://www.threads.net/@uta8a",
      comment: "好きな文化の話をします",
    },
    {
      name: "Misskey CAMPHOR-",
      alias: "@uta8a",
      url: "https://social.camph.net/@uta8a",
      comment: "技術の話をします",
    },
    {
      name: "Twitter",
      alias: "@uta8a",
      url: "https://twitter.com/uta8a",
      comment: "社会の話をします",
    },
    {
      name: "Twitter",
      alias: "@kaito_tateyama",
      url: "https://twitter.com/kaito_tateyama",
      comment: "オタクの話をします",
    },
    {
      name: "Instagram",
      alias: "@uta8a",
      url: "https://www.instagram.com/uta8a/",
      comment: "半分身内用",
    },
    {
      name: "Bluesky",
      alias: "@uta8a",
      url: "https://bsky.app/profile/uta8a.bsky.social",
      comment: "あまり使っていません",
    },
    {
      name: "Misskey.io",
      alias: "@uta8a",
      url: "https://misskey.io/@uta8a",
      comment: "あまり使っていません",
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://uta8a.net/" />
        <title>portfolio::uta8a - contact</title>
      </Head>
      <div class="p-20 mx-auto">
        <ContactCards contact={contact} />
      </div>
    </>
  );
}
