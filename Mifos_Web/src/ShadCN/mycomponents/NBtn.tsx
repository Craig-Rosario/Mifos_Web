import { Button } from '@/components/ui/button'
import React from 'react'

interface BtnProps{
    name:string
}

const NBtn: React.FC<BtnProps> = ({name}) => {
  return (
    <div>
      <Button variant="ghost" className='p-2 hover:bg-gray-100 mx-2.5 cursor-pointer rounded-lg'>{name}</Button>
    </div>
  )
}

export default NBtn
