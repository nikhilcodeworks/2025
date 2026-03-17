from turtle import *
from colors import turtle_colors
import random

y_direction=[-60 ,-30,0,30,60]

screen = Screen()

screen.setup(width=800, height=400)

def play():
    screen.bgcolor("black")
    user_choice =screen.textinput("welcome to Turtle Race" ,'choose your turtle no. \n1\n2\n3\n4\n5')
    all_turtles=[]
    race_on =False
    for new_index in range(0,5):
        new_turtle = Turtle()
        new_turtle.penup()
        new_turtle.shape('turtle')
        new_turtle.color(random.choice(turtle_colors))
        new_turtle.setpos(x=-390,y=y_direction[new_index])
        all_turtles.append(new_turtle)
    
    if user_choice:
        race_on=True
    
    while race_on:
        for tortoise in all_turtles:
            if tortoise.xcor()>390:
                race_on = False
                turtle_number = all_turtles.index(tortoise) + 1
                if turtle_number == int(user_choice):
                   print(f" you win !The winner is turtel{turtle_number}")
                   result=f"you loose The winner is turtel{turtle_number}"
                   x= screen.textinput(result,"wanna Play again: YES OR NO")
                   if x.lower()=="yes":
                        screen.clearscreen()
                        play()
                   else:
                        screen.bye()
                if turtle_number != int(user_choice):
                    result=f"you loose The winner is turtel{turtle_number}"
                    x= screen.textinput(result,"wanna Play again: YES OR NO")
                    if x.lower()=="yes":
                        screen.clearscreen()
                        play()
                    else:
                         screen.bye()
                        
            tortoise.forward(random.randint(1, 30))
play()
screen.exitonclick()
