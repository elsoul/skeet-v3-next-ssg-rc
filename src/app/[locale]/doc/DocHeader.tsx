import LogoHorizontalLink from '@/components/common/LogoHorizontalLink'
import {
  DiscordIconLink,
  GithubIconLink,
  TwitterIconLink,
} from '@/components/common/icons'
import DefaultModalNav from './DocModalNav'

export default function DefaultHeader() {
  return (
    <>
      <header className="sticky flex w-full flex-col gap-10 px-6 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center gap-8">
          <LogoHorizontalLink className="w-24" />
          <div className="hidden md:flex md:flex-row"></div>
          <div className="flex flex-grow" />
          <div className="flex flex-row items-start justify-center gap-3">
            <DefaultModalNav />
            <div className="hidden gap-3 md:flex md:flex-row">
              <GithubIconLink />
              <TwitterIconLink />
              <DiscordIconLink />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
