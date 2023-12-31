import type { ICommunicationChannel } from '@models/interfaces'
import React from 'react'

function CommunicationChannelItem({
  channelProps,
  languaje
}: {
  channelProps: ICommunicationChannel
  languaje: 'spanish' | 'english'
}) {
  return (
    <article
      className="relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
      before:bottom-0 before:left-0 before:bg-black
      before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
      before:transition before:ease-in-out before:duration-300"
    >
      <a
        className="flex gap-2 items-center p-1 text-slate-600"
        href={channelProps.url}
      >
        {channelProps.icon === 'phone' && (
          <svg
            className="w-4 h-4 text-slate-600"
            width={8}
            height={8}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {channelProps.icon === 'email' && (
          <svg
            className="w-4 h-4 text-slate-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={8}
            height={8}
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        )}
        {channelProps.icon === 'clock' && (
          <svg
            className="w-4 h-4 text-slate-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={8}
            height={8}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <p className="text-xs">
          {languaje === 'english'
            ? channelProps.nameEnglish
            : channelProps.nameSpanish}
        </p>
      </a>
    </article>
  )
}

export default CommunicationChannelItem
