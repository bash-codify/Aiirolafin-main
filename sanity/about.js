import { defineField, defineType } from "sanity"


export default{
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
       
            {

            name: 'desc',
            title: 'Desc',
            type: 'string',

            },
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
                        
    ] 
};