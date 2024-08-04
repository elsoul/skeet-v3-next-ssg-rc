import { blurDataURL } from '@/lib/utils'
import Image from 'next/image'

export default function GreenHostingBadge() {
  return (
    <>
      <a
        href="https://www.thegreenwebfoundation.org/green-web-check/?url=https://skeet-v3-next-ssg-rc.pages.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://app.greenweb.org/api/v3/greencheckimage/skeet-v3-next-ssg-rc.pages.dev?nocache=true"
          alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
          width={200}
          height={95}
          unoptimized
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </a>
    </>
  )
}
