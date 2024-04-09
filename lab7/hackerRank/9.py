# Read the number of scores
n = int(input())

# Read the scores and split them into a list of integers
scores = list(map(int, input().split()))

# Remove duplicates and sort the scores in descending order
unique_scores = sorted(set(scores), reverse=True)

# Print the second highest score
print(unique_scores[1])
