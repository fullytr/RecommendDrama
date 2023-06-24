// 海外ドラマのデータ
var dramas = [
    { name: "ブレイキング・バッド", genre: "アクション", episodes: 62, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"],trailer:"https://jobs.lever.co/tx-inc.com/e85d4193-f87a-4731-9f66-f0255aa43f06", imageURL: "ブレイキング・バッド.jpeg" },
    { name: "ゲーム・オブ・スローンズ", genre: "ファンタジー", episodes: 73, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu", "HBO Max"], trailerURL: "", imageURL: "ゲーム・オブ・スローンズ.jpeg"},
    { name: "フレンズ", genre: "コメディ", episodes: 236, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix", "HBO Max"], trailerURL: "b.jpg", imageURL: "フレンズ.jpg" },
    { name: "ストレンジャー・シングス", genre: "ファンタジー", episodes: 34, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"], trailerURL: "b.jpg", imageURL: "ストレンジャー・シングス.jpg" },
    { name: "ザ・クラウン", genre: "歴史", episodes: 40, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] , imageURL: "ザ・クラウン.jpeg"},
    { name: "ザ・オフィス", genre: "コメディ", episodes: 201, country: "アメリカ", difficulty: "普通", platforms: ["Netflix", "Amazon Prime Video"] , trailerURL: "b.jpg", imageURL: "ザ・オフィス.jpg"},
    { name: "シャーロック", genre: "サスペンス", episodes: 13, country: "イギリス", difficulty: "普通", platforms: ["Netflix", "Amazon Prime Video"], trailerURL: "", imageURL: "シャーロック.jpeg" },
    { name: "ブラックミラー", genre: "SF", episodes: 22, country: "イギリス", difficulty: "難しい", platforms: ["Netflix"], trailerURL: "", imageURL: "ブラックミラー.jpeg" },
    { name: "ナルコス", genre: "サスペンス", episodes: 30, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "ナルコス.jpg"},
    { name: "ビッグバン★セオリー/ギークなボクらの恋愛法則", genre: "コメディ", episodes: 279, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix", "Amazon Prime Video", "HBO Max"], trailerURL: "" , imageURL: "ビッグバン★セオリー.jpg"},
     
// 新しいドラマデータ
  //{ name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ウェストワールド", genre: "SF", episodes: 28, country: "アメリカ", difficulty: "難しい", platforms: ["HBO Max"], trailerURL: "" , imageURL: "ウェストワールド.jpeg"},
  { name: "プリーズ・ライク・ミー", genre: "コメディ", episodes: 36, country: "イギリス", difficulty: "簡単", platforms: ["Netflix"], trailerURL: "", imageURL: "プリーズ・ライク・ミー.jpeg" },
  { name: "デクスター", genre: "サスペンス", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Amazon Prime Video"], trailerURL: "" , imageURL: "デクスター.webp"},
  //{ name: "ブレイキング・バッド・ムービー", genre: "アクション", episodes: 1, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"], trailerURL: "" , imageURL: "シャーロック.jpeg"},
  { name: "オレンジ・イズ・ニュー・ブラック", genre: "ドラマ", episodes: 91, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"], trailerURL: "" , imageURL: "オレンジ・イズ・ニュー・ブラック.jpeg"},
  //{ name: "ストレンジャー・シングス3", genre: "ファンタジー", episodes: 64, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "シャーロック.jpeg"},
  { name: "ピーキー・ブラインダーズ", genre: "クライム", episodes: 30, country: "イギリス", difficulty: "簡単", platforms: ["Netflix"], trailerURL: "", imageURL: "ピーキー・ブラインダーズ.jpeg" },
  { name: "ホームランド", genre: "スリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"], trailerURL: "", imageURL: "ホームランド.webp"},
  { name: "ハウス・オブ・カード", genre: "ドラマ", episodes: 73, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "ハウス・オブ・カード.jpeg"},
  
// 新しいドラマデータ
 // { name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ビッグマウス", genre: "アニメ", episodes: 53, country: "韓国", difficulty: "簡単", platforms: ["Netflix"], trailerURL: "", imageURL: "ビッグマウス.jpeg" },
  { name: "ハンドメイズ・テイル", genre: "ドラマ", episodes: 46, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] , trailerURL: "", imageURL: "ハンドメイズ・テイル.webp" },
  { name: "ブロードチャーチ", genre: "サスペンス", episodes: 24, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "ブロードチャーチ.jpeg" },
  { name: "ザ・ホワイトクイーン", genre: "歴史", episodes: 20, country: "イギリス", difficulty: "簡単", platforms: ["Amazon Prime Video"] , trailerURL: "", imageURL: "ザ・ホワイトクイーン.jpeg" },
  //{ name: "ブリーチング・バッド", genre: "コメディ", episodes: 10, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ワンス・アポン・ア・タイム", genre: "ファンタジー", episodes: 156, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "ワンス・アポン・ア・タイム.jpg" },
  { name: "ザ・ウォーキング・デッド", genre: "ホラー", episodes: 177, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"], trailerURL: "", imageURL: "ザ・ウォーキング・デッド.jpeg"  },
  { name: "アウトランダー", genre: "ロマンス", episodes: 67, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] , trailerURL: "", imageURL: "アウトランダー.jpeg" },
  { name: "スクリーム", genre: "ミステリー", episodes: 30, country: "アメリカ", difficulty: "難しい", platforms: ["Netflix"] , trailerURL: "", imageURL: "スクリーム.jpeg" },
  
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
  //{ name: "フルハウス", genre: "コメディ", episodes: 192, country: "アメリカ", difficulty: "簡単", platforms: ["Hulu"] },
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
  //{ name: "フレンズ", genre: "コメディ", episodes: 236, country: "アメリカ", difficulty: "簡単", platforms: ["Netflix"] },
  { name: "ナルコス", genre: "クライム", episodes: 50, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ザ・クラウン", genre: "ドラマ", episodes: 60, country: "イギリス", difficulty: "普通", platforms: ["Netflix"] },
  { name: "デクスター", genre: "サイコスリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "13の理由", genre: "ドラマ", episodes: 49, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ストレンジャー・シングス", genre: "ファンタジー", episodes: 34, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
  { name: "ホームランド", genre: "スリラー", episodes: 96, country: "アメリカ", difficulty: "難しい", platforms: ["Hulu"] },
  { name: "ハウス・オブ・カード", genre: "ドラマ", episodes: 73, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
 // { name: "ストランジャー・シングス2", genre: "ファンタジー", episodes: 56, country: "アメリカ", difficulty: "普通", platforms: ["Netflix"] },
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
    displayRecommendations(filteredDramas);
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

// レコメンド結果を表示する関数
// レコメンド結果を表示する関数
function displayRecommendations(filteredDramas) {
    var recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "";

    if (filteredDramas.length > 0) {
        var gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        filteredDramas.forEach(function(drama) {
            var div = document.createElement("div");
            div.classList.add("drama-item");

            var image = document.createElement("img");
            image.src = drama.imageURL;
            image.alt = drama.name;
            div.appendChild(image);

            var infoContainer = document.createElement("div");
            infoContainer.classList.add("info-container");

            var title = document.createElement("h3");
            title.textContent = drama.name;
            infoContainer.appendChild(title);

            var genre = document.createElement("p");
            genre.textContent = "ジャンル: " + drama.genre;
            infoContainer.appendChild(genre);

            var episodes = document.createElement("p");
            episodes.textContent = "エピソード数: " + drama.episodes;
            infoContainer.appendChild(episodes);

            var country = document.createElement("p");
            country.textContent = "制作国: " + drama.country;
            infoContainer.appendChild(country);

            var difficulty = document.createElement("p");
            difficulty.textContent = "難易度: " + drama.difficulty;
            infoContainer.appendChild(difficulty);

            var platforms = document.createElement("p");
            platforms.textContent = "視聴プラットフォーム: " + drama.platforms.join(", ");
            infoContainer.appendChild(platforms);

            var trailer = document.createElement("p");
            trailer.textContent = "予告編: " + drama.trailerURL;
            infoContainer.appendChild(trailer);

            div.appendChild(infoContainer);
            gridContainer.appendChild(div);
        });

        recommendationsDiv.appendChild(gridContainer);
    } else {
        recommendationsDiv.textContent = "該当するドラマはありません。";
    }
}

// リセット機能
function resetForm() {
    document.getElementById("genre").selectedIndex = 0;
    document.getElementById("episodes").selectedIndex = 0;
    document.getElementById("country").selectedIndex = 0;
    document.getElementById("difficulty").selectedIndex = 0;
    document.getElementById("platforms").selectedIndex = 0;
    recommend();
}
