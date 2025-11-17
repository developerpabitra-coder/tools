import React from 'react'

export default function ToolTemplate({title, slug}) {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-4">This is a starter page for the <strong>{title}</strong> tool (slug: <code>/{slug}</code>).</p>

      <div className="border rounded p-4 mb-4">
        <p className="text-sm text-gray-700">Tool UI placeholder — implement client-side conversion/processing here.</p>
        <ol className="list-decimal list-inside text-sm mt-2 text-gray-600">
          <li>Choose file</li>
          <li>Configure options</li>
          <li>Process & download</li>
        </ol>
      </div>

      <div className="text-sm text-gray-500">
        <strong>SEO tip:</strong> Add an explanation, step-by-step usage, FAQ, and example files to rank fast.
      </div>
    </div>
  )
}
