import { Loader2 } from 'lucide-react';
import React from 'react'
// Update the import path below if your Button component is located elsewhere
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
title: string;
buttonType?: "button" | "submit" | "reset" | undefined
isLoading: boolean;
LoadingTitle: string;
}
export default function SubmitButton({title, buttonType="submit", isLoading=false, LoadingTitle}: SubmitButtonProps) {
  return (
   <>
   {isLoading ? (
     <Button disabled>
     <Loader2 className='w-4 h-4 mr-2 animate-spin'/>
     {LoadingTitle}
   </Button>

   ):(
    <Button type={buttonType} className='bg-gray-950 hover:bg-indigo-600'>
      {title}
    </Button>
   )}
   </>
  )
}