import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image'

export default function Home() {
  const state = false;
  return(
    <div className='flex flex-col'>
      <p className='text-3xl text-red-300'>Hello Rahil</p>
      <Button className={cn("bg-indigo-50", state && "bg-red-200")}> Click ME</Button>
    </div>
    
  )
}
