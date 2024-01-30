<template>
  <main
    class="text-white max-w-[1800px] space-y-10 mx-auto md:px-10 px-5 pb-10"
  >
    <section
      class="sm:flex flex-wrap items-center justify-between shadow-inner border-b border-white/50 shadow-white bg-black rounded-xl py-4 px-5"
    >
      <div class="flex items-center gap-5">
        <img class="w-7" src="@/assets/resume/phone.svg" alt="" />
        <div>
          <p class="font-[900]">Phone</p>
          <p>+998 991422303</p>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <img class="w-7 min-w-[28px]" src="@/assets/resume/email.svg" alt="" />
        <div>
          <p class="font-[900]">Email</p>
          <p class="break-words w-[90%]">shahbozmamatkarimov2303@gmail.com</p>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <img class="w-7" src="@/assets/resume/location.svg" alt="" />
        <div>
          <p class="font-[900]">Address</p>
          <p>Uzbekistan, Samarkand</p>
        </div>
      </div>
    </section>
    <section class="sm:flex gap-10">
      <ol class="relative min-w-[20%] border-l-4 ml-2 text-white border-black">
        <li class="flex justify-between mb-10 ml-5">
          <div>
            <div
              class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
            ></div>
            <h1 class="flex items-center gap-2 mb-4">
              <img src="@/assets/resume/skills.svg" alt="" />Skills
            </h1>
            <div class="sm:block flex flex-wrap gap-5">
              <p
                v-for="i in data.skills"
                class="mb-1 leading-5 font-medium text-gray-100"
              >
                {{ i }}
              </p>
            </div>
          </div>
        </li>
        <li class="flex justify-between mb-10 ml-5">
          <div>
            <div
              class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
            ></div>
            <h1 class="flex items-center gap-2 mb-4">
              <img src="@/assets/resume/lang.svg" alt="" />Languages
            </h1>
            <p
              v-for="i in data.languages"
              class="mb-1 leading-5 font-medium text-gray-100"
            >
              {{ i }}
            </p>
          </div>
        </li>
        <li class="flex justify-between mb-10 ml-5">
          <div>
            <div
              class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
            ></div>
            <h1 class="flex items-center md:text-lg text-[16px] gap-2 mb-4">
              <img src="@/assets/resume/code.svg" alt="" />Development
            </h1>
            <div>
              <p
                class="mb-1 leading-6 bg-gray-500 rounded-md px-3 pb-1 pt-0.5 font-medium text-gray-100"
              >
                Web development
              </p>
              <p
                class="mb-1 leading-6 bg-gray-500 rounded-md px-3 pb-1 pt-0.5 font-medium text-gray-100"
              >
                Landing page
              </p>
              <p
                class="mb-1 leading-6 bg-gray-500 rounded-md px-3 pb-1 pt-0.5 font-medium text-gray-100"
              >
                CRM projects
              </p>
              <p
                class="mb-1 leading-6 bg-gray-500 rounded-md px-3 pb-1 pt-0.5 font-medium text-gray-100"
              >
                Admin panel
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol class="relative border-l-4 ml-2 text-white border-black">
        <li class="flex justify-between mb-10 ml-5">
          <div>
            <div
              class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
            ></div>
            <h1 class="uppercase font-bold mb-4">Personal Introduction</h1>
            <p class="mb-1 leading-5 font-medium text-gray-100">
              To join a professional organization where I can gain my experience
              to my best with a challenging job that will develop my career in
              this field. I am a web designer with more than 9 years of rich
              experience in developing and implementing interactive websites. I
              am focused on completing projects within the required time frame
              with elegant, attractive and user friendly interface.
            </p>
          </div>
        </li>
        <li class="flex justify-between mb-10 ml-5">
          <div
            class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
          ></div>
          <div class="w-full space-y-5">
            <h1 class="uppercase font-bold mb-4">Experience</h1>
            <div class="flex items-center gap-2 w-full">
              <a
                href="https://www.linkedin.com/company/hoca-inc"
                target="_blank"
              >
                <img
                  class="h-10 w-10 rounded-md"
                  src="@/assets/resume/hoca.svg"
                  alt=""
                />
              </a>
              <div class="flex justify-between w-full">
                <div>
                  <h1>Hoca Inc</h1>
                  <p>Full Stack Web Developer</p>
                </div>
                <div class="text-end">
                  <p>07/2023 - 12/2023</p>
                  <p>Seoul, Korea</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 w-full">
              <a
                href="https://www.linkedin.com/company/programmeruz"
                target="_blank"
              >
                <img
                  class="h-10 w-10 rounded-md"
                  src="@/assets/resume/programmeruz.svg"
                  alt=""
                />
              </a>
              <div class="flex justify-between w-full">
                <div>
                  <h1>Programmer UZ</h1>
                  <p>Frontend Developer</p>
                </div>
                <div class="text-end">
                  <p>08/2023 - 01/2023</p>
                  <p>Tashkent/Samarkand, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="flex justify-between mb-10 ml-5">
          <div>
            <div
              class="absolute w-5 h-5 bg-black rounded-full -left-3 border-2 border-white"
            ></div>
            <h1 class="flex items-center gap-2 mb-4">
              Live Website & Application Projects
            </h1>
            <div class="space-y-5">
              <div class="flex gap-2">
                <a
                  class="min-w-fit max-w-[20px] pt-2"
                  href="https://florify.uz"
                  target="_blank"
                >
                  <img
                    class="h-10 w-10 rounded-md"
                    src="@/assets/resume/logos/florify.svg"
                    alt=""
                  />
                </a>
                <div>
                  <h1 class="font-semibold">Florify (Web)</h1>
                  <a
                    class="text-blue-700 text-sm"
                    href="https://florify.uz"
                    target="_blank"
                    >https://florify.uz</a
                  >
                  <p class="text-white/50 mt-2">
                    I work as a frontend developer
                  </p>
                </div>
              </div>
              <div class="flex gap-2">
                <a
                  class="min-w-fit max-w-[20px] flex items-center rounded-md h-10 w-10 bg-white"
                  href="https://dev-dla.newtribe.nl"
                  target="_blank"
                >
                  <img
                    class="w-10 px-1"
                    src="@/assets/resume/logos/dla.svg"
                    alt=""
                  />
                </a>
                <div>
                  <h1 class="font-semibold">Digital Legal Assistant (Web)</h1>
                  <a
                    class="text-blue-700 text-sm"
                    href="https://dev-dla.newtribe.nl"
                    target="_blank"
                    >https://dev-dla.newtribe.nl</a
                  >
                  <p class="text-white/50 mt-2">
                    I work as a frontend developer
                  </p>
                </div>
              </div>
              <div class="flex gap-2">
                <a
                  class="min-w-fit max-w-[20px] pt-2"
                  href="https://dev-ecommsnkr.newtribe.nl"
                  target="_blank"
                >
                  <img
                    class="w-10 min-w-[20px] rounded-md"
                    src="@/assets/resume/logos/sneacker.svg"
                    alt=""
                  />
                </a>
                <div>
                  <h1 class="font-semibold">Sneackers (Web)</h1>
                  <a
                    class="text-blue-700 text-sm"
                    href="https://dev-ecommsnkr.newtribe.nl"
                    target="_blank"
                    >https://dev-ecommsnkr.newtribe.nl</a
                  >
                  <p class="text-white/50 mt-2">
                    We worked as a team, and the frontend developers are two
                    people
                  </p>
                </div>
              </div>
              <div class="flex gap-2">
                <a
                  class="min-w-fit max-w-[20px] flex items-center rounded-md h-10 w-10 bg-white"
                  href="https://medbozor.uz"
                  target="_blank"
                >
                  <img
                    class="w-10 px-1"
                    src="@/assets/resume/logos/medbozor.svg"
                    alt=""
                  />
                </a>
                <div>
                  <h1 class="font-semibold">Med bozor (Web)</h1>
                  <a
                    class="text-blue-700 text-sm"
                    href="https://medbozor.uz"
                    target="_blank"
                    >https://medbozor.uz</a
                  >
                  <p class="text-white/50 mt-2">
                    We worked as a team, and the frontend developers are two
                    people
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </section>
  </main>
</template>

<script setup>
const data = ref({
  skills: [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "jQuery",
    "Vue",
    "Nuxt",
    "React",
    "Next",
    "NodeJS",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
  ],
  languages: ["Uzbek", "English"],
});
</script>

<style lang="scss" scoped></style>
