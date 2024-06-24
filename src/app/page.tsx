import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SignInButton from '@/components/landingpage/signinbtn';
import { JSX, SVGProps } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect('/journal/dashboard');
  }
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Your Personal Journaling Companion
                </h1>
                <p className="max-w-2xl text-gray-600 md:text-xl">
                  Enhance your reflection and organization with our intuitive
                  journaling platform.
                </p>
              </div>
              <SignInButton />
            </div>
            <img
              src="/placeholder.svg"
              alt="Hero"
              className="mx-auto w-full h-auto object-cover rounded-xl lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore the Power of Journaling
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg lg:text-base">
                Our platform offers advanced tools to elevate your journaling
                experience and boost personal growth.
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto grid gap-6 mt-12 lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <RocketIcon className="h-6 w-6" />
                <h3 className="text-xl font-bold">Customizable Templates</h3>
              </div>
              <p className="text-gray-600">
                Create personalized journaling templates to suit different
                aspects of your life.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <BoltIcon className="h-6 w-6" />
                <h3 className="text-xl font-bold">Mood and Habit Tracking</h3>
              </div>
              <p className="text-gray-600">
                Track your moods, habits, and goals effortlessly to gain
                insights into your progress.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <LockIcon className="h-6 w-6" />
                <h3 className="text-xl font-bold">Host your own!</h3>
              </div>
              <p className="text-gray-600">
                Respite is not only a online based journaling platform, it can
                also be self-hosted!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Start Journaling Today
              </h2>
              <p className="max-w-md mx-auto md:max-w-none text-gray-600 md:text-lg">
                Join our community and begin your journey towards self-discovery
                and personal growth.
              </p>
            </div>
            <div className="">
              <Button className="w-full h-12 font-medium">Get Started</Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 text-center bg-purple-400 text-white">
        <div>
          <p>Created with love by brxjonesdev.</p>
        </div>
      </footer>
    </div>
  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
