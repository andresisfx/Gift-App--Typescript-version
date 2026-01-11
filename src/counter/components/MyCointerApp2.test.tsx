import {describe, test, expect, vi} from "vitest";
import {render, renderHook, screen, act, fireEvent} from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";


    const handleAddMock = vi.fn(); 
    const handleResetMock  =vi.fn();
    const handleSubstractMock  =vi.fn();


vi.mock("../hooks/useCounter",()=>({
    useCounter: ()=>({
           counter:30,
    handleAdd:handleAddMock ,
    handleReset:handleResetMock,
    handleSubstract:handleSubstractMock
    })
}))

describe('MycounterApp',()=>{
    test('should render the component',()=>{
        render(<MyCounterApp/>)
       screen.debug();

       expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(
            '30'
        )
        expect(screen.getByRole('button',{name:'+1'})).toBeDefined()
        expect(screen.getByRole('button',{name:'-1'})).toBeDefined()
        expect(screen.getByRole('button',{name:'Reset'})).toBeDefined()
    })

    test('Should call handleAdd when +1 button clicked',()=>{
        render(<MyCounterApp/>)
       
       const addBtn =  screen.getByRole('button',{name:'+1'})
       
       fireEvent.click(addBtn)
       expect(handleAddMock).toHaveBeenCalled();
       expect(handleResetMock).not.toHaveBeenCalled();
       expect(handleSubstractMock).not.toHaveBeenCalled();
       
       
    })

})