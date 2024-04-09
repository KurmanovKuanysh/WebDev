# Read the dimensions of the cuboid and the value of n
x = int(input())
y = int(input())
z = int(input())
n = int(input())

# Generate a list of all possible coordinates
coordinates = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1)]

# Filter out the coordinates where the sum is not equal to n
filtered_coordinates = [coord for coord in coordinates if sum(coord) != n]

# Print the filtered coordinates
print(filtered_coordinates)
