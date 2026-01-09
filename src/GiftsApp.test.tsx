import { describe, test, expect} from "vitest";
import {render} from '@testing-library/react'
import { GiftsApp } from "./GiftsApp";

describe("GiftsApp", () => {
    test("should render correctly", () => {
        const {container} = render(<GiftsApp/>)
        expect(container).toMatchSnapshot();
    });
});