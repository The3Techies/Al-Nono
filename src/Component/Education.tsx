

const educationData = ["حاصل على درجة الماجستير والدكتوراه في التربية البدنية الرياضية من جامعة صنعاء.", "حاصل على شهادة من ولاية فيرجينيا بالولايات المتحدة الأمريكية في تدريس كرة القدم،", "حاصل على شهادة من الاتحاد الألماني في كرة القدم بالإضافة إلى دبلوم في التربية الرياضية من مدينة لابزج.", "تمكن أيضاً من اكتساب خبرات واسعة من خلال حصوله على شهادة من قطر الأسيوية وشهادة من الاتحاد الآسيوي، بالإضافة إلى شهادة لياقة بدنية أخرى من الاتحاد الآسيوي بقطر.", "علي النونو حظي بتجربة تدريبية غنية ومتنوعة، حيث بدأ مسيرته كمساعد مدرب في نادي الأهلي صنعاء، وسرعان ما صعد إلى منصب مدرب رئيسي للنادي، حيث قاد الفريق ببراعة وحقق نجاحات مميزة. كما عمل أيضًا كمدرب لفريق وحدة عدن وحقق معهم بطولة مميزة. بالإضافة إلى ذلك، شغل منصب مدرب لأكاديمية صنعاء، حيث عكف على تطوير مهارات اللاعبين الناشئين وإعدادهم لمستقبل واعد في عالم كرة القدم. تلك التجارب التدريبية تبرز قدرته القيادية وحبه لتطوير الرياضة في اليمن وتأثيره الإيجابي على مجتمعه الرياضي."]

const educationDataHtml = educationData.map((data, index) => (
    <div key={index} className="flex mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 16 15" fill="none" className="ml-2 mt-1">
            <circle cx="7.83105" cy="7.5" r="7.5" fill={index === 0 ? "#D50808" : "#D9D9D9"} />
        </svg>
        <p className={"w-[90%]" + (index === 0 ? " text-[#D50808] font-bold" : " text-[#F0F4FA] text-sm text-opacity-60")}>{data}</p>
    </div>
))

const Education: React.FC = () => {
    return (
        <div className="bg-[url(/EducationImgs/EducationBg.webp)]  mt-8 flex flex-col items-center pb-10 ">

            <div className="w-[90%] ">

                <h1 className="text-3xl font-bold text-[#D50808] w-fit border-b-4 pb-2 mb-6">التعليم</h1>
                <p className="text-[#fff] text-opacity-60 text-justify">على الرغم من تركيز علي النونو على مسيرته الكروية المذهلة، فإنه أدرك أهمية التعليم والتحصيل العلمي. حرص على الاجتهاد في الدراسة والحصول على التعليم الجيد. حافظ على التوازن بين ممارسة كرة القدم وتحصيله العلمي، مما يُظهر التزامه بالنجاح في الحياة الأكاديمية أيضًا. يعتبر علي النونو قدوة للشباب الطموح، حيث يُلهمهم بأن يسعوا لتحقيق الإنجازات في كافة المجالات بجد واجتهاد.</p>

                <div className="flex mt-4">

                    <div className="md:w-[60%] w-auto">
                        {educationDataHtml}
                    </div>

                    <img src="/EducationImgs/EducationMainImg.webp" alt="EducationMainImg" className="h-[26rem] object-cover hidden md:flex" />

                </div>
            </div>
        </div>
    )
}

export default Education