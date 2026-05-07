import { groq } from "next-sanity"
export const productsQuery = `
*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  price,
  currency,
  category,
  image,
  images,
  shortDescription,
  description,
  tags,
  tastingNotes,
  specs,
  inStock
}
`

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $id][0]{
  _id,
  name,
  "slug": slug.current,
  price,
  currency,
  category,
  image,
  images,
  shortDescription,
  description,
  tags,
  tastingNotes,
  specs,
  inStock
}
`

export const cartProduct = groq`
*[_type == "product" && slug.current in $slugs]{
          _id,
          name,
          "slug": slug.current,
          price,
          currency,
          category,
          image,
          images,
          shortDescription,
          description,
          tags,
          tastingNotes,
          specs,
          inStock
        }`