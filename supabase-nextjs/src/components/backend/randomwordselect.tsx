// components/backend/RandomWordSelect.tsx
'use client'

import supabase from "../../../helper/supabaseClient";
import { Button } from '@/components/ui/button'

type Props = {
  onSelect: (word: string) => void
}

export default function RandomWordSelect({ onSelect }: Props) {
  const handleClick = async () => {
    try {
      const word = await fetchRandomWord()
      onSelect(word)
    } catch (err) {
      console.error('RandomWordSelect error:', err)
    }
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      Randomly Generate For Me!
    </Button>
  )
}

export async function fetchRandomWord() {
  const { data, error } = await supabase.from('words').select('word')
  if (error) throw error
  if (!data?.length) throw new Error('no words')
  return data[Math.floor(Math.random()*data.length)].word
}

