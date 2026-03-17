from turtle import *  # Import everything from the turtle module
import time  # Import the time module for sleep functionality
import random  # Import the random module for generating random numbers

# Setup the screen
screen = Screen()
screen.setup(width=500, height=500)  # Set screen dimensions
screen.bgcolor("black")  # Set background color
screen.tracer(0)  # Turn off animation

screen.listen()  # Allow the screen to listen for events (like key presses)

snake_segments = []  # List to store segments of the snake
DIRXN = [0, -20, -40]  # Possible x-directions for the snake segments
UP = 90
DOWN = 270
RIGHT = 0
LEFT = 180  # Constants representing directions

food = 0  # Variable to track food eaten by the snake

# Score display
score = Turtle()
score.color("white")
score.penup()
score.hideturtle()
score.goto(0, 220)
score.write(f"Score = {food}", True, align="center", font=(10))

# Create initial food (green food, represented by a circle)
gf = Turtle('circle')
gf.color('white')
gf.penup()
randx = random.randint(-240, 240)  # Random x-coordinate within the screen
randy = random.randint(-240, 240)  # Random y-coordinate within the screen
gf.goto(randx, randy)

# Function to add a new segment to the snake
def add_segment():
    segment = Turtle("square")
    segment.penup()
    segment.color("white")
    snake_segments.append(segment)

# Create initial segments of the snake
for position in DIRXN:
    square = Turtle("square")
    square.penup()
    square.color("white")
    square.goto((position, 0))
    snake_segments.append(square)

# Functions to handle direction changes
def up():
    if snake_segments[0].heading() != DOWN:
        snake_segments[0].setheading(UP)

def down():
    if snake_segments[0].heading() != UP:
        snake_segments[0].setheading(DOWN)

def left():
    if snake_segments[0].heading() != RIGHT:
        snake_segments[0].setheading(LEFT)

def right():
    if snake_segments[0].heading() != LEFT:
        snake_segments[0].setheading(RIGHT)

is_Game = True  # Boolean to control game loop

while is_Game:
    screen.update()  # Update the screen
    time.sleep(0.1)  # Pause to control the speed of the game

    # Move each segment of the snake
    for segment in range(len(snake_segments) - 1, 0, -1):
        x = snake_segments[segment - 1].xcor()
        y = snake_segments[segment - 1].ycor()
        snake_segments[segment].goto(x, y)
    
    # Move the head of the snake
    snake_segments[0].fd(20)

    # Listen for key presses to change direction
    screen.onkey(up, "Up")
    screen.onkey(down, "Down")
    screen.onkey(left, "Left")
    screen.onkey(right, "Right")

    # Check if snake eats the food
    if snake_segments[0].distance(gf) < 14:
        score.clear()
        score.goto(0, 220)
        food += 1
        randx = random.randint(-240, 240)
        randy = random.randint(-240, 240)
        gf.goto(randx, randy)
        add_segment()  # Add a new segment to the snake
        score.write(f"Score = {food}", True, align="center", font=(10))

    # Check if snake hits the wall (game over condition)
    if snake_segments[0].xcor() > 250 or snake_segments[0].xcor() < -250 or \
            snake_segments[0].ycor() < -250 or snake_segments[0].ycor() > 250:
        score.clear()
        score.goto(0, 0)
        score.write(f" GAME OVER", True, align="center", font=(20))
        is_Game = False

    # Check if snake collides with itself (game over condition)
    for segment in snake_segments[1:]:
        if snake_segments[0].distance(segment) < 10:
            score.clear()
            score.goto(0, 0)
            score.write(f" GAME OVER", True, align="center", font=(20))

screen.exitonclick()  # Exit the game on click
