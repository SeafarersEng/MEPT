// ========== SECURE KEY SYSTEM ==========
const SECURE_ALLOWED_KEYS = [
  "XY12YZ1V", "ZA34AB2W", "BC56CD3X", "DE78EF4Y", "FG90GH5Z",
  "HI12IJ6A", "JK34KL7B", "LM56MN8C", "NO78OP9D", "PQ90QR0E",
  "RS12ST1F", "TU34UV2G", "VW56WX3H", "XY78YZ4I", "ZA90AB5J",
  "BC12CD6K", "DE34EF7L", "FG56GH8M"
];

const KEY_USER_MAP = {};
SECURE_ALLOWED_KEYS.forEach((key, index) => {
  KEY_USER_MAP[key] = {
    id: `user_${String(index + 1).padStart(2, '0')}`,
    device: `device_${String.fromCharCode(65 + (index % 26))}`
  };
});

// ========== QUESTIONS DATA (With ALL Answer Keys) ==========
const questionsData = [
  // ============================================================
  // ===== 7M EXAM 1 (WITH ANSWER KEYS) =====
  // ============================================================
  {
    batch: '7m_exam1',
    category: 'personal',
    type: 'Speaking (Intro)',
    en: 'Myself',
    my: 'ကိုယ်ရေးအကြောင်း',
    sub: [
      'What is your name? / နာမည်ဘယ်လိုခေါ်လဲ?',
      'How old are you? / အသက်ဘယ်လောက်လဲ?',
      'What do you do? / ဘာအလုပ်လုပ်လဲ?',
      'Where are you from? / ဘယ်ကလာလဲ?'
    ],
    answer: {
      en: 'My name is John Smith. I am 25 years old. I am a maritime student at the academy. I come from Yangon, Myanmar.',
      my: 'ကျွန်တော့်နာမည်က John Smith ပါ။ အသက် ၂၅ နှစ်ပါ။ ကျွန်တော်က ရေကြောင်းသင်တန်းကျောင်းက ကျောင်းသားပါ။ မြန်မာနိုင်ငံ၊ ရန်ကုန်ကလာတာပါ။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'personal',
    type: 'Speaking (Intro)',
    en: 'My Hometown',
    my: 'ကျွန်တော်/ကျွန်မ ဇာတိမြို့',
    sub: [
      'Where is your hometown? / ဇာတိမြို့ ဘယ်မှာလဲ?',
      'What is famous in your hometown? / ဇာတိမြို့မှာ ဘာတွေကျော်ကြားလဲ?',
      'What do you like about your hometown? / ဇာတိမြို့ကို ဘာကြိုက်လဲ?'
    ],
    answer: {
      en: 'My hometown is Yangon, the largest city in Myanmar. It is famous for the Shwedagon Pagoda and delicious street food. I love the peaceful atmosphere and friendly people there.',
      my: 'ကျွန်တော့်ဇာတိမြို့က မြန်မာနိုင်ငံရဲ့ အကြီးဆုံးမြို့ဖြစ်တဲ့ ရန်ကုန်မြို့ပါ။ ရွှေတိဂုံစေတီတော်နဲ့ အရသာရှိတဲ့ လမ်းဘေးအစားအစာတွေအတွက် ကျော်ကြားပါတယ်။ အဲဒီမှာ ငြိမ်းချမ်းတဲ့ လေထုနဲ့ ဖော်ရွေတဲ့လူတွေကို ကျွန်တော် သဘောကျတယ်။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'personal',
    type: 'Speaking (Intro)',
    en: 'Famous food & places',
    my: 'ကျော်ကြားသော အစားအစာများနှင့် နေရာများ',
    sub: [
      'What is the famous food in your country? / သင့်နိုင်ငံမှာ ဘာစားသောက်ကုန်တွေ ကျော်ကြားလဲ?',
      'Which places do you recommend to visit? / ဘယ်နေရာတွေကို သွားရောက်လည်ပတ်ဖို့ အကြံပြုလဲ?'
    ],
    answer: {
      en: 'In Myanmar, Mohinga is very famous. It is a delicious fish noodle soup. I recommend visiting Bagan, which has thousands of ancient temples, and Inle Lake, where you can see floating gardens.',
      my: 'မြန်မာနိုင်ငံမှာ မုန့်ဟင်းခါးက အရမ်းကျော်ကြားပါတယ်။ ဒါက ငါးခေါက်ဆွဲဟင်းချိုတစ်မျိုးပါ။ ပုဂံကို သွားရောက်လည်ပတ်ဖို့ အကြံပြုချင်ပါတယ်။ အဲဒီမှာ ရှေးဟောင်းဘုရားပေါင်းထောင်ချီရှိတယ်။ အင်းလေးကန်ကိုလည်း သွားလို့ရပါတယ်။ အဲဒီမှာ ရေပေါ်ဥယျာဉ်တွေကို မြင်ရမှာပါ။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'safety',
    type: 'Speaking (Workplace)',
    en: 'Restricted Areas',
    my: 'တားမြစ်ထားသော နေရာများ',
    sub: [
      'What are restricted areas? / တားမြစ်နေရာဆိုတာ ဘာလဲ?',
      'Why are they restricted? / ဘာကြောင့် တားမြစ်ထားတာလဲ?',
      'What happens if you enter without permission? / ခွင့်ပြုချက်မရှိဘဲ ဝင်ရင် ဘာဖြစ်မလဲ?'
    ],
    answer: {
      en: 'Restricted areas are places where only authorized personnel can enter. They are restricted for safety and security reasons. If you enter without permission, you may face serious consequences like accidents, injuries, or even legal action.',
      my: 'တားမြစ်နေရာဆိုတာ ခွင့်ပြုချက်ရှိတဲ့သူတွေသာ ဝင်ရောက်နိုင်တဲ့နေရာတွေပါ။ လုံခြုံရေးနဲ့ ဘေးကင်းရေးအတွက် တားမြစ်ထားတာပါ။ ခွင့်ပြုချက်မရှိဘဲ ဝင်ရင် မတော်တဆမှုတွေ၊ ဒဏ်ရာရမှုတွေ၊ ဒါမှမဟုတ် တရားရေးဆိုင်ရာ အရေးယူမှုတွေလိုမျိုး ဆိုးကျိုးတွေ ခံစားရနိုင်ပါတယ်။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'debate',
    type: 'Speaking (Debate)',
    en: 'Safety Vest and Safety Sign (Agree or Disagree?)',
    my: 'ဘေးကင်းရေး အင်္ကျီနှင့် သတိပေး ဆိုင်းဘုတ်များ (သဘောတူ/မတူ)',
    sub: [
      'Do you agree with wearing safety vests? / ဘေးကင်းရေး အင်္ကျီဝတ်ခြင်းကို သဘောတူလား?',
      'Are safety signs important? / သတိပေးဆိုင်းဘုတ်တွေ အရေးကြီးသလား?',
      'Why or why not? / ဘာကြောင့် သဘောတူ/မတူသလဲ?'
    ],
    answer: {
      en: 'Yes, I strongly agree with wearing safety vests. They make workers visible and protect them from accidents. Safety signs are also very important because they warn people about dangers. Without these measures, many accidents could happen. Safety should always come first.',
      my: 'ဟုတ်ကဲ့၊ ဘေးကင်းရေးအင်္ကျီဝတ်တာကို ကျွန်တော် အပြင်းအထန် သဘောတူတယ်။ သူတို့က အလုပ်သမားတွေကို မြင်သာစေပြီး မတော်တဆမှုတွေကနေ ကာကွယ်ပေးတယ်။ သတိပေးဆိုင်းဘုတ်တွေလည်း အရမ်းအရေးကြီးတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ သူတို့က လူတွေကို အန္တရာယ်တွေအကြောင်း သတိပေးတယ်။ ဒီအစီအမံတွေမရှိရင် မတော်တဆမှုတွေ အများကြီးဖြစ်နိုင်တယ်။ ဘေးကင်းရေးကို အမြဲတမ်း ဦးစားပေးသင့်တယ်။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'debate',
    type: 'Speaking (Debate)',
    en: 'Follow request? (Agree or Disagree)',
    my: 'တောင်းဆိုချက်ကို လိုက်နာမလား? (သဘောတူ/မတူ)',
    sub: [
      'Do you always follow safety requests? / ဘေးကင်းရေး တောင်းဆိုချက်တွေကို အမြဲ လိုက်နာလား?',
      'Why is it important to follow? / လိုက်နာဖို့ ဘာကြောင့် အရေးကြီးသလဲ?',
      'What happens if we ignore? / လျစ်လျူရှုရင် ဘာဖြစ်မလဲ?'
    ],
    answer: {
      en: 'Yes, I always follow safety requests because they are made for our protection. It is important to follow them to prevent accidents and injuries. If we ignore safety requests, we put ourselves and others in danger. Following rules shows responsibility and respect for others.',
      my: 'ဟုတ်ကဲ့၊ ကျွန်တော် ဘေးကင်းရေး တောင်းဆိုချက်တွေကို အမြဲလိုက်နာတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ သူတို့က ကျွန်တော်တို့ရဲ့ ကာကွယ်ရေးအတွက် လုပ်ထားတာပါ။ မတော်တဆမှုတွေနဲ့ ဒဏ်ရာတွေကို ကာကွယ်ဖို့ လိုက်နာဖို့ အရေးကြီးတယ်။ ဘေးကင်းရေး တောင်းဆိုချက်တွေကို လျစ်လျူရှုရင် ကိုယ်ရော သူများပါ အန္တရာယ်ထဲ ထည့်လိုက်သလိုဖြစ်တယ်။ စည်းမျဉ်းတွေကို လိုက်နာတာက တာဝန်ယူမှုနဲ့ သူတစ်ပါးကို လေးစားမှုကို ပြသခြင်းပါ။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'debate',
    type: 'Speaking (Debate)',
    en: 'How do these protect you from accidents?',
    my: 'ဒါတွေက မတော်တဆမှုများမှ ဘယ်လိုကာကွယ်ပေးသလဲ?',
    sub: [
      'How do safety vests protect you? / ဘေးကင်းရေး အင်္ကျီက ဘယ်လိုကာကွယ်ပေးသလဲ?',
      'How do safety signs help? / သတိပေးဆိုင်းဘုတ်တွေက ဘယ်လိုအကူအညီပေးသလဲ?',
      'Can you give an example? / ဥပမာတစ်ခု ပေးနိုင်မလဲ?'
    ],
    answer: {
      en: 'Safety vests protect us by making us visible to others, especially in dark or busy areas. Safety signs warn us about dangers like slippery floors or falling objects. For example, a "Wet Floor" sign tells people to be careful. These measures prevent accidents and save lives.',
      my: 'ဘေးကင်းရေးအင်္ကျီက ကျွန်တော်တို့ကို အထူးသဖြင့် မှောင်တဲ့နေရာ ဒါမှမဟုတ် လူစည်ကားတဲ့နေရာတွေမှာ မြင်သာအောင် လုပ်ပေးပြီး ကာကွယ်ပေးတယ်။ သတိပေးဆိုင်းဘုတ်တွေက ချော်တဲ့ကြမ်းပြင်လို ဒါမှမဟုတ် ပြုတ်ကျတဲ့ပစ္စည်းတွေလိုမျိုး အန္တရာယ်တွေအကြောင်း သတိပေးတယ်။ ဥပမာ၊ "စိုစွတ်သောကြမ်းပြင်" ဆိုင်းဘုတ်က လူတွေကို သတိထားဖို့ ပြောတယ်။ ဒီအစီအမံတွေက မတော်တဆမှုတွေကို ကာကွယ်ပြီး အသက်တွေကို ကယ်တယ်။'
    }
  },
  {
    batch: '7m_exam1',
    category: 'debate',
    type: 'Speaking (Debate)',
    en: 'Uniform - Agree or Disagree?',
    my: 'ယူနီဖောင်း - သဘောတူလား မတူလား?',
    sub: [
      'Do you agree with wearing uniform? / ယူနီဖောင်းဝတ်ခြင်းကို သဘောတူလား?',
      'Why or why not? / ဘာကြောင့် သဘောတူ/မတူသလဲ?',
      'What are the advantages? / အားသာချက်တွေက ဘာတွေလဲ?',
      'What are the disadvantages? / အားနည်းချက်တွေက ဘာတွေလဲ?'
    ],
    answer: {
      en: 'I agree with wearing uniforms because they create a professional image and make everyone equal. The advantages are that uniforms identify staff easily and promote teamwork. However, some people may not like uniforms because they limit personal style. Overall, I believe uniforms are beneficial in workplaces, especially on ships.',
      my: 'ယူနီဖောင်းဝတ်တာကို ကျွန်တော် သဘောတူတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ သူတို့က ပရော်ဖက်ရှင်နယ်ပုံရိပ်ကို ဖန်တီးပေးပြီး လူတိုင်းကို တန်းတူဖြစ်စေတယ်။ အားသာချက်တွေက ယူနီဖောင်းက ဝန်ထမ်းတွေကို အလွယ်တကူခွဲခြားသိစေပြီး အဖွဲ့လိုက်လုပ်ဆောင်မှုကို အားပေးတယ်။ ဒါပေမယ့် တချို့လူတွေက ကိုယ်ပိုင်စတိုင်ကို ကန့်သတ်တာကြောင့် ယူနီဖောင်းကို မကြိုက်နိုင်ဘူး။ ခြုံငုံကြည့်ရင် အထူးသဖြင့် သင်္ဘောတွေပေါ်မှာ အလုပ်ခွင်တွေမှာ ယူနီဖောင်းက အကျိုးရှိတယ်လို့ ကျွန်တော်ယုံကြည်တယ်။'
    }
  },

  // ============================================================
  // ===== 7M EXAM 2 (WITH ANSWER KEYS) =====
  // ============================================================
  {
    batch: '7m_exam2',
    category: 'speaking',
    type: 'Speaking (Picture Description)',
    en: 'World Map',
    my: 'ကမ္ဘာ့မြေပုံ',
    sub: [
      'What do you see on the map? / မြေပုံပေါ်မှာ ဘာတွေမြင်ရလဲ?',
      'Which countries are highlighted? / ဘယ်နိုင်ငံတွေ မီးမောင်းထိုးပြထားလဲ?',
      'What can you learn from this map? / ဒီမြေပုံကနေ ဘာတွေသင်ယူနိုင်လဲ?'
    ],
    answer: {
      en: 'On the world map, I can see all the continents and oceans. Some countries are highlighted in different colors. The map shows political boundaries and geographical features. From this map, I can learn about the location of countries, their sizes, and their neighbors. It helps me understand global geography.',
      my: 'ကမ္ဘာ့မြေပုံပေါ်မှာ တိုက်ကြီးအားလုံးနဲ့ သမုဒ္ဒရာတွေကို မြင်ရတယ်။ တချို့နိုင်ငံတွေကို အရောင်အမျိုးမျိုးနဲ့ မီးမောင်းထိုးပြထားတယ်။ မြေပုံက နိုင်ငံရေးနယ်နိမိတ်တွေနဲ့ ပထဝီဝင်အသွင်အပြင်တွေကို ပြသထားတယ်။ ဒီမြေပုံကနေ နိုင်ငံတွေရဲ့ တည်နေရာ၊ အရွယ်အစားနဲ့ အိမ်နီးချင်းတွေအကြောင်း သင်ယူနိုင်တယ်။ ဒါက ကမ္ဘာ့ပထဝီဝင်ကို နားလည်ဖို့ အကူအညီပေးတယ်။'
    }
  },
  {
    batch: '7m_exam2',
    category: 'speaking',
    type: 'Speaking (Picture Description)',
    en: 'Safety training',
    my: 'လုံခြုံရေးသင်တန်း',
    sub: [
      'What is happening in the picture? / ပုံထဲမှာ ဘာဖြစ်နေလဲ?',
      'Why is safety training important? / လုံခြုံရေးသင်တန်းက ဘာကြောင့် အရေးကြီးသလဲ?',
      'What do people learn in safety training? / လုံခြုံရေးသင်တန်းမှာ ဘာတွေသင်ယူရလဲ?'
    ],
    answer: {
      en: 'In the picture, workers are attending a safety training session. They are learning about emergency procedures and safety equipment. Safety training is important because it prepares people for emergencies and prevents accidents. In these sessions, people learn about first aid, fire safety, and how to use safety equipment properly.',
      my: 'ပုံထဲမှာ အလုပ်သမားတွေ လုံခြုံရေးသင်တန်းကို တက်ရောက်နေကြတယ်။ သူတို့က အရေးပေါ်လုပ်ထုံးလုပ်နည်းတွေနဲ့ ဘေးကင်းရေးပစ္စည်းတွေအကြောင်း သင်ယူနေကြတယ်။ လုံခြုံရေးသင်တန်းက အရေးကြီးတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ ဒါက လူတွေကို အရေးပေါ်အခြေအနေတွေအတွက် ပြင်ဆင်ပေးပြီး မတော်တဆမှုတွေကို ကာကွယ်ပေးတယ်။ ဒီသင်တန်းတွေမှာ လူတွေက ရှေးဦးသူနာပြုနည်း၊ မီးဘေးလုံခြုံရေးနဲ့ ဘေးကင်းရေးပစ္စည်းတွေကို ဘယ်လိုမှန်ကန်စွာသုံးရမယ်ဆိုတာ သင်ယူရတယ်။'
    }
  },
  {
    batch: '7m_exam2',
    category: 'speaking',
    type: 'Speaking (Picture Description)',
    en: 'Preventing slips, falls',
    my: 'ချော်လဲခြင်းကို ကာကွယ်ခြင်း',
    sub: [
      'What are the causes of slips and falls? / ချော်လဲခြင်းရဲ့ အကြောင်းရင်းတွေက ဘာတွေလဲ?',
      'How can we prevent them? / ဘယ်လိုကာကွယ်နိုင်မလဲ?',
      'What safety measures should we take? / ဘယ်လိုဘေးကင်းရေး အစီအမံတွေ လုပ်ဆောင်သင့်သလဲ?'
    ],
    answer: {
      en: 'Slips and falls are often caused by wet floors, uneven surfaces, or poor lighting. We can prevent them by keeping floors clean and dry, using warning signs, and wearing proper footwear. Safety measures include regular cleaning, good lighting, and using anti-slip mats. These actions help create a safer environment.',
      my: 'ချော်လဲခြင်းတွေက စိုစွတ်တဲ့ကြမ်းပြင်၊ မညီညာတဲ့မျက်နှာပြင် ဒါမှမဟုတ် အလင်းရောင်မကောင်းတာတွေကြောင့် ဖြစ်တတ်ပါတယ်။ ကြမ်းပြင်တွေကို သန့်ရှင်းပြီး ခြောက်သွေ့အောင်ထားခြင်း၊ သတိပေးဆိုင်းဘုတ်တွေသုံးခြင်းနဲ့ သင့်တော်တဲ့ဖိနပ်စီးခြင်းတို့ဖြင့် ကာကွယ်နိုင်ပါတယ်။ ဘေးကင်းရေးအစီအမံတွေက ပုံမှန်သန့်ရှင်းရေးလုပ်ခြင်း၊ အလင်းရောင်ကောင်းအောင်ထားခြင်းနဲ့ ချော်လဲမှုကာကွယ်တဲ့ဖျာတွေသုံးခြင်းတို့ ပါဝင်ပါတယ်။ ဒီလုပ်ဆောင်ချက်တွေက ပိုလုံခြုံတဲ့ပတ်ဝန်းကျင်ကို ဖန်တီးပေးပါတယ်။'
    }
  },
  {
    batch: '7m_exam2',
    category: 'debate',
    type: 'Speaking (Debate / Discussion)',
    en: 'Topic: Healthy',
    my: 'အကြောင်းအရာ: ကျန်းမာရေး',
    sub: [
      'Why exercise is important for health? / လေ့ကျင့်ခန်းက ကျန်းမာရေးအတွက် ဘာကြောင့် အရေးကြီးသလဲ?',
      'What kinds of food do you eat for your health? / ကျန်းမာရေးအတွက် ဘယ်လိုအစားအစာတွေ စားလဲ?',
      'What kinds of food do you like? / ဘယ်လိုအစားအစာတွေ ကြိုက်လဲ?',
      'How often do you do exercises? / လေ့ကျင့်ခန်း ဘယ်နှစ်ကြိမ် လုပ်လဲ?'
    ],
    answer: {
      en: 'Exercise is important because it keeps our body strong and healthy. It also reduces stress and improves our mood. For my health, I eat fruits, vegetables, and fish. I like traditional food and seafood. I do exercises three times a week, including walking and swimming. Regular exercise and healthy food help me stay fit.',
      my: 'လေ့ကျင့်ခန်းက ကျွန်တော်တို့ရဲ့ ခန္ဓာကိုယ်ကို သန်စွမ်းပြီး ကျန်းမာစေတဲ့အတွက် အရေးကြီးတယ်။ စိတ်ဖိစီးမှုကိုလည်း လျော့ကျစေပြီး စိတ်ခံစားချက်ကို ကောင်းစေတယ်။ ကျွန်တော့်ကျန်းမာရေးအတွက် သစ်သီးတွေ၊ ဟင်းသီးဟင်းရွက်တွေနဲ့ ငါးတွေကို စားတယ်။ ရိုးရာအစားအစာတွေနဲ့ ပင်လယ်စာတွေကို ကြိုက်တယ်။ တစ်ပတ်ကို သုံးကြိမ် လေ့ကျင့်ခန်းလုပ်တယ်။ လမ်းလျှောက်တာနဲ့ ရေကူးတာတွေ ပါဝင်တယ်။ ပုံမှန်လေ့ကျင့်ခန်းနဲ့ ကျန်းမာရေးနဲ့ညီညွတ်တဲ့ အစားအစာတွေက ကျွန်တော်ကို ကြံ့ခိုင်နေစေတယ်။'
    }
  },
  {
    batch: '7m_exam2',
    category: 'debate',
    type: 'Speaking (Debate / Discussion)',
    en: 'Topic: Friends and Family',
    my: 'အကြောင်းအရာ: မိတ်ဆွေများနှင့် မိသားစု',
    sub: [
      'Why friends and family are important? / မိတ်ဆွေတွေနဲ့ မိသားစုက ဘာကြောင့် အရေးကြီးသလဲ?',
      'How often do you contact your friends? / မိတ်ဆွေတွေကို ဘယ်နှစ်ကြိမ် ဆက်သွယ်လဲ?',
      'How many family members do you have? / မိသားစုဝင် ဘယ်နှစ်ယောက်ရှိလဲ?',
      'Who is the closest from your family? / မိသားစုထဲမှာ ဘယ်သူနဲ့ အရင်းနှီးဆုံးလဲ?'
    ],
    answer: {
      en: 'Friends and family are important because they support us emotionally and give us strength. I contact my friends every day through messages and calls. I have five family members: my parents, two sisters, and me. My mother is the closest to me because she always cares for me and gives me good advice.',
      my: 'မိတ်ဆွေတွေနဲ့ မိသားစုက စိတ်ပိုင်းဆိုင်ရာမှာ ကျွန်တော်တို့ကို ထောက်ပံ့ပေးပြီး ခွန်အားပေးတဲ့အတွက် အရေးကြီးတယ်။ မိတ်ဆွေတွေကို စာတိုပေးပို့တာနဲ့ ဖုန်းဆက်တာတွေကနေ နေ့တိုင်း ဆက်သွယ်တယ်။ ကျွန်တော့်မိသားစုမှာ ငါးယောက်ရှိတယ်။ အဖေ၊ အမေ၊ အစ်မနှစ်ယောက်နဲ့ ကျွန်တော်ပါ။ အမေက ကျွန်တော်နဲ့ အရင်းနှီးဆုံးပါ။ သူက ကျွန်တော့်ကို အမြဲဂရုစိုက်ပြီး အကြံကောင်းတွေ ပေးတယ်။'
    }
  },

  // ============================================================
  // ===== 7M EXAM 3 (WITH ANSWER KEYS) =====
  // ============================================================
  {
    batch: '7m_exam3',
    category: 'writing',
    type: 'Writing Task (25 words)',
    en: 'First day at workshop',
    my: 'အလုပ်ရုံ ပထမဆုံးနေ့',
    answer: {
      en: 'My first day at the workshop was exciting. I met many new colleagues and learned about the safety rules. Everyone was friendly and helpful. I felt very welcome.',
      my: 'အလုပ်ရုံမှာ ကျွန်တော့်ရဲ့ ပထမဆုံးနေ့က စိတ်လှုပ်ရှားစရာကောင်းခဲ့တယ်။ လုပ်ဖော်ကိုင်ဖက်အသစ်တွေနဲ့ မိတ်ဆက်ခဲ့ရပြီး ဘေးကင်းရေး စည်းမျဉ်းတွေကို လေ့လာခဲ့ရတယ်။ အားလုံးက ဖော်ရွေပြီး အကူအညီပေးတယ်။ ကျွန်တော် အရမ်းကြိုဆိုခံရတယ်လို့ ခံစားရတယ်။'
    }
  },
  {
    batch: '7m_exam3',
    category: 'writing',
    type: 'Writing Task (25 words)',
    en: 'Visit to port',
    my: 'ဆိပ်ကမ်းသို့ သွားရောက်ခြင်း',
    answer: {
      en: 'I visited the port with my colleagues. We saw many large ships and containers. The port was very busy with workers and machines. It was an interesting experience.',
      my: 'ကျွန်တော် လုပ်ဖော်ကိုင်ဖက်တွေနဲ့ ဆိပ်ကမ်းကို သွားရောက်လည်ပတ်ခဲ့တယ်။ သင်္ဘောကြီးတွေနဲ့ ကွန်တိန်နာတွေ အများကြီး မြင်ခဲ့ရတယ်။ ဆိပ်ကမ်းက အလုပ်သမားတွေနဲ့ စက်ပစ္စည်းတွေ အလုပ်ရှုပ်နေတယ်။ စိတ်ဝင်စားစရာ အတွေ့အကြုံတစ်ခုပါ။'
    }
  },
  {
    batch: '7m_exam3',
    category: 'writing',
    type: 'Writing Task (80-100 words)',
    en: 'Attending Workshop',
    my: 'အလုပ်ရုံဆွေးနွေးပွဲ တက်ရောက်ခြင်း',
    answer: {
      en: 'Last week, I attended a workshop on maritime safety. The workshop was very informative and practical. We learned about emergency procedures, first aid, and fire prevention. The instructor was experienced and shared many real-life examples. We also had group discussions and practical exercises. I gained a lot of knowledge and confidence. I believe this workshop will help me in my future career at sea. I am grateful for this opportunity.',
      my: 'ပြီးခဲ့တဲ့အပတ်က ကျွန်တော် ရေကြောင်းဘေးကင်းရေး ဆွေးနွေးပွဲတစ်ခုကို တက်ရောက်ခဲ့တယ်။ အဲဒီဆွေးနွေးပွဲက အလွန်အသိပညာပေးပြီး လက်တွေ့ကျတယ်။ အရေးပေါ် လုပ်ထုံးလုပ်နည်းတွေ၊ ရှေးဦးသူနာပြုနည်းနဲ့ မီးလောင်မှုကာကွယ်ရေးတွေကို သင်ယူခဲ့ရတယ်။ နည်းပြဆရာက အတွေ့အကြုံရင့်ကျက်ပြီး ဘဝဖြစ်ရပ်မှန်တွေ အများကြီးကို မျှဝေခဲ့တယ်။ အုပ်စုဖွဲ့ ဆွေးနွေးမှုတွေနဲ့ လက်တွေ့လေ့ကျင့်ခန်းတွေလည်း လုပ်ခဲ့ရတယ်။ အသိပညာနဲ့ ယုံကြည်မှု အများကြီး ရရှိခဲ့တယ်။ ဒီဆွေးနွေးပွဲက ကျွန်တော့်ရဲ့ အနာဂတ် ရေကြောင်းအလုပ်အကိုင်အတွက် အကူအညီဖြစ်မယ်လို့ ယုံကြည်တယ်။ ဒီအခွင့်အရေးအတွက် ကျေးဇူးတင်မိတယ်။'
    }
  },
  {
    batch: '7m_exam3',
    category: 'writing',
    type: 'Writing Task (80-100 words)',
    en: 'Visit to Terminal port',
    my: 'ဆိပ်ကမ်းဂိတ်သို့ သွားရောက်ခြင်း',
    answer: {
      en: 'Our class visited the terminal port yesterday. We saw how containers are loaded and unloaded from ships. The port uses modern cranes and equipment. Workers follow strict safety rules. We also visited the control room where they monitor all operations. The port manager explained the whole process to us. It was a fascinating experience. I learned a lot about port operations and logistics. This visit helped me understand the importance of teamwork and safety in the maritime industry.',
      my: 'မနေ့က ကျွန်တော်တို့ အတန်းက ဆိပ်ကမ်းဂိတ်ကို သွားရောက်လည်ပတ်ခဲ့တယ်။ ကွန်တိန်နာတွေကို သင်္ဘောတွေပေါ်ကနေ ဘယ်လိုတင်ဆွဲ၊ ချချတယ်ဆိုတာ မြင်ခဲ့ရတယ်။ ဆိပ်ကမ်းက ခေတ်မီ ကရိန်းတွေနဲ့ ပစ္စည်းတွေကို သုံးတယ်။ အလုပ်သမားတွေက တင်းကျပ်တဲ့ ဘေးကင်းရေး စည်းမျဉ်းတွေကို လိုက်နာတယ်။ လုပ်ငန်းဆောင်တာအားလုံးကို စောင့်ကြည့်တဲ့ ထိန်းချုပ်ခန်းကိုလည်း သွားရောက်ကြည့်ရှုခဲ့တယ်။ ဆိပ်ကမ်းမန်နေဂျာက လုပ်ငန်းစဉ်တစ်ခုလုံးကို ရှင်းပြခဲ့တယ်။ စိတ်ဝင်စားစရာ အတွေ့အကြုံတစ်ခုပါ။ ဆိပ်ကမ်းလုပ်ငန်းနဲ့ ထောက်ပံ့ပို့ဆောင်ရေးအကြောင်း အများကြီး သင်ယူခဲ့ရတယ်။ ဒီလည်ပတ်မှုက ရေကြောင်းလုပ်ငန်းမှာ အဖွဲ့လိုက်လုပ်ဆောင်မှုနဲ့ ဘေးကင်းရေးရဲ့ အရေးပါမှုကို နားလည်စေခဲ့တယ်။'
    }
  }
];

// ========== LOGIN SYSTEM ==========
function login() {
  const key = document.getElementById('keyInput').value.trim().toUpperCase();
  const errorEl = document.getElementById('loginError');
  
  if (!key) {
    errorEl.textContent = 'ကျေးဇူးပြု၍ သော့ (Key) ထည့်ပါ။';
    return;
  }

  if (!SECURE_ALLOWED_KEYS.includes(key)) {
    errorEl.textContent = 'မှားယွင်းသော သော့ (Key) ဖြစ်ပါသည်။';
    return;
  }

  const user = KEY_USER_MAP[key];
  if (!user) {
    errorEl.textContent = 'စနစ်ချို့ယွင်းမှု။ ကျေးဇူးပြု၍ ပြန်ကြိုးစားပါ။';
    return;
  }

  const storedDevice = localStorage.getItem(`device_${user.id}`);
  if (storedDevice && storedDevice !== user.device) {
    errorEl.textContent = 'ဤ User ကို အခြား Device တွင် သုံးထားပြီးဖြစ်သည်။ (1 User = 1 Device)';
    return;
  }

  localStorage.setItem(`device_${user.id}`, user.device);
  localStorage.setItem('currentUser', JSON.stringify(user));

  document.getElementById('loginScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');
  document.getElementById('currentUser').textContent = `👤 ${user.id} | ${user.device}`;
  
  renderQuestions('all', 'all');
}

function logout() {
  localStorage.removeItem('currentUser');
  document.getElementById('appScreen').classList.remove('active');
  document.getElementById('loginScreen').classList.add('active');
  document.getElementById('keyInput').value = '';
  document.getElementById('loginError').textContent = '';
}

// Auto-login check
window.onload = function() {
  const saved = localStorage.getItem('currentUser');
  if (saved) {
    const user = JSON.parse(saved);
    const storedDevice = localStorage.getItem(`device_${user.id}`);
    if (storedDevice === user.device) {
      document.getElementById('loginScreen').classList.remove('active');
      document.getElementById('appScreen').classList.add('active');
      document.getElementById('currentUser').textContent = `👤 ${user.id} | ${user.device}`;
      renderQuestions('all', 'all');
      return;
    } else {
      localStorage.removeItem('currentUser');
    }
  }
  document.getElementById('loginScreen').classList.add('active');
};

// ========== RENDER QUESTIONS ==========
function renderQuestions(batch, category) {
  const container = document.getElementById('questionList');
  let filtered = questionsData;
  
  if (batch !== 'all') {
    filtered = filtered.filter(q => q.batch === batch);
  }
  
  if (category !== 'all') {
    filtered = filtered.filter(q => q.category === category);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:#888; text-align:center; padding:30px;">ဤရွေးချယ်မှုအတွက် မေးခွန်းမရှိသေးပါ။</p>`;
    return;
  }

  let html = '';
  filtered.forEach((q, index) => {
    const batchName = getBatchName(q.batch);
    const categoryName = getCategoryName(q.category);
    const hasAnswer = q.answer !== undefined;
    const answerId = `answer_${index}_${Date.now()}`;
    
    html += `
      <div class="question-card">
        <div class="type">${q.type}</div>
        <span class="batch-tag">${batchName}</span>
        <span class="category-tag">${categoryName}</span>
        <div class="en">📘 ${q.en}</div>
        <div class="my">📗 ${q.my}</div>
        ${q.sub ? `<ul class="sub-details">${q.sub.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
        ${hasAnswer ? `
          <div class="answer-section">
            <div class="answer-label">
              📝 အဖြေ (Answer Key)
              <button class="toggle-btn" onclick="toggleAnswer('${answerId}')">ကြည့်မည်</button>
            </div>
            <div id="${answerId}" class="answer-content">
              <div class="en-answer">🇬🇧 ${q.answer.en}</div>
              <div class="my-answer">🇲🇲 ${q.answer.my}</div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = html;

  // Update active buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.batch === batch);
  });
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// ========== TOGGLE ANSWER ==========
function toggleAnswer(answerId) {
  const answerDiv = document.getElementById(answerId);
  if (answerDiv) {
    answerDiv.classList.toggle('show');
    const btn = answerDiv.parentElement.querySelector('.toggle-btn');
    if (btn) {
      btn.textContent = answerDiv.classList.contains('show') ? 'ပိတ်မည်' : 'ကြည့်မည်';
    }
  }
}

function getBatchName(batchCode) {
  const map = {
    '7m_exam1': '📝 7M Exam 1',
    '7m_exam2': '📝 7M Exam 2',
    '7m_exam3': '📝 7M Exam 3'
  };
  return map[batchCode] || batchCode;
}

function getCategoryName(catCode) {
  const map = {
    'personal': '👤 ကိုယ်ရေး',
    'safety': '🛡️ လုံခြုံရေး',
    'debate': '💬 ဆွေးနွေးခြင်း',
    'writing': '✍️ အရေးအသား',
    'speaking': '🎤 စကားပြော'
  };
  return map[catCode] || catCode;
}

// ========== FILTER EVENTS ==========
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const batch = this.dataset.batch;
    const category = document.querySelector('.cat-btn.active')?.dataset.category || 'all';
    renderQuestions(batch, category);
  });
});

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.dataset.category;
    const batch = document.querySelector('.filter-btn.active')?.dataset.batch || 'all';
    renderQuestions(batch, category);
  });
});