// @ts-check

/** 
 * v1.0.4 
 */

/** @type {Array<Array<string>>} */
const titles = [
    ["セカイ"],
    ["ワーワー", "ワールド"],
    ["群青", "讃歌"],
    ["アイデンティティ"],
    ["青色", "絵具"],
    ["コスモ", "スパイス"],
    ["徳川", "カップ", "ヌードル", "禁止令"],
    ["サラマンダー"],
    ["Journey"],
    ["Be", "The", "MUSIC!"],
    ["NEO"],
    ["熱風"],
    ["Worlders"],
    ["Tell", "Your", "World"],
    ["ネクスト", "ネスト"],
    ["メルト"],
    ["初音ミクの", "消失"],
    ["Blessing"],
    ["alive"],
    ["ワールド", "イズ", "マイン"],
    ["Hand", "in", "Hand"],
    ["Gimme", "×", "Gimme"],
    ["ジャンキー", "ナイト", "タウン", "オーケストラ"],
    ["on", "the", "rocks"],
    ["39", "みゅーじっく！"],
    ["Leia", "- Remind"],
    ["ローリン", "ガール"],
    ["裏表", "ラバーズ"],
    ["アンノウン", "・", "マザーグース"],
    ["愛されなくても", "君がいる"],
    ["ODDS", "＆", "ENDS"],
    ["グリーンライツ", "・", "セレナーデ"],
    ["＊ハロー、", "プラネット。"],
    ["千本桜"],
    ["ブレス", "・", "ユア", "・", "ブレス"],
    ["ワールズエンド", "・", "ダンスホール"],
    ["ヒビカセ"],
    ["Brand", "New", "Day"],
    ["みくみくに", "してあげる♪", "【してやんよ】"],
    ["初音ミクの", "激唱"],
    ["花を", "唄う"],
    ["そうだった！！"],
    ["泡沫", "未来"],
    ["magic", "number"],
    ["炉心", "融解"],
    ["マシンガン", "ポエム", "ドール"],
    ["拝啓", "ドッペルゲンガー"],
    ["トキヲ", "・", "ファンカ"],
    ["だれかの", "心臓に", "なれたなら"],
    ["右肩の", "蝶"],
    ["しっく", "おぶ", "はうす！"],
    ["初音", "天地", "開闢", "神話"],
    ["悪ノ", "娘"],
    ["悪ノ", "召使"],
    ["去り人達の", "ワルツ"],
    ["ラスト", "スコア"],
    ["サンドリヨン", "10th", "Anniversary"],
    ["君色", "マリン", "スノウ"],
    ["ジウダス"],
    ["Miku"],
    ["マトリョシカ"],
    ["ドーナツ", "ホール"],
    ["砂の", "惑星"],
    ["ルカルカ", "★", "ナイトフィーバー"],
    ["ピアノ", "×", "フォルテ", "×", "スキャンダル"],
    ["千年の", "独奏歌"],
    ["ONESELF"],
    ["ブラック", "★", "ロックシューター"],
    ["未完成", "讃歌"],
    ["脳漿", "炸裂", "ガール"],
    ["ぼくらの", "16bit", "戦争"],
    ["フロイライン", "＝", "ビブリョチカ"],
    ["それ", "でもいいんだよ"],
    ["フューチャー", "・", "イヴ"],
    ["アンハッピー", "リフレイン"],
    ["ダブル", "ラリアット"],
    ["インビジブル"],
    ["Bad", "∞", "End", "∞", "Night"],
    ["こちら、", "幸福安心委員会", "です。"],
    ["ÅMARA", "(大未来電脳)"],
    ["いちにのさんで"],
    ["Change", "me"],
    ["パラジクロロベンゼン"],
    ["星屑", "ユートピア"],
    ["あったかいと"],
    ["陽だまりの", "セツナ"],
    ["What's", "up?", "Pop!"],
    ["腐れ外道と", "チョコレゐト"],
    ["カンタレラ"],
    ["FREELY", "TOMORROW"],
    ["リンちゃんなう！"],
    ["夜明けと", "蛍"],
    ["p.h."],
    ["Goodbye"],
    ["SnowMix♪"],
    ["星界ちゃんと", "可不ちゃんの", "おつかい合騒曲"],
    ["天使の", "翼。"],
    ["Copycat"],
    ["レイニー", "スノー", "ドロップ"],
    ["Where", "shall", "we", "go?"],
    ["ココロ"],
    ["ストロボ", "ラスト"],
    ["パレットには", "君がいっぱい"],
    ["Q"],
    ["ヤミナベ!!!!"],
    ["39"],
    ["エピローグに", "君はいない"],
    ["Highlight"],
    ["トラッシュ", "・", "アンド", "・", "トラッシュ！"],
    ["Vampire's", "∞", "pathoS"],
    ["METEOR"],
    ["インタビュア"],
    ["私の恋は", "ヘルファイア"],
    ["スノーマン"],
    ["魔法みたいな", "ミュージック！"],
    ["名も無き", "革命"],
    ["悪食娘", "コンチータ"],
    ["眠らせ姫からの", "贈り物"],
    ["円尾坂の", "仕立屋"],
    ["悪徳の", "ジャッジメント"],
    ["Sharing", "The", "World"],
    ["エターナル", "アリア"],
    ["Blue", "Star"],
    ["人生"],
    ["Wonder", "Style"],
    ["スターダスト", "メドレー"],
    ["UNDERWATER"],
    ["Afterglow"],
    ["心拍", "ペアリング"],
    ["Decade"],
    ["新人類"],
    ["ずんだ", "パーリナイ"],
    ["Disco", "No.39"],
    ["ボトル", "ケーキ"],
    ["ブルー", "プラネット"],
    ["HERO"],
    ["CIRCUS", "PANIC!!!"],
    ["Un-Lock"],
    ["ラッキー", "☆", "オーブ"],
    ["アイムマイン"],
    ["まにまに"],
    ["豚になって", "yeah", "yeah"],
    ["デビル", "じゃないもん"],
    ["番凩"],
    ["Dear"],
    ["Cool", "Me", "Down"],
    ["ARQETYPE"],
    ["On&On"],
    ["ショウタイム", "×", "オーディエンス"],
    ["難聴系男子が", "倒せない"],
    ["オーバーコード"],
    ["一千光年"],
    ["ヒアソビ"],
    ["『んっあっあっ。』"],
    ["心泥夢", "(syndrome)"],
    ["リレイアウター"],
    ["おどロボ"],
    ["ハッピー", "チートデー"],
    ["十六歳の", "心臓"],
    ["limbo"],
    ["明鏡止水"],
    ["ハジメテノオト"],
    ["アコトバ"],
    ["幽光、", "1/fのゆらめき"],
    ["嬢王"],
    ["えれくとりっく", "・", "えんじぇう"],
    ["レッド", "ランド", "マーカー"],
    ["あいのうた"],
    ["ガーネットの", "涙"],
    ["だんだん", "早くなる"],
    ["おぎゃりないざー"],
    ["シルバー", "コレクター"],
    ["Help", "me,", "ERINNNNNN!!"],
    ["ときめき", "ジェット", "コースター"],
    ["I", "know", "愛脳."],
    ["合成する", "ミライ"],
    ["LEADER"],
    ["ダイジョブ", "ですか？"],
    ["メリー", "ゴー", "ラウンド"],
    ["イガク"],
    ["あちこち", "デートさん"],
    ["彗星ノ", "銀河"],
    ["夏夜ノ", "唄"],
    ["アンテナ39"],
    ["カルチャ"],
    ["レイヤー", "ノート"],
    ["Unpoison"],
    ["メズマライザー"],
    ["メイン", "キャラクター"],
    ["きみと", "ぼくの", "レゾナンス"],
    ["Blackjack"],
    ["生命性", "シンドロウム"],
    ["メモリア"],
    ["脳天"],
    ["パリィ"],
    ["みかぼし"],
    ["シークレット", "・", "シーカー"],
    ["はじまりの", "未来"],
    ["アンヘル"],
    ["プロトディスコ"],
    ["のだ"],
    ["夏に", "透明"],
    ["パンダ", "ヒーロー"],
    ["結ンデ", "開イテ", "羅刹ト骸"],
    ["ロキ"],
    ["テオ"],
    ["ヒバナ", "-Reloaded-"],
    ["needLe"],
    ["アスノヨゾラ", "哨戒班"],
    ["青く", "駆けろ！"],
    ["ステラ"],
    ["ウミユリ", "海底譚"],
    ["ドラマ", "ツルギー"],
    ["霽れを", "待つ"],
    ["タイム", "マシン"],
    ["from", "Y", "to", "Y"],
    ["「1」"],
    ["いかないで"],
    ["フロム", "トーキョー"],
    ["六兆年と", "一夜物語"],
    ["カゲロウ", "デイズ"],
    ["流星の", "パルス"],
    ["ロストワンの", "号哭"],
    ["ray"],
    ["Hello,", "world!"],
    ["STAGE", "OF", "SEKAI"],
    ["ゴースト", "ルール"],
    ["心拍数", "♯0822"],
    ["Peaky", "Peaky"],
    ["僕らまだ", "アンダー", "グラウンド"],
    ["オーダー", "メイド"],
    ["てらてら"],
    ["ロスト", "エンファウンド"],
    ["Voices"],
    ["Calc."],
    ["天ノ弱"],
    ["the", "WALL"],
    ["フレー"],
    ["夜もすがら", "君想ふ"],
    ["Flyway"],
    ["Hello,", "Worker"],
    ["アトラクトライト"],
    ["相生"],
    ["快晴"],
    ["glow"],
    ["星を", "繋ぐ"],
    ["サマー", "タイム", "レコード"],
    ["天樂"],
    ["purpose"],
    ["初めての", "恋が", "終わる時"],
    ["ハイドアンド", "・", "シーク"],
    ["レグルス"],
    ["インテグラル"],
    ["幾望の", "月"],
    ["すれすれ"],
    ["東京", "テディベア"],
    ["抜錨"],
    ["林檎売りの", "泡沫少女"],
    ["それでも", "僕らは", "歌うことを", "やめない"],
    ["モザイク", "ロール", "(Reloaded)"],
    ["その音が", "鳴るなら"],
    ["ワールド", "・", "ランプシェード", "[reunion]"],
    ["Henceforth"],
    ["終焉", "逃避行"],
    ["SToRY"],
    ["ハッピー", "シンセサイザ"],
    ["Nostalogic"],
    ["ツギハギ", "スタッカート"],
    ["アイドル", "新鋭隊"],
    ["ニア"],
    ["ビバハピ"],
    ["メルティランド", "ナイトメア"],
    ["モア！", "ジャンプ！", "モア！"],
    ["恋愛", "裁判"],
    ["Color", "of", "Drops"],
    ["ミルククラウン", "・", "オン", "・", "ソーネチカ"],
    ["天使の", "クローバー"],
    ["どりーみん", "チュチュ"],
    ["アイノ", "マテリアル"],
    ["ロミオと", "シンデレラ"],
    ["地球最後の", "告白を"],
    ["アイス", "ドロップ"],
    ["マシュマリー"],
    ["Happy", "Halloween"],
    ["からくり", "ピエロ"],
    ["ワールド", "ワイド", "ワンダー"],
    ["少女", "レイ"],
    ["心予報"],
    ["メタモリボン"],
    ["ダーリン", "ダンス"],
    ["イフ"],
    ["ヴァンパイア"],
    ["パラソル", "サイダー"],
    ["トリノコシティ"],
    ["DREAM", "PLACE"],
    ["フロート", "・", "プランナー"],
    ["ロンリー", "ユニバース"],
    ["気まぐれ", "メルシィ"],
    ["私は、", "私達は"],
    ["Booo!"],
    ["深海少女"],
    ["ももいろの", "鍵"],
    ["セツナ", "トリップ"],
    ["チーム", "メイト"],
    ["きゅうくらりん"],
    ["我ら", "ステイン", "バスターズ！"],
    ["白い", "雪の", "プリンセスは"],
    ["メランコリック"],
    ["悪役に", "キスシーンを"],
    ["はぐ"],
    ["さよなら", "プリンセス"],
    ["くうに", "なる"],
    ["MOTTO!!!"],
    ["JUMPIN’", "OVER", "!"],
    ["flos"],
    ["だめにんげん", "だ!"],
    ["Supernova"],
    ["ポッピン", "キャンディ", "☆", "フィーバー！"],
    ["キラー"],
    ["スーパー", "ヒーロー"],
    ["如月", "アテンション"],
    ["キャット", "フード"],
    ["妄想", "アスパルテーム"],
    ["はしる!", "とおく!", "とどく!"],
    ["snooze"],
    ["FUN!!"],
    ["劣等上等"],
    ["ドクター", "=", "ファンクビート"],
    ["フラジール"],
    ["Ready", "Steady"],
    ["Just", "Be", "Friends"],
    ["夜咄ディセイブ"],
    ["Forward"],
    ["ECHO"],
    ["RAD", "DOGS"],
    ["drop", "pop", "candy"],
    ["威風", "堂々"],
    ["幽霊", "東京"],
    ["シネマ"],
    ["トラフィック", "・", "ジャム"],
    ["Beat", "Eater"],
    ["チルドレン", "レコード"],
    ["悪魔の", "踊り方"],
    ["オルター", "エゴ"],
    ["ミライ"],
    ["ガランド"],
    ["踊"],
    ["Flyer!"],
    ["雨と", "ペトラ"],
    ["PaⅢ.", "SENSATION"],
    ["月光"],
    ["Awake", "Now"],
    ["阿吽の", "ビーツ"],
    ["街"],
    ["YY"],
    ["虚ろを", "扇ぐ"],
    ["DAYBREAK", "FRONTLINE"],
    ["帝国", "少女"],
    ["仮死化"],
    ["フェレス"],
    ["ひつじが", "いっぴき"],
    ["エゴイスト"],
    ["絶え間なく", "藍色"],
    ["シャンティ"],
    ["下剋上"],
    ["脳内", "革命", "ガール"],
    ["リアライズ"],
    ["恋は", "戦争"],
    ["CR詠ZY"],
    ["春嵐"],
    ["Beyond", "the", "way"],
    ["金木犀"],
    ["マーシャル", "・", "マキシマイザー"],
    ["え？", "ああ、", "そう。"],
    ["blender"],
    ["酔いどれ", "知らず"],
    ["烈火"],
    ["ULTRA", "C"],
    ["WAVE"],
    ["コールボーイ"],
    ["フューエル"],
    ["花溺れ"],
    ["CH4NGE"],
    ["ヘイヴン"],
    ["ファイアダンス"],
    ["ブリキノダンス"],
    ["スイート", "マジック"],
    ["ぼうけんのしょが", "きえました！"],
    ["セカイは", "まだ始まってすらいない"],
    ["脱法", "ロック"],
    ["ダンス", "ロボット", "ダンス"],
    ["ミラクル", "ペイント"],
    ["potatoに", "なっていく"],
    ["ニジイロ", "ストーリーズ"],
    ["チュルリラ", "・", "チュルリラ", "・", "ダッダッダ！"],
    ["ポジティブ", "☆", "ダンスタイム"],
    ["ワンスアポンア", "ドリーム"],
    ["お気に召すまま"],
    ["KING"],
    ["トンデモ", "ワンダーズ"],
    ["Glory", "Steady", "Go!"],
    ["テレキャスター", "ビーボーイ"],
    ["ショウタイム", "・", "ルーラー"],
    ["フィクサー"],
    ["にっこり^^", "調査隊のテーマ"],
    ["ナンセンス", "文学"],
    ["いーある", "ふぁんくらぶ"],
    ["88☆彡"],
    ["リモコン"],
    ["神の", "まにまに"],
    ["グッバイ", "宣言"],
    ["星空の", "メロディー"],
    ["エイリアン", "エイリアン"],
    ["踊れ", "オーケストラ"],
    ["エゴロック"],
    ["ラブカ？"],
    ["ネトゲ廃人", "シュプレヒコール"],
    ["星空", "オーケストラ"],
    ["1925"],
    ["Mr.", "Showtime"],
    ["おこちゃま", "戦争"],
    ["箱庭の", "コラル"],
    ["嗚呼、", "素晴らしき", "ニャン生"],
    ["太陽系", "デスコ"],
    ["キラピピ", "★", "キラピカ"],
    ["すきなこと", "だけでいいです"],
    ["我儘姫"],
    ["フィラメント", "フィーバー"],
    ["強風", "オールバック"],
    ["サイバーパンク", "デッドボーイ"],
    ["世界を照らす", "テトラッド"],
    ["古書屋敷", "殺人事件"],
    ["1000年", "生きてる"],
    ["おちゃめ", "機能"],
    ["オペラ！", "スペース", "オペラ！"],
    ["きょうも", "ハレバレ"],
    ["成敗", "いたAAAAAす！"],
    ["QUEEN"],
    ["ちがう!!!"],
    ["転生", "林檎"],
    ["ぼくの", "かみさま"],
    ["混沌", "ブギ"],
    ["厨病", "激発", "ボーイ"],
    ["スマイル", "*", "シンフォニー"],
    ["シャルル"],
    ["ハロ", "／", "ハワユ"],
    ["自傷", "無色"],
    ["悔やむと", "書いて", "ミライ"],
    ["命に", "嫌われている。"],
    ["携帯", "恋話"],
    ["ジャックポット", "サッドガール"],
    ["乙女", "解剖"],
    ["独りんぼ", "エンヴィー"],
    ["とても", "痛い", "痛がりたい"],
    ["限りなく", "灰色へ"],
    ["ボッカデラベリタ"],
    ["アイディ", "スマイル"],
    ["夜に", "駆ける"],
    ["カナデトモスソラ"],
    ["ビターチョコ", "デコレーション"],
    ["カトラリー"],
    ["再生"],
    ["ベノム"],
    ["ロウワー"],
    ["ヴィラン"],
    ["トリコロージュ"],
    ["うっせぇわ"],
    ["愛して", "愛して愛して"],
    ["ノマド"],
    ["妄想", "感傷", "代償", "連盟"],
    ["バグ"],
    ["メリュー"],
    ["君の夜を", "くれ"],
    ["ジェヘナ"],
    ["フォニイ"],
    ["泥中に", "咲く"],
    ["Iなんです"],
    ["ノンブレス", "・", "オブリージュ"],
    ["それがあなたの", "幸せとしても"],
    ["アイロニ"],
    ["ザムザ"],
    ["命", "ばっかり"],
    ["キティ"],
    ["とても素敵な", "六月でした"],
    ["演劇"],
    ["心做し"],
    ["神っぽいな"],
    ["トワイライト", "ライト"],
    ["キュートな", "カノジョ"],
    ["スロウ", "ダウナー"],
    ["25時の", "情熱"],
    ["エンヴィー", "ベイビー"],
    ["ラグトレイン"],
    ["ド屑"],
    ["私は", "雨"],
    ["Bad", "Apple!!", "feat.SEKAI"],
    ["熱異常"],
    ["エンパープル"],
    ["マインド", "ブランド"],
    ["Shadow", "Shadow"],
    ["化けの花"],
    ["キャット", "ラビング"],
    ["余花に", "みとれて"],
    ["サイハテ"],
    ["そこに在る、", "光。"],
    ["エンドマークに", "希望と", "涙を", "添えて"],
    ["the", "EmpErroR"],
    ["Don’t", "Fight", "The", "Music"],
    ["folern"],
    ["Sage"],
    ["MarbleBlue."],
    ["超", "最終鬼畜妹", "フランドール", "・", "S"]
]