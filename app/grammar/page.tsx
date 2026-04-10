import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const lessonSections = [
  {
    id: "sentences",
    title: "🌸 How Japanese Sentences Work",
    emoji: "🌸",
    color: "bg-pink-50 border-pink-200",
    headerColor: "text-pink-700",
    tip: "In English we say: I eat sushi. In Japanese the verb comes LAST: I sushi eat! (わたしは すしを たべます)",
    content: [
      {
        rule: "Verb goes at the END",
        example: "わたしは ねこが すきです",
        romaji: "Watashi wa neko ga suki desu",
        meaning: "I like cats",
        breakdown: [
          { part: "わたしは", label: "I (topic)" },
          { part: "ねこが", label: "cats (subject)" },
          { part: "すきです", label: "like (verb at end!)" },
        ],
      },
      {
        rule: "No spaces needed between words",
        example: "これはほんです",
        romaji: "Kore wa hon desu",
        meaning: "This is a book",
        breakdown: [
          { part: "これは", label: "this (topic)" },
          { part: "ほん", label: "book" },
          { part: "です", label: "is" },
        ],
      },
    ],
  },
  {
    id: "particles",
    title: "🔑 Magic Little Words (Particles)",
    emoji: "🔑",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "text-yellow-700",
    tip: "Particles are tiny words that tell us WHO is doing something, WHERE it happens, or WHAT it's about. Think of them as labels!",
    content: [
      {
        rule: "は (wa) — the topic marker",
        example: "いぬは かわいいです",
        romaji: "Inu wa kawaii desu",
        meaning: "Dogs are cute",
        breakdown: [
          { part: "いぬ", label: "dog" },
          { part: "は", label: "← topic marker" },
          { part: "かわいいです", label: "are cute" },
        ],
      },
      {
        rule: "を (wo/o) — the action target",
        example: "りんごを たべます",
        romaji: "Ringo o tabemasu",
        meaning: "I eat an apple",
        breakdown: [
          { part: "りんご", label: "apple" },
          { part: "を", label: "← action target" },
          { part: "たべます", label: "eat" },
        ],
      },
      {
        rule: "に (ni) — direction or location",
        example: "がっこうに いきます",
        romaji: "Gakkou ni ikimasu",
        meaning: "I go to school",
        breakdown: [
          { part: "がっこう", label: "school" },
          { part: "に", label: "← direction (to)" },
          { part: "いきます", label: "go" },
        ],
      },
      {
        rule: "の (no) — ownership (like 's)",
        example: "わたしの ほん",
        romaji: "Watashi no hon",
        meaning: "My book",
        breakdown: [
          { part: "わたし", label: "I / me" },
          { part: "の", label: "← 's (possessive)" },
          { part: "ほん", label: "book" },
        ],
      },
    ],
  },
  {
    id: "verbs",
    title: "⚡ Action Words (Verbs)",
    emoji: "⚡",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-700",
    tip: "Japanese verbs always end in 'u' sounds. The polite form ends in 'masu' (ます). Easy to spot!",
    content: [
      {
        rule: "います (imasu) — to be (living things)",
        example: "ねこが います",
        romaji: "Neko ga imasu",
        meaning: "There is a cat",
        breakdown: [
          { part: "ねこが", label: "cat (subject)" },
          { part: "います", label: "exists (alive)" },
        ],
      },
      {
        rule: "あります (arimasu) — to be (objects)",
        example: "ほんが あります",
        romaji: "Hon ga arimasu",
        meaning: "There is a book",
        breakdown: [
          { part: "ほんが", label: "book (subject)" },
          { part: "あります", label: "exists (thing)" },
        ],
      },
      {
        rule: "たべます (tabemasu) — to eat",
        example: "おすしを たべます",
        romaji: "O-sushi o tabemasu",
        meaning: "I eat sushi",
        breakdown: [
          { part: "おすしを", label: "sushi (target)" },
          { part: "たべます", label: "eat" },
        ],
      },
      {
        rule: "のみます (nomimasu) — to drink",
        example: "みずを のみます",
        romaji: "Mizu o nomimasu",
        meaning: "I drink water",
        breakdown: [
          { part: "みずを", label: "water (target)" },
          { part: "のみます", label: "drink" },
        ],
      },
      {
        rule: "いきます (ikimasu) — to go",
        example: "がっこうに いきます",
        romaji: "Gakkou ni ikimasu",
        meaning: "I go to school",
        breakdown: [
          { part: "がっこうに", label: "to school" },
          { part: "いきます", label: "go" },
        ],
      },
      {
        rule: "みます (mimasu) — to see / watch",
        example: "テレビを みます",
        romaji: "Terebi o mimasu",
        meaning: "I watch TV",
        breakdown: [
          { part: "テレビを", label: "TV (target)" },
          { part: "みます", label: "watch" },
        ],
      },
    ],
  },
  {
    id: "adjectives",
    title: "🎨 Describing Words (Adjectives)",
    emoji: "🎨",
    color: "bg-purple-50 border-purple-200",
    headerColor: "text-purple-700",
    tip: "Japanese has two types of adjectives: い-adjectives (end in い) and な-adjectives (need な before a noun). Both types are super common!",
    content: [
      {
        rule: "い-adjectives (end in い)",
        example: "おおきい いぬ",
        romaji: "Ookii inu",
        meaning: "A big dog",
        breakdown: [
          { part: "おおきい", label: "big (い-adj)" },
          { part: "いぬ", label: "dog" },
        ],
      },
      {
        rule: "な-adjectives (add な before noun)",
        example: "しずかな まち",
        romaji: "Shizuka na machi",
        meaning: "A quiet town",
        breakdown: [
          { part: "しずかな", label: "quiet (な-adj)" },
          { part: "まち", label: "town" },
        ],
      },
      {
        rule: "Describing with です",
        example: "このほんは おもしろいです",
        romaji: "Kono hon wa omoshiroi desu",
        meaning: "This book is interesting",
        breakdown: [
          { part: "このほんは", label: "this book (topic)" },
          { part: "おもしろい", label: "interesting" },
          { part: "です", label: "is (polite)" },
        ],
      },
    ],
  },
  {
    id: "questions",
    title: "❓ Asking Questions",
    emoji: "❓",
    color: "bg-green-50 border-green-200",
    headerColor: "text-green-700",
    tip: "Add か (ka) to the end of any sentence to turn it into a question! No need to change word order like in English.",
    content: [
      {
        rule: "Add か to make a question",
        example: "これは ほんですか？",
        romaji: "Kore wa hon desu ka?",
        meaning: "Is this a book?",
        breakdown: [
          { part: "これは", label: "this (topic)" },
          { part: "ほんです", label: "is a book" },
          { part: "か", label: "← question marker!" },
        ],
      },
      {
        rule: "なに (nani) — what",
        example: "これは なんですか？",
        romaji: "Kore wa nan desu ka?",
        meaning: "What is this?",
        breakdown: [
          { part: "これは", label: "this (topic)" },
          { part: "なん", label: "what" },
          { part: "ですか", label: "is? (question)" },
        ],
      },
      {
        rule: "どこ (doko) — where",
        example: "トイレは どこですか？",
        romaji: "Toire wa doko desu ka?",
        meaning: "Where is the toilet?",
        breakdown: [
          { part: "トイレは", label: "toilet (topic)" },
          { part: "どこ", label: "where" },
          { part: "ですか", label: "is? (question)" },
        ],
      },
      {
        rule: "だれ (dare) — who",
        example: "あの ひとは だれですか？",
        romaji: "Ano hito wa dare desu ka?",
        meaning: "Who is that person?",
        breakdown: [
          { part: "あのひとは", label: "that person (topic)" },
          { part: "だれ", label: "who" },
          { part: "ですか", label: "is? (question)" },
        ],
      },
    ],
  },
];

const quickRules = [
  { icon: "🔚", rule: "Verb always goes at the end of the sentence" },
  { icon: "🏷️", rule: "Particles (は, を, に, の) label what each word does" },
  { icon: "❓", rule: "Add か at the end to ask a question" },
  { icon: "🙅", rule: "No articles like 'a' or 'the' in Japanese" },
  { icon: "🔢", rule: "No plural forms — いぬ means both 'dog' and 'dogs'" },
  { icon: "😊", rule: "です (desu) = polite 'is/am/are' — use it to sound friendly" },
];

export default function GrammarPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grammar</h1>
          <p className="text-muted-foreground">
            Learn how Japanese sentences are built — step by step!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/vocabulary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back: Vocabulary
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/practice">
              Next: Practice <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Progress value={60} className="h-2 w-full" />
        <p className="mt-2 text-sm text-muted-foreground">60% Complete</p>
      </div>

      {/* Quick Rules Banner */}
      <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="h-5 w-5 text-primary" />
            Quick Grammar Rules to Remember
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {quickRules.map((item) => (
              <div key={item.rule} className="flex items-start gap-2 rounded-md bg-background p-3">
                <span className="text-xl">{item.icon}</span>
                <p className="text-sm">{item.rule}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sentences" className="w-full">
        <TabsList className="flex h-auto w-full flex-wrap gap-1 mb-6">
          {lessonSections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="text-xs sm:text-sm">
              {section.emoji} {section.title.replace(/^.*? /, "")}
            </TabsTrigger>
          ))}
        </TabsList>

        {lessonSections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-2">
            {/* Tip box */}
            <div className={`mb-6 flex items-start gap-3 rounded-lg border-2 p-4 ${section.color}`}>
              <Lightbulb className={`mt-0.5 h-5 w-5 shrink-0 ${section.headerColor}`} />
              <p className={`text-sm font-medium ${section.headerColor}`}>{section.tip}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {section.content.map((item) => (
                <Card key={item.rule} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.rule}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Japanese example */}
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <p className="text-2xl font-bold">{item.example}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.romaji}</p>
                      <p className="mt-1 text-sm font-medium">"{item.meaning}"</p>
                    </div>

                    {/* Breakdown */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Breaking it down:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.breakdown.map((b) => (
                          <div
                            key={b.part}
                            className="flex flex-col items-center rounded-md border bg-background px-3 py-2"
                          >
                            <span className="text-lg font-bold">{b.part}</span>
                            <span className="text-xs text-muted-foreground">{b.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Bottom nav */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/vocabulary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Vocabulary
          </Link>
        </Button>
        <Button asChild>
          <Link href="/practice">
            Practice Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
