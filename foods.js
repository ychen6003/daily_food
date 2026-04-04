// foods.js — Diet Selector Food Database
// Edit this file to add, remove, or modify food items.
// Each item is loaded by index.html at startup.

let FOODS = [
// ─────────────── 早餐 ───────────────
{id:'b01',meal:['早餐'],name:'水煮蛋',icon:'🥚',cal:70,carb:1,prot:6,fat:5,
 cat:'高蛋白',exc:null,pl:'中',cl:'低',fl:'低',fib:'低',proc:'原型',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,unit:'顆',note:'每顆70kcal'},

{id:'b09',meal:['早餐'],name:'茶葉蛋',icon:'🥚',cal:80,carb:1,prot:7,fat:5,
 cat:'高蛋白',exc:null,pl:'中',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,unit:'顆',note:'方便補蛋白'},

{id:'b03',meal:['早餐'],name:'地瓜 100g',icon:'🍠',cal:105,carb:25,prot:2,fat:0,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'原型',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:true,post:false,note:'低GI，各日型皆適合'},

{id:'b06',meal:['早餐'],name:'香蕉',icon:'🍌',cal:90,carb:23,prot:1,fat:0,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'原型',sat:'中',
 fit:['cardio','strength','flex'],pre:true,post:true,note:'天然糖分，運動前後良好選擇'},

{id:'b13',meal:['早餐'],name:'無糖紅茶',icon:'🍵',cal:0,carb:0,prot:0,fat:0,
 cat:'飲品',exc:null,pl:'低',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,note:'零熱量，任何日型皆可'},

{id:'b02',meal:['早餐'],name:'無糖豆漿 250ml',icon:'🥛',cal:90,carb:5,prot:8,fat:4,
 cat:'高蛋白',exc:null,pl:'中',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,note:'植物蛋白，飽足感佳'},

{id:'b04',meal:['早餐'],name:'燕麥 50g',icon:'🌾',cal:190,carb:32,prot:6,fat:3,
 cat:'原型澱粉',exc:null,pl:'低',cl:'高',fl:'低',fib:'高',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:false,note:'有氧/重訓日補碳，訓前因高纖建議避免'},

{id:'b05',meal:['早餐'],name:'無糖優格',icon:'🍶',cal:100,carb:7,prot:10,fat:3,
 cat:'高蛋白',exc:null,pl:'中',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,note:'推薦，益生菌＋蛋白質'},

{id:'b07',meal:['早餐'],name:'全麥吐司 1片',icon:'🍞',cal:80,carb:15,prot:3,fat:1,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'輕加工',sat:'低',
 fit:['cardio','strength','flex'],pre:true,post:false,note:'可搭配蛋補蛋白質'},


{id:'b10',meal:['早餐'],name:'蛋餅',icon:'🫔',cal:260,carb:30,prot:12,fat:9,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:false,note:'外食常見，有氧/重訓/彈性日可'},

{id:'b11',meal:['早餐'],name:'全家自然零優格',icon:'🥛',cal:80,carb:6,prot:6,fat:3,
 cat:'高蛋白',exc:null,pl:'低',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,note:'低卡方便，搭配其他早餐'},

{id:'b12',meal:['早餐'],name:'全家藍莓優酪',icon:'🫐',cal:135,carb:15,prot:5,fat:3,
 cat:'均衡',exc:null,pl:'低',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['cardio','strength','flex'],pre:true,post:false,note:'有氧/訓前補充輕量碳水'},

// ─────────────── 午餐 ───────────────
{id:'l01',meal:['午餐','晚餐'],name:'雞胸餐盒（半飯）',icon:'🍱',cal:485,carb:50,prot:40,fat:12,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'低',fib:'中',proc:'輕加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:false,dinner_ok:true,note:'各日型首選，高蛋白低脂'},

{id:'l02',meal:['午餐','晚餐'],name:'舒肥雞蔬菜餐盒',icon:'🥗',cal:400,carb:20,prot:40,fat:10,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'低',fl:'低',fib:'中',proc:'輕加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'無運動日首選，超高蛋白低碳'},

{id:'l03',meal:['午餐','晚餐'],name:'舒肥雞羽衣甘藍捲餅',icon:'🌯',cal:400,carb:35,prot:30,fat:12,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'高',cl:'中',fl:'中',fib:'中',proc:'輕加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'高蛋白均衡，各日型適合'},

{id:'l04',meal:['午餐','晚餐'],name:'海鹽雞胸飯',icon:'🍗',cal:450,carb:48,prot:35,fat:10,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'穩定選項，各日型均適合'},

{id:'l05',meal:['午餐','晚餐'],name:'烤雞飯（去皮）',icon:'🍗',cal:550,carb:70,prot:40,fat:12,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'高',fl:'低',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'高蛋白補碳水，去皮低脂'},

{id:'l06',meal:['午餐','晚餐'],name:'烤雞腿飯',icon:'🍗',cal:600,carb:70,prot:35,fat:18,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:true,dinner_ok:true,note:'脂肪偏中，有氧/彈性日可'},

{id:'l07',meal:['午餐','晚餐'],name:'魯雞腿飯',icon:'🍗',cal:600,carb:75,prot:35,fat:18,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:true,dinner_ok:true,note:'有氧/彈性日可，脂肪偏中'},

{id:'l08',meal:['午餐','晚餐'],name:'玫瑰雞腿飯',icon:'🍗',cal:650,carb:75,prot:35,fat:20,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:true,dinner_ok:true,note:'脂肪中等，有氧/彈性日'},

{id:'l09',meal:['午餐','晚餐'],name:'嫩雞飯',icon:'🍗',cal:650,carb:75,prot:35,fat:22,
 cat:'高蛋白',subcat:'飯',exc:null,pl:'高',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:true,dinner_ok:true,note:'有氧/彈性日，脂肪偏中'},

{id:'l10',meal:['午餐','晚餐'],name:'甘蔗雞烏龍麵（去皮四塊）',icon:'🍜',cal:420,carb:48,prot:28,fat:6,
 cat:'高蛋白',subcat:'麵',exc:null,pl:'高',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'低脂高蛋白，有氧/重訓日佳'},

{id:'l11',meal:['午餐','晚餐'],name:'海鮮烏龍麵（少喝湯）',icon:'🍜',cal:380,carb:55,prot:19,fat:7,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'有氧/彈性日，蛋白質偏低'},

{id:'l12',meal:['午餐','晚餐'],name:'越式海鮮河粉',icon:'🍜',cal:475,carb:68,prot:23,fat:8,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'有氧日補碳，低脂清湯'},

{id:'l13',meal:['午餐','晚餐'],name:'泰式牛肉河粉',icon:'🍜',cal:575,carb:73,prot:28,fat:15,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'脂肪偏中，有氧次選，彈性日可'},

{id:'l14',meal:['午餐','晚餐'],name:'廣東粥',icon:'🥣',cal:300,carb:48,prot:18,fat:8,
 cat:'中碳',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'熱量偏低，飽足感差，有氧輕食可'},

{id:'l15',meal:['午餐','晚餐'],name:'滷味拼盤',icon:'🍢',cal:350,carb:20,prot:30,fat:10,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'低',fib:'中',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:false,post:false,dinner_ok:true,note:'低碳高蛋白，各日型適合'},

{id:'l16',meal:['午餐','晚餐'],name:'湯滷味（一般）',icon:'🍢',cal:400,carb:30,prot:25,fat:15,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'中',cl:'低',fl:'中',fib:'低',proc:'輕加工',sat:'中',
 fit:['rest','flex'],pre:false,post:true,dinner_ok:true,note:'無運動/彈性日，脂肪略高'},


{id:'l18',meal:['午餐','晚餐'],name:'小火鍋（不吃主食）',icon:'🍲',cal:420,carb:18,prot:32,fat:14,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'中',fib:'高',proc:'輕加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:false,dinner_ok:true,note:'低碳高蛋白，無運動日首選'},

{id:'l19',meal:['午餐','晚餐'],name:'摩斯綠烤雞起司堡',icon:'🍔',cal:385,carb:35,prot:23,fat:15,
 cat:'中碳',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'高加工',sat:'中',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'高加工降次選，有氧偶爾可'},

{id:'l20',meal:['午餐','晚餐'],name:'摩斯海洋珍珠堡',icon:'🍔',cal:475,carb:60,prot:18,fat:18,
 cat:'高脂',subcat:'其他',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'高加工',sat:'中',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高加工，僅彈性日'},

{id:'l21',meal:['午餐','晚餐'],name:'義大利麵（一般）',icon:'🍝',cal:600,carb:80,prot:20,fat:20,
 cat:'精緻澱粉',subcat:'麵',exc:null,pl:'低',cl:'高',fl:'中',fib:'低',proc:'高加工',sat:'中',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:false,note:'精緻澱粉+高加工，有氧偶爾可'},

{id:'l22',meal:['午餐','晚餐'],name:'蝦餃（8顆）',icon:'🥟',cal:400,carb:50,prot:20,fat:12,
 cat:'中碳',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'中',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'有氧/彈性日可'},

{id:'l23',meal:['午餐','晚餐'],name:'松阪豬蔬菜餐盒',icon:'🥩',cal:520,carb:20,prot:30,fat:32,
 cat:'高脂',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'高',fib:'中',proc:'輕加工',sat:'高',
 fit:['rest','flex'],pre:false,post:false,dinner_ok:false,note:'高脂，無運動/彈性日偶爾可'},

{id:'l24',meal:['午餐','晚餐'],name:'水餃 10顆',icon:'🥟',cal:650,carb:70,prot:30,fat:28,
 cat:'高脂',subcat:'其他',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高加工，僅彈性日'},

{id:'l25',meal:['午餐','晚餐'],name:'鮮肉湯包（8顆）',icon:'🥟',cal:500,carb:55,prot:25,fat:20,
 cat:'高脂',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高加工，彈性日偶爾可'},

{id:'l26',meal:['午餐','晚餐'],name:'魯排骨飯',icon:'🍖',cal:750,carb:80,prot:28,fat:35,
 cat:'高脂',subcat:'飯',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'輕加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高熱量，僅彈性日'},

{id:'l27',meal:['午餐','晚餐'],name:'黃燜雞米飯（不喝醬）',icon:'🍗',cal:685,carb:90,prot:33,fat:23,
 cat:'高脂',subcat:'飯',exc:null,pl:'高',cl:'高',fl:'高',fib:'低',proc:'輕加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高碳，僅彈性日'},

{id:'l28',meal:['午餐','晚餐'],name:'北部粽（1顆）',icon:'🫙',cal:500,carb:65,prot:14,fat:18,
 cat:'高脂',subcat:'其他',exc:null,pl:'低',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'中',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'蛋白質不足+高脂，僅彈性日'},

{id:'l29',meal:['午餐','晚餐'],name:'炸雞腿飯',icon:'🍗',cal:600,carb:70,prot:30,fat:20,
 cat:'油炸',subcat:'飯',exc:null,pl:'中',cl:'中',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'油炸高脂，僅彈性日偶爾'},

{id:'l30',meal:['午餐','晚餐'],name:'什錦海鮮炒麵',icon:'🍝',cal:700,carb:85,prot:30,fat:25,
 cat:'高脂',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高加工，僅彈性日'},

{id:'l31',meal:['午餐','晚餐'],name:'木須炒麵',icon:'🍝',cal:800,carb:90,prot:30,fat:30,
 cat:'高脂',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高熱量，彈性日控量'},

{id:'l32',meal:['午餐','晚餐'],name:'蝦仁蛋炒飯',icon:'🍳',cal:800,carb:90,prot:25,fat:28,
 cat:'高脂',subcat:'飯',exc:null,pl:'中',cl:'高',fl:'高',fib:'低',proc:'高加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高熱量，彈性日控量'},

{id:'l33',meal:['午餐','晚餐'],name:'肉圓',icon:'🧿',cal:250,carb:35,prot:10,fat:8,
 cat:'精緻澱粉',subcat:'其他',exc:null,pl:'低',cl:'中',fl:'中',fib:'低',proc:'高加工',sat:'低',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'蛋白質不足+高加工，僅彈性日'},

{id:'l34',meal:['午餐','晚餐'],name:'鐵板燒',icon:'🍳',cal:700,carb:40,prot:40,fat:35,
 cat:'高脂',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'高',fib:'低',proc:'輕加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高蛋白，僅彈性日'},

{id:'l35',meal:['午餐','晚餐'],name:'和牛餐盒',icon:'🥩',cal:550,carb:25,prot:40,fat:30,
 cat:'高脂',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'高',fib:'低',proc:'輕加工',sat:'高',
 fit:['flex'],pre:false,post:false,dinner_ok:false,note:'高脂高蛋白，僅彈性日'},

{id:'l36',meal:['午餐','晚餐'],name:'牛肉湯餃（10顆）',icon:'🥟',cal:550,carb:60,prot:28,fat:18,
 cat:'中碳',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:true,dinner_ok:true,note:'脂肪偏中，有氧/彈性/重訓後'},

{id:'l37',meal:['午餐','晚餐'],name:'綜合魷魚羹板條',icon:'🦑',cal:575,carb:78,prot:24,fat:14,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:true,note:'碳水偏高，有氧/彈性日'},

{id:'l38',meal:['午餐','晚餐'],name:'香煎雞胸沙拉',icon:'🥗',cal:380,carb:15,prot:38,fat:14,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'低',fib:'高',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:false,post:false,dinner_ok:true,
 note:'高蛋白低碳低脂，午晚餐首選'},



{id:'l41',meal:['午餐','晚餐'],name:'小火鍋（烏龍麵）',icon:'🍲',cal:580,carb:72,prot:28,fat:14,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'中',fib:'中',proc:'輕加工',sat:'高',
 fit:['cardio','flex'],pre:false,post:false,dinner_ok:false,
 note:'碳水偏高，有氧/彈性日午餐可，晚餐不建議'},

{id:'l42',meal:['午餐','晚餐'],name:'肯德基紙包雞',icon:'🍗',cal:420,carb:8,prot:42,fat:22,
 cat:'高蛋白',subcat:'其他',exc:null,pl:'高',cl:'低',fl:'中',fib:'低',proc:'高加工',sat:'高',
 fit:['rest','cardio','strength','flex'],pre:false,post:false,dinner_ok:true,
 note:'高蛋白低碳，高加工降次選，去皮後脂肪可接受'},


{id:'l43',meal:['午餐','晚餐'],name:'乾炒牛河粉',icon:'🍜',cal:750,carb:90,prot:28,fat:30,
 cat:'精緻澱粉',subcat:'麵',exc:'精緻澱粉',pl:'中',cl:'高',fl:'高',fib:'低',proc:'輕加工',sat:'中',
 fit:['cardio','strength','flex'],pre:false,post:false,dinner_ok:false,
 note:'高油熱炒港式主食，鈉含量偏高，晚餐不建議'},

{id:'m01',meal:['早餐','午餐','晚餐','訓後補給'],name:'義式香草雞胸肉',icon:'🍗',cal:151,carb:2,prot:27,fat:2,
 cat:'高蛋白',exc:null,pl:'高',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['rest','cardio','strength','flex'],pre:true,post:true,dinner_ok:true,
 note:'超商即食雞胸，低脂高蛋白'},

{id:'m02',meal:['早餐','午餐','晚餐'],name:'御飯糰（肉鬆）',icon:'🍙',cal:220,carb:38,prot:6,fat:6,
 cat:'精緻澱粉',exc:'精緻澱粉',pl:'低',cl:'高',fl:'中',fib:'低',proc:'高加工',sat:'低',
 fit:['cardio','flex'],pre:true,post:false,dinner_ok:false,
 note:'高碳水＋加工肉鬆，油糖較高，晚餐不建議'},

{id:'m03',meal:['早餐','午餐','晚餐'],name:'御飯糰（鮪魚）',icon:'🍙',cal:240,carb:40,prot:8,fat:7,
 cat:'中碳',exc:'精緻澱粉',pl:'中',cl:'高',fl:'中',fib:'低',proc:'高加工',sat:'中',
 fit:['cardio','strength','flex'],pre:true,post:false,dinner_ok:false,
 note:'含蛋白質但仍以碳水為主，晚餐不建議'},

// ─────────────── 訓前補給（重訓日 18:00） ───────────────
{id:'pre01',meal:['訓前補給'],name:'香蕉＋豆漿',icon:'🍌',cal:180,carb:28,prot:9,fat:4,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'原型',sat:'中',
 fit:['strength'],pre:true,post:false,note:'快速補碳，不油不重，訓前理想'},

{id:'pre02',meal:['訓前補給'],name:'地瓜＋水煮蛋',icon:'🍠',cal:175,carb:25,prot:6,fat:5,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'原型',sat:'中',
 fit:['strength'],pre:true,post:false,note:'低GI補碳＋蛋白，能量穩定'},

{id:'pre03',meal:['訓前補給'],name:'無糖優格＋燕麥（少）',icon:'🥣',cal:190,carb:24,prot:12,fat:4,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'低',fib:'中',proc:'輕加工',sat:'中',
 fit:['strength'],pre:true,post:false,note:'均衡訓前，高纖注意腸胃'},

{id:'pre04',meal:['訓前補給'],name:'香蕉',icon:'🍌',cal:90,carb:23,prot:1,fat:0,
 cat:'原型澱粉',exc:null,pl:'低',cl:'中',fl:'低',fib:'中',proc:'原型',sat:'低',
 fit:['strength'],pre:true,post:false,note:'最輕量訓前補碳，不影響胃'},

{id:'pre05',meal:['訓前補給'],name:'烤雞飯半份（去皮）',icon:'🍗',cal:275,carb:35,prot:20,fat:6,
 cat:'高蛋白',exc:null,pl:'中',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['strength'],pre:true,post:false,note:'有蛋白的完整訓前，控半份'},

{id:'pre06',meal:['訓前補給'],name:'廣東粥',icon:'🥣',cal:300,carb:48,prot:18,fat:8,
 cat:'中碳',exc:null,pl:'中',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['strength'],pre:true,post:false,note:'輕食補碳，易消化，飽足感低'},

{id:'pre07',meal:['訓前補給'],name:'北部粽（1顆）',icon:'🫙',cal:500,carb:65,prot:14,fat:18,
 cat:'高脂',exc:null,pl:'低',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'中',
 fit:['strength'],pre:false,post:false,note:'高脂→訓前不建議（延遲消化）'},

{id:'pre08',meal:['訓前補給'],name:'黃燜雞米飯半份',icon:'🍗',cal:343,carb:45,prot:17,fat:12,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'中',
 fit:['strength'],pre:true,post:false,note:'控半份，補碳水，脂肪中等'},

{id:'pre09',meal:['訓前補給'],name:'越式海鮮河粉（半份）',icon:'🍜',cal:238,carb:34,prot:12,fat:4,
 cat:'中碳',exc:null,pl:'低',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['strength'],pre:true,post:false,note:'輕量補碳，低脂易消化'},

{id:'pre10',meal:['訓前補給'],name:'甘蔗雞烏龍麵（去皮）',icon:'🍜',cal:420,carb:48,prot:28,fat:6,
 cat:'高蛋白',exc:null,pl:'高',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'高',
 fit:['strength'],pre:true,post:false,note:'低脂高蛋白，理想訓前正餐'},

// ─────────────── 訓後補給（重訓日 21:00） ───────────────
{id:'post01',meal:['訓後補給'],name:'雞胸肉＋白飯（小）',icon:'🍗',cal:380,carb:35,prot:35,fat:8,
 cat:'高蛋白',exc:null,pl:'高',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'高',
 fit:['strength'],pre:false,post:true,note:'黃金訓後：高蛋白＋少量碳水'},

{id:'post02',meal:['訓後補給'],name:'海鹽雞胸飯（半份）',icon:'🍗',cal:225,carb:24,prot:18,fat:5,
 cat:'高蛋白',exc:null,pl:'高',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['strength'],pre:false,post:true,note:'輕量訓後，方便外帶半份'},

{id:'post03',meal:['訓後補給'],name:'舒肥雞蔬菜餐盒',icon:'🥗',cal:400,carb:20,prot:40,fat:10,
 cat:'高蛋白',exc:null,pl:'高',cl:'低',fl:'低',fib:'中',proc:'輕加工',sat:'高',
 fit:['strength'],pre:false,post:true,note:'高蛋白低碳，嚴格控脂訓後首選'},

{id:'post04',meal:['訓後補給'],name:'摩斯綠烤雞起司堡',icon:'🍔',cal:385,carb:35,prot:23,fat:15,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'高加工',sat:'中',
 fit:['strength'],pre:false,post:true,note:'高加工，脂肪偏中，訓後次選'},

{id:'post05',meal:['訓後補給'],name:'無糖豆漿＋地瓜',icon:'🥛',cal:195,carb:28,prot:10,fat:4,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'低',fib:'中',proc:'輕加工',sat:'中',
 fit:['strength'],pre:false,post:true,note:'植物蛋白＋低GI碳水，清爽輕量'},

{id:'post06',meal:['訓後補給'],name:'無糖優格＋香蕉',icon:'🍌',cal:190,carb:30,prot:11,fat:3,
 cat:'均衡',exc:null,pl:'中',cl:'中',fl:'低',fib:'中',proc:'輕加工',sat:'中',
 fit:['strength'],pre:false,post:true,note:'蛋白＋天然糖分快速補充'},

{id:'post07',meal:['訓後補給'],name:'高蛋白奶 250ml',icon:'🥛',cal:160,carb:12,prot:18,fat:3,
 cat:'高蛋白',exc:null,pl:'高',cl:'低',fl:'低',fib:'低',proc:'輕加工',sat:'低',
 fit:['strength'],pre:false,post:true,note:'不想進食時的快速蛋白補充'},

{id:'post08',meal:['訓後補給'],name:'湯滷味',icon:'🍢',cal:400,carb:30,prot:25,fat:15,
 cat:'高蛋白',exc:null,pl:'中',cl:'低',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['strength'],pre:false,post:true,note:'脂肪偏中，訓後次選，有飽足感'},

{id:'post09',meal:['訓後補給'],name:'烤雞腿飯（去皮）',icon:'🍗',cal:500,carb:60,prot:30,fat:14,
 cat:'高蛋白',exc:null,pl:'高',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['strength'],pre:false,post:true,note:'去皮降脂，訓後補碳水蛋白'},

{id:'post10',meal:['訓後補給'],name:'越式海鮮河粉',icon:'🍜',cal:475,carb:68,prot:23,fat:8,
 cat:'中碳',exc:null,pl:'中',cl:'中',fl:'低',fib:'低',proc:'輕加工',sat:'中',
 fit:['strength'],pre:false,post:true,note:'低脂補碳，訓後可'},

// ─────────────── 新增品項 2025 ───────────────
{id:'x01',meal:['午餐'],name:'牛肉湯餃（10顆）',icon:'🥟',cal:550,carb:60,prot:28,fat:18,
 cat:'中碳',subcat:'其他',exc:null,pl:'中',cl:'中',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:true,dinner_ok:true,
 note:'脂肪偏中，有氧/彈性日可，重訓後也適合'},

{id:'x02',meal:['訓前補給'],name:'草莓大福',icon:'🍓',cal:275,carb:50,prot:4,fat:5,
 cat:'精緻澱粉',exc:null,pl:'低',cl:'高',fl:'低',fib:'低',proc:'高加工',sat:'低',
 fit:['strength','flex'],pre:true,post:false,dinner_ok:true,
 note:'快速補充糖分，訓前輕量補碳用，蛋白質不足'},

{id:'x03',meal:['午餐'],name:'綜合魷魚羹板條',icon:'🦑',cal:575,carb:78,prot:24,fat:14,
 cat:'中碳',subcat:'麵',exc:null,pl:'中',cl:'高',fl:'中',fib:'低',proc:'輕加工',sat:'高',
 fit:['cardio','strength','flex'],pre:false,post:true,dinner_ok:true,
 note:'碳水偏高，有氧/彈性日可，重訓後補碳適合'},
];
