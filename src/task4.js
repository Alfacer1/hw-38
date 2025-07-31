/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

export const list = [12, 23, 100, 34, 56, 9, 233]
export const myMax = (arr) => {
    return Math.max.apply(null, arr)
}

console.log(myMax(list)); // 233