import { areAllUnique, isDeepEqual } from "../src"


describe("Comparing simple types", () => {

    test("Empty array, should return true", () => {
        const array : unknown[] = []

        const res = array.every(areAllUnique())

        expect(res).toBe(true)
    })

    test("Array of one element, should return true", () => {
        const array = [1]

        const res = array.every(areAllUnique())

        expect(res).toBe(true)
    })

    test("Some numbers are equal, should return false", () => {
        const array = [1, 2, 1]

        const res = array.every(areAllUnique())

        expect(res).toBe(false)
    })

    test("All numbers are unique, should return true", () => {
        const array = [7, 5, 3]

        const res = array.every(areAllUnique())

        expect(res).toBe(true)
    })

})