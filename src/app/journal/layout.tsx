import { signOut, auth } from '@/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import JournalEntries from '@/components/dashboard/entries';
import SummaryCalendar from '@/components/dashboard/calendar';

export default async function JournalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main className="bg-gray-100 h-screen flex flex-col overflow-hidden">
      <header className="px-4 py-2 bg-white shadow-sm w-full flex justify-between">
        <div className="space-y-1.5">
          <CardTitle>Respite</CardTitle>
          <CardDescription>Welcome In, {session?.user?.name}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar>
              <AvatarImage src={session?.user?.image ?? ''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="container mx-auto px-4 md:px-6 py-6 flex-grow h-full overflow-auto flex gap-10">
        <SummaryCalendar />
        {children}
      </div>
    </main>
  );
}
