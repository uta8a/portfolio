import { Head } from "$fresh/runtime.ts";
import ContactCards from "../islands/ContactCards.tsx";

export default function Home() {
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
