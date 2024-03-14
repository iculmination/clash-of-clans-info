import { Separator } from "../ui/separator";
import {
  Swords,
  Shield,
  ArrowUpFromLine,
  ArrowDownFromLine,
} from "lucide-react";

const Players = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="bg-[url('https://www.clashschool.com/wp-content/uploads/2018/01/clash-of-clans-banner-coaching.png')] w-full bg-cover h-96 pt-32"></div>
      <div className="shadow-md w-full">
        <div className="container w-full min-h-screen pt-8">
          <div className="flex gap-16">
            <img
              src="https://i.redd.it/k8n6nugyex411.jpg"
              alt=""
              className="w-56 h-56 rounded-full border border-black"
            />
            <div className="mt-6">
              <h2 className="text-4xl flex text-center items-center">
                Player's nickname
                <img
                  src="https://api-assets.clashofclans.com/leagues/72/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png"
                  alt=""
                  className="w-14 -mt-2 ml-2"
                />
              </h2>
              <p className="text-gray-500">#9PYLUG0J</p>
              <div className="flex gap-2 mt-2">
                <img
                  src="https://api-assets.clashofclans.com/labels/64/L1JDFhgOJyt1jcNnb6-IkBddd9vQSn2UeoQQGjVLEYI.png"
                  alt=""
                  className="w-12"
                />
                <img
                  src="https://api-assets.clashofclans.com/labels/64/gwTgG4oOwkse3eCpFL05AFArJMmMULIlecXNrl1Mv2g.png"
                  alt=""
                  className="w-12"
                />
                <img
                  src="https://api-assets.clashofclans.com/labels/64/tINt65InVEc35rFYkxqFQqGDTsBpVRqY9K7BJf5kr4A.png"
                  alt=""
                  className="w-12"
                />
              </div>
            </div>
          </div>
          <Separator className="my-8 rounded-full w-full mx-auto" />
          <div className="w-full flex flex-col justify-center">
            <h2 className="mx-auto mb-4 text-2xl">Season</h2>
            <div className="flex gap-4">
              <div className="flex">
                <Shield className="size-11 mt-1 mr-1" />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">13</h2>
                  <p className="text-gray-500 text-sm">Defense wins</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>

              <div className="flex">
                <Swords className="size-11 mt-1 mr-1" />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">85</h2>
                  <p className="text-gray-500 text-sm">Attack wins</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>

              <div className="flex">
                <img
                  src="https://api-assets.clashofclans.com/leagues/72/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png"
                  alt=""
                  className="size-12"
                />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">
                    6180
                  </h2>
                  <p className="text-gray-500 text-sm">Trophies</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
              <div className="flex">
                <img
                  src="https://external-preview.redd.it/y8uich0YwdxItzuXBt7TwbFIrua58fuOAIwrLOPL3IU.jpg?auto=webp&s=457cc18bc029747e70799b97c94b2d8b131ec733"
                  alt=""
                  className="size-11 mt-1 mr-1"
                />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">
                    5100
                  </h2>
                  <p className="text-gray-500 text-sm">Trophies</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
              <div className="flex">
                <ArrowUpFromLine className="size-11 mt-1 " />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">
                    3209
                  </h2>
                  <p className="text-gray-500 text-sm">Donated</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
              <div className="flex">
                <ArrowDownFromLine className="size-11 mt-1 " />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">
                    1028
                  </h2>
                  <p className="text-gray-500 text-sm">Recieved</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
            </div>
          </div>
          <Separator className="my-8 rounded-full w-full mx-auto" />
          <div className="w-full flex flex-col justify-center">
            <h2 className="mx-auto mb-4 text-2xl">Account</h2>
            <div className="flex gap-4">
              <div className="flex gap-4">
                <div className="flex">
                  <img
                    alt=""
                    src="https://www.clashofstats.com/_nuxt/img/xp-small.dc3a8ac.png"
                    className="size-11 mt-1 mr-1"
                  />
                  <div className="mt-1 ml-1">
                    <h2 className="flex text-lg text-center items-center">
                      200
                    </h2>
                    <p className="text-gray-500 text-sm">Level</p>
                  </div>
                  <Separator orientation="vertical" className="ml-4" />
                </div>
              </div>
              <div className="flex">
                <img
                  alt=""
                  src="https://www.clash.ninja/images/entities/1_15.png"
                  className="size-11 mt-1 mr-1"
                />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">15</h2>
                  <p className="text-gray-500 text-sm">TH Level</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
              <div className="flex">
                <img
                  alt=""
                  src="https://i.pinimg.com/474x/28/28/3a/28283ae1aba9295b8e2ddf63d3411027.jpg"
                  className="size-11 mt-1 mr-1"
                />
                <div className="mt-1 ml-1">
                  <h2 className="flex text-lg text-center items-center">3</h2>
                  <p className="text-gray-500 text-sm">BH Level</p>
                </div>
                <Separator orientation="vertical" className="ml-4" />
              </div>
            </div>
          </div>

          <Separator className="my-8 rounded-full w-full mx-auto" />
          <div className="w-full flex flex-col justify-center">
            <h2 className="mx-auto mb-4 text-2xl">Clan</h2>
            <div className="flex gap-16">
              <img
                src="https://api-assets.clashofclans.com/badges/70/kL6UmeznowAtffZdKwHV_Z4FtlpNbEzyW7LDdU-g_cU.png"
                alt=""
                className="size-24"
              />
              <div className="mt-4">
                <h2 className="text-2xl flex text-center items-center">
                  Player's clan
                </h2>
                <p className="text-gray-500 ">#9RQG0Y8U</p>
                <div className="flex gap-2 mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[url('https://supercell.com/images/58b140f4e7e9576dc00aa8e0435aecce/1681/bg_gamesocial_clashofclans.6d3e064f.webp')] bg-contain h-96 "></div> */}
      </div>
    </section>
  );
};

export default Players;
