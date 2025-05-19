'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DateRangePicker } from '@/components/ui/daterangepicker'
import RandomWordSelect from '@/components/backend/randomwordselect'

export default function NewGameClient() {
  const [word, setWord] = useState<string | null>(null)

  return (
    <div>
      <div>
        <DateRangePicker></DateRangePicker>
      </div>

      <div>
        {/* This will kick off the fetch+pick */}
        <RandomWordSelect onSelect={setWord} />
      </div>

      <div>
        <Button variant="outline" onClick={() => setWord(null)}>
          Clear Word
        </Button>
      </div>

      {word && (
        <div>
          <p>Your word is: <strong>{word}</strong></p>
          <Button variant="outline">Save word</Button>
        </div>
      )}

      <div>Word library</div>
    </div>
  )
}
