import { Separator } from "../ui/separator";
import {
  Swords,
  Shield,
  ArrowUpFromLine,
  ArrowDownFromLine,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const armyData = [
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/troop-0.4d7f0b0.png",
    lvl: 15,
  },
];

const spellsData = [
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
  {
    src: "https://www.clashofstats.com/_nuxt/img/spell-0.8f583eb.png",
    lvl: 15,
  },
];

const Players = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="bg-[url('https://www.clashschool.com/wp-content/uploads/2018/01/clash-of-clans-banner-coaching.png')] w-full bg-cover h-96 pt-32"></div>
      <div className="shadow-md w-full">
        <div className="container grid grid-cols-2 min-h-screen gap-4 py-4">
          <div className="bg-white drop-shadow row-span-2 h-full w-full rounded-2xl">
            <h2 className="text-lg text-white bg-gradient-to-r p-4 from-blue-500 to-white from-10% via-sky-500 via-30% rounded-t-2xl">
              Account
            </h2>
            <div className="flex p-8 gap-4">
              <img
                src="https://static1.personality-database.com/profile_images/47e735cdff554caaba820487d69f0d7b.png"
                alt="avatar"
                className="size-32 rounded-full"
              />

              <div className="my-5">
                <h2 className="text-2xl">Nickname</h2>
                <p className="text-gray-400 text-sm">#59SHJF56</p>
                <div className="flex gap-1 mt-2">
                  <img
                    src="https://api-assets.clashofclans.com/labels/64/gwTgG4oOwkse3eCpFL05AFArJMmMULIlecXNrl1Mv2g.png"
                    alt=""
                    className="size-8"
                  />
                  <img
                    src="https://api-assets.clashofclans.com/labels/64/gwTgG4oOwkse3eCpFL05AFArJMmMULIlecXNrl1Mv2g.png"
                    alt=""
                    className="size-8"
                  />
                  <img
                    src="https://api-assets.clashofclans.com/labels/64/gwTgG4oOwkse3eCpFL05AFArJMmMULIlecXNrl1Mv2g.png"
                    alt=""
                    className="size-8"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex p-8 gap-4">
              <img
                src="https://api-assets.clashofclans.com/badges/200/o1rDeJBzFW4lWcj5s_xZDgkg8iuCqUX0beLeB_Mm7Qw.png"
                alt="clan"
                className="size-32"
              />
              <div className="my-5">
                <h2 className="text-2xl">Clan</h2>
                <p className="text-gray-400 text-sm">Co-leader</p>
              </div>
            </div>
            <Separator />
            achievements, shadcn progress bar (api allows)
          </div>

          <div className="bg-white drop-shadow h-full w-full rounded-2xl">
            <h2 className="text-lg text-white bg-gradient-to-r p-4 from-blue-500 to-white from-10% via-sky-500 via-30% rounded-t-2xl">
              Home Village
            </h2>
          some season info + home troops (including siege veapons) n heroes 
            <div className="flex flex-wrap justify-center gap-2 p-8">
              {armyData.map((el) => {
                return (
                  <div className="h-15 border rounded">
                    <img src={el.src} alt="" className="size-10" />
                    <p className="text-center text-sm w-full text-gray-500">
                      {el.lvl}
                    </p>
                  </div>
                );
              })}
            </div>

            <Separator />

            <div className="flex flex-wrap justify-center gap-2 p-8">
              {spellsData.map((el) => {
                return (
                  <div className="h-15 border rounded">
                    <img src={el.src} alt="" className="size-10" />
                    <p className="text-center text-sm w-full text-gray-500">
                      {el.lvl}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white drop-shadow h-full w-full rounded-2xl">
            <h2 className="text-lg text-white bg-gradient-to-r p-4 from-blue-500 to-white from-10% via-sky-500 via-30% rounded-t-2xl">
              Builder Village
            </h2>
            some season info + builder troops n heroes
            <div className="flex flex-wrap justify-center gap-2 p-8">
              {armyData.map((el) => {
                return (
                  <div className="h-15 border rounded">
                    <img src={el.src} alt="" className="size-10" />
                    <p className="text-center text-sm w-full text-gray-500">
                      {el.lvl}
                    </p>
                  </div>
                );
              })}
            </div>

            <Separator />

            <div className="flex flex-wrap justify-center gap-2 p-8">
              {spellsData.map((el) => {
                return (
                  <div className="h-15 border rounded">
                    <img src={el.src} alt="" className="size-10" />
                    <p className="text-center text-sm w-full text-gray-500">
                      {el.lvl}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const homeAccountData = [
//   {
//     name: "Level",
//     data: 197,
//     src: "https://www.clashofstats.com/_nuxt/img/xp-small.dc3a8ac.png",
//   },
//   {
//     name: "Level",
//     data: 197,
//     src: "https://www.clashofstats.com/_nuxt/img/xp-small.dc3a8ac.png",
//   },
// ];

export default Players;
