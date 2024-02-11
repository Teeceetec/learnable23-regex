# learnable23-regex
This JavaScript program uses regular expressions to validate credit card numbers for Visa and Mastercard. By defining patterns that match the expected format of each type of card, we can determine the validity and type of the credit card number provided as input. Regex provides a powerful way to perform such pattern matching tasks efficiently, daaluu!!.

# Regular Expression Explanation:
1. ^: Asserts the start of the string.
2. 4: Matches the digit '4' for Visa cards or '5' for Mastercard cards.
3. [0-9]: Matches any digit from 0 to 9.
4. {15}: Matches exactly 15 occurrences of the preceding digit pattern for Visa cards, or {14} for Mastercard cards.
5. $: Asserts the end of the string.