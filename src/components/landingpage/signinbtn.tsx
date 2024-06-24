import React from 'react';
import { Button } from '../ui/button';
import { signIn } from '@/auth';

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <Button type="submit" className="w-full px-24 lg:w-fit">
        Sign In
      </Button>
    </form>
  );
}
