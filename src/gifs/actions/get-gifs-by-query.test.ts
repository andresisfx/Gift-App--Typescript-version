import {describe, test, expect, vi, beforeEach} from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "./giphy.api";
import { giphySearchResponseMock } from "../../mock-data/giphy.response.data";

describe('getGifsByQuery',()=>{
    let mock = new AxiosMockAdapter(giphyApi)
    beforeEach(()=>{
        mock =  new AxiosMockAdapter(giphyApi)
    })
    // test('should return a list of gifs',async()=>{
    //     const gifs = await getGifsByQuery('goku')
        
    //     const [gif1]=gifs 
    //     expect(gifs.length).toBe(25)
    //     expect( gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)
    //     })
    // }) 

    test('should return a list of gifs',async()=>{
        
       mock.onGet('/search?').reply(200,giphySearchResponseMock)

       const gifs = await getGifsByQuery('goku')

       expect(gifs.length).toBe(25)

       gifs.forEach((gif)=>{
           expect(typeof gif.id).toBe('string');
           expect(typeof gif.title).toBe('string');
           expect(typeof gif.url).toBe('string');
           expect(typeof gif.width).toBe('number');
           expect(typeof gif.height).toBe('number');
       })


    })

    
    test('should return an empty list when wuery is empty',async()=>{
        
     //*Aquí usamos la simulación con el mock de axios para simuklar la petición
    //    mock.onGet('/search?').reply(200,{data:[]})
      //*con mock.restore podemos hacer la siumulación real con la api real
      
      mock.restore()
       const gifs = await getGifsByQuery('')

       expect(gifs.length).toBe(0)


    })

    test('should handle error when api returns an error ',async ( )=>{

       mock.onGet('/search?').reply(400,{
        data:{
            message:'bad request'
        }
       })

       const gifs = await getGifsByQuery('goku')

    })
})