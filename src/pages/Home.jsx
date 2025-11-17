import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({tools}) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Free PDF & Image Tools — No Signup</h1>
      <p className="mb-6">40 free client-side tools (OCR, convert, compress). All tools run in your browser — no uploads required.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map(t => (
          <Link key={t.slug} to={`/${t.slug}`} className="p-4 bg-white rounded shadow hover:shadow-md">
            <h3 className="font-semibold">{t.title}</h3>
            <div className="text-sm text-gray-500 mt-2">/{t.slug}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
