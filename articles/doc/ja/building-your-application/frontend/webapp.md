---
id: building-your-application-frontend-webapp
title: WebApp (on Edge) をデプロイ
description: WebApp (on Edge) をデプロイ Skeet Framework
---

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

**太字**

_斜体_

~取り消し線~

- 箇条書きアイテム 1
- 箇条書きアイテム 2
  - ネストされた箇条書きアイテム 1
  - ネストされた箇条書きアイテム 2

1. 番号付きリストアイテム 1
2. 番号付きリストアイテム 2
   1. ネストされた番号付きリストアイテム 1
   2. ネストされた番号付きリストアイテム 2

インラインコードスニペットを`Testing`です。

```javascript
// コードブロック
console.log('Hello, World!')
```

---

## コードサンプル

```tsx:/src/app/[locale]/(default)/layout.tsx

import { unstable_setRequestLocale } from 'next-intl/server'
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'

type Props = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function DefaultLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <div className="flex flex-col">
        <DefaultHeader />
        <main className="min-h-screen">{children}</main>
        <DefaultFooter />
      </div>
    </>
  )
}

```

## YouTube 埋め込み

https://www.youtube.com/watch?v=Hivsa0cgFqU
