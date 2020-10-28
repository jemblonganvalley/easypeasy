import {action, createStore} from 'easy-peasy'

export let globalData = createStore({

    userData : [
        {
            id : 1,
            username : 'fadliselaz@gmail.com',
            password : 'xxxxxxx',
            avatar : 'https://picsum.photos/seed/123/300'
        },
        {
            id : 2,
            username : 'evalia@gmail.com',
            password : 'xxxxxxx',
            avatar : 'https://picsum.photos/seed/432/300'
        },
        {
            id : 3,
            username : 'rompas@gmail.com',
            password : 'xxxxxxx',
            avatar : 'https://picsum.photos/seed/345/300'        
        },
    ],

    product : [
        {
            id : 1,
            product_name : 'image 1',
            product_image : 'https://picsum.photos/seed/345/300',
            product_price : '300.000',
            like : 0,
            chart : false,
        },
         {
            id : 2,
            product_name : 'image 2',
            product_image : 'https://picsum.photos/seed/432/300',
            product_price : '200.000',
            like : 1,
            chart : false,
        },
         {
            id : 3,
            product_name : 'image 3',
            product_image : 'https://picsum.photos/seed/345/300',
            product_price : '500.000',
            like : 0,
            chart : false,
        },
        {
            id : 4,
            product_name : 'image 3',
            product_image : 'https://picsum.photos/seed/345/300',
            product_price : '500.000',
            like : 0,
            chart : false,
        }
    ],

    menu : [
        {
            id : 1,
            name : "home",
            to : '/home',
        },
        {
            id : 2,
            name : "about",
            to : '/about',
        },
        {
            id : 3,
            name : "contact",
            to : '/contact',
        },
        {
            id : 4,
            name : "gallery",
            to : '/gallery',
        }
    ]


})