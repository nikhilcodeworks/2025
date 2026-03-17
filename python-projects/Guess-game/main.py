# Welcome message
print("Welcome to the guess game")
print("Enter a number between 1-100")

# Generate a random number between 1 and 100
import random
rand_num = random.randint(1, 100)
print(rand_num)  # Display the random number (for testing purposes)

# Prompt user to choose difficulty level
print("Choose level: 'hard' or 'easy'")
level = input().lower()  # Read user input and convert to lowercase

# Initialize variable for number of tries
tries = 0

# Function to set the number of tries based on chosen level
def levelchosen():
    global tries  # Access the global variable 'tries' from within the function
    if level == "easy":
        tries = 10
        print(f"You have {tries} tries.")
    elif level == "hard":
        tries = 5
        print(f"You have {tries} tries.")
    else:
        print('Wrong input')

# Call the function to set the number of tries
levelchosen()

# Function to handle the guessing game logic
def guess():
    global tries  # Access the global variable 'tries' from within the function

    # Loop until the user runs out of tries
    while tries > 0:
        inputnum = int(input("Enter your guess: "))  # Prompt for user's guess and convert to integer
        if inputnum == rand_num:
            print("You win!")  # Print message if the guess is correct
            break  # Exit the loop since the game is won
        elif inputnum > rand_num:
            print("Your guess is too high.")  # Inform the user if the guess is too high
            tries -= 1  # Decrease the number of tries remaining
            print(f"Tries left: {tries}")  # Display the remaining number of tries
        elif inputnum < rand_num:
            print("Your guess is too low.")  # Inform the user if the guess is too low
            tries -= 1  # Decrease the number of tries remaining
            print(f"Tries left: {tries}")  # Display the remaining number of tries
        else:
            print('Wrong input')  # Inform the user if the input is not valid

    # Check if the user has run out of tries
    if tries == 0:
        print(f"Game over. The correct number was {rand_num}.")  # Display the correct number when the game ends

# Call the function to start the guessing game
guess()
