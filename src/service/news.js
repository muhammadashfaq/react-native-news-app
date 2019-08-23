import {BASE_URL, country, API_KEY} from "../api";

export const  getArticles = async (category='general') => {
    try {
        const data = await fetch(`${BASE_URL}?${country}&category=${category}`, {
            headers: {
                "X-API-KEY": API_KEY
            }
        });
        const result = await data.json();
        return result.articles

    } catch (e) {
        return e
    }
}