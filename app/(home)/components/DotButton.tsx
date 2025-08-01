import React from 'react'

type DotButtonProps = {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => (
  <button
    className={`
      w-4 h-4 rounded-full transition-all duration-200 cursor-pointer border-0 p-0 m-0
      ${selected 
        ? 'bg-cvut-orange scale-110' 
        : 'bg-cvut-gray/25 hover:bg-cvut-orange/50'
      }
    `}
    type="button"
    onClick={onClick}
  />
)