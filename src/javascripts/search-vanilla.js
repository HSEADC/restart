import { getPostTeasers } from './search-data'

let content,
  container = document.querySelector('.S_Content')

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data
    createCards(content)
  })
})

function createCards(content) {
  content.forEach((contentDataItem) => {
    let { id, title, description, image, url } = contentDataItem

    const contentItem = document.createElement('a')
    contentItem.classList.add('O_ContentItem')
    contentItem.classList.add(`${className}`)
    contentItem.href = content.url

    // console.log(content.url)
    // console.log(content)

    const contentItemCover = document.createElement('img')
    contentItemCover.classList.add('A_ContentItemCover')
    contentItemCover.src = image

    const contentItemTitle = document.createElement('h3')
    contentItemTitle.classList.add('A_ContentItemTitle')
    contentItemTitle.innerText = title

    const contentItemDescription = document.createElement('p')
    contentItemDescription.classList.add('A_ContentItemDescription')
    contentItemDescription.innerText = description

    // const contentItemTags = document.createElement('div')
    // contentItemTags.classList.add('C_ContentItemTags')

    // tags.forEach((tag) => {
    //   const contentItemTag = document.createElement('div')
    //   contentItemTag.classList.add('A_ContentItemTag')
    //   contentItemTag.innerText = tag
    //   contentItemTags.appendChild(contentItemTag)
    // })

    contentItem.appendChild(contentItemCover)
    contentItem.appendChild(contentItemTitle)
    contentItem.appendChild(contentItemDescription)

    document.querySelector('.S_Content').appendChild(contentItem)
  })
}
