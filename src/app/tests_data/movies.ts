export interface Movies{
    id: number,
    title: string,
    image_url: string,
    year: number,
    type: string 

}

export interface TestSources{

    source_id: number,
    name: string,
    type: string,
    region: string,
    
    format: string,
    price: number | null,
    seasons: number | null,
    episodes: number | null

    
}

export const sources: TestSources[] = [

    {

    source_id: 1,
    name: 'Netflix',
    type: 'sub',
    region: 'US',
    format: 'HD',
    price: null,
    seasons: null,
    episodes: null

    },
    {

        source_id: 1,
        name: 'Netflix',
        type: 'sub',
        region: 'US',
        format: 'HD',
        price: null,
        seasons: null,
        episodes: null
    
        },
        {

            source_id: 1,
            name: 'Amazon Prime Video',
            type: 'sub',
            region: 'US',
            format: 'HD',
            price: null,
            seasons: null,
            episodes: null
        
            }
        
]

export const movies: Movies[] = [

    {
        id: 1,
        title: 'Star wars',
        image_url: 'https://cdn.watchmode.com/posters/01374505_poster_w185.jpg',
        year: 2013,
        type: 'movie'
    
    },
    {
        id: 1,
        title: 'Star wars',
        image_url: 'https://cdn.watchmode.com/posters/01374505_poster_w185.jpg',
        year: 2013,
        type: 'movie'
    
    },
    {
        id: 1,
        title: 'Star wars',
        image_url: 'https://cdn.watchmode.com/posters/01374505_poster_w185.jpg',
        year: 2013,
        type: 'movie'
    
    },
    {
        id: 1,
        title: 'Star wars',
        image_url: 'https://cdn.watchmode.com/posters/01374505_poster_w185.jpg',
        year: 2013,
        type: 'movie'
    
    }
]

export interface sourceIMG{
    name: string,
    img_url: string,
}

export const sourceImages: sourceIMG[] = [

    {
        name: 'Netflix',
        img_url: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006-500x333.png'
    },

    {
        name: 'Amazon',
        img_url: 'https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png'    
    },
    {
        name: 'HBO MAX',
        img_url: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'    
    },
    {
        name: 'YouTube',
        img_url: 'https://www.webwise.ie/wp-content/uploads/2015/10/youtube.png'    
    },
    {
        name: 'Hulu',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'    
    },
    {
        name: 'Disney+',
        img_url: 'https://media.comicbook.com/2018/11/disney-plus-logo-1143358.jpeg'    
    },
    {
        name: 'Crunchyroll',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Crunchyroll_Logo.png/800px-Crunchyroll_Logo.png'    
    },
    {
        name: 'Funimation',
        img_url: 'https://m.media-amazon.com/images/I/41VoTPYjdPL.png'    
    },
    {
        name: 'The Roku Channel',
        img_url: 'https://cigars.roku.com/v1/resize/290x218/https%3A%2F%2Frsp.web.roku.com%2Fproduction%2F8b6909fe-a474-469d-843a-9f2f0742904e'    
    },
    {
        name: 'Microsoft Store',
        img_url: 'https://static.wikia.nocookie.net/logopedia/images/d/df/Microsoft_Store_2021_Light.svg/revision/latest/scale-to-width-down/250?cb=20220411094746'    
    },
    {
        name: 'iTunes',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Crunchyroll_Logo.png/800px-Crunchyroll_Logo.png'    
    },
    

]

    
    
    

   
