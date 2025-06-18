import { isDeepEqual } from './isDeepEqual'


export const areAllUnique = <TIn>(
    compareFn: (a: TIn, b: TIn) => boolean = isDeepEqual
) => (
    curr: TIn,
    ix: number,
    arr: TIn[]
) => {
        for (let i = 1; i < ix; i++) {
            if (ix === i) {
                break;
            }

            if (compareFn(curr, arr[i])) {
                return false
            }
        }

        return true
    }