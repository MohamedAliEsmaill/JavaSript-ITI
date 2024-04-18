# javascript

- [javascript](#javascript)
  - [1.Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.](#1write-a-javascript-program-to-compare-two-objects-to-determine-if-the-first-contains-equivalent-property-values-to-the-second-one)
  - [2. Write a JavaScript program to copy a string to the clipboard.](#2-write-a-javascript-program-to-copy-a-string-to-the-clipboard)
  - [3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.](#3-write-a-javascript-program-to-convert-a-comma-separated-value-csv-string-to-a-2d-array)
  - [4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.](#4-write-a-javascript-program-to-convert-a-comma-separated-value-csv-string-to-a-2d-array-of-objects-the-first-row-of-the-string-is-used-as-the-title-row)
  - [5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.](#5-write-a-javascript-program-to-convert-an-array-of-objects-to-a-comma-separated-value-csv-string-that-contains-only-the-columns-specified)
  - [6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.](#6-write-a-javascript-program-to-target-a-given-value-in-a-nested-json-object-based-on-the-given-key)
  - [7. Write a JavaScript program to convert a specified number into an array of digits.](#7-write-a-javascript-program-to-convert-a-specified-number-into-an-array-of-digits)
  - [8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.](#8-write-a-javascript-program-to-filter-out-the-specified-values-from-a-specified-array-return-the-original-array-without-filtered-values)
  - [9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.](#9-write-a-javascript-program-to-combine-the-numbers-of-a-given-array-into-an-array-containing-all-combinations)
  - [10. Write a JavaScript program to extract values at specified indexes from a specified array.](#10-write-a-javascript-program-to-extract-values-at-specified-indexes-from-a-specified-array)
  - [11. Write a JavaScript program to generate a random hexadecimal color code.](#11-write-a-javascript-program-to-generate-a-random-hexadecimal-color-code)
  - [12. Write a JavaScript program to remove non-printable ASCII characters from a given string.](#12-write-a-javascript-program-to-remove-non-printable-ascii-characters-from-a-given-string)
  - [13. Write a JavaScript program to convert a given string's length to bytes.](#13-write-a-javascript-program-to-convert-a-given-strings-length-to-bytes)
  - [14. Write a JavaScript program to replace multiple object keys' names with the values provided.](#14-write-a-javascript-program-to-replace-multiple-object-keys-names-with-the-values-provided)
  - [15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.](#15-write-a-javascript-program-to-return-the-minimum-maximum-value-of-an-array-after-applying-the-provided-function-to-set-a-comparing-rule)
  - [16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.](#16-write-a-javascript-function-that-returns-true-if-the-provided-predicate-function-returns-true-for-all-elements-in-a-collection-false-otherwise)
  - [17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.](#17-write-a-javascript-program-to-split-the-values-of-two-given-arrays-into-two-groups-if-an-element-in-the-filter-is-true-the-corresponding-element-in-the-collection-belongs-to-the-first-group-otherwise-it-belongs-to-the-second-group)
  - [18. Write a JavaScript program to remove specified elements from the left of a given array of elements.](#18-write-a-javascript-program-to-remove-specified-elements-from-the-left-of-a-given-array-of-elements)
  - [19. Write a JavaScript program to remove specified elements from the right of a given array of elements.](#19-write-a-javascript-program-to-remove-specified-elements-from-the-right-of-a-given-array-of-elements)
  - [20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.](#20-write-a-javascript-program-to-extend-a-3-digit-color-code-to-a-6-digit-color-code)
  - [21. Write a JavaScript program to get every nth element in a given array.](#21-write-a-javascript-program-to-get-every-nth-element-in-a-given-array)
  - [22. Write a JavaScript program to filter out non-unique values in an array.](#22-write-a-javascript-program-to-filter-out-non-unique-values-in-an-array)
  - [23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.](#23-write-a-javascript-program-to-filter-out-non-unique-values-in-an-array-based-on-a-provided-comparator-function)
  - [24. Write a JavaScript program to dcapitalize the first letter of a string.](#24-write-a-javascript-program-to-dcapitalize-the-first-letter-of-a-string)
  - [25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.](#25-write-a-javascript-program-to-create-an-array-out-of-the-arrays-by-creating-each-possible-pair-from-the-arrays)
  - [26. Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.](#26-write-a-javascript-program-that-returns-true-if-the-string-is-yyes-or-false-if-the-string-is-nno)
  - [27. Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.](#27-write-a-javascript-program-to-find-every-element-in-any-of-the-two-given-arrays-at-once-using-the-provided-comparator-function)
  - [28. Write a JavaScript program to measure the time a function to execute.](#28-write-a-javascript-program-to-measure-the-time-a-function-to-execute)
  - [29. Write a JavaScript program to convert a value to a safe integer.](#29-write-a-javascript-program-to-convert-a-value-to-a-safe-integer)
  - [30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.](#30-write-a-javascript-program-to-filter-out-the-elements-of-a-given-array-that-have-one-of-the-specified-values)
  - [31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.](#31-write-a-javascript-program-to-find-all-elements-in-a-given-array-except-the-first-one-return-the-whole-array-if-its-length-is-1)
  - [32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.](#32-write-a-javascript-program-to-get-the-sum-of-a-given-array-after-mapping-each-element-to-a-value-using-the-provided-function)
  - [33. Write a JavaScript program to generate a random number in the specified range.](#33-write-a-javascript-program-to-generate-a-random-number-in-the-specified-range)
  - [34. Write a JavaScript program to generate a random integer in the specified range.](#34-write-a-javascript-program-to-generate-a-random-integer-in-the-specified-range)
  - [35. Write a JavaScript program to get an array of given n random integers in the specified range.](#35-write-a-javascript-program-to-get-an-array-of-given-n-random-integers-in-the-specified-range)
  - [36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.](#36-write-a-javascript-program-to-create-a-function-that-invokes-each-provided-function-with-the-arguments-it-receives-and-returns-the-results)
  - [37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.](#37-write-a-javascript-program-to-get-a-sorted-array-of-objects-ordered-by-properties-and-orders)
  - [38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.](#38-write-a-javascript-program-to-pad-a-string-on-both-sides-with-the-specified-character-if-its-shorter-than-the-specified-length)
  - [39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.](#39-write-a-javascript-program-to-remove-the-key-value-pairs-corresponding-to-the-given-keys-from-an-object)
  - [40. Write a JavaScript program to create an array of key-value pair arrays from a given object.](#40-write-a-javascript-program-to-create-an-array-of-key-value-pair-arrays-from-a-given-object)
  - [41. Write a JavaScript program to create an object from the given key-value pairs.](#41-write-a-javascript-program-to-create-an-object-from-the-given-key-value-pairs)
  - [42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.](#42-write-a-javascript-program-to-get-a-customized-coalesce-function-that-returns-the-first-argument-that-returns-true-from-the-provided-argument-validation-function)
  - [43. Write a JavaScript program to change a function that accepts an array into a variadic function.](#43-write-a-javascript-program-to-change-a-function-that-accepts-an-array-into-a-variadic-function)
  - [44. Write a JavaScript program to remove false values from a given array.](#44-write-a-javascript-program-to-remove-false-values-from-a-given-array)
  - [45. Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.](#45-write-a-javascript-program-to-split-values-into-two-groups-if-an-element-in-the-filter-is-true-the-corresponding-element-in-the-collection-belongs-to-the-first-group-otherwise-it-belongs-to-the-second-group)
  - [46. Write a JavaScript program to curry (curries) a function.](#46-write-a-javascript-program-to-curry-curries-a-function)
  - [47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.](#47-write-a-javascript-program-to-perform-a-deep-comparison-between-two-values-to-determine-if-they-are-equivalent)
  - [48. Write a JavaScript program to get an array of function property names from the own (and optionally inherited) enumerable properties of an object.](#48-write-a-javascript-program-to-get-an-array-of-function-property-names-from-the-own-and-optionally-inherited-enumerable-properties-of-an-object)
  - [49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.](#49-write-a-javascript-program-to-retrieve-a-set-of-properties-indicated-by-the-given-selectors-from-an-object)
  - [50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.](#50-write-a-javascript-program-to-convert-an-integer-to-a-suffixed-string-adding-am-or-pm-based-on-its-value)
  - [51. Write a JavaScript program to get an object containing the current URL parameters.](#51-write-a-javascript-program-to-get-an-object-containing-the-current-url-parameters)
  - [52. Write a JavaScript program to group the elements of a given array based on the given function.](#52-write-a-javascript-program-to-group-the-elements-of-a-given-array-based-on-the-given-function)
  - [53. Write a JavaScript program to initialize a two-dimensional array of given size and value.](#53-write-a-javascript-program-to-initialize-a-two-dimensional-array-of-given-size-and-value)
  - [54. Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.](#54-write-a-javascript-program-to-initialize-an-array-containing-numbers-in-the-specified-range-start-and-end-are-inclusive-of-their-common-point-of-difference)
  - [55. Write a JavaScript program to join all given URL segments together, then normalize the resulting URL.](#55-write-a-javascript-program-to-join-all-given-url-segments-together-then-normalize-the-resulting-url)
  - [56. Write a JavaScript program to check whether all elements in a given array are equal or not.](#56-write-a-javascript-program-to-check-whether-all-elements-in-a-given-array-are-equal-or-not)
  - [57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.](#57-write-a-javascript-program-to-compute-the-average-of-an-array-after-mapping-each-element-to-a-value-using-the-provided-function)
  - [58. Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.](#58-write-a-javascript-program-to-split-values-into-two-groups-according-to-a-predicate-function-this-specifies-which-group-an-element-in-the-input-collection-belongs-to)
  - [59. Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.](#59-write-a-javascript-program-to-create-a-function-that-invokes-fn-in-a-given-context-optionally-add-any-additional-variables-to-the-arguments-beginning)
  - [60. Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.](#60-write-a-javascript-program-to-create-a-function-that-invokes-the-method-at-a-given-key-of-an-object-optionally-add-any-parameters-that-are-supplied-to-the-beginning-of-the-arguments)
  - [61. Write a JavaScript program to cast the provided value as an array if it's not one.](#61-write-a-javascript-program-to-cast-the-provided-value-as-an-array-if-its-not-one)
  - [62. Write a JavaScript program to chain asynchronous functions.](#62-write-a-javascript-program-to-chain-asynchronous-functions)
  - [63. Write a JavaScript program to clone a given regular expression.](#63-write-a-javascript-program-to-clone-a-given-regular-expression)
  - [64. Write a JavaScript program to get the first non-null / undefined argument.](#64-write-a-javascript-program-to-get-the-first-non-null--undefined-argument)
  - [65. Write a JavaScript program to add special characters to text to print in color on the console (combined with console.log()).](#65-write-a-javascript-program-to-add-special-characters-to-text-to-print-in-color-on-the-console-combined-with-consolelog)
  - [66. Write a JavaScript program to perform right-to-left function composition.](#66-write-a-javascript-program-to-perform-right-to-left-function-composition)
  - [67. Write a JavaScript program to perform left-to-right function composition.](#67-write-a-javascript-program-to-perform-left-to-right-function-composition)
  - [68. Write a JavaScript program that accepts a converging function and a list of branching functions. It returns a function that applies each branching function to the arguments. The results of the branching functions are passed as arguments to the converging function.](#68-write-a-javascript-program-that-accepts-a-converging-function-and-a-list-of-branching-functions-it-returns-a-function-that-applies-each-branching-function-to-the-arguments-the-results-of-the-branching-functions-are-passed-as-arguments-to-the-converging-function)
  - [69. Write a JavaScript program to group array elements based on the given function. It return the count of elements in each group.](#69-write-a-javascript-program-to-group-array-elements-based-on-the-given-function-it-return-the-count-of-elements-in-each-group)
  - [70. Write a JavaScript program to count a value in an array.](#70-write-a-javascript-program-to-count-a-value-in-an-array)
  - [71. Write a JavaScript program to create a deep clone of an object.](#71-write-a-javascript-program-to-create-a-deep-clone-of-an-object)
  - [72. Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.](#72-write-a-javascript-program-to-detect-whether-the-website-is-opened-on-a-mobile-device-or-a-desktoplaptop)
  - [73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.](#73-write-a-javascript-program-to-return-the-difference-between-two-arrays-after-applying-the-provided-function-to-each-array-element-of-both)
  - [74. Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.](#74-write-a-javascript-program-to-filter-out-all-values-from-an-array-for-which-the-comparator-function-does-not-return-true)
  - [75. Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -\> loser).](#75-write-a-javascript-program-to-compute-the-updated-ratings-between-two-or-more-opponents-using-the-elo-rating-system-it-takes-an-array-of-pre-ratings-and-returns-an-array-containing-post-ratings-the-array-should-be-ordered-from-top-to-bottom-winner---loser)
  - [76. Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.](#76-write-a-javascript-program-to-execute-a-provided-function-once-for-each-array-element-starting-with-the-arrays-last-element)
  - [77. Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.](#77-write-a-javascript-program-to-iterate-over-all-the-properties-of-an-object-running-a-callback-for-each-one)
  - [78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.](#78-write-a-javascript-program-to-invert-the-key-value-pairs-of-an-object-without-mutating-it-the-corresponding-inverted-value-of-each-inverted-key-is-an-array-of-keys-responsible-for-generating-the-inverted-value-if-a-function-is-supplied-it-is-applied-to-each-inverted-key)
  - [79. Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.](#79-write-a-javascript-program-to-take-any-number-of-iterable-objects-or-objects-with-a-length-property-and-return-the-longest-one)
  - [80. Write a JavaScript program to implement the Luhn Algorithm used to validate identification numbers. For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.](#80-write-a-javascript-program-to-implement-the-luhn-algorithm-used-to-validate-identification-numbers-for-example-credit-card-numbers-imei-numbers-national-provider-identifier-numbers-etc)
  - [81. Write a JavaScript program to create an object with keys generated by running the provided function for each key. The object will have the same values as the provided object.](#81-write-a-javascript-program-to-create-an-object-with-keys-generated-by-running-the-provided-function-for-each-key-the-object-will-have-the-same-values-as-the-provided-object)
  - [82. Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.](#82-write-a-javascript-program-to-map-array-values-to-an-object-using-a-function-the-key-value-pairs-consist-of-the-original-value-as-the-key-and-the-mapped-value)
  - [83. Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.](#83-write-a-javascript-program-to-create-an-updated-string-with-the-results-of-calling-a-provided-function-on-every-character-in-the-called-string)
  - [84. Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.](#84-write-a-javascript-program-to-create-an-object-with-the-same-keys-as-the-provided-object-it-will-also-generate-values-generated-by-running-the-provided-function-for-each-value)
  - [85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.](#85-write-a-javascript-program-to-replace-all-but-the-last-number-of-characters-with-the-specified-mask-character)
  - [86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.](#86-write-a-javascript-program-to-get-the-maximum-value-of-an-array-after-mapping-each-element-to-a-value-using-the-provided-function)
  - [87. Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).](#87-write-a-javascript-program-to-get-the-n-maximum-elements-from-the-provided-array-if-n-is-greater-than-or-equal-to-the-provided-arrays-length-return-the-original-array-sorted-in-descending-order)
  - [88. Write a JavaScript program to get the median of an array of numbers.](#88-write-a-javascript-program-to-get-the-median-of-an-array-of-numbers)
  - [89. Write a JavaScript program to negates a predicate function.](#89-write-a-javascript-program-to-negates-a-predicate-function)
  - [90. Write a JavaScript program to nest a given flat array of objects linked to one another recursively.](#90-write-a-javascript-program-to-nest-a-given-flat-array-of-objects-linked-to-one-another-recursively)
  - [91. Write a JavaScript program that returns true if the provided predicate function returns false for all elements in a collection, false otherwise.](#91-write-a-javascript-program-that-returns-true-if-the-provided-predicate-function-returns-false-for-all-elements-in-a-collection-false-otherwise)
  - [92. Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.](#92-write-a-javascript-program-to-create-a-function-that-gets-the-argument-at-index-n-if-n-is-negative-the-nth-argument-from-the-end-is-returned)
  - [93. Write a JavaScript program to remove an event listener from an element.](#93-write-a-javascript-program-to-remove-an-event-listener-from-an-element)
  - [94. Write a JavaScript program to move the specified amount of elements to the end of the array.](#94-write-a-javascript-program-to-move-the-specified-amount-of-elements-to-the-end-of-the-array)
  - [95. Write a JavaScript program to add an event listener to an element with the ability to use event delegation.](#95-write-a-javascript-program-to-add-an-event-listener-to-an-element-with-the-ability-to-use-event-delegation)
  - [96. Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object.](#96-write-a-javascript-program-to-pick-the-key-value-pairs-corresponding-to-the-given-keys-from-an-object)
  - [97. Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).](#97-write-a-javascript-program-to-create-an-object-composed-of-the-properties-the-given-function-returns-truthy-for-the-function-is-invoked-with-two-arguments-value-key)
  - [98. Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.](#98-write-a-javascript-program-to-filter-an-array-of-objects-based-on-a-condition-while-also-filtering-out-unspecified-keys)
  - [99. Write a JavaScript program to hash a given input string into a whole number.](#99-write-a-javascript-program-to-hash-a-given-input-string-into-a-whole-number)
  - [100. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.](#100-write-a-javascript-program-to-create-an-array-of-elements-grouped-based-on-the-position-in-the-original-arrays-use-function-as-the-last-value-to-specify-how-grouped-values-should-be-combined)
  - [101. Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.](#101-write-a-javascript-program-to-return-the-object-associating-the-properties-to-the-values-of-a-given-array-of-valid-property-identifiers-and-an-array-of-values)
  - [102. Write a JavaScript program to create an array of elements, grouped based on the position in the original array.](#102-write-a-javascript-program-to-create-an-array-of-elements-grouped-based-on-the-position-in-the-original-array)
  - [103. Write a JavaScript program to convert a given string into an array of words.](#103-write-a-javascript-program-to-convert-a-given-string-into-an-array-of-words)
  - [104. Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.](#104-write-a-javascript-program-to-test-a-value-x-against-a-predicate-function-if-true-return-fnx-else-return-x)
  - [105. Write a JavaScript program that returns true if the given value is a number, false otherwise.](#105-write-a-javascript-program-that-returns-true-if-the-given-value-is-a-number-false-otherwise)
  - [106. Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.](#106-write-a-javascript-program-to-create-an-array-of-elements-ungrouping-the-elements-in-an-array-produced-by-zip-and-applying-the-provided-function)
  - [107. Write a JavaScript program to get all distinct values (from the right side of the array) of an array, based on a provided comparator function.](#107-write-a-javascript-program-to-get-all-distinct-values-from-the-right-side-of-the-array-of-an-array-based-on-a-provided-comparator-function)
  - [108. Write a JavaScript program to get all unique values of an array, based on a provided comparator function.](#108-write-a-javascript-program-to-get-all-unique-values-of-an-array-based-on-a-provided-comparator-function)
  - [109. Write a JavaScript program to get the nth element of a given array.](#109-write-a-javascript-program-to-get-the-nth-element-of-a-given-array)
  - [110. Write a JavaScript program to get every element in any of the two arrays at once.](#110-write-a-javascript-program-to-get-every-element-in-any-of-the-two-arrays-at-once)
  - [111. Write a JavaScript program to build an array, using an iterator function and an initial seed value.](#111-write-a-javascript-program-to-build-an-array-using-an-iterator-function-and-an-initial-seed-value)
  - [112. Write a JavaScript program to unflatten an object with the paths for keys.](#112-write-a-javascript-program-to-unflatten-an-object-with-the-paths-for-keys)
  - [113. Write a JavaScript program to unescape escaped HTML characters.](#113-write-a-javascript-program-to-unescape-escaped-html-characters)
  - [114. Write a JavaScript program to uncurry a function up to depth n.](#114-write-a-javascript-program-to-uncurry-a-function-up-to-depth-n)
  - [115. Ignoring additional arguments](#115-ignoring-additional-arguments)
  - [116. Check if predicate is truthy for all elements](#116-check-if-predicate-is-truthy-for-all-elements)
  - [117. Truncate a string up to a specified length](#117-truncate-a-string-up-to-a-specified-length)
  - [118. Apply a function against an accumulator and each key in the object](#118-apply-a-function-against-an-accumulator-and-each-key-in-the-object)
  - [119. Create tomorrow's date in a string representation](#119-create-tomorrows-date-in-a-string-representation)
  - [120. Convert a string to snake case](#120-convert-a-string-to-snake-case)
  - [121. Convert a value to a safe integer](#121-convert-a-value-to-a-safe-integer)
  - [122. Add an ordinal suffix to a number](#122-add-an-ordinal-suffix-to-a-number)
  - [123. Convert a string to kebab case](#123-convert-a-string-to-kebab-case)
  - [124. Reduce a given Array-like into a value hash](#124-reduce-a-given-array-like-into-a-value-hash)
  - [125. Convert float-point arithmetic to decimal form](#125-convert-float-point-arithmetic-to-decimal-form)
  - [126. Create a specified currency format from a given number](#126-create-a-specified-currency-format-from-a-given-number)
  - [127. Iterate over a callback n times](#127-iterate-over-a-callback-n-times)
  - [128. Get removed elements of a given array until the passed function returns true](#128-get-removed-elements-of-a-given-array-until-the-passed-function-returns-true)
  - [129. Get removed elements from the end until the passed function returns true](#129-get-removed-elements-from-the-end-until-the-passed-function-returns-true)
  - [130. Remove n elements from the end of a given array](#130-remove-n-elements-from-the-end-of-a-given-array)
  - [131. Get an array with n elements removed from the beginning from a given array](#131-get-an-array-with-n-elements-removed-from-the-beginning-from-a-given-array)
  - [132. Get the symmetric difference between two given arrays using a comparator](#132-get-the-symmetric-difference-between-two-given-arrays-using-a-comparator)
  - [133. Get symmetric difference between two arrays after applying the provided function to each element](#133-get-symmetric-difference-between-two-arrays-after-applying-the-provided-function-to-each-element)
  - [134. Get symmetric difference between two arrays](#134-get-symmetric-difference-between-two-arrays)
  - [135. Get the sum of the powers of all numbers from start to end (inclusive)](#135-get-the-sum-of-the-powers-of-all-numbers-from-start-to-end-inclusive)
  - [136. Generate all permutations of a string (contains duplicates)](#136-generate-all-permutations-of-a-string-contains-duplicates)
  - [137. Perform stable sorting of an array, preserving initial indexes](#137-perform-stable-sorting-of-an-array-preserving-initial-indexes)
  - [138. Take a variadic function and return a closure that maps arguments to inputs](#138-take-a-variadic-function-and-return-a-closure-that-maps-arguments-to-inputs)
  - [139. Split a multiline string into an array of lines](#139-split-a-multiline-string-into-an-array-of-lines)
  - [140. Get the highest index for maintaining sort order using an iterator function](#140-get-the-highest-index-for-maintaining-sort-order-using-an-iterator-function)
  - [141. Get the highest index for maintaining sort order](#141-get-the-highest-index-for-maintaining-sort-order)
  - [142. Get the lowest index for maintaining sorting order](#142-get-the-lowest-index-for-maintaining-sorting-order)
  - [143. Sort characters of a string alphabetically](#143-sort-characters-of-a-string-alphabetically)
  - [144. Get an array of elements that appear in both arrays](#144-get-an-array-of-elements-that-appear-in-both-arrays)
  - [145. Randomize the order of array values](#145-randomize-the-order-of-array-values)
  - [146. Create a shallow clone of an object](#146-create-a-shallow-clone-of-an-object)
  - [147. Serialize a cookie name-value pair into a Set-Cookie header string](#147-serialize-a-cookie-name-value-pair-into-a-set-cookie-header-string)
  - [148. Hash the input string into a whole number](#148-hash-the-input-string-into-a-whole-number)
  - [149. Get a random element from an array](#149-get-a-random-element-from-an-array)
  - [150. Run a given array of promises in series](#150-run-a-given-array-of-promises-in-series)
  - [151. Run a function in a separate thread using a Web Worker](#151-run-a-function-in-a-separate-thread-using-a-web-worker)
  - [152. Round a number to a specified amount of digits](#152-round-a-number-to-a-specified-amount-of-digits)
  - [153. Reverse the order of characters in a string](#153-reverse-the-order-of-characters-in-a-string)
  - [154. Create an object of properties where the given function returns false](#154-create-an-object-of-properties-where-the-given-function-returns-false)
  - [155. Filter an array using a predicate, keeping elements where pred(x) returns false](#155-filter-an-array-using-a-predicate-keeping-elements-where-predx-returns-false)
  - [156. Apply a function against an accumulator and each element in the array (from left to right)](#156-apply-a-function-against-an-accumulator-and-each-element-in-the-array-from-left-to-right)
  - [157. Redirect to a specified URL](#157-redirect-to-a-specified-url)
  - [158. Create a function that invokes the provided function with its arguments arranged according to the specified indexes](#158-create-a-function-that-invokes-the-provided-function-with-its-arguments-arranged-according-to-the-specified-indexes)
  - [159. Get an array of lines from the specified file](#159-get-an-array-of-lines-from-the-specified-file)
  - [160. Mutate the original array to filter out values specified, based on a given iterator function](#160-mutate-the-original-array-to-filter-out-values-specified-based-on-a-given-iterator-function)
  - [161. Mutate the original array to filter out values specified. Returns the removed elements.](#161-mutate-the-original-array-to-filter-out-values-specified-returns-the-removed-elements)
  - [162. Convert an asynchronous function to return a promise](#162-convert-an-asynchronous-function-to-return-a-promise)
  - [163. Convert a number in bytes to a human-readable string](#163-convert-a-number-in-bytes-to-a-human-readable-string)
  - [164. Return the singular or plural form of a word based on the input number](#164-return-the-singular-or-plural-form-of-a-word-based-on-the-input-number)
  - [165. Perform left-to-right function composition](#165-perform-left-to-right-function-composition)
  - [166. Perform left-to-right function composition for asynchronous functions](#166-perform-left-to-right-function-composition-for-asynchronous-functions)
  - [167. Calculate how many numbers in the given array are less than or equal to the given value using the percentile formula](#167-calculate-how-many-numbers-in-the-given-array-are-less-than-or-equal-to-the-given-value-using-the-percentile-formula)
  - [168. Group elements into two arrays, depending on the provided function's truthiness for each element](#168-group-elements-into-two-arrays-depending-on-the-provided-functions-truthiness-for-each-element)
  - [169. Function to invoke fn with partials appended to the arguments it receives.](#169-function-to-invoke-fn-with-partials-appended-to-the-arguments-it-receives)
  - [170. Function to invoke fn with partials prepended to the arguments it receives.](#170-function-to-invoke-fn-with-partials-prepended-to-the-arguments-it-receives)
  - [171. Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.](#171-parse-an-http-cookie-header-string-and-return-an-object-of-all-cookie-name-value-pairs)
  - [172. Function to invoke the provided function with its arguments transformed.](#172-function-to-invoke-the-provided-function-with-its-arguments-transformed)
  - [173. Function to get the nth element of a given array of elements.](#173-function-to-get-the-nth-element-of-a-given-array-of-elements)
  - [174. Function to convert a NodeList into an array.](#174-function-to-convert-a-nodelist-into-an-array)
  - [175. Function to get the index of the function in an array of functions which executed the fastest.](#175-function-to-get-the-index-of-the-function-in-an-array-of-functions-which-executed-the-fastest)
  - [176. Function to get the n minimum elements from the provided array.](#176-function-to-get-the-n-minimum-elements-from-the-provided-array)
  - [177. Function to get the minimum value of an array, after mapping each element to a value using the provided function.](#177-function-to-get-the-minimum-value-of-an-array-after-mapping-each-element-to-a-value-using-the-provided-function)
  - [178. Function to create a new object from the combination of two or more objects.](#178-function-to-create-a-new-object-from-the-combination-of-two-or-more-objects)
  - [179. Function to compare two objects to determine if the first contains equivalent property values to the second one.](#179-function-to-compare-two-objects-to-determine-if-the-first-contains-equivalent-property-values-to-the-second-one)
  - [180. Function to create an object from the specified object, where all keys are in lowercase.](#180-function-to-create-an-object-from-the-specified-object-where-all-keys-are-in-lowercase)
  - [181. Function to get the last element from a given array.](#181-function-to-get-the-last-element-from-a-given-array)
  - [182. Function to join all elements of an array into a string and return this string. Use a separator and an end separator.](#182-function-to-join-all-elements-of-an-array-into-a-string-and-return-this-string-use-a-separator-and-an-end-separator)
  - [183. Function to check if the provided argument is valid JSON.](#183-function-to-check-if-the-provided-argument-is-valid-json)
  - [184. Function to check if a given string is upper case or not.](#184-function-to-check-if-a-given-string-is-upper-case-or-not)
  - [185. Function that returns true if the specified value is undefined, false otherwise.](#185-function-that-returns-true-if-the-specified-value-is-undefined-false-otherwise)
  - [186. Function to check if the given argument is a symbol.](#186-function-to-check-if-the-given-argument-is-a-symbol)
  - [187. Function to check if the given argument is a string.](#187-function-to-check-if-the-given-argument-is-a-string)
  - [188. Function that returns 1 if the array is sorted in ascending order, -1 if it is sorted in descending order, or 0 if it is not sorted.](#188-function-that-returns-1-if-the-array-is-sorted-in-ascending-order--1-if-it-is-sorted-in-descending-order-or-0-if-it-is-not-sorted)
  - [189. Function to return true if an object looks like a Promise, false otherwise.](#189-function-to-return-true-if-an-object-looks-like-a-promise-false-otherwise)
  - [190. Function to return a boolean determining if the passed value is primitive or not.](#190-function-to-return-a-boolean-determining-if-the-passed-value-is-primitive-or-not)
  - [191. Function to check if the provided integer is a prime number or is not.](#191-function-to-check-if-the-provided-integer-is-a-prime-number-or-is-not)
  - [192. Function to check if the provided value is an object created by the Object constructor.](#192-function-to-check-if-the-provided-value-is-an-object-created-by-the-object-constructor)
  - [193. Function to check if a value is object-like.](#193-function-to-check-if-a-value-is-object-like)
  - [194. Function to get a boolean determining if the passed value is an object or not.](#194-function-to-get-a-boolean-determining-if-the-passed-value-is-an-object-or-not)
  - [195. Function to check if a given argument is a number.](#195-function-to-check-if-a-given-argument-is-a-number)
  - [196. Function that will return true if the specified value is null, false otherwise.](#196-function-that-will-return-true-if-the-specified-value-is-null-false-otherwise)
  - [197. Function to check if a string is lower case or not.](#197-function-to-check-if-a-string-is-lower-case-or-not)
  - [198. Function to check if the given argument is a function.](#198-function-to-check-if-the-given-argument-is-a-function)
  - [199. Function to return true if the given number is even, false otherwise.](#199-function-to-return-true-if-the-given-number-is-even-false-otherwise)
  - [200. Function to return true if a value is an empty object, collection, map, or set.](#200-function-to-return-true-if-a-value-is-an-empty-object-collection-map-or-set)
  - [201. Function to check if the first numerical argument is divisible by the second one.](#201-function-to-check-if-the-first-numerical-argument-is-divisible-by-the-second-one)
  - [202. Function to check if a given number is even or not.](#202-function-to-check-if-a-given-number-is-even-or-not)
  - [203. Function to determine if the current runtime environment is a browser.](#203-function-to-determine-if-the-current-runtime-environment-is-a-browser)
  - [204. Function that checks if the given argument is a native Boolean element.](#204-function-that-checks-if-the-given-argument-is-a-native-boolean-element)
  - [205. Function to check if the provided argument is an array (i.e., iterable).](#205-function-to-check-if-the-provided-argument-is-an-array-ie-iterable)
  - [206. Function to check if a given string is an anagram of another string (case-insensitive, ignores spaces, punctuation, and special characters).](#206-function-to-check-if-a-given-string-is-an-anagram-of-another-string-case-insensitive-ignores-spaces-punctuation-and-special-characters)
  - [207. Function that returns true if the given string is an absolute URL, false otherwise.](#207-function-that-returns-true-if-the-given-string-is-an-absolute-url-false-otherwise)
  - [208. Function to check if the provided value is of the specified type.](#208-function-to-check-if-the-provided-value-is-of-the-specified-type)
  - [209. Get a list of elements in both arrays using a comparator function.](#209-get-a-list-of-elements-in-both-arrays-using-a-comparator-function)
  - [210. Get a list of elements in both arrays after applying a function to each element.](#210-get-a-list-of-elements-in-both-arrays-after-applying-a-function-to-each-element)
  - [211. Get a list of elements that exist in both arrays.](#211-get-a-list-of-elements-that-exist-in-both-arrays)
  - [212. Create an n-dimensional array with a given value.](#212-create-an-n-dimensional-array-with-a-given-value)
  - [213. Initialize and fill an array with specified values.](#213-initialize-and-fill-an-array-with-specified-values)
  - [214. Initialize an array containing numbers in the specified range (in reverse).](#214-initialize-an-array-containing-numbers-in-the-specified-range-in-reverse)
  - [215. Get all elements of an array except the last one.](#215-get-all-elements-of-an-array-except-the-last-one)
  - [216. Get all indices of a specified value in an array.](#216-get-all-indices-of-a-specified-value-in-an-array)
  - [217. Check if a number falls within a given range.](#217-check-if-a-number-falls-within-a-given-range)
  - [218. Get the number of times a function executed per second.](#218-get-the-number-of-times-a-function-executed-per-second)
  - [219. Calculate the Hamming distance between two values.](#219-calculate-the-hamming-distance-between-two-values)
  - [220. Get the native type of a value.](#220-get-the-native-type-of-a-value)
  - [221. Get a string like HH:MM:SS from a Date object.](#221-get-a-string-like-hhmmss-from-a-date-object)
  - [222. Initialize an array containing numbers in the specified range with a given step (error if step equals 1).](#222-initialize-an-array-containing-numbers-in-the-specified-range-with-a-given-step-error-if-step-equals-1)
  - [223. Calculate the greatest common divisor between two or more numbers.](#223-calculate-the-greatest-common-divisor-between-two-or-more-numbers)
  - [224. Remove HTML/XML tags from strings.](#224-remove-htmlxml-tags-from-strings)
  - [225. Get the standard deviation of an array of numbers.](#225-get-the-standard-deviation-of-an-array-of-numbers)
  - [226. Get n random elements with unique keys from an array up to the size of the array.](#226-get-n-random-elements-with-unique-keys-from-an-array-up-to-the-size-of-the-array)
  - [227. Remove elements from an array for which the given function returns false.](#227-remove-elements-from-an-array-for-which-the-given-function-returns-false)
  - [228. Log the name of a function.](#228-log-the-name-of-a-function)
  - [229. Convert a string from camelcase.](#229-convert-a-string-from-camelcase)
  - [230. Generate the human-readable format from the given number of milliseconds.](#230-generate-the-human-readable-format-from-the-given-number-of-milliseconds)
  - [231. Iterate over all properties of an object in reverse, running a callback for each one.](#231-iterate-over-all-properties-of-an-object-in-reverse-running-a-callback-for-each-one)
  - [232. Take a function as an argument, then make the first argument the last.](#232-take-a-function-as-an-argument-then-make-the-first-argument-the-last)
  - [233. Flatten an object with paths for keys.](#233-flatten-an-object-with-paths-for-keys)
  - [234. Flatten a given array to the specified depth.](#234-flatten-a-given-array-to-the-specified-depth)
  - [235. Get the last key that satisfies the provided testing function.](#235-get-the-last-key-that-satisfies-the-provided-testing-function)
  - [236. Get the first key that satisfies the provided testing function.](#236-get-the-first-key-that-satisfies-the-provided-testing-function)
  - [237. Generate an array containing the Fibonacci sequence, up to the nth term.](#237-generate-an-array-containing-the-fibonacci-sequence-up-to-the-nth-term)
  - [238. Calculate the factorial of a number.](#238-calculate-the-factorial-of-a-number)
  - [239. Escape a string to use in a regular expression.](#239-escape-a-string-to-use-in-a-regular-expression)
  - [240. Check if the parent element contains the child element.](#240-check-if-the-parent-element-contains-the-child-element)
  - [241. Remove elements from an array until the passed function returns true. Returns the remaining elements.](#241-remove-elements-from-an-array-until-the-passed-function-returns-true-returns-the-remaining-elements)
  - [242. Remove elements from the end of an array until the passed function returns true. Returns the remaining elements.](#242-remove-elements-from-the-end-of-an-array-until-the-passed-function-returns-true-returns-the-remaining-elements)
  - [243. Get the distance between two given points.](#243-get-the-distance-between-two-given-points)
  - [244. Get the difference between two given arrays.](#244-get-the-difference-between-two-given-arrays)
  - [245. Invoke the provided function after a few milliseconds.](#245-invoke-the-provided-function-after-a-few-milliseconds)
  - [246. Convert angles from degrees to radians.](#246-convert-angles-from-degrees-to-radians)
  - [247. Assign default values to all undefined properties in an object.](#247-assign-default-values-to-all-undefined-properties-in-an-object)
  - [248. Deep flatten an array.](#248-deep-flatten-an-array)
  - [249. Get the current URL.](#249-get-the-current-url)
  - [250. Create an element from a string (without appending it to the document).](#250-create-an-element-from-a-string-without-appending-it-to-the-document)
  - [251. Write a JavaScript program to write a JSON object to a file.](#251-write-a-javascript-program-to-write-a-json-object-to-a-file)
  - [252. Write a JavaScript program to convert the values of RGB components to a color code.](#252-write-a-javascript-program-to-convert-the-values-of-rgb-components-to-a-color-code)
  - [253. Write a JavaScript program to generate a UUID in a browser.](#253-write-a-javascript-program-to-generate-a-uuid-in-a-browser)
  - [254. Write a JavaScript program to generate a UUID in Node.JS using crypto API.](#254-write-a-javascript-program-to-generate-a-uuid-in-nodejs-using-crypto-api)
  - [255. Write a JavaScript program that returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.](#255-write-a-javascript-program-that-returns-true-if-the-provided-predicate-function-returns-true-for-at-least-one-element-in-a-collection-false-otherwise)
  - [256. Write a JavaScript program to check if two given numbers are approximately equal to each other.](#256-write-a-javascript-program-to-check-if-two-given-numbers-are-approximately-equal-to-each-other)
  - [257. Write a JavaScript program to convert a 2D array to a comma-separated value (CSV) string.](#257-write-a-javascript-program-to-convert-a-2d-array-to-a-comma-separated-value-csv-string)
  - [258. Write a JavaScript program to create a function that accepts up to n arguments, ignoring any additional arguments.](#258-write-a-javascript-program-to-create-a-function-that-accepts-up-to-n-arguments-ignoring-any-additional-arguments)
  - [259. Write a JavaScript program to decode a string of data encoded using base-64 encoding.](#259-write-a-javascript-program-to-decode-a-string-of-data-encoded-using-base-64-encoding)
  - [260. Write a JavaScript program to evaluate the binomial coefficients of two integers n and k.](#260-write-a-javascript-program-to-evaluate-the-binomial-coefficients-of-two-integers-n-and-k)
  - [261. Write a JavaScript program that returns true if the page bottom is visible, false otherwise.](#261-write-a-javascript-program-that-returns-true-if-the-page-bottom-is-visible-false-otherwise)
  - [262. Write a JavaScript program to create a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.](#262-write-a-javascript-program-to-create-a-base-64-encoded-ascii-string-from-a-string-object-in-which-each-character-in-the-string-is-treated-as-a-byte-of-binary-data)
  - [263. Write a JavaScript program to capitalize the first letter of a string.](#263-write-a-javascript-program-to-capitalize-the-first-letter-of-a-string)
  - [264. Write a JavaScript program to capitalize the first letter of every word in a string.](#264-write-a-javascript-program-to-capitalize-the-first-letter-of-every-word-in-a-string)
  - [265. Write a JavaScript program to chunk an array into smaller arrays of a specified size.](#265-write-a-javascript-program-to-chunk-an-array-into-smaller-arrays-of-a-specified-size)
  - [266. Write a JavaScript program to clamp a number within the inclusive range specified by the given boundary values a and b.](#266-write-a-javascript-program-to-clamp-a-number-within-the-inclusive-range-specified-by-the-given-boundary-values-a-and-b)
  - [267. Write a JavaScript program to calculate the midpoint between two pairs of points.](#267-write-a-javascript-program-to-calculate-the-midpoint-between-two-pairs-of-points)
  - [268. Write a JavaScript program to find the index of an array item in a for loop.](#268-write-a-javascript-program-to-find-the-index-of-an-array-item-in-a-for-loop)

## 1.Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

```javascript
const checkEq = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3 };

const result = checkEq(objA, objB);

if (result) {
  console.log("Objects are equivalent.");
} else {
  console.log("Objects are not equivalent.");
}
```

## 2. Write a JavaScript program to copy a string to the clipboard.

```javascript
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text has been copied to the clipboard:", text);
    })
    .catch((err) => {
      console.error("Unable to copy text to clipboard:", err);
    });
}

const textToCopy = "Hello world fromm clipboard!";

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  copyToClipboard(textToCopy);
});
```

## 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

```javascript
function csvTo2DArray(csvString) {
  const rows = csvString.split("\n");
  const result = [];

  for (const row of rows) {
    const columns = row.split(",");
    const trimmedColumns = columns.map((column) => column.trim());
    result.push(trimmedColumns);
  }

  return result;
}

const csvString = "Apple,Banana,BlackBerry,Watermelon";
const csvArray = csvTo2DArray(csvString);

console.log(csvArray);
```

## 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

```javascript
function csvTo2DArrayOfObjects(csvString) {
  const rows = csvString.split("\n");
  const titles = rows[0].split(",");
  const result = [];

  for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(",");
    const obj = {};
    for (let j = 0; j < titles.length; j++) {
      obj[titles[j].trim()] = columns[j].trim();
    }
    result.push(obj);
  }

  return result;
}

const csvString2 =
  "ID,First Name,Last Name\n1,John,Doe\n2,Jane,Smith\n3,Bob,Johnson";
const csvArrayOfObjects = csvTo2DArrayOfObjects(csvString2);

console.log(csvArrayOfObjects);
```

## 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.

```javascript
function objectsToCSV(objects, columns) {
  const filteredObjects = objects.map((obj) =>
    columns.reduce((acc, column) => {
      if (obj.hasOwnProperty(column)) {
        acc[column] = obj[column];
      }
      return acc;
    }, {})
  );

  const csvString = [
    columns.join(","),
    ...filteredObjects.map((obj) =>
      columns.map((column) => obj[column]).join(",")
    ),
  ].join("\n");

  return csvString;
}

const data = [
  { ID: "1", Name: "John", Age: "25" },
  { ID: "2", Name: "Jane", Age: "30" },
  { ID: "3", Name: "Bob", Age: "22" },
];

const selectedColumns = ["ID", "Name"];

const csvResult = objectsToCSV(data, selectedColumns);

console.log(csvResult);
```

## 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.

```javascript
function getValueByKey(obj, targetKey) {
  let result = null;

  const searchObject = (currentObj) => {
    for (const key in currentObj) {
      if (key === targetKey) {
        result = currentObj[key];
        break;
      } else if (typeof currentObj[key] === "object") {
        searchObject(currentObj[key]);
      }
    }
  };

  searchObject(obj);
  return result;
}

const nestedObject = {
  id: 1,
  name: "John",
  details: {
    age: 25,
    address: {
      city: "New York",
      phone: "10001",
    },
  },
};

const targetKey = "phone";
const targetValue = getValueByKey(nestedObject, targetKey);

console.log(`The value for key '${targetKey}' is:`, targetValue);
```

## 7. Write a JavaScript program to convert a specified number into an array of digits.

```javascript
function numberToArray(number) {
  return [...String(number)].map((digit) => parseInt(digit));
}

const exampleNumber = 12345;
const digitArray = numberToArray(exampleNumber);

console.log(`Number: ${exampleNumber}`);
console.log(`Array of Digits:`, digitArray);
```

## 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

```javascript
function filterOutValues(originalArray, valuesToFilter) {
  return originalArray.filter((item) => !valuesToFilter.includes(item));
}

const arrayToFilter = [1, 2, 3, 4, 5];
const valuesToFilterOut = [2, 4];

const filteredArray = filterOutValues(arrayToFilter, valuesToFilterOut);

console.log("Original Array:", arrayToFilter);
console.log("Values to Filter Out:", valuesToFilterOut);
console.log("Filtered Array:", filteredArray);
```

## 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

```javascript
function getAllCombinations(arr) {
  const result = [];
  function generateCombinations(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = current.concat(remaining[i]);
      const remainingCopy = remaining
        .slice(0, i)
        .concat(remaining.slice(i + 1));
      generateCombinations(next, remainingCopy);
    }
  }
  generateCombinations([], arr);
  return result;
}
// Example usage
// const inputArray = [1, 2, 3];
// const combinations = getAllCombinations(inputArray);

// console.log("Original Array:", inputArray);
// console.log("All Combinations:", combinations);
```

## 10. Write a JavaScript program to extract values at specified indexes from a specified array.

```javascript
function extractValues(arr, indexes) {
  return indexes.map((index) => arr[index]);
}

const arrayToExtractFrom = ["a", "b", "c", "d", "e"];
const specifiedIndexes = [1, 3, 4];
const extractedValues = extractValues(arrayToExtractFrom, specifiedIndexes);
console.log(extractedValues);
```

## 11. Write a JavaScript program to generate a random hexadecimal color code.

```javascript
function generateRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomColor = generateRandomHexColor();
console.log(randomColor);
```

## 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.

```javascript
function removeNonPrintableChars(str) {
  return str.replace(/[^ -~]+/g, "");
}

const stringWithNonPrintableChars = "Hello\u001B[31m World!";
const cleanedString = removeNonPrintableChars(stringWithNonPrintableChars);
console.log(cleanedString);
```

## 13. Write a JavaScript program to convert a given string's length to bytes.

```javascript
function stringLengthToBytes(str) {
  return new Blob([str]).size;
}

const inputString = "Hello, World!";
const bytes = stringLengthToBytes(inputString);
console.log(bytes + " bytes");
```

## 14. Write a JavaScript program to replace multiple object keys' names with the values provided.

```javascript
function replaceKeysWithValues(obj, keyReplacements) {
  const newObj = {};
  for (const key in obj) {
    newObj[keyReplacements[key] || key] = obj[key];
  }
  return newObj;
}

const originalObject = { a: 1, b: 2, c: 3 };
const keyReplacements = { a: "x", b: "y" };
const modifiedObject = replaceKeysWithValues(originalObject, keyReplacements);
console.log(modifiedObject);
```

## 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.

```javascript
function minMaxWithComparator(arr, comparator) {
return [Math.min(...arr.map(comparator)), Math.max(...arr.map(comparator))];
}

const numbers = [1, 2, 3, 4, 5];
const comparatorFunction = (num) => num \* num; ## Compare based on square of each number
const result2 = minMaxWithComparator(numbers, comparatorFunction);
console.log(result2);
```

## 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

```javascript
function allElementsSatisfyPredicate(collection, predicate) {
  return collection.every(predicate);
}

const numbers2 = [2, 4, 6, 8, 10];
const isEven = (num) => num % 2 === 0;
const result3 = allElementsSatisfyPredicate(numbers2, isEven);
console.log(result3);
```

## 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

```javascript
function splitArraysByFilter(arr1, arr2, filter) {
  const group1 = [];
  const group2 = [];
  arr1.forEach((val, index) => (filter[index] ? group1 : group2).push(val));
  arr2.forEach((val, index) => (filter[index] ? group1 : group2).push(val));
  return [group1, group2];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c", "d", "e"];
const filterArray = [true, false, true, false, true];
const resultGroups = splitArraysByFilter(array1, array2, filterArray);
console.log(resultGroups);
```

## 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.

```javascript
function removeElementsFromLeft(arr, count) {
  return arr.slice(count);
}

const originalArray = [1, 2, 3, 4, 5];
const removedLeft = removeElementsFromLeft(originalArray, 2);
console.log(removedLeft);
```

## 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.

```javascript
function removeElementsFromRight(arr, count) {
  return arr.slice(0, -count);
}

const originalArray2 = [1, 2, 3, 4, 5];
const removedRight = removeElementsFromRight(originalArray2, 2);
console.log(removedRight);
```

## 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

```javascript
function extendColorCode(color) {
  if (color.length === 4) {
    return color
      .split("")
      .map((char, index) => (index === 0 ? char : char.repeat(2)))
      .join("");
  }
  return color;
}

const shortColorCode = "#0F8";
const extendedColorCode = extendColorCode(shortColorCode);
console.log(extendedColorCode);
```

## 21. Write a JavaScript program to get every nth element in a given array.

```javascript
function everyNthElement(arr, n) {
return arr.filter((\_, index) => index % n === 0);
}

const originalArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArray = everyNthElement(originalArray3, 3);
console.log(resultArray);
```

## 22. Write a JavaScript program to filter out non-unique values in an array.

```javascript
function filterNonUnique(arr) {
  return arr.filter(
    (value, index, array) => array.indexOf(value) === array.lastIndexOf(value)
  );
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = filterNonUnique(arrayWithDuplicates);
console.log(uniqueArray);
```

## 23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.

```javascript
function filterNonUnique(arr) {
  return arr.filter(
    (value, index, array) => array.indexOf(value) === array.lastIndexOf(value)
  );
}

const arrayWithDuplicates2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray2 = filterNonUnique(arrayWithDuplicates2);
console.log(uniqueArray2);
```

## 24. Write a JavaScript program to dcapitalize the first letter of a string.

```javascript
function decapitalizeString(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const originalString = "HelloWorld";
const decapitalizedString = decapitalizeString(originalString);
console.log(decapitalizedString);
```

## 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

```javascript
function createPairsFromArray(arr1, arr2) {
  return arr1.reduce(
    (pairs, value1) => pairs.concat(arr2.map((value2) => [value1, value2])),
    []
  );
}

const array1_2 = ["a", "b"];
const array2_2 = [1, 2];
const resultPairs = createPairsFromArray(array1_2, array2_2);
console.log(resultPairs);
```

## 26. Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.

```javascript
function isYesOrNo(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr === "y" || lowerStr === "yes";
}

console.log(isYesOrNo("Y"));
console.log(isYesOrNo("No"));
```

## 27. Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.

```javascript
function findElementsWithComparator(arr1, arr2, comparator) {
  return arr1.filter((value) =>
    arr2.some((item) => comparator(item, value) === 0)
  );
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const comparator = (a, b) => a - b;
console.log(findElementsWithComparator(arr1, arr2, comparator));
```

## 28. Write a JavaScript program to measure the time a function to execute.

```javascript
function measureExecutionTime(func) {
  const start = performance.now();
  func();
  const end = performance.now();
  return end - start;
}

const timeTaken = measureExecutionTime(() => {
  findElementsWithComparator(arr1, arr2, comparator);
});
console.log(`Time taken: ${timeTaken} milliseconds`);
```

## 29. Write a JavaScript program to convert a value to a safe integer.

```javascript
function toSafeInteger(value) {
  const safeValue = Number(value);
  if (Number.isSafeInteger(safeValue)) {
    return safeValue;
  }
  return 0;
}

console.log(toSafeInteger("123"));
console.log(toSafeInteger("abc"));
```

## 30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.

```javascript
function filterByValues(arr, values) {
  return arr.filter((value) => !values.includes(value));
}

const originalArray4 = [1, 2, 3, 4, 5];
const valuesToRemove = [2, 4];
console.log(filterByValues(originalArray4, valuesToRemove));
```

## 31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

```javascript
function getAllExceptFirst(arr) {
  return arr.slice(1);
}

const arrayToProcess = [1, 2, 3, 4, 5];
console.log(getAllExceptFirst(arrayToProcess));
```

## 32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

```javascript
function getSumAfterMapping(arr, mapFunc) {
return arr.map(mapFunc).reduce((sum, value) => sum + value, 0);
}

const numbersToSum = [1, 2, 3, 4, 5];
const mapFunction = (num) => num \* 2;
console.log(getSumAfterMapping(numbersToSum, mapFunction));
```

## 33. Write a JavaScript program to generate a random number in the specified range.

```javascript
function getRandomNumber(min, max) {
return Math.floor(Math.random() \* (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10));
```

## 34. Write a JavaScript program to generate a random integer in the specified range.

```javascript
function getRandomInteger(min, max) {
return Math.floor(Math.random() \* (max - min + 1)) + min;
}

console.log(getRandomInteger(1, 100));
```

## 35. Write a JavaScript program to get an array of given n random integers in the specified range.

```javascript
function getRandomIntegers(n, min, max) {
  return Array.from({ length: n }, () => getRandomInteger(min, max));
}

console.log(getRandomIntegers(5, 1, 50));
```

## 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.

```javascript
function invokeFunctions(...funcs) {
  return funcs.map((func) => func());
}

const func1 = () => "Hello";
const func2 = () => "World";
console.log(invokeFunctions(func1, func2));
```

## 37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

```javascript
function sortObjectsByProperties(objects, properties, orders) {
return [...objects].sort((a, b) => {
for (let i = 0; i < properties.length; i++) {
const prop = properties[i];
const order = orders[i] === "desc" ? -1 : 1;
if (a[prop] < b[prop]) return -1 _ order;
if (a[prop] > b[prop]) return 1 _ order;
}
return 0;
});
}

const dataToSort = [
{ name: "John", age: 30 },
{ name: "Jane", age: 25 },
{ name: "Bob", age: 35 },
];
const sortedData = sortObjectsByProperties(dataToSort, ["age"], ["asc"]);
console.log(sortedData);
```

## 38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

```javascript
function padString(str, length, char = " ") {
  const padLength = Math.max(0, length - str.length);
  const leftPad = char.repeat(Math.ceil(padLength / 2));
  const rightPad = char.repeat(Math.floor(padLength / 2));
  return leftPad + str + rightPad;
}

console.log(padString("Hello", 10, "*"));
```

## 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

```javascript
function removeKeysFromObject(obj, keys) {
const newObj = { ...obj };
keys.forEach((key) => delete newObj[key]);
return newObj;
}

const originalObject2 = { a: 1, b: 2, c: 3, d: 4 };
const keysToRemove = ["a", "c"];
console.log(removeKeysFromObject(originalObject2, keysToRemove)); ## { b: 2, d: 4 }
```

## 40. Write a JavaScript program to create an array of key-value pair arrays from a given object.

```javascript
function objectToArray(obj) {
  return Object.entries(obj);
}

const sampleObject = { name: "John", age: 25, city: "New York" };
console.log(objectToArray(sampleObject));
```

## 41. Write a JavaScript program to create an object from the given key-value pairs.

```javascript
function arrayToObject(array) {
  return Object.fromEntries(array);
}

const keyValueArray = [
  ["name", "John"],
  ["age", 25],
  ["city", "New York"],
];

console.log(arrayToObject(keyValueArray));
```

## 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

```javascript
function createCoalesce(validationFunc) {
  return (...args) => args.find(validationFunc);
}

const customCoalesce = createCoalesce(
  (value) => value !== null && value !== undefined
);

console.log(customCoalesce(null, undefined, "Hello", 42));
```

## 43. Write a JavaScript program to change a function that accepts an array into a variadic function.

```javascript
function convertToVariadic(func) {
  return (...args) => func(args);
}

const arrayHandler = (arr) => arr.join(", ");
const variadicHandler = convertToVariadic(arrayHandler);

console.log(variadicHandler(1, 2, 3));
```

## 44. Write a JavaScript program to remove false values from a given array.

```javascript
function removeFalseValues(array) {
  return array.filter(Boolean);
}

const arrayWithFalse = [1, null, "Hello", undefined, false, 0, ""];

console.log(removeFalseValues(arrayWithFalse));
```

## 45. Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

```javascript
function splitValuesByFilter(collection, filter) {
  return collection.reduce(
    (result, value, index) => {
      filter(index) ? result[0].push(value) : result[1].push(value);
      return result;
    },
    [[], []]
  );
}

const collectionToSplit = ["apple", "banana", "cherry", "date"];
const filterFunction = (index) => index % 2 === 0;

console.log(splitValuesByFilter(collectionToSplit, filterFunction));
```

## 46. Write a JavaScript program to curry (curries) a function.

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}
function addThreeNumbers(a, b, c) {
  return a + b + c;
}

const curriedAddition = curry(addThreeNumbers);

console.log(curriedAddition(1)(2)(3));
```

## 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.

```javascript
function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

const obj1 = { name: "John", age: 25, city: "New York" };
const obj2 = { name: "John", age: 25, city: "New York" };
const obj3 = { name: "Jane", age: 30, city: "Los Angeles" };

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
```

## 48. Write a JavaScript program to get an array of function property names from the own (and optionally inherited) enumerable properties of an object.

```javascript
function functionPropertyNames(obj, includeInherited = false) {
  const properties = includeInherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj);

  return properties.filter((key) => typeof obj[key] === "function");
}

const exampleObject = {
  name: "John",
  age: 25,
  sayHello: function () {
    console.log("Hello!");
  },
};

console.log(functionPropertyNames(exampleObject, true));
```

## 49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.

```javascript
function retrieveProperties(obj, selectors) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => selectors.includes(key))
  );
}

const dataObject = {
  name: "John",
  age: 25,
  city: "New York",
  country: "USA",
  occupation: "Engineer",
};

const selectedProperties = ["name", "age", "occupation"];

console.log(retrieveProperties(dataObject, selectedProperties));
```

## 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

```javascript
function convertToTimeFormat(hour) {
  return hour >= 12 ? `${hour}pm` : `${hour}am`;
}

console.log(convertToTimeFormat(8));
console.log(convertToTimeFormat(14));
```

## 51. Write a JavaScript program to get an object containing the current URL parameters.

```javascript
function getURLParameters(url) {
  const params = new URL(url).searchParams;
  const parameterObject = {};

  params.forEach((value, key) => {
    parameterObject[key] = value;
  });

  return parameterObject;
}

const sampleURL = "http:##example.com?name=John&age=25&city=NewYork";

console.log(getURLParameters(sampleURL));
```

## 52. Write a JavaScript program to group the elements of a given array based on the given function.

```javascript
function groupElementsByFunction(arr, groupingFunction) {
  const groupedData = {};

  arr.forEach((element) => {
    const key = groupingFunction(element);

    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    groupedData[key].push(element);
  });

  return groupedData;
}

const numbersArray = [1, 2, 3, 4, 5, 6];
const groupByEvenOdd = groupElementsByFunction(numbersArray, (num) =>
  num % 2 === 0 ? "even" : "odd"
);

console.log(groupByEvenOdd);
```

## 53. Write a JavaScript program to initialize a two-dimensional array of given size and value.

```javascript
function initialize2DArray(rows, cols, value) {
  return Array.from({ length: rows }, () => Array(cols).fill(value));
}

const rowsCount = 3;
const colsCount = 4;
const defaultValue = 0;

console.log(initialize2DArray(rowsCount, colsCount, defaultValue));
```

## 54. Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.

```javascript
function initializeArrayInRange(start, end) {
return Array.from({ length: end - start + 1 }, (\_, index) => start + index);
}

const startRange = 5;
const endRange = 10;

console.log(initializeArrayInRange(startRange, endRange));
```

## 55. Write a JavaScript program to join all given URL segments together, then normalize the resulting URL.

```javascript
function normalizeURL(...segments) {
  const joinedURL = segments.join("/");
  const url = new URL(joinedURL, "https:##example.com");
  return url.href;
}

const pathSegment1 = "path";
const pathSegment2 = "to";
const pathSegment3 = "resource";

console.log(normalizeURL(pathSegment1, pathSegment2, pathSegment3));
```

## 56. Write a JavaScript program to check whether all elements in a given array are equal or not.

```javascript
function areAllElementsEqual(arr) {
  return arr.every((element) => element === arr[0]);
}

const equalArray = [1, 1, 1, 1];
const unequalArray = [1, 2, 3, 4];

console.log(areAllElementsEqual(equalArray));
console.log(areAllElementsEqual(unequalArray));
```

## 57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

```javascript
function computeAverage(arr, mapFunction) {
const mappedValues = arr.map(mapFunction);
const sum = mappedValues.reduce((acc, value) => acc + value, 0);
return sum / arr.length;
}

const numbersToAverage = [1, 2, 3, 4];

console.log(computeAverage(numbersToAverage, (num) => num \* 2));
```

## 58. Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.

```javascript
function splitWithPredicate(collection, predicate) {
  return collection.reduce(
    (result, element) => {
      predicate(element) ? result[0].push(element) : result[1].push(element);
      return result;
    },
    [[], []]
  );
}

const numbers3 = [1, 2, 3, 4, 5, 6];
const isEven2 = (num) => num % 2 === 0;
const result4 = splitWithPredicate(numbers3, isEven2);
console.log(result4);
```

## 59. Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.

```javascript
function invokeWithContext(fn, context, ...args) {
  return fn.call(context, ...args);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

invokeWithContext(greet, null, "John");
```

## 60. Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.

```javascript
function invokeMethodByKey(obj, key, ...args) {
  const method = obj[key];
  if (typeof method === "function") {
    return method.call(obj, ...args);
  } else {
    throw new Error(`${key} is not a function.`);
  }
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(invokeMethodByKey(calculator, "add", 2, 3));
```

## 61. Write a JavaScript program to cast the provided value as an array if it's not one.

```javascript
function castToArray(value) {
  return Array.isArray(value) ? value : [value];
}

const number = 42;
const array = castToArray(number);
console.log(array);

const existingArray = [1, 2, 3];
const newArray = castToArray(existingArray);
console.log(newArray);
```

## 62. Write a JavaScript program to chain asynchronous functions.

```javascript
function chainAsyncFunctions(...asyncFunctions) {
  return asyncFunctions.reduce(
    (chain, func) => chain.then(func),
    Promise.resolve()
  );
}

const asyncFunction1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Function 1"), 1000));
const asyncFunction2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Function 2"), 500));
const asyncFunction3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Function 3"), 200));

chainAsyncFunctions(asyncFunction1, asyncFunction2, asyncFunction3).then(
  (results) => console.log(results)
);
```

## 63. Write a JavaScript program to clone a given regular expression.

```javascript
function cloneRegExp(regex) {
const flags =
(regex.global ? "g" : "") +
(regex.ignoreCase ? "i" : "") +
(regex.multiline ? "m" : "");
return new RegExp(regex.source, flags);
}

const originalRegExp = /test/i;
const clonedRegExp = cloneRegExp(originalRegExp);
console.log(clonedRegExp); ## Output: /test/i
```

## 64. Write a JavaScript program to get the first non-null / undefined argument.

```javascript
function getFirstNonNull(...args) {
  return args.find((arg) => arg !== null && arg !== undefined);
}

const result5 = getFirstNonNull(null, undefined, "Hello", 42);
console.log(result5);
```

## 65. Write a JavaScript program to add special characters to text to print in color on the console (combined with console.log()).

```javascript
function printColoredText(text, color) {
  const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  const coloredText = colors[color]
    ? colors[color] + text + colors.reset
    : text;
  console.log(coloredText);
}

printColoredText("This is red text", "red");
printColoredText("This is green text", "green");
```

## 66. Write a JavaScript program to perform right-to-left function composition.

```javascript
function composeRight(...functions) {
return functions.reduceRight(
(acc, fn) =>
(...args) =>
fn(acc(...args)),
(arg) => arg
);
}

const add = (x) => x + 2;
const multiply = (x) => x \* 3;
const subtract = (x) => x - 5;

const composed = composeRight(add, multiply, subtract);
console.log(composed(10));
```

## 67. Write a JavaScript program to perform left-to-right function composition.

```javascript
function composeLeft(...functions) {
  return functions.reduce(
    (acc, fn) =>
      (...args) =>
        fn(acc(...args)),
    (arg) => arg
  );
}

const composed2 = composeLeft(add, multiply, subtract);
console.log(composed2(10));
```

## 68. Write a JavaScript program that accepts a converging function and a list of branching functions. It returns a function that applies each branching function to the arguments. The results of the branching functions are passed as arguments to the converging function.

```javascript
function converge(convergingFn, ...branchingFns) {
return function (...args) {
const branchResults = branchingFns.map((fn) => fn(...args));
return convergingFn(...branchResults);
};
}

const sum = (a, b) => a + b;
const square = (x) => x _ x;
const double = (x) => x _ 2;

const convergingFunction = converge(sum, square, double);
console.log(convergingFunction(3, 4));
```

## 69. Write a JavaScript program to group array elements based on the given function. It return the count of elements in each group.

```javascript
function groupElementsByFunction(arr, groupingFn) {
  return arr.reduce((result, element) => {
    const key = groupingFn(element);
    result[key] = result[key] || [];
    result[key].push(element);
    return result;
  }, {});
}

const words = ["apple", "banana", "grape", "orange"];
const groupByLength = (word) => word.length;

const groupedWords = groupElementsByFunction(words, groupByLength);
console.log(groupedWords);
```

## 70. Write a JavaScript program to count a value in an array.

```javascript
function countValue(arr, value) {
  return arr.reduce(
    (count, element) => (element === value ? count + 1 : count),
    0
  );
}

const numbers5 = [1, 2, 3, 4, 2, 5, 2];
const countOfTwos = countValue(numbers5, 2);
console.log(countOfTwos);
```

## 71. Write a JavaScript program to create a deep clone of an object.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

const originalObject3 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const clonedObject = deepClone(originalObject3);
console.log(clonedObject);
```

## 72. Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.

```javascript
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  console.log("This website is being viewed on a mobile device.");
} else {
  console.log("This website is being viewed on a desktop/laptop.");
}
```

## 73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.

```javascript
function differenceWith(arr1, arr2, comparatorFn) {
return arr1.filter((element1) =>
arr2.every((element2) => !comparatorFn(element1, element2))
);
}

const arr1_3 = [1, 2, 3, 4];
const arr2_3 = [2, 3, 5];
const diff = differenceWith(arr1_3, arr2_3, (a, b) => a === b);
console.log(diff); ## Output: [1, 4]
```

## 74. Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.

```javascript
function filterWithComparator(arr, comparatorFn) {
return arr.filter(comparatorFn);
}

const numbers4 = [1, 2, 3, 4, 5];
const filteredNumbers = filterWithComparator(numbers4, (num) => num % 2 === 0);
console.log(filteredNumbers); ## Output: [2, 4]
```

## 75. Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -> loser).

```javascript
function calculateEloRatings(preRatings, results, k = 32) {
const expectedScores = preRatings.map((rating, index) => {
const opponentRating = preRatings[(index + 1) % 2];
return 1 / (1 + 10 \*\* ((opponentRating - rating) / 400));
});

const updatedRatings = preRatings.map((rating, index) => {
const result = results[index];
return rating + k \* (result - expectedScores[index]);
});

return updatedRatings;
}

const preRatings = [1200, 1400];
const results = [1, 0];
const updatedRatings = calculateEloRatings(preRatings, results);
console.log(updatedRatings);
```

## 76. Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.

```javascript
function forEachRight(arr, callback) {
  for (let i = arr.length - 1; i >= 0; i--) {
    callback(arr[i], i, arr);
  }
}

const numbers6 = [1, 2, 3, 4, 5];
forEachRight(numbers6, (num, index) =>
  console.log(`Element at index ${index}: ${num}`)
);
```

## 77. Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.

```javascript
function forEachProperty(obj, callback) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback(obj[key], key, obj);
    }
  }
}

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

forEachProperty(person, (value, key) => console.log(`${key}: ${value}`));
```

## 78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

```javascript
function invertObject(obj) {
  return Object.entries(obj).reduce((inverted, [key, value]) => {
    inverted[value] = inverted[value] || [];
    inverted[value].push(key);
    return inverted;
  }, {});
}

const originalObject4 = {
  red: "apple",
  yellow: "banana",
  purple: "grape",
};

const invertedObject = invertObject(originalObject4);
console.log(invertedObject);
```

## 79. Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.

```javascript
function findLongest(...args) {
  return args.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    []
  );
}

const arr1_4 = [1, 2, 3];
const arr2_4 = [4, 5, 6, 7];
const arr3 = [8, 9];
const longestArray = findLongest(arr1_4, arr2_4, arr3);
console.log(longestArray);
```

## 80. Write a JavaScript program to implement the Luhn Algorithm used to validate identification numbers. For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

```javascript
function luhnCheck(number) {
const numArray = String(number).split("").map(Number);

for (let i = numArray.length - 2; i >= 0; i -= 2) {
let doubleDigit = numArray[i] \* 2;
if (doubleDigit > 9) {
doubleDigit -= 9;
}
numArray[i] = doubleDigit;
}

const sum = numArray.reduce((acc, digit) => acc + digit, 0);
return sum % 10 === 0;
}

const creditCardNumber = 4485123456789123;
const isValid = luhnCheck(creditCardNumber);
console.log(isValid);
```

## 81. Write a JavaScript program to create an object with keys generated by running the provided function for each key. The object will have the same values as the provided object.

```javascript
function createObjectWithKeys(keysFunction, valuesFunction) {
  const keys = keysFunction();
  const values = valuesFunction();

  return keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
  }, {});
}

const keysFunction = () => ["name", "age", "city"];
const valuesFunction = () => ["John", 30, "New York"];
const personObject = createObjectWithKeys(keysFunction, valuesFunction);
console.log(personObject);
```

## 82. Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.

```javascript
function mapArrayToObject(arr, mappingFunction) {
  return arr.reduce((obj, value) => {
    const [key, mappedValue] = mappingFunction(value);
    obj[key] = mappedValue;
    return obj;
  }, {});
}

const numbers7 = [1, 2, 3];
const squaredObject = mapArrayToObject(numbers7, (num) => [num, num * num]);
console.log(squaredObject);
```

## 83. Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.

```javascript
function mapString(str, mappingFunction) {
  return str.split("").map(mappingFunction).join("");
}

const originalString2 = "hello";
const updatedString = mapString(originalString2, (char) => char.toUpperCase());
console.log(updatedString);
```

## 84. Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.

```javascript
function mapObjectValues(obj, mappingFunction) {
return Object.entries(obj).reduce((mappedObj, [key, value]) => {
mappedObj[key] = mappingFunction(value);
return mappedObj;
}, {});
}

const originalObject5 = { a: 1, b: 2, c: 3 };
const squaredValuesObject = mapObjectValues(
originalObject5,
(value) => value \* value
);
console.log(squaredValuesObject);
```

## 85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.

```javascript
function maskString(str, maskCharacter) {
  const lastCharacter = str.slice(-1);
  const maskedPart = maskCharacter.repeat(str.length - 1);
  return maskedPart + lastCharacter;
}

const originalString3 = "SensitiveInfo";
const maskedString = maskString(originalString3, "*");
console.log(maskedString);
```

## 86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.

```javascript
function maxMappedValue(arr, mappingFunction) {
const mappedValues = arr.map(mappingFunction);
return Math.max(...mappedValues);
}

const numbers8 = [1, 2, 3, 4, 5];
const maxSquaredValue = maxMappedValue(numbers8, (num) => num \* num);
console.log(maxSquaredValue);
```

## 87. Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).

```javascript
function getNMaxElements(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

const numbers9 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const topThreeMax = getNMaxElements(numbers9, 3);
console.log(topThreeMax);
```

## 88. Write a JavaScript program to get the median of an array of numbers.

```javascript
function getMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const lowerMiddle = sortedArr[middleIndex - 1];
    const upperMiddle = sortedArr[middleIndex];
    return (lowerMiddle + upperMiddle) / 2;
  } else {
    return sortedArr[middleIndex];
  }
}

const numbers10 = [7, 2, 5, 1, 8, 4];
const medianValue = getMedian(numbers10);
console.log(medianValue);
```

## 89. Write a JavaScript program to negates a predicate function.

```javascript
function negatePredicate(predicateFunction) {
  return (...args) => !predicateFunction(...args);
}

const isEven3 = (num) => num % 2 === 0;
const isOdd3 = negatePredicate(isEven);

console.log(isOdd3(3));
console.log(isOdd3(4));
```

## 90. Write a JavaScript program to nest a given flat array of objects linked to one another recursively.

```javascript
function nestArray(objects, parentId = null) {
  return objects
    .filter((obj) => obj.parentId === parentId)
    .map((obj) => ({
      ...obj,
      children: nestArray(objects, obj.id),
    }));
}

const flatArray = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 2", parentId: 1 },
  { id: 3, name: "Node 3", parentId: 1 },
  { id: 4, name: "Node 4", parentId: 2 },
  { id: 5, name: "Node 5", parentId: 2 },
  { id: 6, name: "Node 6", parentId: null },
];

const nestedArray = nestArray(flatArray);
console.log(JSON.stringify(nestedArray, null, 2));
```

## 91. Write a JavaScript program that returns true if the provided predicate function returns false for all elements in a collection, false otherwise.

```javascript
function none(collection, predicateFunction) {
  return !collection.some(predicateFunction);
}

const numbers11 = [1, 3, 5, 7, 9];
const areAllEven = none(numbers11, (num) => num % 2 !== 0);
console.log(areAllEven);
```

## 92. Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

```javascript
function getArgumentAtIndex(n, ...args) {
  const index = n < 0 ? args.length + n : n;
  return args[index];
}

const result92 = getArgumentAtIndex(2, "a", "b", "c", "d");
console.log(result92);
```

## 93. Write a JavaScript program to remove an event listener from an element.

```javascript
function removeEventListener(element, eventType, handler) {
  element.removeEventListener(eventType, handler);
}

const buttonElement = document.getElementById("copyButton");
const clickHandler = () => console.log("Button Clicked");
buttonElement.addEventListener("click", clickHandler);
removeEventListener(buttonElement, "click", clickHandler);
```

## 94. Write a JavaScript program to move the specified amount of elements to the end of the array.

```javascript
function moveElementsToEnd(arr, n) {
  const movedElements = arr.splice(0, n);
  arr.push(...movedElements);
}

const array94 = [1, 2, 3, 4, 5];
moveElementsToEnd(array94, 2);
console.log(array94);
```

## 95. Write a JavaScript program to add an event listener to an element with the ability to use event delegation.

```javascript
function addDelegatedEventListener(
  parentElement,
  eventType,
  selector,
  handler
) {
  parentElement.addEventListener(eventType, (event) => {
    if (event.target.matches(selector)) {
      handler(event);
    }
  });
}

const parentContainer = document.getElementById("container");
addDelegatedEventListener(parentContainer, "click", ".button", (event) => {
  console.log("Button Clicked");
});
```

## 96. Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object.

```javascript
function pickKeyValues(object, keys) {
  return keys.reduce((result, key) => {
    if (object.hasOwnProperty(key)) {
      result[key] = object[key];
    }
    return result;
  }, {});
}

const sampleObject96 = { a: 1, b: 2, c: 3, d: 4 };
const selectedKeyValues = pickKeyValues(sampleObject96, ["b", "d"]);
console.log(selectedKeyValues);
```

## 97. Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

```javascript
function createObjectFromFunction(object, filterFunction) {
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) => filterFunction(value, key))
  );
}

const sampleObject97 = { a: 1, b: 2, c: 3, d: 4 };
const filteredObject = createObjectFromFunction(
  sampleObject97,
  (value, key) => value % 2 === 0
);
console.log(filteredObject);
```

## 98. Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.

```javascript
function filterObjectsWithCondition(objects, conditionFunction, allowedKeys) {
  return objects.map((obj) =>
    Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) =>
          allowedKeys.includes(key) && conditionFunction(value, key)
      )
    )
  );
}

const array98 = [
  { name: "John", age: 25, gender: "male" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 22, gender: "male" },
];
const filteredArray98 = filterObjectsWithCondition(
  array98,
  (value, key) => value > 25,
  ["name", "age"]
);
console.log(filteredArray98);
```

## 99. Write a JavaScript program to hash a given input string into a whole number.

```javascript
function hashStringToNumber(inputString) {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0;
  }
  return hash;
}

const inputString99 = "hello";
const hashedNumber = hashStringToNumber(inputString99);
console.log(hashedNumber);
```

## 100. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.

```javascript
function groupArrays(...arrays) {
  const combineFunction = arrays.pop();
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(combineFunction(...arrays.map((arr) => arr[i])));
  }
  return result;
}

const array1_4 = [1, 2, 3];
const array2_4 = ["a", "b", "c"];
const combinedArray = groupArrays(
  array1_4,
  array2_4,
  (num, char) => `${num}-${char}`
);
console.log(combinedArray);
```

## 101. Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.

```javascript
function createObjectFromArrays(properties, values) {
  return Object.fromEntries(
    properties.map((prop, index) => [prop, values[index]])
  );
}

const propertyIdentifiers101 = ["name", "age", "gender"];
const values101 = ["John", 25, "male"];
const createdObject101 = createObjectFromArrays(
  propertyIdentifiers101,
  values101
);
console.log(createdObject101);
```

## 102. Write a JavaScript program to create an array of elements, grouped based on the position in the original array.

```javascript
function groupElementsByPosition(array) {
  return array.reduce(
    (result, value, index) => {
      result[index % result.length].push(value);
      return result;
    },
    Array.from({ length: Math.ceil(array.length / 2) }, () => [])
  );
}

const array102 = [1, 2, 3, 4, 5, 6];
const groupedArray102 = groupElementsByPosition(array102);
console.log(groupedArray102);
```

## 103. Write a JavaScript program to convert a given string into an array of words.

```javascript
function stringToArrayOfWords(inputString) {
  return inputString.split(/\s+/);
}

const inputString103 = "Hello World";
const arrayOfWords103 = stringToArrayOfWords(inputString103);
console.log(arrayOfWords103);
```

## 104. Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.

```javascript
function testAndApply(x, predicateFunction, applyFunction) {
return predicateFunction(x) ? applyFunction(x) : x;
}

const value104 = 10;
const isEven104 = (num) => num % 2 === 0;
const doubleIfEven104 = (num) => num \* 2;
const result104 = testAndApply(value104, isEven104, doubleIfEven104);
console.log(result104);
```

## 105. Write a JavaScript program that returns true if the given value is a number, false otherwise.

```javascript
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

const value105 = 42;
const isValueNumber105 = isNumber(value105);
console.log(isValueNumber105);
```

## 106. Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.

```javascript
function ungroupAndApply(zipArray, applyFunction) {
  return zipArray
    .reduce((result, group) => {
      group.forEach((value, index) => {
        if (!result[index]) {
          result[index] = [];
        }
        result[index].push(value);
      });
      return result;
    }, [])
    .map((group) => applyFunction(...group));
}
```

## 107. Write a JavaScript program to get all distinct values (from the right side of the array) of an array, based on a provided comparator function.

```javascript
function distinctValues(array, comparatorFunction) {
  return array.reduceRight((result, value) => {
    if (!result.some((item) => comparatorFunction(item, value))) {
      result.unshift(value);
    }
    return result;
  }, []);
}

const array107 = [1, 2, 3, 1, 2, 4];
const uniqueValues107 = distinctValues(array107, (a, b) => a === b);
console.log(uniqueValues107);
```

## 108. Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

```javascript
function uniqueValues(array, comparatorFunction) {
  return array.filter((value, index, self) =>
    self.slice(index + 1).every((item) => !comparatorFunction(item, value))
  );
}

const array108 = [1, 2, 3, 1, 2, 4];
const uniqueValues108 = uniqueValues(array108, (a, b) => a === b);
console.log(uniqueValues108);
```

## 109. Write a JavaScript program to get the nth element of a given array.

```javascript
function getNthElement(array, n) {
  return n < 0 ? array[array.length + n] : array[n];
}

const array109 = ["a", "b", "c", "d"];
const elementAt2ndIndex109 = getNthElement(array109, 2);
console.log(elementAt2ndIndex109);
```

## 110. Write a JavaScript program to get every element in any of the two arrays at once.

```javascript
function combineArrays(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

const array110A = [1, 2, 3];
const array110B = [3, 4, 5];
const combinedArray110 = combineArrays(array110A, array110B);
console.log(combinedArray110);
```

## 111. Write a JavaScript program to build an array, using an iterator function and an initial seed value.

```javascript
function buildArray(iteratorFunction, seedValue, length) {
const result = [];
let currentValue = seedValue;
for (let i = 0; i < length; i++) {
result.push(currentValue);
currentValue = iteratorFunction(currentValue);
}
return result;
}

const iteratorFunction111 = (num) => num \* 2;
const seedValue111 = 1;
const length111 = 5;
const generatedArray111 = buildArray(
iteratorFunction111,
seedValue111,
length111
);
console.log(generatedArray111);
```

## 112. Write a JavaScript program to unflatten an object with the paths for keys.

```javascript
function unflattenObject(object) {
  return Object.entries(object).reduce((result, [key, value]) => {
    const keys = key.split(".");
    keys.reduce((nestedObj, nestedKey, index) => {
      if (!nestedObj[nestedKey]) {
        nestedObj[nestedKey] = {};
      }
      if (index === keys.length - 1) {
        nestedObj[nestedKey] = value;
      }
      return nestedObj[nestedKey];
    }, result);
    return result;
  }, {});
}

const flatObject112 = {
  "a.b.c": 1,
  "a.b.d": 2,
  "x.y.z": 3,
};
const unflattenedObject112 = unflattenObject(flatObject112);
console.log(unflattenedObject112);
```

## 113. Write a JavaScript program to unescape escaped HTML characters.

```javascript
function unescapeHtml(inputString) {
  const htmlEntities = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  return inputString.replace(
    /&lt;|&gt;|&amp;|&quot;|&#39;/g,
    (entity) => htmlEntities[entity]
  );
}

const escapedString113 = "This &lt;div&gt; is &quot;escaped&quot;.&amp;";
const unescapedString113 = unescapeHtml(escapedString113);
console.log(unescapedString113);
```

## 114. Write a JavaScript program to uncurry a function up to depth n.

```javascript
function uncurry(fn, depth = 1) {
  if (depth <= 1) {
    return (...args) => fn(args);
  }
  return (arg) => uncurry(fn.bind(null, arg), depth - 1);
}

const curriedFunction114 = (a) => (b) => (c) => a + b + c;
const uncurriedFunction114 = uncurry(curriedFunction114, 3);
const result114 = uncurriedFunction114(1, 2, 3);
console.log(result114);
```

## 115. Ignoring additional arguments

```javascript
function singleArgumentFunction(arg) {
  return arg;
}
console.log(singleArgumentFunction(42, "extra", true));
```

## 116. Check if predicate is truthy for all elements

```javascript
function allTruthy(collection, predicate) {
  return collection.every(predicate);
}

console.log(allTruthy([true, 1, "hello"], Boolean));
console.log(allTruthy([true, 0, "hello"], Boolean));
```

## 117. Truncate a string up to a specified length

```javascript
function truncateString(str, maxLength) {
  return str.slice(0, maxLength);
}

console.log(truncateString("Hello, World!", 5));
```

## 118. Apply a function against an accumulator and each key in the object

```javascript
function objectReduce(obj, fn, initialValue) {
  return Object.keys(obj).reduce(
    (acc, key) => fn(acc, obj[key], key),
    initialValue
  );
}

const obj = { a: 1, b: 2, c: 3 };
const sum2 = objectReduce(obj, (acc, value) => acc + value, 0);
console.log(sum2);
```

## 119. Create tomorrow's date in a string representation

```javascript
function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toDateString();
}

console.log(getTomorrowDate());
```

## 120. Convert a string to snake case

```javascript
function toSnakeCase(str) {
  return str.replace(/\s+/g, "_").toLowerCase();
}

console.log(toSnakeCase("Hello World"));
```

## 121. Convert a value to a safe integer

```javascript
function toSafeInteger(value) {
  return Math.trunc(
    Math.max(Math.min(value, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
}

console.log(toSafeInteger(2.5));
```

## 122. Add an ordinal suffix to a number

```javascript
function addOrdinalSuffix(num) {
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

console.log(addOrdinalSuffix(23));
```

## 123. Convert a string to kebab case

```javascript
function toKebabCase(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

console.log(toKebabCase("Hello World"));
```

## 124. Reduce a given Array-like into a value hash

```javascript
function arrayToHash(arr, fn) {
  return Array.from(arr).reduce((acc, item) => {
    acc[fn(item)] = item;
    return acc;
  }, {});
}

const colors = ["red", "green", "blue"];
const colorHash = arrayToHash(colors, (color) => color.charAt(0));
console.log(colorHash);
```

## 125. Convert float-point arithmetic to decimal form

```javascript
function floatToDecimal(num) {
  return num.toString().replace(".", ",");
}

console.log(floatToDecimal(3.14159));
```

## 126. Create a specified currency format from a given number

```javascript
function formatCurrency(number, currency) {
  return `${currency} ${number.toFixed(2)}`;
}

console.log(formatCurrency(42.5, "$"));
```

## 127. Iterate over a callback n times

```javascript
function iterateNTimes(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

iterateNTimes(3, (index) => console.log(index));
```

## 128. Get removed elements of a given array until the passed function returns true

```javascript
function removeUntil(array, predicate) {
  const removed = [];
  while (!predicate(array[0])) {
    removed.push(array.shift());
  }
  return removed;
}

const numbers128 = [1, 2, 3, 4, 5, 6];
console.log(removeUntil(numbers128, (num) => num > 3));
```

## 129. Get removed elements from the end until the passed function returns true

```javascript
function removeUntilFromEnd(array, predicate) {
  const removed = [];
  while (!predicate(array[array.length - 1])) {
    removed.unshift(array.pop());
  }
  return removed;
}

const numbers129 = [1, 2, 3, 4, 5, 6];
console.log(removeUntilFromEnd(numbers129, (num) => num < 5));
```

## 130. Remove n elements from the end of a given array

```javascript
function removeNFromEnd(array, n) {
  return array.splice(-n, n);
}

const numbers130 = [1, 2, 3, 4, 5, 6];
console.log(removeNFromEnd(numbers130, 2));
```

## 131. Get an array with n elements removed from the beginning from a given array

```javascript
function removeNFromStart(array, n) {
  return array.slice(n);
}

const numbers131 = [1, 2, 3, 4, 5, 6];
console.log(removeNFromStart(numbers131, 3));
```

## 132. Get the symmetric difference between two given arrays using a comparator

```javascript
function symmetricDifference(arr1, arr2, comparator) {
  const diff1 = arr1.filter(
    (item1) => !arr2.some((item2) => comparator(item1, item2))
  );
  const diff2 = arr2.filter(
    (item2) => !arr1.some((item1) => comparator(item1, item2))
  );
  return [...diff1, ...diff2];
}

const array132A = [1, 2, 3, 4];
const array132B = [3, 4, 5, 6];
console.log(symmetricDifference(array132A, array132B, (a, b) => a === b));
```

## 133. Get symmetric difference between two arrays after applying the provided function to each element

```javascript
function symmetricDifferenceWithFunction(arr1, arr2, fn) {
const diff1 = arr1.filter((item1) => !arr2.some((item2) => fn(item1, item2)));
const diff2 = arr2.filter((item2) => !arr1.some((item1) => fn(item1, item2)));
return [...diff1, ...diff2];
}

const array133A = [1, 2, 3, 4];
const array133B = [3, 4, 5, 6];
console.log(
symmetricDifferenceWithFunction(array133A, array133B, (a, b) => a \* 2 === b)
);
```

## 134. Get symmetric difference between two arrays

```javascript
function symmetricDifferenceSimple(arr1, arr2) {
  const diff1 = arr1.filter((item1) => !arr2.includes(item1));
  const diff2 = arr2.filter((item2) => !arr1.includes(item2));
  return [...diff1, ...diff2];
}

const array134A = [1, 2, 3, 4];
const array134B = [3, 4, 5, 6];
console.log(symmetricDifferenceSimple(array134A, array134B));
```

## 135. Get the sum of the powers of all numbers from start to end (inclusive)

```javascript
function sumOfPowers(start, end) {
return Array.from({ length: end - start + 1 }, (\_, i) =>
Math.pow(start + i, i + 1)
).reduce((acc, val) => acc + val, 0);
}

console.log(sumOfPowers(1, 3));
```

## 136. Generate all permutations of a string (contains duplicates)

```javascript
function permuteString(str) {
  if (str.length <= 1) return [str];

  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = permuteString(remaining);
    for (const perm of remainingPermutations) {
      permutations.push(char + perm);
    }
  }

  return permutations;
}

console.log(permuteString("abc"));
```

## 137. Perform stable sorting of an array, preserving initial indexes

```javascript
function stableSort(arr, compareFunction) {
  return arr
    .map((value, index) => ({ value, index }))
    .sort((a, b) => compareFunction(a.value, b.value) || a.index - b.index)
    .map(({ value }) => value);
}

const arr137 = [4, 3, 2, 1, 5];
const sortedArr137 = stableSort(arr137, (a, b) => a - b);
console.log(sortedArr137);
```

## 138. Take a variadic function and return a closure that maps arguments to inputs

```javascript
function closureMapper(fn) {
  return (...args) => fn(...args);
}

const addNumbers = (a, b) => a + b;
const addClosure = closureMapper(addNumbers);
console.log(addClosure(2, 3));
```

## 139. Split a multiline string into an array of lines

```javascript
function splitLines(multilineString) {
  return multilineString.split("\n");
}

const multilineString = "Line 1\nLine 2\nLine 3";
console.log(splitLines(multilineString));
```

## 140. Get the highest index for maintaining sort order using an iterator function

```javascript
function sortedIndexWithIterator(arr, value, iterator) {
  const sortedArr = [...arr].sort((a, b) => iterator(a) - iterator(b));
  let index = 0;
  while (
    index < sortedArr.length &&
    iterator(sortedArr[index]) < iterator(value)
  ) {
    index++;
  }
  return index;
}

const arr140 = [{ age: 30 }, { age: 25 }, { age: 35 }];
const newValue140 = { age: 28 };
console.log(sortedIndexWithIterator(arr140, newValue140, (obj) => obj.age));
```

## 141. Get the highest index for maintaining sort order

```javascript
function sortedIndex(arr, value) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let index = 0;
  while (index < sortedArr.length && sortedArr[index] < value) {
    index++;
  }
  return index;
}

const arr141 = [10, 20, 30, 40, 50];
const newValue141 = 25;
console.log(sortedIndex(arr141, newValue141));
```

## 142. Get the lowest index for maintaining sorting order

```javascript
function sortedLastIndex(arr, value) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let index = sortedArr.length;
  while (index > 0 && sortedArr[index - 1] > value) {
    index--;
  }
  return index;
}

const arr142 = [10, 20, 30, 40, 50];
const newValue142 = 35;
console.log(sortedLastIndex(arr142, newValue142));
```

## 143. Sort characters of a string alphabetically

```javascript
function sortStringAlphabetically(str) {
  return str.split("").sort().join("");
}

console.log(sortStringAlphabetically("hello"));
```

## 144. Get an array of elements that appear in both arrays

```javascript
function intersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

const array144A = [1, 2, 3, 4];
const array144B = [3, 4, 5, 6];
console.log(intersection(array144A, array144B));
```

## 145. Randomize the order of array values

```javascript
function randomizeArrayOrder(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const array145 = [1, 2, 3, 4, 5];
console.log(randomizeArrayOrder(array145));
```

## 146. Create a shallow clone of an object

```javascript
function shallowClone(obj) {
  return { ...obj };
}

const originalObject146 = { a: 1, b: 2, c: 3 };
const clonedObject146 = shallowClone(originalObject146);
console.log(clonedObject146);
```

## 147. Serialize a cookie name-value pair into a Set-Cookie header string

```javascript
function serializeCookie(name, value, options) {
  var serializedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;
  if (options) {
    if (options.expires) {
      serializedCookie += `; Expires=${options.expires.toUTCString()}`;
    }
    if (options.maxAge) {
      serializedCookie += `; Max-Age=${options.maxAge}`;
    }
    if (options.domain) {
      serializedCookie += `; Domain=${options.domain}`;
    }
    if (options.path) {
      serializedCookie += `; Path=${options.path}`;
    }
    if (options.secure) {
      serializedCookie += "; Secure";
    }
    if (options.httpOnly) {
      serializedCookie += "; HttpOnly";
    }
    if (options.sameSite) {
      serializedCookie += `; SameSite=${options.sameSite}`;
    }
  }
  return serializedCookie;
}

const cookieOptions = {
  expires: new Date(Date.now() + 86400000),
  domain: "example.com",
  path: "/",
  secure: true,
  httpOnly: true,
  sameSite: "Strict",
};

console.log(serializeCookie("myCookie", "123", cookieOptions));
```

## 148. Hash the input string into a whole number

```javascript
function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash;
}

console.log(hashStringToNumber("hello"));
```

## 149. Get a random element from an array

```javascript
function getRandomElement(arr) {
const randomIndex = Math.floor(Math.random() \* arr.length);
return arr[randomIndex];
}

const array149 = [1, 2, 3, 4, 5];
console.log(getRandomElement(array149));
```

## 150. Run a given array of promises in series

```javascript
function runPromisesInSeries(promises) {
  return promises.reduce((promiseChain, currentPromise) => {
    return promiseChain.then((result) =>
      currentPromise().then(Array.prototype.concat.bind(result))
    );
  }, Promise.resolve([]));
}

const promises150 = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
];

runPromisesInSeries(promises150).then(console.log);
```

## 151. Run a function in a separate thread using a Web Worker

```javascript
function runInWorker(fn) {
  const blob = new Blob([`onmessage = ${fn.toString()}`], {
    type: "application/javascript",
  });
  const worker = new Worker(URL.createObjectURL(blob));
  return new Promise((resolve, reject) => {
    worker.onmessage = (event) => {
      resolve(event.data);
      worker.terminate();
    };
    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    };
    worker.postMessage(null);
  });
}

const addNumbersInWorker = (a, b) => a + b;
runInWorker(addNumbersInWorker).then(console.log);
```

## 152. Round a number to a specified amount of digits

```javascript
function roundToDecimalPlaces(num, decimalPlaces) {
const multiplier = Math.pow(10, decimalPlaces);
return Math.round(num \* multiplier) / multiplier;
}

console.log(roundToDecimalPlaces(3.14159, 2));
```

## 153. Reverse the order of characters in a string

```javascript
function reverseString(str) {
return str.split("").reverse().join("");
}

console.log(reverseString("hello")); ## Output: olleh
```

## 154. Create an object of properties where the given function returns false

```javascript
function filterProperties(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => !predicate(value, key))
  );
}

const obj154 = { a: 1, b: 2, c: 3 };
const filteredObj154 = filterProperties(obj154, (value) => value % 2 === 0);
console.log(filteredObj154);
```

## 155. Filter an array using a predicate, keeping elements where pred(x) returns false

```javascript
function filterWithInversePredicate(arr, predicate) {
  return arr.filter((x) => !predicate(x));
}

const numbers155 = [1, 2, 3, 4, 5];
console.log(filterWithInversePredicate(numbers155, (x) => x % 2 === 0));
```

## 156. Apply a function against an accumulator and each element in the array (from left to right)

```javascript
function reduceSuccessively(arr, fn, initialValue) {
  let accumulator = initialValue;
  for (const element of arr) {
    accumulator = fn(accumulator, element);
  }
  return accumulator;
}

const numbers156 = [1, 2, 3, 4];
const sum156 = reduceSuccessively(numbers156, (acc, val) => acc + val, 0);
console.log(sum156);
```

## 157. Redirect to a specified URL

```javascript
function redirectToUrl(url) {
  window.location.href = url;
}

//Usage: redirectToUrl('https:##example.com');
```

## 158. Create a function that invokes the provided function with its arguments arranged according to the specified indexes

```javascript
function rearrangeArguments(fn, indexes) {
return (...args) => fn(...indexes.map((index) => args[index]));
}

const rearrangedAdd = rearrangeArguments((a, b, c) => a + b + c, [2, 0, 1]);
console.log(rearrangedAdd(1, 2, 3)); ## Output: 6
```

## 159. Get an array of lines from the specified file

```javascript
function getLinesFromFile(filePath) {
  // Assuming this is running in a Node.js environment
  const fs = require("fs");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent.split("\n");
}

// Usage: const linesFromFile = getLinesFromFile('path/to/file.txt');
//console.log(linesFromFile);
```

## 160. Mutate the original array to filter out values specified, based on a given iterator function

```javascript
function mutateFilterWithIterator(arr, iterator) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!iterator(arr[i])) {
      arr.splice(i, 1);
    }
  }
}

const numbers160 = [1, 2, 3, 4, 5];
mutateFilterWithIterator(numbers160, (x) => x % 2 !== 0);
console.log(numbers160);
```

## 161. Mutate the original array to filter out values specified. Returns the removed elements.

```javascript
function mutateFilterAndGetRemoved(arr, predicate) {
  const removed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) {
      removed.unshift(arr.splice(i, 1)[0]);
    }
  }
  return removed;
}

const numbers161 = [1, 2, 3, 4, 5];
const removed161 = mutateFilterAndGetRemoved(numbers161, (x) => x % 2 === 0);
console.log(numbers161);
console.log(removed161);
```

## 162. Convert an asynchronous function to return a promise

```javascript
function promisifyAsyncFunction(asyncFn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      asyncFn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
}

//Usage:
//const asyncFunction = (arg, callback) => {
//Some asynchronous operation
//setTimeout(() => callback(null, `Processed: ${arg}`), 1000);
//};
//const promisifiedAsyncFunction = promisifyAsyncFunction(asyncFunction);
//promisifiedAsyncFunction('test').then(console.log);
```

## 163. Convert a number in bytes to a human-readable string

```javascript
function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

console.log(bytesToSize(1024));
```

## 164. Return the singular or plural form of a word based on the input number

```javascript
function pluralizeWord(word, number) {
  return number === 1 ? word : `${word}s`;
}

console.log(pluralizeWord("apple", 3));
```

## 165. Perform left-to-right function composition

```javascript
function compose(...functions) {
return (arg) => functions.reduce((result, fn) => fn(result), arg);
}

const addOne = (x) => x + 1;
const double2 = (x) => x _ 2;
const square2 = (x) => x _ x;
const composedFunction = compose(addOne, double2, square2);
console.log(composedFunction(3));
```

## 166. Perform left-to-right function composition for asynchronous functions

```javascript
function composeAsync(...functions) {
return (arg) =>
functions.reduce(
(promiseChain, fn) => promiseChain.then(fn),
Promise.resolve(arg)
);
}

const asyncAddOne = async (x) => x + 1;
const asyncDouble = async (x) => x _ 2;
const asyncSquare = async (x) => x _ x;
const composedAsyncFunction = composeAsync(
asyncAddOne,
asyncDouble,
asyncSquare
);
composedAsyncFunction(3).then(console.log);
```

## 167. Calculate how many numbers in the given array are less than or equal to the given value using the percentile formula

```javascript
function countNumbersBelowPercentile(arr, value) {
const count = arr.reduce((acc, num) => acc + (num <= value), 0);
return (count / arr.length) \* 100;
}

const numbers167 = [1, 2, 3, 4, 5];
console.log(countNumbersBelowPercentile(numbers167, 3));
```

## 168. Group elements into two arrays, depending on the provided function's truthiness for each element

```javascript
function groupByFunction(arr, groupFunction) {
  const grouped = { true: [], false: [] };
  arr.forEach((element) => {
    const isTrue = groupFunction(element);
    grouped[isTrue].push(element);
  });
  return grouped;
}

const numbers168 = [1, 2, 3, 4, 5];
const groupedNumbers168 = groupByFunction(numbers168, (num) => num % 2 === 0);
console.log(groupedNumbers168);
```

## 169. Function to invoke fn with partials appended to the arguments it receives.

```javascript
function appendPartials(fn, ...partials) {
  return function (...args) {
    return fn(...args, ...partials);
  };
}

const addThreeNumbers2 = (a, b, c) => a + b + c;
const add5ToNumbers = appendPartials(addThreeNumbers2, 5);
console.log(add5ToNumbers(1, 2));
```

## 170. Function to invoke fn with partials prepended to the arguments it receives.

```javascript
function prependPartials(fn, ...partials) {
return function (...args) {
return fn(...partials, ...args);
};
}

const multiplyThreeNumbers = (a, b, c) => a _ b _ c;
const multiplyBy2 = prependPartials(multiplyThreeNumbers, 2);
console.log(multiplyBy2(3, 4));
```

## 171. Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

```javascript
function parseCookieHeader(cookieHeader) {
  return cookieHeader
    .split(";")
    .map((pair) => pair.trim().split("="))
    .reduce((cookies, [name, value]) => ({ ...cookies, [name]: value }), {});
}

const cookieHeader = "name=user123; age=25; session=abcdef123";
const parsedCookies = parseCookieHeader(cookieHeader);
console.log(parsedCookies);
```

## 172. Function to invoke the provided function with its arguments transformed.

```javascript
function transformArguments(fn, ...transforms) {
  return function (...args) {
    const transformedArgs = args.map((arg, index) =>
      index < transforms.length ? transforms[index](arg) : arg
    );
    return fn(...transformedArgs);
  };
}

const concatenateStrings = (a, b, c) => a + b + c;
const addExclamation = (str) => str + "!";
const transformAndConcat = transformArguments(
  concatenateStrings,
  addExclamation,
  addExclamation
);
console.log(transformAndConcat("Hello", "World", ""));
```

## 173. Function to get the nth element of a given array of elements.

```javascript
function getNthElement(arr, n) {
  return arr[n];
}

const arrayForNth = [10, 20, 30, 40, 50];
const nthElement = getNthElement(arrayForNth, 2);
console.log(nthElement);
```

## 174. Function to convert a NodeList into an array.

```javascript
function convertNodeListToArray(nodeList) {
  return Array.from(nodeList);
}

const nodeListExample = document.querySelectorAll("p");
const arrayFromNodeList = convertNodeListToArray(nodeListExample);
console.log(arrayFromNodeList);
```

## 175. Function to get the index of the function in an array of functions which executed the fastest.

```javascript
function getIndexOfFastestFunction(functions) {
  const executionTimes = functions.map((fn) => {
    const startTime = performance.now();
    fn();
    const endTime = performance.now();
    return endTime - startTime;
  });
  return executionTimes.indexOf(Math.min(...executionTimes));
}

const func1_2 = () => console.log("Function 1");
const func2_2 = () => {
  for (let i = 0; i < 1000000; i++) {}
  console.log("Function 2");
};
const func3 = () => console.log("Function 3");
const fastestIndex = getIndexOfFastestFunction([func1_2, func2_2, func3]);
console.log(fastestIndex);
```

## 176. Function to get the n minimum elements from the provided array.

```javascript
function getNMinElements(arr, n) {
  return arr.slice(0, n).sort((a, b) => a - b);
}

const arrayForNMin = [5, 2, 8, 1, 7];
const nMinElements = getNMinElements(arrayForNMin, 3);
console.log(nMinElements);
```

## 177. Function to get the minimum value of an array, after mapping each element to a value using the provided function.

```javascript
function getMinValueWithMapping(arr, mappingFunction) {
return Math.min(...arr.map(mappingFunction));
}

const arrayForMinMapping = [10, 20, 30, 40, 50];
const minValue = getMinValueWithMapping(
arrayForMinMapping,
(value) => value \* 2
);
console.log(minValue);
```

## 178. Function to create a new object from the combination of two or more objects.

```javascript
function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

const obj1_2 = { a: 1, b: 2 };
const obj2_2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(obj1_2, obj2_2);
console.log(mergedObject);
```

## 179. Function to compare two objects to determine if the first contains equivalent property values to the second one.

```javascript
function compareObjects(obj1, obj2, compareFunction) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => compareFunction(obj1[key], obj2[key]));
}

const objA2 = { a: 1, b: 2, c: 3 };
const objB2 = { a: 1, b: 2, c: 3 };
const objC = { a: 1, b: 2, c: 4 };
const areEquivalent = compareObjects(objA2, objB2, (a, b) => a === b);
console.log(areEquivalent);
const areEquivalent2 = compareObjects(objA2, objC, (a, b) => a === b);
console.log(areEquivalent2);
```

## 180. Function to create an object from the specified object, where all keys are in lowercase.

```javascript
function convertKeysToLowerCase(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.toLowerCase(), value])
  );
}

const originalObject6 = { Name: "John", Age: 25, Country: "USA" };
const lowercasedObject = convertKeysToLowerCase(originalObject6);
console.log(lowercasedObject);
```

## 181. Function to get the last element from a given array.

```javascript
function getLastElement(arr) {
  return arr[arr.length - 1];
}

const arrayForLastElement = ["apple", "orange", "banana"];
const lastElement = getLastElement(arrayForLastElement);
console.log(lastElement);
```

## 182. Function to join all elements of an array into a string and return this string. Use a separator and an end separator.

```javascript
function joinArrayWithSeparators(arr, separator, endSeparator) {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0].toString();
  } else {
    const lastElement = arr.pop();
    return arr.join(separator) + endSeparator + lastElement;
  }
}

const arrayForJoin = ["apple", "orange", "banana"];
const joinedString = joinArrayWithSeparators(arrayForJoin, ", ", " and ");
console.log(joinedString);
```

## 183. Function to check if the provided argument is valid JSON.

```javascript
function isValidJSON(data) {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}

const validJSONData = '{"name": "John", "age": 25}';
const invalidJSONData = '{name: "John", age: 25}';
console.log(isValidJSON(validJSONData));
console.log(isValidJSON(invalidJSONData));
```

## 184. Function to check if a given string is upper case or not.

```javascript
function isUpperCase(str) {
  return str === str.toUpperCase();
}

const upperCaseString = "HELLO";
const mixedCaseString = "Hello";
console.log(isUpperCase(upperCaseString));
console.log(isUpperCase(mixedCaseString));
```

## 185. Function that returns true if the specified value is undefined, false otherwise.

```javascript
function isUndefined(value) {
  return typeof value === "undefined";
}

const definedValue = 42;
const undefinedValue = undefined;
console.log(isUndefined(definedValue));
console.log(isUndefined(undefinedValue));
```

## 186. Function to check if the given argument is a symbol.

```javascript
function isSymbol(value) {
  return typeof value === "symbol";
}

const symbolValue = Symbol("example");
const nonSymbolValue = "not a symbol";
console.log(isSymbol(symbolValue));
console.log(isSymbol(nonSymbolValue));
```

## 187. Function to check if the given argument is a string.

```javascript
function isString(value) {
  return typeof value === "string";
}

const stringValue = "Hello, World!";
const nonStringValue = 42;
console.log(isString(stringValue));
console.log(isString(nonStringValue));
```

## 188. Function that returns 1 if the array is sorted in ascending order, -1 if it is sorted in descending order, or 0 if it is not sorted.

```javascript
function checkArraySorting(arr) {
  const ascSorted = [...arr].sort((a, b) => a - b);
  const descSorted = [...arr].sort((a, b) => b - a);

  if (JSON.stringify(arr) === JSON.stringify(ascSorted)) {
    return 1;
  } else if (JSON.stringify(arr) === JSON.stringify(descSorted)) {
    return -1;
  } else {
    return 0;
  }
}

const ascendingArray = [1, 2, 3, 4, 5];
const descendingArray = [5, 4, 3, 2, 1];
const unsortedArray = [3, 1, 4, 2, 5];
console.log(checkArraySorting(ascendingArray));
console.log(checkArraySorting(descendingArray));
console.log(checkArraySorting(unsortedArray));
```

## 189. Function to return true if an object looks like a Promise, false otherwise.

```javascript
function looksLikePromise(obj) {
  return obj && typeof obj.then === "function";
}

const promiseObject = new Promise((resolve) => resolve("Example"));
const nonPromiseObject = { data: "Example" };
console.log(looksLikePromise(promiseObject));
console.log(looksLikePromise(nonPromiseObject));
```

## 190. Function to return a boolean determining if the passed value is primitive or not.

```javascript
function isPrimitive(value) {
  return value !== Object(value);
}

const primitiveValue = 42;
const nonPrimitiveValue = { data: "Example" };
console.log(isPrimitive(primitiveValue));
console.log(isPrimitive(nonPrimitiveValue));
```

## 191. Function to check if the provided integer is a prime number or is not.

```javascript
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const primeNumber = 17;
const nonPrimeNumber = 15;
console.log(isPrimeNumber(primeNumber));
console.log(isPrimeNumber(nonPrimeNumber));
```

## 192. Function to check if the provided value is an object created by the Object constructor.

```javascript
function isObjectCreatedByObjectConstructor(value) {
  return value && value.constructor === Object;
}

const objectCreatedByConstructor = new Object();
const nonObjectCreatedByConstructor = { data: "Example" };
console.log(isObjectCreatedByObjectConstructor(objectCreatedByConstructor));
console.log(isObjectCreatedByObjectConstructor(nonObjectCreatedByConstructor));
```

## 193. Function to check if a value is object-like.

```javascript
function isObjectLike(value) {
  return value !== null && typeof value === "object";
}

const objectLikeValue = { data: "Example" };
const nonObjectLikeValue = 42;
console.log(isObjectLike(objectLikeValue));
console.log(isObjectLike(nonObjectLikeValue));
```

## 194. Function to get a boolean determining if the passed value is an object or not.

```javascript
function isObject(value) {
  return typeof value === "object" && value !== null;
}

const objectValue = { data: "Example" };
const nonObjectValue = "Hello";
console.log(isObject(objectValue));
console.log(isObject(nonObjectValue));
```

## 195. Function to check if a given argument is a number.

```javascript
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

const numericValue = 42;
const nonNumericValue = "Hello";
console.log(isNumber(numericValue));
console.log(isNumber(nonNumericValue));
```

## 196. Function that will return true if the specified value is null, false otherwise.

```javascript
function isNull(value) {
  return value === null;
}

const nullValue = null;
const nonNullValue = "Hello";
console.log(isNull(nullValue));
console.log(isNull(nonNullValue));
```

## 197. Function to check if a string is lower case or not.

```javascript
function isLowerCase(str) {
  return str === str.toLowerCase();
}

const lowerCaseString = "hello";
const mixedCaseString2 = "Hello";
console.log(isLowerCase(lowerCaseString));
console.log(isLowerCase(mixedCaseString2));
```

## 198. Function to check if the given argument is a function.

```javascript
function isFunction(value) {
  return typeof value === "function";
}

const functionValue = () => console.log("Function");
const nonFunctionValue = "Hello";
console.log(isFunction(functionValue));
console.log(isFunction(nonFunctionValue));
```

## 199. Function to return true if the given number is even, false otherwise.

```javascript
function isEvenNumber(num) {
  return num % 2 === 0;
}

const evenNumber = 10;
const oddNumber = 7;
console.log(isEvenNumber(evenNumber));
console.log(isEvenNumber(oddNumber));
```

## 200. Function to return true if a value is an empty object, collection, map, or set.

```javascript
function isEmpty(value) {
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  } else if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  } else {
    return false;
  }
}

const emptyObject = {};
const nonEmptyObject = { data: "Example" };
console.log(isEmpty(emptyObject));
console.log(isEmpty(nonEmptyObject));
```

## 201. Function to check if the first numerical argument is divisible by the second one.

```javascript
function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

const divisibleValue = 10;
const divisor = 2;
console.log(isDivisible(divisibleValue, divisor));
```

## 202. Function to check if a given number is even or not.

```javascript
function isEven5(num) {
  return num % 2 === 0;
}

const evenNumber2 = 8;
const oddNumber2 = 13;
console.log(isEven5(evenNumber2));
console.log(isEven5(oddNumber2));
```

## 203. Function to determine if the current runtime environment is a browser.

```javascript
function isBrowserEnvironment() {
  return (
    typeof window !== "undefined" && typeof window.document !== "undefined"
  );
}

console.log(isBrowserEnvironment());
```

## 204. Function that checks if the given argument is a native Boolean element.

```javascript
function isNativeBoolean(value) {
  return typeof value === "boolean";
}

const booleanValue = true;
const nonBooleanValue = "Hello";
console.log(isNativeBoolean(booleanValue));
console.log(isNativeBoolean(nonBooleanValue));
```

## 205. Function to check if the provided argument is an array (i.e., iterable).

```javascript
function isArray(value) {
  return Array.isArray(value);
}

//Example:
//const arrayExample = [1, 2, 3];
//const nonArrayExample = { data: "Example" };
//console.log(isArray(arrayExample));
//console.log(isArray(nonArrayExample));
```

## 206. Function to check if a given string is an anagram of another string (case-insensitive, ignores spaces, punctuation, and special characters).

```javascript
function areAnagrams(str1, str2) {
  const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
  return cleanString(str1) === cleanString(str2);
}

const anagramStr1 = "Listen";
const anagramStr2 = "Silent";
const nonAnagramStr = "Hello";
console.log(areAnagrams(anagramStr1, anagramStr2));
console.log(areAnagrams(anagramStr1, nonAnagramStr));
```

## 207. Function that returns true if the given string is an absolute URL, false otherwise.

```javascript
function isAbsoluteUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

const absoluteUrl = "https:##example.com/path";
const relativeUrl = "/path";
console.log(isAbsoluteUrl(absoluteUrl));
console.log(isAbsoluteUrl(relativeUrl));
```

## 208. Function to check if the provided value is of the specified type.

```javascript
function isOfType(value, type) {
  return typeof value === type;
}

const stringValue2 = "Hello";
const numberValue2 = 42;
console.log(isOfType(stringValue2, "string"));
console.log(isOfType(numberValue2, "string"));
```

## 209. Get a list of elements in both arrays using a comparator function.

```javascript
function intersectionWith(arr1, arr2, comparator) {
  return arr1.filter((item1) => arr2.some((item2) => comparator(item1, item2)));
}

const arrA = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const arrB = [
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

const comparator2 = (a, b) => a.id === b.id;

console.log(intersectionWith(arrA, arrB, comparator2));
```

## 210. Get a list of elements in both arrays after applying a function to each element.

```javascript
function intersectionAfterMapping(arr1, arr2, mapper) {
const set = new Set(arr1.map(mapper));
return arr2.filter((item) => set.has(mapper(item)));
}

const arrX = [1, 2, 3];
const arrY = [2, 3, 4];

const mapperFn = (x) => x \* 2;

console.log(intersectionAfterMapping(arrX, arrY, mapperFn));
```

## 211. Get a list of elements that exist in both arrays.

```javascript
function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const array1_5 = [1, 2, 3, 4];
const array2_5 = [3, 4, 5, 6];

console.log(intersection(array1_5, array2_5));
```

## 212. Create an n-dimensional array with a given value.

```javascript
function createNDArray(dimensions, value) {
  if (dimensions.length === 0) {
    return value;
  }

  const array = new Array(dimensions[0]);
  for (let i = 0; i < array.length; i++) {
    array[i] = createNDArray(dimensions.slice(1), value);
  }

  return array;
}

console.log(createNDArray([2, 3], 0));
```

## 213. Initialize and fill an array with specified values.

```javascript
function initializeArray(length, initialValue) {
  return Array.from({ length }, () => initialValue);
}

console.log(initializeArray(5, "Hello"));
```

## 214. Initialize an array containing numbers in the specified range (in reverse).

```javascript
function initializeReversedRange(start, end, step) {
  const result = [];
  for (let i = end; i >= start; i -= step) {
    result.push(i);
  }
  return result;
}

console.log(initializeReversedRange(1, 10, 2));
```

## 215. Get all elements of an array except the last one.

```javascript
function getAllExceptLast(arr) {
  return arr.slice(0, -1);
}

const originalArray5 = [1, 2, 3, 4, 5];
console.log(getAllExceptLast(originalArray5));
```

## 216. Get all indices of a specified value in an array.

```javascript
function getAllIndicesOf(arr, val) {
  return arr.reduce(
    (indices, element, index) =>
      element === val ? [...indices, index] : indices,
    []
  );
}

const arrayWithValues = [1, 2, 3, 2, 4, 2, 5];
console.log(getAllIndicesOf(arrayWithValues, 2));
```

## 217. Check if a number falls within a given range.

```javascript
function isInRange(number, start, end) {
  return number >= start && number <= end;
}

console.log(isInRange(5, 2, 8));
```

## 218. Get the number of times a function executed per second.

```javascript
function getHz(executionFunction) {
  const start = Date.now();
  let count = 0;
  while (Date.now() - start < 1000) {
    executionFunction();
    count++;
  }
  return count;
}

const sampleFunction = () => console.log("Executing function");
console.log(getHz(sampleFunction));
```

## 219. Calculate the Hamming distance between two values.

```javascript
function hammingDistance(value1, value2) {
  if (value1.length !== value2.length) {
    throw new Error("Input values must have the same length");
  }

  let distance = 0;
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      distance++;
    }
  }

  return distance;
}

const str1 = "karolin";
const str2 = "kathrin";

console.log(hammingDistance(str1, str2));
```

## 220. Get the native type of a value.

```javascript
function getNativeType(value) {
  const type = Object.prototype.toString.call(value);
  return type.substring(8, type.length - 1).toLowerCase();
}

console.log(getNativeType([]));
```

## 221. Get a string like HH:MM:SS from a Date object.

```javascript
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
console.log(formatTime(currentDate));
```

## 222. Initialize an array containing numbers in the specified range with a given step (error if step equals 1).

```javascript
function initializeRangeWithStep(start, end, step) {
  if (step === 1) {
    throw new Error("Step must not be equal to 1");
  }

  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(initializeRangeWithStep(1, 10, 2));
```

## 223. Calculate the greatest common divisor between two or more numbers.

```javascript
function gcd(...numbers) {
  const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

  return numbers.reduce((currentGCD, num) => findGCD(currentGCD, num));
}

console.log(gcd(36, 48, 60));
```

## 224. Remove HTML/XML tags from strings.

```javascript
function removeTags(inputString) {
  return inputString.replace(/<[^>]\*>/g, "");
}

const htmlString = "<p>This is <b>bold</b> text</p>";
console.log(removeTags(htmlString));
```

## 225. Get the standard deviation of an array of numbers.

```javascript
function standardDeviation(numbers) {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
  const meanSquaredDifference =
    squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) /
    numbers.length;
  return Math.sqrt(meanSquaredDifference);
}

//Example:
//const data2 = [1, 2, 3, 4, 5];
//console.log(standardDeviation(data2));
```

## 226. Get n random elements with unique keys from an array up to the size of the array.

```javascript
function getRandomElements(arr, n) {
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

const originalArrayForRandom = [1, 2, 3, 4, 5];
console.log(getRandomElements(originalArrayForRandom, 3));
```

## 227. Remove elements from an array for which the given function returns false.

```javascript
function filterByFunction(arr, filterFn) {
  return arr.filter(filterFn);
}

const arrayToFilter2 = [1, 2, 3, 4, 5];
const isEven6 = (num) => num % 2 === 0;
console.log(filterByFunction(arrayToFilter2, isEven6));
```

## 228. Log the name of a function.

```javascript
function logFunctionName(fn) {
  console.log(fn.name || "Anonymous function");
}

function namedFunction() {}
logFunctionName(namedFunction);
```

## 229. Convert a string from camelcase.

```javascript
function fromCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

const camelCaseString = "camelCaseExample";
console.log(fromCamelCase(camelCaseString));
```

## 230. Generate the human-readable format from the given number of milliseconds.

```javascript
function formatMilliseconds(milliseconds) {
const seconds = Math.floor((milliseconds / 1000) % 60);
const minutes = Math.floor((milliseconds / (1000 _ 60)) % 60);
const hours = Math.floor((milliseconds / (1000 _ 60 \* 60)) % 24);

return `${hours}h ${minutes}m ${seconds}s`;
}

const exampleMilliseconds = 3665000;
console.log(formatMilliseconds(exampleMilliseconds));
```

## 231. Iterate over all properties of an object in reverse, running a callback for each one.

```javascript
function iterateObjectInReverse(obj, callback) {
  const keys = Object.keys(obj).reverse();
  keys.forEach((key) => callback(obj[key], key, obj));
}

const exampleObject2 = { a: 1, b: 2, c: 3 };
iterateObjectInReverse(exampleObject2, (value, key) => {
  console.log(`${key}: ${value}`);
});
```

## 232. Take a function as an argument, then make the first argument the last.

```javascript
function moveFirstArgumentLast(fn) {
  return (...args) => {
    const [first, ...rest] = args;
    return fn(...rest, first);
  };
}

const originalFunction = (a, b, c) => `${a} - ${b} - ${c}`;
const newFunction = moveFirstArgumentLast(originalFunction);
console.log(newFunction(1, 2, 3));
```

## 233. Flatten an object with paths for keys.

```javascript
function flattenObject(obj, path = []) {
  return Object.keys(obj).reduce((acc, key) => {
    const newPath = path.concat([key]);
    if (typeof obj[key] === "object") {
      return acc.concat(flattenObject(obj[key], newPath));
    }
    return acc.concat({ path: newPath, value: obj[key] });
  }, []);
}

const nestedObject2 = { a: { b: { c: 1, d: 2 } }, e: 3 };
console.log(flattenObject(nestedObject2));
```

## 234. Flatten a given array to the specified depth.

```javascript
function flattenArrayToDepth(arr, depth = 1) {
  return arr.reduce((flat, item) => {
    return flat.concat(
      depth > 1 && Array.isArray(item)
        ? flattenArrayToDepth(item, depth - 1)
        : item
    );
  }, []);
}

const nestedArrayToFlatten = [1, [2, [3, [4]], 5]];
console.log(flattenArrayToDepth(nestedArrayToFlatten, 2));
```

## 235. Get the last key that satisfies the provided testing function.

```javascript
function getLastKeyByCondition(obj, condition) {
  const keys = Object.keys(obj);
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    if (condition(obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
}

const exampleObjectForLastKey = { a: 1, b: 2, c: 3, d: 4 };
const conditionForLastKey = (value) => value % 2 === 0;
console.log(
  getLastKeyByCondition(exampleObjectForLastKey, conditionForLastKey)
);
```

## 236. Get the first key that satisfies the provided testing function.

```javascript
function getFirstKeyByCondition(obj, condition) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (condition(obj[key], key, obj)) {
      return key;
    }
  }
  return undefined;
}

const exampleObjectForFirstKey = { a: 1, b: 2, c: 3, d: 4 };
const conditionForFirstKey = (value) => value % 2 === 0;
console.log(
  getFirstKeyByCondition(exampleObjectForFirstKey, conditionForFirstKey)
);
```

## 237. Generate an array containing the Fibonacci sequence, up to the nth term.

```javascript
function generateFibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(generateFibonacci(7));
```

## 238. Calculate the factorial of a number.

```javascript
function factorial(number) {
if (number === 0 || number === 1) {
return 1;
}
return number \* factorial(number - 1);
}

console.log(factorial(5));
```

## 239. Escape a string to use in a regular expression.

```javascript
function escapeRegExp(input) {
  return input.replace(/[.\*+?^${}()|[\]\\]/g, "\\$&");
}

const inputForRegExp = "Hello (world)";
const escapedInput = escapeRegExp(inputForRegExp);
const regex = new RegExp(escapedInput);
console.log(regex.test("Hello (world)"));
```

## 240. Check if the parent element contains the child element.

```javascript
function isParentContainsChild(parent, child) {
  return parent.contains(child);
}

const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
console.log(isParentContainsChild(parentElement, childElement));
```

## 241. Remove elements from an array until the passed function returns true. Returns the remaining elements.

```javascript
function removeUntil(arr, conditionFn) {
  while (arr.length > 0 && !conditionFn(arr[0])) {
    arr.shift();
  }
  return arr;
}

const arrayForRemoveUntil = [1, 2, 3, 4, 5];
const conditionForRemoveUntil = (value) => value > 2;
console.log(removeUntil(arrayForRemoveUntil, conditionForRemoveUntil));
```

## 242. Remove elements from the end of an array until the passed function returns true. Returns the remaining elements.

```javascript
function removeUntilEnd(arr, conditionFn) {
  while (arr.length > 0 && !conditionFn(arr[arr.length - 1])) {
    arr.pop();
  }
  return arr;
}

const arrayForRemoveUntilEnd = [1, 2, 3, 4, 5];
const conditionForRemoveUntilEnd = (value) => value < 4;
console.log(removeUntilEnd(arrayForRemoveUntilEnd, conditionForRemoveUntilEnd));
```

## 243. Get the distance between two given points.

```javascript
function getDistance(point1, point2) {
const dx = point1.x - point2.x;
const dy = point1.y - point2.y;
return Math.sqrt(dx _ dx + dy _ dy);
}

const pointA = { x: 1, y: 2 };
const pointB = { x: 4, y: 6 };
console.log(getDistance(pointA, pointB));
```

## 244. Get the difference between two given arrays.

```javascript
function arrayDifference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}

const arrayDiff1 = [1, 2, 3, 4, 5];
const arrayDiff2 = [3, 4, 5, 6, 7];
console.log(arrayDifference(arrayDiff1, arrayDiff2));
```

## 245. Invoke the provided function after a few milliseconds.

```javascript
function delayExecution(callback, milliseconds) {
  setTimeout(callback, milliseconds);
}

delayExecution(() => console.log("Delayed execution"), 2000);
```

## 246. Convert angles from degrees to radians.

```javascript
function degreesToRadians(degrees) {
return degrees \* (Math.PI / 180);
}

const degreesValue = 45;
console.log(degreesToRadians(degreesValue));
```

## 247. Assign default values to all undefined properties in an object.

```javascript
function assignDefaultValues(obj, defaults) {
  return { ...defaults, ...obj };
}

const userOptions = { name: "John", age: undefined, city: "New York" };
const defaultOptions = { name: "Guest", age: 25, city: "Unknown" };
const resultOptions = assignDefaultValues(userOptions, defaultOptions);
console.log(resultOptions);
```

## 248. Deep flatten an array.

```javascript
function deepFlatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val) : val),
    []
  );
}

const nestedArrayToDeepFlatten = [1, [2, [3, [4]], 5]];
console.log(deepFlatten(nestedArrayToDeepFlatten));
```

## 249. Get the current URL.

```javascript
function getCurrentURL() {
  return window.location.href;
}

console.log(getCurrentURL());
```

## 250. Create an element from a string (without appending it to the document).

```javascript
function createElementFromString(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

const newElement = createElementFromString("<p>New Element</p>");
console.log("250. Created Element:", newElement);
```

## 251. Write a JavaScript program to write a JSON object to a file.

```javascript
function writeJSONObjectToFile(filePath, jsonObject) {
  localStorage.setItem(filePath, JSON.stringify(jsonObject, null, 2));
}

const jsonExample = { name: "John", age: 30, city: "New York" };
writeJSONObjectToFile("example.json", jsonExample);
```

## 252. Write a JavaScript program to convert the values of RGB components to a color code.

```javascript
function rgbToColorCode(red, green, blue) {
  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

const colorCode = rgbToColorCode(255, 0, 128);
console.log(colorCode);
```

## 253. Write a JavaScript program to generate a UUID in a browser.

```javascript
function generateUUIDInBrowser() {
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
const r = (Math.random() \* 16) | 0;
const v = c === "x" ? r : (r & 0x3) | 0x8;
return v.toString(16);
});
}

const uuidBrowser = generateUUIDInBrowser();
console.log(uuidBrowser);
```

## 254. Write a JavaScript program to generate a UUID in Node.JS using crypto API.

```javascript
function generateUUIDInBrowser() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    return bytes.reduce(
      (acc, byte) => acc + byte.toString(16).padStart(2, "0"),
      ""
    );
  } else {
    throw new Error(
      "Random number generator not supported in this environment."
    );
  }
}
```

## 255. Write a JavaScript program that returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.

```javascript
function some(collection, predicate) {
  for (const element of collection) {
    if (predicate(element)) {
      return true;
    }
  }
  return false;
}

const numbers12 = [1, 2, 3, 4, 5];
const isEven7 = (num) => num % 2 === 0;
console.log(some(numbers12, isEven7));
```

## 256. Write a JavaScript program to check if two given numbers are approximately equal to each other.

```javascript
function approximatelyEqual(num1, num2, epsilon = 1e-10) {
  return Math.abs(num1 - num2) < epsilon;
}

console.log(approximatelyEqual(0.1 + 0.2, 0.3));
```

## 257. Write a JavaScript program to convert a 2D array to a comma-separated value (CSV) string.

```javascript
function arrayToCSV(data) {
  return data.map((row) => row.join(",")).join("\n");
}

const twoDArray = [
  ["Name", "Age", "City"],
  ["John", 30, "New York"],
  ["Jane", 25, "Los Angeles"],
];

const csvString3 = arrayToCSV(twoDArray);
console.log(csvString3);
```

## 258. Write a JavaScript program to create a function that accepts up to n arguments, ignoring any additional arguments.

```javascript
function ignoreAdditionalArguments(fn, n) {
  return function (...args) {
    return fn(...args.slice(0, n));
  };
}

const addThreeNumbers3 = (a, b, c) => a + b + c;
const addOnlyTwoNumbers = ignoreAdditionalArguments(addThreeNumbers3, 2);
console.log(addOnlyTwoNumbers(1, 2, 3));
```

## 259. Write a JavaScript program to decode a string of data encoded using base-64 encoding.

```javascript
function base64Decode(encodedString) {
  const decodedString = atob(encodedString);
  return decodedString;
}

const encodedString = "SGVsbG8gV29ybGQh";
const decodedString = base64Decode(encodedString);
console.log(decodedString);
```

## 260. Write a JavaScript program to evaluate the binomial coefficients of two integers n and k.

```javascript
function binomialCoefficient(n, k) {
  if (k === 0 || k === n) {
    return 1;
  }
  return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
}

console.log(binomialCoefficient(5, 2));
```

## 261. Write a JavaScript program that returns true if the page bottom is visible, false otherwise.

```javascript
function isPageBottomVisible() {
  return (
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
  );
}

window.onscroll = function () {
  console.log(isPageBottomVisible());
};
```

## 262. Write a JavaScript program to create a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

```javascript
function stringToBase64Ascii(string) {
  return btoa(unescape(encodeURIComponent(string)));
}

const asciiString = "Hello World!";
const base64Ascii = stringToBase64Ascii(asciiString);
console.log(base64Ascii);
```

## 263. Write a JavaScript program to capitalize the first letter of a string.

```javascript
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const inputString2 = "hello world";
const capitalizedString = capitalizeFirstLetter(inputString2);
console.log(capitalizedString);
```

## 264. Write a JavaScript program to capitalize the first letter of every word in a string.

```javascript
function capitalizeEveryWord(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

const sentence = "hello world and universe";
const capitalizedSentence = capitalizeEveryWord(sentence);
console.log(capitalizedSentence);
```

## 265. Write a JavaScript program to chunk an array into smaller arrays of a specified size.

```javascript
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(arrayToChunk, 3);
console.log(chunkedArray);
```

## 266. Write a JavaScript program to clamp a number within the inclusive range specified by the given boundary values a and b.

```javascript
function clampNumber(number, a, b) {
  return Math.max(a, Math.min(number, b));
}

const numberToClamp = 5;
const clampedNumber = clampNumber(numberToClamp, 1, 10);
console.log(clampedNumber);
```

## 267. Write a JavaScript program to calculate the midpoint between two pairs of points.

```javascript
function calculateMidpoint(point1, point2) {
  const x = (point1[0] + point2[0]) / 2;
  const y = (point1[1] + point2[1]) / 2;
  return [x, y];
}

const pointA2 = [1, 2];
const pointB2 = [4, 6];
const midpoint = calculateMidpoint(pointA2, pointB2);
console.log(midpoint);
```

## 268. Write a JavaScript program to find the index of an array item in a for loop.

```javascript
function findIndexInForLoop(array, targetItem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetItem) {
      return i;
    }
  }
  return -1;
}

const arrayToSearch = ["apple", "banana", "orange", "grape"];
const targetItemToFind = "orange";
const foundIndex = findIndexInForLoop(arrayToSearch, targetItemToFind);
console.log(foundIndex);
```
