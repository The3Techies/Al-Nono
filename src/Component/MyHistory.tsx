import { useState } from "react";


const btns = ["أهلي صنعاء", "النادي المصري", "شعب إب", "المريخ", "البسيتين", "تشرين السوري", "التلال"]
interface SectionData {
  header: string;
  years: string[];
  description: string[][];
}

const info: SectionData[] = [
  {
    header: "أهلي صنعاء، هو نادي كرة قدم وكرة سلة يمني مقره صنعاء، اليمن. تأسس عام 1952.",
    years: ["1995 - 1998", "1998 - 2005", "2007 - 2010", "2011 - 2014"],
    description: [["بدأ مسيرته الكروية مع نادي أهلي صنعاء في عام 1995م، ولعب معهم حتى عام 1998م. وفي هذا العام انتقل للعب في النادي المصري. في هذه الفترة، بدأ علي النونو مشواره الكروي مع نادي أهلي صنعاء، حيث برز بموهبته اللافتة وقدرته على تحقيق أهداف مهمة."], ["عاد علي النونو مجددًا لنادي أهلي صنعاء، حيث استمر في اللعب معهم لسنوات عديدة، وسط تألق كبير وتسجيله للعديد من الأهداف.0"], ["عاد مرة أخرى ليلعب مع نادي أهلي صنعاء بعد أن احترف في نادي تشرين السوري، وأثبت قيمته من خلال تسجيل 35 هدفًا خلال تلك الفترة."], ["أنهى مشواره الكروي مع نادي أهلي صنعاء في هذه الفترة، حيث أبدع وأثبت أنه أحد أعظم اللاعبين في تاريخ كرة القدم اليمنية حتى عام 2014م وتم إعلان اعتزاله.."]]
  },
  {
    header: "النادي المصري للألعاب الرياضية أو كما يعرف بين مشجعيه اختصاراً باسم المصري أو المصري البورسعيدي، هو نادٍ رياضي مصري محترف تأسس عام 1920 في مدينة بورسعيد، ويعتبر من الأندية الجماهيرية في مصر كما أنه الأكثر شعبية وجماهيرية في بورسعيد، فضلاً عن كونه أول نادٍ ينشأ للمصريين في منطقة قناة السويس.",
    years: ["1998"],
    description: [["في عام 1998، شهدت مسيرة علي النونو تجربة قصيرة وملهمة مع النادي المصري، النادي الكبير في مصر. وقد أثبت هذا الفرعون الصغير نفسه بمهاراته الاستثنائية وقوة تأثيره على الملعب خلال هذه الفترة. ", "علي النونو استغل كل فرصة متاحة له لإظهار موهبته وتقديم أفضل ما لديه. بالرغم من أن تلك الفترة كانت قصيرة، إلا أنه تمكن من ترك بصمة لا تنسى في ذاكرة جماهير النادي المصري. تجربة علي النونو مع النادي المصري كانت خيارًا هامًا في مسيرته الكروية، وقد أثرت بشكل إيجابي على تطوره كلاعب وساهمت في بناء ثقته بقدراته وتحقيق نجاحات أكبر في المستقبل."]]

  },
  {
    header: "نادي شعب إب هو نادي كرة قدم يمني مقره في مدينة إب. تأسس عام 1964.",
    years: ["2004"],
    description: [["في عام 2004، عاش علي النونو فترة مميزة مع نادي شعب إب، حيث خاض تجربة إعارة ملهمة. تألق النجم الكروي وأظهر مواهبه المبهرة خلال هذه الفترة، مما جعله يلفت الأنظار ويحظى بإعجاب الجماهير والمسؤولين على حد سواء.", "بفضل قدراته الاستثنائية وقوته الهجومية، استطاع علي النونو تحقيق نجاحات مميزة مع نادي شعب إب. كان لمساهمته الكبيرة دور حاسم في تعزيز أداء الفريق وتحقيق النتائج الإيجابية خلال مشاركته معهم. ", "تلك الفترة مع نادي شعب إب لم تكن مجرد إعارة، بل كانت فترة ملهمة تسهم في تنمية مهارات علي النونو وتحسين مستواه الكروي. وقد تركت هذه التجربة القيمة أثرًا إيجابيًا في مسيرته الكروية، وأعطته الثقة والعزيمة لمواصلة العطاء والتألق في الأعوام القادمة."]]
  },
  {
    header: "نادي المريخ الرياضي المعروف اختصاراً باسم المريخ هو نادي رياضي سوداني لكرة القدم مقره في مدينة أم درمان، تأسس عام 1927. يعتبر واحدًا من أعرق وأشهر الأندية الرياضية بالسودان والأكثر فوزاً بالبطولات المحلية حتى الآن. يلعب الفريق في الدوري السوداني الممتاز.",
    years: ["2005"],
    description: [["في عام 2005، شهدت مسيرة علي النونو تجربة رائعة وملهمة مع نادي المريخ في السودان. انضم النجم الكروي لصفوف الفريق السوداني الكبير، ولم يمضِ وقت طويل حتى أظهر قوته ومواهبه المتألقة على الملعب.", " تألق علي النونو بمستويات مميزة خلال فترته مع نادي المريخ، حيث قاد هجوم الفريق ببراعة وحماس، وتمكن من تحقيق نتائج مذهلة وتحقيق الفوز في العديد من المباريات الهامة.", "فترة انضمامه لنادي المريخ كانت فترة نجاحات مشرقة وتحقيق إنجازات رائعة، وقد أصبح رمزًا للفريق ومحط أنظار الجماهير السودانية. ترك هذا التواجد القوي له أثرًا إيجابيًا على مسيرته الكروية، ومكَّنه من الاستمرار في تقديم أداء استثنائي وتحقيق النجاحات المستقبلية بكل ثقة وعزيمة."]]
  },
  {
    header: "نادي البُسيتين هو ناد بحريني متعدد الرياضات مقره في البسيتين بجزيرة المُحرّق، تأسس عام 1945. ينافس النادي في رياضات كرة القدم والكرة الطائرة وتنس الطاولة وألعاب المضمار والميدان.",
    years: ["2006"],
    description: [["في عام 2006، انتقل علي النونو ليخوض تجربة مميزة وملهمة مع نادي البُسيتين في البحرين. كانت تلك الفترة تحديًا جديدًا ينتظره، ولكنه أثبت نفسه بقوة وعزيمة عالية خلال فترة انتمائه للنادي.", "بصفته لاعبًا هجوميًّا قويًّا ومهاريًّا، أسهم علي النونو بشكل كبير في تعزيز هجوم الفريق وسجل العديد من الأهداف الرائعة خلال مشاركته مع البُسيتين. كان لتألقه اللافت وتحقيق نتائج إيجابية دورًا كبيرًا في تحقيق تطلعات النادي.", "تجربة علي النونو في نادي البُسيتين كانت مناسبة تتطلب الكثير من الإلتزام والتفاني، وقد استجاب لهذا التحدي بأداء استثنائي وقوة روح مذهلة. انضمامه للنادي أضاف له جانبًا آخر من الخبرات والمعارف في مسيرته الكروية المتميزة، وأثرى تجربته بتجارب جديدة ومفيدة ليستمر في تحقيق النجاحات وتحطيم الحواجز."]]
  },
  {
    header: "نادي تشرين الرياضي من الأندية العريقة في سوريا ويقع مقره في ساحة اليمن ضمن مركز مدينة اللاذقية مقابل نادي حطين. ويحوي 3 ملاعب تدريبية لكرة القدم من العشب الصناعي وملعب تدريبي لكرة السلة بالإضافة لمدينة ملاهي.",
    years: ["2006-2007"],
    description: [["في فترة 2006-2007، عاش علي النونو تجربة مميزة وملهمة مع نادي تشرين السوري. انتقل النجم الكروي للعب في صفوف النادي السوري، ولم يمضِ وقت طويل حتى أثبت قدراته الاستثنائية ومهاراته البارعة على أرض الملعب. ", "علي النونو استفاد بشكل كبير من هذه التجربة التحضيرية، حيث ساهم بقوة في تعزيز هجوم تشرين وأظهر أداءً متميزًا وتحقيق نتائج إيجابية خلال مشاركته مع الفريق.", "تجربة علي النونو مع تشرين السوري شكلت فصلاً هامًا في مسيرته الكروية، وأثرت بشكل إيجابي على تطوير مهاراته ورؤيته للعبة. كانت تلك التجربة فرصة قيمة للنمو والتطور، وكسب خبرات ثمينة تزوده بالثقة والقوة ليواصل تحقيق الإنجازات وتحقيق الأحلام في المستقبل."]]
  },
  {
    header: "نادي التلال الرياضي الثقافي هو نادٍ رياضي يمني من مدينة كريتر في عدن، تأسس في 1905، كاسْمٍ جديد لنادي الاتحاد المحمدي.",
    years: ["2010 - 2011"],
    description: [["في فترة ما بين 2010 و2011، خاض علي النونو تجربة ملهمة ولافتة مع نادي التلال. انضم النجم الكروي لصفوف الفريق وبرهن عن موهبته الاستثنائية خلال تلك الفترة الرائعة.", "لقد قاد علي النونو هجوم التلال بقوة وبراعة، حيث تألق بأداء متميز وأحرز الأهداف المهمة في المباريات الحاسمة. أسهم تألقه في تحقيق نتائج إيجابية ونجاحات مذهلة خلال مشاركته مع الفريق.", "هذه التجربة القيمة في نادي التلال شكلت نقطة تحوّل هامة في مسيرته الكروية، وساعدته على النمو وتطوير مهاراته. تزودت هذه التجربة الثمينة علي النونو بالثقة والإصرار لمواجهة المستقبل بتحدياته وتحقيق المزيد من الإنجازات."]]
  }
]

const MyHistory: React.FC = () => {

  const [indexactive, setIndexactive] = useState(0)

  const infoHtml = info[indexactive].years.map((year, index) => {
    return (
      <div id="MyHistory" key={index} className="flex  gap-2 mt-2 ">

        <div className="w-[15px] h-[15px] rounded-full bg-[#D50808] mt-1"></div>

        <div className="md:max-w-[70%] w-[90%]">
          <h1 className="text-[#F0F4FA] text-opacity-90 font-bold md:text-md text-md" >{year}</h1>
          {info[indexactive].description[index].map((pr, idx) =>
            <p key={idx} className="text-[#F0F4FA] text-opacity-80 text-xs mb-4">{pr}</p>
          )}
        </div>

      </div>
    );
  });

  const btnsHtml = btns.map((btn, index) => (
    <button
      key={index}
      className={
        "md:w-58 md:h-12 md:p-0 text-center p-2 rounded-lg md:text-xl text-sm font-bold shadow-[0_4px_4px_0px] bg-opacity-60" +
        (index === indexactive
          ? "  shadow-[#D50808] text-[#F0F4FA] border-2 border-[#D50808] bg-[#641313]"
          : " shadow-gray-500 text-[#F0F4FA] text-opacity-80 border-2 border-black bg-black ")
      }
      onClick={() => setIndexactive(index)}
    >
      {btn}
    </button>
  ));

  return (
    <div className="bg-cover bg-lightgray bg-[url('/MyHistoryImgs/BgMyHistory.webp')] py-12 flex justify-center">
      <div className="flex flex-col md:flex-row w-[90%] justify-between">
        <div className="flex flex-col gap-6 md:flex-col ">
          <h1 className="text-3xl font-bold text-[#F0F4FA] md:w-52 w-fit border-b-4 pb-2 mb-2">
            <span className=" text-[#D50808]">تاريخي </span> الرياضي
          </h1>
          <div className="flex md:flex-col flex-row gap-6 overflow-x-auto py-2">
            {btnsHtml}
          </div>
        </div>
        <div className="w-full md:mr-10 md:mt-20 mt-2 rounded-2xl bg-[#000] bg-opacity-70 shadow-[6px_6px_10px_0px_rgba(255,2,2,0.5)] pt-10 pr-4">
          <h1 className="text-[#F0F4FA] md:text-md text-sm font-bold max-w-[90%] text-justify">
            {info[indexactive].header}
          </h1>
          {infoHtml}
        </div>
      </div>
    </div>
  );

};

export default MyHistory;
