'use client';
import React from 'react';
import { Entry } from '../entries';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dateFormatted } from '@/lib/utils';
import { useState } from 'react';
import verticalMenu from '../../../../public/more-vertical.svg';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { useRespiteStore } from '@/providers/respite-store-provider';

export default function NoteEntry({ entry }: { entry: Entry }) {
  // const { } = useRespiteStore((store) => store);

  if (entry.isBeingEdited) {
    // Show the edit version of the entry
    return null;
  }

  // Show the normal version of the entry
  return null;
}
