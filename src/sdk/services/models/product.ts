export class Price {
  actualPrice = 0
  discountedPrice = 0
}

export class TabData {
  headers: string[] = []
  descriptions: string[] = []
}

export class Image {
  src = ''
  alt = ''
}

export class ProductDataModel {
  id = ''
  meta_keywords = ''
  name = ''
  model = ''
  availability = ''
  desc = ''
  rating = 0
  maxRating = 0
  featureList: string[] = []
  sizes: string[] = []
  price = new Price()
  tabData = new TabData()
  images: Image[] = []
}
