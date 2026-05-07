import fs from 'fs'

const products = JSON.parse(
  fs.readFileSync('./products.json', 'utf-8')
)

const docs = products.map((product) => ({
  _type: 'product',
  _id: `product-${product.id}`,

  name: product.name,
  slug: {
    _type: 'slug',
    current: product.slug,
  },

  price: product.price,
  currency: product.currency,
  category: product.category,

  shortDescription: product.shortDescription,
  description: product.description,

  tags: product.tags || [],
  tastingNotes: product.tastingNotes || [],

  specs: product.specs || {},

  inStock: product.inStock,
}))

const ndjson = docs.map((doc) => JSON.stringify(doc)).join('\n')

fs.writeFileSync('./data.ndjson', ndjson)

console.log('✅ data.ndjson created')