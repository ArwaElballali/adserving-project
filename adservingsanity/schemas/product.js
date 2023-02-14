// the main component of the website is the product it provides and this is its schema
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            // an array of image because we might display multiple images to describe a service or a product
            type: 'array',
            options: {
                hotspot: true,
            },
        },
        { 
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        { 
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          // slug is a unique string which will be passed to url in order to dynamically route the product name
          options: {
            // the slug would be derived automatically from the name field (the name of the product)
            source: 'name',
            maxLength: 90,
          },
        },
        { 
          name: 'price',
          title: 'Price',
          type: 'number',
        },
        { 
          name: 'details',
          title: 'Details',
          type: 'string',
        },
  ],
};