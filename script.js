// 海外ドラマのデータ
var dramas = [
    { name: "ブレイキング・バッド", genre: "アクション", episodes: 62, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
    { name: "ゲーム・オブ・スローンズ", genre: "ファンタジー", episodes: 73, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu", "HBO Max"] },
    { name: "フレンズ", genre: "コメディ", episodes: 236, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix", "HBO Max"] },
    { name: "ストレンジャー・シングス", genre: "ファンタジー", episodes: 34, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
    { name: "ザ・クラウン", genre: "歴史", episodes: 40, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
    { name: "ザ・オフィス", genre: "コメディ", episodes: 201, country: "アメリカ", difficulty: "普通", platforms: ["Netflix", "Amazon Prime Video"] },
    { name: "シャーロック", genre: "サスペンス", episodes: 13, country: "イギリス", difficulty: "普通", platforms: ["Netflix", "Amazon Prime Video"] },
    { name: "ブラックミラー", genre: "SF", episodes: 22, country: "イギリス", difficulty: "難しい", platforms: ["Netflix"] },
    { name: "ナルコス", genre: "サスペンス", episodes: 30, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
    { name: "ビッグバン★セオリー/ギークなボクらの恋愛法則", genre: "コメディ", episodes: 279, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix", "Amazon Prime Video", "HBO Max"] },
     
// 新しいドラマデータ
  //{ name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ウェストワールド", genre: "SF", episodes: 28, country: "アメリカ", difficulty: "難しい", platforms: ["HBO Max"] },
  { name: "プリーズ・ライク・ミー", genre: "コメディ", episodes: 36, country: "イギリス", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "デクスター", genre: "サスペンス", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Amazon Prime Video"] },
  //{ name: "ブレイキング・バッド・ムービー", genre: "アクション", episodes: 1, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "オレンジ・イズ・ニュー・ブラック", genre: "ドラマ", episodes: 91, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  //{ name: "ストレンジャー・シングス3", genre: "ファンタジー", episodes: 64, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ピーキー・ブラインダーズ", genre: "クライム", episodes: 30, country: "イギリス", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ホームランド", genre: "スリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ハウス・オブ・カード", genre: "ドラマ", episodes: 73, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  
// 新しいドラマデータ
 // { name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ビッグマウス", genre: "アニメ", episodes: 53, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ハンドメイズ・テイル", genre: "ドラマ", episodes: 46, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ブロードチャーチ", genre: "サスペンス", episodes: 24, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ザ・ホワイトクイーン", genre: "歴史", episodes: 20, country: "イギリス", difficulty: "簡単", platforms: ["Amazon Prime Video"] },
  { name: "ブリーチング・バッド", genre: "コメディ", episodes: 10, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ワンス・アポン・ア・タイム", genre: "ファンタジー", episodes: 156, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ザ・ウォーキング・デッド", genre: "ホラー", episodes: 177, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "アウトランダー", genre: "ロマンス", episodes: 67, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "スクリーム", genre: "ミステリー", episodes: 30, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  
  // 新しいドラマデータ
  { name: "ハンニバル", genre: "サイコスリラー", episodes: 39, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ノーザン・レスキュー", genre: "ドラマ", episodes: 22, country: "イギリス", difficulty: "普通", platforms: ["Amazon Prime Video"] },
  { name: "ダウントン・アビー", genre: "ドラマ", episodes: 52, country: "イギリス", difficulty: "普通", platforms: ["Amazon Prime Video"] },
  { name: "ヴァイキング", genre: "歴史", episodes: 89, country: "アメリカ", difficulty: "普通", platforms: ["Amazon Prime Video"] },
  { name: "ボードウォーク・エンパイア", genre: "ドラマ", episodes: 56, country: "アメリカ", difficulty: "難しい", platforms: ["HBO Max"] },
  { name: "トゥルー・ディテクティブ", genre: "サスペンス", episodes: 24, country: "アメリカ", difficulty: "普通", platforms: ["HBO Max"] },
  { name: "フレンズ・フロム・カレッジ", genre: "コメディ", episodes: 16, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "アウター・バンクス", genre: "冒険", episodes: 20, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "シャドウ・アンド・ボーン", genre: "ファンタジー", episodes: 8, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "エルサレム・ス・ロット", genre: "ホラー", episodes: 10, country: "アメリカ", difficulty: "難しい", platforms: ["Apple TV+"] },
  { name: "モダン・ファミリー", genre: "コメディ", episodes: 250, country: "アメリカ", difficulty: "普通", platforms: ["Hulu"] },
  { name: "レクイエム", genre: "スリラー", episodes: 6, country: "イギリス", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "ミスター・ロボット", genre: "サイバーパンク", episodes: 45, country: "アメリカ", difficulty: "普通", platforms: ["Amazon Prime Video"] },
  { name: "スノーピアサー", genre: "SF", episodes: 20, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ハウス・オブ・ライズ", genre: "ドラマ", episodes: 10, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ボーンズ", genre: "クライム", episodes: 246, country: "アメリカ", difficulty: "普通", platforms: ["Hulu"] },
  { name: "トワイライトゾーン", genre: "サイファイ", episodes: 156, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ハンター×ハンター", genre: "アニメ", episodes: 148, country: "日本", difficulty: "普通", platforms: ["Netflix", "Crunchyroll"] },
  { name: "ワンダヴィジョン", genre: "ドラマ", episodes: 9, country: "アメリカ", difficulty: "普通", platforms: ["Disney+"] },
  { name: "プリズン・ブレイク", genre: "サスペンス", episodes: 90, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ドクター・フー", genre: "SF", episodes: 144, country: "イギリス", difficulty: "普通", platforms: ["BBC iPlayer"] },
  { name: "ユーリカ 〜事件です!カーター保安官〜", genre: "SF", episodes: 77, country: "アメリカ", difficulty: "簡単", platforms: ["Amazon Prime Video"] },
  { name: "オーシャンガールズ", genre: "ドラマ", episodes: 10, country: "韓国", difficulty: "普通", platforms: ["Netflix"] },
  { name: "エージェント・オブ・シールド", genre: "アクション", episodes: 136, country: "アメリカ", difficulty: "普通", platforms: ["Disney+"] },
  { name: "アウトランダー", genre: "歴史", episodes: 67, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "パーキンソン発音法でいこう", genre: "コメディ", episodes: 6, country: "イギリス", difficulty: "簡単", platforms: ["BBC iPlayer"] },
  { name: "ブラックリスト", genre: "スリラー", episodes: 187, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "ホワイトカラー", genre: "クライム", episodes: 81, country: "アメリカ", difficulty: "普通", platforms: ["Hulu"] },
  { name: "ベターコールソウル", genre: "ドラマ", episodes: 63, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "アンブレイカブルキミーシュミット", genre: "コメディ", episodes: 51, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "パルチザン", genre: "戦争", episodes: 10, country: "イタリア", difficulty: "普通", platforms: ["Amazon Prime Video"] },
  { name: "テラスハウス", genre: "リアリティ", episodes: 98, country: "日本", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ファミリー・ガイ", genre: "アニメ", episodes: 392, country: "アメリカ", difficulty: "簡単", platforms: ["Hulu", "Disney+"] },
  { name: "ハンドメイズ・テイル/侍女の物語", genre: "ドラマ", episodes: 47, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "スタートレック: ディスカバリー", genre: "SF", episodes: 42, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "セックス・エデュケーション", genre: "コメディ", episodes: 16, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "フルハウス", genre: "コメディ", episodes: 192, country: "アメリカ", difficulty: "簡単", platforms: ["Hulu"] },
  { name: "ロスト", genre: "ミステリー", episodes: 121, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "デアデビル", genre: "アクション", episodes: 39, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "アメリカン・ホラー・ストーリー", genre: "ホラー", episodes: 127, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "ジェシカ・ジョーンズ", genre: "アクション", episodes: 39, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ドラゴンボール", genre: "アニメ", episodes: 153, country: "日本", difficulty: "普通", platforms: ["Netflix", "Crunchyroll"] },
  { name: "ビッグリトルライズ", genre: "ドラマ", episodes: 14, country: "アメリカ", difficulty: "普通", platforms: ["HBO Max"] },
  { name: "アンブレラ・アカデミー", genre: "アクション", episodes: 20, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ボードキングス", genre: "コメディ", episodes: 45, country: "アメリカ", difficulty: "簡単", platforms: ["Hulu"] },
  { name: "ブラック・リスト", genre: "スリラー", episodes: 177, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] },
  { name: "スキャンダル", genre: "ドラマ", episodes: 124, country: "アメリカ", difficulty: "普通", platforms: ["Hulu"] },
  { name: "ボードウォーク・エンパイア", genre: "ドラマ", episodes: 56, country: "アメリカ", difficulty: "難しい", platforms: ["HBO Max"] },
  { name: "フレンズ", genre: "コメディ", episodes: 236, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ナルコス", genre: "クライム", episodes: 50, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ザ・クラウン", genre: "ドラマ", episodes: 60, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "デクスター", genre: "サイコスリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "13の理由", genre: "ドラマ", episodes: 49, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ストレンジャー・シングス", genre: "ファンタジー", episodes: 34, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ホームランド", genre: "スリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ハウス・オブ・カード", genre: "ドラマ", episodes: 73, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ビッグマウス", genre: "アニメ", episodes: 53, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ハンドメイズ・テイル", genre: "ドラマ", episodes: 46, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ブロードチャーチ", genre: "サスペンス", episodes: 24, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ザ・ホワイトクイーン", genre: "歴史", episodes: 20, country: "イギリス", difficulty: "簡単", platforms: ["Amazon Prime Video"] },
  

];

// レコメンドを実行する関数
function recommend() {
    // ジャンルと難易度の選択値を取得
    var genre = document.getElementById("genre").value;
    var difficulty = document.getElementById("difficulty").value;
    var episodes = document.getElementById("episodes").value;
    var country = document.getElementById("country").value;
    var platforms = document.getElementById("platforms").value;
    
    // レコメンド対象のドラマを絞り込む
    var filteredDramas = dramas.filter(function(drama) {
        if (genre && genre !== drama.genre) {
            return false;
        }
        if (difficulty && difficulty !== drama.difficulty) {
            return false;
        }
        if (episodes && episodes !== getEpisodeRange(drama.episodes)) {
            return false;
        }
        if (country && country !== drama.country) {
            return false;
        }
        if (platforms && !drama.platforms.includes(platforms)) {
            return false;
        }
        return true;
    });
    
    // レコメンド結果を表示
    var recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "";
    
    if (filteredDramas.length > 0) {
        var ul = document.createElement("ul");
        filteredDramas.forEach(function(drama) {
            var li = document.createElement("li");
            li.textContent = drama.name + " (" + drama.genre + ", " + drama.country + ")";
            ul.appendChild(li);
        });
        recommendationsDiv.appendChild(ul);
    } else {
        recommendationsDiv.textContent = "該当するドラマはありません。";
    }
}


// エピソード数の範囲を取得するヘルパー関数
function getEpisodeRange(episodes) {
    if (episodes < 10) {
        return "10未満";
    } else if (episodes < 20) {
        return "10-20";
    } else if (episodes < 50) {
        return "20-50";
    } else {
        return "50以上";
    }
}
//リセット機能
function resetForm() {
    document.getElementById("genre").selectedIndex = 0;
    document.getElementById("episodes").selectedIndex = 0;
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("difficulty").selectedIndex = 0;
    document.getElementById("platforms").selectedIndex = 0;
    recommend();
}

// 名前プロパティを基準に重複を削除する関数
function removeDuplicates(dramas) {
    var uniqueDramas = [];
    var names = [];

    for (var i = 0; i < dramas.length; i++) {
        var drama = dramas[i];
        if (!names.includes(drama.name)) {
            uniqueDramas.push(drama);
            names.push(drama.name);
        }
    }

    return uniqueDramas;
}

// dramas配列から重複を削除する
var uniqueDramas = removeDuplicates(dramas);

// ユニークなドラマを出力する
console.log(uniqueDramas);
