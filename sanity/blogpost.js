const post = {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [

    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
  
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
    {

        name: 'desc',
        title: 'Desc',
        type: 'string',

    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
        
  //  {
  //   name: 'author',
  //   title: 'Author',
  //   type: 'reference',
  //   to: {type: 'author'},
  // },

    {
      name: 'publishedAt',
      title: 'Published',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        
        {
        type: 'image'
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default post