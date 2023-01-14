export interface Result{
    name:string,
    relevance: number,
    type:string,
    id:number,
    year: number,
    result_type:string,
    tmdb_id:number,
    tmdb_type:string,
    image_url: string
};


export interface resultList{

    results: Result[];
}

export interface Source{

    source_id: number,
    name: string,
    type: string,
    region: string,
    ios_url: string,
    android_url: string,
    web_url: string,
    format: string,
    price: number,
    seasons: number,
    episodes: number

}

export interface sourceList{

    sources: Source[];
}

export interface Details{

    id: number,
    title: string,
    original_title: string,
    plot_overview: string,
    type: string,
    runtime_minutes: number,
    year: number,
    end_year: number,
    release_date: string,
    imdb_id: string,
    tmdb_id: number,
    tmdb_type: string,
    genres: number[],
    genre_names: string[],
    user_rating: number,
    critic_score: number,
    us_rating: string,
    poster: string,
    backdrop: string,
    original_language: string,
    similar_titles: number[],
    networks: number[],
    network_names: string[],
    trailer: string,
    trailer_thumbnail: string,
    relevance_percentile: number,
    sources: Source[]

    
}

export interface DetailsArray{

    details: Details[];
}