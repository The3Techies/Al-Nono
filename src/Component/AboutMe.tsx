import React from 'react';
import image from '../assets/aboutImage.webp';

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
    icon: '👩‍💼',
    title: 'من أنا',
    content:
      'علي النونو بدأ مسيرته الكروية في نادي أهلي صنعاء عام 1995، وانتقل لفترات قصيرة للعب في النادي المصري ونادي شعب إب. تألق مع نادي المريخ في السودان ونادي البسيتين في البحرين، ثم عاد لينضم لأهلي صنعاء حتى عام 2010. أكمل مسيرته الكروية مع نادي التلال وأهلي صنعاء حتى عام 2014، حيث أبدع في الهجوم وأحرز العديد من الأهداف.',
  },
  {
    icon: '👩‍💼',
    title: 'من أنا',
    content:
      'حقق العديد من الإنجازات البارزة خلال مسيرته، بما في ذلك الألقاب والجوائز التي فاز بها والأرقام القياسية التي حطمها، وذلك يُجسد رحلته الناجحة في عالم كرة القدم.',
  },
];

const AboutMe: React.FC = () => {
  return (
    <div className="p-4 md:px-12 2xl:px-48">
      <h1 className="text-2xl font-bold my-4 text-white">
        معلومات <span className="text-red-500">عني</span>
      </h1>
      <div className="border-b-2 border-white mb-4 w-32"></div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/3 space-y-4">
          {aboutData.map((section, index) => (
            <div key={index} className="w-full rounded py-4">
              <div className="flex items-center mb-2 text-white">
                <span className="text-2xl mr-2 border-2 border-red-600 rounded-full">
                  {section.icon}
                </span>
                <h3 className="text-2xl font-bold p-2">{section.title}</h3>
              </div>
              <p className="text-white mr-12 text-xs leading-6">
                {section.content}
              </p>
            </div>
          ))}
          <button className="py-2 px-4 md:px-8 border-2 border-[#FF0000] text-[#FF0000] mr-24">
            أقرأ أكثر
          </button>
        </div>
        <div className="md:w-1/3 mb-4 md:mb-0 rounded-s-sm">
          <img src={image} alt="ali alnon image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
