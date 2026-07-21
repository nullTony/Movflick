import React from 'react'

const Loading = () => {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-6 py-20">
      <div className="relative w-16 h-16">
        {/* Внешнее кольцо — вращается по часовой */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background: 'conic-gradient(from 0deg, transparent 40%, #22c55e)',
            animationDuration: '1s',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
          }}
        />
        {/* Внутреннее кольцо — вращается ПРОТИВ часовой, другой цвет */}
        <div
          className="absolute inset-2 rounded-full animate-spin"
          style={{
            background: 'conic-gradient(from 180deg, transparent 40%, #a855f7)',
            animationDuration: '1.4s',
            animationDirection: 'reverse',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)',
          }}
        />
      </div>

      <p className="text-sm font-medium text-white/60 tracking-widest uppercase">
        Loading
      </p>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loading