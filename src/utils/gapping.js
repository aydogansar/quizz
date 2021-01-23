export const gapping = (sentence) => {
    const word = sentence.substring(
        sentence.lastIndexOf('{{') + 2,
        sentence.lastIndexOf('}}')
    )

    return word
}
