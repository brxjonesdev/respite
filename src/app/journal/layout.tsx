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

export default async function JournalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 h-screen">
      <header className="px-4 py-2 bg-white shadow-sm flex-col w-full">
        <section className="flex items-center justify-between w-full">
          <CardTitle>Respite</CardTitle>
          <div className="flex space-x-4 ">
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
          </div>
        </section>
        <section className="w-full">
          <CardDescription>Welcome In, {session?.user?.name}.</CardDescription>
        </section>
      </header>
      <div className="container mx-auto px-4 md:px-6 flex-grow py-6">{children}</div>
    </main>
  );
}
