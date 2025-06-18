import { isDeepEqual } from './isDeepEqual'


export const areAllEqual = <TIn>(
    compareFn: (a: TIn, b: TIn) => boolean = isDeepEqual
) => (
    curr: TIn,
    ix: number,
    arr: TIn[]
) => {
        // Check only on last iteration
        if (ix === 0) {            
            return true
        }

        const first = arr[0]
        for (let i = 1; i < ix; i++) {
            if (!compareFn(first, arr[i])) {
                return false
            }
        }

        return true
    }