import { ArrowLeft, ArrowRight, Volume2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HiraganaPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hiragana</h1>
          <p className="text-muted-foreground">Master the basic Japanese phonetic alphabet</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/katakana">
              Next: Katakana <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Progress value={25} className="h-2 w-full" />
        <p className="mt-2 text-sm text-muted-foreground">25% Complete</p>
      </div>

      <Tabs defaultValue="learn" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="learn" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-6xl font-bold">あ</div>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium">a</p>
                  <p className="text-sm text-muted-foreground">as in "father"</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Example Words:</p>
                  <p className="text-sm">あめ (ame) - rain</p>
                  <p className="text-sm">あか (aka) - red</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-6xl font-bold">い</div>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium">i</p>
                  <p className="text-sm text-muted-foreground">as in "meet"</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Example Words:</p>
                  <p className="text-sm">いぬ (inu) - dog</p>
                  <p className="text-sm">いし (ishi) - stone</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-6xl font-bold">う</div>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium">u</p>
                  <p className="text-sm text-muted-foreground">as in "boot"</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Example Words:</p>
                  <p className="text-sm">うみ (umi) - sea</p>
                  <p className="text-sm">うた (uta) - song</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-6xl font-bold">え</div>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium">e</p>
                  <p className="text-sm text-muted-foreground">as in "bed"</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Example Words:</p>
                  <p className="text-sm">えき (eki) - station</p>
                  <p className="text-sm">えん (en) - yen</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-6xl font-bold">お</div>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-medium">o</p>
                  <p className="text-sm text-muted-foreground">as in "go"</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Example Words:</p>
                  <p className="text-sm">おと (oto) - sound</p>
                  <p className="text-sm">おに (oni) - demon</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex justify-center">
            <Button>Load More Characters</Button>
          </div>
        </TabsContent>
        <TabsContent value="practice" className="mt-6">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Writing Practice</h3>
            <p className="text-muted-foreground">
              Practice writing hiragana characters with our interactive tool
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-64 w-64 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Writing practice tool will appear here
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-xl font-bold">Hiragana Quiz</h3>
            <p className="text-muted-foreground">Test your knowledge of hiragana characters</p>
            <div className="mt-6">
              <p className="text-center text-2xl font-bold mb-4">
                What is the romaji for this character?
              </p>
              <div className="flex justify-center mb-8">
                <div className="text-8xl font-bold">か</div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Button variant="outline" size="lg">
                  a
                </Button>
                <Button variant="outline" size="lg">
                  i
                </Button>
                <Button variant="outline" size="lg">
                  ka
                </Button>
                <Button variant="outline" size="lg">
                  sa
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
