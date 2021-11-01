export const PhoneCertData = [
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
  ['미미학', '13:30 - 13:55'],
];

export const HitTheStageData = [
  // ['Kill Hit', '12:30-12:43', '1. Blackpink REMIX(MINIZIZE choreography) 2. Buttons Remix(Pussycat Dolls) 3. River(Bishop Briggs)'],
  ['DDED', '12:45-12:48', 'AESPA - SAVAGE'],
];

export const dummy = `
소리느낌31기	6:00	6:20	" 와인루프 - 무음모드
 이하이 - 손잡아 줘요
이무진- 신호등"
(중간 휴식)	6:20	6:40	
밴드.jpg	6:40	7:00	"Surl - 9지하철
너드커넥션 - 좋은 밤 좋은 꿈
My Chemical Romance - I don't love you"
하너네는대학원오지마라	7:00	7:20	"Life and time - exiv98
Life and time - 호랑이
로맨틱 펀치 - 토요일 밤이 좋아"
김요일밴드	7:20	7:40	"김요일밴드 - 외계사랑(3:07) 
김요일밴드 - 태평양 저멀리(5:08) 
김요일밴드 - 나를 떠나가는 님에게(2:36) 
검정치마 - Plain Jane(2:34)"
슬예생밴드	7:40	8:00	"OneRepublic-counting stars
Bruno Mars - treasure
미도와 파라솔 - 비와당신`;

export const parser = (dummyText) => {
  let newArray = [];
  console.log(dummy);
  dummy.split('"').map((e, i) => {
    if (i % 2 === 0) {
      const name = e.split('\t')[0].split('\n')[1];
      const start = `${(parseInt(e.split('\t')[1].split(':')[0]) + 12).toString()}:${e.split('\t')[1].split(':')[1]}`;
      const end = `${(parseInt(e.split('\t')[2].split(':')[0]) + 12).toString()}:${e.split('\t')[2].split(':')[1]}`;
      const sets = dummy.split('"')[i + 1].replace(/\n/g, '//');
      newArray.push([name, `${start}-${end}`, sets]);
    }
  });
  return newArray;
};

// export const parser = (dummyText) => {
//   let newArray = [];
//   console.log(dummy);
//   dummy.split('\n').map((e, i) => {
//     newArray.push(
//       [e.split('\t')[0],
//         `${e.split('\t')[1].substring(0, 2)}:${e.split('\t')[1].substring(2, 4)}-${e.split('\t')[2].substring(0, 2)}:${e.split('\t')[2].substring(2, 4)}`,
//         e.split('\t')[3]],
//     );
//   });
//   return newArray;
// };

export const SingStealerData = [
  [
    '의진',
    '15:00-15:08',
    'Filter(방탄소년단) / 마음 (아이유)',
  ],
  [
    '스위트걸',
    '15:10-15:18',
    '외톨이(아웃사이더) / 변비(노라조)',
  ],
  [
    'By the Sea',
    '15:20-15:28',
    '난치병(하림) / 시간을 거슬러(케이윌)',
  ],
  [
    '전명진',
    '15:30-15:38',
    '희재(성시경) / 오래전그날(윤종신)',
  ],
  [
    '석상은',
    '15:40-15:48',
    'Speechless(Naomi Scott) / 지우개(알리)',
  ],
  [
    '리코더의 아이들',
    '15:50-15:98',
    '오래된 노래(스탠딩에그) / 사랑과 우정 사이(김경호,김연우)',
  ],
  [
    '2H',
    '16:00-16:08',
    '뒤로 걷기(투빅) / 미친거니(바이브)',
  ],
  [
    'MPB GANG',
    '16:10-16:18',
    'MPB freestyle / THUG freestyle / Yellow Gang freestyle (자작곡)',
  ],
  [
    '사자',
    '16:20-16:28',
    'Love ballad / my everything (브라운아이드소울)',
  ],
  [
    '이도겸',
    '16:30-16:38',
    '내일 할 일(성시경) / 기억을 걷는 시간(넬)',
  ],
  [
    '작은 손',
    '16:40-16:48',
    '바램(임영웅) / VVS(미란이, 먼치맨, 쿤디판다, 머쉬베놈)',
  ],
  [
    'Intermission',
    '16:50-17:00',
    'Toilet',
  ],
  [
    '솔 로셋',
    '17:00-17:08',
    'POM (자작곡)',
  ],
  [
    '드리밍보컬',
    '17:10-17:18',
    '우리의 밤은 당신의 낮보다 아름답다(코나)',
  ],
  [
    '표윤호',
    '17:20-17:28',
    '너의 꿈 속에서(한지상)',
  ],
  [
    '여승민',
    '17:30-17:38',
    '다시만난세계(소녀시대) / Titanium(David Guetta(Feat.Sia))',
  ],
  [
    '김동연',
    '17:40-17:48',
    'On air(릴보이)',
  ],
  [
    '정수경',
    '17:50-17:58',
    'Popular (Kristin Chenoweth)',
  ],
  [
    '닭강정',
    '18:00-18:08',
    '오늘부터 1일(케이윌), 가끔(크러쉬)',
  ],
];

export const PhoneCertDataOne = [
  [
    '폴라로이드',
    '17:45-18:00',
    '태연 - 11:11//아이린, 슬기 - monster//조이 - 안녕',
  ],
  [
    'B103',
    '18:00-18:20',
    'Cory Wong - Cosmic Sans (feat. Tom Misch)//김뜻돌 - 비 오는 거리에서 춤을 추자//DABDA - Polydream',
  ],
  [
    '합주는 세 번만',
    '18:20-18:40',
    '첸 - 사월이 지나면 우리 헤어져요//성시경 -  내게 오는 길//백예린 - november song//정승환 - 눈사람',
  ],
  [
    '아직 본과의 문을 연-건 아닌걸',
    '18:40-19:00',
    '권진아 - lonely night//10cm-폰서트//아이유 - 하루끝//아이유 - 을의 연애',
  ],
  [
    'Cogito',
    '19:00-19:20',
    '나상현씨 밴드 - 뿌리 염색  //미도와 파라솔 - 캐논 //쏜애플 - 살아있는 너의 밤 ',
  ],
  [
    '정지원과새싹들',
    '19:20-19:40',
    '벤, 성시경 - 희재  //아이유 - strawberry moon //러브홀릭스, 미도와파라솔 - butterfly  //이승윤, 이효리 - chitty chitty bang bang',
  ],
  [
    '광기',
    '19:40-19:55',
    'Intro//Muse - Hysteria//The Volunteers - Let Me Go!',
  ],
  [
    '씨리얼',
    '20:00-20:20',
    'Oasis - Champagne Supernova//John Mayer -Good love is on the way//Velvet Revolver -Slither ',
  ],
  [
    '파인애플',
    '20:20-20:40',
    '쏜애플 - 수성의 하루 //쏜애플 - 검은 별//쏜애플 - 이유',
  ],
  [
    '포춘쿠키',
    '20:40-21:00',
    '일기예보 - 좋아좋아//윤하 - People//데이식스 - Zombie//잔나비 - Goodnight (Intro)//잔나비 - 뜨거운 여름밤은 가고 남은 건 볼품없지만',
  ],
  [
    '오하이오',
    '21:00-21:20',
    'Corinne Bailey Rae - Put your records on// My chemical Romance - Sing//King Princess - Ohio',
  ],
  [
    '알쿨프리(ALKUL-free)',
    '21:20-21:40',
    'Earth, Wind & Fire - September//혁오 - 위잉위잉//백예린 - 스며들기 좋은 오늘',
  ],
];
export const PhoneCertDataTwo = [
  [
    '소리느낌31기',
    '18:00-18:20',
    ' 와인루프 - 무음모드// 이하이 - 손잡아 줘요//이무진- 신호등',
  ],
  [
    '밴드.jpg',
    '18:40-19:00',
    "Surl - 9지하철//너드커넥션 - 좋은 밤 좋은 꿈//My Chemical Romance - I don't love you",
  ],
  [
    '하너네는대학원오지마라',
    '19:00-19:20',
    'Life and time - exiv98//Life and time - 호랑이//로맨틱 펀치 - 토요일 밤이 좋아',
  ],
  [
    '김요일밴드',
    '19:20-19:40',
    '김요일밴드 - 외계사랑(3:07) //김요일밴드 - 태평양 저멀리(5:08) //김요일밴드 - 나를 떠나가는 님에게(2:36) //검정치마 - Plain Jane(2:34)',
  ],
  [
    '슬예생밴드',
    '19:40-20:00',
    'OneRepublic-counting stars//Bruno Mars - treasure//미도와 파라솔 - 비와당신',
  ],
];

export const GameTournamentData = [
  [
    '소리느낌31기',
    '4:40-4:47',
    ' 와인루프 - 무음모드// 이하이 - 손잡아 줘요//이무진- 신호등',
  ],
  [
    '(중간 휴식)',
    '4:47-4:54',
    "Surl - 9지하철//너드커넥션 - 좋은 밤 좋은 꿈//My Chemical Romance - I don't love you",
  ],
  [
    '하너네는대학원오지마라',
    '5:01-5:08',
    'Life and time - exiv98//Life and time - 호랑이//로맨틱 펀치 - 토요일 밤이 좋아',
  ],
  [
    '김요일밴드',
    '5:08-5:15',
    '김요일밴드 - 외계사랑(3:07) //김요일밴드 - 태평양 저멀리(5:08) //김요일밴드 - 나를 떠나가는 님에게(2:36) //검정치마 - Plain Jane(2:34)',
  ],
  [
    '슬예생밴드',
    '5:15-5:22',
    'OneRepublic-counting stars//Bruno Mars - treasure//미도와 파라솔 - 비와당신',
  ],
  [
    '소리느낌31기',
    '6:00-6:20',
    ' 와인루프 - 무음모드// 이하이 - 손잡아 줘요//이무진- 신호등',
  ],
  [
    '(중간 휴식)',
    '6:20-6:40',
    "Surl - 9지하철//너드커넥션 - 좋은 밤 좋은 꿈//My Chemical Romance - I don't love you",
  ],
  [
    '하너네는대학원오지마라',
    '7:00-7:20',
    'Life and time - exiv98//Life and time - 호랑이//로맨틱 펀치 - 토요일 밤이 좋아',
  ],
  [
    '김요일밴드',
    '7:20-7:40',
    '김요일밴드 - 외계사랑(3:07) //김요일밴드 - 태평양 저멀리(5:08) //김요일밴드 - 나를 떠나가는 님에게(2:36) //검정치마 - Plain Jane(2:34)',
  ],
  [
    '슬예생밴드',
    '7:40-8:00',
    'OneRepublic-counting stars//Bruno Mars - treasure//미도와 파라솔 - 비와당신 ',
  ],
];
