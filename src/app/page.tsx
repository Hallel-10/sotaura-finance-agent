'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setStatus('Error: ' + error.message)
    } else {
      setStatus('Check your email for a magic link.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      <input
        className="p-2 rounded text-black"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="mt-4 px-4 py-2 bg-white text-black rounded"
        onClick={handleLogin}
      >
        Send Magic Link
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}
