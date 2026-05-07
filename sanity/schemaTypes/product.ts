export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
  
    { name: 'name', title: 'Name', type: 'string' },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },

    { name: 'price', title: 'Price', type: 'number' },
    { name: 'currency', title: 'Currency', type: 'string' },

    { name: 'category', title: 'Category', type: 'string' },

    { name: 'image', title: 'Main Image', type: 'image' },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },

    { name: 'shortDescription', title: 'Short Description', type: 'string' },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'tastingNotes',
      title: 'Tasting Notes',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'type', title: 'Type', type: 'string' },
        { name: 'abv', title: 'ABV', type: 'string' },
        { name: 'proof', title: 'Proof', type: 'string' },
        { name: 'volume', title: 'Volume', type: 'string' },
      ],
    },

    { name: 'inStock', title: 'In Stock', type: 'boolean' },
  ],
}