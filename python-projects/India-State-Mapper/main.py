import turtle
import pandas as pd

# Create a screen object
screen = turtle.Screen()

# Set the title of the screen
screen.title("India Map")

# Read the data from CSV
data = pd.read_csv("./data.csv")
state = data.states.to_list()

# Set the dimensions of the screen (adjust as needed)
screen.setup(width=700, height=700)

# Set the background image
img = "./map.gif"
screen.bgpic(img)

# Counter for guesses
x = 0

# List to keep track of guessed states
guess_list = []

# Main loop to handle user input and display guessed states
is_ON = True
while is_ON:
    # Take user input for guessing state names
    user_guess = screen.textinput(title=f"{x}/28 Guess the State", prompt="ENTER THE NAME").lower()
    
    # Check if the user wants to exit or if all states are guessed
    if user_guess == "exit" or x == 28:
        is_ON = False
    
    # Check if the state has already been guessed
    if user_guess in guess_list:
        pass
    elif user_guess in state:
        # Increment the counter
        x += 1
        
        # Create a turtle to mark the guessed state
        point = turtle.Turtle()
        point.hideturtle()
        point.penup()
        
        # Find coordinates of the guessed state and move turtle there
        state_data = data[data.states == user_guess]
        point.goto(state_data.x.item(), state_data.y.item())
        
        # Mark the state with blue color and write its name
        point.color("blue")
        point.write(user_guess)
        
        # Add the guessed state to the list
        guess_list.append(user_guess)

# Keep the window open
screen.mainloop()
