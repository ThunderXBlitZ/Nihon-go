import { ArrowRight, BookOpen, CheckCircle, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/arrow-right";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">日本語</span>
              <span className="text-sm text-muted-foreground">Nihongo Navigator</span>
            </Link>
          </div>
          <nav className="hidden flex-1 justify-center md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/hiragana"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Hiragana
                </Link>
              </li>
              <li>
                <Link
                  href="/katakana"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Katakana
                </Link>
              </li>
              <li>
                <Link
                  href="/vocabulary"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Vocabulary
                </Link>
              </li>
              <li>
                <Link
                  href="/grammar"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Grammar
                </Link>
              </li>
              <li>
                <Link
                  href="/practice"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Practice
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Japanese with Ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Master Japanese from beginner to advanced with our structured, intuitive
                    learning approach.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/get-started">
                      Get Started <ArrowRightIcon size={16} className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-lg bg-muted p-4 lg:p-8">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background shadow-sm">
                        あ
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background shadow-sm">
                        い
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background shadow-sm">
                        う
                      </div>
                      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background shadow-sm">
                        え
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our approach makes learning Japanese intuitive and effective
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-center font-bold">Structured Learning</h3>
                <p className="text-center text-muted-foreground">
                  Progress from basic kana to advanced grammar with our carefully designed
                  curriculum
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-center font-bold">Comprehensive Content</h3>
                <p className="text-center text-muted-foreground">
                  Learn hiragana, katakana, vocabulary, grammar, and kanji in one place
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-center font-bold">Practice Exercises</h3>
                <p className="text-center text-muted-foreground">
                  Reinforce your learning with interactive quizzes and writing practice
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl text-center font-bold">Pronunciation Guide</h3>
                <p className="text-center text-muted-foreground">
                  Master Japanese sounds with our audio guides and practice tools
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Start Your Japanese Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  From complete beginner to JLPT N1, we have resources for every level
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/signup">
                    Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start learning Japanese today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Nihongo Navigator. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
