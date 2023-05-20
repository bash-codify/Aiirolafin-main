import { defineField, defineType } from "sanity"


export default {
    name: 'listings',
    title: 'Listings',
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

            name: 'categories',
            title: 'House Or Apartment',
            type: 'string',

            },

            {

            name: 'types',
            title: 'Rent Or Sales',
            type: 'string',

            },

            
            {

            name: 'location',
            title: 'Location',
            type: 'string',

            },

            
            {

            name: 'price',
            title: 'Price',
            type: 'string',

            },

            {

            name: 'desc',
            title: 'Desc',
            type: 'string',

            },
            
            {

            name: 'rooms',
            title: 'Rooms',
            type: 'string',

            },

            
            {

            name: 'bathroom',
            title: 'BathRooms',
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