import {describe, test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {CustomHeader} from "./CustomHeader";


describe('CustomerHeader tests',()=>{
     const title= 'Lorman';
     const description = 'Había una vez'
    test('Should render the title correctly',()=>{
       
        
        render(<CustomHeader title={title} description="bla bla bla"/>)
        expect(screen.getByText(title)).toBeDefined();

    })

    test('Should render the description when provided',()=>{

       
        
      render(<CustomHeader title={title} description={description}/>);
      expect(screen.getByText(description)).toBeDefined();
      expect(screen.getByRole('paragraph')).toBeDefined();
      expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    })
    test('Should not render when description no provided',()=>{
        const {container} = render(<CustomHeader title={title} />);
        
        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');

        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');

        expect(p).toBeNull();
    })
})