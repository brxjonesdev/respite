import React from 'react';
import SummaryCalendar from '@/components/dashboard/calendar';

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex gap-10 h-full flex-grow">
      <SummaryCalendar/>
      {children}
    </section>
  );
}
