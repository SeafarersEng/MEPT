// SECURE USER KEYS (8 Keys per User x 5 Users + Admin Key)
const AUTHORIZED_KEYS = new Set([
    "MEPT2024",
    // User 1
    "U1M7P2X4", "U1K9B5V2", "U1T3R8N6", "U1A4Z7Q9", "U1W2E5R8", "U1Y9U2I4", "U1O6P3A7", "U1S5D8F2",
    // User 2
    "U2B4N7M1", "U2C9V3X5", "U2Z8A2Q6", "U2W5E1R9", "U2T7Y3U8", "U2I4O6P2", "U2A9S5D1", "U2F7G3H8",
    // User 3
    "U3J2K5L9", "U3M4N7B1", "U3V6C3X8", "U3Z9A5Q1", "U3W7E2R6", "U3T4Y9U1", "U3I5O8P3", "U3A2S6D4",
    // User 4
    "U4F9G1H5", "U4J7K3L8", "U4M2N6B9", "U4V1C5X7", "U4Z3A8Q4", "U4W9E2R5", "U4T1Y6U3", "U4I7O2P9",
    // User 5
    "U5A3S7D1", "U5F9G2H6", "U5J4K8L2", "U5M1N5B9", "U5V3C7X1", "U5Z6A2Q8", "U5W4E9R1", "U5T3Y7U2"
]);

// DATABASE WITH 5 QUESTIONS & ANSWERS PER EACH TOPIC (1 TO 18 FULL)
const exercisesData = [
    {
        id: 1,
        title: "Personal Protective Equipment (PPE)",
        imgUrl: "pic1.png",
        imageDesc: "လူသုံးဦး လိမ္မော်ရောင် ယူနီဖောင်း၊ အဝါရောင် ဘေးကင်းဦးထုပ် နှင့် လက်အိတ်များ ဝတ်ဆင်ထားပြီး ဒေါင်လိုက် ပိုက်တိုင်တွင် အလုပ်လုပ်နေသည်။",
        questions: [
            "1. Why must you wear safety boots?",
            "2. When should you use a helmet?",
            "3. What happens if you do not wear gloves?",
            "4. Who can give you PPE?",
            "5. Why is PPE important at work?"
        ],
        answers: [
            "To protect feet from heavy objects, sharp materials, and slips. (ခြေထောက်ကို အလေးချိန်ရှိသော ပစ္စည်းများ၊ ချွန်ထက်သော ပစ္စည်းများနှင့် ချော်ခြင်းမှ ကာကွယ်ရန်)",
            "When working in areas with risk of head injury from falling objects. (ပစ္စည်းကျခြင်းမှ ခေါင်းဒဏ်ရာရနိုင်သော နေရာများတွင် အသုံးပြုရန်)",
            "Hands can be injured by sharp objects, chemicals, or extreme temperatures. (လက်များသည် ချွန်ထက်သော ပစ္စည်းများ၊ ဓာတုပစ္စည်းများ သို့မဟုတ် အပူချိန်ပြင်းထန်မှုကြောင့် ဒဏ်ရာရနိုင်သည်)",
            "Your supervisor or safety officer can issue PPE. (သင့်အထက်အရာရှိ သို့မဟုတ် ဘေးကင်းရေးအရာရှိက PPE ပေးနိုင်သည်)",
            "To protect workers from workplace hazards and prevent injuries. (အလုပ်ခွင်အန္တရာယ်များမှ အလုပ်သမားများကို ကာကွယ်ရန်နှင့် ဒဏ်ရာများကို ကာကွယ်ရန်)"
        ]
    },
    {
        id: 2,
        title: "Daily Ship Routine",
        imgUrl: "pic2.png",
        imageDesc: "သင်္ဘောပေါ်တွင် သင်္ဘောသားများ နံနက်ခင်း လုပ်ငန်းစတင်နေပုံ။ သင်္ဘောကုန်းပတ်ပေါ်တွင် လူများ လှုပ်ရှားသွားလာနေသည်။",
        questions: [
            "1. What time do you start working on the ship?",
            "2. Who tells you about your daily tasks?",
            "3. Why must you arrive on time?",
            "4. What should you bring to work each day?",
            "5. Why is it important to follow the schedule?"
        ],
        answers: [
            "I start working at 8:00 AM every morning. (နံနက် ၈ နာရီတွင် အလုပ်စတင်သည်)",
            "The ship captain or my supervisor tells me. (သင်္ဘောကပ္ပတိန် သို့မဟုတ် အထက်အရာရှိက ပြောပြသည်)",
            "Because the ship operates on a strict schedule and delays affect operations. (သင်္ဘောသည် တင်းကျပ်သော အချိန်ဇယားအတိုင်း သွားလာပြီး နှောင့်နှေးမှုများက လုပ်ငန်းကို ထိခိုက်စေသောကြောင့်)",
            "ID card, safety gear, lunch, and necessary tools. (မှတ်ပုံတင်၊ ဘေးကင်းရေးပစ္စည်း၊ နေ့လည်စာနှင့် လိုအပ်သော ကိရိယာများ)",
            "To ensure all tasks are completed on time and the ship runs smoothly. (လုပ်ငန်းအားလုံး အချိန်မီပြီးစီးရန်နှင့် သင်္ဘော ချောမွေ့စွာ သွားလာရန်)"
        ]
    },
    {
        id: 3,
        title: "Construction Site Safety",
        imgUrl: "images/ex3.jpg",
        imageDesc: "ဆောက်လုပ်ရေးလုပ်ငန်းခွင်တွင် အလုပ်သမားများ ဘေးကင်းဦးထုပ် နှင့် အန္တရာယ်ကာကွယ်ရေးအဝတ်အစားများ ဝတ်ဆင်ထားကြသည်။",
        questions: [
            "1. Why is safety important on a construction site?",
            "2. What should you wear on a construction site?",
            "3. Who is responsible for safety?",
            "4. What should you do in case of an emergency?",
            "5. Why must you follow safety signs?"
        ],
        answers: [
            "To prevent accidents, injuries, and deaths. (မတော်တဆမှုများ၊ ဒဏ်ရာများနှင့် သေဆုံးမှုများကို ကာကွယ်ရန် ဖြစ်သည်)",
            "Hard hat, safety boots, high-visibility vest, and gloves. (ဦးထုပ်၊ ဘေးကင်းဖိနပ်၊ မြင်သာသောအင်္ကျီနှင့် လက်အိတ်များ ဝတ်ရမည်)",
            "Everyone on site is responsible for maintaining safety. (လုပ်ငန်းခွင်အတွင်းရှိ လူတိုင်းတွင် ဘေးကင်းရေးအတွက် တာဝန်ရှိသည်)",
            "Stay calm, follow the emergency plan, and evacuate safely. (တည်ငြိမ်စွာနေပြီး အရေးပေါ်ထွက်ပေါက်အတိုင်း ဘေးကင်းစွာ ရွှေ့ပြောင်းပါ)",
            "Safety signs warn about dangers and guide you to stay safe. (ဘေးကင်းရေးဆိုင်းဘုတ်များက အန္တရာယ်များကို သတိပေးတားမြစ်ထား၍ ဖြစ်သည်)"
        ]
    },
    {
        id: 4,
        title: "Office Work Environment",
        imgUrl: "images/ex4.jpg",
        imageDesc: "ရုံးခန်းတစ်ခုအတွင်း ဝန်ထမ်းများ ကွန်ပျူတာများဖြင့် အလုပ်လုပ်နေကြသည်။",
        questions: [
            "1. What time do you usually start work?",
            "2. What equipment do you use in the office?",
            "3. How do you communicate with colleagues?",
            "4. Why is teamwork important?",
            "5. What should you do to stay organized?"
        ],
        answers: [
            "I usually start work at 9:00 AM. (များသောအားဖြင့် နံနက် ၉ နာရီတွင် အလုပ်စတင်သည်)",
            "Computer, telephone, printer, and office software. (ကွန်ပျူတာ၊ တယ်လီဖုန်း၊ ပရင်တာနှင့် ရုံးသုံးဆော့ဖ်ဝဲ)",
            "Via email, phone calls, and face-to-face meetings. (အီးမေးလ်၊ ဖုန်းခေါ်ဆိုမှုနှင့် မျက်နှာချင်းဆိုင် တွေ့ဆုံခြင်းဖြင့်)",
            "Helps share ideas and solve problems faster. (အတွေးအမြင်များ မျှဝေရန်နှင့် ပြဿနာများကို ပိုမိုမြန်ဆန်စွာ ဖြေရှင်းရန်)",
            "Make a to-do list and keep the desk clean. (လုပ်စရာစာရင်းပြုလုပ်ခြင်းနှင့် စားပွဲကို သန့်ရှင်းအောင်ထားခြင်း)"
        ]
    },
    {
        id: 5,
        title: "Restaurant Service",
        imgUrl: "images/ex5.jpg",
        imageDesc: "စားသောက်ဆိုင်တစ်ခုအတွင်း စားပွဲများ စီစဉ်ထားပြီး ဧည့်သည်များကို စားသောက်စရာများ ကျွေးမွေးနေသည်။",
        questions: [
            "1. What is your role in the restaurant?",
            "2. How do you greet customers?",
            "3. What should you do if a customer is unhappy?",
            "4. Why is cleanliness important in a restaurant?",
            "5. What skills do you need to work here?"
        ],
        answers: [
            "I work as a waiter or food server. (ဧည့်ကြို သို့မဟုတ် အစားအသောက်ကျွေးမွေးသူအဖြစ် အလုပ်လုပ်သည်)",
            "With a smile and say 'Welcome to our restaurant'. (ပြုံးပြီး 'ကျွန်တော်တို့ ဆိုင်က ကြိုဆိုပါတယ်' ဟု နှုတ်ဆက်သည်)",
            "Listen to the complaint, apologize, and fix it immediately. (မကျေနပ်ချက်ကို နားထောင်၊ တောင်းပန်ပြီး ချက်ချင်းပြင်ဆင်ပေးရမည်)",
            "To prevent food contamination and maintain hygiene. (အစားအစာ ညစ်ညမ်းမှုကို ကာကွယ်ရန်နှင့် တစ်ကိုယ်ရေသန့်ရှင်းမှု ထိန်းသိမ်းရန်)",
            "Good communication, patience, and teamwork skills. (ကောင်းမွန်သော ဆက်သွယ်မှု၊ စိတ်ရှည်မှုနှင့် အဖွဲ့လိုက်လုပ်ဆောင်နိုင်မှု)"
        ]
    },
    {
        id: 6,
        title: "Hospital / Medical Care",
        imgUrl: "images/ex6.jpg",
        imageDesc: "ဆေးရုံအတွင်း ဆရာဝန်နှင့် သူနာပြုများ လူနာများကို စောင့်ရှောက်နေကြသည်။",
        questions: [
            "1. What is your job in the hospital?",
            "2. How do you take care of patients?",
            "3. Why is hygiene important in a hospital?",
            "4. What should you do in an emergency?",
            "5. How do you communicate with patients?"
        ],
        answers: [
            "I work as a professional nurse. (ကျွန်တော် သူနာပြုတစ်ဦးအဖြစ် အလုပ်လုပ်ပါသည်)",
            "Check vital signs and give medication regularly. (အရေးပါသော လက္ခဏာများကို စစ်ဆေးပြီး ဆေးဝါးများ မှန်မှန်တိုက်ကျွေးသည်)",
            "Prevents infections and protects patients and staff. (ပိုးကူးစက်မှုများကို ကာကွယ်ရန်နှင့် လူနာများနှင့် ဝန်ထမ်းများကို ကာကွယ်ရန်)",
            "Stay calm, call for help, and follow medical protocols. (တည်ငြိမ်အောင်နေပါ၊ အကူအညီတောင်းပါ၊ ဆေးဘက်ဆိုင်ရာ လုပ်ထုံးလုပ်နည်းများကို လိုက်နာပါ)",
            "Speak clearly, kindly, and listen to their concerns. (ရှင်းရှင်းလင်းလင်းနှင့် ကြင်နာစွာ ပြောဆိုပြီး ၎င်းတို့၏ စိုးရိမ်မှုများကို နားထောင်ပေးသည်)"
        ]
    },
    {
        id: 7,
        title: "Factory Production Line",
        imgUrl: "images/ex7.jpg",
        imageDesc: "စက်ရုံအတွင်း ထုတ်လုပ်မှုလိုင်းပေါ်တွင် အလုပ်သမားများ ကုန်ပစ္စည်းများ တပ်ဆင်နေကြသည်။",
        questions: [
            "1. What do you produce in this factory?",
            "2. What safety measures are in place?",
            "3. How do you ensure product quality?",
            "4. What is your daily routine here?",
            "5. Why is teamwork important on the line?"
        ],
        answers: [
            "We produce high-quality electronic components. (ကျွန်တော်တို့ အီလက်ထရွန်းနစ် အစိတ်အပိုင်းများ ထုတ်လုပ်ပါသည်)",
            "Wear safety gear and follow machine rules strictly. (ဘေးကင်းရေးပစ္စည်းများ ဝတ်ဆင်ပြီး စက်ကိရိယာ စည်းကမ်းများကို တင်းကျပ်စွာ လိုက်နာသည်)",
            "Inspect products at each stage of production. (ထုတ်လုပ်မှု အဆင့်တိုင်းတွင် ထုတ်ကုန်များကို သေချာစွာ စစ်ဆေးသည်)",
            "Start the shift, check the schedule, and run the station. (ဂျူတီစတင်ခြင်း၊ အချိန်ဇယားစစ်ဆေးခြင်းနှင့် မိမိစက်ကို လည်ပတ်ခြင်း)",
            "It keeps the line running smoothly and prevents delays. (၎င်းသည် ထုတ်လုပ်မှုလိုင်းကို ချောမွေ့စေပြီး နှောင့်နှေးမှုများကို ကာကွယ်ပေးသည်)"
        ]
    },
    {
        id: 8,
        title: "Hotel Housekeeping",
        imgUrl: "images/ex8.jpg",
        imageDesc: "ဟိုတယ်အခန်းတစ်ခုအတွင်း အိမ်သန့်ရှင်းရေးဝန်ထမ်းတစ်ဦး ကုတင်များ ပြင်ဆင်နေပြီး အခန်းကို သန့်ရှင်းရေးလုပ်နေသည်။",
        questions: [
            "1. What are your main duties as a housekeeper?",
            "2. How do you clean a guest room?",
            "3. What equipment do you use for cleaning?",
            "4. Why is customer satisfaction important?",
            "5. How do you handle special guest requests?"
        ],
        answers: [
            "Make beds, clean bathrooms, and vacuum floors. (ကုတင်ပြင်ခြင်း၊ ရေချိုးခန်းသန့်ရှင်းရေးလုပ်ခြင်းနှင့် ဖုန်စုပ်ခြင်း ဖြစ်သည်)",
            "Remove trash, change linens, and sanitize all surfaces. (အမှိုက်ဖယ်ရှားခြင်း၊ အိပ်ရာခင်းလဲခြင်းနှင့် မျက်နှာပြင်များကို ပိုးသတ်သန့်ရှင်းခြင်း)",
            "Vacuum cleaner, mop, and certified disinfectants. (ဖုန်စုပ်စက်၊ ကြမ်းတိုက်တွန်းတံနှင့် စိတ်ချရသော ပိုးသတ်ဆေးများ)",
            "It leads to positive reviews and repeat business. (သုံးသပ်ချက်ကောင်းများရရှိရန်နှင့် ဧည့်သည်များ ပြန်လည်လာရောက်စေရန် ဖြစ်သည်)",
            "Listen carefully, respond politely, and fulfill them quickly. (သေချာနားထောင်ပါ၊ ယဉ်ကျေးစွာတုံ့ပြန်ပါ၊ လျင်မြန်စွာ ဖြည့်ဆည်းပေးပါ)"
        ]
    },
    {
        id: 9,
        title: "Classroom Learning",
        imgUrl: "images/ex9.jpg",
        imageDesc: "စာသင်ခန်းတစ်ခုအတွင်း ဆရာတစ်ဦးက ကျောင်းသားများကို သင်ကြားနေပြီး ကျောင်းသားများက မှတ်စုရေးနေကြသည်။",
        questions: [
            "1. What subject are you learning today?",
            "2. How do you active participate in class?",
            "3. Why is it important to do homework?",
            "4. What should you do if you don't understand?",
            "5. How do you effectively prepare for exams?"
        ],
        answers: [
            "I am learning Maritime English and safety terms. (ကျွန်တော် မာရီတိုင်း အင်္ဂလိပ်စာနှင့် ဘေးကင်းရေးဝေါဟာရများကို သင်ယူနေပါသည်)",
            "By answering questions and joining group activities. (မေးခွန်းများဖြေဆိုခြင်းနှင့် အုပ်စုလိုက် လှုပ်ရှားမှုများတွင် ပါဝင်ခြင်းဖြင့်)",
            "To practice what was learned and improve understanding. (သင်ယူခဲ့သည်များကို ပြန်လည်လေ့ကျင့်ပြီး နားလည်မှုတိုးတက်စေရန်)",
            "Ask the teacher for clarification immediately. (ဆရာ့ထံသို့ နားမလည်သည့်အချက်ကို ချက်ချင်းမေးမြန်းရမည်)",
            "Review my notes and take regular practice tests. (မှတ်စုများကို ပြန်လည်ကြည့်ရှုပြီး လေ့ကျင့်ခန်းစစ်ဆေးမှုများ ပုံမှန်လုပ်သည်)"
        ]
    },
    {
        id: 10,
        title: "Market Shopping",
        imgUrl: "images/ex10.jpg",
        imageDesc: "ဈေးတစ်ခုအတွင်း လူများ ဈေးဝယ်နေကြသည်။ ဟင်းသီးဟင်းရွက်များ၊ သစ်သီးများ၊ ငါးများ ရောင်းချနေသည်။",
        questions: [
            "1. What do you usually buy at the fresh market?",
            "2. How do you choose fresh vegetables?",
            "3. Why is it useful to compare prices?",
            "4. What should you bring when going shopping?",
            "5. How do you interact with local sellers?"
        ],
        answers: [
            "Fresh vegetables, organic fruits, meat, and fish. (လတ်ဆတ်သော ဟင်းသီးဟင်းရွက်၊ သစ်သီး၊ အသားနှင့် ငါးများကို ဝယ်ယူပါသည်)",
            "Look for vibrant colors and avoid damaged ones. (တောက်ပသောအရောင်ကိုကြည့်ပြီး ပျက်စီးနေသော အရာများကို ရှောင်ရမည်)",
            "To get the best value and stay within budget. (အကောင်းဆုံးတန်ဖိုးရရှိရန်နှင့် မိမိဘတ်ဂျက်အတွင်း ရှိနေစေရန်)",
            "A reusable shopping bag and enough cash. (ပြန်လည်အသုံးပြုနိုင်သော ဈေးဝယ်အိတ်နှင့် လုံလောက်သော ငွေသားယူဆောင်ရမည်)",
            "Greet them politely and ask for the price clearly. (၎င်းတို့ကို ယဉ်ကျေးစွာ နှုတ်ဆက်ပြီး ဈေးနှုန်းကို ရှင်းလင်းစွာ မေးမြန်းပါ)"
        ]
    },
    {
        id: 11,
        title: "Alcohol Policy (အရက်သေစာ မူဝါဒ)",
        imgUrl: "images/ex11.jpg",
        imageDesc: "သင်္ဘောပေါ်တွင် အရက်သောက်ခြင်းဆိုင်ရာ စည်းမျဉ်းများ၊ အရက်စစ်ဆေးသည့် ကိရိယာများနှင့် စည်းကမ်းချက်များကို ပြသထားသည်။",
        questions: [
            "1. What is the maximum blood alcohol limit for seafarers under STCW?",
            "2. Why is alcohol prohibited before starting watch?",
            "3. What happens if a crew member is found drunk on duty?",
            "4. How is alcohol testing conducted on ships?",
            "5. What is the typical company policy on alcohol?"
        ],
        answers: [
            "0.05% BAC or 0.25mg/l in breath. (STCW အရ သွေးတွင်းအရက်ပါဝင်မှု ၀.၀၅% BAC သို့မဟုတ် အသက်ရှူမှု ၀.၂၅mg/l)",
            "Alcohol impairs judgment and reaction time, which can lead to accidents. (အရက်သည် ဆုံးဖြတ်ချက်ချနိုင်မှုနှင့် တုံ့ပြန်မှုအချိန်ကို ထိခိုက်စေပြီး မတော်တဆမှုများဖြစ်စေနိုင်သည်)",
            "May face disciplinary action, dismissal, or legal consequences. (စည်းကမ်းအရေးယူခြင်း၊ အလုပ်ထုတ်ခြင်း သို့မဟုတ် ဥပဒေအရ အရေးယူခံရနိုင်သည်)",
            "Through breathalyzer tests or blood tests, often randomly or post-incident. (အသက်ရှူစစ်ဆေးမှု သို့မဟုတ် သွေးစစ်ဆေးမှုများဖြင့် ကျပန်း သို့မဟုတ် ဖြစ်ရပ်ပြီးနောက် စစ်ဆေးသည်)",
            "Most companies enforce a strict zero-tolerance policy. (ကုမ္ပဏီအများစုသည် လုံးဝသည်းမခံသော မူဝါဒကို ကျင့်သုံးသည်)"
        ]
    },
    {
        id: 12,
        title: "Garbage Management Plan (အမှိုက်စီမံခန့်ခွဲမှု)",
        imgUrl: "images/ex12.jpg",
        imageDesc: "သင်္ဘောပေါ်တွင် အမှိုက်ခွဲခြားခြင်း၊ စွန့်ပစ်ခြင်းနှင့် MARPOL စည်းမျဉ်းများကို ပြသထားသည်။",
        questions: [
            "1. What is the purpose of the Garbage Management Plan?",
            "2. How is garbage properly classified on ships?",
            "3. What waste cannot be disposed of at sea?",
            "4. How is food waste managed at sea?",
            "5. Why is proper garbage management important?"
        ],
        answers: [
            "To ensure proper handling, sorting, and disposal of waste on board. (သင်္ဘောပေါ်ရှိ အမှိုက်များကို စနစ်တကျ ကိုင်တွယ်ခြင်း၊ ခွဲခြားခြင်းနှင့် စွန့်ပစ်ခြင်းတို့အတွက်)",
            "Classified into plastics, food wastes, domestic wastes, and operational wastes. (ပလတ်စတစ်၊ စားသောက်ကုန်အမှိုက်၊ လူသုံးအမှိုက်၊ လုပ်ငန်းခွင်အမှိုက် စသဖြင့် ခွဲခြားထားသည်)",
            "Plastics and synthetic materials are strictly prohibited from sea disposal. (ပလတ်စတစ်နှင့် ဓာတုပစ္စည်းများကို ပင်လယ်ထဲ စွန့်ပစ်ခြင်း လုံးဝတားမြစ်သည်)",
            "It can be discharged if comminuted and the ship is outside special areas. (ကြိတ်စက်ဖြင့် ကြိတ်ပြီး အထူးဇုန်ပြင်ပရောက်မှသာ စွန့်ပစ်ခွင့်ရှိသည်)",
            "To protect the marine environment and comply with MARPOL Annex V rules. (ပင်လယ်ပြင်ပတ်ဝန်းကျင်ကို ကာကွယ်ရန်နှင့် MARPOL Annex V စည်းကမ်းချက်များကို လိုက်နာရန်)"
        ]
    },
    {
        id: 13,
        title: "Enclosed Space Entry (ပိတ်လှောင်နေရာဝင်ရောက်ခြင်း)",
        imgUrl: "images/ex13.jpg",
        imageDesc: "သင်္ဘောသားတစ်ဦး အောက်ဆီဂျင်ဘူးနှင့် အသက်ရှူကိရိယာ ဝတ်ဆင်ကာ အလုံပိတ်အခန်းအတွင်းသို့ ဆင်းရန် ပြင်ဆင်နေပုံ။",
        questions: [
            "1. What is an enclosed space on a ship?",
            "2. What must you check before entering an enclosed space?",
            "3. Who must sign the entry permit?",
            "4. What safety equipment should be ready at the entrance?",
            "5. What should you do if a worker collapses inside?"
        ],
        answers: [
            "Spaces like cargo holds, ballast tanks, or fuel tanks with limited ventilation. (လေဝင်လေထွက်နည်းပါးသော ကုန်တင်ခန်း၊ ရေကန် သို့မဟုတ် ဆီကန်များဖြစ်သည်)",
            "Oxygen level (minimum 21%) and toxic gas presence using a gas detector. (အောက်ဆီဂျင် ပမာဏ အနည်းဆုံး ၂၁% ရှိမရှိနှင့် အဆိပ်ငွေ့ ရှိမရှိကို စက်ဖြင့် စစ်ဆေးရမည်)",
            "The Master or a designated responsible officer. (သင်္ဘောကပ္ပတိန် သို့မဟုတ် တာဝန်ခံအရာရှိက လက်မှတ်ရေးထိုးရမည်)",
            "Resuscitation equipment, rescue harness, and extra breathing apparatus. (အသက်ရှူကူစက်၊ ကယ်ဆယ်ရေးခါးပတ်နှင့် အပိုအသက်ရှူဗူးများ အဆင်သင့်ရှိရမည်)",
            "Raise the alarm immediately; do not enter to rescue without correct breathing gear. (ချက်ချင်းအချက်ပေးသံတီးပါ၊ ဘေးကင်းရေးကိယာမပါဘဲ အထဲသို့ ကယ်ဆယ်ရန် မဝင်ပါနှင့်)"
        ]
    },
    {
        id: 14,
        title: "Hot Work Permit (အပူပေးလုပ်ငန်းခွင့်ပြုချက်)",
        imgUrl: "images/ex14.jpg",
        imageDesc: "ကုန်းပတ်ပေါ်တွင် သင်္ဘောသားတစ်ဦး ဝဂ်ဂဟေဆော် (Welding) နေပြီး ဘေးတွင် မီးသတ်ဆေးဘူး အဆင်သင့်ချထားပုံ။",
        questions: [
            "1. What is considered 'Hot Work' on board?",
            "2. Why is a Hot Work Permit required?",
            "3. What must you check in the workspace before starting?",
            "4. Who acts as a fire watch during the operation?",
            "5. How long should the fire watch continue after work ends?"
        ],
        answers: [
            "Welding, burning, or cutting involving open flames or sparks. (မီးတောက် သို့မဟုတ် မီးပွားထွက်စေသော ဂဟေဆော်ခြင်း၊ ဖြတ်တောက်ခြင်း လုပ်ငန်းများဖြစ်သည်)",
            "To ensure all safety checklists are met and prevent fire hazards on board. (မီးဘေးအန္တရာယ် ကာကွယ်ရန်နှင့် ဘေးကင်းရေး လိုအပ်ချက်များ ပြည့်စုံစေရန် ဖြစ်သည်)",
            "Remove all flammable materials and check for gas leaks nearby. (မီးလောင်လွယ်သော ပစ္စည်းများ ဖယ်ရှားပြီး အနီးနားတွင် ဂတ်စ်ယိုစိမ့်မှု ရှိမရှိ စစ်ဆေးရမည်)",
            "A designated crew member equipped with fire-fighting gear. (မီးသတ်ကိရိယာ အပြည့်အစုံပါရှိသော တာဝန်ပေးထားသည့် သင်္ဘောသားတစ်ဦးဖြစ်သည်)",
            "For at least 30 minutes to ensure no smoldering fires remain. (မီးကြွင်းမီးကျန် မရှိစေရန် အနည်းဆုံး မိနစ် ၃၀ ခန့် ဆက်လက်စောင့်ကြည့်ရမည်)"
        ]
    },
    {
        id: 15,
        title: "Working at Height (အမြင့်တွင်အလုပ်လုပ်ခြင်း)",
        imgUrl: "images/ex15.jpg",
        imageDesc: "သင်္ဘောတိုင်အမြင့်တွင် Safety Harness (ခါးပတ်ကြိုး) ချည်နှောင်ကာ ဆေးသုတ်နေသော အလုပ်သမားတစ်ဦး။",
        questions: [
            "1. When is a safety harness required?",
            "2. What is the purpose of a lifeline?",
            "3. Who must monitor the person working at height?",
            "4. What weather conditions halt high-altitude work?",
            "5. Why should tools be secured to the worker?"
        ],
        answers: [
            "When working at any height where a fall risk exists (usually above 2 meters). (ချော်ကျနိုင်ခြေရှိသော မည်သည့်အမြင့်မဆို၊ များသောအားဖြင့် ၂ မီတာအထက်တွင် လိုအပ်သည်)",
            "To arrest the fall safely if the worker loses balance. (အလုပ်သမား ခြေချော်ပါက အောက်သို့မကျအောင် ဘေးကင်းစွာ ထိန်းထားရန်ဖြစ်သည်)",
            "A deck supervisor or watch officer on standby below. (အောက်ခြေမှ အမြဲတမ်းစောင့်ကြည့်နေသော ကုန်းပတ်ကြီးကြပ်ရေးမှူး သို့မဟုတ် အရာရှိ)",
            "Heavy rain, strong winds, or severe ship rolling. (မိုးသည်းထန်စွာရွာခြင်း၊ လေပြင်းတိုက်ခြင်း သို့မဟုတ် သင်္ဘော အလွန်အမင်းလူးနေချိန်)",
            "To prevent tools from falling and injuring crew members below. (အောက်ခြေရှိ အခြားသူများပေါ်သို့ ကိရိယာများ ပြုတ်ကျပြီး ဒဏ်ရာမရစေရန်)"
        ]
    },
    {
        id: 16,
        title: "Mooring Operations (သင်္ဘောဆိုက်ကပ်ခြင်းလုပ်ငန်း)",
        imgUrl: "images/ex16.jpg",
        imageDesc: "သင်္ဘောဦးပိုင်းတွင် ကြီးမားသော နိုင်လွန်ကြိုးကြီးများကို Winch စက်ဖြင့် ဆွဲငင်ကာ ကုန်းပတ်တိုင်တွင် ပတ်ချည်နေပုံ။",
        questions: [
            "1. What is a 'Snap-Back Zone'?",
            "2. What PPE is essential during mooring?",
            "3. Why shouldn't you stand inside a rope bight?",
            "4. Who commands the mooring team at the forward deck?",
            "5. What should you check on the mooring winches before starting?"
        ],
        answers: [
            "The dangerous area where a broken rope can recoil with extreme force. (ကြိုးပြတ်သွားပါက ပြင်းထန်သောအားဖြင့် ပြန်လည်ရိုက်ခတ်နိုင်သည့် အန္တရာယ်ရှိသောနေရာ)",
            "Helmet, safety boots, gloves, and high-visibility vest. (ဦးထုပ်၊ ဘေးကင်းဖိနပ်၊ လက်အိတ်နှင့် တောက်ပသော အင်္ကျီ)",
            "If the rope is tensioned suddenly, it can trap or throw you. (ကြိုးက ရုတ်တရက် တင်းသွားပါက သင့်ကို ညှပ်မိခြင်း သို့မဟုတ် လွင့်စင်သွားစေနိုင်သောကြောင့်)",
            "The Chief Officer or a designated Deck Officer. (Chief Officer သို့မဟုတ် တာဝန်ပေးထားသော ကုန်းပတ်အရာရှိ)",
            "Check that hydraulic pumps work and brake linings are in good condition. (ဟိုက်ဒရောလစ်စနစ် အလုပ်လုပ်မလုပ်နှင့် ဘရိတ်ပြားများ ကောင်းမွန်မှု ရှိမရှိ စစ်ဆေးရမည်)"
        ]
    },
    {
        id: 17,
        title: "Lifeboat Drill (အသက်ကယ်လှေလေ့ကျင့်ခန်း)",
        imgUrl: "images/ex17.jpg",
        imageDesc: "သင်္ဘောသားများ အသက်ကယ်အကျီ (Lifejacket) များ ဝတ်ဆင်ကာ Muster Station တွင် စုဝေးပြီး အသက်ကယ်လှေချရန် ပြင်ဆင်နေပုံ။",
        questions: [
            "1. How often should lifeboat drills be carried out?",
            "2. What is the signal for the General Emergency Alarm?",
            "3. What must you bring to your muster station?",
            "4. What is the role of the Muster List?",
            "5. Why is it important to test the lifeboat engine?"
        ],
        answers: [
            "At least once a month under SOLAS regulations. (SOLAS စည်းမျဉ်းအရ အနည်းဆုံး တစ်လလျှင် တစ်ကြိမ် ပြုလုပ်ရမည်)",
            "Seven or more short blasts followed by one long blast on the whistle or bell. (ဥသြသံ သို့မဟုတ် ခေါင်းလောင်းသံ တိုတို ၇ ကြိမ်နှင့် ရှည်ရှည် ၁ ကြိမ် ဖြစ်သည်)",
            "Your lifejacket, warm clothing, and immersion suit if required. (အသက်ကယ်အင်္ကျီ၊ နွေးထွေးသောအဝတ်အစားနှင့် လိုအပ်ပါက ရေငုပ်ဝတ်စုံ)",
            "It states individual emergency duties and escape routes for everyone. (လူတိုင်းအတွက် အရေးပေါ်တာဝန်များနှင့် ထွက်ပြေးရမည့် လမ်းကြောင်းများကို ပြသထားသည်)",
            "To ensure it starts instantly during a real abandon-ship scenario. (အမှန်တကယ် သင်္ဘောစွန့်ခွာရချိန်တွင် ချက်ချင်းစက်နှိုးနိုင်ရန် သေချာစေရန်)"
        ]
    },
    {
        id: 18,
        title: "Bunkering Safety (ဆီဖြည့်တင်းခြင်းဘေးကင်းရေး)",
        imgUrl: "images/ex18.jpg",
        imageDesc: "ဆီဖြည့်နေစဉ် ပိုက်လိုင်းအဆက်များအောက်တွင် Scupper Plug များ ပိတ်ထားပြီး Spill Kit (ဆီဖိတ်စင်မှုကာကွယ်ရေးပစ္စည်း) ပြင်ဆင်ထားပုံ။",
        questions: [
            "1. What is bunkering operation?",
            "2. Why must scupper plugs be closed before bunkering?",
            "3. What is the purpose of a Spill Kit?",
            "4. How do you communicate with the bunker barge?",
            "5. What should you do immediately if an oil spill occurs?"
        ],
        answers: [
            "The process of loading fuel oil into the ship's tanks. (သင်္ဘောဆီကန်များထဲသို့ စက်သုံးဆီ ဖြည့်တင်းခြင်း လုပ်ငန်းစဉ် ဖြစ်သည်)",
            "To prevent any spilled fuel from flowing into the sea. (ဖိတ်စင်လာသော ဆီများ ပင်လယ်ထဲသို့ စီးဝင်မသွားစေရန် ပိတ်ထားခြင်းဖြစ်သည်)",
            "Contains absorbent pads and materials to clean up small oil leaks. (ဆီယိုစိမ့်မှု အနည်းငယ်ကို သန့်ရှင်းရန် စုပ်ယူနိုင်သော ပစ္စည်းများပါရှိသည်)",
            "Using hand-held VHF radios on a pre-agreed working channel. (ကြိုတင်သဘောတူထားသော လိုင်းပေါ်တွင် လက်ကိုင် VHF ရေဒီယိုဖြင့် ဆက်သွယ်သည်)",
            "Stop bunkering operations instantly and hit the emergency shutdown button. (ဆီဖြည့်ခြင်းကို ချက်ချင်းရပ်ပြီး အရေးပေါ်ရပ်တန့်ခလုတ်ကို နှိပ်ရမည်)"
        ]
    }
];

// UI LOGIC FOR CLASSIC VIEW
document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("loginSection");
    const mainSection = document.getElementById("mainSection");
    const keyInput = document.getElementById("keyInput");
    const loginBtn = document.getElementById("loginBtn");
    const keyError = document.getElementById("keyError");
    const logoutBtn = document.getElementById("logoutBtn");
    const exerciseList = document.getElementById("exerciseList");

    const handleLogin = () => {
        const inputKey = keyInput.value.trim();
        if (AUTHORIZED_KEYS.has(inputKey)) {
            keyError.textContent = "";
            loginSection.style.display = "none";
            mainSection.classList.add("active");
            renderExercises();
        } else {
            keyError.textContent = "Invalid Key. Please check and try again.";
        }
    };

    loginBtn.addEventListener("click", handleLogin);
    keyInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleLogin(); });

    logoutBtn.addEventListener("click", () => {
        mainSection.classList.remove("active");
        loginSection.style.display = "block";
        keyInput.value = "";
        keyInput.focus();
    });

    const renderExercises = () => {
        exerciseList.innerHTML = "";
        exercisesData.forEach(ex => {
            const card = document.createElement("div");
            card.className = "exercise-card";

            const header = document.createElement("div");
            header.className = "exercise-header";
            header.innerHTML = `
                <div class="left">
                    <span class="num">#${ex.id}</span>
                    <span class="title">${ex.title}</span>
                </div>
                <i class="fas fa-chevron-down toggle-icon"></i>
            `;

            const body = document.createElement("div");
            body.className = "exercise-body";

            const imgWrap = document.createElement("div");
            imgWrap.className = "exercise-img-wrap";
            imgWrap.innerHTML = `
                <img src="${ex.imgUrl}" alt="${ex.title}" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=MEPT+Image+${ex.id}';">
                <div class="image-caption"><strong>ပုံဖော်ပြချက်:</strong> ${ex.imageDesc}</div>
            `;
            body.appendChild(imgWrap);

            const qaListContainer = document.createElement("div");
            qaListContainer.className = "qa-list";

            ex.questions.forEach((q, index) => {
                const qaItem = document.createElement("div");
                qaItem.className = "qa-item";
                qaItem.innerHTML = `
                    <div class="question">${q}</div>
                    <div class="answer-wrap">
                        <button class="show-answer-btn">Show Answer</button>
                        <div class="answer">${ex.answers[index] || "Translation pending..."}</div>
                    </div>
                `;

                const btn = qaItem.querySelector(".show-answer-btn");
                const ans = qaItem.querySelector(".answer");
                btn.addEventListener("click", () => {
                    const isShown = ans.classList.toggle("show");
                    btn.textContent = isShown ? "Hide Answer" : "Show Answer";
                });

                qaListContainer.appendChild(qaItem);
            });

            body.appendChild(qaListContainer);
            card.appendChild(header);
            card.appendChild(body);

            header.addEventListener("click", () => {
                const icon = header.querySelector(".toggle-icon");
                const isOpen = body.classList.toggle("open");
                header.classList.toggle("open-header", isOpen);
                icon.classList.toggle("open", isOpen);
            });

            exerciseList.appendChild(card);
        });
    };
});

// ============================================================
// PREMIUM WEB APP SECURITY & CONTENT PROTECTION
// ============================================================

// ၁။ Right-Click နှိပ်ပြီး Download ဆွဲခြင်း သို့မဟုတ် Inspect Element ကြည့်ခြင်းကို ပိတ်ရန်
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ၂။ စာသားများကို Select ပေးပြီး Copy (Ctrl+C / Cmd+C) ကူးခြင်းကို တားဆီးရန်
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

document.addEventListener('keydown', (e) => {
    // Ctrl+C, Ctrl+A, Ctrl+U (View Source), Ctrl+S (Save Page) များကို ပိတ်ရန်
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'c' || e.key === 'C' || 
            e.key === 'a' || e.key === 'A' || 
            e.key === 'u' || e.key === 'U' || 
            e.key === 's' || e.key === 'S') {
            e.preventDefault();
            return false;
        }
    }
    // F12 (Developer Tools) ဖွင့်ခြင်းကို ပိတ်ရန်
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});

// ၃။ ပုံများကို မောက်စ်ဖြင့် ဖိပြီး Drag ဆွဲယူကာ Desktop ပေါ်တင်ခြင်းကို ပိတ်ရန်
document.addEventListener('dragstart', (e) => {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
    }
});
