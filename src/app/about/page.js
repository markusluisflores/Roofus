/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <main>
      <NavBar currentPage="About" />
      <div className="flex justify-center w-screen">
        <div className="flex flex-col justify-center items-center align-middle pt-4 w-5/6">
          <div className="bg-brandWhite mb-8 p-6 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <h2
                className={`${roboto.className} text-3xl font-bold text-gray-800 mb-10 underline underline-offset-4`}
              >
                About Us
              </h2>
              <div className={`${roboto.className} text-lg text-black`}>
                <p>
                  Roofus was created to connect pets seeking a loving home with
                  their future families. While this is currently a mock website
                  developed by Markus Flores, Raymond Santos, and Renee Michaud
                  for our Web Development II class at SAIT, we hope to keep it
                  active and expand upon it for potential future use.
                </p>
                <p className="mt-5">
                  The name &quot;Roofus&quot; is a heartfelt tribute to Renee&apos;s beloved cat,
                  Rufus, who recently passed away. It also reflects our mission to
                  help put a &quot;roof&quot; over the heads of pets in need.
                </p>
              </div>
            </div>
            {/* Logo here for now, could maybe add a photo of us or something? Whatever you guys want to place here */}
            <div className="w-full md:w-1/2 py-6">
              <img
                src="/assets/logo/roofus_transparent_cropped.png"
                alt="logo"
                className="w-full h-full rounded object-scale-down"
              />
            </div>
            <hr className="w-full h-1 border-gray-500 my-10" />
            <div className="pt-4">
              <h2
                className={`${roboto.className} text-3xl font-bold text-gray-800 underline underline-offset-4`}
              >
                Meet Our Pets
              </h2>
            </div>
          </div>

          <div className="bg-brandWhite rounded-xl shadow-lg mb-8 px-6 pb-6 flex flex-wrap">
            <div className="md:w-1/2 order-1 md:order-1 mb-5">
              <img
                src="/assets/about/rufus.png"
                alt="Rufus the Cat"
                className="w-full min-h-[360px] max-h-[700px] object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4 order-2 md:order-2">
              <h2
                className={`${roboto.className} text-2xl font-bold text-black mb-4 px-4`}
              >
                Rufus
              </h2>
              <div className={`${roboto.className} text-lg text-black px-4`}>
                <p className="mb-5">
                  For nearly 18 years, Rufus lived a long, fulfilling, and
                  adventurous life with his family. He was adopted in Florida,
                  where he became a member of the neighborhood cat gang and would
                  often host gatherings for them in the backyard. He enjoyed
                  bringing &quot;gifts&quot; to his owners, including dead lizards, bugs,
                  and even a live squirrel that he once brought into the house.
                  Him and his family lived in Florida for several years before
                  making the long journey to Canada, where they settled down for
                  good.
                </p>
                <p className="mb-5">
                  Rufus was a very affectionate cat who loved being close to his
                  owners, especially as he grew older. He could often be found
                  curled up on someone&apos;s lap or sharing a pillow with them at
                  night. He was content simply to be included — when Renee was a
                  child, Rufus would even let her put a bonnet on his head and
                  push him around in a stroller. A true foodie, Rufus had a
                  particular love for ice cream, chicken, and cool ranch doritos
                  on the odd occasion he managed to sneak a taste. He was also
                  deeply in tune with human emotions, always offering comfort
                  during tough times.
                </p>
                <p className="mb-5">
                  Some of Rufus&apos;s favorite activities included lounging by the
                  fireplace, watching movies with Renee on her laptop, and
                  traveling between all the food bowls to get a taste of everyone
                  else&apos;s dinner. He loved to give affectionate headbutts to those
                  around him, and occasionally would groom their hair.
                </p>
                <p className="mb-5">
                  Rufus was a very deeply loved cat who is greatly missed and will
                  always hold a special place in his family&apos;s hearts.
                </p>
                <p className="mb-5">In Loving Memory</p>
                <p className="mb-5 mr-5">2007 - 2024 ♡</p>
              </div>
            </div>
          </div>
          <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
            <div className="w-full md:w-1/2 pl-4 order-2 md:order-1">
              <h2
                className={`${roboto.className} text-2xl font-bold text-black mb-4 px-4`}
              >
                Brownie
              </h2>
              <div className={`${roboto.className} text-lg text-black px-4`}>
                <p className="mb-5 mr-5">
                  Brownie joined the Michaud family after a week of relentless
                  begging from Renee and her brother Sam to their parents. As a
                  puppy, she quickly earned a reputation for chewing things such
                  as sandals, toilet paper, and even a pair of reading glasses.
                  She spent her early years in their Florida home before moving to
                  Canada with her family.
                </p>
                <p className="mb-5 mr-5">
                  Despite her small stature and adorable face, Brownie is fiercely
                  protective of her family and is fully convinced that she&apos;s a
                  fearsome guard dog. Her family often jokes that she resembles
                  the Lorax, Frank Gallagher, or even her owner Peter. Known as
                  the diva of the household, Brownie often refuses to eat her own
                  food, preferring to hold out for the &quot;good stuff&quot; like chicken,
                  cheese, sweet potato, or spaghetti. Stubborn as she can be, she
                  loves her family deeply and is unwaveringly loyal.
                </p>
                <p className="mb-5 mr-5">
                  Brownie is also a cancer survivor, having recently undergone a
                  major surgery to remove a mass from her chest. Thankfully, she
                  is now cancer-free! In her golden years, Brownie enjoys a
                  peaceful and pampered life filled with love, attention, and
                  plenty of treats from her family.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-5">
              <img
                src="/assets/about/brownie.png"
                alt="Brownie the Dog"
                className="w-full min-h-[360px] max-h-[700px] object-cover rounded"
              />
            </div>
          </div>
          <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-5">
              <img
                src="/assets/about/sooty.png"
                alt="Sooty the Cat"
                className="w-full min-h-[360px] max-h-[700px] object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
              <h2
                className={`${roboto.className} text-2xl font-bold text-black mb-4 px-4`}
              >
                Sooty
              </h2>
              <div className={`${roboto.className} text-lg text-black px-4`}>
                <p className="mb-5">
                  The newest addition to the family, Sooty, was brought home from
                  Edmonton as a very young kitten, only being a month old at the
                  time. Raised during the pandemic, he developed an obsessive
                  attachment to his owner, Renee. As a kitten, Sooty was
                  mischievous and energetic, often causing chaos and playfully
                  messing with the other animals in the household.
                </p>
                <p className="mb-5 mr-5">
                  Weighing in a whopping 22 pounds, Sooty is affectionately teased
                  by his family for his round figure and his pointy fangs, which
                  give him a bat-like appearance. He displays many unusual, almost
                  human-like or dog-like behaviors, such as petting humans back
                  when they pet him or playing fetch with his favorite pom-pom.
                  Renee often refers to Sooty as her &quot;child&quot; because he follows
                  her everywhere and sleeps in the crook of her arm every night,
                  sometimes even tucked under the covers like a baby.
                </p>
                <p className="mb-5 mr-5">
                  In his free time, Sooty enjoys eating plants, carrying his
                  pom-pom around, and birdwatching from the window. He has a
                  fascination with bags and cardboard boxes and loves car rides,
                  where he sits in a &quot;car seat&quot; (which is actually just a
                  cardboard box). Sooty has a special fondness for Christmas,
                  especially the tree, which he takes great pleasure in knocking
                  ornaments off of. He also has a particular set of drink coasters
                  and a suitcase handle that he loves to lick, though no one has
                  figured out why. His unique personality and odd habits are part
                  of many reasons why he is so loved by his family.
                </p>
              </div>
            </div>
          </div>

          {/* Place your pets here Markus and Raymond*/}
          <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
            <div className="w-full md:w-1/2 pl-4 order-2 md:order-1">
              <h2
                className={`${roboto.className} text-2xl font-bold text-black mb-4 px-4`}
              >
                Yuna
              </h2>
              <div className={`${roboto.className} text-lg text-black px-4`}>
                <p className="mb-5 mr-5">
                  Yuna is a golden retriever with a story as warm as her
                  personality. Born in the Philippines, she moved to Calgary at
                  five years old and has embraced her new home with boundless joy.
                  She&apos;s a foodie at heart, with a soft spot for peanut butter,
                  yogurt, and pup cups from coffee shops.
                </p>
                <p className="mb-5 mr-5">
                  Whether she&apos;s chasing a ball, swimming in the river, rolling in
                  the grass, or playing in the snow (and sneaking a bite of it),
                  Yuna lives life with contagious enthusiasm. True to her breed,
                  she&apos;s endlessly affectionate and loves nothing more than
                  cuddling with her favorite humans. While she&apos;s every bit the
                  playful and loving golden retriever, Yuna&apos;s extra-special charm
                  and wholehearted love make her one of a kind.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-5">
              <img
                src="/assets/about/yuna.jpg"
                alt="Yuna the Dog"
                className="w-full min-h-[360px] max-h-[700px] object-cover rounded"
              />
            </div>
          </div>

          <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-5">
              <img
                src="/assets/about/maxi.jpg"
                alt=""
                className="w-full min-h-[360px] max-h-[700px] object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
              <h2
                className={`${roboto.className} text-2xl font-bold text-black mb-4 px-4`}
              >
                Maxi
              </h2>
              <div className={`${roboto.className} text-lg text-black px-4`}>
                <p className="mb-5">
                  Maxi is a playful Shih Tzu and is the cutest member of the
                  Flores family. She spends her day playing with her ball and
                  giving dirty looks to stray cats. She&apos;s everyone&apos;s favorite pet
                  and constantly grabs the attention of visitors. Everyone in the
                  neighborhood knows Maxi and all the other dogs&apos; heads turn when
                  she passes by (she&apos;s like the equivalent of a popular high
                  school cheerleader to them). Don&apos;t even bother to try to take
                  Maxi&apos;s ball or you will suffer her wrath!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
