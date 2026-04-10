import { ArrowLeft, ArrowRight, Volume2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const katakanaChars = [
  { char: "ア", romaji: "a", hint: "as in 'father'", words: ["アイスクリーム (aisukuriimu) - ice cream", "アメリカ (Amerika) - America"] },
  { char: "イ", romaji: "i", hint: "as in 'meet'", words: ["イギリス (Igirisu) - England", "イチゴ (ichigo) - strawberry"] },
  { char: "ウ", romaji: "u", hint: "as in 'boot'", words: ["ウサギ (usagi) - rabbit", "ウイルス (uirusu) - virus"] },
  { char: "エ", romaji: "e", hint: "as in 'bed'", words: ["エレベーター (erebeetaa) - elevator", "エビ (ebi) - shrimp"] },
  { char: "オ", romaji: "o", hint: "as in 'go'", words: ["オレンジ (orenji) - orange", "オーストラリア (Oosutoraria) - Australia"] },
  { char: "カ", romaji: "ka", hint: "as in 'car'", words: ["カメラ (kamera) - camera", "カレー (karee) - curry"] },
  { char: "キ", romaji: "ki", hint: "as in 'key'", words: ["キウイ (kiui) - kiwi", "キャンプ (kyanpu) - camping"] },
  { char: "ク", romaji: "ku", hint: "as in 'cool'", words: ["クッキー (kukkii) - cookie", "クラス (kurasu) - class"] },
  { char: "ケ", romaji: "ke", hint: "as in 'kept'", words: ["ケーキ (keeki) - cake", "ケータイ (keetai) - mobile phone"] },
  { char: "コ", romaji: "ko", hint: "as in 'coat'", words: ["コーヒー (koohii) - coffee", "コンピューター (konpyuutaa) - computer"] },
  { char: "サ", romaji: "sa", hint: "as in 'saw'", words: ["サッカー (sakkaa) - soccer", "サラダ (sarada) - salad"] },
  { char: "シ", romaji: "shi", hint: "as in 'she'", words: ["シャツ (shatsu) - shirt", "シール (shiiru) - sticker"] },
  { char: "ス", romaji: "su", hint: "as in 'sue'", words: ["スポーツ (supootsu) - sports", "スーパー (suupaa) - supermarket"] },
  { char: "セ", romaji: "se", hint: "as in 'set'", words: ["セーター (seetaa) - sweater", "センチ (senchi) - centimeter"] },
  { char: "ソ", romaji: "so", hint: "as in 'so'", words: ["ソファ (sofa) - sofa", "ソース (soosu) - sauce"] },
  { char: "タ", romaji: "ta", hint: "as in 'top'", words: ["タクシー (takushii) - taxi", "タオル (taoru) - towel"] },
  { char: "チ", romaji: "chi", hint: "as in 'cheese'", words: ["チョコレート (chokoreeto) - chocolate", "チーズ (chiizu) - cheese"] },
  { char: "ツ", romaji: "tsu", hint: "as in 'tsunami'", words: ["ツアー (tsuaa) - tour", "ツナ (tsuna) - tuna"] },
  { char: "テ", romaji: "te", hint: "as in 'ten'", words: ["テレビ (terebi) - TV", "テスト (tesuto) - test"] },
  { char: "ト", romaji: "to", hint: "as in 'toe'", words: ["トイレ (toire) - toilet", "トマト (tomato) - tomato"] },
  { char: "ナ", romaji: "na", hint: "as in 'nap'", words: ["ナイフ (naifu) - knife", "ナンバー (nanbaa) - number"] },
  { char: "ニ", romaji: "ni", hint: "as in 'knee'", words: ["ニュース (nyuusu) - news", "ニンジン (ninjin) - carrot"] },
  { char: "ヌ", romaji: "nu", hint: "as in 'new'", words: ["ヌードル (nuudoru) - noodle"] },
  { char: "ネ", romaji: "ne", hint: "as in 'net'", words: ["ネクタイ (nekutai) - necktie", "ネット (netto) - internet/net"] },
  { char: "ノ", romaji: "no", hint: "as in 'no'", words: ["ノート (nooto) - notebook", "ノック (nokku) - knock"] },
  { char: "ハ", romaji: "ha", hint: "as in 'ha!'", words: ["ハンバーガー (hanbaagaa) - hamburger", "ハート (haato) - heart"] },
  { char: "ヒ", romaji: "hi", hint: "as in 'he'", words: ["ヒーロー (hiiroo) - hero", "ビーチ (biichi) - beach"] },
  { char: "フ", romaji: "fu", hint: "soft 'fu'", words: ["フルーツ (furuutsu) - fruit", "フォーク (fooku) - fork"] },
  { char: "ヘ", romaji: "he", hint: "as in 'help'", words: ["ヘルメット (herumetto) - helmet", "ベッド (beddo) - bed"] },
  { char: "ホ", romaji: "ho", hint: "as in 'hope'", words: ["ホテル (hoteru) - hotel", "ホームページ (hoomu peeji) - homepage"] },
  { char: "マ", romaji: "ma", hint: "as in 'mom'", words: ["マップ (mappu) - map", "マスク (masuku) - mask"] },
  { char: "ミ", romaji: "mi", hint: "as in 'me'", words: ["ミルク (miruku) - milk", "ミュージック (myuujikku) - music"] },
  { char: "ム", romaji: "mu", hint: "as in 'moon'", words: ["ムービー (muubii) - movie"] },
  { char: "メ", romaji: "me", hint: "as in 'met'", words: ["メニュー (menyuu) - menu", "メール (meeru) - email"] },
  { char: "モ", romaji: "mo", hint: "as in 'more'", words: ["モデル (moderu) - model", "モンスター (monsutaa) - monster"] },
  { char: "ヤ", romaji: "ya", hint: "as in 'yarn'", words: ["ヤクルト (Yakuruto) - Yakult", "ヤング (yangu) - young"] },
  { char: "ユ", romaji: "yu", hint: "as in 'you'", words: ["ユニフォーム (yunifoomu) - uniform", "ユーモア (yuumoa) - humor"] },
  { char: "ヨ", romaji: "yo", hint: "as in 'yo-yo'", words: ["ヨガ (yoga) - yoga", "ヨーロッパ (Yooroppa) - Europe"] },
  { char: "ラ", romaji: "ra", hint: "light 'ra'", words: ["ラーメン (raamen) - ramen", "ラジオ (rajio) - radio"] },
  { char: "リ", romaji: "ri", hint: "light 'ri'", words: ["リモコン (rimokon) - remote control", "リュック (ryukku) - backpack"] },
  { char: "ル", romaji: "ru", hint: "light 'ru'", words: ["ルール (ruuru) - rule", "レストラン (resutoran) - restaurant"] },
  { char: "レ", romaji: "re", hint: "light 're'", words: ["レモン (remon) - lemon", "レベル (reberu) - level"] },
  { char: "ロ", romaji: "ro", hint: "light 'ro'", words: ["ロボット (robotto) - robot", "ロッカー (rokkaa) - locker"] },
  { char: "ワ", romaji: "wa", hint: "as in 'want'", words: ["ワイン (wain) - wine", "ワンピース (wanpiisu) - dress/One Piece"] },
  { char: "ヲ", romaji: "wo", hint: "as in 'wo'", words: ["(particle, rarely used alone)"] },
  { char: "ン", romaji: "n", hint: "nasal 'n'", words: ["パン (pan) - bread", "レモン (remon) - lemon"] },
];

const quizOptions = [
  { char: "テ", answer: "te", options: ["ka", "te", "sa", "no"] },
  { char: "ミ", answer: "mi", options: ["mi", "mu", "ma", "me"] },
  { char: "ロ", answer: "ro", options: ["ra", "re", "ri", "ro"] },
  { char: "ス", answer: "su", options: ["shi", "su", "se", "so"] },
];

export default function KatakanaPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Katakana</h1>
          <p className="text-muted-foreground">
            The alphabet used for foreign words, names, and loanwords
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/hiragana">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back: Hiragana
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/vocabulary">
              Next: Vocabulary <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Progress value={33} className="h-2 w-full" />
        <p className="mt-2 text-sm text-muted-foreground">33% Complete</p>
      </div>

      {/* What is Katakana callout */}
      <div className="mb-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
        <p className="font-semibold text-blue-800">🌍 What is Katakana?</p>
        <p className="mt-1 text-sm text-blue-700">
          Katakana has the same sounds as Hiragana but different shapes. It's used for foreign words
          and names — like writing "pizza" as ピザ or "America" as アメリカ. Once you know Hiragana,
          Katakana is easy to learn!
        </p>
      </div>

      <Tabs defaultValue="learn" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {katakanaChars.map((item) => (
              <Card key={item.char}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-5xl font-bold">{item.char}</div>
                    <Button variant="ghost" size="icon">
                      <Volume2 className="h-5 w-5" />
                      <span className="sr-only">Play pronunciation</span>
                    </Button>
                  </div>
                  <div className="mt-3">
                    <p className="text-lg font-medium">{item.romaji}</p>
                    <p className="text-xs text-muted-foreground">{item.hint}</p>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Examples:
                    </p>
                    {item.words.map((w) => (
                      <p key={w} className="text-xs">
                        {w}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Spot the Katakana Word!</h3>
            <p className="text-muted-foreground">
              Katakana is used for foreign loanwords. Can you guess what these say?
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { kata: "テレビ", answer: "terebi → TV" },
                { kata: "コーヒー", answer: "koohii → coffee" },
                { kata: "ハンバーガー", answer: "hanbaagaa → hamburger" },
                { kata: "アイスクリーム", answer: "aisukuriimu → ice cream" },
                { kata: "チョコレート", answer: "chokoreeto → chocolate" },
                { kata: "コンピューター", answer: "konpyuutaa → computer" },
              ].map((item) => (
                <div
                  key={item.kata}
                  className="group relative flex items-center justify-between rounded-lg border p-4"
                >
                  <span className="text-2xl font-bold">{item.kata}</span>
                  <span className="text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {item.answer}
                  </span>
                  <span className="text-xs text-muted-foreground group-hover:hidden">
                    hover to reveal
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quiz" className="mt-6">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Katakana Quiz</h3>
            <p className="text-muted-foreground">What is the romaji for this character?</p>
            <div className="mt-6 space-y-10">
              {quizOptions.map((q) => (
                <div key={q.char}>
                  <div className="flex justify-center mb-4">
                    <div className="text-8xl font-bold">{q.char}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {q.options.map((opt) => (
                      <Button key={opt} variant="outline" size="lg">
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
