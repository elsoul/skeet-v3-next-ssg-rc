import fs from 'fs'
import { glob } from 'glob'
import { join } from 'path'
import matter from 'gray-matter'
import { uniqueArray } from './utils'

export const getArticleBySlug = (
  slugArray: string[],
  fields: string[] = [],
  articleDirPrefix: string,
  locale: string,
) => {
  const articlesDirectory = join(
    process.cwd(),
    `articles/${articleDirPrefix}/${locale}`,
  )
  const matchedSlug = slugArray.join('/')
  const realSlug = matchedSlug.replace(/\.md$/, '')
  const fullPath = join(articlesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string | string[]
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'date') {
      const date = slugArray[0] + '.' + slugArray[1] + '.' + slugArray[2]
      items[field] = date
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllArticles = (articleDirPrefix: string) => {
  const entries = glob.sync(`articles/${articleDirPrefix}/**/*.md`)

  const slugs = entries
    .map((file) => file.split(articleDirPrefix).pop())
    .map((slug) => {
      const parts = (slug as string).replace(/\.md$/, '').split('/')
      parts.shift()
      parts.shift()
      return parts
    })
    .filter((slug) => slug.length > 0)

  return uniqueArray(slugs)
}