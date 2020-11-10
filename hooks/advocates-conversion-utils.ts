import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  Advocate,
  WorldRegion
} from '../store/modules/advocates'

const RECORD_FIELDS = Object.freeze({
  name: 'Name',
  location: 'Country',
  // region: 'Region',
  image: 'Please upload your photo for the Advocates Website',
  slackId: 'Slack ID'
} as const)

async function fetchAdvocates (apiKey: string): Promise<Advocate[]> {
  const advocates: Advocate[] = []
  const base = new Airtable({ apiKey }).base('app8koO4BZifGFhCV')
  await base('Advocates').select({
    fields: Object.values(RECORD_FIELDS)
  }).eachPage((records, nextPage) => {
    for (const record of records) {
      const advocate = convertToAdvocate(record)
      advocates.push(advocate)
    }
    nextPage()
  })
  return Promise.resolve(advocates)
}

function convertToAdvocate (record: any): Advocate {
  return {
    name: getName(record),
    image: getImage(record),
    // region: getRegion(record),
    location: getLocation(record),
    slackId: getSlackId(record)
  }
}

function getName (record: any): string {
  return record.get(RECORD_FIELDS.name)
}

function filterWithWhitelist<W> (list: any[], whitelist: readonly W[]): W[] {
  return list.filter((type): type is W => whitelist.includes(type))
}

function getImage (record: any): string {
  const fallbackImage = '/images/advocates/no-advocate-photo.png'
  const attachments = record.get(RECORD_FIELDS.image)
  const imageAttachment = attachments && findImageAttachment(attachments)
  const imageUrl = imageAttachment && getImageUrl(imageAttachment)
  return imageUrl || fallbackImage
}

function getImageUrl (imageAttachment: any): string {
  return getThumbnailUrl(imageAttachment) || imageAttachment.url
}

function findImageAttachment (attachments: any[]): any|null {
  for (const oneAttachment of attachments) {
    const isImage = oneAttachment.type.startsWith('image')
    if (isImage) {
      return oneAttachment
    }
  }
  return null
}

function getThumbnailUrl (imageAttachment: any): string|null {
  const { thumbnails } = imageAttachment
  const { large: largeThumbnail } = thumbnails || {}
  return largeThumbnail ? largeThumbnail.url : null
}

function getLocation (record: any): string {
  return record.get(RECORD_FIELDS.location)
}

// function getRegion (record: any): WorldRegion {
//   // TODO: get regions. Now they are not on the Airtable
//   return record.get(RECORD_FIELDS.region) || 'Americas'
// }

function getSlackId (record: any): string {
  return record.get(RECORD_FIELDS.slackId)
}

export {
  RECORD_FIELDS,
  fetchAdvocates,
  convertToAdvocate,
  getName,
  getImage,
  getLocation,
  // getRegion,
  getSlackId,
  filterWithWhitelist
}