import { defineField, defineType } from "sanity"


export default{
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
       
            {

                name: 'content',
                title: 'Content',
                type: 'array',
                 of: [
                    {
                    type: 'block'
                    },

                    {
                    type: 'image'
                    }
                ]
            },

            {
                name: 'image',
                title: 'Image',
                type: 'image',
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

                name: 'desc',
                title: 'Desc',
                type: 'string',

            },
                        
    ] 
};