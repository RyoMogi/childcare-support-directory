export interface ProgramLink {
  title: string;
  url: string;
}

export interface ProgramGroup {
  id: string;
  level: "national" | "prefecture";
  municipality: string;
  category: "cash" | "cost" | "time" | "learning";
  title: string;
  shortValue: string;
  programs: ProgramLink[];
  feeSummary?: string;
  flowSummary?: string;
  timingText?: string;
  conditionText?: string;
  displayOrder?: number;
  benefitRateNote?: string;

  monthlyAmount?: number;
  annualAmount?: number;
  lumpSumAmount?: number;

  calculateMonthlyAmount?: (childrenAges: number[]) => number;
  calculateAnnualAmount?: (childrenAges: number[]) => number;
  calculateLumpSumAmount?: (childrenAges: number[]) => number;
}

// 都道府県リスト
export const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

function calculateChildAllowanceMonthly(childrenAges: number[]): number {
  const eligibleChildren = childrenAges
    .filter((age) => age >= 0 && age <= 18)
    .sort((a, b) => a - b);

  return eligibleChildren.reduce((sum, age, index) => {
    const childOrder = index + 1;

    if (childOrder >= 3) {
      return sum + 30000;
    }

    if (age <= 2) {
      return sum + 15000;
    }

    return sum + 10000;
  }, 0);
}

function calculate018SupportMonthly(childrenAges: number[]): number {
  return childrenAges.filter((age) => age >= 0 && age <= 18).length * 5000;
}

export const programGroups: ProgramGroup[] = [
  // ======================
  // 国
  // ======================
  {
  id: "national-child-allowance",
  level: "national",
  municipality: "国",
  category: "cash",
  title: "児童手当",
  shortValue: "0〜18歳の子どもに毎月支給",
  feeSummary: "月1万円〜3万円（第3子以降は増額）",
  flowSummary: "出生・転入後15日以内に市区町村へ申請",
  timingText: "0歳〜18歳到達後最初の3月31日まで",
  conditionText: "児童を養育している方が対象／公務員は勤務先に申請",
  calculateMonthlyAmount: calculateChildAllowanceMonthly,
  calculateAnnualAmount: (childrenAges) =>
    calculateChildAllowanceMonthly(childrenAges) * 12,
  programs: [
    {
      title: "児童手当",
      url: "https://www.cfa.go.jp/policies/kokoseido/jidouteate/annai",
    },
  ],
  displayOrder: 10,
},
  {
  id: "national-childcare-leave",
  level: "national",
  municipality: "国",
  category: "time",
  title: "育児休業・関連制度",
  shortValue: "育休、パパ育休、関連給付までまとめて確認できる",
  feeSummary: "育休中は給付・非課税・社会保険料免除により手取りの約8割相当になるケースあり",
  benefitRateNote:
    "育児休業給付金は原則67%（181日目以降50%）ですが、非課税で社会保険料も免除されるため、実質的には手取りの約8割相当になることがあります。",
  flowSummary: "勤務先へ申出 → 休業開始 → 勤務先経由で給付申請",
  timingText: "出生直後〜子が2歳ごろまで制度ごとに利用可",
  conditionText: "雇用労働者が対象／制度ごとに子の年齢や申出期限が異なる",
  programs: [
    {
      title: "育児休業",
      url: "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/childcare/",
    },
    {
      title: "産後パパ育休",
      url: "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/paternity/",
    },
    {
      title: "パパ・ママ育休プラス",
      url: "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/plus/",
    },
    {
      title: "育児休業給付金",
      url: "https://www.mhlw.go.jp/content/11600000/001461102.pdf",
    },
    {
      title: "出生時育児休業給付金",
      url: "https://jsite.mhlw.go.jp/kanagawa-hellowork/content/contents/001340093.pdf",
    },
    {
      title: "出生後休業支援給付金",
      url: "https://www.mhlw.go.jp/content/11600000/001372778.pdf",
    },
  ],
  displayOrder: 20,
},
{
  id: "national-short-working",
  level: "national",
  municipality: "国",
  category: "time",
  title: "短時間勤務制度",
  shortValue: "3歳未満の子がいる場合、短時間勤務が使える",
  feeSummary: "時短勤務中は条件により給付を受けられる場合あり",
  benefitRateNote:
    "2歳未満の子を養育する一定の雇用保険加入者は、育児時短就業給付金の対象になる場合があります。",
  flowSummary: "勤務先へ申出 → 制度利用開始",
  timingText: "3歳未満の子を養育中",
  conditionText: "一定の労働者が対象／業務によっては代替措置の場合あり",
  programs: [
    {
      title: "短時間勤務制度",
      url: "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/shortworking/",
    },
    {
      title: "育児時短就業給付金",
      url: "https://www.mhlw.go.jp/content/11600000/001394846.pdf",
    },
  ],
  displayOrder: 25,
},
{
  id: "national-child-nursing-leave",
  level: "national",
  municipality: "国",
  category: "time",
  title: "子の看護等休暇",
  shortValue: "子どもの看護・行事で休暇が取れる",
  feeSummary: "年5日（子2人以上で10日）／時間単位取得可",
  flowSummary: "勤務先へ申出（緊急時は事後でも可）",
  timingText: "小学3年生修了まで",
  conditionText: "病気・予防接種・学校行事などで取得可能",
  programs: [
    {
      title: "子の看護等休暇",
      url: "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/nursing/",
    },
  ],
  displayOrder: 26,
},
  {
  id: "national-birth-support",
  level: "national",
  municipality: "国",
  category: "cash",
  title: "出産時の給付",
  shortValue: "妊娠中から出産時にまとまった給付が受けられる",
  feeSummary: "出産育児一時金は原則50万円／妊婦支援給付は5万円＋こどもの人数×5万円",
  flowSummary: "市区町村窓口で申請 → 面談・相談 → 給付",
  timingText: "妊娠確認後から申請可／出産前後に段階的に給付",
  conditionText: "公的医療保険加入者や妊婦が対象／妊婦支援給付は住民票のある市区町村で申請",
  lumpSumAmount: 600000,
  programs: [
    {
      title: "出産育児一時金",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/shussan/index.html",
    },
    {
      title: "妊婦のための支援給付",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/be80930d-51d1-4084-aa3e-b80930646538/42e36027/20250325_policies_shussan-kosodate_52.pdf",
    },
  ],
  displayOrder: 40,
},
  {
  id: "national-free-childcare",
  level: "national",
  municipality: "国",
  category: "cost",
  title: "幼児教育・保育の無償化",
  shortValue: "3〜5歳は原則無償、0〜2歳は住民税非課税世帯が対象",
  feeSummary: "保育料・利用料が無料または上限内で無償化",
  flowSummary: "施設利用＋必要に応じて市町村で認定申請",
  timingText: "2019年10月開始／就学前まで",
  conditionText: "3〜5歳は全世帯、0〜2歳は住民税非課税世帯が中心／一部は保育の必要性認定が必要",
  programs: [
    {
      title: "幼児教育・保育の無償化",
      url: "https://www.cfa.go.jp/policies/kokoseido/mushouka",
    },
  ],
  displayOrder: 50,
},
  {
  id: "national-education-support",
  level: "national",
  municipality: "国",
  category: "cost",
  title: "高校生向け教育費支援",
  shortValue: "高校授業料と授業料以外の教育費を支援",
  feeSummary: "授業料支援＋給付金あり（制度・学校種で上限が異なる）",
  flowSummary: "学校経由または都道府県制度に沿って申請",
  timingText: "高校等在学中",
  conditionText: "国内在住の高校生等が対象／制度ごとに学校種や世帯年収要件あり",
  programs: [
    {
      title: "高等学校等就学支援金",
      url: "https://www.mext.go.jp/content/20260227-mxt_shuukyo03-100002595_2.pdf",
    },
    {
      title: "高校生等奨学給付金",
      url: "https://www.mext.go.jp/content/20260227-mxt_shuukyo03-100002595_4.pdf",
    },
  ],
  displayOrder: 60,
},

  // ======================
  // 佐賀県
  // ======================
  {
  id: "saga-fertility-support",
  level: "prefecture",
  municipality: "佐賀県",
  category: "cost",
  title: "不妊治療費助成",
  shortValue: "先進医療の自己負担を最大5万円まで助成",
  feeSummary: "先進医療費の7割、1回あたり上限5万円",
  flowSummary: "治療終了 → 書類準備 → 保健福祉事務所へ申請",
  timingText: "治療終了後3か月以内が原則",
  conditionText: "佐賀県在住の夫婦のいずれか／保険診療の生殖補助医療＋先進医療が対象",
  lumpSumAmount: 50000,
  programs: [
    {
      title: "佐賀県不妊治療（先進医療）費助成事業",
      url: "https://www.pref.saga.lg.jp/kiji00386676/index.html",
    },
  ],
  displayOrder: 10,
},

  // ======================
// 東京都
// ======================
{
  id: "tokyo-018-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cash",
  title: "018サポート",
  shortValue: "0〜18歳の子ども1人あたり月5,000円を給付",
  feeSummary: "月額5,000円、年間最大6万円",
  flowSummary: "新規申請 → 審査 → 年3回支給",
  timingText: "0歳〜18歳到達後最初の3月31日まで",
  conditionText: "都内在住の0〜18歳の子どもが対象／所得制限なし",
  calculateMonthlyAmount: calculate018SupportMonthly,
  calculateAnnualAmount: (childrenAges) =>
    calculate018SupportMonthly(childrenAges) * 12,
  programs: [
    {
      title: "018サポート",
      url: "https://018support.metro.tokyo.lg.jp/",
    },
  ],
  displayOrder: 10,
},
{
  id: "tokyo-reproductive-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "妊娠・出産の医療支援",
  shortValue: "不妊検査、不妊治療、無痛分娩などの費用負担を軽減",
  feeSummary: "制度ごとに上限あり（例：5万円、10万円、15万円など）",
  flowSummary: "対象医療を受ける → 証明書や領収書を準備 → 電子申請",
  timingText: "治療・出産後に申請期限あり",
  conditionText: "都内在住要件や年齢要件あり／制度ごとに対象が異なる",
  programs: [
    {
      title: "不妊検査等助成",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/shussan/funinkensa/gaiyou",
    },
    {
      title: "不妊治療費助成",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/kosodate/josei/funin-senshiniryou/gaiyou",
    },
    {
      title: "無痛分娩費用の助成",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/shussan/mutsubunben/subsidy",
    },
    {
      title: "卵子凍結時の助成",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/shussan/ranshitouketsu/touketsu/gaiyou",
    },
    {
      title: "凍結卵子を使用した生殖補助医療への助成",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/shussan/ranshitouketsu/shiyou/gaiyou",
    },
  ],
  displayOrder: 20,
},
{
  id: "tokyo-free-childcare",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "保育料等の無償化",
  shortValue: "第一子の保育料負担を実質無償化",
  feeSummary: "第一子の保育料負担を軽減・無償化",
  flowSummary: "対象施設を利用 → 区市町村で制度適用",
  timingText: "令和7年9月以降",
  conditionText: "認可保育所等を利用する世帯が対象／年齢・所得によらず対象",
  programs: [
    {
      title: "保育料等の無償化",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/mushouka",
    },
  ],
  displayOrder: 30,
},
{
  id: "tokyo-housing-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "住宅支援",
  shortValue: "結婚予定者や子育て世帯向けに住宅申込を優遇",
  feeSummary: "優先申込、優遇抽選、所得基準緩和あり",
  flowSummary: "募集確認 → 条件に応じて申込 → 抽選・審査",
  timingText: "定期募集・毎月募集あり",
  conditionText: "結婚予定者、若年夫婦、子育て世帯、ひとり親、多子世帯などが対象",
  programs: [
    {
      title: "結婚予定者のためのJKK住宅の提供",
      url: "https://www.to-kousya.or.jp/chintai/ouen/yuusen/konyaku/index.html",
    },
    {
      title: "都営住宅における子育て支援",
      url: "https://www.juutakuseisaku.metro.tokyo.lg.jp/toei_jutaku/kanri/bosyu/265toei5",
    },
  ],
  displayOrder: 40,
},
{
  id: "tokyo-metropolitan-university-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "都立大学等の授業料減免",
  shortValue: "都内子育て世帯の学生は授業料が実質無償化",
  feeSummary: "授業料全額免除",
  flowSummary: "学校で申請 → 審査 → 減免適用",
  timingText: "2024年度から実施",
  conditionText: "生計維持者が都内在住／所得制限なし／申請必要",
  programs: [
    {
      title: "都立大学等の新たな授業料減免制度",
      url: "https://www.soumu.metro.tokyo.lg.jp/08daigaku/jissitsu",
    },
  ],
  displayOrder: 50,
},
];

// 都道府県を選んだときに表示するデータ
export function getProgramsByPrefecture(prefecture: string): ProgramGroup[] {
  return programGroups.filter(
    (program) =>
      program.level === "national" || program.municipality === prefecture
  );
}

// UIカテゴリでフィルタリング
export function filterByCategory(
  programs: ProgramGroup[],
  categories: ("all" | "cash" | "cost" | "time" | "learning")[]
): ProgramGroup[] {
  if (categories.includes("all") || categories.length === 0) {
    return programs;
  }
  return programs.filter((program) => categories.includes(program.category));
}

export default programGroups;