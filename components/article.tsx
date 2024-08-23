import * as React from 'react'

interface Mycomponents {
  title: string
}

export function Article({ title }: Mycomponents) {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg bg-gray-200 px-5 py-5">
      <div className="p-2">
        <h3 className="mt-0.5 text-base text-gray-600 text-center">{title}</h3>
      </div>
    </article>
  )
}
