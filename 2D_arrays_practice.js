// problem from Hackerrank

// The problem begins with a 6 x 6 array:
// 1  1  1  0  0 0
// 0  1  0  0  0 0
// 1  1  1  0  0 0
// 0  9  2 -4 -4 0
// 0  0  0 -2  0 0
// 0  0 -1 -2 -4 0

// This hourglass pattern occurs 16 times within the array.
// The goal is to find the sum of the numbers in each of the hourglass patterns and return the maximum sum.
// For the first one, it would be 7.
//Constraints:
    //-9 min value of any position

   let arr = [
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 2, 4, 4, 0 ],
        [ 0, 0, 0, 2, 0, 0 ],
        [ 0, 0, 1, 2, 4, 0 ]
      ]

function hourglass(arr) {
    // since min value is -9, we can set max variable to -63(-9 * 7)
    let max = -63
    // use nested loop to check all the points we need
    // there are 4 possible hourglasses on 4 different rows (in explanation)
        // declare variable to keep sum 
        // sum === hourglass values added up
        // compare sum to max
    for(let i=0; i< 4; i++) {
        for(let j=0; j<4; j++) {
            let sum = 0
            sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +
            arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            max = max > sum ? max: sum
        }
    }
    return max
}
