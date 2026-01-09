import {describe, test, expect} from "vitest";
import {render, renderHook, screen} from "@testing-library/react";
import { useCounter } from "./useCounter";


describe('useCounter',()=>{

    test('Should initialize with default value of 10',()=>{
        const {result} = renderHook(()=> useCounter());

        expect(result.current.counter).toBe(10);
    })
    test('Should initialize with value 20',()=>{

        const {result} = renderHook(()=>useCounter(20));
        expect(result.current.counter).toBe(20);
    })
})