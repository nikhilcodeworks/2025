import random

# Importing ASCII art and word list
from ascii import logo, smile, stages
from list import list

# Printing the Hangman logo
print(logo)
print("Welcome to Hangman!")

# Choosing a random word from the list
random_word = random.choice(list)
random_word_length = len(random_word)
# print(random_word)

# Creating a list to display the guessed letters
display = []
for _ in range(random_word_length):
    display.append("_")
print(display)

# Setting initial lives
lifes = 7

# Main game loop
while lifes > 0:
    # Getting user input
    user_guess = input("Enter Your Guess:")

    # Check if the user has already guessed the letter
    if user_guess in display:
        print("You've already guessed this letter.")

    # Checking if the guessed letter is in the word
    if user_guess in random_word:
        # Replacing underscores with the correctly guessed letter
        for position in range(random_word_length):
            letter = random_word[position]
            if letter == user_guess:
                display[position] = letter
        print(display)

        # Checking if the word has been completely guessed
        if "_" not in display:
            print("Congratulations! You win!")
            print(smile)
            break
    else:
        # Decreasing lives if the guessed letter is incorrect
        lifes -= 1
        print(f"Wrong guess. You have {lifes} lives left.")
        print(stages[lifes])

        # End game if no lives left
        if lifes == 0:
            print("Sorry, you lose.")
            print(f"The word was: {random_word}")
            break
