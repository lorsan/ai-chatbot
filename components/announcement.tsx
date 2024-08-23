import * as React from 'react'

export function Announcement() {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Progetto finanaziato dal Comune di Sanzeno
        <a href="#" className="inline-block underline">
          Check out this new course!
        </a>
      </p>
    </div>
  )
}
