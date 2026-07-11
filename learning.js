
const SECURITY_KEYS = {
    "TUVQMjAyNA==": "2026-7-31",
    "VTFNN1AyWDQ=": "2027-08-30",
    "VTJCNE43TTE=": "2027-12-31",
    "VTNKMks1TDk=": "2028-06-30"
};

// ============================================================
// 2. GRAMMAR QUESTIONS (50 EXERCISES)
// ============================================================
const GRAMMAR_QUESTIONS = [
    {
        id: 1,
        question: "1. The crew ________ the deck every morning.",
        options: ["a) cleans", "b) clean", "c) cleaning"],
        correct: "a) cleans",
        why: "ဒီဝါကျမှာ 'The crew' ကို တစ်ဖွဲ့လုံးခြုံငုံပြီး Collective Noun (ဧကဝုစ်) အဖြစ် သတ်မှတ်ထားသလို၊ 'every morning' ပါရှိတဲ့အတွက် Present Simple Tense ဖြစ်ပါတယ်။ ထို့ကြောင့် s ပါသော 'cleans' က အဖြေမှန်ဖြစ်ပါတယ်။",
        strategy: "ဝါကျအဆုံးမှာ 'every morning / every day' တွေ့ရင် Present Simple ($V_1$ သို့မဟုတ် $V_1 + s/es$) ကို ရှာပါ။"
    },
    {
        id: 2,
        question: "2. The ship will leave the port ________ 5 p.m.",
        options: ["a) in", "b) on", "c) at"],
        correct: "c) at",
        why: "အင်္ဂလိပ်စာ သဒ္ဒါစည်းမျဉ်းအရ တိကျတဲ့ နာရီအချိန် (Specific Clock Time) တွေရဲ့ ရှေ့မှာ Preposition 'at' ကို အမြဲတမ်း အသုံးပြုရပါတယ်။",
        strategy: "အချိန်ပြ Preposition တွေအတွက် 'On Days, In Years, At Hours' ဆိုတဲ့ စည်းမျဉ်းအတိုင်း မှတ်သားပါ။"
    },
    {
        id: 3,
        question: "3. If the alarm sounds, you ________ report to your muster station immediately.",
        options: ["a) must", "b) would", "c) will have"],
        correct: "a) must",
        why: "သင်္ဘောပေါ်ရှိ ဘေးကင်းရေး လုပ်ထုံးလုပ်နည်းများနှင့် အရေးပေါ်အခြေအနေများတွင် မဖြစ်မနေ လုပ်ဆောင်ရမည့် တာဝန် (Obligation) ကို ဖော်ပြရန် 'must' ကို သုံးရပါသည်။",
        strategy: "အရေးပေါ်စည်းကမ်းများနှင့် Emergency Rules များတွေ့ပါက 'must' သို့မဟုတ် 'have to' ကို ဦးစားပေးရွေးချယ်ပါ။"
    },
    {
        id: 4,
        question: "4. While the Chief Officer ________ the cargo, the bosun was checking the mooring lines.",
        options: ["a) inspects", "b) was inspecting", "c) is inspecting"],
        correct: "b) was inspecting",
        why: "အတိတ်ကာလ၌ လုပ်ဆောင်ချက်နှစ်ခု တစ်ပြိုင်နက်တည်း ဖြစ်ပျက်နေသည်ကို ဖော်ပြလိုခြင်းဖြစ်ပြီး 'While' နောက်တွင် Past Continuous Tense ($was/were + V_{ing}$) ကို သုံးရပါသည်။",
        strategy: "ဝါကျထဲမှာ 'While' ပါပြီး နောက်ဝါကျက Past Continuous (was checking) ဖြစ်နေရင် ရှေ့ကလည်း Past Continuous ပဲ ဖြစ်ရပါမယ်။"
    },
    {
        id: 5,
        question: "5. The lifejackets ________ on the starboard side of the boat deck.",
        options: ["a) are located", "b) locates", "c) is locating"],
        correct: "a) are located",
        why: "အသက်ကယ်အကျီများ (Lifejackets) သည် အများကိန်းဖြစ်ပြီး ၎င်းတို့ကိုယ်တိုင် နေရာချထားခြင်းမဟုတ်ဘဲ အထားခံရခြင်းဖြစ်၍ Passive Voice ($are + V_3$) ကို သုံးရပါမည်။",
        strategy: "အသက်မဲ့ပစ္စည်းတစ်ခုခု တည်ရှိရာနေရာကို ပြောချင်ရင် ၎င်းပစ္စည်း အနည်း/အများအလိုက် Passive Voice ဖြစ်တဲ့ 'is located / are located' ကို သုံးပါ။"
    },
    // ==================== EXERCISE 6 to 49 ====================
    {
        id: 6,
        question: "6. The captain is ________ the meeting right now.",
        options: ["a) attend", "b) attending", "c) attends"],
        correct: "b) attending",
        why: "'right now' ဆိုတဲ့ အချိန်ပြ စကားလုံးပါရှိလို့ ပစ္စုပ္ပန်ကာလ လုပ်ဆောင်ချက်ကို ဖော်ပြရန် Present Continuous Tense ($is/am/are + V_{ing}$) ကို သုံးရပါမယ်။",
        strategy: "'now / right now / at the moment' တွေ့တိုင်း Present Continuous ($V+ing$) ကို အမြန်ရှာပါ။"
    },
    {
        id: 7,
        question: "7. The helmsman ________ the course yesterday.",
        options: ["a) change", "b) changed", "c) changes"],
        correct: "b) changed",
        why: "'yesterday' က အတိတ်ကာလဖြစ်သောကြောင့် ဝါကျကို Past Simple Tense သုံးရပြီး၊ ပုံမှန်ကြိယာ (Regular Verb) ဖြစ်တဲ့ 'change' ကို '-ed' ပေါင်းရပါမယ်။",
        strategy: "'yesterday / last night / ago' တွေ့ရင် V2 (အတိတ်ပုံစံ) ကို ရွေးပါ။"
    },
    {
        id: 8,
        question: "8. Look at those dark clouds! It ________ rain soon.",
        options: ["a) is going to", "b) will", "c) shall"],
        correct: "a) is going to",
        why: "မိုးတိမ်မည်းများကို မြင်ရခြင်းသည် အနီးအနားအနာဂတ်တွင် ဖြစ်လာမည့် အထောက်အထား (Evidence) ဖြစ်သောကြောင့် 'be going to' ကို သုံးရပါသည်။",
        strategy: "ခန့်မှန်းချက်အတွက် မြင်သာထင်သာ အထောက်အထားရှိရင် 'going to'၊ ကိုယ်ပိုင်ထင်မြင်ချက်အတွက် 'will' ကို ရွေးပါ။"
    },
    {
        id: 9,
        question: "9. You ________ wear a hard hat on the deck.",
        options: ["a) should", "b) can", "c) would"],
        correct: "a) should",
        why: "ဤဝါကျသည် ဘေးကင်းရေးဆိုင်ရာ အကြံပြုချက်တစ်ခုဖြစ်ပြီး အန္တရာယ်ကင်းရှင်းစေရန် ဆောင်ရွက်သင့်သော အချက်ကို ဖော်ပြရာတွင် 'should' ကို သုံးရပါသည်။",
        strategy: "အကြံပြုချက် (Advice) သို့မဟုတ် အကြံပေးချက်များတွင် 'should' ကို သုံးပါ။"
    },
    {
        id: 10,
        question: "10. Have you ever ________ a fire drill on board?",
        options: ["a) experienced", "b) experiencing", "c) experience"],
        correct: "a) experienced",
        why: "Present Perfect Tense ၏ ပုံစံမှာ 'have/has + V₃' ဖြစ်ပြီး 'ever' က အတွေ့အကြုံကို မေးမြန်းသောကြောင့် Verb ကို V₃ (Past Participle) အနေဖြင့် သုံးရပါမည်။",
        strategy: "'ever / never / already / yet' ပါရှိသော မေးခွန်းများတွင် Present Perfect ဖြစ်ပြီး ကြိယာ V3 ကို ရှာပါ။"
    },
    {
        id: 11,
        question: "11. The pilot jumped ________ the launch to board the ship.",
        options: ["a) in", "b) onto", "c) at"],
        correct: "b) onto",
        why: "ဤနေရာတွင် သင်္ဘောသားငယ်သည် လှေပေါ်မှ သင်္ဘောပေါ်သို့ ခုန်တက်သွားခြင်းဖြစ်၍ မျက်နှာပြင်တစ်ခုခုပေါ်သို့ ရွေ့လျားမှုကို ဖော်ပြသော 'onto' ကို သုံးရပါသည်။",
        strategy: "Movement to a surface (မျက်နှာပြင်ပေါ်ကို) အတွက် 'onto'၊ movement to a place (နေရာတစ်ခုအတွင်း) အတွက် 'into' ကို သုံးပါ။"
    },
    {
        id: 12,
        question: "12. The new crane is ________ than the old one.",
        options: ["a) more efficient", "b) efficient", "c) most efficient"],
        correct: "a) more efficient",
        why: "ဝါကျထဲတွင် 'than' ပါရှိသောကြောင့် နှစ်ခုကို နှိုင်းယှဉ်သည့် Comparative Degree ဖြစ်ပြီး စာလုံးရှည် (၃လုံးထက်ပို) ဖြစ်သောကြောင့် 'more + adjective' ပုံစံသုံးရပါသည်။",
        strategy: "'than' ရှိရင် Comparative (ပိုသော) ဖြစ်သည်။ short adjectives အတွက် -er၊ long adjectives အတွက် more + adj ကို ရွေးပါ။"
    },
    {
        id: 13,
        question: "13. This is ________ port in the entire country.",
        options: ["a) busier", "b) the busiest", "c) busy"],
        correct: "b) the busiest",
        why: "'in the entire country' ဆိုသည်မှာ အများနှင့် နှိုင်းယှဉ်သော Superlative Degree ဖြစ်၍ အထူးခြားဆုံးကို ဖော်ပြရန် 'the + adjective + est' ကို သုံးရပါသည်။",
        strategy: "'in / of + အုပ်စု' ပါလျှင် Superlative (အရှိဆုံး) ဖြစ်ပြီး 'the + adj-est' သို့မဟုတ် 'the most + adj' ကို ရွေးပါ။"
    },
    {
        id: 14,
        question: "14. There isn't ________ water left in the fresh water tank.",
        options: ["a) some", "b) many", "c) any"],
        correct: "c) any",
        why: "ဤဝါကျသည် Negative Sentence (မရှိဘူး) ဖြစ်ပြီး 'water' သည် ရေတွက်မရသော နာမ် (Uncountable Noun) ဖြစ်၍ ငြင်းပယ်သော ဝါကျများတွင် 'any' ကို သုံးရပါသည်။",
        strategy: "Negative ဝါကျနှင့် Question များတွင် Uncountable/Countable မခွဲခြားဘဲ 'any' ကို သုံးပါ။"
    },
    {
        id: 15,
        question: "15. How ________ lifejackets do we have on the bridge?",
        options: ["a) much", "b) many", "c) a lot"],
        correct: "b) many",
        why: "'lifejackets' သည် ရေတွက်လို့ရသော နာမ် (Countable Noun - အများကိန်း) ဖြစ်သောကြောင့် အရေအတွက်မေးရာတွင် 'how many' ကို သုံးရပါသည်။",
        strategy: "Countable Nouns (ရေတွက်ရ) အတွက် 'many'၊ Uncountable Nouns (ရေတွက်မရ) အတွက် 'much' ကို သုံးပါ။"
    },
    {
        id: 16,
        question: "16. The man ________ is wearing a white uniform is the Chief Engineer.",
        options: ["a) which", "b) who", "c) whose"],
        correct: "b) who",
        why: "ဤ Relative Clause တွင် လူပုဂ္ဂိုလ် (The man) ကို ထပ်ဆောင်းရှင်းပြရန် Subject နေရာတွင် 'who' ကို သုံးရပါသည်။",
        strategy: "လူအတွက် 'who'၊ အရာဝတ္ထုအတွက် 'which'၊ ပိုင်ဆိုင်မှုအတွက် 'whose' ကို မှတ်သားပါ။"
    },
    {
        id: 17,
        question: "17. If you see a fire, you ________ the alarm immediately.",
        options: ["a) will sound", "b) sound", "c) would sound"],
        correct: "a) will sound",
        why: "ဤသည်မှာ First Conditional (Type 1) ဖြစ်ပြီး အခြေအနေမှာ ဖြစ်နိုင်ခြေရှိ၍ 'If + Present Simple, will + V₁' ပုံစံဖြင့် သုံးရပါသည်။",
        strategy: "ဖြစ်နိုင်ခြေရှိသော အခြေအနေများအတွက် 'If + V(s), will + V' ပုံစံကို သုံးပါ။"
    },
    {
        id: 18,
        question: "18. The cargo ________ carefully by the stevedores every day.",
        options: ["a) is loaded", "b) loaded", "c) is loading"],
        correct: "a) is loaded",
        why: "ကုန်ပစ္စည်း (Cargo) သည် ကိုယ်တိုင်တင်ဆောင်ခြင်းမဟုတ်ဘဲ သူများက တင်ဆောင်ပေးခြင်းခံရသောကြောင့် ပစ္စုပ္ပန်ကာလ Passive Voice ($is/am/are + V₃$) ကို သုံးရပါသည်။",
        strategy: "အရာဝတ္ထုကို လုပ်ဆောင်ခံရသည်ကို ပြောလျှင် 'Passive Voice (is/am/are + V3)' ကို သုံးပါ။"
    },
    {
        id: 19,
        question: "19. I ________ a shower in my cabin when the phone rang.",
        options: ["a) had", "b) was having", "c) have"],
        correct: "b) was having",
        why: "ဖုန်းမြည်သွားသည့် လုပ်ဆောင်ချက် (Past Simple - rang) ကြားထဲတွင် ရေချိုးနေသည့် လုပ်ဆောင်ချက်က ရှည်လျားနေသောကြောင့် Past Continuous ($was/were + V_{ing}$) ကို သုံးရပါသည်။",
        strategy: "'when + Past Simple' ရှေ့တွင် ကြာရှည်စွာ လုပ်နေသော လုပ်ဆောင်ချက်အတွက် Past Continuous ကို သုံးပါ။"
    },
    {
        id: 20,
        question: "20. I ________ swim when I was only six years old.",
        options: ["a) can", "b) could", "c) may"],
        correct: "b) could",
        why: "အတိတ်က (အသက် ၆ နှစ်တုန်းက) ရေကူးနိုင်ခဲ့သော စွမ်းရည် (Past Ability) ကို ဖော်ပြရန် Modal Verb 'could' ကို သုံးရပါသည်။",
        strategy: "အတိတ်က စွမ်းရည်အတွက် 'could'၊ ပစ္စုပ္ပန်စွမ်းရည်အတွက် 'can' ကို ရွေးပါ။"
    },
    {
        id: 21,
        question: "21. The captain has ________ arrived, so we can start the meeting.",
        options: ["a) just", "b) yet", "c) since"],
        correct: "a) just",
        why: "'just' သည် 'ပဲရောက်လာတယ်' ဟု အဓိပ္ပါယ်ရပြီး Present Perfect Tense နှင့် အဓိကကြိယာနှင့် V₃ ကြားတွင် ထည့်သုံးရပါသည်။",
        strategy: "Present Perfect တွင် 'just' က 'V₃' ရဲ့ ရှေ့မှာ လာပြီး 'yet' က ဝါကျအဆုံးမှာ လာပါသည်။"
    },
    {
        id: 22,
        question: "22. Don't worry. I ________ help you with the mooring ropes.",
        options: ["a) will", "b) am going to", "c) shall"],
        correct: "a) will",
        why: "စကားပြောနေစဉ် ချက်ချင်းဆုံးဖြတ်လိုက်သော Spontaneous Decision ကို ဖော်ပြရန် 'will' ကို သုံးရပါသည်။",
        strategy: "ကမ်းလှမ်းချက် (Offer) သို့မဟုတ် ချက်ချင်းဆုံးဖြတ်ချက်များတွင် 'will' ကို သုံးပါ။"
    },
    {
        id: 23,
        question: "23. The container ship will arrive ________ Friday.",
        options: ["a) in", "b) on", "c) at"],
        correct: "b) on",
        why: "သတ်မှတ်ထားသော ရက်သတ္တပတ်၏ နေ့ (Day of the week) ကို ဖော်ပြရာတွင် Preposition 'on' ကို သုံးရပါသည်။",
        strategy: "နေ့ရက် (Monday, Tuesday...) အတွက် 'on'၊ လ/နှစ် (May, 2023) အတွက် 'in' ကို သုံးပါ။"
    },
    {
        id: 24,
        question: "24. ________ on the open sea is a great experience.",
        options: ["a) Sailing", "b) Sail", "c) To sailing"],
        correct: "a) Sailing",
        why: "ဝါကျ၏ အဓိကအကြောင်းအရာ (Subject) နေရာတွင် ကြိယာကို နာမ်အဖြစ်ပြောင်းသုံးရန် Gerund ($V_{ing}$) ကို သုံးရပါသည်။",
        strategy: "ဝါကျအစတွင် Verb ကို Subject အနေဖြင့် သုံးလျှင် 'V+ing' (Gerund) ကို သုံးပါ။"
    },
    {
        id: 25,
        question: "25. I went to the bridge ________ the captain for instructions.",
        options: ["a) seeing", "b) to see", "c) for see"],
        correct: "b) to see",
        why: "သင်္ဘောတံတားသို့ သွားခြင်း၏ ရည်ရွယ်ချက် (Purpose) ကို ဖော်ပြရန်အတွက် Infinitive of Purpose ('to + V₁') ကို သုံးရပါသည်။",
        strategy: "ဘာလုပ်ဖို့ (Purpose) မေးလျှင် 'to + V₁' ကို သုံးပါ။"
    },
    {
        id: 26,
        question: "26. You ________ wear a uniform on this vessel. It's a strict rule.",
        options: ["a) have to", "b) can", "c) may"],
        correct: "a) have to",
        why: "ပြင်ပမှ သတ်မှတ်ထားသော စည်းမျဉ်း (External Rule) ကြောင့် လုပ်ဆောင်ရမည့် တာဝန်ကို 'have to' ဖြင့် ဖော်ပြရပါသည်။",
        strategy: "စည်းမျဉ်း / ဥပဒေ / တစ်စုံတစ်ယောက်က ခိုင်းလို့ လုပ်ရတဲ့အခါ 'have to' ကို သုံးပါ။"
    },
    {
        id: 27,
        question: "27. I ________ the engine room many times during my career.",
        options: ["a) visited", "b) have visited", "c) was visiting"],
        correct: "b) have visited",
        why: "'many times' သည် အတွေ့အကြုံကို ဖော်ပြပြီး ပစ္စုပ္ပန်အချိန်အထိ ရောက်ရှိဖူးသည်ကို ပြောလိုသောကြောင့် Present Perfect Tense ($have + V₃$) ကို သုံးရပါသည်။",
        strategy: "အတွေ့အကြုံ (Experience) ကိုပြောရန် 'ever/never/once/twice/many times' ရှိလျှင် Present Perfect ကို သုံးပါ။"
    },
    {
        id: 28,
        question: "28. If you heat ice, it ________ into water.",
        options: ["a) melts", "b) will melt", "c) would melt"],
        correct: "a) melts",
        why: "ဤသည်မှာ သိပ္ပံနည်းကျ အမှန်တရား (Scientific Fact) ကို ဖော်ပြသော Zero Conditional ဖြစ်၍ 'If + Present Simple, Present Simple' ပုံစံကို သုံးရပါသည်။",
        strategy: "ယေဘုယျ အမှန်တရား / သဘာဝဖြစ်စဉ်များအတွက် Zero Conditional (If + V, V) ကို သုံးပါ။"
    },
    {
        id: 29,
        question: "29. The lifeboat ________ launched three hours ago.",
        options: ["a) was", "b) was being", "c) were"],
        correct: "a) was",
        why: "လွန်ခဲ့သော ၃ နာရီက (Ago) ဖြစ်ပျက်ခဲ့သော Passive Action ဖြစ်၍ အတိတ်ကာလ Passive ($was/were + V₃$) ကို သုံးရပြီး 'lifeboat' သည် ဧကဝုစ်ဖြစ်သောကြောင့် 'was' ကို ရွေးရပါသည်။",
        strategy: "အတိတ်အချိန်အတိအကျ (last week, ago) ဖြင့် Passive ပြောလျှင် 'was/were + V3' ကို သုံးပါ။"
    },
    {
        id: 30,
        question: "30. The Second Officer said he ________ the ship the following day.",
        options: ["a) will leave", "b) would leave", "c) left"],
        correct: "b) would leave",
        why: "ဤသည်မှာ Reported Speech (အတိတ်က ပြောစကားကို ပြန်ပြောခြင်း) ဖြစ်ပြီး အဓိကကြိယာ 'said' က အတိတ်ဖြစ်၍ အနာဂတ်ကို 'will' မှ 'would' သို့ ပြောင်းရပါသည်။",
        strategy: "Reported Speech တွင် 'will' ကို 'would' သို့၊ 'can' ကို 'could' သို့ ပြောင်းရမည်ကို သတိရပါ။"
    },
    {
        id: 31,
        question: "31. He missed the ship ________ he was stuck in traffic.",
        options: ["a) so", "b) because", "c) although"],
        correct: "b) because",
        why: "သူ သင်္ဘောလွတ်သွားရသည့် အကြောင်းရင်းကို ရှင်းပြရန် 'because' (ဘာဖြစ်လို့လဲဆိုတော့) ကို သုံးရပါသည်။",
        strategy: "အကြောင်းပြချက်ဖော်ပြရန် 'because'၊ ရလဒ်ဖော်ပြရန် 'so' ကို သုံးပါ။"
    },
    {
        id: 32,
        question: "32. The mooring rope is ________ short to reach the bollard.",
        options: ["a) too", "b) enough", "c) very"],
        correct: "a) too",
        why: "'too + adjective + to + verb' ပုံစံသည် 'လွန်ကဲလွန်း၍ မဖြစ်နိုင်ခြင်း' ကို ဖော်ပြပြီး ဤတွင် ကြိုးတိုလွန်း၍ မရောက်နိုင်ပါ။",
        strategy: "'too' က negative meaning (မဖြစ်နိုင်ဘူး)၊ 'enough' က positive meaning (ဖြစ်နိုင်တယ်) ကို ပေးသည်။"
    },
    {
        id: 33,
        question: "33. I am really ________ in maritime history.",
        options: ["a) interesting", "b) interested", "c) interest"],
        correct: "b) interested",
        why: "လူတစ်ယောက်၏ ခံစားချက် (Feeling) ကို ဖော်ပြရန် '-ed' နဲ့ဆုံးသော နာမဝိသေသ (Interested) ကို သုံးရပါသည်။",
        strategy: "လူကို ခံစားချက်ပြောရန် 'interested / bored / tired' (-ed)၊ အရာဝတ္ထုကို ဖော်ပြရန် 'interesting / boring' (-ing) ကို သုံးပါ။"
    },
    {
        id: 34,
        question: "34. They ________ a safety drill on the boat deck next Monday.",
        options: ["a) are having", "b) have", "c) had"],
        correct: "a) are having",
        why: "အနာဂတ်တွင် ကြိုတင်စီစဉ်ထားသော အချိန်ဇယား (Fixed Arrangement) ကို ဖော်ပြရန် Present Continuous Tense ($is/am/are + V_{ing}$) ကို သုံးရပါသည်။",
        strategy: "အနာဂတ်အတွက် စီစဉ်ထားသော အစီအစဉ် (Plans) များကို 'is/am/are + Ving' ဖြင့် ဖော်ပြပါ။"
    },
    {
        id: 35,
        question: "35. He is the bosun on this ship, ________?",
        options: ["a) isn't he", "b) is he", "c) doesn't he"],
        correct: "a) isn't he",
        why: "Question Tag (ကတ်စကား) တွင် အဓိကဝါကျက Positive ဖြစ်လျှင် Tag က Negative ဖြစ်ရပြီး Verb 'is' ကိုပဲ ပြန်သုံးရပါသည်။",
        strategy: "Positive Statement ရဲ့ Tag က Negative (isn't/aren't/don't)၊ Negative Statement ရဲ့ Tag က Positive ဖြစ်သည်။"
    },
    {
        id: 36,
        question: "36. Is there ________ on the bridge who can speak English?",
        options: ["a) anybody", "b) somebody", "c) nobody"],
        correct: "a) anybody",
        why: "ဤဝါကျသည် မေးခွန်း (Question) ဖြစ်သောကြောင့် မသိသေးသော လူပုဂ္ဂိုလ်ကို ရည်ညွှန်းရန် 'anybody' ကို သုံးရပါသည်။",
        strategy: "Questions နှင့် Negatives များတွင် 'anybody/anything'၊ Positive ဝါကျများတွင် 'somebody/something' ကို သုံးပါ။"
    },
    {
        id: 37,
        question: "37. I can speak English well, and so ________ my friend.",
        options: ["a) can", "b) does", "c) is"],
        correct: "a) can",
        why: "သဘောတူညီမှု (Agreement) ဖော်ပြရန် 'so + auxiliary verb + subject' ပုံစံကို သုံးပြီး ရှေ့ကဝါကျက 'can' ဖြစ်၍ 'can' ကိုပဲ ပြန်သုံးရပါသည်။",
        strategy: "တစ်ယောက်နဲ့တစ်ယောက် သဘောတူညီကြောင်းပြရန် 'so + (modal/auxiliary) + subject' ကို သုံးပါ။"
    },
    {
        id: 38,
        question: "38. If I were the captain, I ________ the route differently.",
        options: ["a) will plan", "b) would plan", "c) plan"],
        correct: "b) would plan",
        why: "ဤသည်မှာ Second Conditional (Type 2) ဖြစ်ပြီး လက်ရှိအချိန်တွင် မဟုတ်မမှန်သော အတွေးအခါ (Imaginary Situation) ကို ဖော်ပြရန် 'If + past, would + V₁' ကို သုံးရပါသည်။",
        strategy: "မဖြစ်နိုင်သော (သို့) ဆန့်ကျင်ဘက်ဖြစ်သော အခြေအနေမျိုးအတွက် 'If + V₂, would + V' ကို သုံးပါ။"
    },
    {
        id: 39,
        question: "39. The safety meeting ________ held in the conference room tomorrow.",
        options: ["a) will be", "b) is", "c) was"],
        correct: "a) will be",
        why: "မနက်ဖြန် အနာဂတ်တွင် အစည်းအဝေးကို ကျင်းပခံရမည်ဖြစ်၍ Future Passive Voice ($will be + V₃$) ကို သုံးရပါသည်။",
        strategy: "အနာဂတ် Passive အတွက် 'will be + V₃' ပုံစံကို သုံးပါ။"
    },
    {
        id: 40,
        question: "40. Please ________ the navigation lights when you leave the bridge.",
        options: ["a) put off", "b) turn off", "c) get off"],
        correct: "b) turn off",
        why: "လျှပ်စစ်ပစ္စည်း သို့မဟုတ် မီးကို 'ပိတ်ရန်' အတွက် Phrasal Verb 'turn off' ကို သုံးရပါသည်။",
        strategy: "မီး/စက် ပိတ်ရန် 'turn off'၊ ခရီးထွက်ရန် 'set off'၊ မီးငြှိမ်းသတ်ရန် 'put out' ကို မှတ်သားပါ။"
    },
    {
        id: 41,
        question: "41. I ________ smoke 20 cigarettes a day, but I quit last year.",
        options: ["a) used to", "b) was used to", "c) use to"],
        correct: "a) used to",
        why: "အတိတ်က ပြုလုပ်ခဲ့သော အလေ့အထ (Past Habit) ကို ဖော်ပြရန်နှင့် ယခုအခါ မလုပ်တော့ကြောင်း ဆိုလိုရန် 'used to + V₁' ကို သုံးရပါသည်။",
        strategy: "အတိတ်အလေ့အထ (ယခုမရှိတော့) အတွက် 'used to'၊ အကျင့်ဝါကျအတွက် 'be used to + Ving' ကို ခွဲမှတ်ပါ။"
    },
    {
        id: 42,
        question: "42. All the crew members are ________ the ship now.",
        options: ["a) at", "b) on board", "c) in"],
        correct: "b) on board",
        why: "သင်္ဘောပေါ်တွင် ရှိခြင်းကို အတိအကျဖော်ပြရန် သင်္ဘောဝေါဟာရအရ 'on board' ဟု သုံးရပါသည်။",
        strategy: "သင်္ဘော၊ လေယာဉ်၊ ရထားပေါ်တွင် ရှိကြောင်းပြောရန် 'on board' ကိုပဲ သုံးပါ။"
    },
    {
        id: 43,
        question: "43. This lifejacket is not mine. It must be ________.",
        options: ["a) your", "b) yours", "c) you"],
        correct: "b) yours",
        why: "နာမ်မပါဘဲ တစ်ဦးတစ်ယောက်၏ ပိုင်ဆိုင်မှုကို သီးသန့်ဖော်ပြရန် Possessive Pronoun (yours) ကို သုံးရပါသည်။",
        strategy: "နာမ်နောက်မှာ ထားသော ပိုင်ဆိုင်မှုအတွက် 'your/my' (Possessive Adj)၊ နာမ်မပါဘဲ ရပ်တည်သော ပိုင်ဆိုင်မှုအတွက် 'yours/mine' (Possessive Pronoun) ကို သုံးပါ။"
    },
    {
        id: 44,
        question: "44. Could you tell me ________ the nearest lifeboat station is?",
        options: ["a) what", "b) where", "c) which"],
        correct: "b) where",
        why: "ဤဝါကျသည် Indirect Question (ယဉ်ကျေးစွာမေးခြင်း) ဖြစ်ပြီး နေရာဒေသ (Place) ကို မေးမြန်းသောကြောင့် 'where' ကို သုံးရပါသည်။",
        strategy: "နေရာမေးရန် 'where'၊ အရာဝတ္ထုမေးရန် 'what'၊ ဘယ်ဟာလဲမေးရန် 'which' ကို သုံးပါ။"
    },
    {
        id: 45,
        question: "45. ________ the heavy storm, the ship arrived at the port safely.",
        options: ["a) Despite", "b) Although", "c) Because"],
        correct: "a) Despite",
        why: "မုန်တိုင်းဒဏ်ကို ခံရသော်လည်း ဆိုက်ရောက်သွားသည်ဟု ဆန့်ကျင်ဘက် (Contrast) ဖော်ပြရန် 'Despite + Noun Phrase' ကို သုံးရပါသည်။",
        strategy: "ဆန့်ကျင်ဘက်ဖော်ပြရန် 'Despite/In spite of + Noun' သို့မဟုတ် 'Although + Clause' ကို သုံးပါ။"
    },
    {
        id: 46,
        question: "46. He ________ on this oil tanker for almost 10 years.",
        options: ["a) has been working", "b) has worked", "c) worked"],
        correct: "a) has been working",
        why: "အတိတ်က စတင်ပြီး ယခုထိ ဆက်လက်လုပ်ဆောင်နေဆဲဖြစ်၍ အချိန်ကာလ (for 10 years) ကို အလေးပေးသော Present Perfect Continuous ($has/have been + V_{ing}$) ကို သုံးရပါသည်။",
        strategy: "'for + ကာလ' ဖြင့် ဆက်လက်လုပ်ဆောင်နေသည်ကို ပြရန် Present Perfect Continuous ကို ဦးစားပေးပါ။"
    },
    {
        id: 47,
        question: "47. By the time we reached the deck, the lifeboat drill ________ already.",
        options: ["a) has started", "b) had started", "c) started"],
        correct: "b) had started",
        why: "'By the time + Past Simple' သည် အတိတ်ဖြစ်ရပ်နှစ်ခုကို နှိုင်းယှဉ်ပြီး ရှေ့ကဖြစ်ပြီးသားကို Past Perfect ($had + V₃$) ဖြင့် ဖော်ပြရပါသည်။",
        strategy: "'By the time' ရှေ့တွင် ဖြစ်ပြီးသားအကြောင်းကို Past Perfect (had + V3) ဖြင့် သုံးပါ။"
    },
    {
        id: 48,
        question: "48. There ________ be a delay due to the bad weather.",
        options: ["a) might", "b) must", "c) should"],
        correct: "a) might",
        why: "ရာသီဥတုဆိုးရွားမှုကြောင့် နှောင့်နှေးနိုင်ခြေရှိသည်ကို ခန့်မှန်းချက် (Possibility) အဖြစ် ဖော်ပြရန် သေချာမှုအားနည်းသော 'might' ကို သုံးရပါသည်။",
        strategy: "ဖြစ်နိုင်ခြေ (Possibility) အတွက် 'might' (အားနည်း)၊ 'may' (အသင့်အတင့်)၊ 'must' (သေချာ) ဟု အဆင့်လိုက် ခွဲမှတ်ပါ။"
    },
    {
        id: 49,
        question: "49. You should stop ________ so much coffee. It's not good for you.",
        options: ["a) to drink", "b) drinking", "c) drink"],
        correct: "b) drinking",
        why: "'stop + Ving' သည် လက်ရှိလုပ်နေသော အလေ့အထကို ရပ်တန့်ခြင်းကို ဆိုလိုပြီး ကော်ဖီသောက်နေတာကို ရပ်သင့်ကြောင်း ဆိုလိုသည်။",
        strategy: "လုပ်ဆောင်ချက်တစ်ခုကို ရပ်တန့်ရန် 'stop + Ving'၊ တစ်ခုခုလုပ်ဖို့ ရပ်ရန် 'stop + to V' ကို ခွဲမှတ်ပါ။"
    },
    // ==================== EXERCISE 50 ====================
    {
        id: 50,
        question: "50. The Second Officer told me that he ________ the engine room logbook already.",
        options: ["a) has checked", "b) have checked", "c) had checked"],
        correct: "c) had checked",
        why: "ဤဝါကျသည် 'Reported Speech (အတိတ်က ပြောခဲ့သော စကားကို ပြန်ပြောခြင်း)' ဖြစ်ပြီး အဓိကကြိယာ (told) က အတိတ်ဖြစ်သောကြောင့် အတိတ်ဖြစ်ရပ်၏ ရှေ့ကဖြစ်ပြီးဆုံးသော အခြေအနေကို Past Perfect Tense ('had + V₃') ဖြင့် သုံးရပါသည်။ 'already' က အဖြစ်ပြီးဆုံးမှုကို ထောက်ကူပေးထားသည်။",
        strategy: "Reported Speech တွင် ပြောပြီးသားစကားကို ပြန်ပြောသည့်အခါ 'said/told' ပါရှိပါက အတိတ်ဖြစ်ရပ် (past) များကို 'Past Perfect (had + V₃)' သို့ ပြောင်းရမည်ကို အမြဲသတိရပါ။"
    }
];

// ============================================================
// 3. READING DATA (7 PASSAGES)
// ============================================================
const READING_DATA = [
     // ==================== READING 1: FIRE DRILL PRACTICE ====================
    {
        readingId: 1,
        title: "FIRE DRILL PRACTICE",
        passage: `FIRE DRILL PRACTICE
All crew members must participate in the emergency fire drill today at 15:30. 
When the alarm sounds (continuous ringing of the ship's bell), everyone must put on their lifejackets 
and go immediately to the muster station on the boat deck. Do not use the elevator during the drill. 
The chief officer will check the attendance log.`,
        questions: [
            {
                id: 1,
                question: "1. The fire drill takes place at 3:30 p.m.",
                options: ["True", "False"],
                correct: "True",
                why: "စာပိုဒ်ထဲတွင် 'today at 15:30' ဟု ဖော်ပြထားပြီး ၂၄ နာရီစနစ် 15:30 သည် မွန်းလွဲ ၃:၃၀ နှင့် တူညီသောကြောင့် မှန်ကန်ပါသည်။",
                strategy: "၂၄ နာရီစနစ်ကို ၁၂ နာရီစနစ်သို့ ပြောင်းကြည့်ပါ။ 15:30 = 3:30 p.m. ဖြစ်သည်။"
            },
            {
                id: 2,
                question: "2. The alarm for the fire drill is a continuous bell.",
                options: ["True", "False"],
                correct: "True",
                why: "စာပိုဒ်တွင် '(continuous ringing of the ship's bell)' ဟု ကွင်းစကွင်းပိတ် အတိအကျ ဖော်ပြထားသောကြောင့် မှန်ကန်ပါသည်။",
                strategy: "Keyword ဖြစ်သော 'continuous bell' ကို စာပိုဒ်ထဲတွင် မျက်စိဖြင့် ရှာဖွေအတည်ပြုပါ။"
            },
            {
                id: 3,
                question: "3. Crew members should take the elevator to save time.",
                options: ["True", "False"],
                correct: "False",
                why: "စာပိုဒ်တွင် 'Do not use the elevator during the drill.' (ဓာတ်လှေကားမသုံးရ) ဟု တားမြစ်ထားသောကြောင့် မေးခွန်းက 'သုံးသင့်သည်' ဟု ဆိုခြင်းမှာ ဆန့်ကျင်ဘက်ဖြစ်ပါသည်။",
                strategy: "စာပိုဒ်က 'Do not' (မလုပ်ရ) ဟု ပြောထားရာ မေးခွန်းက 'Should' (လုပ်သင့်) ဟု ပြောင်းထားသဖြင့် False ဖြစ်သည်။"
            },
            {
                id: 4,
                question: "4. Crew members must wear lifejackets for the drill.",
                options: ["True", "False"],
                correct: "True",
                why: "စာပိုဒ်တွင် 'everyone must put on their lifejackets' ဟု အတိအကျ ပါရှိပြီး 'put on' သည် 'wear' နှင့် အဓိပ္ပာယ်တူညီသောကြောင့် မှန်ကန်ပါသည်။",
                strategy: "တူညီသော ဝေါဟာရများ (Put on = Wear) ကို သိရှိထားပါ။"
            },
            {
                id: 5,
                question: "5. The captain will check the attendance log.",
                options: ["True", "False"],
                correct: "False",
                why: "စာပိုဒ်၏ နောက်ဆုံးစာကြောင်းတွင် 'The chief officer will check the attendance log.' ဟု ပါရှိပြီး စစ်ဆေးသူမှာ Captain မဟုတ်ဘဲ Chief Officer ဖြစ်သောကြောင့် မှားယွင်းပါသည်။",
                strategy: "ဝါကျက မှန်သယောင်ရှိသော်လည်း လူပုဂ္ဂိုလ် (Captain vs Chief Officer) ကို အမြဲစစ်ဆေးပါ။"
            }
        ]
    },
    // ==================== READING 2: GALLEY HYGIENE RULES ====================
    {
        readingId: 2,
        title: "GALLEY HYGIENE RULES",
        passage: `GALLEY HYGIENE RULES
The galley crew must keep the kitchen area perfectly clean at all times to prevent food poisoning. 
All meat and vegetables must be stored in separate refrigerators. Garbage bins must be covered with lids 
and emptied after every meal. The cook needs to wear a clean apron and a hairnet while preparing food. 
If any kitchen tool is broken, report it to the chief steward.`,
        questions: [
            {
                id: 6,
                question: "6. The galley area must be cleaned only once a day.",
                options: ["True", "False"],
                correct: "False",
                why: "စာပိုဒ်တွင် 'keep the kitchen area perfectly clean at all times' (အချိန်တိုင်းသန့်ရှင်းရမည်) ဟု ဆိုထားသောကြောင့် 'တစ်နေ့တစ်ခါသာ' ဆိုသည်မှာ လုံးဝမမှန်ပါ။",
                strategy: "'at all times' (အချိန်တိုင်း) နှင့် 'once a day' (တစ်နေ့တစ်ခါ) သည် ဆန့်ကျင်ဘက် အဓိပ္ပာယ်များဖြစ်သည်။"
            },
            {
                id: 7,
                question: "7. Meat and vegetables can be stored together in the same fridge.",
                options: ["True", "False"],
                correct: "False",
                why: "စာပိုဒ်တွင် 'All meat and vegetables must be stored in separate refrigerators.' (သီးခြားရေခဲသေတ္တာများတွင် သိမ်းရမည်) ဟု ရှင်းလင်းစွာ ပါရှိသဖြင့် အတူတူသိမ်းရန် ဆိုသည်မှာ မှားယွင်းပါသည်။",
                strategy: "စာသားထဲက 'separate' (သီးခြား) နှင့် မေးခွန်းထဲက 'together' (အတူတူ) ကို ဆန့်ကျင်ကြောင်း သတိပြုပါ။"
            },
            {
                id: 8,
                question: "8. The cook must wear a hairnet when working.",
                options: ["True", "False"],
                correct: "True",
                why: "စာပိုဒ်တွင် 'The cook needs to wear a clean apron and a hairnet while preparing food.' ဟု အတိအကျ ဖော်ပြထားသဖြင့် မှန်ကန်ပါသည်။",
                strategy: "စာသားထဲတွင် 'hairnet' ပါဝင်မှုကို အတိအကျ ရှာဖွေအတည်ပြုပါ။"
            },
            {
                id: 9,
                question: "9. Garbage bins must be emptied once a week.",
                options: ["True", "False"],
                correct: "False",
                why: "စာပိုဒ်တွင် 'Garbage bins must be covered with lids and emptied after every meal.' (အစားအစာတိုင်းပြီးတိုင်း ဗလာဖြစ်အောင်လုပ်ရမည်) ဟု ပါရှိသည်။ တစ်ပတ်တစ်ခါသာ လုပ်ရန်မဟုတ်သောကြောင့် မှားယွင်းပါသည်။",
                strategy: "'after every meal' (ထမင်းတိုင်းပြီးတိုင်း) နှင့် 'once a week' (တစ်ပတ်တစ်ခါ) သည် ကွာခြားသော အချိန်ကာလများဖြစ်သည်။"
            },
            {
                id: 10,
                question: "10. Broken kitchen tools should be reported to the chief steward.",
                options: ["True", "False"],
                correct: "True",
                why: "စာပိုဒ်၏ နောက်ဆုံးစာကြောင်းတွင် 'If any kitchen tool is broken, report it to the chief steward.' ဟု အတိအကျ ဖော်ပြထားသောကြောင့် မှန်ကန်ပါသည်။",
                strategy: "'broken' နှင့် 'report to the chief steward' ဟူသော စကားလုံးများကို စာပိုဒ်အဆုံးပိုင်းတွင် ရှာဖွေအတည်ပြုပါ။"
            }
        ]
    },
   
{
    readingId: 3,
    title: "LIFEBOAT DRILL PROCEDURE",
    passage: `LIFEBOAT DRILL PROCEDURE
The lifeboat drill is held every Monday at 10:00. All crew members must go to their lifeboat stations. 
Everyone must wear a lifejacket and a warm jacket because the sea water is cold. 
The lifeboat has enough food and water for 30 people for 5 days. 
The crew must check the engine and the steering system before lowering the lifeboat into the water.`,
    questions: [
        {
            id: 11,
            question: "11. The lifeboat drill happens every Monday.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်၏ ပထမစာကြောင်းတွင် 'The lifeboat drill is held every Monday at 10:00.' ဟု အတိအကျ ဖော်ပြထားသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'every Monday' ဟူသော အချိန်ဇယားကို စာပိုဒ်အစတွင် ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 12,
            question: "12. Crew members only need to wear a lifejacket, not a warm jacket.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'Everyone must wear a lifejacket and a warm jacket' ဟု ပါရှိသဖြင့် နှစ်မျိုးလုံး ဝတ်ဆင်ရမည်ဖြစ်သည်။ 'အကျီတစ်မျိုးတည်းသာ' ဟု ဆိုခြင်းမှာ မှားယွင်းပါသည်။",
            strategy: "စာပိုဒ်ထဲက 'and' (နှင့်) ကို သတိပြုပါ။ ပစ္စည်းနှစ်ခုလုံး လိုအပ်ကြောင်း ဖော်ပြသည်။"
        },
        {
            id: 13,
            question: "13. The lifeboat has enough food for 15 people.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'enough food and water for 30 people' ဟု ဖော်ပြထားပြီး လူ ၁၅ ယောက်အတွက် မဟုတ်ဘဲ ၃၀ ယောက်အတွက် ဖြစ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "ကိန်းဂဏန်း (၁၅ vs ၃၀) ကို အတိအကျ နှိုင်းယှဉ်စစ်ဆေးပါ။"
        },
        {
            id: 14,
            question: "14. The crew must check the engine before lowering the boat.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်၏ နောက်ဆုံးစာကြောင်းတွင် 'The crew must check the engine and the steering system before lowering the lifeboat' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'before lowering' (မချမီ) ဆိုတဲ့ အချိန်အပိုင်းအခြားကို အာရုံစိုက်ပြီး စစ်ဆေးပါ။"
        },
        {
            id: 15,
            question: "15. The drill takes place in the afternoon.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'at 10:00' (နံနက် ၁၀ နာရီ) ဟု ပါရှိပြီး ညနေပိုင်း (Afternoon) မဟုတ်ပါ။ ထို့ကြောင့် မှားယွင်းပါသည်။",
            strategy: "အချိန် (10:00) က နံနက်ခင်းဖြစ်ကြောင်း သိရှိထားပါ။ မွန်းလွဲပိုင်းနှင့် ခွဲခြားပါ။"
        }
    ]
},

// ==================== READING 4: DECK WATCHKEEPING DUTIES ====================
{
    readingId: 4,
    title: "DECK WATCHKEEPING DUTIES",
    passage: `DECK WATCHKEEPING DUTIES
The deck officer on watch must stay on the bridge at all times. He must check the radar and the GPS every 15 minutes. 
He must also record the ship's position in the logbook every hour. During foggy weather, he must sound the fog horn every two minutes. 
If he feels sleepy, he can ask the lookout to stay on the bridge while he takes a short break.`,
    questions: [
        {
            id: 16,
            question: "16. The officer on watch must remain on the bridge constantly.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'must stay on the bridge at all times' (အချိန်တိုင်းနေရမည်) ဟု ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'at all times' (အချိန်တိုင်း) ဆိုတဲ့ စကားလုံးကို အတိအကျ ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 17,
            question: "17. The officer checks the radar every 30 minutes.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'every 15 minutes' ဟု ပါရှိပြီး ၃၀ မိနစ်တစ်ကြိမ်မဟုတ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "'every 15 minutes' နှင့် 'every 30 minutes' ကို အတိအကျ ခွဲခြားပါ။"
        },
        {
            id: 18,
            question: "18. The officer records the ship's position every hour.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'record the ship's position in the logbook every hour' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'every hour' ဆိုတဲ့ အချိန်ကာလကို စာသားထဲတွင် ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 19,
            question: "19. The fog horn is sounded every 10 minutes in foggy weather.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'every two minutes' (၂ မိနစ်တစ်ကြိမ်) ဟု ပါရှိပြီး ၁၀ မိနစ်တစ်ကြိမ်မဟုတ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "ကိန်းဂဏန်း (၁၀ မိနစ်နှင့် ၂ မိနစ်) ကို နှိုင်းယှဉ်စစ်ဆေးပါ။"
        },
        {
            id: 20,
            question: "20. The officer can leave the bridge if a lookout is present.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'he can ask the lookout to stay on the bridge while he takes a short break' ဟု ပါရှိသဖြင့် အစောင့်တစ်ယောက်ရှိလျှင် အနားယူနိုင်ကြောင်း ဖော်ပြထားပါသည်။",
            strategy: "အခြေအနေသတ်မှတ်ချက် (Condition) ကို အာရုံစိုက်ပါ။ 'If...can...' ပုံစံကို သတိပြုပါ။"
        }
    ]
},

// ==================== READING 5: USING PERSONAL PROTECTIVE EQUIPMENT (PPE) ====================
{
    readingId: 5,
    title: "USING PERSONAL PROTECTIVE EQUIPMENT (PPE)",
    passage: `USING PERSONAL PROTECTIVE EQUIPMENT (PPE)
All crew members working on deck must wear their PPE at all times. PPE includes a hard hat, safety boots, and high-visibility clothing. 
When handling chemicals, the crew must also wear rubber gloves and goggles. 
It is the bosun's duty to check that everyone is wearing the correct equipment. 
If any equipment is missing, the crew member must report to the bosun immediately.`,
    questions: [
        {
            id: 21,
            question: "21. Crew members must wear PPE only when working in the engine room.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'working on deck' (သင်္ဘောကုန်းပတ်ပေါ်) ဟု ပါရှိပြီး အင်ဂျင်ခန်းတွင်းဟု မပါရှိသဖြင့် မှားယွင်းပါသည်။",
            strategy: "နေရာ (Location) ကို အတိအကျ စစ်ဆေးပါ။ 'on deck' နှင့် 'engine room' ကွာခြားပါသည်။"
        },
        {
            id: 22,
            question: "22. PPE includes hard hat, safety boots, and high-visibility clothing.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'PPE includes a hard hat, safety boots, and high-visibility clothing.' ဟု အတိအကျ ဖော်ပြထားသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "စာသားထဲတွင် 'includes' နောက်လိုက်ပစ္စည်းများကို ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 23,
            question: "23. Rubber gloves are needed when handling chemicals.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'When handling chemicals, the crew must also wear rubber gloves and goggles.' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "ဓာတုပစ္စည်းကိုင်တွယ်ခြင်း (handling chemicals) အတွက် သီးခြားလိုအပ်ချက်ကို ရှာဖွေပါ။"
        },
        {
            id: 24,
            question: "24. The captain is responsible for checking PPE.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'It is the bosun's duty to check...' (ကုန်းပတ်မှူး၏ တာဝန်) ဟု ပါရှိပြီး ကပ္ပတိန် (Captain) မဟုတ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "တာဝန်ရှိသူ (Responsible Person) ကို အတိအကျ စစ်ဆေးပါ။ Bosun vs Captain ခွဲခြားပါ။"
        },
        {
            id: 25,
            question: "25. Missing equipment must be reported to the bosun.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'the crew member must report to the bosun immediately' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'report to the bosun' ဆိုတဲ့ စကားစုကို စာသားအဆုံးပိုင်းတွင် ရှာဖွေအတည်ပြုပါ။"
        }
    ]
},

// ==================== READING 6: GARBAGE MANAGEMENT (MARPOL) ====================
{
    readingId: 6,
    title: "GARBAGE MANAGEMENT ON BOARD",
    passage: `GARBAGE MANAGEMENT ON BOARD
Ships must follow strict garbage management rules to protect the ocean. All garbage must be separated into different categories: plastics, food waste, and metal. 
Plastics are not allowed to be thrown into the sea. Food waste can be disposed of into the sea, but only if the ship is more than 12 nautical miles from land. 
All garbage disposal activities must be recorded in the garbage logbook.`,
    questions: [
        {
            id: 26,
            question: "26. Plastics can be thrown into the sea if the ship is far from land.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'Plastics are not allowed to be thrown into the sea.' (ပလတ်စတစ်များကို ပင်လယ်ထဲ လုံးဝမပစ်ရ) ဟု အတိအကျ တားမြစ်ထားသဖြင့် မှားယွင်းပါသည်။",
            strategy: "တားမြစ်ချက် (Not allowed) ကို သတိပြုပါ။ အကွာအဝေးနှင့် မသက်ဆိုင်ဘဲ လုံးဝတားမြစ်ထားသည်။"
        },
        {
            id: 27,
            question: "27. Garbage must be separated into three categories.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'plastics, food waste, and metal' ဟု အမျိုးအစား ၃ မျိုးခွဲရမည်ဟု ဖော်ပြထားသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "အမျိုးအစားအရေအတွက် (၃ မျိုး) ကို စာသားထဲမှ ရေတွက်အတည်ပြုပါ။"
        },
        {
            id: 28,
            question: "28. Food waste can be disposed of 10 nautical miles from land.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'more than 12 nautical miles' (၁၂ မိုင်ထက်ပိုမှ) ဟု ပါရှိပြီး ၁၀ မိုင်ဆိုသည်မှာ သတ်မှတ်ချက်ထက် နည်းနေသဖြင့် မှားယွင်းပါသည်။",
            strategy: "အကွာအဝေး သတ်မှတ်ချက် (more than 12 vs 10) ကို အတိအကျ နှိုင်းယှဉ်ပါ။"
        },
        {
            id: 29,
            question: "29. All disposal activities must be recorded in a logbook.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်၏ နောက်ဆုံးစာကြောင်းတွင် 'All garbage disposal activities must be recorded in the garbage logbook.' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'recorded in the logbook' ဆိုတဲ့ စကားစုကို စာသားအဆုံးတွင် ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 30,
            question: "30. Garbage rules are for protecting the ocean.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်၏ ပထမစာကြောင်းတွင် 'to protect the ocean' (သမုဒ္ဒရာကိုကာကွယ်ရန်) ဟု ရည်ရွယ်ချက် အတိအကျ ဖော်ပြထားသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "ရည်ရွယ်ချက် (Purpose) ကို ပထမစာကြောင်းတွင် ရှာဖွေပါ။"
        }
    ]
},

// ==================== READING 7: MOORING OPERATIONS SAFETY ====================
{
    readingId: 7,
    title: "MOORING OPERATIONS SAFETY",
    passage: `MOORING OPERATIONS SAFETY
Mooring operations are one of the most dangerous jobs on a ship. All crew members must wear gloves and a hard hat during mooring. 
The crew must stand clear of the mooring lines because they can break suddenly. 
The bosun will give signals to the winch operator using hand gestures or a radio. 
The mooring team must never step over a line that is under tension.`,
    questions: [
        {
            id: 31,
            question: "31. Mooring operations are very safe and easy.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'Mooring operations are one of the most dangerous jobs on a ship.' (အအန္တရာယ်အကြီးဆုံး အလုပ်များထဲမှ တစ်ခု) ဟု ဆိုထားသောကြောင့် 'အလွန်လုံခြုံသည်' ဟု ဆိုခြင်းမှာ ဆန့်ကျင်ဘက်ဖြစ်ပါသည်။",
            strategy: "ဆန့်ကျင်ဘက် အဓိပ္ပာယ် (Dangerous vs Safe) ကို သတိပြုပါ။"
        },
        {
            id: 32,
            question: "32. Crew must wear gloves and a hard hat for mooring.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်တွင် 'All crew members must wear gloves and a hard hat during mooring.' ဟု အတိအကျ ပါရှိသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "သတ်မှတ်ထားသော PPE ပစ္စည်းများ (gloves and hard hat) ကို စာသားထဲတွင် ရှာဖွေအတည်ပြုပါ။"
        },
        {
            id: 33,
            question: "33. The crew should stand close to the lines to check them.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'stand clear of the mooring lines' (ကြိုးများနှင့် ဝေးဝေးနေရန်) ဟု ပါရှိပြီး 'အနီးကပ်နေရန်' ဆိုသည်မှာ ဆန့်ကျင်ဘက်ဖြစ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "'stand clear' (ဝေးဝေးနေရန်) နှင့် 'stand close' (အနီးကပ်နေရန်) ဆန့်ကျင်ဘက်ဖြစ်ကြောင်း သတိပြုပါ။"
        },
        {
            id: 34,
            question: "34. Signals are given to the winch operator by the captain.",
            options: ["True", "False"],
            correct: "False",
            why: "စာပိုဒ်တွင် 'The bosun will give signals to the winch operator' ဟု ပါရှိပြီး ကပ္ပတိန် (Captain) မဟုတ်ဘဲ ကုန်းပတ်မှူး (Bosun) ဖြစ်သောကြောင့် မှားယွင်းပါသည်။",
            strategy: "တာဝန်ရှိသူ (Bosun vs Captain) ကို အတိအကျ ခွဲခြားစစ်ဆေးပါ။"
        },
        {
            id: 35,
            question: "35. It is forbidden to step over a line under tension.",
            options: ["True", "False"],
            correct: "True",
            why: "စာပိုဒ်၏ နောက်ဆုံးစာကြောင်းတွင် 'never step over a line that is under tension' (တင်းနေသောကြိုးကို ဘယ်တော့မှ မကျော်ရ) ဟု အတိအကျ တားမြစ်ထားသဖြင့် မှန်ကန်ပါသည်။",
            strategy: "'never' (လုံးဝမလုပ်ရ) ဆိုတဲ့ တားမြစ်ချက်ကို အတိအကျ ရှာဖွေအတည်ပြုပါ။"
        }
    ]
}
];

// ============================================================
// 4. WRITING TOPICS (15 TOPICS)
// ============================================================
const WRITING_TOPICS = [
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 1: Introduce Yourself",
        prompt: "Write 3-4 sentences about yourself. Include your name, your job on board, and why you like working at sea.",
        strategy: "ဤအပိုင်းသည် အတိုချုံး မိတ်ဆက်စာသားဖြစ်သောကြောင့် **အချက်သုံးချက် (Name, Job, Reason)** ကို ရှင်းရှင်းလင်းလင်း တိုတိုတုတ်တုတ် ရေးသားရမည်။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>My name is Kyaw Zin and I am 25 years old.</i> (အမည်)<br>• <i>I work as an ordinary seaman on a cargo ship.</i> (အလုပ်အကိုင်)<br>• <i>I love working at sea because I enjoy the fresh air and seeing new places.</i> (ဘာလို့ကြိုက်လဲ)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 2: Your Daily Routine",
        prompt: "Write 3-4 sentences about your daily routine on board. What time do you wake up and what is your first task?",
        strategy: "နေ့စဉ်လုပ်ရိုးလုပ်စဉ်ကို ဖော်ပြရန် အချိန်ဇယားအတိုင်း (First/Then/After) ဆက်စပ်ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>I wake up at 6:00 a.m. every morning.</i> (ဘယ်အချိန်နိုးလဲ)<br>• <i>After breakfast, I go to the deck and start cleaning.</i> (ပထမဆုံးလုပ်ငန်း)<br>• <i>I work until 12:00 p.m. and then I have lunch.</i> (နောက်လုပ်ဆောင်ချက်)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 3: Your Cabin",
        prompt: "Describe your cabin on the ship. What does it look like and what do you have in it?",
        strategy: "အခန်း၏ အရွယ်အစား၊ ပရိဘောဂများနှင့် သင်အကြိုက်ဆုံး အစိတ်အပိုင်းကို ဖော်ပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>My cabin is small but comfortable.</i> (အရွယ်အစား)<br>• <i>I have a bed, a desk, and a small wardrobe.</i> (ပစ္စည်းများ)<br>• <i>My favorite thing is the window where I can see the sea.</i> (အကြိုက်ဆုံး)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 4: Your Favorite Food on Board",
        prompt: "Write about the food on your ship. What is your favorite meal and why?",
        strategy: "သင်္ဘောပေါ်က အစားအစာ အမျိုးအစားနှင့် သင်အကြိုက်ဆုံး ဟင်းလျာကို ရှင်းပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>The cook prepares delicious meals every day.</i> (အစားအစာအကြောင်း)<br>• <i>My favorite meal is chicken curry with rice.</i> (ကြိုက်တဲ့ဟင်း)<br>• <i>It reminds me of home and gives me energy for my work.</i> (ဘာလို့ကြိုက်လဲ)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 5: Safety Equipment You Use",
        prompt: "Write 3-4 sentences about safety equipment you use on deck. What do you wear and why?",
        strategy: "PPE ပစ္စည်းများနှင့် ၎င်းတို့၏ အရေးပါပုံကို ဖော်ပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>I always wear a hard hat and safety boots on deck.</i> (ဘာဝတ်လဲ)<br>• <i>I also wear a high-visibility vest so others can see me.</i> (နောက်ထပ်ပစ္စည်း)<br>• <i>This equipment protects me from injuries while working.</i> (ဘာလို့ဝတ်လဲ)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 6: Your First Impressions of the Ship",
        prompt: "What did you think when you first saw your ship? How did you feel?",
        strategy: "ပထမဆုံး သင်္ဘောပေါ်တက်တုန်းက ခံစားချက်ကို ရိုးသားစွာ ဖော်ပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>When I first saw the ship, I was amazed by its size.</i> (မြင်တဲ့အခါ ခံစားချက်)<br>• <i>It was much bigger than I had imagined.</i> (ဘာကိုသတိထားမိလဲ)<br>• <i>I felt excited but also a little nervous.</i> (ခံစားချက်)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 7: Your Best Friend on Board",
        prompt: "Write about a friend you have made on the ship. Who are they and why are they a good friend?",
        strategy: "သင်္ဘောပေါ်က သူငယ်ချင်းအကြောင်း၊ သူတို့ရဲ့ အလုပ်နှင့် ဘာလို့ ခင်မင်ရသလဲ ဆိုတာကို ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>My best friend on board is the cook.</i> (ဘယ်သူလဲ)<br>• <i>He is always friendly and makes me laugh.</i> (သူ့ရဲ့အရည်အသွေး)<br>• <i>We eat together and talk about our families.</i> (ဘာတွေလုပ်ကြလဲ)"
    },
    {
        part: "Part 1 – Short Writing (approx. 25 words)",
        title: "Topic 8: A Message to Your Family",
        prompt: "Write a short message to your family at home. Tell them about your day and say you miss them.",
        strategy: "မိသားစုထံ ပေးပို့သည့် ခံစားချက်ပါသော စာတိုတစ်စောင် ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Dear family, I hope you are all well.</i> (စတင်မေးမြန်းခြင်း)<br>• <i>Today was a busy day but everything is fine.</i> (နေ့စဉ်ဖြစ်ရပ်)<br>• <i>I miss you all very much and I will see you soon.</i> (လွမ်းကြောင်းပြောခြင်း)"
    },

    // ==================== PART 2 (Long Writing - 80 to 100 words) ====================
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 9: A Memorable Day at Sea",
        prompt: "Describe a day you remember well on board. What happened and how did you feel?",
        strategy: "ဤအပိုင်းသည် ကိုယ်တွေ့ အတွေ့အကြုံကို ပြန်လည်ဖော်ပြသည့် စာစီစာကုံးဖြစ်သည်။ **ဖြစ်ရပ် (What happened)** နှင့် **ခံစားချက် (How you felt)** ကို အဓိကထားရေးသားရမည်။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>One of the most memorable days was when we had a heavy storm.</i> (နိဒါန်း)<br>• <i>The waves were very high and the ship was rolling a lot. I stayed on the bridge with the captain and helped with the navigation.</i> (ဘာဖြစ်ခဲ့လဲ)<br>• <i>I was scared at first, but the captain stayed calm. After the storm, I felt proud and strong.</i> (ခံစားချက်နှင့် နိဂုံး)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 10: A Fire Drill Experience",
        prompt: "Describe a fire drill you participated in. What did you do and what did you learn?",
        strategy: "မီးဘေးလေ့ကျင့်ခန်း၏ အဆင့်များနှင့် သင်ယူခဲ့ရသည့် သင်ခန်းစာကို အစီအစဉ်တကျ ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Last week, we had a fire drill on board.</i> (ဘယ်အချိန်ကလဲ)<br>• <i>I put on my lifejacket and went to my muster station. The bosun showed us how to use a fire extinguisher properly.</i> (ဘာလုပ်ခဲ့လဲ)<br>• <i>I learned that staying calm is the most important thing during an emergency.</i> (သင်ခန်းစာ)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 11: Why Teamwork is Important on a Ship",
        prompt: "Explain why teamwork is important for seafarers. Give an example from your experience.",
        strategy: "သင်္ဘောပေါ်တွင် အဖွဲ့လိုက်လုပ်ဆောင်ခြင်း၏ အရေးပါပုံကို သင်တွေ့ကြုံခဲ့သည့် ဥပမာတစ်ခုဖြင့် ရှင်းပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Teamwork is very important on a ship because everyone depends on each other.</i> (အရေးပါပုံ)<br>• <i>For example, during mooring, we must work together to pull the ropes.</i> (ဥပမာ)<br>• <i>If one person makes a mistake, it can be dangerous. Good teamwork makes the ship safe and efficient.</i> (နိဂုံး)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 12: Your First Day on Board",
        prompt: "Describe your first day on your first ship. What did you see and how did you feel?",
        strategy: "ပထမဆုံးနေ့၏ အတွေ့အကြုံကို အသေးစိတ်ဖော်ပြပါ။ မြင်ရသော မြင်ကွင်း၊ ကြားရသော အသံများနှင့် ခံစားချက်ကို ထည့်သွင်းရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>I still remember my first day on board. The ship was huge and everything was new to me.</i> (နိဒါန်း)<br>• <i>I saw the engine room and the bridge. I felt overwhelmed because there were so many things to learn.</i> (မြင်ရသည်များ)<br>• <i>But my colleagues were friendly and helped me. Now I feel at home on the ship.</i> (ခံစားချက်နှင့်အဆုံး)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 13: Keeping the Deck Clean",
        prompt: "Explain why it is important to keep the deck clean and how you do it.",
        strategy: "သန့်ရှင်းရေး၏ အရေးပါပုံ၊ လုပ်ဆောင်ရမည့် အဆင့်များနှင့် ဘေးကင်းရေးအတွက် အကျိုးကျေးဇူးကို ဆက်စပ်ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Keeping the deck clean is very important for safety.</i> (အရေးပါပုံ)<br>• <i>I sweep the deck every morning and wash it with water.</i> (ဘယ်လိုလုပ်လဲ)<br>• <i>A clean deck prevents slipping accidents and makes the ship look professional.</i> (အကျိုးကျေးဇူး)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 14: Working in Bad Weather",
        prompt: "Describe a time you had to work in bad weather. How did you manage it?",
        strategy: "ရာသီဥတုဆိုးရွားစဉ် အလုပ်လုပ်ရသည့် အတွေ့အကြုံ၊ ကြုံတွေ့ရသည့် အခက်အခဲများနှင့် ဖြေရှင်းနည်းကို ရေးပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Last month, we worked in heavy rain while mooring.</i> (အခြေအနေ)<br>• <i>The deck was very slippery, so we had to be extra careful. I wore my waterproof jacket and held the ropes tightly.</i> (ဘယ်လိုဖြေရှင်းလဲ)<br>• <i>It was difficult, but we finished our work safely. Teamwork helped us manage the bad weather.</i> (ရလဒ်)"
    },
    {
        part: "Part 2 – Long Writing (80–100 words)",
        title: "Topic 15: Life at Sea vs. Life on Land",
        prompt: "Compare working at sea with working on land. What are the differences and which do you prefer?",
        strategy: "ပင်လယ်နှင့် ကုန်းပေါ်အလုပ်အကိုင် ကွာခြားချက်များနှင့် သင်ပိုနှစ်သက်သည့် တစ်ခုကို ရွေးချယ်ဖော်ပြပါ။",
        blueprint: "<b>[ရေးထုံးပုံစံ]:</b><br>• <i>Working at sea is very different from working on land.</i> (နိဒါန်း)<br>• <i>On a ship, I work long hours and stay away from my family. On land, people have more free time.</i> (ကွာခြားချက်)<br>• <i>However, I prefer the sea because I love the ocean and the sense of adventure.</i> (ဦးစားပေးမှု)"
    }
];

// ============================================================
// 5. SPEAKING TOPICS (50 EXERCISES)
// ============================================================
const SPEAKING_TOPICS = [
    {
        id: 1,
        category: "Personal Information",
        question: "Can you tell me a little about yourself? (Name, Age, Nationality)",
        sample_answer: "My name is Aung Kyaw Moe. I am 28 years old and I come from Yangon, Myanmar. I currently work as an Ordinary Seaman on a container ship.",
        strategy: "အရင်ဆုံး ကိုယ်နာမည်၊ အသက်၊ နိုင်ငံသားကို ပြောပါ။ ပြီးရင် လက်ရှိအလုပ်အကိုင်ကို ဆက်ပြောပါ။",
        vocabulary: "Ordinary Seaman, container ship, nationality"
    },
    {
        id: 2,
        category: "Personal Information",
        question: "Describe your family. Do you have a wife or children?",
        sample_answer: "Yes, I am married and I have two children, a son and a daughter. My wife is a teacher. I miss them a lot when I am at sea.",
        strategy: "မိသားစုအကြောင်း ရိုးရိုးရှင်းရှင်း ပြောပါ။ အိမ်ထောင်ရှိ/မရှိ၊ ကလေးရှိ/မရှိ၊ သူတို့နဲ့ ဘယ်လိုဆက်သွယ်လဲ ဆိုတာကို ဖြည့်စွက်ပြောပါ။",
        vocabulary: "married, children, teacher, miss"
    },
    {
        id: 3,
        category: "Personal Information",
        question: "Where is your hometown? Can you describe it?",
        sample_answer: "My hometown is in Pathein, Ayeyarwady Region. It is a peaceful place near the river. The people there are friendly and the food is delicious.",
        strategy: "ကိုယ်မွေးရပ်မြေရဲ့ တည်နေရာ၊ ထူးခြားချက်နဲ့ သင်ကြိုက်တဲ့ အချက်ကို ဖော်ပြပါ။",
        vocabulary: "hometown, peaceful, river, friendly, delicious"
    },
    {
        id: 4,
        category: "Personal Information",
        question: "Why did you choose a career at sea? (Why)",
        sample_answer: "I chose a career at sea because I love the ocean and traveling. Also, the salary is good and it helps me support my family financially.",
        strategy: "'Because' ဆိုတဲ့ စကားလုံးကို သုံးပြီး အကြောင်းပြချက် ရှင်းရှင်းလင်းလင်း ပြောပါ။",
        vocabulary: "career, ocean, traveling, salary, support"
    },
    {
        id: 5,
        category: "Personal Information",
        question: "How many years have you worked at sea?",
        sample_answer: "I have worked at sea for about 3 years now. I started my career as a cadet and now I am an Ordinary Seaman.",
        strategy: "အလုပ်လုပ်ခဲ့တဲ့ နှစ်အရေအတွက်ကို အတိအကျပြောပြီး ဘယ်လိုရာထူးတွေ တက်လာလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "worked, career, cadet, Ordinary Seaman"
    },
    {
        id: 6,
        category: "Personal Information",
        question: "What ships have you worked on before?",
        sample_answer: "I have worked on two ships before. The first was a bulk carrier and the second was a container ship. Both were good experiences.",
        strategy: "အလုပ်လုပ်ခဲ့ဖူးတဲ့ သင်္ဘောအမျိုးအစားတွေကို စာရင်းပြုပြီး အတွေ့အကြုံကို အတိုချုံးပြောပါ။",
        vocabulary: "bulk carrier, container ship, experience"
    },
    {
        id: 7,
        category: "Personal Information",
        question: "Do you have any hobbies or free time activities on board?",
        sample_answer: "In my free time, I like to read books and watch movies. I also exercise in the gym to stay healthy and fit.",
        strategy: "အားလပ်ချိန်မှာ ဘာတွေလုပ်လေ့ရှိလဲ ဆိုတာကို ရိုးရိုးရှင်းရှင်း ပြောပါ။",
        vocabulary: "hobbies, free time, read books, watch movies, exercise, gym"
    },
    {
        id: 8,
        category: "Personal Information",
        question: "What is your rank on the current ship?",
        sample_answer: "My current rank is Ordinary Seaman. I work under the bosun and I am responsible for deck maintenance and cleaning duties.",
        strategy: "လက်ရှိရာထူးကို အတိအကျပြောပြီး ဘယ်သူ့လက်အောက်မှာ အလုပ်လုပ်ရလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "rank, Ordinary Seaman, bosun, responsible, deck maintenance"
    },
    {
        id: 9,
        category: "Personal Information",
        question: "How do you communicate with your family while at sea?",
        sample_answer: "I communicate with my family using satellite communication and WhatsApp when there is internet. I call them every weekend.",
        strategy: "ဘယ်လိုနည်းပညာတွေ သုံးပြီး ဆက်သွယ်လဲ ဆိုတာကို ပြောပြီး ဘယ်နှစ်ကြိမ်လောက် ဆက်သွယ်လဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "communicate, satellite communication, internet, WhatsApp"
    },
    {
        id: 10,
        category: "Personal Information",
        question: "What is your favorite food on the ship?",
        sample_answer: "My favorite food on the ship is chicken curry with rice. The cook prepares it very well and it reminds me of home.",
        strategy: "သင်္ဘောပေါ်က ကြိုက်တဲ့အစားအစာကို ပြောပြီး ဘာလို့ကြိုက်တာလဲဆိုတဲ့ အကြောင်းပြချက်ကို ထည့်ပြောပါ။",
        vocabulary: "favorite food, chicken curry, rice, cook, reminds"
    },

    // ===================== PART 2: DAILY DUTIES & ROUTINE (11-20) =====================
    {
        id: 11,
        category: "Daily Duties & Routine",
        question: "What are your main duties on board the ship?",
        sample_answer: "As an Ordinary Seaman, my main duties are to keep the deck clean, maintain the mooring ropes, and assist the bosun during cargo operations. I also stand watch on the bridge when required.",
        strategy: "ကိုယ့်ရာထူးရဲ့ တာဝန်ကို အတိအကျပြောပါ။ Deck/Engine ပေါ်မှာ ဘာတွေလုပ်ရသလဲဆိုတာကို အသေးစိတ်ဖော်ပြပါ။",
        vocabulary: "duties, maintain, mooring ropes, bosun, cargo operations, stand watch"
    },
    {
        id: 12,
        category: "Daily Duties & Routine",
        question: "Can you describe your daily routine on the ship?",
        sample_answer: "I wake up at 6:00 a.m. every day. I have breakfast at 6:30, and then I start my work at 7:00. I clean the deck and check the life-saving equipment. I have lunch at 12:00 and finish my work at 5:00 p.m.",
        strategy: "မနက်အိပ်ရာထချိန်ကနေ ညအိပ်ချိန်အထိ အချိန်ဇယားအတိုင်း ဆက်တိုက်ပြောပါ။",
        vocabulary: "wake up, breakfast, deck, life-saving equipment, lunch"
    },
    {
        id: 13,
        category: "Daily Duties & Routine",
        question: "What time do you start and finish your work every day?",
        sample_answer: "I start my work at 8:00 a.m. and finish at 5:00 p.m. However, if there is an emergency or special operation, I have to work extra hours.",
        strategy: "အလုပ်စချိန်နဲ့ ပြီးချိန်ကို အတိအကျပြောပါ။ လိုအပ်ရင် အချိန်ပိုလုပ်ရတဲ့အကြောင်း ထည့်ပြောပါ။",
        vocabulary: "start, finish, emergency, special operation, extra hours"
    },
    {
        id: 14,
        category: "Daily Duties & Routine",
        question: "What do you do during your watch on the bridge?",
        sample_answer: "During my watch, I check the radar and GPS to monitor the ship's position. I also keep a lookout for other vessels and report any changes to the officer on watch.",
        strategy: "ကင်းလှည့်ချိန်အတွင်း ဘာတွေလုပ်ရသလဲဆိုတာကို အဆင့်ဆင့် ပြောပါ။",
        vocabulary: "watch, radar, GPS, monitor, lookout, vessels"
    },
    {
        id: 15,
        category: "Daily Duties & Routine",
        question: "What is the first thing you do when you come on watch?",
        sample_answer: "The first thing I do is check the logbook to see what happened during the previous watch. Then I check the weather and the ship's position.",
        strategy: "အစဉ်လိုက် လုပ်ရမယ့် အဆင့်တွေကို 'First... Then...' ဆိုတဲ့ ပုံစံသုံးပြီး ပြောပါ။",
        vocabulary: "logbook, previous watch, weather, position"
    },
    {
        id: 16,
        category: "Daily Duties & Routine",
        question: "Do you work day shift or night shift? How do you manage?",
        sample_answer: "I work day shift from 8 a.m. to 5 p.m. It is good because I can sleep at night. When I worked night shift before, I adjusted my sleep schedule during the day.",
        strategy: "ဘယ်အချိန်ပိုင်း အလုပ်လုပ်လဲဆိုတာကို ပြောပြီး အိပ်ချိန်ကို ဘယ်လိုစီမံလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "day shift, night shift, manage, sleep schedule, adjusted"
    },
    {
        id: 17,
        category: "Daily Duties & Routine",
        question: "What tools do you use for your daily work?",
        sample_answer: "I use tools like paint brushes, scrapers, hammers, and spanners. For cleaning, I use mops and deck brushes. We also use power tools for maintenance.",
        strategy: "အလုပ်လုပ်ရာမှာ သုံးတဲ့ ကိရိယာတွေကို စာရင်းပြုပြီး ဘာအတွက်သုံးလဲဆိုတာ ထည့်ရှင်းပြပါ။",
        vocabulary: "paint brushes, scrapers, hammers, spanners, mops, power tools"
    },
    {
        id: 18,
        category: "Daily Duties & Routine",
        question: "How do you maintain the deck equipment?",
        sample_answer: "We maintain the deck equipment by cleaning, oiling, and painting them regularly. We also check for any rust or damage and repair it immediately.",
        strategy: "ပြုပြင်ထိန်းသိမ်းပုံ အဆင့်တွေကို ရှင်းရှင်းလင်းလင်း ပြောပါ။",
        vocabulary: "maintain, oiling, painting, rust, damage, repair"
    },
    {
        id: 19,
        category: "Daily Duties & Routine",
        question: "What does the bosun usually ask you to do?",
        sample_answer: "The bosun usually asks me to clean the deck, check the mooring lines, and prepare the equipment for cargo operations. I always follow his instructions.",
        strategy: "အထက်လူကြီးရဲ့ ညွှန်ကြားချက်တွေကို နမူနာနဲ့ပြောပြီး ဘယ်လိုလိုက်နာလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "bosun, clean the deck, mooring lines, equipment, instructions"
    },
    {
        id: 20,
        category: "Daily Duties & Routine",
        question: "Do you have to write any reports or logbooks?",
        sample_answer: "Yes, I have to record my daily work in the deck logbook. I also report any defects or issues to the bosun. Writing reports is very important for safety.",
        strategy: "ဘာတွေရေးရလဲ၊ ဘယ်သူ့ကို တင်ပြရလဲဆိုတာကို ရှင်းပြပြီး ဘာလို့အရေးကြီးလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "record, deck logbook, defects, issues, safety"
    },

    // ===================== PART 3: SAFETY & EMERGENCY (21-30) =====================
    {
        id: 21,
        category: "Safety & Emergency",
        question: "What safety equipment do you use on deck?",
        sample_answer: "I always wear a hard hat, safety boots, and a high-visibility vest. When I work near the edge, I wear a safety harness. I also carry a portable VHF radio.",
        strategy: "PPE (Personal Protective Equipment) တွေကို အမည်နဲ့အတူ ဘာကြောင့်သုံးရတာလဲဆိုတာကိုပါ ထည့်ပြောပါ။",
        vocabulary: "hard hat, safety boots, high-visibility vest, safety harness, portable VHF radio"
    },
    {
        id: 22,
        category: "Safety & Emergency",
        question: "What would you do if there was a fire on board? (What - Emergency)",
        sample_answer: "If there was a fire, I would sound the alarm immediately. Then I would put on my lifejacket and go to my muster station. I would follow the chief officer's instructions.",
        strategy: "အရေးပေါ်အခြေအနေအတွက် Action Plan ကို 'First... Then... Finally...' ဆိုတဲ့ ပုံစံသုံးပြီး ပြောပါ။",
        vocabulary: "sound the alarm, muster station, instructions, chief officer"
    },
    {
        id: 23,
        category: "Safety & Emergency",
        question: "What is a muster station and where is yours?",
        sample_answer: "A muster station is a designated area where crew members gather during an emergency. My muster station is on the boat deck, near the lifeboat.",
        strategy: "Muster Station ဆိုတာ ဘာလဲဆိုတဲ့ အဓိပ္ပါယ်ကို ရှင်းပြပြီး ကိုယ့်ရဲ့ Muster Station နေရာကို အတိအကျပြောပါ။",
        vocabulary: "muster station, designated area, gather, emergency, boat deck, lifeboat"
    },
    {
        id: 24,
        category: "Safety & Emergency",
        question: "How often do you have safety drills on board?",
        sample_answer: "We have safety drills at least once a month. We practice fire drills, lifeboat drills, and man overboard drills regularly to be prepared for emergencies.",
        strategy: "ဘယ်နှစ်ကြိမ် လေ့ကျင့်လဲ၊ ဘယ်လိုလေ့ကျင့်ခန်းတွေ ပြုလုပ်လဲဆိုတာကို ပြောပါ။",
        vocabulary: "safety drills, once a month, fire drills, lifeboat drills, man overboard, prepared"
    },
    {
        id: 25,
        category: "Safety & Emergency",
        question: "What do you do during a lifeboat drill?",
        sample_answer: "During a lifeboat drill, I put on my lifejacket and go to the lifeboat station. We practice lowering the lifeboat into the water and checking the engine.",
        strategy: "လေ့ကျင့်ခန်းအတွင်း လုပ်ဆောင်ရမယ့် အဆင့်တွေကို အစီအစဉ်တကျ ပြောပါ။",
        vocabulary: "lifeboat drill, lifejacket, lifeboat station, lowering, engine"
    },
    {
        id: 26,
        category: "Safety & Emergency",
        question: "What would you do if you saw a man overboard?",
        sample_answer: "If I saw a man overboard, I would shout 'Man overboard!' immediately and throw a lifebuoy with a light. Then I would report it to the bridge and keep my eyes on the person.",
        strategy: "အရေးပေါ်အခြေအနေမှာ ချက်ချင်းလုပ်ရမယ့် အဆင့်တွေကို အစဉ်လိုက် ပြောပါ။",
        vocabulary: "man overboard, shout, lifebuoy, report, bridge"
    },
    {
        id: 27,
        category: "Safety & Emergency",
        question: "What PPE must you wear in the engine room?",
        sample_answer: "In the engine room, I must wear safety boots, ear defenders, safety goggles, and coveralls. The environment is noisy and hot, so it is very important.",
        strategy: "Engine Room ရဲ့ သီးခြားအန္တရာယ်တွေကို သိထားပြီး အဲဒါနဲ့ဆိုင်တဲ့ PPE တွေကို ပြောပါ။",
        vocabulary: "engine room, safety boots, ear defenders, safety goggles, coveralls, noisy"
    },
    {
        id: 28,
        category: "Safety & Emergency",
        question: "Why is it important to wear a hard hat on deck?",
        sample_answer: "It is important to wear a hard hat on deck because it protects my head from falling objects. There are often cranes and heavy equipment overhead.",
        strategy: "ဘာကြောင့်သုံးရတာလဲဆိုတဲ့ အကြောင်းပြချက်ကို ရှင်းရှင်းလင်းလင်းပြောပြီး ဥပမာတစ်ခုထည့်ပြောပါ။",
        vocabulary: "hard hat, protects, head, falling objects, cranes, heavy equipment"
    },
    {
        id: 29,
        category: "Safety & Emergency",
        question: "What do you do if you see a leaking pipe?",
        sample_answer: "If I see a leaking pipe, I report it to the chief engineer immediately. I also put a bucket under the leak to prevent water damage and mark the area as dangerous.",
        strategy: "မတော်တဆမှုမဖြစ်အောင် ချက်ချင်းလုပ်ဆောင်ရမယ့် အဆင့်တွေကို ပြောပါ။",
        vocabulary: "leaking pipe, report, chief engineer, bucket, water damage, dangerous"
    },
    {
        id: 30,
        category: "Safety & Emergency",
        question: "How do you treat a small injury on board?",
        sample_answer: "For a small injury like a cut or burn, I clean it with antiseptic and put a bandage on it. If it is serious, I go to the ship's hospital and see the medic.",
        strategy: "အသေးစား ဒဏ်ရာအတွက် ဘယ်လိုကုသလဲ၊ ဘယ်အချိန်မှာ ဆရာဝန်သွားပြရမလဲဆိုတာကို ပြောပါ။",
        vocabulary: "injury, cut, burn, antiseptic, bandage, medic"
    },

    // ===================== PART 4: SHIP, WEATHER & TRAVEL (31-40) =====================
    {
        id: 31,
        category: "Ship, Weather & Travel",
        question: "Can you describe the ship you are working on now?",
        sample_answer: "I am working on a large container ship. It is about 300 meters long and can carry over 10,000 containers. It has a modern bridge and a powerful engine.",
        strategy: "သင်္ဘောရဲ့ အရွယ်အစား၊ အမျိုးအစား၊ သယ်ဆောင်နိုင်တဲ့ ပမာဏနဲ့ အဓိက အစိတ်အပိုင်းတွေကို ဖော်ပြပါ။",
        vocabulary: "container ship, 300 meters, containers, modern bridge, powerful engine"
    },
    {
        id: 32,
        category: "Ship, Weather & Travel",
        question: "What is the name of your ship and its flag?",
        sample_answer: "The name of my ship is 'MV Ocean Star' and it sails under the Panama flag. I have been on this ship for about 6 months now.",
        strategy: "သင်္ဘောနာမည်၊ အလံတော် (Flag State) နဲ့ ဒီသင်္ဘောပေါ်မှာ ဘယ်လောက်ကြာကြာ ရောက်နေပြီလဲဆိုတာ ပြောပါ။",
        vocabulary: "ship name, Panama flag, sails, 6 months"
    },
    {
        id: 33,
        category: "Ship, Weather & Travel",
        question: "What is the weather like today?",
        sample_answer: "Today the weather is sunny with clear skies. The wind is light and the sea is calm. It is a very good day for sailing.",
        strategy: "ရာသီဥတုအခြေအနေကို အတိအကျဖော်ပြပြီး သင်္ဘောသွားလာဖို့ ဘယ်လိုအခြေအနေလဲဆိုတာ ထည့်ပြောပါ။",
        vocabulary: "weather, sunny, clear skies, wind, light, sea, calm"
    },
    {
        id: 34,
        category: "Ship, Weather & Travel",
        question: "Have you ever experienced a bad storm at sea? How did you feel?",
        sample_answer: "Yes, I experienced a storm last year. The waves were very high and the ship was rolling heavily. I felt scared at first, but I stayed calm and followed orders.",
        strategy: "အတွေ့အကြုံကို ပြန်ပြောပြီး အဲဒီအချိန်က ခံစားချက်ကိုပါ ရိုးသားစွာ ဖော်ပြပါ။",
        vocabulary: "experienced, storm, waves, rolling, scared, stayed calm"
    },
    {
        id: 35,
        category: "Ship, Weather & Travel",
        question: "How do you handle working in bad weather? (How)",
        sample_answer: "When the weather is bad, I try to stay calm and follow the captain's orders. I always check the safety equipment and make sure I am wearing my lifejacket.",
        strategy: "ဘယ်လိုဖြေရှင်းသလဲဆိုတဲ့ နည်းလမ်းကို 'I try to...' ဆိုတဲ့ ပုံစံသုံးပြီး ပြောပါ။",
        vocabulary: "handle, bad weather, stay calm, captain's orders, safety equipment"
    },
    {
        id: 36,
        category: "Ship, Weather & Travel",
        question: "How many crew members are there on your ship?",
        sample_answer: "There are about 25 crew members on my ship. There are officers, engineers, deck crew, and galley staff. We work together as a team.",
        vocabulary: "crew members, officers, engineers, deck crew, galley staff, team"
    },
    {
        id: 37,
        category: "Ship, Weather & Travel",
        question: "Where is your ship going next?",
        sample_answer: "Our next destination is the port of Singapore. We are carrying electronic goods and will arrive there in about two days.",
        vocabulary: "next destination, port, Singapore, electronic goods, arrive"
    },
    {
        id: 38,
        category: "Ship, Weather & Travel",
        question: "How long is the current voyage?",
        sample_answer: "The current voyage will take about 20 days. We started from Rotterdam and we are going to Shanghai. It is quite a long trip.",
        vocabulary: "voyage, take 20 days, Rotterdam, Shanghai, long trip"
    },
    {
        id: 39,
        category: "Ship, Weather & Travel",
        question: "Do you like visiting new ports? Why?",
        sample_answer: "Yes, I love visiting new ports. It is exciting to see different countries and cultures. I also enjoy trying new food and buying souvenirs for my family.",
        vocabulary: "visiting, new ports, countries, cultures, trying new food, souvenirs"
    },
    {
        id: 40,
        category: "Ship, Weather & Travel",
        question: "What do you usually do during shore leave?",
        sample_answer: "During shore leave, I usually go shopping for groceries and personal items. I also like to walk around the city and take photos to share with my family.",
        vocabulary: "shore leave, shopping, groceries, personal items, walk around, take photos"
    },

    // ===================== PART 5: PREFERENCES, FUTURE & MIXED (41-50) =====================
    {
        id: 41,
        category: "Preferences & Future",
        question: "Do you prefer working at sea or on land? Why?",
        sample_answer: "I prefer working at sea because the salary is better and I love the adventure. However, I miss my family and life on land is more comfortable.",
        strategy: "ပင်လယ်နဲ့ ကုန်းပေါ် နှစ်ခုစလုံးရဲ့ ကောင်းကျိုး/ဆိုးကျိုးတွေကို ဆက်စပ်ပြောပြီး ဘာကြောင့် ဦးစားပေးတာလဲ ဆိုတာ ရှင်းပြပါ။",
        vocabulary: "prefer, working at sea, on land, salary, adventure, comfortable"
    },
    {
        id: 42,
        category: "Preferences & Future",
        question: "What languages can you speak on board?",
        sample_answer: "I can speak Burmese, English, and a little Chinese. I use English to communicate with the officers and international crew members.",
        vocabulary: "languages, Burmese, English, Chinese, communicate, international crew"
    },
    {
        id: 43,
        category: "Preferences & Future",
        question: "What is the most challenging thing about your job?",
        sample_answer: "The most challenging thing about my job is being away from my family for a long time. Also, working in heavy weather can be very exhausting.",
        vocabulary: "challenging, away from family, heavy weather, exhausting"
    },
    {
        id: 44,
        category: "Preferences & Future",
        question: "What do you like most about your job?",
        sample_answer: "What I like most about my job is the feeling of being at sea and the sense of responsibility. I also enjoy working with my shipmates and learning new skills.",
        vocabulary: "like most, feeling of being at sea, responsibility, shipmates, learning"
    },
    {
        id: 45,
        category: "Preferences & Future",
        question: "Where do you see yourself in the next 5 years? (Where)",
        sample_answer: "In the next 5 years, I hope to become a Bosun. I want to gain more experience and pass my officer exams. I see myself working on a larger ship.",
        vocabulary: "in the next 5 years, Bosun, gain experience, officer exams, larger ship"
    },
    {
        id: 46,
        category: "Preferences & Future",
        question: "How do you stay healthy on the ship?",
        sample_answer: "I stay healthy by eating balanced meals, exercising in the gym regularly, and getting enough sleep. I also avoid junk food and drink plenty of water.",
        vocabulary: "stay healthy, balanced meals, exercising, gym, sleep, avoid junk food"
    },
    {
        id: 47,
        category: "Preferences & Future",
        question: "What do you do in your free time on board?",
        sample_answer: "In my free time, I like to watch movies, listen to music, and read books. Sometimes I play cards with my friends in the mess room.",
        vocabulary: "free time, watch movies, listen to music, read books, play cards, mess room"
    },
    {
        id: 48,
        category: "Preferences & Future",
        question: "Who is the captain of your ship and what is he like?",
        sample_answer: "The captain of my ship is Captain Aung Naing. He is very experienced and kind. He always makes sure we follow safety rules and he treats us with respect.",
        vocabulary: "captain, experienced, kind, safety rules, treats us with respect"
    },
    {
        id: 49,
        category: "Preferences & Future",
        question: "If you could change one thing about the ship, what would it be?",
        sample_answer: "If I could change one thing, I would improve the internet connection. It would be much easier to communicate with my family and friends during the voyage.",
        vocabulary: "change, improve, internet connection, communicate, voyage"
    },
    {
        id: 50,
        category: "Preferences & Future",
        question: "What advice would you give to a new seafarer?",
        sample_answer: "I would advise new seafarers to always follow safety rules and listen to their seniors. They should also stay positive and learn as much as they can to build a good career.",
        vocabulary: "advice, new seafarer, follow safety rules, listen to seniors, stay positive, build a good career"
    }
];

// ============================================================
// 6. UI CORE LOGIC
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("loginSection");
    const mainSection = document.getElementById("mainSection");
    const keyInput = document.getElementById("keyInput");
    const loginBtn = document.getElementById("loginBtn");
    const keyError = document.getElementById("keyError");
    const logoutBtn = document.getElementById("logoutBtn");

    // ===== LOGIN VALIDATION WITH EXPIRY CHECK =====
       // ===== GENERATE SIMPLE DEVICE FINGERPRINT =====
    const getDeviceFingerprint = () => {
        const components = [
            navigator.userAgent,          // Browser & OS
            screen.width + 'x' + screen.height, // Screen Resolution
            navigator.language,            // Language
            new Date().getTimezoneOffset() // Timezone
        ];
        return btoa(components.join('|')); // Base64 encode
    };

    // ===== CHECK DEVICE LIMIT (MAX 5) =====
    const checkDeviceLimit = (key) => {
        const storageKey = `deviceLimit_${key}`;
        const deviceFingerprint = getDeviceFingerprint();
        
        // LocalStorage ထဲက သိမ်းထားတဲ့ Device စာရင်းကို ယူမယ်
        let devices = JSON.parse(localStorage.getItem(storageKey)) || [];

        // လက်ရှိ Device က စာရင်းထဲမှာ ရှိပြီးသားလား စစ်မယ်
        const existingDevice = devices.find(d => d.fingerprint === deviceFingerprint);

        if (existingDevice) {
            // ရှိပြီးသား Device ဆိုရင် အချိန်ကို အပ်ဒိတ်လုပ်ပြီး ဝင်ခွင့်ပေးမယ်
            existingDevice.lastActive = Date.now();
            localStorage.setItem(storageKey, JSON.stringify(devices));
            return true;
        }

        // Device အသစ်ဆိုရင် အရေအတွက် စစ်မယ်
        if (devices.length >= 5) {
            // ၅ ခုပြည့်နေပြီဆိုရင် ငြင်းပယ်မယ်
            return false;
        }

        // Device အသစ်ကို စာရင်းထဲ ထည့်မယ်
        devices.push({
            fingerprint: deviceFingerprint,
            firstSeen: Date.now(),
            lastActive: Date.now()
        });
        localStorage.setItem(storageKey, JSON.stringify(devices));
        return true;
    };

    // ===== LOGIN VALIDATION (UPDATED WITH DEVICE LIMIT) =====
    const handleValidation = () => {
        const enteredKey = keyInput.value.trim();
        const encodedKey = btoa(enteredKey);
        console.log("Encoded Key:", encodedKey); // Debug

        // ၁။ Key မှန်ကန်မှု စစ်ဆေးပါ
        if (SECURITY_KEYS.hasOwnProperty(encodedKey)) {
            const expiryDateStr = SECURITY_KEYS[encodedKey];
            const today = new Date();
            const expiryDate = new Date(expiryDateStr);
            today.setHours(0, 0, 0, 0);
            expiryDate.setHours(0, 0, 0, 0);

            // ၂။ သက်တမ်းကုန်ဆုံးပြီလား စစ်ဆေးပါ
            if (today > expiryDate) {
                keyError.textContent = "Access Denied. Your authorization key has expired.";
                return;
            }

            // ၃။ Device Limit (၅ ခု) စစ်ဆေးပါ
            const isDeviceAllowed = checkDeviceLimit(encodedKey);
            if (!isDeviceAllowed) {
                keyError.textContent = "Access Denied. This key is already used on 5 devices. Please contact support.";
                return;
            }

            // ၄။ အားလုံးအဆင်ပြေပါက ဝင်ခွင့်ပေးပါ
            keyError.textContent = "";
            loginSection.style.display = "none";
            mainSection.classList.add("active");
            renderAllData();
        } else {
            keyError.textContent = "Access Denied. Invalid Authorization Key.";
        }
    };

    // ===== TAB INTERFACE LOGIC =====
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    // ===== RENDER ALL DATA (Grammar, Reading, Writing, Speaking) =====
    const renderAllData = () => {
        // 1. Render Grammar
        const gList = document.getElementById("grammarList");
        if (gList) {
            gList.innerHTML = GRAMMAR_QUESTIONS.map(q => `
                <div class="qa-card">
                    <div class="question-text">${q.question}</div>
                    <div class="options-stack">
                        ${q.options.map(opt => `<div class="option-item">${opt}</div>`).join('')}
                    </div>
                    <button class="reveal-trigger-btn" onclick="toggleExplanation(this)">Show Analysis</button>
                    <div class="explanation-box">
                        <div class="exp-row"><span class="exp-label">Correct Answer</span><span class="correct-ans-highlight"><i class="fas fa-circle-check"></i> ${q.correct}</span></div>
                        <div class="exp-row"><span class="exp-label">မြန်မာလို ရှင်းလင်းချက်</span>${q.why}</div>
                        <div class="exp-row"><span class="exp-label">အလွယ်ကူဆုံး ဖြေနည်းဗျူဟာ</span>${q.strategy}</div>
                    </div>
                </div>
            `).join('');
        }

        // 2. Render Reading
        const rList = document.getElementById("readingList");
        if (rList) {
            let readingHTML = '';
            READING_DATA.forEach(rd => {
                readingHTML += `
                    <div class="reading-passage-card" style="background: #f0f4fe; padding: 20px 25px; border-radius: 12px; margin-bottom: 25px; border-left: 6px solid #0056a7;">
                        <h2 style="color: #0056a7; border-bottom: 2px solid #0056a7; padding-bottom: 8px;">📖 ${rd.title}</h2>
                        <div style="white-space: pre-line; line-height: 1.9; margin-top: 15px;">${rd.passage}</div>
                    </div>
                `;
                rd.questions.forEach(q => {
                    readingHTML += `
                        <div class="qa-card" style="margin-top: 15px;">
                            <div class="question-text">${q.question}</div>
                            <div class="options-stack">
                                ${q.options.map(opt => `<div class="option-item">${opt}</div>`).join('')}
                            </div>
                            <button class="reveal-trigger-btn" onclick="toggleExplanation(this)">Show Analysis</button>
                            <div class="explanation-box">
                                <div class="exp-row"><span class="exp-label">Correct Answer</span><span class="correct-ans-highlight"><i class="fas fa-circle-check"></i> ${q.correct}</span></div>
                                <div class="exp-row"><span class="exp-label">မြန်မာလို ရှင်းလင်းချက်</span>${q.why}</div>
                                <div class="exp-row"><span class="exp-label">အလွယ်ကူဆုံး ဖြေနည်းဗျူဟာ</span>${q.strategy}</div>
                            </div>
                        </div>
                    `;
                });
            });
            rList.innerHTML = readingHTML;
        }

        // 3. Render Writing
        const wList = document.getElementById("writingList");
        if (wList) {
            wList.innerHTML = WRITING_TOPICS.map(t => `
                <div class="writing-card">
                    <span class="writing-tag">${t.part}</span>
                    <h3>${t.title}</h3>
                    <div class="prompt-box"><i class="fas fa-quote-left" style="margin-right:8px; opacity:0.4;"></i>${t.prompt}</div>
                    <button class="reveal-trigger-btn" onclick="toggleExplanation(this)">Show Writing Template</button>
                    <div class="explanation-box">
                        <div class="exp-row"><span class="exp-label">ဖြေဆိုရန် နည်းဗျူဟာ (Writing Guide)</span>${t.strategy}</div>
                        <div class="exp-row" style="background:#fff;"><span class="exp-label">High-Scoring Sample Blueprint</span>${t.blueprint}</div>
                    </div>
                </div>
            `).join('');
        }

        // 4. Render Speaking
        const sList = document.getElementById("speakingList");
        if (sList) {
            sList.innerHTML = SPEAKING_TOPICS.map(t => `
                <div class="speaking-card">
                    <span class="speaking-tag"><i class="fas fa-tag"></i> ${t.category}</span>
                    <h3><i class="fas fa-question-circle"></i> ${t.question}</h3>
                    <div class="speaking-prompt">
                        <strong>💡 ဖြေဆိုရန် အကြံပြုချက် (Strategy):</strong><br>
                        ${t.strategy}
                    </div>
                    <div class="vocab-box">
                        <strong>📚 အဓိက ဝေါဟာရများ (Key Vocabulary):</strong><br>
                        ${t.vocabulary.split(',').map(v => `<span>${v.trim()}</span>`).join(' ')}
                    </div>
                    <button class="reveal-trigger-btn" onclick="toggleSpeakingAnswer(this)">Show Sample Answer</button>
                    <div class="explanation-box">
                        <div class="exp-row">
                            <span class="exp-label"><i class="fas fa-comment-dots"></i> နမူနာအဖြေ (Sample Answer)</span>
                            <div class="sample-answer-box">${t.sample_answer}</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    };
});

// ============================================================
// 7. TOGGLE FUNCTIONS
// ============================================================
window.toggleExplanation = (btn) => {
    const box = btn.nextElementSibling;
    if (!box) return;
    const isShown = box.classList.toggle("show");
    const isWriting = btn.textContent.includes("Template");
    btn.textContent = isShown 
        ? (isWriting ? "Hide Template" : "Hide Analysis") 
        : (isWriting ? "Show Writing Template" : "Show Analysis");
};

window.toggleSpeakingAnswer = (btn) => {
    const box = btn.nextElementSibling;
    if (!box) return;
    const isShown = box.classList.toggle("show");
    btn.textContent = isShown ? "Hide Sample Answer" : "Show Sample Answer";
};

// ============================================================
// 8. COPY PROTECTION
// ============================================================
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => { if (e.target.nodeName === 'IMG') e.preventDefault(); });
document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey) {
        if (['c', 'C', 'a', 'A', 'u', 'U', 's', 'S'].includes(e.key)) e.preventDefault();
    }
    if (e.key === 'F12') e.preventDefault();
});
