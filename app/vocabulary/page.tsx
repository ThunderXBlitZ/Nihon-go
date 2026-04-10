import { ArrowLeft, ArrowRight, BookOpen, Check, Search, Volume2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VocabularyPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vocabulary</h1>
          <p className="text-muted-foreground">
            Build your Japanese vocabulary with essential words and phrases
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/grammar">
              Next: Grammar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Progress value={40} className="h-2 w-full" />
        <p className="mt-2 text-sm text-muted-foreground">40% Complete</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search vocabulary..."
            className="w-full appearance-none bg-background pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="beginner" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">挨拶</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <CardDescription>あいさつ (aisatsu)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Greetings</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">おはよう (ohayou) - Good morning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">こんにちは (konnichiwa) - Hello</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">こんばんは (konbanwa) - Good evening</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">さようなら (sayounara) - Goodbye</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">数字</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <CardDescription>すうじ (suuji)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Numbers</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">一 (いち, ichi) - One</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">二 (に, ni) - Two</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">三 (さん, san) - Three</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">四 (し/よん, shi/yon) - Four</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">食べ物</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                    <span className="sr-only">Play pronunciation</span>
                  </Button>
                </div>
                <CardDescription>たべもの (tabemono)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Food</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">ご飯 (ごはん, gohan) - Rice/Meal</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">寿司 (すし, sushi) - Sushi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">ラーメン (rāmen) - Ramen</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <p className="text-sm">野菜 (やさい, yasai) - Vegetables</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex justify-center">
            <Button>Load More Vocabulary</Button>
          </div>
        </TabsContent>
        <TabsContent value="intermediate" className="mt-6">
          <div className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Intermediate Vocabulary</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the beginner level to unlock intermediate vocabulary
              </p>
              <Button className="mt-4" variant="outline">
                Go to Beginner Level
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="mt-6">
          <div className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Advanced Vocabulary</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete the intermediate level to unlock advanced vocabulary
              </p>
              <Button className="mt-4" variant="outline">
                Go to Intermediate Level
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
