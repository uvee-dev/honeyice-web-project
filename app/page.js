import Image from "next/image";
import Hero from "../app/components/hero";
import HipAndBonesWorks from "../app/components/hipAndBonesWorks";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import About from "./components/about";
import { candles1 } from "./data";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <Hero />
      </section>

      <section className="h-[auto]">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col h-[60vh] md:flex-row gap-4">
            <div className="md:w-1/2 ">
              <div
                className="bg-cover h-full p-8 flex flex-col gap-4 justify-end bg-center"
                style={{ backgroundImage: " url(/MS.png)" }}
              >
                <div className="flex mt-2 flex-row">
                  <div className="md:w-2/3 xl:w-3/5">
                    Words sobre la cancion, puedes poner lo que quieras aqui.
                  </div>
                  <div>
                    <Link className="flex items-center" href={"/"}>
                      Spotify <ArrowTopRightIcon className="ml-2" />{" "}
                    </Link>
                    <Link className="flex items-center" href={"/"}>
                      Youtube <ArrowTopRightIcon className="ml-2" />
                    </Link>
                    <Link className="flex items-center" href={"/"}>
                      Apple Music <ArrowTopRightIcon className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:w-1/2 bg-cover px-8 py-9 flex flex-col justify-between gap-4 text-gray-200 bg-center"
              style={{ backgroundImage: " url(/works/candles/1.jpg)" }}
            >
              <div>
                <h2 className="text-xl font-semibold">HONEYÏCE CANDLES</h2>
                <p className="text-sm">Giving you more than our 2 scents.</p>
              </div>

              <div>
                <p>Candle Details:</p>
                <ul>
                  <li>Hand-poured in Montreal.</li>
                  <li>Made with Organic Local Beeswax.</li>
                  <li>100% Natural.</li>
                  <li>Phthalate and Paraben FREE</li>
                  <li>100 % Natural unbleached cotton wicks</li>
                  <li>8 oz </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:px-24 md:py-72">
            <HipAndBonesWorks />
          </div>
        </section>

        <section className="w-screen h-screen">
          <About />
        </section>
      </section>
    </main>
  );
}
