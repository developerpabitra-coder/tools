import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ToolTemplate from './components/ToolTemplate'
import tools from './tools-list'

export default function App(){
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl">PDF Tools — Free</Link>
          <nav className="space-x-4 hidden md:block">
            <Link to="/compress-pdf" className="text-sm">Compress PDF</Link>
            <Link to="/pdf-to-jpg" className="text-sm">PDF→JPG</Link>
            <Link to="/jpg-to-pdf" className="text-sm">JPG→PDF</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home tools={tools} />} />
          {tools.map(t => (
            <Route key={t.slug} path={`/${t.slug}`} element={<ToolTemplate title={t.title} slug={t.slug} />} />
          ))}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} PDF Tools — Free • Privacy Policy • Terms
      </footer>
    </div>
  )
}
