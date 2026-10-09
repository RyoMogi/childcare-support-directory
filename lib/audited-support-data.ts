// Generated from the audited master CSV on 2026-10-09.
// Edit the master data and regenerate this file instead of editing entries by hand.
import type { ProgramGroup } from "@/lib/support-data";

export const auditedPrefectures = [
  "北海道",
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
  "神奈川県"
] as const;

export const auditedPrefecturePrograms: ProgramGroup[] = [
  {
    "id": "audited-4bde2843bb",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "どさんこ・子育て特典制度",
    "shortValue": "協賛店舗でカードを提示すると、割引やプレゼントなど店舗ごとの特典を受けられる",
    "feeSummary": "協賛店舗でカードを提示すると、割引やプレゼントなど店舗ごとの特典を受けられる",
    "flowSummary": "市町村の母子保健・子育て支援担当窓口で、子どもの年齢等を確認できる書類を提示してカードを受け取る",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "北海道内在住で、18歳以下（18歳到達後最初の3月31日まで）の子どもがいる世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "どさんこ・子育て特典制度",
        "url": "https://hagukumu-hokkaido.com/parenting/dosanko-guide/"
      }
    ],
    "displayOrder": 100
  },
  {
    "id": "audited-ce3bcd1042",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "time",
    "title": "北海道における『こどもファスト・トラック』",
    "shortValue": "道立施設での優先案内、荷物運搬補助、優先駐車、授乳・おむつ替え場所の提供など",
    "feeSummary": "道立施設での優先案内、荷物運搬補助、優先駐車、授乳・おむつ替え場所の提供など",
    "flowSummary": "申請不要。対象施設で利用",
    "conditionText": "妊娠中の方または子ども連れの方",
    "programs": [
      {
        "title": "北海道における『こどもファスト・トラック』",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/156806.html"
      }
    ],
    "displayOrder": 101
  },
  {
    "id": "audited-fb40538b02",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "time",
    "title": "北海道赤ちゃんのほっとステーション",
    "shortValue": "登録施設の授乳・搾乳場所やおむつ替え設備を検索・利用できる",
    "feeSummary": "登録施設の授乳・搾乳場所やおむつ替え設備を検索・利用できる",
    "flowSummary": "申請不要。公式検索ページで施設を確認して利用",
    "timingText": "0歳〜3歳が目安",
    "conditionText": "乳幼児を連れて外出する家庭",
    "minChildAge": 0,
    "maxChildAge": 3,
    "programs": [
      {
        "title": "北海道赤ちゃんのほっとステーション",
        "url": "https://hagukumu-hokkaido.com/hot-station/"
      }
    ],
    "displayOrder": 102
  },
  {
    "id": "audited-242b958441",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "time",
    "title": "北海道妊婦・子育て世帯優先マーク『こもりん』",
    "shortValue": "マーク掲示施設で、優先駐車、優先案内、優先レジなど登録施設ごとのサービスを利用できる",
    "feeSummary": "マーク掲示施設で、優先駐車、優先案内、優先レジなど登録施設ごとのサービスを利用できる",
    "flowSummary": "利用者側の申請は不要。マーク掲示施設でサービス内容を確認",
    "timingText": "0歳〜3歳が目安",
    "conditionText": "概ね3歳未満の乳幼児と外出する世帯など",
    "minChildAge": 0,
    "maxChildAge": 3,
    "programs": [
      {
        "title": "北海道妊婦・子育て世帯優先マーク『こもりん』",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/mark.html"
      }
    ],
    "displayOrder": 103
  },
  {
    "id": "audited-1af0c22f91",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "learning",
    "title": "お父さん応援講座",
    "shortValue": "家事・子育て、子どもとの接し方などを学ぶ講座への講師派遣費用が無料",
    "feeSummary": "家事・子育て、子どもとの接し方などを学ぶ講座への講師派遣費用が無料",
    "flowSummary": "企業・団体、市町村等が市町村担当課を通じて道へ講師派遣を申請",
    "conditionText": "子育て中またはこれから父親になる男性。子どもや母親も同席可",
    "programs": [
      {
        "title": "お父さん応援講座",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/otousankouza.html"
      }
    ],
    "displayOrder": 104
  },
  {
    "id": "audited-3b212527db",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "乳幼児等医療給付事業",
    "shortValue": "医療費自己負担の一部を助成。道基準では原則1割負担で月額上限あり",
    "feeSummary": "医療費自己負担の一部を助成。道基準では原則1割負担で月額上限あり",
    "flowSummary": "居住市町村の窓口へ申請",
    "timingText": "0歳〜12歳が目安",
    "conditionText": "就学前の子ども（通院・入院）および小学生（入院）。市町村により拡大あり",
    "minChildAge": 0,
    "maxChildAge": 12,
    "programs": [
      {
        "title": "乳幼児等医療給付事業",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_nyuuyoujiiryou.html"
      }
    ],
    "displayOrder": 105
  },
  {
    "id": "audited-cbafe17298",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "ひとり親家庭等医療給付事業",
    "shortValue": "子どもの通院・入院、親の入院にかかる医療費自己負担の一部を助成",
    "feeSummary": "子どもの通院・入院、親の入院にかかる医療費自己負担の一部を助成",
    "flowSummary": "居住市町村の窓口へ申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "ひとり親家庭等の20歳未満の子ども、およびひとり親家庭等の親",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等医療給付事業",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_hitorioyairyou.html"
      }
    ],
    "displayOrder": 106
  },
  {
    "id": "audited-a8213480cb",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "未熟児養育医療給付事業",
    "shortValue": "指定医療機関での入院治療にかかる自己負担を助成（所得に応じた負担あり）",
    "feeSummary": "指定医療機関での入院治療にかかる自己負担を助成（所得に応じた負担あり）",
    "flowSummary": "居住市町村の窓口へ申請",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "出生体重2,000グラム以下、または医師が入院を必要と認めた未熟児",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "未熟児養育医療給付事業",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_mijyukujiiryou.html"
      }
    ],
    "displayOrder": 107
  },
  {
    "id": "audited-c0a685b794",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成制度",
    "shortValue": "対象疾病の医療費自己負担の一部を助成し、所得等に応じた月額上限を設定",
    "feeSummary": "対象疾病の医療費自己負担の一部を助成し、所得等に応じた月額上限を設定",
    "flowSummary": "支給認定申請書、医療意見書、世帯調書などを管轄窓口へ提出",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "北海道（札幌市・旭川市・函館市を除く）在住で、対象疾病の認定基準を満たす18歳未満の子ども。継続の場合は20歳未満まで",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成制度",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kth/kak/tokusitu/syoumanniryohijosei.html"
      }
    ],
    "displayOrder": 108
  },
  {
    "id": "audited-39a5267aa3",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "重度心身障害者医療給付事業",
    "shortValue": "医療保険適用後の自己負担の一部を助成",
    "feeSummary": "医療保険適用後の自己負担の一部を助成",
    "flowSummary": "居住市町村の窓口へ申請",
    "conditionText": "重度の心身障がいがある人。具体的要件は市町村基準による",
    "programs": [
      {
        "title": "重度心身障害者医療給付事業",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_jyuudoiryou.html"
      }
    ],
    "displayOrder": 109
  },
  {
    "id": "audited-ecea523d4e",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "time",
    "title": "ひとり親家庭等への家庭生活支援員の派遣",
    "shortValue": "掃除・買物等の生活援助、乳幼児の保育・食事の世話等。所得区分により無料または低額",
    "feeSummary": "掃除・買物等の生活援助、乳幼児の保育・食事の世話等。所得区分により無料または低額",
    "flowSummary": "実施している市町村の窓口へ問い合わせ・申請",
    "conditionText": "一時的に介護・保育等が必要、または生活環境の変化で日常生活に支障があるひとり親家庭等",
    "programs": [
      {
        "title": "ひとり親家庭等への家庭生活支援員の派遣",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_hitorioya_haken.html"
      }
    ],
    "displayOrder": 110
  },
  {
    "id": "audited-c57ee14141",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cash",
    "title": "自立支援教育訓練給付金",
    "shortValue": "指定講座の受講費用の約60%（12,001円以上、上限20万円）",
    "feeSummary": "指定講座の受講費用の約60%（12,001円以上、上限20万円）",
    "flowSummary": "道の総合振興局・振興局の社会福祉課または各市福祉事務所へ事前相談・申請",
    "conditionText": "母子・父子自立支援プログラム等の支援を受け、指定講座の受講が就職に必要と認められるひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金",
        "url": "https://hagukumu-hokkaido.com/parenting/single/"
      }
    ],
    "displayOrder": 111
  },
  {
    "id": "audited-8d368113d0",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cash",
    "title": "高等職業訓練促進給付金等",
    "shortValue": "訓練期間中は月額70,500円または100,000円、最後の12か月は月4万円加算。修了時給付あり",
    "feeSummary": "訓練期間中は月額70,500円または100,000円、最後の12か月は月4万円加算。修了時給付あり",
    "flowSummary": "道の総合振興局・振興局の社会福祉課または各市福祉事務所へ相談・申請",
    "conditionText": "児童扶養手当受給者と同等の所得水準などの要件を満たし、対象資格の養成課程で修業するひとり親",
    "programs": [
      {
        "title": "高等職業訓練促進給付金等",
        "url": "https://hagukumu-hokkaido.com/parenting/single/"
      }
    ],
    "displayOrder": 112
  },
  {
    "id": "audited-b4e7d40293",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cash",
    "title": "高等学校卒業程度認定試験合格支援給付金",
    "shortValue": "通学等の場合、開始時・修了時・合格時を合わせ最大30万円",
    "feeSummary": "通学等の場合、開始時・修了時・合格時を合わせ最大30万円",
    "flowSummary": "道の総合振興局・振興局の社会福祉課または各市福祉事務所へ相談・申請",
    "conditionText": "母子・父子自立支援プログラム等の支援を受け、高卒認定取得が就職に必要と認められるひとり親家庭の親または子",
    "programs": [
      {
        "title": "高等学校卒業程度認定試験合格支援給付金",
        "url": "https://hagukumu-hokkaido.com/parenting/single/"
      }
    ],
    "displayOrder": 113
  },
  {
    "id": "audited-d68d97a250",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "learning",
    "title": "母子家庭等就業・自立支援センター",
    "shortValue": "就業相談、技能習得、求人情報、地域生活・養育費相談、無料法律相談など",
    "feeSummary": "就業相談、技能習得、求人情報、地域生活・養育費相談、無料法律相談など",
    "flowSummary": "居住地域を担当するセンターへ電話等で相談",
    "conditionText": "ひとり親家庭の親など",
    "programs": [
      {
        "title": "母子家庭等就業・自立支援センター",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/sienseido_boshikatei_center.html"
      }
    ],
    "displayOrder": 114
  },
  {
    "id": "audited-f9d4595cf4",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "learning",
    "title": "母子・父子自立支援員",
    "shortValue": "生活、就業、資格取得、貸付など自立に必要な情報提供と相談支援",
    "feeSummary": "生活、就業、資格取得、貸付など自立に必要な情報提供と相談支援",
    "flowSummary": "道の総合振興局・振興局の社会福祉課または各市福祉事務所へ相談",
    "conditionText": "母子家庭、父子家庭、寡婦",
    "programs": [
      {
        "title": "母子・父子自立支援員",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/single.html"
      }
    ],
    "displayOrder": 115
  },
  {
    "id": "audited-2d983dd329",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "time",
    "title": "母子生活支援施設",
    "shortValue": "子どもと一緒に居住しながら、生活、育児、就業、自立に向けた支援を受けられる",
    "feeSummary": "子どもと一緒に居住しながら、生活、育児、就業、自立に向けた支援を受けられる",
    "flowSummary": "市在住者は市役所、町村在住者は総合振興局・振興局の社会福祉課へ相談",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "18歳未満の子どもを養育し、生活上の事情から養育に困難を抱える母子家庭等",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "母子生活支援施設",
        "url": "https://hagukumu-hokkaido.com/parenting/single/"
      }
    ],
    "displayOrder": 116
  },
  {
    "id": "audited-55869a6e31",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "母子父子寡婦福祉資金貸付金",
    "shortValue": "修学、技能習得、就職、医療、生活、住宅、転宅などの資金を無利子または低利で貸付",
    "feeSummary": "修学、技能習得、就職、医療、生活、住宅、転宅などの資金を無利子または低利で貸付",
    "flowSummary": "道の総合振興局・振興局の社会福祉課へ相談・申請（3市は各市窓口）",
    "conditionText": "母子家庭、父子家庭、寡婦など。札幌市・旭川市・函館市は各市が実施",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金貸付金",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/kashitsuke.html"
      }
    ],
    "displayOrder": 117
  },
  {
    "id": "audited-b0693f1b20",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "ひとり親のための住宅支援資金貸付事業",
    "shortValue": "家賃実費を月7万円まで、12か月以内、無利子で貸付。就業継続等で返還免除あり",
    "feeSummary": "家賃実費を月7万円まで、12か月以内、無利子で貸付。就業継続等で返還免除あり",
    "flowSummary": "北海道母子寡婦福祉連合会へ必要書類を提出",
    "conditionText": "児童扶養手当を受給し、母子・父子自立支援プログラムの策定を受けた道内（札幌市を除く）のひとり親",
    "programs": [
      {
        "title": "ひとり親のための住宅支援資金貸付事業",
        "url": "https://www.pref.hokkaido.lg.jp/hf/kms/zyutakushien.html"
      }
    ],
    "displayOrder": 118
  },
  {
    "id": "audited-db3f6c8dae",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "道営住宅の子育て世帯等向け優先入居",
    "shortValue": "一般世帯とは別の募集枠や抽選上の優遇により、道営住宅へ優先的に入居できる機会",
    "feeSummary": "一般世帯とは別の募集枠や抽選上の優遇により、道営住宅へ優先的に入居できる機会",
    "flowSummary": "各地域の道営住宅募集に合わせ、担当窓口または対応地域では電子申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "道営住宅の入居要件を満たす18歳未満同居世帯、多子世帯、母子・父子世帯など",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "道営住宅の子育て世帯等向け優先入居",
        "url": "https://www.pref.hokkaido.lg.jp/kn/jtk/jtop/kannri/tokumokunyukyo.html"
      }
    ],
    "displayOrder": 119
  },
  {
    "id": "audited-94ddb0dc36",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cost",
    "title": "私立高等学校等授業料軽減制度（北海道の制度）",
    "shortValue": "国の就学支援金に上乗せして月額最大2,000円を授業料等に充当",
    "feeSummary": "国の就学支援金に上乗せして月額最大2,000円を授業料等に充当",
    "flowSummary": "在籍校を通じて申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "道内の対象私立高校等に在籍し、保護者等の年収目安が約590万円未満の生徒",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "私立高等学校等授業料軽減制度（北海道の制度）",
        "url": "https://www.pref.hokkaido.lg.jp/sm/gkj/260022.html"
      }
    ],
    "displayOrder": 120
  },
  {
    "id": "audited-b8f5042f83",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cash",
    "title": "奨学のための給付金（私立高校等）",
    "shortValue": "授業料以外の教育費に充てる返済不要の年額給付金",
    "feeSummary": "授業料以外の教育費に充てる返済不要の年額給付金",
    "flowSummary": "道内校は学校へ提出。道外校は北海道へ郵送等で申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者等が北海道内に住み、私立高校等に通う生徒がいる生活保護世帯または所得基準を満たす世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "奨学のための給付金（私立高校等）",
        "url": "https://www.pref.hokkaido.lg.jp/sm/gkj/gakuji-hp/190806.html"
      }
    ],
    "displayOrder": 121
  },
  {
    "id": "audited-9e4c9f0c03",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "cash",
    "title": "北海道公立高校生等奨学給付金",
    "shortValue": "授業料以外の教育費に充てる返済不要の給付金",
    "feeSummary": "授業料以外の教育費に充てる返済不要の給付金",
    "flowSummary": "道内校は在籍校へ申請。道外校は北海道教育委員会へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者等が北海道内に住み、国公立高校等に通う生徒がいる所得基準内の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "北海道公立高校生等奨学給付金",
        "url": "https://www.dokyoi.pref.hokkaido.lg.jp/hk/kki/syougakukyuufukin.html"
      }
    ],
    "displayOrder": 122
  },
  {
    "id": "audited-f18316595f",
    "level": "prefecture",
    "municipality": "北海道",
    "category": "learning",
    "title": "子どもの相談窓口（北海道公式案内）",
    "shortValue": "児童家庭支援センター、児童相談所、家庭児童相談室、教育相談等の窓口を案内",
    "feeSummary": "児童家庭支援センター、児童相談所、家庭児童相談室、教育相談等の窓口を案内",
    "flowSummary": "相談内容に合う窓口へ電話・来所等で相談",
    "conditionText": "子どもの養育、発達、学校生活、家庭環境などに悩みがある保護者・家庭",
    "programs": [
      {
        "title": "子どもの相談窓口（北海道公式案内）",
        "url": "https://hagukumu-hokkaido.com/consultation/"
      }
    ],
    "displayOrder": 123
  },
  {
    "id": "audited-15858f8926",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "あおもり子育て応援パスポート",
    "shortValue": "全国・県内の協賛店で割引や子育てサービスを利用",
    "feeSummary": "全国・県内の協賛店で割引や子育てサービスを利用",
    "flowSummary": "公式サイトから交付申請し、発行された電子パスポートを提示",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "青森県内在住で18歳未満の子どもがいる家庭（妊婦のいる家庭も対象）",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "あおもり子育て応援パスポート",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/kosodateouenpassport.html"
      }
    ],
    "displayOrder": 124
  },
  {
    "id": "audited-7f4ed04693",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "学校給食費無償化等子育て支援市町村交付金による小中学校給食費無償化",
    "shortValue": "県の交付金等を活用し、全40市町村で学校給食費を無償化",
    "feeSummary": "県の交付金等を活用し、全40市町村で学校給食費を無償化",
    "flowSummary": "原則として学校・市町村が実施。個別手続きの有無は居住市町村へ確認",
    "timingText": "6歳〜15歳が目安",
    "conditionText": "県内の市町村立小中学校等に通う子どもの保護者",
    "minChildAge": 6,
    "maxChildAge": 15,
    "programs": [
      {
        "title": "学校給食費無償化等子育て支援市町村交付金による小中学校給食費無償化",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/R7gakkoukyuushokuhi.html"
      }
    ],
    "displayOrder": 125
  },
  {
    "id": "audited-f0d0d5f6fd",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "18歳までのこども医療費無償化",
    "shortValue": "子どもの保険診療の自己負担を市町村が助成。2025年度に全市町村で18歳までの無償化を達成",
    "feeSummary": "子どもの保険診療の自己負担を市町村が助成。2025年度に全市町村で18歳までの無償化を達成",
    "flowSummary": "居住市町村へ受給資格登録・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内に住所がある18歳年度末までの子ども（所得・給付方式等は市町村確認）",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "18歳までのこども医療費無償化",
        "url": "https://www.pref.aomori.lg.jp/message/kaiken/kaiken20260401.html"
      }
    ],
    "displayOrder": 126
  },
  {
    "id": "audited-121544a918",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "0～2歳児の保育料無償化（市町村実施）",
    "shortValue": "保育料を無償化。2026年4月時点で34市町村が完全無償化",
    "feeSummary": "保育料を無償化。2026年4月時点で34市町村が完全無償化",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で対象となる0～2歳児の保育利用世帯",
    "minChildAge": 0,
    "maxChildAge": 2,
    "programs": [
      {
        "title": "0～2歳児の保育料無償化（市町村実施）",
        "url": "https://www.pref.aomori.lg.jp/message/kaiken/kaiken20260401.html"
      }
    ],
    "displayOrder": 127
  },
  {
    "id": "audited-ee63981096",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "保育所等副食費無償化（市町村実施）",
    "shortValue": "保育所等の副食費を無償化。2026年4月時点で29市町村が完全無償化",
    "feeSummary": "保育所等の副食費を無償化。2026年4月時点で29市町村が完全無償化",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "3歳〜5歳が目安",
    "conditionText": "実施市町村で対象となる保育所・認定こども園等の利用世帯",
    "minChildAge": 3,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "保育所等副食費無償化（市町村実施）",
        "url": "https://www.pref.aomori.lg.jp/message/kaiken/kaiken20260401.html"
      }
    ],
    "displayOrder": 128
  },
  {
    "id": "audited-197b9275ac",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "time",
    "title": "あおもりキッズシッター利用支援事業",
    "shortValue": "年120時間まで、原則自己負担400円/時となるよう補助（上限2,100円/時）。夜間・休日・病時加算…",
    "feeSummary": "年120時間まで、原則自己負担400円/時となるよう補助（上限2,100円/時）。夜間・休日・病時加算、非課税世帯加算あり",
    "flowSummary": "県認証事業者を利用後、利用月翌月初日から3か月以内に事務センターへ郵送またはメール申請",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "利用日に子どもと県内在住で、一時保育または共同保育を必要とする就学前児童の保護者",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "あおもりキッズシッター利用支援事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/kidssitter-shien.html"
      }
    ],
    "displayOrder": 129
  },
  {
    "id": "audited-19e0c673c4",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "time",
    "title": "青森県こどもオンライン診療",
    "shortValue": "毎日6時～20時にスマートフォン等で診療・処方を受けられる。診療費は市町村のこども医療費助成の対象",
    "feeSummary": "毎日6時～20時にスマートフォン等で診療・処方を受けられる。診療費は市町村のこども医療費助成の対象",
    "flowSummary": "県民専用申込サイトで保険証・支払方法等を登録して受診",
    "timingText": "4歳〜18歳が目安",
    "conditionText": "青森県に住所がある4歳から18歳年度末までの子ども",
    "minChildAge": 4,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "青森県こどもオンライン診療",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/online_consultation.html"
      }
    ],
    "displayOrder": 130
  },
  {
    "id": "audited-49e17c9de7",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "新生児聴覚検査・難聴児支援",
    "shortValue": "出生後の聴覚検査、要精密検査後の相談・療育支援。検査費助成は市町村による",
    "feeSummary": "出生後の聴覚検査、要精密検査後の相談・療育支援。検査費助成は市町村による",
    "flowSummary": "出産医療機関または居住市町村へ確認",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "新生児および新生児聴覚検査で難聴または疑いとなった子どもと家族",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "新生児聴覚検査・難聴児支援",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kenko/syofuku/nanchozisien.html"
      }
    ],
    "displayOrder": 131
  },
  {
    "id": "audited-36332ff3b2",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費等助成事業",
    "shortValue": "補聴器の購入・修理費用の一部を助成",
    "feeSummary": "補聴器の購入・修理費用の一部を助成",
    "flowSummary": "居住市町村の障害福祉担当課へ申請",
    "conditionText": "身体障害者手帳の対象外となる軽度・中等度難聴児など、所定の要件を満たす子ども",
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費等助成事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kenko/syofuku/nanchozisien.html"
      }
    ],
    "displayOrder": 132
  },
  {
    "id": "audited-b370cdd62c",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成制度",
    "shortValue": "指定医療機関での対象疾病の医療費自己負担を軽減",
    "feeSummary": "指定医療機関での対象疾病の医療費自己負担を軽減",
    "flowSummary": "管轄保健所等へ支給認定申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "対象疾病の認定基準を満たす18歳未満の子ども（継続認定は20歳未満）。青森市・八戸市を除く県管轄地域",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成制度",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kenko/ganseikatsu/newshouman.html"
      }
    ],
    "displayOrder": 133
  },
  {
    "id": "audited-4a38e7bb5a",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "ひとり親家庭等医療費助成事業",
    "shortValue": "子どもと父または母の医療費を軽減。内容は市町村により異なる場合あり",
    "feeSummary": "子どもと父または母の医療費を軽減。内容は市町村により異なる場合あり",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭等の親と18歳年度末までの子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等医療費助成事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 134
  },
  {
    "id": "audited-26287ac1e2",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・保育サービス",
    "feeSummary": "家庭生活支援員による生活援助・保育サービス",
    "flowSummary": "実施市町村で事前手続き・申請",
    "conditionText": "病気、就職活動等で一時的に生活援助や保育を必要とするひとり親家庭等",
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 135
  },
  {
    "id": "audited-a1b189651d",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金",
    "shortValue": "修学・修業・医療介護・生活・住宅など12種類の資金を無利子または低利で貸付",
    "feeSummary": "修学・修業・医療介護・生活・住宅など12種類の資金を無利子または低利で貸付",
    "flowSummary": "県福祉事務所へ相談・申請（青森市・八戸市は各市）",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/boshifushikahushikin.html"
      }
    ],
    "displayOrder": 136
  },
  {
    "id": "audited-4cf7b9a82d",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "ひとり親家庭の教育訓練給付費補助金",
    "shortValue": "指定教育訓練講座の受講費用の一部を助成",
    "feeSummary": "指定教育訓練講座の受講費用の一部を助成",
    "flowSummary": "県福祉事務所へ事前相談・申請。市部は各市へ確認",
    "conditionText": "県内の町村に居住し、事前相談等の要件を満たすひとり親",
    "programs": [
      {
        "title": "ひとり親家庭の教育訓練給付費補助金",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 137
  },
  {
    "id": "audited-44826c8b08",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "ひとり親家庭の高等職業訓練促進費等補助金",
    "shortValue": "修業期間中の一定期間、毎月一定額等を給付",
    "feeSummary": "修業期間中の一定期間、毎月一定額等を給付",
    "flowSummary": "県福祉事務所へ事前相談・申請。市部は各市へ確認",
    "conditionText": "県内の町村に居住し、対象資格の養成課程で修業するなどの要件を満たすひとり親",
    "programs": [
      {
        "title": "ひとり親家庭の高等職業訓練促進費等補助金",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 138
  },
  {
    "id": "audited-54b387bbe5",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "ひとり親家庭高等学校卒業程度認定試験合格支援事業",
    "shortValue": "高卒認定試験対策講座の受講費用の一部を助成",
    "feeSummary": "高卒認定試験対策講座の受講費用の一部を助成",
    "flowSummary": "県福祉事務所へ事前相談・申請。市部は各市へ確認",
    "conditionText": "県内の町村に居住し、事前に対象講座の指定を受けるなどの要件を満たすひとり親またはその子ども",
    "programs": [
      {
        "title": "ひとり親家庭高等学校卒業程度認定試験合格支援事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 139
  },
  {
    "id": "audited-db5345644b",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "learning",
    "title": "母子家庭等就業・自立支援センター事業",
    "shortValue": "就業相談、就業支援講習、就業支援バンク等",
    "feeSummary": "就業相談、就業支援講習、就業支援バンク等",
    "flowSummary": "青森県母子寡婦福祉連合会のセンターへ相談",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子家庭等就業・自立支援センター事業",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/f-hitorioya1.html"
      }
    ],
    "displayOrder": 140
  },
  {
    "id": "audited-bb55eaeba0",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cash",
    "title": "青森県養育費確保支援事業補助金",
    "shortValue": "公正証書作成費用（上限3万円）など、養育費の取り決め・履行確保に要した費用を区分ごとに補助",
    "feeSummary": "公正証書作成費用（上限3万円）など、養育費の取り決め・履行確保に要した費用を区分ごとに補助",
    "flowSummary": "必要書類を県へ提出。補助区分ごとの期限あり",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "県内在住で養育費の対象となる20歳未満の児童を扶養するひとり親",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "青森県養育費確保支援事業補助金",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/youikuhijosei.html"
      }
    ],
    "displayOrder": 141
  },
  {
    "id": "audited-c03070ef01",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "ひとり親家庭住宅支援資金貸付",
    "shortValue": "家賃の実費を月額上限7万円、原則12か月まで無利子貸付。一定の就業継続等で償還免除の場合あり",
    "feeSummary": "家賃の実費を月額上限7万円、原則12か月まで無利子貸付。一定の就業継続等で償還免除の場合あり",
    "flowSummary": "青森県社会福祉協議会等の窓口へ相談・申請",
    "conditionText": "自立に向けて取り組む児童扶養手当受給者等で、住居費を負担するひとり親家庭",
    "programs": [
      {
        "title": "ひとり親家庭住宅支援資金貸付",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/hitorioyaguidebook.html"
      }
    ],
    "displayOrder": 142
  },
  {
    "id": "audited-284bfce836",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "県営住宅の子育て世帯優先入居",
    "shortValue": "一般募集で抽選倍率を2倍として優遇（2024年4月以降）。世帯状況等により家賃減免制度あり",
    "feeSummary": "一般募集で抽選倍率を2倍として優遇（2024年4月以降）。世帯状況等により家賃減免制度あり",
    "flowSummary": "募集期間中に指定管理者等へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "18歳以下の子どもがいるなど、県営住宅の入居要件を満たす子育て世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅の子育て世帯優先入居",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kendo/kenju/kenneizyuutaku.html"
      }
    ],
    "displayOrder": 143
  },
  {
    "id": "audited-a7d7b9d7f7",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "青森県高校生等奨学給付金（公立）",
    "shortValue": "授業料以外の教育費負担を軽減する返還不要の給付金",
    "feeSummary": "授業料以外の教育費負担を軽減する返還不要の給付金",
    "flowSummary": "在学校または県教育委員会へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者等が県内在住し、生活保護受給世帯または住民税所得割非課税世帯等の高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "青森県高校生等奨学給付金（公立）",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kyoiku/e-shisetsu/shougakukyuufukin.html"
      }
    ],
    "displayOrder": 144
  },
  {
    "id": "audited-05a5eabf27",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "私立高等学校等入学金軽減補助",
    "shortValue": "入学金の負担を県独自に軽減",
    "feeSummary": "入学金の負担を県独自に軽減",
    "flowSummary": "在学校を通じて手続き",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "県内私立高校等に入学し、所得等の要件を満たす生徒の保護者",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "私立高等学校等入学金軽減補助",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kenmin/Aomori_syugakushien.html"
      }
    ],
    "displayOrder": 145
  },
  {
    "id": "audited-9eea289e09",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "青森県高校生等奨学給付金（私立）",
    "shortValue": "授業料以外の教育費負担を軽減する返還不要の給付金",
    "feeSummary": "授業料以外の教育費負担を軽減する返還不要の給付金",
    "flowSummary": "在学校または県担当課へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者等が県内在住し、生活保護受給世帯または住民税所得割非課税世帯等の私立高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "青森県高校生等奨学給付金（私立）",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kenmin/Aomori_syugakushien.html"
      }
    ],
    "displayOrder": 146
  },
  {
    "id": "audited-a186b08043",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "青森県育英奨学金（高等学校等）",
    "shortValue": "修学資金を無利子で貸与",
    "feeSummary": "修学資金を無利子で貸与",
    "flowSummary": "在学校を通じて申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内に住所を有し、学業・人物・家計等の要件を満たす高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "青森県育英奨学金（高等学校等）",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kyoiku/e-kyoin/koukoushougakukin-taiyo.html"
      }
    ],
    "displayOrder": 147
  },
  {
    "id": "audited-51196f976d",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "cost",
    "title": "大学入学時奨学金",
    "shortValue": "大学等の入学時費用を貸与。卒業後に県内居住・就業を3年間継続するなどの要件で償還免除",
    "feeSummary": "大学等の入学時費用を貸与。卒業後に県内居住・就業を3年間継続するなどの要件で償還免除",
    "flowSummary": "県教育委員会へ募集期間内に申請",
    "timingText": "17歳〜18歳が目安",
    "conditionText": "保護者が県内在住で家計基準等を満たし、大学等への入学を予定する人",
    "minChildAge": 17,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "大学入学時奨学金",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kyoiku/e-kyoin/daigakunyuugakuzi_shougakukin.html"
      }
    ],
    "displayOrder": 148
  },
  {
    "id": "audited-dd8cffc14a",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "learning",
    "title": "あおもり親楽プログラム",
    "shortValue": "子どもの理解や親の関わり方を参加型で学べる教材・講座",
    "feeSummary": "子どもの理解や親の関わり方を参加型で学べる教材・講座",
    "flowSummary": "教材を利用、または青森県総合社会教育センターへ講師派遣等を相談",
    "conditionText": "乳幼児、小学生、中高生の保護者や家庭教育支援者",
    "programs": [
      {
        "title": "あおもり親楽プログラム",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kyoiku/e-shogai/aomori_oyagaku_program.html"
      }
    ],
    "displayOrder": 149
  },
  {
    "id": "audited-19308da50d",
    "level": "prefecture",
    "municipality": "青森県",
    "category": "learning",
    "title": "子ども・若者相談支援機関マップ",
    "shortValue": "県内の相談・支援機関を分野・地域から探せる",
    "feeSummary": "県内の相談・支援機関を分野・地域から探せる",
    "flowSummary": "マップで窓口を確認し、各機関へ相談",
    "conditionText": "子育て、発達、不登校、ひきこもり等について相談したい子ども・若者と家族",
    "programs": [
      {
        "title": "子ども・若者相談支援機関マップ",
        "url": "https://www.pref.aomori.lg.jp/soshiki/kodomo/kenmin/kodomo-wakamono-map-rink5.html"
      }
    ],
    "displayOrder": 150
  },
  {
    "id": "audited-3279a45fc9",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "岩手県子育て応援パスポート",
    "shortValue": "県営施設使用料等の減免や協賛サービス",
    "feeSummary": "県営施設使用料等の減免や協賛サービス",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住で、最年少の子が小学校修了前、かつ18歳年度末までの子どもが3人以上いる世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "minChildren": 3,
    "programs": [
      {
        "title": "岩手県子育て応援パスポート",
        "url": "https://www.pref.iwate.jp/kurashikankyou/kosodate/shoushika/1003469/1032821.html"
      }
    ],
    "displayOrder": 151
  },
  {
    "id": "audited-a2d848db9a",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "learning",
    "title": "いわてリトルベビーハンドブック",
    "shortValue": "成長・発達を記録できる専用手帳を無料配布",
    "feeSummary": "成長・発達を記録できる専用手帳を無料配布",
    "flowSummary": "市町村母子保健窓口等で受け取る",
    "timingText": "0歳〜3歳が目安",
    "conditionText": "小さく生まれた赤ちゃんと家族",
    "minChildAge": 0,
    "maxChildAge": 3,
    "programs": [
      {
        "title": "いわてリトルベビーハンドブック",
        "url": "https://www.pref.iwate.jp/kurashikankyou/kosodate/shien/1063379.html"
      }
    ],
    "displayOrder": 152
  },
  {
    "id": "audited-237d18ea33",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "いわて子育て応援保育料無償化事業",
    "shortValue": "国制度対象外の保育料を県と市町村が無償化",
    "feeSummary": "国制度対象外の保育料を県と市町村が無償化",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で保育所等を利用する第2子以降の3歳未満児",
    "minChildAge": 0,
    "maxChildAge": 2,
    "minChildren": 2,
    "programs": [
      {
        "title": "いわて子育て応援保育料無償化事業",
        "url": "https://www.pref.iwate.jp/kurashikankyou/kosodate/shien/kosodate/1065057.html"
      }
    ],
    "displayOrder": 153
  },
  {
    "id": "audited-ed6d895a61",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cash",
    "title": "いわて子育て応援在宅育児支援金",
    "shortValue": "在宅育児に係る支援金",
    "feeSummary": "在宅育児に係る支援金",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で保育所等を利用せず生後2か月から3歳未満の第2子以降を養育する世帯",
    "minChildAge": 0,
    "maxChildAge": 2,
    "minChildren": 2,
    "programs": [
      {
        "title": "いわて子育て応援在宅育児支援金",
        "url": "https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/094/671/080205shiryou.pdf"
      }
    ],
    "displayOrder": 154
  },
  {
    "id": "audited-ddd31159c7",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "子ども医療費助成制度",
    "shortValue": "保険診療の自己負担を助成。高校生等以下は全県一律で現物給付",
    "feeSummary": "保険診療の自己負担を助成。高校生等以下は全県一律で現物給付",
    "flowSummary": "居住市町村で受給者証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内の子ども。対象範囲・所得・負担額は市町村差あり",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成制度",
        "url": "https://www.pref.iwate.jp/kurashikankyou/iryou/seido/iryohoken/1002961.html"
      }
    ],
    "displayOrder": 155
  },
  {
    "id": "audited-a9b4322f41",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "ひとり親家庭医療費助成制度",
    "shortValue": "保険診療の自己負担相当額を助成（一部負担あり）",
    "feeSummary": "保険診療の自己負担相当額を助成（一部負担あり）",
    "flowSummary": "居住市町村で申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得要件等を満たすひとり親と18歳年度末までの子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭医療費助成制度",
        "url": "https://www.pref.iwate.jp/kurashikankyou/iryou/seido/iryohoken/1002958.html"
      }
    ],
    "displayOrder": 156
  },
  {
    "id": "audited-e28bc037bf",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "岩手県難聴児補聴器購入助成事業",
    "shortValue": "補聴器購入等の基準額の3分の2を上限に市町村が助成",
    "feeSummary": "補聴器購入等の基準額の3分の2を上限に市町村が助成",
    "flowSummary": "市町村障がい福祉担当へ申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳未満の軽度・中等度難聴児",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "岩手県難聴児補聴器購入助成事業",
        "url": "https://www.pref.iwate.jp/kurashikankyou/fukushi/shougai/kokoro/1090404.html"
      }
    ],
    "displayOrder": 157
  },
  {
    "id": "audited-540e859bc2",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を軽減",
    "feeSummary": "対象疾病の医療費自己負担を軽減",
    "flowSummary": "管轄保健所等へ支給認定申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.iwate.jp/kurashikankyou/kosodate/shien/boshihoken/1003346/1003347.html"
      }
    ],
    "displayOrder": 158
  },
  {
    "id": "audited-e1d48e2fb5",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・子育て支援",
    "feeSummary": "家庭生活支援員による生活援助・子育て支援",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "疾病・就職活動等で一時的に家事や保育支援が必要なひとり親家庭等",
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/076/335/hitorioyaguide.pdf"
      }
    ],
    "displayOrder": 159
  },
  {
    "id": "audited-cd6eea75a2",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金",
    "shortValue": "修学・生活・住宅などの資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅などの資金を無利子または低利で貸付",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金",
        "url": "https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/076/335/hitorioyaguide.pdf"
      }
    ],
    "displayOrder": 160
  },
  {
    "id": "audited-d2eb4bf606",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "指定講座の受講費用または資格取得期間中の生活費を給付",
    "feeSummary": "指定講座の受講費用または資格取得期間中の生活費を給付",
    "flowSummary": "市または県窓口へ事前相談・申請",
    "conditionText": "所得等の要件を満たすひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.iwate.jp/kurashikankyou/fukushi/jidou/1003880/1003896.html"
      }
    ],
    "displayOrder": 161
  },
  {
    "id": "audited-a5f8df72d6",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学・就職準備金や家賃を貸付。一定の就業継続等で返還免除",
    "feeSummary": "入学・就職準備金や家賃を貸付。一定の就業継続等で返還免除",
    "flowSummary": "岩手県社会福祉協議会へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.iwate.jp/kurashikankyou/fukushi/jidou/1003880/1003895.html"
      }
    ],
    "displayOrder": 162
  },
  {
    "id": "audited-92e19614d0",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "公立・私立高等学校生徒等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "公立・私立高等学校生徒等奨学給付金",
        "url": "https://www.pref.iwate.jp/kyouikubunka/kyouiku/ippan/gyousei/1070218/1072279.html"
      }
    ],
    "displayOrder": 163
  },
  {
    "id": "audited-e0c2307557",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "いわての学び希望基金奨学金",
    "shortValue": "高校生等に月額奨学金等を給付",
    "feeSummary": "高校生等に月額奨学金等を給付",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "東日本大震災津波で親を亡くした児童・生徒",
    "programs": [
      {
        "title": "いわての学び希望基金奨学金",
        "url": "https://www.pref.iwate.jp/shinsaifukkou/saiken/kyouiku/1002567.html"
      }
    ],
    "displayOrder": 164
  },
  {
    "id": "audited-cc32540f58",
    "level": "prefecture",
    "municipality": "岩手県",
    "category": "cost",
    "title": "県営住宅の子育て世帯向け収入基準緩和",
    "shortValue": "裁量世帯として入居収入基準を月額214,000円以下に緩和",
    "feeSummary": "裁量世帯として入居収入基準を月額214,000円以下に緩和",
    "flowSummary": "募集時に指定管理者等へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "高校生程度までの子を扶養し県営住宅の要件を満たす世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅の子育て世帯向け収入基準緩和",
        "url": "https://www.pref.iwate.jp/kurashikankyou/kenchiku/kenei/1010257.html"
      }
    ],
    "displayOrder": 165
  },
  {
    "id": "audited-c979656fb3",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "みやぎ子育て支援パスポート",
    "shortValue": "協賛店で割引や子育てサービス",
    "feeSummary": "協賛店で割引や子育てサービス",
    "flowSummary": "Web・アプリで登録して提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住で18歳以下の子どもがいる家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "みやぎ子育て支援パスポート",
        "url": "https://www.pref.miyagi.jp/site/kosodate/passport.html"
      }
    ],
    "displayOrder": 166
  },
  {
    "id": "audited-ade1a64f21",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "みやぎっこ応援ローン",
    "shortValue": "子育て資金を取扱金融機関の提示金利から2%引下げて融資",
    "feeSummary": "子育て資金を取扱金融機関の提示金利から2%引下げて融資",
    "flowSummary": "取扱金融機関へ申込・審査",
    "timingText": "0歳〜22歳が目安",
    "conditionText": "県内在住で妊娠中または大学卒業までの子どもを持つ世帯",
    "minChildAge": 0,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "みやぎっこ応援ローン",
        "url": "https://www.pref.miyagi.jp/soshiki/kosodate/miyagikko-loan.html"
      }
    ],
    "displayOrder": 167
  },
  {
    "id": "audited-8c25b03791",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "子どもの医療費助成制度",
    "shortValue": "保険診療の自己負担を市町村が助成",
    "feeSummary": "保険診療の自己負担を市町村が助成",
    "flowSummary": "居住市町村へ申請",
    "conditionText": "各市町村の年齢・所得等の要件を満たす子ども",
    "programs": [
      {
        "title": "子どもの医療費助成制度",
        "url": "https://www.pref.miyagi.jp/soshiki/kosodate/guide-nyu.html"
      }
    ],
    "displayOrder": 168
  },
  {
    "id": "audited-9726dceb8c",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "母子・父子家庭医療費助成制度",
    "shortValue": "医療費の一部負担金の一部を助成",
    "feeSummary": "医療費の一部負担金の一部を助成",
    "flowSummary": "居住市町村へ申請",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども",
    "programs": [
      {
        "title": "母子・父子家庭医療費助成制度",
        "url": "https://www.pref.miyagi.jp/site/kosodate/mokuteki-hitorioya02.html"
      }
    ],
    "displayOrder": 169
  },
  {
    "id": "audited-77241db8ec",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を軽減",
    "feeSummary": "対象疾病の医療費自己負担を軽減",
    "flowSummary": "県窓口へ申請（仙台市は市窓口）",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "対象疾病に罹患し国の認定基準に該当する子ども",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.miyagi.jp/soshiki/situkan/sinki-tetuduki-syouman.html"
      }
    ],
    "displayOrder": 170
  },
  {
    "id": "audited-c360ede282",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "難聴児補聴器購入助成事業",
    "shortValue": "補聴器購入・更新等を市町村が助成",
    "feeSummary": "補聴器購入・更新等を市町村が助成",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "身体障害者手帳対象外で所定の基準を満たす18歳未満の難聴児",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "難聴児補聴器購入助成事業",
        "url": "https://www.pref.miyagi.jp/documents/7664/06_youryou_all_0203.pdf"
      }
    ],
    "displayOrder": 171
  },
  {
    "id": "audited-423d1a0675",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "learning",
    "title": "宮城県母子・父子福祉センター",
    "shortValue": "就業、子育て、日常生活相談、講習、求人情報",
    "feeSummary": "就業、子育て、日常生活相談、講習、求人情報",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "宮城県母子・父子福祉センター",
        "url": "https://www.pref.miyagi.jp/soshiki/kodomo/boshifushisenta.html"
      }
    ],
    "displayOrder": 172
  },
  {
    "id": "audited-e1364906fd",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による家事・保育支援",
    "feeSummary": "家庭生活支援員による家事・保育支援",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "疾病・自立促進活動等で一時的に家事・育児支援が必要なひとり親家庭等",
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.miyagi.jp/soshiki/kodomo/hitorioya-book.html"
      }
    ],
    "displayOrder": 173
  },
  {
    "id": "audited-bf2c1097f7",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金貸付金",
    "shortValue": "修学・生活・転宅・住宅補修等12種類の資金を貸付",
    "feeSummary": "修学・生活・転宅・住宅補修等12種類の資金を貸付",
    "flowSummary": "市または県保健福祉事務所へ相談",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等と扶養される子",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金貸付金",
        "url": "https://www.pref.miyagi.jp/soshiki/kodomo/hukushishikin.html"
      }
    ],
    "displayOrder": 174
  },
  {
    "id": "audited-876c503bfc",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "自立支援教育訓練給付金",
    "shortValue": "指定講座の受講費用の一部を支給",
    "feeSummary": "指定講座の受講費用の一部を支給",
    "flowSummary": "受講前に市または県窓口へ事前相談",
    "conditionText": "20歳未満の子を養育し要件を満たすひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金",
        "url": "https://www.pref.miyagi.jp/soshiki/kodomo/jiritukyuufukin.html"
      }
    ],
    "displayOrder": 175
  },
  {
    "id": "audited-9724612aa1",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "高等職業訓練促進給付金・貸付金",
    "shortValue": "月額給付と入学・就職準備金貸付",
    "feeSummary": "月額給付と入学・就職準備金貸付",
    "flowSummary": "市または県保健福祉事務所へ申請",
    "conditionText": "要件を満たし6か月以上養成機関で修業するひとり親",
    "programs": [
      {
        "title": "高等職業訓練促進給付金・貸付金",
        "url": "https://www.pref.miyagi.jp/soshiki/kodomo/koutouginousokushinhi.html"
      }
    ],
    "displayOrder": 176
  },
  {
    "id": "audited-944f645217",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "高等学校卒業程度認定試験合格支援事業",
    "shortValue": "高卒認定試験対策講座の受講費用を一部支給",
    "feeSummary": "高卒認定試験対策講座の受講費用を一部支給",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "要件を満たすひとり親またはその子ども",
    "programs": [
      {
        "title": "高等学校卒業程度認定試験合格支援事業",
        "url": "https://www.pref.miyagi.jp/site/kosodate/mokuteki-hitorioya02.html"
      }
    ],
    "displayOrder": 177
  },
  {
    "id": "audited-778b15c54b",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "国公立高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす国公立高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "国公立高校生等奨学給付金",
        "url": "https://www.pref.miyagi.jp/site/sub-jigyou/2022syougakukyufu.html"
      }
    ],
    "displayOrder": 178
  },
  {
    "id": "audited-94bfb36a1a",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "私立高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす私立高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "私立高校生等奨学給付金",
        "url": "https://www.pref.miyagi.jp/site/shigaku/kyufu.html"
      }
    ],
    "displayOrder": 179
  },
  {
    "id": "audited-4cbb18325a",
    "level": "prefecture",
    "municipality": "宮城県",
    "category": "cost",
    "title": "県営住宅の子育て世帯優先区分",
    "shortValue": "応募時に子育て世帯区分として優先的取扱いを受けられる場合がある",
    "feeSummary": "応募時に子育て世帯区分として優先的取扱いを受けられる場合がある",
    "flowSummary": "宮城県住宅供給公社へ申込",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "小学校就学前の子がいるなど県営住宅の要件を満たす子育て世帯",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "県営住宅の子育て世帯優先区分",
        "url": "https://www.pref.miyagi.jp/documents/46158/oubonotebiki.pdf"
      }
    ],
    "displayOrder": 180
  },
  {
    "id": "audited-18aab0ed63",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "あきた子育てふれあいカード",
    "shortValue": "協賛店で割引等の優待",
    "feeSummary": "協賛店で割引等の優待",
    "flowSummary": "市町村窓口またはアプリで交付",
    "timingText": "0歳〜15歳が目安",
    "conditionText": "県内在住の妊婦および中学3年生以下の子どもがいる家庭",
    "minChildAge": 0,
    "maxChildAge": 15,
    "programs": [
      {
        "title": "あきた子育てふれあいカード",
        "url": "https://common3.pref.akita.lg.jp/kosodate/yutai-info/about"
      }
    ],
    "displayOrder": 181
  },
  {
    "id": "audited-c920a6a845",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "すこやか子育て支援事業",
    "shortValue": "保育料・副食費の一部または全額を助成",
    "feeSummary": "保育料・副食費の一部または全額を助成",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "所得・きょうだい数等の要件を満たす就学前児童の保護者",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "すこやか子育て支援事業",
        "url": "https://www.pref.akita.lg.jp/pages/archive/28393"
      }
    ],
    "displayOrder": 182
  },
  {
    "id": "audited-34f44f1659",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "福祉医療制度（乳幼児・小中高生）",
    "shortValue": "医療費自己負担が1医療機関1か月最大1,000円となるよう助成",
    "feeSummary": "医療費自己負担が1医療機関1か月最大1,000円となるよう助成",
    "flowSummary": "居住市町村で受給者証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住の乳幼児・小中高生。市町村基準あり",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "福祉医療制度（乳幼児・小中高生）",
        "url": "https://www.pref.akita.lg.jp/pages/archive/84581"
      }
    ],
    "displayOrder": 183
  },
  {
    "id": "audited-a285bfdf63",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "learning",
    "title": "新生児聴覚検査・難聴児支援",
    "shortValue": "検査案内、精密検査・療育機関情報、家族向け教材",
    "feeSummary": "検査案内、精密検査・療育機関情報、家族向け教材",
    "flowSummary": "出産医療機関または市町村へ確認",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "新生児および要精密検査となった子どもと家族",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "新生児聴覚検査・難聴児支援",
        "url": "https://www.pref.akita.lg.jp/pages/archive/4777"
      }
    ],
    "displayOrder": 184
  },
  {
    "id": "audited-75301a91bd",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "難聴児補聴器購入費助成事業",
    "shortValue": "補聴器購入費の一部を助成",
    "feeSummary": "補聴器購入費の一部を助成",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の軽・中等度難聴児",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "難聴児補聴器購入費助成事業",
        "url": "https://www.pref.akita.lg.jp/pages/archive/4365"
      }
    ],
    "displayOrder": 185
  },
  {
    "id": "audited-d8dfd6d19e",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を軽減",
    "feeSummary": "対象疾病の医療費自己負担を軽減",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.akita.lg.jp/pages/genre/1100"
      }
    ],
    "displayOrder": 186
  },
  {
    "id": "audited-f5e9669e00",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "秋田県住宅リフォーム推進事業（子育て世帯）",
    "shortValue": "持ち家型は20%・上限40万円、中古住宅購入型は30%・上限60万円",
    "feeSummary": "持ち家型は20%・上限40万円、中古住宅購入型は30%・上限60万円",
    "flowSummary": "工事着手前に地域振興局等へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "18歳以下の子と同居し県内業者による50万円以上の対象工事を行う親子世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "秋田県住宅リフォーム推進事業（子育て世帯）",
        "url": "https://www.pref.akita.lg.jp/pages/archive/94314"
      }
    ],
    "displayOrder": 187
  },
  {
    "id": "audited-c42ebcb92f",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "県営住宅の母子・父子世帯等優遇抽選",
    "shortValue": "当選確率を一般入居者の2倍として抽選",
    "feeSummary": "当選確率を一般入居者の2倍として抽選",
    "flowSummary": "各地域の募集へ申込",
    "conditionText": "県営住宅の要件を満たす母子・父子世帯等",
    "programs": [
      {
        "title": "県営住宅の母子・父子世帯等優遇抽選",
        "url": "https://www.pref.akita.lg.jp/pages/archive/25843"
      }
    ],
    "displayOrder": 188
  },
  {
    "id": "audited-dbfefd467f",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "多子世帯向け奨学金",
    "shortValue": "月額5万円を無利子貸与。所得制限なし",
    "feeSummary": "月額5万円を無利子貸与。所得制限なし",
    "flowSummary": "秋田県育英会へ応募",
    "timingText": "17歳〜18歳が目安",
    "conditionText": "子ども3人以上の世帯で大学・短大に進学する人",
    "minChildAge": 17,
    "maxChildAge": 18,
    "minChildren": 3,
    "programs": [
      {
        "title": "多子世帯向け奨学金",
        "url": "https://www.pref.akita.lg.jp/pages/archive/17856"
      }
    ],
    "displayOrder": 189
  },
  {
    "id": "audited-3c561f598a",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "秋田県高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県教育庁へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "秋田県高校生等奨学給付金",
        "url": "https://www.pref.akita.lg.jp/pages/archive/11051"
      }
    ],
    "displayOrder": 190
  },
  {
    "id": "audited-4302f1c0f7",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "learning",
    "title": "こどもの学習・生活支援事業（オンライン型）",
    "shortValue": "無料のオンライン学習支援、進路・生活相談",
    "feeSummary": "無料のオンライン学習支援、進路・生活相談",
    "flowSummary": "年度募集要項に沿って申込",
    "timingText": "12歳〜18歳が目安",
    "conditionText": "対象地域の生活困窮世帯等の中高生世代",
    "minChildAge": 12,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "こどもの学習・生活支援事業（オンライン型）",
        "url": "https://www.pref.akita.lg.jp/pages/archive/97176"
      }
    ],
    "displayOrder": 191
  },
  {
    "id": "audited-fffee926f9",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "育児・介護休業者生活安定支援資金融資",
    "shortValue": "休業期間中の生活資金を提携条件で融資",
    "feeSummary": "休業期間中の生活資金を提携条件で融資",
    "flowSummary": "東北労働金庫へ申込・審査",
    "conditionText": "県内在住・勤務で育児休業を取得する人や18歳未満の子を養育するひとり親等",
    "programs": [
      {
        "title": "育児・介護休業者生活安定支援資金融資",
        "url": "https://www.pref.akita.lg.jp/pages/archive/48427"
      }
    ],
    "displayOrder": 192
  },
  {
    "id": "audited-440f5a8e36",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・子育て支援",
    "feeSummary": "家庭生活支援員による生活援助・子育て支援",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "疾病・就職活動等で一時的に生活援助・保育が必要なひとり親家庭等",
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.akita.lg.jp/pages/archive/11351"
      }
    ],
    "displayOrder": 193
  },
  {
    "id": "audited-9f8b4b31fc",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金・ひとり親家庭等住宅整備資金",
    "shortValue": "修学・生活・住宅整備等の資金を貸付",
    "feeSummary": "修学・生活・住宅整備等の資金を貸付",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金・ひとり親家庭等住宅整備資金",
        "url": "https://www.pref.akita.lg.jp/pages/archive/11351"
      }
    ],
    "displayOrder": 194
  },
  {
    "id": "audited-01b8cf4b1e",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "learning",
    "title": "秋田県ひとり親家庭就業・自立支援センター",
    "shortValue": "就業、養育費、子育て・生活相談、講習、求人情報",
    "feeSummary": "就業、養育費、子育て・生活相談、講習、求人情報",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "秋田県ひとり親家庭就業・自立支援センター",
        "url": "https://www.pref.akita.lg.jp/pages/genre/25776"
      }
    ],
    "displayOrder": 195
  },
  {
    "id": "audited-ee0069fad3",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "cost",
    "title": "母子家庭等自立支援給付金・高等職業訓練促進資金",
    "shortValue": "受講費用や修業中の給付、準備金貸付",
    "feeSummary": "受講費用や修業中の給付、準備金貸付",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "資格取得・教育訓練を行う要件該当のひとり親",
    "programs": [
      {
        "title": "母子家庭等自立支援給付金・高等職業訓練促進資金",
        "url": "https://www.pref.akita.lg.jp/pages/archive/11351"
      }
    ],
    "displayOrder": 196
  },
  {
    "id": "audited-9ab668eb71",
    "level": "prefecture",
    "municipality": "秋田県",
    "category": "learning",
    "title": "養育費確保支援・専門相談",
    "shortValue": "専門・弁護士相談、取り決めに関する補助制度",
    "feeSummary": "専門・弁護士相談、取り決めに関する補助制度",
    "flowSummary": "公式ページを確認し、所管窓口へ申請・相談",
    "conditionText": "養育費の取り決めや不払い等に悩むひとり親家庭等",
    "programs": [
      {
        "title": "養育費確保支援・専門相談",
        "url": "https://www.pref.akita.lg.jp/pages/archive/59286"
      }
    ],
    "displayOrder": 197
  },
  {
    "id": "audited-b1df113e76",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "やまがた子育て応援パスポート",
    "shortValue": "協賛店で割引・優待サービス",
    "feeSummary": "協賛店で割引・優待サービス",
    "flowSummary": "電子画像またはカードを提示",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住または勤務し、18歳未満の子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "やまがた子育て応援パスポート",
        "url": "https://www.pref.yamagata.jp/010001/kenfuku/kosodate/kosodatepass.html"
      }
    ],
    "displayOrder": 198
  },
  {
    "id": "audited-155f8d5d0a",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "山形県メリーズお誕生プレゼント事業",
    "shortValue": "紙おむつ1パック（60枚）とメッセージカード",
    "feeSummary": "紙おむつ1パック（60枚）とメッセージカード",
    "flowSummary": "出生届提出後、市町村から受け取る",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "県内市町村へ出生届を提出した全ての新生児",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "山形県メリーズお誕生プレゼント事業",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/20180326merries.html"
      }
    ],
    "displayOrder": 199
  },
  {
    "id": "audited-e24e6ce9bf",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "time",
    "title": "赤ちゃんほっと♡ステーション",
    "shortValue": "登録施設で授乳・おむつ替え設備を利用",
    "feeSummary": "登録施設で授乳・おむつ替え設備を利用",
    "flowSummary": "登録施設を検索し利用",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "乳幼児を連れた保護者",
    "minChildAge": 0,
    "maxChildAge": 2,
    "programs": [
      {
        "title": "赤ちゃんほっと♡ステーション",
        "url": "https://www.pref.yamagata.jp/010001/r4baby-hotto-station.html"
      }
    ],
    "displayOrder": 200
  },
  {
    "id": "audited-b0bbaf9061",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "0～2歳児の保育料負担軽減",
    "shortValue": "国制度対象外の保育料を県と市町村が軽減",
    "feeSummary": "国制度対象外の保育料を県と市町村が軽減",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で保育所等を利用し、所得階層等の要件を満たす0～2歳児世帯",
    "minChildAge": 0,
    "maxChildAge": 2,
    "programs": [
      {
        "title": "0～2歳児の保育料負担軽減",
        "url": "https://www200.pref.yamagata.jp/010001/kenfuku/kosodate/hoiku/futankeigen.html"
      }
    ],
    "displayOrder": 201
  },
  {
    "id": "audited-961f266534",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "放課後児童クラブ利用料負担軽減",
    "shortValue": "月額最大1万円を基準に利用料を軽減。世帯区分・きょうだい順位で上限が異なる",
    "feeSummary": "月額最大1万円を基準に利用料を軽減。世帯区分・きょうだい順位で上限が異なる",
    "flowSummary": "居住市町村へ申請・確認",
    "timingText": "6歳〜12歳が目安",
    "conditionText": "実施市町村の放課後児童クラブを利用する低所得世帯または多子世帯",
    "minChildAge": 6,
    "maxChildAge": 12,
    "programs": [
      {
        "title": "放課後児童クラブ利用料負担軽減",
        "url": "https://www.pref.yamagata.jp/010001/kenfuku/kosodate/hoiku/houkago.html"
      }
    ],
    "displayOrder": 202
  },
  {
    "id": "audited-a94cb3c3d5",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "子ども医療費助成",
    "shortValue": "全市町村で高校生年代までの入院・通院の自己負担を無料化",
    "feeSummary": "全市町村で高校生年代までの入院・通院の自己負担を無料化",
    "flowSummary": "居住市町村で受給者証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住の高校生年代までの子ども。市町村の要件あり",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成",
        "url": "https://www.pref.yamagata.jp/documents/44773/20250422_giungaiyo.pdf"
      }
    ],
    "displayOrder": 203
  },
  {
    "id": "audited-995a61bdae",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "ひとり親家庭等医療費助成",
    "shortValue": "保険診療の自己負担額を助成。入院時食事代は対象外",
    "feeSummary": "保険診療の自己負担額を助成。入院時食事代は対象外",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得税非課税等の要件を満たし18歳以下の子を扶養するひとり親等と子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等医療費助成",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakateiiryou.html"
      }
    ],
    "displayOrder": 204
  },
  {
    "id": "audited-ed707d4db1",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "新生児聴覚検査費助成",
    "shortValue": "全市町村で新生児聴覚検査費用を助成。額や方法は市町村ごとに異なる",
    "feeSummary": "全市町村で新生児聴覚検査費用を助成。額や方法は市町村ごとに異なる",
    "flowSummary": "市町村または出産医療機関へ確認",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "県内市町村に住む新生児の保護者",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "新生児聴覚検査費助成",
        "url": "https://www500.pref.yamagata.jp/010002/kenfuku/kosodate/shoni/mimi.html"
      }
    ],
    "displayOrder": 205
  },
  {
    "id": "audited-fec277a86f",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入支援",
    "shortValue": "購入費と基準額の低い方の3分の2を助成。修理費は対象外",
    "feeSummary": "購入費と基準額の低い方の3分の2を助成。修理費は対象外",
    "flowSummary": "購入前に居住市町村の障がい福祉窓口へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳未満の難聴児",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入支援",
        "url": "https://www.pref.yamagata.jp/090004/kenfuku/shogai/shienjigyou/h310116kounyuushien.html"
      }
    ],
    "displayOrder": 206
  },
  {
    "id": "audited-8d6adbf5f2",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "指定医療機関での対象疾病の医療費自己負担を軽減",
    "feeSummary": "指定医療機関での対象疾病の医療費自己負担を軽減",
    "flowSummary": "管轄保健所へ申請。山形市は山形市保健所",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www500.pref.yamagata.jp/010002/kenfuku/kosodate/shoni/shounimansei/syounimansei.html"
      }
    ],
    "displayOrder": 207
  },
  {
    "id": "audited-2a0792bd80",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "learning",
    "title": "山形県ひとり親家庭応援センター",
    "shortValue": "就業、生活、養育費、面会交流などの無料相談と就業支援",
    "feeSummary": "就業、生活、養育費、面会交流などの無料相談と就業支援",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "山形県ひとり親家庭応援センター",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakatei.html"
      }
    ],
    "displayOrder": 208
  },
  {
    "id": "audited-3a08e03fc6",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・子育て支援",
    "feeSummary": "家庭生活支援員による生活援助・子育て支援",
    "flowSummary": "居住市町村または県窓口へ事前登録・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "疾病、就職活動、冠婚葬祭等で一時的に家事・育児支援が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakatei.html"
      }
    ],
    "displayOrder": 209
  },
  {
    "id": "audited-a6e11ede8b",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金",
    "shortValue": "修学・生活・住宅などの資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅などの資金を無利子または低利で貸付",
    "flowSummary": "市に住む人は市、町村に住む人は総合支庁へ相談・申請",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/bosikafu.html"
      }
    ],
    "displayOrder": 210
  },
  {
    "id": "audited-fe67436914",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "ひとり親家庭の資格取得支援",
    "shortValue": "受講費用の給付、修業中の生活費給付、準備金貸付等",
    "feeSummary": "受講費用の給付、修業中の生活費給付、準備金貸付等",
    "flowSummary": "市または県窓口へ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練や資格取得を行うひとり親",
    "programs": [
      {
        "title": "ひとり親家庭の資格取得支援",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakatei.html"
      }
    ],
    "displayOrder": 211
  },
  {
    "id": "audited-d6310b6a14",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "ひとり親家庭への県産米提供（令和8年度）",
    "shortValue": "対象世帯へ県産米10kgを提供",
    "feeSummary": "対象世帯へ県産米10kgを提供",
    "flowSummary": "原則申請不要。対象確認は公式案内参照",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "児童扶養手当受給世帯等の要件を満たすひとり親家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭への県産米提供（令和8年度）",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakatei.html"
      }
    ],
    "displayOrder": 212
  },
  {
    "id": "audited-25b85eee8c",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "JR通勤定期乗車券の割引",
    "shortValue": "JR通勤定期乗車券を3割引で購入",
    "feeSummary": "JR通勤定期乗車券を3割引で購入",
    "flowSummary": "居住市町村で特定者資格証明書等を申請",
    "conditionText": "児童扶養手当受給世帯の世帯員で通勤定期券を必要とする人",
    "programs": [
      {
        "title": "JR通勤定期乗車券の割引",
        "url": "https://www.pref.yamagata.jp/010002/kenfuku/kosodate/shien/hitorioyashien/hitorioyakatei.html"
      }
    ],
    "displayOrder": 213
  },
  {
    "id": "audited-28a450a6f8",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "山形県高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "山形県高校生等奨学給付金",
        "url": "https://www200.pref.yamagata.jp/700013/koko/220825syougakukyuufukin.html"
      }
    ],
    "displayOrder": 214
  },
  {
    "id": "audited-e8b7646f16",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "山形県高等学校奨学金",
    "shortValue": "修学資金を無利子で貸与",
    "feeSummary": "修学資金を無利子で貸与",
    "flowSummary": "在学校を通して申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "学力・家計等の要件を満たす高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "山形県高等学校奨学金",
        "url": "https://www.pref.yamagata.jp/700013/koko/20251205syougakukin.html"
      }
    ],
    "displayOrder": 215
  },
  {
    "id": "audited-796241534f",
    "level": "prefecture",
    "municipality": "山形県",
    "category": "cost",
    "title": "省エネ家電買換え支援（エアコン）",
    "shortValue": "対象エアコン購入費の一部を助成",
    "feeSummary": "対象エアコン購入費の一部を助成",
    "flowSummary": "購入前に年度要項を確認し申請",
    "conditionText": "県内在住の住民税非課税世帯等。ひとり親世帯を含む",
    "programs": [
      {
        "title": "省エネ家電買換え支援（エアコン）",
        "url": "https://www.pref.yamagata.jp/090014/kenfuku/chihuku/airkon.html"
      }
    ],
    "displayOrder": 216
  },
  {
    "id": "audited-4e97b349d0",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "ファミたんカード（子育て応援パスポート）",
    "shortValue": "県内外の協賛店で割引・優待サービス",
    "feeSummary": "県内外の協賛店で割引・優待サービス",
    "flowSummary": "カードまたはデジタルパスポートを提示",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住の18歳未満の子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "ファミたんカード（子育て応援パスポート）",
        "url": "https://www.pref.fukushima.lg.jp/sec/21055a/famitan.html"
      }
    ],
    "displayOrder": 217
  },
  {
    "id": "audited-5e560f85c0",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "time",
    "title": "子育て応援駐車場",
    "shortValue": "県の対象施設に設けた優先駐車区画を利用",
    "feeSummary": "県の対象施設に設けた優先駐車区画を利用",
    "flowSummary": "許可証不要。対象施設で表示を確認",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "妊婦または未就学児を同伴する人",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "子育て応援駐車場",
        "url": "https://www.pref.fukushima.lg.jp/sec/21055a/kosodate-ouen.html"
      }
    ],
    "displayOrder": 218
  },
  {
    "id": "audited-2eed4a4366",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "time",
    "title": "屋内遊び場一覧",
    "shortValue": "県内の屋内遊び場を検索・利用。料金・対象年齢等は施設ごとに異なる",
    "feeSummary": "県内の屋内遊び場を検索・利用。料金・対象年齢等は施設ごとに異なる",
    "flowSummary": "一覧から施設を選び各施設へ確認",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "子どもと保護者",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "屋内遊び場一覧",
        "url": "https://www.pref.fukushima.lg.jp/sec/21055a/okunai-ichiran.html"
      }
    ],
    "displayOrder": 219
  },
  {
    "id": "audited-8185bea400",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "子ども医療費助成",
    "shortValue": "保険診療の自己負担を助成",
    "feeSummary": "保険診療の自己負担を助成",
    "flowSummary": "居住市町村で受給資格登録",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住の18歳到達後最初の3月31日までの子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/kodomoiryouhi.html"
      }
    ],
    "displayOrder": 220
  },
  {
    "id": "audited-7743a5ab99",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "ひとり親家庭医療費助成",
    "shortValue": "保険診療の自己負担の一部を助成",
    "feeSummary": "保険診療の自己負担の一部を助成",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と18歳年度末までの子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭医療費助成",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/bosi-katei.html"
      }
    ],
    "displayOrder": 221
  },
  {
    "id": "audited-d49d518e3b",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "新生児聴覚検査費助成",
    "shortValue": "市町村が新生児聴覚検査費の一部を助成",
    "feeSummary": "市町村が新生児聴覚検査費の一部を助成",
    "flowSummary": "市町村または出産医療機関へ確認",
    "timingText": "0歳〜0歳が目安",
    "conditionText": "県内市町村に住む新生児の保護者",
    "minChildAge": 0,
    "maxChildAge": 0,
    "programs": [
      {
        "title": "新生児聴覚検査費助成",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035b/tyoukakukensa.html"
      }
    ],
    "displayOrder": 222
  },
  {
    "id": "audited-2426de6784",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費等助成",
    "shortValue": "市町村基準額の範囲内で補聴器購入費等の一部を県と市町村が助成",
    "feeSummary": "市町村基準額の範囲内で補聴器購入費等の一部を県と市町村が助成",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳未満の難聴児。所得要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費等助成",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/hotyouki.html"
      }
    ],
    "displayOrder": 223
  },
  {
    "id": "audited-fa7522f67d",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費負担を2割とし、所得等に応じた月額上限を適用",
    "feeSummary": "対象疾病の医療費負担を2割とし、所得等に応じた月額上限を適用",
    "flowSummary": "県保健福祉事務所等へ申請。中核市は各市窓口",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035b/syounimannseitokuteisiltupeitaisakujigyou.html"
      }
    ],
    "displayOrder": 224
  },
  {
    "id": "audited-4caaf15e8d",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "多子世帯の保育料負担軽減",
    "shortValue": "県が市町村の保育料軽減を支援。対象・軽減額は市町村ごとに異なる",
    "feeSummary": "県が市町村の保育料軽減を支援。対象・軽減額は市町村ごとに異なる",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で保育所等を利用する3歳未満の第3子以降等",
    "minChildAge": 0,
    "maxChildAge": 2,
    "minChildren": 3,
    "programs": [
      {
        "title": "多子世帯の保育料負担軽減",
        "url": "https://www.pref.fukushima.lg.jp/uploaded/attachment/735879.pdf"
      }
    ],
    "displayOrder": 225
  },
  {
    "id": "audited-af8779abee",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cash",
    "title": "福島県東日本大震災子ども支援基金給付金",
    "shortValue": "未就学児月2～3万円から大学等月5～6万円まで。節目の一時金も支給",
    "feeSummary": "未就学児月2～3万円から大学等月5～6万円まで。節目の一時金も支給",
    "flowSummary": "県へ申請。継続受給者は年度ごとに現況届",
    "timingText": "0歳〜22歳が目安",
    "conditionText": "東日本大震災で保護者が死亡または行方不明となった児童・学生",
    "minChildAge": 0,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "福島県東日本大震災子ども支援基金給付金",
        "url": "https://www.pref.fukushima.lg.jp/sec/21055a/kyuufukin.html"
      }
    ],
    "displayOrder": 226
  },
  {
    "id": "audited-66e51c1e41",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cash",
    "title": "未来に進もう！こどもの夢応援事業",
    "shortValue": "生活給付金、入学支度金、臨時給付金を支給",
    "feeSummary": "生活給付金、入学支度金、臨時給付金を支給",
    "flowSummary": "施設長・児童相談所等を通じて県へ申請",
    "timingText": "18歳〜22歳が目安",
    "conditionText": "児童養護施設等または里親委託を離れ大学等へ進学し、経済支援が見込めない人等",
    "minChildAge": 18,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "未来に進もう！こどもの夢応援事業",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/kodomonoyume.html"
      }
    ],
    "displayOrder": 227
  },
  {
    "id": "audited-60e789e85b",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "福島県高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "福島県高校生等奨学給付金",
        "url": "https://www.pref.fukushima.lg.jp/site/edu/koukoukyoiku22.html"
      }
    ],
    "displayOrder": 228
  },
  {
    "id": "audited-83b01a69f1",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "私立高等学校等入学金軽減補助",
    "shortValue": "学校が行う入学金軽減に県が補助。区分により5万円または2万5千円",
    "feeSummary": "学校が行う入学金軽減に県が補助。区分により5万円または2万5千円",
    "flowSummary": "在学校へ確認・申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "所得要件を満たす県内私立高校等の新入生世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "私立高等学校等入学金軽減補助",
        "url": "https://www.pref.fukushima.lg.jp/sec/01135b/shigaku12.html"
      }
    ],
    "displayOrder": 229
  },
  {
    "id": "audited-af7045d646",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "福島県奨学資金",
    "shortValue": "修学資金を無利子で貸与",
    "feeSummary": "修学資金を無利子で貸与",
    "flowSummary": "在学校等を通じて申請",
    "timingText": "15歳〜22歳が目安",
    "conditionText": "学力・家計等の要件を満たす高校生・大学生等",
    "minChildAge": 15,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "福島県奨学資金",
        "url": "https://www.pref.fukushima.lg.jp/site/edu/fukushimakensyougakushikin.html"
      }
    ],
    "displayOrder": 230
  },
  {
    "id": "audited-39530f0a78",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "県営住宅の子育て・ひとり親・多子世帯優遇",
    "shortValue": "裁量世帯として収入基準緩和や優先入居の対象となる場合がある",
    "feeSummary": "裁量世帯として収入基準緩和や優先入居の対象となる場合がある",
    "flowSummary": "各地区の募集窓口へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県営住宅の要件を満たす子育て世帯、ひとり親世帯、多子世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅の子育て・ひとり親・多子世帯優遇",
        "url": "https://www.pref.fukushima.lg.jp/sec/41065a/keneijyuutakuhenonyuukyomoushikomi.html"
      }
    ],
    "displayOrder": 231
  },
  {
    "id": "audited-d91d93765f",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金",
    "shortValue": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "flowSummary": "市に住む人は市、町村に住む人は県保健福祉事務所へ相談・申請",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/bosi-sikin.html"
      }
    ],
    "displayOrder": 232
  },
  {
    "id": "audited-d1f5d894e2",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "高等職業訓練促進給付金",
    "shortValue": "修業期間中の生活費と修了時の給付金を支給",
    "feeSummary": "修業期間中の生活費と修了時の給付金を支給",
    "flowSummary": "市または県児童家庭課へ事前相談・申請",
    "conditionText": "要件を満たし6か月以上の養成機関で資格取得を目指すひとり親",
    "programs": [
      {
        "title": "高等職業訓練促進給付金",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/koutousyokugyoukunrensokushinkyuhukin.html"
      }
    ],
    "displayOrder": 233
  },
  {
    "id": "audited-d8ec536541",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "自立支援教育訓練給付金",
    "shortValue": "指定講座の受講費用の一部を支給",
    "feeSummary": "指定講座の受講費用の一部を支給",
    "flowSummary": "市または県窓口へ受講前に相談・申請",
    "conditionText": "自立に向けた計画等の要件を満たすひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金",
        "url": "https://www.pref.fukushima.lg.jp/uploaded/attachment/739783.pdf"
      }
    ],
    "displayOrder": 234
  },
  {
    "id": "audited-d0ba5b14d8",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学準備50万円、就職準備20万円、家賃月額最大7万円を12か月など貸付。就業継続等で返還免除あり",
    "feeSummary": "入学準備50万円、就職準備20万円、家賃月額最大7万円を12か月など貸付。就業継続等で返還免除あり",
    "flowSummary": "福島県社会福祉協議会等へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/sokushinshikinkashithuke.html"
      }
    ],
    "displayOrder": 235
  },
  {
    "id": "audited-929e22b758",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "cost",
    "title": "ひとり親家庭学び直し支援事業",
    "shortValue": "高卒認定試験講座費の一部を支給。通信は最大15万円、通学等は最大30万円",
    "feeSummary": "高卒認定試験講座費の一部を支給。通信は最大15万円、通学等は最大30万円",
    "flowSummary": "受講前に市または県児童家庭課へ相談・申請",
    "conditionText": "高校未卒業で自立支援計画等の要件を満たすひとり親またはその子ども",
    "minChildAge": 15,
    "programs": [
      {
        "title": "ひとり親家庭学び直し支援事業",
        "url": "https://www.pref.fukushima.lg.jp/sec/21035a/hitorioyakateimanabinaosisienjigyou01.html"
      }
    ],
    "displayOrder": 236
  },
  {
    "id": "audited-aeaf8eaafc",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・子育て支援",
    "feeSummary": "家庭生活支援員による生活援助・子育て支援",
    "flowSummary": "居住市町村または県窓口へ事前登録・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "疾病、就職活動等で一時的に家事・育児支援が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.fukushima.lg.jp/uploaded/attachment/739783.pdf"
      }
    ],
    "displayOrder": 237
  },
  {
    "id": "audited-f45152f93d",
    "level": "prefecture",
    "municipality": "福島県",
    "category": "learning",
    "title": "福島県母子家庭等就業・自立支援センター",
    "shortValue": "就業相談、職業紹介、講習、養育費相談等",
    "feeSummary": "就業相談、職業紹介、講習、養育費相談等",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "福島県母子家庭等就業・自立支援センター",
        "url": "https://www.pref.fukushima.lg.jp/uploaded/attachment/732215.pdf"
      }
    ],
    "displayOrder": 238
  },
  {
    "id": "audited-e5a78c2093",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "いばらきKids Club（いばらき子育て家庭優待制度）",
    "shortValue": "協賛店で割引や子育て向けサービス",
    "feeSummary": "協賛店で割引や子育て向けサービス",
    "flowSummary": "市町村窓口または電子申請で取得し提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住で18歳以下の子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "いばらきKids Club（いばらき子育て家庭優待制度）",
        "url": "https://www.kids.pref.ibaraki.jp/kids/about/"
      }
    ],
    "displayOrder": 239
  },
  {
    "id": "audited-4cc69d224d",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "多子世帯保育料軽減事業",
    "shortValue": "第3子以降の保育料無償化、第2子の保育料軽減。市町村・所得等で条件差あり",
    "feeSummary": "第3子以降の保育料無償化、第2子の保育料軽減。市町村・所得等で条件差あり",
    "flowSummary": "利用施設または居住市町村へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町村で保育所等を利用する3歳未満の第2子・第3子以降",
    "minChildAge": 0,
    "maxChildAge": 2,
    "minChildren": 2,
    "programs": [
      {
        "title": "多子世帯保育料軽減事業",
        "url": "https://www.kids.pref.ibaraki.jp/kids/nursing02_06/"
      }
    ],
    "displayOrder": 240
  },
  {
    "id": "audited-8972dca756",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "小児医療福祉費支給制度（マル福）",
    "shortValue": "保険診療の自己負担を公費助成。一部負担と市町村独自拡充あり",
    "feeSummary": "保険診療の自己負担を公費助成。一部負担と市町村独自拡充あり",
    "flowSummary": "居住市町村で受給者証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県基準では外来は小学6年生まで、入院は高校3年生まで。所得等の要件あり",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "小児医療福祉費支給制度（マル福）",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/koso/fukushi/koso/guide/guide03.html"
      }
    ],
    "displayOrder": 241
  },
  {
    "id": "audited-eea42b38b1",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "ひとり親家庭医療福祉費支給制度（マル福）",
    "shortValue": "保険診療の自己負担を助成。一部負担あり",
    "feeSummary": "保険診療の自己負担を助成。一部負担あり",
    "flowSummary": "居住市町村で受給者証を申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "所得等の要件を満たすひとり親と18歳未満の子ども等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭医療福祉費支給制度（マル福）",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/koso/fukushi/koso/guide/guide03.html"
      }
    ],
    "displayOrder": 242
  },
  {
    "id": "audited-60b10385a4",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "軽中度難聴児補聴器購入支援事業",
    "shortValue": "補聴器購入費等の一部を県と市町村が助成",
    "feeSummary": "補聴器購入費等の一部を県と市町村が助成",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "身体障害者手帳対象外の軽度・中等度難聴児。市町村要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽中度難聴児補聴器購入支援事業",
        "url": "https://www.pref.ibaraki.jp/somu/shichoson/zaisei/joseiseido/documents/hoken53.pdf"
      }
    ],
    "displayOrder": 243
  },
  {
    "id": "audited-3e66cebc07",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を軽減",
    "feeSummary": "対象疾病の医療費自己負担を軽減",
    "flowSummary": "管轄保健所等へ支給認定申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/yobo/yobo/shounimanseitokuteisippei.html"
      }
    ],
    "displayOrder": 244
  },
  {
    "id": "audited-de100cc8d4",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "茨城県高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県教育委員会・県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "茨城県高校生等奨学給付金",
        "url": "https://kyoiku.pref.ibaraki.jp/gakko/highschool/scholarship/kyufukin/"
      }
    ],
    "displayOrder": 245
  },
  {
    "id": "audited-0866b167de",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "母子・父子・寡婦福祉資金貸付金",
    "shortValue": "修学・生活・住宅・転宅等12種類の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等12種類の資金を無利子または低利で貸付",
    "flowSummary": "居住市町村または県民センターへ事前相談・申請",
    "conditionText": "20歳未満の子を扶養するひとり親、寡婦等",
    "programs": [
      {
        "title": "母子・父子・寡婦福祉資金貸付金",
        "url": "https://www.pref.ibaraki.jp/somu/nishise/chiiki/chiikifukushi/boshi/boshi.html"
      }
    ],
    "displayOrder": 246
  },
  {
    "id": "audited-efaa226e49",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による生活援助・保育支援",
    "feeSummary": "家庭生活支援員による生活援助・保育支援",
    "flowSummary": "居住市町村の福祉担当課へ相談・申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "就職活動や疾病等で一時的に介護・保育が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.ibaraki.jp/somu/nishise/chiiki/chiikifukushi/boshi/sonota.html"
      }
    ],
    "displayOrder": 247
  },
  {
    "id": "audited-a5ce194b50",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "time",
    "title": "子育て短期支援事業",
    "shortValue": "里親や施設で子どもを一時的に預かる。所得に応じた負担あり",
    "feeSummary": "里親や施設で子どもを一時的に預かる。所得に応じた負担あり",
    "flowSummary": "居住市町村の福祉担当課へ相談・申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "病気・仕事等で一時的に子どもの養育が困難なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "子育て短期支援事業",
        "url": "https://www.pref.ibaraki.jp/somu/nishise/chiiki/chiikifukushi/boshi/sonota.html"
      }
    ],
    "displayOrder": 248
  },
  {
    "id": "audited-b9359db579",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "time",
    "title": "ひとり親ワークライフ臨時サポート事業",
    "shortValue": "家事、乳幼児保育、送迎等の支援サービス。実費は自己負担",
    "feeSummary": "家事、乳幼児保育、送迎等の支援サービス。実費は自己負担",
    "flowSummary": "公式ページの派遣事業者へ依頼",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "就業・転職等に取り組み、要件を満たすひとり親家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親ワークライフ臨時サポート事業",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/seisyonen/seisyonen/hitorioyawls.html"
      }
    ],
    "displayOrder": 249
  },
  {
    "id": "audited-86a13c7c53",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "ひとり親家庭自立支援給付金",
    "shortValue": "受講費用の一部や資格取得期間中の生活費を給付",
    "feeSummary": "受講費用の一部や資格取得期間中の生活費を給付",
    "flowSummary": "市または県民センターへ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "ひとり親家庭自立支援給付金",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/fukusise/chiiki/fukuso/chiikihukushigyomu.html"
      }
    ],
    "displayOrder": 250
  },
  {
    "id": "audited-fe992a017d",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "learning",
    "title": "茨城県母子・父子福祉センター",
    "shortValue": "就業、生活、養育費等の相談と講習・求人情報",
    "feeSummary": "就業、生活、養育費等の相談と講習・求人情報",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "茨城県母子・父子福祉センター",
        "url": "https://www.kids.pref.ibaraki.jp/kids/nursing06_02/"
      }
    ],
    "displayOrder": 251
  },
  {
    "id": "audited-773f756068",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "JR通勤定期乗車券の割引",
    "shortValue": "JR通勤定期乗車券を3割引で購入",
    "feeSummary": "JR通勤定期乗車券を3割引で購入",
    "flowSummary": "居住市町村で証明書を申請",
    "conditionText": "児童扶養手当受給世帯で通勤定期券を必要とする人",
    "programs": [
      {
        "title": "JR通勤定期乗車券の割引",
        "url": "https://www.pref.ibaraki.jp/somu/nishise/chiiki/chiikifukushi/boshi/sonota.html"
      }
    ],
    "displayOrder": 252
  },
  {
    "id": "audited-6058c91cce",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cost",
    "title": "県営住宅の子育て・ひとり親世帯優遇",
    "shortValue": "一般枠とは別の子育て・多子世帯向け住宅や優先選考の対象となる場合がある",
    "feeSummary": "一般枠とは別の子育て・多子世帯向け住宅や優先選考の対象となる場合がある",
    "flowSummary": "指定管理者の募集へ申込",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "県営住宅の要件を満たす子育て世帯、多子世帯、ひとり親世帯等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "県営住宅の子育て・ひとり親世帯優遇",
        "url": "https://www.pref.ibaraki.jp/doboku/jutaku/kanri/04kenei/gaiyou.html"
      }
    ],
    "displayOrder": 253
  },
  {
    "id": "audited-3d3767aead",
    "level": "prefecture",
    "municipality": "茨城県",
    "category": "cash",
    "title": "低所得の子育て世帯生活応援特別給付金",
    "shortValue": "県独自の特別給付金を支給",
    "feeSummary": "県独自の特別給付金を支給",
    "flowSummary": "支給条件により申請不要または市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "対象年度の所得・児童扶養手当等の要件を満たす子育て世帯",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "低所得の子育て世帯生活応援特別給付金",
        "url": "https://www.pref.ibaraki.jp/hokenfukushi/seisyonen/seisyonen/hitorioyakyufukin/kannibann.html"
      }
    ],
    "displayOrder": 254
  },
  {
    "id": "audited-0032189977",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "とちぎ笑顔つぎつぎカード",
    "shortValue": "協賛店・施設で割引や特典",
    "feeSummary": "協賛店・施設で割引や特典",
    "flowSummary": "市町窓口または栃木県LINEで取得し提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住で18歳年度末までの子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "とちぎ笑顔つぎつぎカード",
        "url": "https://www.pref.tochigi.lg.jp/e06/tsugitsugicard.html"
      }
    ],
    "displayOrder": 255
  },
  {
    "id": "audited-678363414a",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "第2子以降保育料等免除事業",
    "shortValue": "第2子以降の保育料を免除。市町・施設等で条件差あり",
    "feeSummary": "第2子以降の保育料を免除。市町・施設等で条件差あり",
    "flowSummary": "利用施設または居住市町へ確認",
    "timingText": "0歳〜2歳が目安",
    "conditionText": "実施市町で保育所・認定こども園等を利用する第2子以降の0～2歳児世帯",
    "minChildAge": 0,
    "maxChildAge": 2,
    "minChildren": 2,
    "programs": [
      {
        "title": "第2子以降保育料等免除事業",
        "url": "https://www.pref.tochigi.lg.jp/e06/welfare/kodomo/kosodatesoudan/shiennseido.html"
      }
    ],
    "displayOrder": 256
  },
  {
    "id": "audited-2aff9579e1",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "こども医療費助成制度",
    "shortValue": "保険診療の自己負担を助成。学齢・市町により給付方式等が異なる",
    "feeSummary": "保険診療の自己負担を助成。学齢・市町により給付方式等が異なる",
    "flowSummary": "居住市町で受給資格登録・申請",
    "timingText": "0歳〜15歳が目安",
    "conditionText": "県基準では出生から中学3年生まで。市町独自拡充あり",
    "minChildAge": 0,
    "maxChildAge": 15,
    "programs": [
      {
        "title": "こども医療費助成制度",
        "url": "https://www.pref.tochigi.lg.jp/e06/welfare/kodomo/kosodatesoudan/shiennseido.html"
      }
    ],
    "displayOrder": 257
  },
  {
    "id": "audited-ee71c7c814",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "ひとり親家庭医療費助成制度",
    "shortValue": "保険診療の自己負担額を助成",
    "feeSummary": "保険診療の自己負担額を助成",
    "flowSummary": "居住市町へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭医療費助成制度",
        "url": "https://www.pref.tochigi.lg.jp/e06/welfare/kodomo/hitorioya/1178526179238.html"
      }
    ],
    "displayOrder": 258
  },
  {
    "id": "audited-148a3df775",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費等助成",
    "shortValue": "補聴器の購入・更新・修理費の一部を助成",
    "feeSummary": "補聴器の購入・更新・修理費の一部を助成",
    "flowSummary": "購入前に居住市町へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳未満の難聴児。所得要件等あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費等助成",
        "url": "https://www.pref.tochigi.lg.jp/e05/keidotyuutoudo.html"
      }
    ],
    "displayOrder": 259
  },
  {
    "id": "audited-5dc039114b",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を軽減",
    "feeSummary": "対象疾病の医療費自己負担を軽減",
    "flowSummary": "県健康福祉センター等へ申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.tochigi.lg.jp/e04/syouman.html"
      }
    ],
    "displayOrder": 260
  },
  {
    "id": "audited-380e4cf802",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "栃木県奨学のための給付金（公立・私立）",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "栃木県奨学のための給付金（公立・私立）",
        "url": "https://www.pref.tochigi.lg.jp/m01/education/gakkoukyouiku/koutou/kyuufukin_k.html"
      }
    ],
    "displayOrder": 261
  },
  {
    "id": "audited-a306f5a87d",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "母子・父子・寡婦福祉資金貸付制度",
    "shortValue": "修学・生活・住宅・転宅等12種類の資金を貸付",
    "feeSummary": "修学・生活・住宅・転宅等12種類の資金を貸付",
    "flowSummary": "市または県健康福祉センターへ事前相談・申請",
    "conditionText": "母子家庭の母、父子家庭の父、寡婦等",
    "programs": [
      {
        "title": "母子・父子・寡婦福祉資金貸付制度",
        "url": "https://www.pref.tochigi.lg.jp/e06/welfare/kodomo/hitorioya/1178580426452.html"
      }
    ],
    "displayOrder": 262
  },
  {
    "id": "audited-a3a2dd715e",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による育児・生活援助",
    "feeSummary": "家庭生活支援員による育児・生活援助",
    "flowSummary": "市または県窓口へ事前登録・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "就学・疾病等で一時的に介護・保育が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.tochigi.lg.jp/fukushi/kodomo/hitorioyakatei/index.html"
      }
    ],
    "displayOrder": 263
  },
  {
    "id": "audited-95364cba5d",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "受講費用の一部や修業期間中の生活費を給付",
    "feeSummary": "受講費用の一部や修業期間中の生活費を給付",
    "flowSummary": "市または県窓口へ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.tochigi.lg.jp/fukushi/kodomo/hitorioyakatei/index.html"
      }
    ],
    "displayOrder": 264
  },
  {
    "id": "audited-7616b5c287",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学50万円、就職20万円、家賃月4万円を12か月まで貸付。就業継続等で返還免除あり",
    "feeSummary": "入学50万円、就職20万円、家賃月4万円を12か月まで貸付。就業継続等で返還免除あり",
    "flowSummary": "栃木県社会福祉協議会等へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.tochigi.lg.jp/e06/welfare/kodomo/hitorioya/kashitsukejigyou.html"
      }
    ],
    "displayOrder": 265
  },
  {
    "id": "audited-6f59db7fb2",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "ひとり親家庭高等学校卒業程度認定試験合格支援",
    "shortValue": "高卒認定試験対策講座の受講費用を一部支給",
    "feeSummary": "高卒認定試験対策講座の受講費用を一部支給",
    "flowSummary": "受講前に市または県窓口へ相談・申請",
    "conditionText": "高校未卒業で要件を満たすひとり親またはその子ども",
    "minChildAge": 15,
    "programs": [
      {
        "title": "ひとり親家庭高等学校卒業程度認定試験合格支援",
        "url": "https://www.pref.tochigi.lg.jp/fukushi/kodomo/hitorioyakatei/index.html"
      }
    ],
    "displayOrder": 266
  },
  {
    "id": "audited-47ce0a7d61",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "learning",
    "title": "母子家庭等就業・自立支援センター",
    "shortValue": "就業、生活、養育費等の相談、講習、職業紹介",
    "feeSummary": "就業、生活、養育費等の相談、講習、職業紹介",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "母子家庭等就業・自立支援センター",
        "url": "https://www.pref.tochigi.lg.jp/fukushi/kodomo/hitorioyakatei/index.html"
      }
    ],
    "displayOrder": 267
  },
  {
    "id": "audited-ca67edc0c6",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "県営住宅の子育て・ひとり親世帯向け取扱い",
    "shortValue": "子育て世帯区分や収入基準等の優遇対象となる場合がある",
    "feeSummary": "子育て世帯区分や収入基準等の優遇対象となる場合がある",
    "flowSummary": "県営住宅の募集へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県営住宅の要件を満たす未就学児のいる世帯やひとり親世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅の子育て・ひとり親世帯向け取扱い",
        "url": "https://www.pref.tochigi.lg.jp/h11/town/jyuutaku/kouei/kenei.html"
      }
    ],
    "displayOrder": 268
  },
  {
    "id": "audited-ae2112d45b",
    "level": "prefecture",
    "municipality": "栃木県",
    "category": "cost",
    "title": "栃木県育英会奨学金",
    "shortValue": "修学資金を貸与",
    "feeSummary": "修学資金を貸与",
    "flowSummary": "在学校等を通して申請",
    "timingText": "15歳〜22歳が目安",
    "conditionText": "学力・家計等の要件を満たす高校生・大学生等",
    "minChildAge": 15,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "栃木県育英会奨学金",
        "url": "https://www.pref.tochigi.lg.jp/m01/education/gakkoukyouiku/koutou/index.html"
      }
    ],
    "displayOrder": 269
  },
  {
    "id": "audited-05107fa662",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "ぐーちょきパスポート",
    "shortValue": "協賛店で割引やプレゼント等の優待",
    "feeSummary": "協賛店で割引やプレゼント等の優待",
    "flowSummary": "県・市町村窓口等で取得し提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住、または子どもが県内に通学・通園する18歳年度末までの子育て家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ぐーちょきパスポート",
        "url": "https://smilelife.pref.gunma.jp/passport/guchoki/"
      }
    ],
    "displayOrder": 270
  },
  {
    "id": "audited-88bef836e9",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "子ども医療費助成",
    "shortValue": "入院・通院とも所得制限、自己負担、窓口立替なしで無料化",
    "feeSummary": "入院・通院とも所得制限、自己負担、窓口立替なしで無料化",
    "flowSummary": "居住市町村で受給資格登録",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住・医療保険加入の高校生世代までの子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成",
        "url": "https://www.pref.gunma.jp/page/3173.html"
      }
    ],
    "displayOrder": 271
  },
  {
    "id": "audited-3e5ebb6ca5",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "母子家庭等・父子家庭医療費助成",
    "shortValue": "保険診療の自己負担を助成",
    "feeSummary": "保険診療の自己負担を助成",
    "flowSummary": "居住市町村で受給資格登録・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "母子家庭等・父子家庭医療費助成",
        "url": "https://www.pref.gunma.jp/page/3175.html"
      }
    ],
    "displayOrder": 272
  },
  {
    "id": "audited-aa06900747",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "難聴児補聴器購入等支援事業",
    "shortValue": "購入・更新・修理費と基準額の低い方の3分の2を助成",
    "feeSummary": "購入・更新・修理費と基準額の低い方の3分の2を助成",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳年度末までの難聴児",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "難聴児補聴器購入等支援事業",
        "url": "https://www.pref.gunma.jp/page/752401.html"
      }
    ],
    "displayOrder": 273
  },
  {
    "id": "audited-81a1db09b3",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "所得等に応じた月額上限を超える対象疾病の医療費を助成",
    "feeSummary": "所得等に応じた月額上限を超える対象疾病の医療費を助成",
    "flowSummary": "管轄保健福祉事務所へ申請。中核市は各市窓口",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.gunma.jp/site/shinsei/2537.html"
      }
    ],
    "displayOrder": 274
  },
  {
    "id": "audited-7e9fc6425d",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "群馬県高校生等奨学のための給付金（国公立・私立）",
    "shortValue": "授業料以外の教育費を返還不要で給付。令和8年度から対象所得層を拡充",
    "feeSummary": "授業料以外の教育費を返還不要で給付。令和8年度から対象所得層を拡充",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "群馬県高校生等奨学のための給付金（国公立・私立）",
        "url": "https://www.pref.gunma.jp/site/kyouiku/4650.html"
      }
    ],
    "displayOrder": 275
  },
  {
    "id": "audited-16ebebbe5f",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "群馬県教育文化事業団高等学校等奨学金",
    "shortValue": "修学資金を貸与",
    "feeSummary": "修学資金を貸与",
    "flowSummary": "在学校等を通して申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "学力・家計等の要件を満たす高校生等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "群馬県教育文化事業団高等学校等奨学金",
        "url": "https://www.pref.gunma.jp/site/kyouiku/4662.html"
      }
    ],
    "displayOrder": 276
  },
  {
    "id": "audited-bf64f55f49",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "県営住宅の子育て世帯向け入居要件緩和",
    "shortValue": "収入基準を月25万9千円以下へ緩和し、優先入居・子育て支援住宅の対象を拡充",
    "feeSummary": "収入基準を月25万9千円以下へ緩和し、優先入居・子育て支援住宅の対象を拡充",
    "flowSummary": "群馬県住宅供給公社へ申込",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "18歳未満の子を扶養し県営住宅の要件を満たす世帯",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "県営住宅の子育て世帯向け入居要件緩和",
        "url": "https://www.pref.gunma.jp/page/750781.html"
      }
    ],
    "displayOrder": 277
  },
  {
    "id": "audited-1ae510c9c9",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金貸付金",
    "shortValue": "進学・生活・住宅等12種類の資金を貸付",
    "feeSummary": "進学・生活・住宅等12種類の資金を貸付",
    "flowSummary": "県保健福祉事務所へ事前相談・申請。前橋市・高崎市は各市",
    "conditionText": "20歳未満の子を扶養するひとり親、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金貸付金",
        "url": "https://www.pref.gunma.jp/page/1811.html"
      }
    ],
    "displayOrder": 278
  },
  {
    "id": "audited-c254d43085",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "time",
    "title": "ひとり親家庭子育て支援事業",
    "shortValue": "支援者による子どもの一時預かり",
    "feeSummary": "支援者による子どもの一時預かり",
    "flowSummary": "居住地域の県保健福祉事務所等へ相談・申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "残業、冠婚葬祭等で一時的に子育てが困難なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭子育て支援事業",
        "url": "https://www.pref.gunma.jp/page/1808.html"
      }
    ],
    "displayOrder": 279
  },
  {
    "id": "audited-e4f3702295",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "learning",
    "title": "母子家庭等就業・自立支援センター",
    "shortValue": "就業・養育費相談、職業紹介、無料講習、求人情報",
    "feeSummary": "就業・養育費相談、職業紹介、無料講習、求人情報",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "母子家庭等就業・自立支援センター",
        "url": "https://www.pref.gunma.jp/page/722280.html"
      }
    ],
    "displayOrder": 280
  },
  {
    "id": "audited-585fa60c5a",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "受講費用の一部や資格取得期間中の生活費を給付",
    "feeSummary": "受講費用の一部や資格取得期間中の生活費を給付",
    "flowSummary": "市または県保健福祉事務所へ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.gunma.jp/page/4159.html"
      }
    ],
    "displayOrder": 281
  },
  {
    "id": "audited-e90f21196c",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学50万円、就職20万円、家賃月7万円を12か月まで貸付。就業継続等で返還免除あり",
    "feeSummary": "入学50万円、就職20万円、家賃月7万円を12か月まで貸付。就業継続等で返還免除あり",
    "flowSummary": "群馬県社会福祉協議会へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.gunma.jp/page/4159.html"
      }
    ],
    "displayOrder": 282
  },
  {
    "id": "audited-723a2f9457",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "learning",
    "title": "母子生活支援施設",
    "shortValue": "母子で入所し、生活・仕事・子育て等の相談支援を受ける",
    "feeSummary": "母子で入所し、生活・仕事・子育て等の相談支援を受ける",
    "flowSummary": "居住市町村の福祉事務所等へ相談",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "子どもの養育や生活に困難を抱える母子家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "母子生活支援施設",
        "url": "https://www.pref.gunma.jp/page/1812.html"
      }
    ],
    "displayOrder": 283
  },
  {
    "id": "audited-d551111acb",
    "level": "prefecture",
    "municipality": "群馬県",
    "category": "cost",
    "title": "小児慢性特定疾病児童日常生活用具給付",
    "shortValue": "特殊寝台等の日常生活用具を給付",
    "feeSummary": "特殊寝台等の日常生活用具を給付",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "小児慢性特定疾病の認定を受け在宅療養する子ども等。市町村要件あり",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病児童日常生活用具給付",
        "url": "https://www.pref.gunma.jp/page/2821.html"
      }
    ],
    "displayOrder": 284
  },
  {
    "id": "audited-8b31dda1aa",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "パパ・ママ応援ショップ",
    "shortValue": "協賛店で割引や特典",
    "feeSummary": "協賛店で割引や特典",
    "flowSummary": "LINE等で優待カードを取得し提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内在住・在勤で18歳年度末までの子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "パパ・ママ応援ショップ",
        "url": "https://www.pref.saitama.lg.jp/a0607/ouen/papamamafaq-user.html"
      }
    ],
    "displayOrder": 285
  },
  {
    "id": "audited-8ae57d5070",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "子ども医療費助成",
    "shortValue": "保険診療の自己負担を助成。対象年齢・負担等は市町村ごとに異なる",
    "feeSummary": "保険診療の自己負担を助成。対象年齢・負担等は市町村ごとに異なる",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "市町村が定める年齢・所得等の要件を満たす子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成",
        "url": "https://www.pref.saitama.lg.jp/a0306/seikatsuguide-text05.html"
      }
    ],
    "displayOrder": 286
  },
  {
    "id": "audited-17ac848ce1",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "ひとり親家庭等医療費助成",
    "shortValue": "保険診療の自己負担を助成。市町村により一部負担等が異なる",
    "feeSummary": "保険診療の自己負担を助成。市町村により一部負担等が異なる",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等医療費助成",
        "url": "https://www.pref.saitama.lg.jp/a0702/hitorioya.html"
      }
    ],
    "displayOrder": 287
  },
  {
    "id": "audited-6a66314dc2",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "feeSummary": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "flowSummary": "県保健所等へ申請。指定市・中核市は各市窓口",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.saitama.lg.jp/a0704/boshi/newsyouman.html"
      }
    ],
    "displayOrder": 288
  },
  {
    "id": "audited-0b74a72784",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費助成",
    "shortValue": "補聴器購入費の一部を県と市町村が助成",
    "feeSummary": "補聴器購入費の一部を県と市町村が助成",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "身体障害者手帳対象外の軽度・中等度難聴児。市町村要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費助成",
        "url": "https://www.pref.saitama.lg.jp/documents/211432/youkou.pdf"
      }
    ],
    "displayOrder": 289
  },
  {
    "id": "audited-53d0a3072b",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "埼玉県高校生等奨学のための給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "埼玉県高校生等奨学のための給付金",
        "url": "https://www.pref.saitama.lg.jp/f2204/j-s/s-kyuhukin.html"
      }
    ],
    "displayOrder": 290
  },
  {
    "id": "audited-b3a10f714d",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金貸付金",
    "shortValue": "修学・生活・住宅・転宅等12種類の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等12種類の資金を無利子または低利で貸付",
    "flowSummary": "居住市町村または県福祉事務所へ事前相談・申請",
    "conditionText": "20歳未満の子を扶養するひとり親、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金貸付金",
        "url": "https://www.pref.saitama.lg.jp/a0607/hitorioya/20230629.html"
      }
    ],
    "displayOrder": 291
  },
  {
    "id": "audited-c36509d517",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による家事・保育等の支援",
    "feeSummary": "家庭生活支援員による家事・保育等の支援",
    "flowSummary": "居住市町村のひとり親担当窓口へ相談",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "就学・疾病等で一時的に生活援助や保育が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.saitama.lg.jp/b0603/hf-bosihukusi.html"
      }
    ],
    "displayOrder": 292
  },
  {
    "id": "audited-03ce1fee19",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "受講費用の一部や修業期間中の生活費を給付",
    "feeSummary": "受講費用の一部や修業期間中の生活費を給付",
    "flowSummary": "市または県福祉事務所へ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.saitama.lg.jp/b0601/hitorioyajiritsusien.html"
      }
    ],
    "displayOrder": 293
  },
  {
    "id": "audited-1b1ae594fb",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学・就職準備金や家賃相当額を貸付。県内就業継続等で返還免除あり",
    "feeSummary": "入学・就職準備金や家賃相当額を貸付。県内就業継続等で返還免除あり",
    "flowSummary": "埼玉県社会福祉協議会等へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.saitama.lg.jp/b0601/hitorioyajiritsusien.html"
      }
    ],
    "displayOrder": 294
  },
  {
    "id": "audited-fb115baff1",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "learning",
    "title": "埼玉県ひとり親家庭就業・自立支援センター",
    "shortValue": "就業・生活・養育費等の相談や講習・情報提供",
    "feeSummary": "就業・生活・養育費等の相談や講習・情報提供",
    "flowSummary": "センターへ電話等で相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "埼玉県ひとり親家庭就業・自立支援センター",
        "url": "https://www.pref.saitama.lg.jp/a0607/hitorioya/index.html"
      }
    ],
    "displayOrder": 295
  },
  {
    "id": "audited-4ff02c5e66",
    "level": "prefecture",
    "municipality": "埼玉県",
    "category": "cost",
    "title": "県営住宅の子育て・ひとり親世帯向け優遇",
    "shortValue": "募集時の優先枠・抽選優遇等の対象となる場合がある",
    "feeSummary": "募集時の優先枠・抽選優遇等の対象となる場合がある",
    "flowSummary": "県営住宅の募集へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県営住宅の要件を満たす子育て世帯、ひとり親世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅の子育て・ひとり親世帯向け優遇",
        "url": "https://www.pref.saitama.lg.jp/a1107/kenei/index.html"
      }
    ],
    "displayOrder": 296
  },
  {
    "id": "audited-9589eb52ce",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "子育て応援カード『チーパス』",
    "shortValue": "協賛店で割引や特典",
    "feeSummary": "協賛店で割引や特典",
    "flowSummary": "電子版またはカードを提示",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住の18歳未満の子どもまたは妊婦がいる家庭",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "子育て応援カード『チーパス』",
        "url": "https://www.pref.chiba.lg.jp/kosodate/chipass-smile/index.html"
      }
    ],
    "displayOrder": 297
  },
  {
    "id": "audited-d5cfb4c160",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "子ども医療費助成制度",
    "shortValue": "保険診療の自己負担を助成。対象年齢・負担等は市町村ごとに異なる",
    "feeSummary": "保険診療の自己負担を助成。対象年齢・負担等は市町村ごとに異なる",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "市町村が定める年齢・所得等の要件を満たす子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成制度",
        "url": "https://www.pref.chiba.lg.jp/jika/boshi/kodomo-iryo/nyuuyouji.html"
      }
    ],
    "displayOrder": 298
  },
  {
    "id": "audited-5fcca5ea6d",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "ひとり親家庭等医療費等助成",
    "shortValue": "保険診療の自己負担から一部負担額を除いた額を助成",
    "feeSummary": "保険診療の自己負担から一部負担額を除いた額を助成",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と18歳年度末までの子ども等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等医療費等助成",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/shien/book/hitori-kenkou.html"
      }
    ],
    "displayOrder": 299
  },
  {
    "id": "audited-e240248b60",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "feeSummary": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "flowSummary": "保健所等へ申請。政令市・中核市は各市窓口",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.chiba.lg.jp/shippei/shouman.html"
      }
    ],
    "displayOrder": 300
  },
  {
    "id": "audited-3c709f8a34",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費助成",
    "shortValue": "補聴器購入費の一部（原則3分の2）を助成",
    "feeSummary": "補聴器購入費の一部（原則3分の2）を助成",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "身体障害者手帳対象外の18歳未満の難聴児。所得等の要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費助成",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/shien/book/shougai-kenkou.html"
      }
    ],
    "displayOrder": 301
  },
  {
    "id": "audited-b6074241ad",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "千葉県高校生等奨学のための給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "電子申請または在学校を通して申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "千葉県高校生等奨学のための給付金",
        "url": "https://www.pref.chiba.lg.jp/kyouiku/zaimu/jugyouryoutou/syougakunotamenokyuuhukin.html"
      }
    ],
    "displayOrder": 302
  },
  {
    "id": "audited-5b3cc90ea5",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "低所得世帯の子どもの大学等受験料・模試費用支援",
    "shortValue": "大学等受験料や高校・大学受験模試費用を上限内で助成",
    "feeSummary": "大学等受験料や高校・大学受験模試費用を上限内で助成",
    "flowSummary": "居住地域の窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "住民税非課税世帯または同等所得水準のひとり親世帯等",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "低所得世帯の子どもの大学等受験料・模試費用支援",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/konkyusya/zyukenryoushien.html"
      }
    ],
    "displayOrder": 303
  },
  {
    "id": "audited-9a906c3440",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "母子・父子・寡婦福祉資金貸付金",
    "shortValue": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "flowSummary": "居住市区町村または健康福祉センターへ事前相談・申請",
    "conditionText": "20歳未満の子を扶養するひとり親、寡婦等",
    "programs": [
      {
        "title": "母子・父子・寡婦福祉資金貸付金",
        "url": "https://www.pref.chiba.lg.jp/jika/boshi/boshi-fu/kashitsuke.html"
      }
    ],
    "displayOrder": 304
  },
  {
    "id": "audited-833e5f71e9",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による家事・保育等の支援",
    "feeSummary": "家庭生活支援員による家事・保育等の支援",
    "flowSummary": "実施市町村へ相談・申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "就学・疾病・出張等で一時的に生活援助や保育が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/shien/book/hitori-kenkou.html"
      }
    ],
    "displayOrder": 305
  },
  {
    "id": "audited-9789d7cb3a",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "受講費用の一部や修業期間中の生活費を給付",
    "feeSummary": "受講費用の一部や修業期間中の生活費を給付",
    "flowSummary": "市区または県健康福祉センターへ受講前に相談",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/shien/book/hitori-kenkou.html"
      }
    ],
    "displayOrder": 306
  },
  {
    "id": "audited-cc81e13ebd",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "learning",
    "title": "千葉県母子家庭等就業・自立支援センター",
    "shortValue": "就業・生活・養育費等の相談、講習、求人情報",
    "feeSummary": "就業・生活・養育費等の相談、講習、求人情報",
    "flowSummary": "センターへ相談",
    "conditionText": "ひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "千葉県母子家庭等就業・自立支援センター",
        "url": "https://www.pref.chiba.lg.jp/kenshidou/shien/book/hitori-kenkou.html"
      }
    ],
    "displayOrder": 307
  },
  {
    "id": "audited-9714af9c5c",
    "level": "prefecture",
    "municipality": "千葉県",
    "category": "cost",
    "title": "県営住宅のひとり親・子育て世帯向け優遇",
    "shortValue": "募集時の優先入居・抽選倍率優遇等の対象となる場合がある",
    "feeSummary": "募集時の優先入居・抽選倍率優遇等の対象となる場合がある",
    "flowSummary": "県営住宅の募集へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県営住宅の要件を満たすひとり親・子育て世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "県営住宅のひとり親・子育て世帯向け優遇",
        "url": "https://www.pref.chiba.lg.jp/juutaku/kanri/keneijuutaku/"
      }
    ],
    "displayOrder": 308
  },
  {
    "id": "audited-2605cf4acc",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cash",
    "title": "018サポート",
    "shortValue": "所得制限なしで子ども1人当たり月額5,000円を支給",
    "feeSummary": "所得制限なしで子ども1人当たり月額5,000円を支給",
    "flowSummary": "東京都へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "都内在住の0歳から18歳年度末までの子ども",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "018サポート",
        "url": "https://018support.metro.tokyo.lg.jp/faq/"
      }
    ],
    "displayOrder": 309
  },
  {
    "id": "audited-66a8d38253",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "保育料等の無償化・負担軽減",
    "shortValue": "国制度に都独自支援を加え、保育料等を無償化・軽減。施設・区市町村で手続差あり",
    "feeSummary": "国制度に都独自支援を加え、保育料等を無償化・軽減。施設・区市町村で手続差あり",
    "flowSummary": "施設または区市町村へ確認",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "都内で対象の保育サービス等を利用する子育て世帯",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "保育料等の無償化・負担軽減",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/mushouka"
      }
    ],
    "displayOrder": 310
  },
  {
    "id": "audited-74bf8fe154",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "time",
    "title": "ベビーシッター利用支援事業（一時預かり利用支援）",
    "shortValue": "認定事業者のベビーシッター利用料の一部を助成",
    "feeSummary": "認定事業者のベビーシッター利用料の一部を助成",
    "flowSummary": "実施区市町村の案内に従い利用・申請",
    "timingText": "0歳〜5歳が目安",
    "conditionText": "日常生活上の事情等で一時的に保育が必要な実施区市町村の家庭",
    "minChildAge": 0,
    "maxChildAge": 5,
    "programs": [
      {
        "title": "ベビーシッター利用支援事業（一時預かり利用支援）",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hoiku/bs/bsitijiazukari"
      }
    ],
    "displayOrder": 311
  },
  {
    "id": "audited-912455a69a",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "都営住宅における子育て支援",
    "shortValue": "子育て世帯向け募集や期限付き入居等の対象となる場合がある",
    "feeSummary": "子育て世帯向け募集や期限付き入居等の対象となる場合がある",
    "flowSummary": "都営住宅の募集へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "都営住宅の要件を満たす子育て世帯・ひとり親世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "都営住宅における子育て支援",
        "url": "https://www.juutakuseisaku.metro.tokyo.lg.jp/toei_jutaku/kanri/bosyu/265toei5"
      }
    ],
    "displayOrder": 312
  },
  {
    "id": "audited-90fda6b4c4",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "東京都公立学校給食費負担軽減事業",
    "shortValue": "都と区市町村等が学校給食費の保護者負担軽減を支援",
    "feeSummary": "都と区市町村等が学校給食費の保護者負担軽減を支援",
    "flowSummary": "在籍校または区市町村へ確認",
    "timingText": "6歳〜15歳が目安",
    "conditionText": "都内公立小中学校等に通う子どもの保護者。実施方法は区市町村等で異なる",
    "minChildAge": 6,
    "maxChildAge": 15,
    "programs": [
      {
        "title": "東京都公立学校給食費負担軽減事業",
        "url": "https://www.kyoiku.metro.tokyo.lg.jp/information/press/2024/07/2024071602"
      }
    ],
    "displayOrder": 313
  },
  {
    "id": "audited-137b6cc3ca",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "都立大学等の授業料減免制度",
    "shortValue": "所得・子ども人数等に応じ授業料を全額または一部免除",
    "feeSummary": "所得・子ども人数等に応じ授業料を全額または一部免除",
    "flowSummary": "大学の案内に従い申請",
    "timingText": "18歳〜22歳が目安",
    "conditionText": "都内在住要件等を満たす都立大学等の学生・扶養者",
    "minChildAge": 18,
    "maxChildAge": 22,
    "programs": [
      {
        "title": "都立大学等の授業料減免制度",
        "url": "https://www.soumu.metro.tokyo.lg.jp/08daigaku/jissitsu"
      }
    ],
    "displayOrder": 314
  },
  {
    "id": "audited-59cef677f3",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "子ども医療費助成（マル乳・マル子・マル青）",
    "shortValue": "保険診療の自己負担を助成。区市町村により一部負担等が異なる",
    "feeSummary": "保険診療の自己負担を助成。区市町村により一部負担等が異なる",
    "flowSummary": "居住区市町村で医療証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "都内在住で乳幼児から高校生等年代までの子どもを養育する方",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子ども医療費助成（マル乳・マル子・マル青）",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/ja/seikatsu/josei/maruko"
      }
    ],
    "displayOrder": 315
  },
  {
    "id": "audited-3364a71b36",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "ひとり親家庭等医療費助成（マル親）",
    "shortValue": "保険診療の自己負担を助成",
    "feeSummary": "保険診療の自己負担を助成",
    "flowSummary": "居住区市町村で医療証を申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等医療費助成（マル親）",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/seikatsu/josei/maruoya"
      }
    ],
    "displayOrder": 316
  },
  {
    "id": "audited-74a1f9118c",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "feeSummary": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "flowSummary": "区市町村等の窓口へ申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/kosodate/josei/syoman/top"
      }
    ],
    "displayOrder": 317
  },
  {
    "id": "audited-49986de36c",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "中等度難聴児発達支援事業",
    "shortValue": "補聴器購入費の基準額と実費の低い方の9割（低所得世帯等は全額）を助成",
    "feeSummary": "補聴器購入費の基準額と実費の低い方の9割（低所得世帯等は全額）を助成",
    "flowSummary": "購入前に居住区市町村へ申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "都内在住で身体障害者手帳対象外の18歳未満の中等度難聴児。所得等の要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "中等度難聴児発達支援事業",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/shougai/nichijo/chutoudo_nanchouji/chutoudo_nanchouji_oshirase"
      }
    ],
    "displayOrder": 318
  },
  {
    "id": "audited-2f5c617d1a",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "東京都高校生等奨学のための給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または都教育委員会へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が都内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "東京都高校生等奨学のための給付金",
        "url": "https://www.kyoiku.metro.tokyo.lg.jp/ja/admission/tuition/tuition/scholarship_public_school"
      }
    ],
    "displayOrder": 319
  },
  {
    "id": "audited-57050f4da3",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "母子及び父子福祉資金・女性福祉資金貸付",
    "shortValue": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "flowSummary": "区市または都福祉事務所へ事前相談・申請",
    "conditionText": "ひとり親家庭の親と子ども等",
    "programs": [
      {
        "title": "母子及び父子福祉資金・女性福祉資金貸付",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hitorioya_shien/kashitsuke"
      }
    ],
    "displayOrder": 320
  },
  {
    "id": "audited-d530845fad",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "母子家庭及び父子家庭自立支援給付金",
    "shortValue": "受講費用の一部や修業期間中の生活費を給付",
    "feeSummary": "受講費用の一部や修業期間中の生活費を給付",
    "flowSummary": "区市または都福祉事務所へ受講前に相談・申請",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "母子家庭及び父子家庭自立支援給付金",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hitorioya_shien/syurou/kyuufukin"
      }
    ],
    "displayOrder": 321
  },
  {
    "id": "audited-f2a2845d08",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学・就職準備金や家賃相当額を貸付。就業継続等で返還免除あり",
    "feeSummary": "入学・就職準備金や家賃相当額を貸付。就業継続等で返還免除あり",
    "flowSummary": "東京都社会福祉協議会等へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hitorioya_shien/syurou/kyuufukin"
      }
    ],
    "displayOrder": 322
  },
  {
    "id": "audited-589442a5bb",
    "level": "prefecture",
    "municipality": "東京都",
    "category": "learning",
    "title": "東京都ひとり親家庭支援センター はあと",
    "shortValue": "就業・生活・養育費・面会交流等の相談と支援",
    "feeSummary": "就業・生活・養育費・面会交流等の相談と支援",
    "flowSummary": "センターへ電話・来所等で相談",
    "conditionText": "都内のひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "東京都ひとり親家庭支援センター はあと",
        "url": "https://www.fukushi.metro.tokyo.lg.jp/kodomo/hitorioya_shien/soudan"
      }
    ],
    "displayOrder": 323
  },
  {
    "id": "audited-9921bc0abd",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "かながわ子育て応援パスポート",
    "shortValue": "協力施設・店舗で割引や特典",
    "feeSummary": "協力施設・店舗で割引や特典",
    "flowSummary": "電子パスポートを取得し提示",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "県内の子育て家庭",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "かながわ子育て応援パスポート",
        "url": "https://www.pref.kanagawa.jp/docs/sy8/kosodateshien.html"
      }
    ],
    "displayOrder": 324
  },
  {
    "id": "audited-9db16825d6",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "小児医療費助成事業",
    "shortValue": "県基準は中学卒業までの入院・小学卒業までの通院を助成。市町村独自拡充あり",
    "feeSummary": "県基準は中学卒業までの入院・小学卒業までの通院を助成。市町村独自拡充あり",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜15歳が目安",
    "conditionText": "市町村が定める年齢・所得等の要件を満たす子ども",
    "minChildAge": 0,
    "maxChildAge": 15,
    "programs": [
      {
        "title": "小児医療費助成事業",
        "url": "https://www.pref.kanagawa.jp/docs/he8/faq/p3147.html"
      }
    ],
    "displayOrder": 325
  },
  {
    "id": "audited-91fb1569cf",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "ひとり親家庭等医療費助成",
    "shortValue": "保険診療の自己負担を助成。対象・負担等は市町村で異なる",
    "feeSummary": "保険診療の自己負担を助成。対象・負担等は市町村で異なる",
    "flowSummary": "居住市町村へ申請",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "所得等の要件を満たすひとり親家庭の親と子ども等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "ひとり親家庭等医療費助成",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/"
      }
    ],
    "displayOrder": 326
  },
  {
    "id": "audited-b78fd00455",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "小児慢性特定疾病医療費助成",
    "shortValue": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "feeSummary": "対象疾病の医療費自己負担を所得等に応じて軽減",
    "flowSummary": "県保健福祉事務所等へ申請。指定市・中核市は各市窓口",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "認定基準を満たす18歳未満の子ども（継続認定は20歳未満）",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "小児慢性特定疾病医療費助成",
        "url": "https://www.pref.kanagawa.jp/docs/he8/cnt/f417255/index.html"
      }
    ],
    "displayOrder": 327
  },
  {
    "id": "audited-1b6dc4b8de",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "軽度・中等度難聴児補聴器購入費補助",
    "shortValue": "補聴器購入・修理費を原則県・市町村各3分の1ずつ補助",
    "feeSummary": "補聴器購入・修理費を原則県・市町村各3分の1ずつ補助",
    "flowSummary": "購入前に居住市町村へ相談・申請",
    "timingText": "0歳〜17歳が目安",
    "conditionText": "県内在住で身体障害者手帳対象外の18歳未満の難聴児。所得等の要件あり",
    "minChildAge": 0,
    "maxChildAge": 17,
    "programs": [
      {
        "title": "軽度・中等度難聴児補聴器購入費補助",
        "url": "https://www.pref.kanagawa.jp/docs/yv4/cnt/f536418/index.html"
      }
    ],
    "displayOrder": 328
  },
  {
    "id": "audited-204f696fdb",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "神奈川県高校生等奨学給付金",
    "shortValue": "授業料以外の教育費を返還不要で給付",
    "feeSummary": "授業料以外の教育費を返還不要で給付",
    "flowSummary": "在学校または県担当窓口へ申請",
    "timingText": "15歳〜18歳が目安",
    "conditionText": "保護者が県内在住し所得等の要件を満たす高校生等の世帯",
    "minChildAge": 15,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "神奈川県高校生等奨学給付金",
        "url": "https://www.pref.kanagawa.jp/docs/en7/cnt/f531013/tsujyo.html"
      }
    ],
    "displayOrder": 329
  },
  {
    "id": "audited-c62eb353b3",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "母子父子寡婦福祉資金貸付金",
    "shortValue": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "feeSummary": "修学・生活・住宅・転宅等の資金を無利子または低利で貸付",
    "flowSummary": "市または県保健福祉事務所へ事前相談・申請",
    "conditionText": "20歳未満の子を扶養するひとり親、寡婦等",
    "programs": [
      {
        "title": "母子父子寡婦福祉資金貸付金",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/kashitsuke.html"
      }
    ],
    "displayOrder": 330
  },
  {
    "id": "audited-62ea422be1",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
    "shortValue": "受講費用の一部や修業期間中の生活費を給付。対象資格には県独自上乗せあり",
    "feeSummary": "受講費用の一部や修業期間中の生活費を給付。対象資格には県独自上乗せあり",
    "flowSummary": "市または県保健福祉事務所へ受講前に相談",
    "conditionText": "要件を満たし教育訓練・資格取得を行うひとり親",
    "programs": [
      {
        "title": "自立支援教育訓練給付金・高等職業訓練促進給付金",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/josei-kyuufukin.html"
      }
    ],
    "displayOrder": 331
  },
  {
    "id": "audited-7632e10c03",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
    "shortValue": "入学・就職準備金や家賃相当額を貸付。就業継続等で返還免除あり",
    "feeSummary": "入学・就職準備金や家賃相当額を貸付。就業継続等で返還免除あり",
    "flowSummary": "神奈川県社会福祉協議会等へ申請",
    "conditionText": "訓練促進給付金受給者または自立支援プログラム策定者等",
    "programs": [
      {
        "title": "ひとり親家庭高等職業訓練促進資金・住宅支援資金",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/kashitsuke.html"
      }
    ],
    "displayOrder": 332
  },
  {
    "id": "audited-b43890ed24",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "learning",
    "title": "神奈川県母子家庭等就業・自立支援センター",
    "shortValue": "就業・生活・養育費等の相談と支援",
    "feeSummary": "就業・生活・養育費等の相談と支援",
    "flowSummary": "センターへ相談",
    "conditionText": "県内のひとり親家庭の母・父、寡婦等",
    "programs": [
      {
        "title": "神奈川県母子家庭等就業・自立支援センター",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/"
      }
    ],
    "displayOrder": 333
  },
  {
    "id": "audited-66720a7973",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "cost",
    "title": "子育て世帯向け住宅・県営住宅の優遇",
    "shortValue": "子育て世帯向け住宅情報、県営住宅の優先入居等の対象となる場合がある",
    "feeSummary": "子育て世帯向け住宅情報、県営住宅の優先入居等の対象となる場合がある",
    "flowSummary": "住宅ごとの募集へ申込",
    "timingText": "0歳〜18歳が目安",
    "conditionText": "要件を満たす子育て世帯・ひとり親世帯等",
    "minChildAge": 0,
    "maxChildAge": 18,
    "programs": [
      {
        "title": "子育て世帯向け住宅・県営住宅の優遇",
        "url": "https://www.pref.kanagawa.jp/docs/h5z/cnt/f6022/p28450.html"
      }
    ],
    "displayOrder": 334
  },
  {
    "id": "audited-f68b338f91",
    "level": "prefecture",
    "municipality": "神奈川県",
    "category": "time",
    "title": "ひとり親家庭等日常生活支援事業",
    "shortValue": "家庭生活支援員による家事・保育等の支援",
    "feeSummary": "家庭生活支援員による家事・保育等の支援",
    "flowSummary": "実施市町村へ相談・申請",
    "timingText": "0歳〜19歳が目安",
    "conditionText": "就学・疾病等で一時的に生活援助や保育が必要なひとり親家庭等",
    "minChildAge": 0,
    "maxChildAge": 19,
    "programs": [
      {
        "title": "ひとり親家庭等日常生活支援事業",
        "url": "https://www.pref.kanagawa.jp/docs/he8/hitorioya-support/"
      }
    ],
    "displayOrder": 335
  }
];
