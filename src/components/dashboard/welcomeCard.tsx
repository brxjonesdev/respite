import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import React from 'react';

export default function WelcomeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">Welcome to Respite</CardTitle>
        <CardDescription>
          Respite is a personal journal app that helps you make every day
          meaningful.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">How to use Respite</h2>
          <p>
            Respite is more than just a journal app. It combines powerful
            features like markdown support, tag-based organization, and
            customizable templates to give you a personalized journaling
            experience. Track your moods, habits, and goals effortlessly, and
            generate insightful reports to reflect on your journey.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Explore More</h2>
          <p>
            Visit my{' '}
            <a
              href="https://my-portfolio.com"
              className="text-blue-500 underline hover:text-blue-600"
            >
              portfolio
            </a>{' '}
            to see other projects I've worked on, and check out my{' '}
            <a
              href="https://github.com/my-github"
              className="text-blue-500 underline hover:text-blue-600"
            >
              GitHub
            </a>{' '}
            for the open-source code of Respite.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
