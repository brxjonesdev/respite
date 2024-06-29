import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import AddEntry from '@/components/dashboard/addEntryBtn';
import JournalEntries from '@/components/dashboard/entries';
import WelcomeCard from '@/components/dashboard/welcomeCard';

export default async function JournalDashboard() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  return (
    <section className="overflow-scroll space-y-2 rounded-b-lg pr-4 w-full">
      <WelcomeCard />
      <AddEntry />
      <JournalEntries />
    </section>
  );
}
