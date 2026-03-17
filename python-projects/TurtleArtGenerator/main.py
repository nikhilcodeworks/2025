import turtle
from turtle import *
import random


choice = turtle.textinput(title="WELCOME", prompt="What would you like to see?\nOptions: Tritodec, Random Walk, Spirograph, Spot Painting")
  
tim=Turtle()
tim.shape("circle")
#triangle to decagon shape drawing

def tritodec():
    colors = [
        "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink",  
        "Cyan", "Magenta", "Lime", "Teal", "Lavender", "Brown", "Black",  
        "Gold", "Silver", "Gray", "Maroon", "Navy", "Olive", "SkyBlue", "Tan",  
        "Indigo", "Turquoise", "Coral",  "Salmon", "Khaki", "Violet", "Plum", 
        "DarkRed", "DarkGreen", "DarkBlue", "DarkOrange", "DarkViolet", "DarkGray",  
        "LightBlue", "LightGreen", "LightPink", "LightYellow", "LightCoral", 
        "DeepSkyBlue", "MediumPurple", "SlateGray", "SeaGreen", "Tomato",  
        "Chocolate", "Thistle", "Orchid", "FireBrick", "MidnightBlue"  
    ]
    for i in range(3,10):
        tim.color(random.choice(colors))   
        for j in range(i):
            tim.rt(360/i)
            tim.fd(100) 

#random walk 
def draw_random_walk():
    directions=[0,90,180,270]
    def random_color():
        r=random.randint(0,255)
        g=random.randint(0,255)
        b=random.randint(0,255)
        return (r,g,b)

    tim.speed(5)
    colormode(255)
    for i in range(1,100):
        tim.pencolor(random_color())
        tim.width(10)
        tim.fd(40)
        tim.setheading(random.choice(directions))

#spirograph
def draw_spirograph():
    for i in range(1,1000):
        tim.pencolor("blue")
        tim.speed(10)
        tim.circle(70)
        tim.rt(20)


# spot painting draw
def draw_spot_painting():
    color_list = [(202, 164, 109), (238, 240, 245), (150, 75, 49), (223, 201, 135), (52, 93, 124), (172, 154, 40), (140, 30, 19), (133, 163, 185), (198, 91, 71), (46, 122, 86), (72, 43, 35), (145, 178, 148), (13, 99, 71), (233, 175, 164), (161, 142, 158), (105, 74, 77), (55, 46, 50), (183, 205, 171), (36, 60, 74), (18, 86, 90), (81, 148, 129), (148, 17, 20), (14, 70, 64), (30, 68, 100), (107, 127, 153), (174, 94, 97), (176, 192, 209)]
    tim.penup()
    tim.hideturtle()
    colormode(255)
    tim.setheading(225)
    tim.fd(250)
    tim.setheading(360)

    def dot_printing():
        for dot in range(1,11):
            tim.dot(20,random.choice(color_list))
            tim.fd(50)
    for _ in range(1,6):
        dot_printing()
        tim.setheading(90)
        tim.fd(50)
        tim.setheading(180)
        tim.fd(50)
        dot_printing()
        tim.setheading(90)
        tim.fd(50)
        tim.setheading(360)
        tim.fd(50)

if choice.lower() == "tritodec":
    tritodec()
elif choice.lower() == "random walk":
    draw_random_walk()
elif choice.lower() == "spirograph":
    draw_spirograph()
elif choice.lower() == "spot painting":
    draw_spot_painting()


view = Screen()
view.exitonclick()
