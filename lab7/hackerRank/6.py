def is_leap(year):
    # If the year is evenly divisible by 4
    if year % 4 == 0:
        # If the year is evenly divisible by 100
        if year % 100 == 0:
            # If the year is evenly divisible by 400
            if year % 400 == 0:
                return True  # It's a leap year
            else:
                return False  # Not a leap year
        else:
            return True  # It's a leap year
    else:
        return False  # Not a leap year

# Read the year from input
year = int(input())

# Print the result of is_leap function
print(is_leap(year))
