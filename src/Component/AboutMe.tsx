import React from 'react';
import image from '/AboutMeImgs/aboutImage.webp';

interface SectionData {
  icon: string;
  title: string;
  content: string;
}

const aboutData: SectionData[] = [
  {
    icon: '👩‍💼',
    title: 'من أنا',
    content:
      'علي النونو، وُلد في صنعاء في 7 يونيو 1980م، واندفع شغفه بكرة القدم منذ نعومة أظافره. هذا الشغف دفعه للسعي وراء تحقيق حلمه في عالم الساحرة المستديرة. علي النونو، أسطورة كرة القدم اليمنية، أبدع بموهبته الاستثنائية مع أندية مثل أهلي صنعاء والمريخ السوداني وغيرهن من الاندية المحلية والدولية. والآن بعد اعتزاله، يستمر في تحفيز الآخرين كمدرب، تاركاً بصمة رائعة على مستقبل كرة القدم اليمنية.',
  },
  {
    icon: '⚽',
    title: 'رحلة كرة القدم',
    content: 'علي النونو بدأ مسيرته الكروية في نادي أهلي صنعاء عام 1995، وانتقل لفترات قصيرة للعب في النادي المصري ونادي شعب إب. تألق مع نادي المريخ في السودان ونادي البسيتين في البحرين، ثم عاد لينضم لأهلي صنعاء حتى عام 2010. أكمل مسيرته الكروية مع نادي التلال وأهلي صنعاء حتى عام 2014، حيث أبدع في الهجوم وأحرز العديد من الأهداف.'
  },
  {
    icon: '🥇',
    title: 'أبرز إنجازاته',
    content: 'حقق العديد من الإنجازات البارزة خلال مسيرته، بما في ذلك الألقاب والجوائز التي فاز بها والأرقام القياسية التي حطمها، وذلك يُجسد رحلته الناجحة في عالم كرة القدم.'
  },
];

const aboutDataHtml = aboutData.map((section, index) => (
  <div key={index} className="w-full flex rounded py-4 ">

    <h1 className="text-3xl border-2 border-[#D50808] rounded-full w-fit h-fit mt-2 pt-1">
      {section.icon}
    </h1>

    <div className="mr-2">
      <h1 className="text-2xl 2xl:text-3xl font-bold text-[#F0F4FA] mb-1">{section.title}</h1>
      <p className='text-white text-opacity-80 text-xs 2xl:text-sm text-justify '>{section.content}</p>
    </div>

  </div>
))

const AboutMe: React.FC = () => {
  return (
    <div className="bg-center bg-cover mt-20 pb-10 " style={{ backgroundImage: '' }}>

      <div className="flex flex-col-reverse md:flex-row justify-around ">

        <div className="w-[50%]">

          <h1 className="text-3xl 2xl:text-5xl font-bold text-[#F0F4FA] w-fit border-b-4 pb-2 mb-2">
            <span className=" text-[#D50808]">معلومات</span> عني
          </h1>

          {aboutDataHtml}

          <button
            className="py-2 px-8 bg-[#D50808] text-[#F0F4FA] rounded-md font-medium font-cairo mr-14 mt-2"
          >
            أقرأ أكثر
          </button>

        </div>

        <div className="rounded-s-sm ">
          <img src={image} alt="ali alnon image" className="w-full h-[29rem] " />
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
