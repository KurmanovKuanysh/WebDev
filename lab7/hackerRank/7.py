# Read the integer from input
n = int(input())

# Initialize an empty string to store the result
result = ""

# Loop from 1 to n and concatenate each number to the result string
for i in range(1, n + 1):
    result += str(i)

# Print the result
print(result)
