"use client";

import { ArrowLeft, Check, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = [
    {
      question: "What is the hiragana for 'a'?",
      options: ["あ", "い", "う", "え"],
      answer: "あ",
    },
    {
      question: "What is the meaning of 'おはよう'?",
      options: ["Hello", "Good morning", "Good evening", "Goodbye"],
      answer: "Good morning",
    },
    {
      question: "Which kanji means 'water'?",
      options: ["火", "水", "木", "土"],
      answer: "水",
    },
    {
      question: "What is the correct particle to mark the object of a verb?",
      options: ["は", "が", "を", "に"],
      answer: "を",
    },
    {
      question: "How do you say 'I don't understand' in Japanese?",
      options: ["わかります", "わかりません", "しりません", "できます"],
      answer: "わかりません",
    },
  ];

  const handleAnswer = (selected: string) => {
    setSelectedAnswer(selected);

    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Practice</h1>
          <p className="text-muted-foreground">
            Test your Japanese knowledge with interactive exercises
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="quiz" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
        </TabsList>
        <TabsContent value="quiz" className="mt-6">
          {!showResult ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    Question {currentQuestion + 1} of {questions.length}
                  </CardTitle>
                  <div className="text-sm font-medium">
                    Score: {score}/{questions.length}
                  </div>
                </div>
                <Progress
                  value={(currentQuestion / questions.length) * 100}
                  className="h-2 w-full"
                />
                <CardDescription className="mt-4 text-lg">
                  {questions[currentQuestion].question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option}
                      variant={
                        selectedAnswer === null
                          ? "outline"
                          : selectedAnswer === option
                            ? option === questions[currentQuestion].answer
                              ? "default"
                              : "destructive"
                            : option === questions[currentQuestion].answer &&
                                selectedAnswer !== null
                              ? "default"
                              : "outline"
                      }
                      className="justify-start h-12 text-lg"
                      onClick={() => selectedAnswer === null && handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                      {selectedAnswer !== null && option === questions[currentQuestion].answer && (
                        <Check className="ml-auto h-5 w-5 text-green-500" />
                      )}
                      {selectedAnswer === option &&
                        option !== questions[currentQuestion].answer && (
                          <X className="ml-auto h-5 w-5 text-red-500" />
                        )}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-md mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                <CardDescription>
                  You scored {score} out of {questions.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-4">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <Progress value={(score / questions.length) * 100} className="h-2 w-full" />
                <p className="mt-4 text-muted-foreground">
                  {score === questions.length
                    ? "Perfect! You've mastered this content!"
                    : score >= questions.length / 2
                      ? "Good job! Keep practicing to improve your score."
                      : "Keep studying and try again to improve your score."}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={resetQuiz}>Try Again</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="flashcards" className="mt-6">
          <div className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-48 w-80 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Flashcards feature coming soon</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Practice with digital flashcards to memorize vocabulary and kanji
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="writing" className="mt-6">
          <div className="flex items-center justify-center p-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-48 w-80 rounded-lg border-2 border-dashed border-muted-foreground/50 bg-background p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Writing practice feature coming soon
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Practice writing Japanese characters with our interactive tool
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
