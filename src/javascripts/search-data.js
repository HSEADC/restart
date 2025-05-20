import Airtable from 'airtable'

const token =
  'patDfa0WB3jdI1lRb.bf40d1384c80e8444c5ec0f74316ed5e3c11e6cdfe7307a4d089241789f3b9a7'
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appFcJgEisdpQCNWD')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []
    base('Table 1')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            image: record.fields['Images'],
            url: record.fields['URL']
          })
        })
        resolve(content)
      })
  })
}
export { getPostTeasers }
