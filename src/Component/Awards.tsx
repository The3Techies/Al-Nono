
interface SectionData {
  title: string;
  info: string;
  imgUrl: string;
}

const awardsData: SectionData[] = [
  {
    title: "هداف الدوري",
    info: "علي النونو، النجم الكروي المميز، تمكّن من تحقيق لقب هداف الدوري في ثلاث مواسم متفرِّدة. فقد أظهر قوة تهديفية لا مثيل لها ومهارات بارعة في تسجيل الأهداف في الملاعب المحلية، حيث أبدع في موسم 2000/2001 وأعاد التألق في موسم 2004 وموسم 2012/2013. إن حصوله على هذا اللقب الغالي يُجسّد التأثير الإيجابي الذي يمتلكه ويؤكد مكانته كأحد أعظم الهدافين في تاريخ الدوري والكرة اليمنية بشكل عام.",
    imgUrl: "/AwardsImgs/award1.webp"
  },
  {
    title: "أفضل لاعب مهاجم",
    info: "تم تكريم علي النونو بلقب أفضل لاعب مهاجم في استفتاء كاك بنك لثلاث سنوات متتالية. هذا التكريم يعكس تميزه في تحقيق الإنجازات الفردية والتأثير الإيجابي الذي يمارسه في خط هجوم فرقه.",
    imgUrl: "/AwardsImgs/award2.webp"
  },
  {
    title: "هداف غرب آسيا",
    info: "تألق علي النونو في بطولة غرب آسيا بالأردن في عام 2010، وحصل على لقب هداف البطولة. قاد هجوم منتخب بلاده ببراعة وحسم العديد من المباريات بتسجيله للأهداف الحاسمة.",
    imgUrl: "/AwardsImgs/award3.webp"
  }
]

const awardsDataHtml = awardsData.map((section, index) => (
  <div key={index} className="flex md:flex-row flex-col justify-between mb-6">

    <div className="bg-[url(/AwardsImgs/AwardsBgSmall.webp)] bg-cover min-h-[200px] md:w-[30%]  border-[1px] border-[#fff] flex justify-around items-center p-4">
      <img src={section.imgUrl} alt={`award ${index} img`} className="w-14 h-14 md:w-auto md:h-auto" />
      <h1 className="text-[#fff] font-bold text-3xl text-center">{section.title}</h1>
    </div>

    <div className="bg-[url(/AwardsImgs/AwardsBgBig.webp)] bg-cover min-h-[200px] md:w-[68%] border-[1px] border-[#fff] flex justify-center items-center">
      <p className="text-[#F0F4FA] text-opacity-80 text-center text-sm p-4">{section.info}</p>
    </div>

  </div>
))

const Awards: React.FC = () => {
  return (
    <div className="bg-[#000] bg-opacity-40 py-10 flex flex-col items-center">
      <div className="flex flex-col w-[90%] justify-between">

        <h1 className="text-3xl font-bold text-[#D50808] w-fit border-b-4 pb-2 mb-6">الجوائز</h1>
        <p className="text-[#FFFFFF] text-opacity-60 mb-6 text-justify">علي النونو، النجم الكروي المميز، حاز على جوائز رائعة، فقد تألق كهداف للدوري في ثلاث مواسم مختلفة وأحرز لقب أفضل لاعب مهاجم في استفتاء كاك بنك لثلاث سنوات. أبهر الجماهير بتسجيله الأهداف الرائعة وتحقيق لقب هداف غرب آسيا وكأس السودان.</p>
        {awardsDataHtml}

      </div>
    </div>
  )
}

export default Awards