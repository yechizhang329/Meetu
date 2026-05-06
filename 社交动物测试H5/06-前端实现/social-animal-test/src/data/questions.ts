import type { QuizQuestion } from './types';

// Questions and scoring weights come from PRD §8 + §9.5 (v6 is the latest title set).
// Dave-applied reachability patch 2026-05-06: added secondary weights on show_peacock /
// night_owl / lastminute_pigeon in 5 options because random-sampling verification showed
// they were otherwise unreachable with PRD §9.5 weights alone (see scripts/verify-scoring.ts).
// Each patched line is marked "/* +reach */". Flagged to Fiona in task thread for review.

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    title: '新群刚建好，群名还叫"周六小局临时群"。10 分钟过去了，没人说话。',
    options: [
      {
        id: 'A',
        text: '看完所有消息，但继续保持空气状态',
        scores: { power_cat: 3, corner_mouse: 2, lastminute_pigeon: 1 },
      },
      {
        id: 'B',
        text: '发一句："所以时间地点现在定了吗？"',
        scores: { prep_hamster: 3, border_hedgehog: 1, border_collie: 1 },
      },
      {
        id: 'C',
        text: '先丢个表情包，看看有没有人接',
        scores: { warm_dog: 3, social_butterfly: 2, show_peacock: 1 },
      },
      {
        id: 'D',
        text: '心里吐槽：这个群已经开始表演沉默了',
        scores: { lastminute_pigeon: 3, recharge_panda: 2, night_owl: 1 },
      },
    ],
  },
  {
    id: 'q2',
    title: '朋友说："晚上有个局，都是挺好的人，你来不来？"',
    options: [
      {
        id: 'A',
        text: '"挺好的人"具体是多好，能不能展开说说',
        scores: { border_hedgehog: 3, corner_mouse: 2, power_cat: 1 },
      },
      {
        id: 'B',
        text: '先问清楚几点、在哪、几个人、花多少钱',
        scores: { prep_hamster: 2, empathy_otter: 2, border_collie: 1 },
      },
      {
        id: 'C',
        text: '如果有熟人在，我可以考虑出现一下',
        scores: { warm_dog: 2, calm_capybara: 2, recharge_panda: 1, lastminute_pigeon: 1 /* +reach */ },
      },
      {
        id: 'D',
        text: '听起来太正常了，有没有一点有意思的部分',
        scores: { meme_fox: 2, vibe_monkey: 2, social_butterfly: 1 },
      },
    ],
  },
  {
    id: 'q3',
    title: '第一次见面，大家围坐一圈，空气安静到能听见吸管戳奶茶盖。',
    options: [
      {
        id: 'A',
        text: '低头喝水：只要我不抬头，尴尬就看不见我',
        scores: { power_cat: 3, corner_mouse: 2, recharge_panda: 1 },
      },
      {
        id: 'B',
        text: '温和开口："你们是怎么知道这个局的？"',
        scores: { empathy_otter: 3, calm_capybara: 2, warm_dog: 1 },
      },
      {
        id: 'C',
        text: '笑一下："我们是不是在等系统匹配话题？"',
        scores: { meme_fox: 3, vibe_monkey: 2, show_peacock: 1 },
      },
      {
        id: 'D',
        text: '默默观察：谁也想逃，谁在硬撑，我都看见了',
        scores: { bullet_alpaca: 3, border_hedgehog: 2, power_cat: 1, night_owl: 1 /* +reach */ },
      },
    ],
  },
  {
    id: 'q4',
    title: '大家站在食堂/商场门口，连续三个人说"随便吃什么"。',
    options: [
      {
        id: 'A',
        text: '那我也随便，大家一起随便',
        scores: { recharge_panda: 2, calm_capybara: 2, corner_mouse: 1 },
      },
      {
        id: 'B',
        text: '我开始查距离、评分、人均、排队时间',
        scores: { prep_hamster: 3, border_collie: 2, border_hedgehog: 1 },
      },
      {
        id: 'C',
        text: '我直接报三个选择："近的、好吃的、不排队的，选一个"',
        scores: { border_collie: 3, social_butterfly: 2, warm_dog: 1 },
      },
      {
        id: 'D',
        text: '表面微笑，内心弹幕：随便是世界上最不随便的词',
        scores: { bullet_alpaca: 3, meme_fox: 2, vibe_monkey: 1 },
      },
    ],
  },
  {
    id: 'q5',
    title: '有人提议："要不大家轮流自我介绍一下？"',
    options: [
      {
        id: 'A',
        text: '可以，但请不要深入挖掘我的灵魂',
        scores: { border_hedgehog: 3, power_cat: 2, corner_mouse: 1 },
      },
      {
        id: 'B',
        text: '我会说得很正常，但说完需要恢复一下',
        scores: { power_cat: 2, recharge_panda: 2, corner_mouse: 1 },
      },
      {
        id: 'C',
        text: '我会讲得轻松一点，顺便让气氛别太硬',
        scores: { meme_fox: 3, vibe_monkey: 2, warm_dog: 1, show_peacock: 1 /* +reach */ },
      },
      {
        id: 'D',
        text: '我表面微笑，内心已经写好三百字弹幕',
        scores: { bullet_alpaca: 3, meme_fox: 1, power_cat: 1 },
      },
    ],
  },
  {
    id: 'q6',
    title: '群里讨论周末去哪，十分钟过去了，大家还在"都行"。',
    options: [
      {
        id: 'A',
        text: '我继续潜水，尊重这场大型拉扯',
        scores: { power_cat: 2, recharge_panda: 2, corner_mouse: 1, night_owl: 1 /* +reach */ },
      },
      {
        id: 'B',
        text: '忍不住发："要不我建个投票？"',
        scores: { border_collie: 3, prep_hamster: 2, calm_capybara: 1 },
      },
      {
        id: 'C',
        text: '"别讨论了，先出门，路上再决定"',
        scores: { warm_dog: 3, social_butterfly: 2, recharge_panda: 1 },
      },
      {
        id: 'D',
        text: '发一句："去校门口数共享单车也比现在有进展"',
        scores: { meme_fox: 2, vibe_monkey: 2, bullet_alpaca: 1 },
      },
    ],
  },
  {
    id: 'q7',
    title: '你发现旁边有人一直插不上话，手里的奶茶都快被 TA 搅出漩涡了。',
    options: [
      {
        id: 'A',
        text: '我看见了，但我也在等别人来救我们俩',
        scores: { corner_mouse: 3, power_cat: 2, border_hedgehog: 1 },
      },
      {
        id: 'B',
        text: '递个话题："你刚刚说你是哪个专业来着？"',
        scores: { empathy_otter: 3, warm_dog: 1, calm_capybara: 1 },
      },
      {
        id: 'C',
        text: '开个轻玩笑，把 TA 带回桌面',
        scores: { meme_fox: 3, vibe_monkey: 2, social_butterfly: 1 },
      },
      {
        id: 'D',
        text: '小声问："要不要一起去拿点纸巾/加点水？"',
        scores: { empathy_otter: 3, calm_capybara: 2, power_cat: 1 },
      },
    ],
  },
  {
    id: 'q8',
    title: '小局进行到一半，有人说："我们拍张合照吧。"',
    options: [
      {
        id: 'A',
        text: '默默后退半步，试图成为背景板',
        scores: { power_cat: 3, border_hedgehog: 2, corner_mouse: 1, lastminute_pigeon: 1 /* +reach */ },
      },
      {
        id: 'B',
        text: '可以拍，但别要求我突然营业',
        scores: { show_peacock: 2, warm_dog: 2, social_butterfly: 1, lastminute_pigeon: 1 /* +reach */ },
      },
      {
        id: 'C',
        text: '拍就拍，我甚至可以贡献一个姿势',
        scores: { show_peacock: 3, vibe_monkey: 2, meme_fox: 1 },
      },
      {
        id: 'D',
        text: '先问一句："这个会发到哪里？"边界要清楚',
        scores: { border_hedgehog: 3, prep_hamster: 2, bullet_alpaca: 1 },
      },
    ],
  },
  {
    id: 'q9',
    title: '活动结束，大家站在门口，进入那种"好像该告别但没人先走"的时刻。',
    options: [
      {
        id: 'A',
        text: '如果今天舒服，我会愿意加个微信',
        scores: { calm_capybara: 3, empathy_otter: 2, power_cat: 1 },
      },
      {
        id: 'B',
        text: '先建群吧，一对一突然加有点太正式',
        scores: { prep_hamster: 2, border_hedgehog: 2, recharge_panda: 1 },
      },
      {
        id: 'C',
        text: '气氛不错就加，别让关系死在门口',
        scores: { warm_dog: 2, social_butterfly: 2, show_peacock: 2 /* +reach */ },
      },
      {
        id: 'D',
        text: '我会想：加了以后，是会聊天还是躺在列表里',
        scores: { night_owl: 3, bullet_alpaca: 2, corner_mouse: 1 },
      },
    ],
  },
  {
    id: 'q10',
    title: '你刷到一个标题："认识20个新朋友的大型破冰局"。',
    options: [
      {
        id: 'A',
        text: '20个？我先替自己的社交电量报警',
        scores: { power_cat: 3, corner_mouse: 2, recharge_panda: 1 },
      },
      {
        id: 'B',
        text: '看看有没有主持人、流程和安全说明',
        scores: { prep_hamster: 3, border_collie: 2, border_hedgehog: 1 },
      },
      {
        id: 'C',
        text: '如果玩法好玩，也不是不能冲',
        scores: { warm_dog: 2, vibe_monkey: 2, social_butterfly: 1 },
      },
      {
        id: 'D',
        text: '标题有点猛，但评论区如果有趣我会继续看',
        scores: { meme_fox: 2, bullet_alpaca: 2, night_owl: 2 /* +reach */ },
      },
    ],
  },
  {
    id: 'q11',
    title: '朋友临时发："20分钟后楼下集合。"你正在床上刷手机。',
    options: [
      {
        id: 'A',
        text: '20分钟？我的身体和灵魂至少需要开两次会',
        scores: { lastminute_pigeon: 3, recharge_panda: 2, corner_mouse: 1 },
      },
      {
        id: 'B',
        text: '先问清楚去哪、多久、穿什么、要不要花钱',
        scores: { prep_hamster: 3, border_hedgehog: 2, border_collie: 1 },
      },
      {
        id: 'C',
        text: '直接起身，反正躺着也是刷手机',
        scores: { warm_dog: 3, social_butterfly: 2, show_peacock: 2 /* +reach */ },
      },
      {
        id: 'D',
        text: '先说"不去了"，五分钟后开始后悔',
        scores: { lastminute_pigeon: 3, bullet_alpaca: 2, recharge_panda: 1 },
      },
    ],
  },
  {
    id: 'q12',
    title: '如果这次测试给你一句"社交通关提示"，你最想要哪条？',
    options: [
      {
        id: 'A',
        text: '怎么出现在别人面前，但不被尴尬吞掉',
        scores: { power_cat: 3, corner_mouse: 2, border_hedgehog: 1 },
      },
      {
        id: 'B',
        text: '怎么判断哪些人真的和我同频',
        scores: { empathy_otter: 3, calm_capybara: 2, warm_dog: 1 },
      },
      {
        id: 'C',
        text: '怎么更自然地加入一个局，而不是站在门口犹豫',
        scores: { social_butterfly: 3, meme_fox: 2, show_peacock: 1 },
      },
      {
        id: 'D',
        text: '怎么把脑子里的想法变成一次真的见面',
        scores: { border_collie: 2, vibe_monkey: 2, night_owl: 2 /* +reach */, lastminute_pigeon: 1 /* +reach */ },
      },
    ],
  },
];
