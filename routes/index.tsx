import { Head } from "$fresh/runtime.ts";
import ContactCards from "../islands/ContactCards.tsx";

export default function Home() {
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
      comment: null,
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
      comment: "オタクと社会の話をします ※kaito_tateyama アカウントは現在は所持していません。",
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
        <title>portfolio::uta8a</title>
      </Head>
      <div class="p-20 mx-auto">
        <h1 class="text-4xl py-5">Masanori Tani</h1>
        <p>Cybozuで働いています。</p>
        <a href="/contact" class="underline font-bold">Contact</a>
      </div>
    </>
  );
}
