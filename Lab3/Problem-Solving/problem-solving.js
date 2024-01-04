/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var countApples = 0;
    var countOranges = 0;

    for (var i = 0; i < apples.length; i++) {
        var position = a + apples[i];
        if (position >= s && position <= t) {
            countApples++;
        }
    }

    for (var j = 0; j < oranges.length; j++) {
        var position = b + oranges[j];
        if (position >= s && position <= t) {
            countOranges++;
        }
    }

    console.log(countApples);
    console.log(countOranges);
}