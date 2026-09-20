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
  minChildAge?: number;
  maxChildAge?: number;
  betaVisible?: boolean;

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

// 現在、都県独自の制度を公開している地域
export const availablePrefectures = [
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
];

function calculateChildAllowanceMonthly(childrenAges: number[]): number {
  const eligibleChildren = childrenAges
    .filter((age) => age >= 0 && age <= 18)
    .sort((a, b) => b - a);

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
  benefitRateNote: "第3子以降の数え方には、保護者が生計費を負担している22歳年度末までの兄姉等が含まれる場合があります。この試算は入力された0〜18歳の子どものみで計算しています。",
  minChildAge: 0,
  maxChildAge: 18,
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
  minChildAge: 0,
  maxChildAge: 1,
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
  minChildAge: 0,
  maxChildAge: 2,
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
  minChildAge: 0,
  maxChildAge: 9,
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
  betaVisible: false,
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
  minChildAge: 0,
  maxChildAge: 5,
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
  minChildAge: 15,
  maxChildAge: 18,
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
  betaVisible: false,
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
  // 青森県
  // ======================
  {
    id: "aomori-childcare-passport",
    level: "prefecture",
    municipality: "青森県",
    category: "cost",
    title: "あおもり子育て応援パスポート",
    shortValue: "協賛店で割引や子育て向けサービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "Webで交付申請 → パスポートを協賛店で提示",
    timingText: "18歳未満の子どもがいる家庭",
    conditionText: "青森県内在住／店舗により子どもの同伴などが必要",
    minChildAge: 0,
    maxChildAge: 17,
    programs: [
      {
        title: "あおもり子育て応援パスポート",
        url: "https://kosodate.pref.aomori.jp/about/",
      },
    ],
    displayOrder: 10,
  },
  {
    id: "aomori-newborn-hearing-test",
    level: "prefecture",
    municipality: "青森県",
    category: "cost",
    title: "新生児聴覚検査",
    shortValue: "赤ちゃんのきこえを早期に確認",
    feeSummary: "費用負担・助成はお住まいの市町村に確認",
    flowSummary: "出産医療機関または市町村に確認 → 検査",
    timingText: "出生後まもなく",
    conditionText: "新生児が対象／検査・助成の扱いは地域や医療機関で異なる",
    minChildAge: 0,
    maxChildAge: 0,
    programs: [
      {
        title: "青森県の新生児聴覚検査・難聴児支援",
        url: "https://www.pref.aomori.lg.jp/soshiki/kenko/syofuku/nanchozisien.html",
      },
    ],
    displayOrder: 20,
  },

  // ======================
  // 岩手県
  // ======================
  {
    id: "iwate-babysitter-discount",
    level: "prefecture",
    municipality: "岩手県",
    category: "time",
    title: "ベビーシッター派遣事業",
    shortValue: "勤務先を通じてベビーシッター割引券を利用",
    feeSummary: "通常分は1枚2,200円、対象児童1人1日2枚まで（勤務先等の条件あり）",
    flowSummary: "勤務先が制度導入 → 割引券を申請 → 対象サービスを利用",
    timingText: "対象年齢・利用事由は制度要件を確認",
    conditionText: "割引券を導入する事業主等に雇用される労働者が対象",
    minChildAge: 0,
    maxChildAge: 9,
    programs: [
      {
        title: "ベビーシッター派遣事業",
        url: "https://www.pref.iwate.jp/kurashikankyou/kosodate/shien/1069934/index.html",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 宮城県
  // ======================
  {
    id: "miyagi-childcare-passport",
    level: "prefecture",
    municipality: "宮城県",
    category: "cost",
    title: "みやぎ子育て支援パスポート",
    shortValue: "協賛店で割引や子育て向けサービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "Webまたはアプリで登録 → 協賛店で提示",
    timingText: "18歳以下の子どもがいる家庭",
    conditionText: "宮城県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "みやぎ子育て支援パスポート",
        url: "https://www.pref.miyagi.jp/site/kosodate/passport.html",
      },
    ],
    displayOrder: 10,
  },
  {
    id: "miyagi-childcare-loan",
    level: "prefecture",
    municipality: "宮城県",
    category: "cost",
    title: "みやぎっこ応援ローン",
    shortValue: "子育て資金を優遇金利で借りられる",
    feeSummary: "融資額は最大500万円／金利・条件は取扱金融機関ごとに異なる",
    flowSummary: "取扱金融機関へ相談・申込み → 審査",
    timingText: "22歳以下の子どもを扶養する世帯（一定の例外あり）",
    conditionText: "宮城県内在住、安定収入など金融機関の融資基準あり",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "みやぎ子育て世帯支援総合融資「みやぎっこ応援ローン」",
        url: "https://www.pref.miyagi.jp/site/kosodate/support-miyagikko-loan.html",
      },
    ],
    displayOrder: 20,
  },

  // ======================
  // 秋田県
  // ======================
  {
    id: "akita-childcare-card",
    level: "prefecture",
    municipality: "秋田県",
    category: "cost",
    title: "あきた子育てふれあいカード",
    shortValue: "協賛店で割引などの優待サービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "アプリまたは窓口で交付 → 協賛店で提示",
    timingText: "中学3年生以下の子どもがいる家庭",
    conditionText: "秋田県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 15,
    programs: [
      {
        title: "あきた子育てふれあいカード",
        url: "https://common3.pref.akita.lg.jp/kosodate/yutai-info/about",
      },
    ],
    displayOrder: 10,
  },
  {
    id: "akita-childcare-fee-support",
    level: "prefecture",
    municipality: "秋田県",
    category: "cost",
    title: "保育料等の助成（すこやか子育て支援事業）",
    shortValue: "保育料や副食費の負担を軽減",
    feeSummary: "世帯・子どもの状況に応じて保育料等の一部または全額を助成",
    flowSummary: "お住まいの市町村で対象・申請方法を確認",
    timingText: "就学前の子どもが保育所等を利用中",
    conditionText: "所得やきょうだい数などの要件あり／助成内容は市町村で異なる",
    minChildAge: 0,
    maxChildAge: 5,
    programs: [
      {
        title: "すこやか子育て支援事業",
        url: "https://www.pref.akita.lg.jp/pages/archive/28393",
      },
    ],
    displayOrder: 20,
  },

  // ======================
  // 山形県
  // ======================
  {
    id: "yamagata-childcare-passport",
    level: "prefecture",
    municipality: "山形県",
    category: "cost",
    title: "やまがた子育て応援パスポート",
    shortValue: "協賛店で割引や子育て向けサービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "Webまたは窓口で交付 → 協賛店で提示",
    timingText: "18歳未満の子どもがいる家庭",
    conditionText: "山形県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 17,
    programs: [
      {
        title: "やまがた子育て応援パスポート",
        url: "https://www.pref.yamagata.jp/010001/kenfuku/kosodate/kosodatepass.html",
      },
    ],
    displayOrder: 10,
  },
  {
    id: "yamagata-baby-hot-station",
    level: "prefecture",
    municipality: "山形県",
    category: "time",
    title: "赤ちゃんほっと♡ステーション",
    shortValue: "外出先で授乳やおむつ替えができる",
    feeSummary: "登録施設のスペースを無料で利用",
    flowSummary: "県内の登録施設を検索 → 施設で利用",
    timingText: "赤ちゃんや小さな子どもとの外出時",
    conditionText: "授乳やおむつ替えが必要な親子が対象／設備は施設ごとに異なる",
    minChildAge: 0,
    maxChildAge: 3,
    programs: [
      {
        title: "赤ちゃんほっと♡ステーション",
        url: "https://www.pref.yamagata.jp/010001/r4baby-hotto-station.html",
      },
    ],
    displayOrder: 20,
  },

  // ======================
  // 福島県
  // ======================
  {
    id: "fukushima-famitan-card",
    level: "prefecture",
    municipality: "福島県",
    category: "cost",
    title: "ファミたんカード",
    shortValue: "協賛店で割引や子育て向けサービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "Webまたは窓口で交付 → 協賛店で提示",
    timingText: "18歳到達後最初の3月31日までの子どもがいる家庭",
    conditionText: "福島県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "ファミたんカード（子育て応援パスポート）",
        url: "https://www.pref.fukushima.lg.jp/sec/21055a/famitan.html",
      },
    ],
    displayOrder: 10,
  },
  {
    id: "fukushima-childcare-parking",
    level: "prefecture",
    municipality: "福島県",
    category: "time",
    title: "子育て応援駐車場",
    shortValue: "小さな子ども連れで優先駐車スペースを利用",
    feeSummary: "県内登録施設の対象駐車区画を利用",
    flowSummary: "対象施設と利用条件を確認 → 対象区画を利用",
    timingText: "小さな子どもと一緒に外出するとき",
    conditionText: "対象となる子どもの年齢や利用方法は施設の案内を確認",
    minChildAge: 0,
    maxChildAge: 5,
    programs: [
      {
        title: "子育て応援駐車場",
        url: "https://www.pref.fukushima.lg.jp/sec/21055a/kosodate-ouen.html",
      },
    ],
    displayOrder: 20,
  },

  // ======================
  // 茨城県
  // ======================
  {
    id: "ibaraki-kids-club",
    level: "prefecture",
    municipality: "茨城県",
    category: "cost",
    title: "いばらきKids Club",
    shortValue: "協賛店で割引や子育て向けサービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "市町村窓口または電子申請で取得 → 協賛店で提示",
    timingText: "18歳以下の子どもがいる家庭",
    conditionText: "茨城県内在住／店舗により子どもの同伴などが必要",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "いばらきKids Club（いばらき子育て家庭優待制度）",
        url: "https://www.kids.pref.ibaraki.jp/kids/guide/",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 栃木県
  // ======================
  {
    id: "tochigi-smile-card",
    level: "prefecture",
    municipality: "栃木県",
    category: "cost",
    title: "とちぎ笑顔つぎつぎカード",
    shortValue: "協賛店・施設で割引や特典を利用",
    feeSummary: "割引・特典内容は協賛店・施設ごとに異なる",
    flowSummary: "市町窓口または栃木県LINEで取得 → 協賛店で提示",
    timingText: "18歳になった後、最初の3月31日まで",
    conditionText: "栃木県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "とちぎ笑顔つぎつぎカード",
        url: "https://tocopo.pref.tochigi.lg.jp/card/",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 群馬県
  // ======================
  {
    id: "gunma-guchoki-passport",
    level: "prefecture",
    municipality: "群馬県",
    category: "cost",
    title: "ぐーちょきパスポート",
    shortValue: "協賛店で割引やプレゼントなどの優待を利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "県・市町村窓口または郵送で取得 → 協賛店で提示",
    timingText: "18歳になった年度の3月31日まで",
    conditionText: "群馬県内在住、または子どもが県内に通学・通園する家庭が対象",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "ぐーちょきパスポート",
        url: "https://smilelife.pref.gunma.jp/childrearing/passport/guchoki/",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 埼玉県
  // ======================
  {
    id: "saitama-papamama-support-shop",
    level: "prefecture",
    municipality: "埼玉県",
    category: "cost",
    title: "パパ・ママ応援ショップ",
    shortValue: "協賛店で割引などの優待サービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "LINE版または紙の優待カードを取得 → 協賛店で提示",
    timingText: "18歳になった後、最初の3月31日まで",
    conditionText: "埼玉県内の対象家庭が利用可／店舗ごとに利用条件あり",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "パパ・ママ応援ショップ（利用者向けFAQ）",
        url: "https://www.pref.saitama.lg.jp/a0607/ouen/papamamafaq-user.html",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 千葉県
  // ======================
  {
    id: "chiba-chipass",
    level: "prefecture",
    municipality: "千葉県",
    category: "cost",
    title: "子育て応援カード「チーパス」",
    shortValue: "協賛店で割引などの子育て応援サービスを利用",
    feeSummary: "割引・特典内容は協賛店ごとに異なる",
    flowSummary: "市町村窓口またはアプリで取得 → 協賛店で提示",
    timingText: "18歳になった後、最初の3月31日まで",
    conditionText: "千葉県内在住の子育て家庭が対象",
    minChildAge: 0,
    maxChildAge: 18,
    programs: [
      {
        title: "チーパス・スマイル",
        url: "https://chi-pass-smile.pref.chiba.lg.jp/Web/chipass/WP1401.aspx",
      },
    ],
    displayOrder: 10,
  },

  // ======================
  // 神奈川県
  // ======================
  {
    id: "kanagawa-childcare-passport",
    level: "prefecture",
    municipality: "神奈川県",
    category: "cost",
    title: "かながわ子育て応援パスポート",
    shortValue: "協力施設で割引や設備などのサービスを利用",
    feeSummary: "割引・特典・利用できる設備は協力施設ごとに異なる",
    flowSummary: "公式案内から利用登録 → 登録証を協力施設で提示",
    timingText: "12歳になった後、最初の3月31日まで",
    conditionText: "神奈川県内在住の対象家庭が利用可",
    minChildAge: 0,
    maxChildAge: 12,
    programs: [
      {
        title: "神奈川県の子育て支援案内",
        url: "https://www.pref.kanagawa.jp/docs/sy8/kosodateshien.html",
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
  minChildAge: 0,
  maxChildAge: 18,
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
  betaVisible: false,
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
  minChildAge: 0,
  maxChildAge: 5,
  programs: [
    {
      title: "保育料等の無償化",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/mushouka",
    },
  ],
  displayOrder: 30,
},
{
  id: "tokyo-babysitter-temporary-care",
  level: "prefecture",
  municipality: "東京都",
  category: "time",
  title: "ベビーシッター利用支援（一時預かり）",
  shortValue: "一時的に保育が必要なときの利用料負担を軽減",
  feeSummary: "補助額・利用上限は実施する区市町村によって異なる",
  flowSummary: "お住まいの区市町村で実施状況を確認 → 対象確認・申請 → 認定事業者を利用",
  timingText: "未就学児が基本（障害児や一部の待機児童は対象年齢の特例あり）",
  conditionText: "実施区市町村に住み、一時保育や共同保育が必要と認められた保護者が対象",
  minChildAge: 0,
  maxChildAge: 5,
  programs: [
    {
      title: "ベビーシッター利用支援事業（一時預かり利用支援）",
      url: "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/bsitijiazukari",
    },
  ],
  displayOrder: 35,
},
{
  id: "tokyo-housing-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "子育て世帯向け住宅支援",
  shortValue: "子育て世帯向けに都営住宅の申込を優遇",
  feeSummary: "優先申込、優遇抽選、所得基準緩和あり",
  flowSummary: "募集確認 → 条件に応じて申込 → 抽選・審査",
  timingText: "定期募集・毎月募集あり",
  conditionText: "子育て世帯、ひとり親、多子世帯などが対象／募集ごとに要件あり",
  minChildAge: 0,
  maxChildAge: 18,
  programs: [
    {
      title: "都営住宅における子育て支援",
      url: "https://www.juutakuseisaku.metro.tokyo.lg.jp/toei_jutaku/kanri/bosyu/265toei5",
    },
  ],
  displayOrder: 40,
},
{
  id: "tokyo-school-lunch-support",
  level: "prefecture",
  municipality: "東京都",
  category: "cost",
  title: "学校給食費の負担軽減",
  shortValue: "公立小・中学校等の給食費負担を軽減",
  feeSummary: "負担軽減の内容は学校・区市町村によって異なる",
  flowSummary: "通学先またはお住まいの区市町村の案内を確認",
  timingText: "公立小・中学校等に在学中",
  conditionText: "東京都が区市町村等の取組を支援／家庭からの申請が不要な場合あり",
  minChildAge: 6,
  maxChildAge: 15,
  programs: [
    {
      title: "東京都公立学校給食費負担軽減事業",
      url: "https://www.kyoiku.metro.tokyo.lg.jp/information/press/2024/07/2024071602",
    },
    {
      title: "東京都の子供・子育て支援策（令和8年度）",
      url: "https://www.spt.metro.tokyo.lg.jp/kodomoseisaku/book/202602-kanasasa-actionplan/pageindices/index42.html",
    },
  ],
  displayOrder: 45,
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
  minChildAge: 18,
  maxChildAge: 18,
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

// 子どもの年齢から、公開対象地域で関連する制度を絞り込む
export function getProgramsForFamily(
  prefecture: string,
  childrenAges: number[]
): ProgramGroup[] {
  return getProgramsByPrefecture(prefecture).filter((program) => {
    if (program.betaVisible === false) return false;
    if (program.minChildAge === undefined || program.maxChildAge === undefined) {
      return true;
    }

    return childrenAges.some(
      (age) => age >= program.minChildAge! && age <= program.maxChildAge!
    );
  });
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
