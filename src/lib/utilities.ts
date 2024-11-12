import {diff} from "deep-object-diff";


export function clone_object<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function is_different(obj1: any, obj2: any): Boolean {
    const diffs = diff(obj1, obj2);
    // console.log("diff", diffs);
    return Object.keys(diffs).length !== 0;
}