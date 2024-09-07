import React from 'react'
import { IoClose } from 'react-icons/io5'

interface ToggleNavbarProps {
  show: boolean
  children: React.ReactNode
  toggleFunction: () => void
}

const ToggleNavbar: React.FC<ToggleNavbarProps> = ({
  show,
  toggleFunction,
  children,
}) => {
  return show ? (
    <div className="z-50 bg-black bg-opacity-50 fixed inset-0 w-screen min-h-screen lg:h-screen flex justify-center items-center p-12">
      <div className="w-full max-w-sm rounded-md bg-white text-black text-xs shadow-2xl">
        <div className="pt-6 pr-6 flex justify-end">
          <button
            className="p-2 border rounded-md"
            onClick={toggleFunction}
            type="button"
          >
            <IoClose />
          </button>
        </div>
        <div className="px-12 pb-12 pt-2">{children}</div>
      </div>
    </div>
  ) : null
}

export default ToggleNavbar
