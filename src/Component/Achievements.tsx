
interface SectionData {
  title: string;
  description: string;
}

const myAchievements: SectionData[] = [
  {
    title: "أكثر لاعب يمني تهديفًا: ",
    description: "حقق علي النونو رقمًا قياسيًا كأكثر لاعب يمني يحرز الأهداف في تاريخ كرة القدم اليمنية.",
  },
  {
    title: "بطولات محلية متميزة: ",
    description: "توج بالعديد من البطولات المحلية مع نادي أهلي صنعاء ونادي المريخ، مساهمًا في تحقيق الفوز ورفع الكؤوس.",
  },
  {
    title: "تألق في البطولات القارية: ",
    description: "شارك بفخر في البطولات القارية لكرة القدم، مثل دوري أبطال آسيا وكأس الاتحاد الآسيوي، حيث أبرز بمهاراته وأداءه الرائع.",
  },
  {
    title: "تكريمات وجوائز: ",
    description: "حصد علي النونو العديد من التكريمات والجوائز تقديرًا لإسهاماته ومساهمته الفريدة في عالم كرة القدم.",
  },
  {
    title: " قائد فذ ومثال للإلهام: ",
    description: "تميز بقيادته الحكيمة والمثالية للفرق التي لعب معها، واعتبر نموذجًا للشباب الطموح الذين يتطلعون لتحقيق النجاحات الكروية.",
  },
  {
    title: "إرث تاريخي: ",
    description: " ترك بصمة دائمة في تاريخ كرة القدم اليمنية، ويظل اسمه مرتبطًا بالتطور والتقدم للرياضة في بلده.",
  }
]

const myAchievementsHtml = myAchievements.map((section, index) => (
  <div key={index} className="flex gap-2 mt-8 ">

    <div className="w-[15px] h-[15px] rounded-full bg-[#fff] mt-1"></div>
    <p className="md:w-[80%] w-[90%]"><span className="text-[#F0F4FA] text-opacity-80 font-bold">{section.title}</span><span className=" text-[#F0F4FA] text-opacity-60">{section.description}</span></p>

  </div>

))


const Achievements: React.FC = () => {
  return (
    <div className="bg-cover bg-lightgray bg-[url('/AchievementsImgs/AchievementsBg.webp')] py-10 flex flex-col items-center">

      <div className="flex flex-col md:flex-row w-[90%] justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#F0F4FA] w-fit border-b-4 pb-2 mb-2">
            <span className=" text-[#D50808]">إنجازاتي</span> وجوائزي
          </h1>
          <p className="text-[#FFFFFF] text-opacity-60 mt-8 md:w-[80%]">تميز علي النونو بإنجازات متميزة وحصاد جوائز مُشرِّفة خلال مسيرته الكروية المبهرة. من بين أبرز إنجازاته:</p>
          {myAchievementsHtml}
        </div>

        <img src="/AchievementsImgs/AchievementsMainImg.webp" alt="AchievementsMainImg" className="w-[40%] h-auto rounded-xl hidden md:flex" />
      </div>

      <div className="flex w-[90%] justify-between md:mt-0 mt-14">

        <div className="flex  gap-10 md:w-[50%] mt-6 text-center ">

          <div >
            <h1 className="text-[#FFF] font-bold md:text-5xl text-4xl mb-4">7<span className="bg-[#FF0202] bg-opacity-75 rounded-tr-[30px] pt-4 pr-2">09</span></h1>
            <h1 className="text-[#FFF] font-bold md:text-4xl text-3xl ">مباراة</h1>
          </div>

          <div >
            <h1 className="text-[#FFF] font-bold md:text-5xl text-4xl mb-4">2<span className="bg-[#FF0202] bg-opacity-75 rounded-tr-[30px] pt-4 pr-2">26</span></h1>
            <h1 className="text-[#FFF] font-bold md:text-4xl text-3xl ">هدف</h1>
          </div>

          <div>
            <h1 className="text-[#FFF] font-bold md:text-5xl text-4xl mb-4"><span className="bg-[#FF0202] bg-opacity-75 rounded-tr-[30px] pt-4 pr-2">03</span></h1>
            <h1 className="text-[#FFF] font-bold md:text-4xl text-3xl ">أفضل لاعب</h1>
          </div>
        </div>

        <img src="/AchievementsImgs/Achievements2edImg.webp" alt="Achievements2edImg.webp" className="w-[25%] -mt-24 2xl:-mt-40 hidden md:flex" />
      </div>

    </div>
  )
}

export default Achievements