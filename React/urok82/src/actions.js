export const dec = () => ({type: "DECREMENT"});
export const inc = () => ({type: "INCREMENT"});
export const rnd = (value) => {
    return {type: "RANDOM", value: Math.floor(Math.random() * 10)}
}