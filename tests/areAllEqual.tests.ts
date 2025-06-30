import { areAllEqual, isDeepEqual } from "../src/"


describe("Comparing simple types", () => {

    test("Empty array, should return true", () => {
        const array : unknown[] = []

        const res = array.every(areAllEqual())

        expect(res).toBe(true)
    })

    test("Array of one element, should return true", () => {
        const array = [10]

        const res = array.every(areAllEqual())

        expect(res).toBe(true)
    })

    test("All numbers are equal, should return true", () => {
        const array = [10, 10, 10]

        const res = array.every(areAllEqual())

        expect(res).toBe(true)
    })

    test("All numbers are not equal, should return false", () => {
        const array = [10, 5, 10]

        const res = array.every(areAllEqual())

        expect(res).toBe(false)
    })

})