import Link from 'next/link'
import React from 'react'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { GoLinkExternal } from 'react-icons/go'
import { SiVelog } from 'react-icons/si'

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 font-serif text-3xl font-bold tracking-tight text-black dark:text-white">{'Contact'}</h1>
      <h2 className="mb-4 font-serif text-[22px] font-bold tracking-tight text-black dark:text-white">Channel</h2>
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:gap-2">
        <Link href={'https://github.com/KodywiththeK'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <BsGithub size={20} />
            <div className="ml-3">GitHub</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
        <Link href={'https://velog.io/@kodskm'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <SiVelog size={20} />
            <div className="ml-3">Blog</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
        <Link href={'https://www.youtube.com/@dskim2960'} className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900">
          <div className="flex items-center">
            <BsYoutube size={20} />
            <div className="ml-3">Youtube</div>
          </div>
          <GoLinkExternal size={20} />
        </Link>
      </div>
      <h2 className="mb-4 font-serif text-[22px] font-bold tracking-tight text-black dark:text-white">Email me</h2>
      <div className="mb-8 flex w-full flex-col gap-2 rounded-md bg-neutral-200 p-4 dark:bg-neutral-700 sm:p-7 md:p-10">
        <div className=" font-semibold">Your Email</div>
        <input placeholder="Email" type={'email'} className="mb-2 w-full rounded p-2 focus:outline-none" />
        <div className=" font-semibold">Title</div>
        <input placeholder="title" type={'text'} className="mb-2 w-full rounded p-2 focus:outline-none" />
        <div className=" font-semibold">Message</div>
        <textarea name="message" placeholder="message" className="mb-2 h-[200px] w-full rounded p-2 focus:outline-none" />
        <div className="flex justify-end">
          <button className="w-[100px] rounded-lg bg-neutral-300 py-2 text-center text-[18px] font-semibold">Send</button>
        </div>
      </div>
    </section>
  )
}
