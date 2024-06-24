import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Entry as EntryType } from '@/components/dashboard/entries';

export default function Entry({ data }: { data: EntryType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.type}</CardDescription>
      </CardHeader>
      <CardContent>{data.content}</CardContent>
      <CardFooter className="space-x-2">
        {data.tags.map((tag, index) => (
          <Badge key={index}>{tag}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
