import arcade
import random
import math


class Ball:
    def __init__(self, radius, x=0, y=0, vx=0, vy=0, 
                 bounce=1, gravity=500, color=(0, 0, 0)):
        self.radius = radius
        self.x = x
        self.y = y
        self.vy = vy
        self.vx = vx
        self.bounce = bounce
        self.gravity = gravity
        self.color = color
        
    def update(self, dt):
        self.x = self.x + self.vx * dt
        self.y = self.y + self.vy * dt - self.gravity * dt**2 / 2
        self.vy = self.vy - self.gravity * dt
        
    def collide(self, width, height):
        r = self.radius
        
        # Colisao em x
        if self.x < r and self.vx < 0:
            self.vx = -self.bounce * self.vx
        elif self.x > width - r and self.vx > 0:
            self.vx = -self.bounce * self.vx
        
        # Colisao em y
        if self.y < r and self.vy < 0:
            self.vy = -self.bounce * self.vy
        elif self.y > height - r and self.vy > 0:
            self.vy = -self.bounce * self.vy
        
    def draw(self, dt):
        arcade.draw_circle_filled(
            self.x, self.y, 
            self.radius,
            self.color)


class Game:
    def __init__(self, N=10, width=800, height=600):
        self.balls = []
        for i in range(N):
            g = 1000 * random.random() - 500
            vx = 400 * random.random() - 200
            vy = 400 * random.random() - 200
            ball = Ball(20, x=400, y=500, vx=vx, vy=vy, 
                        gravity=g, color=random_color())
            self.balls.append(ball)
            
        self.width = width
        self.height = height
        self.time = 0
        self.background = (255, 255, 0)
        
    def draw(self, dt):
        arcade.start_render()
        for ball in self.balls:
            ball.draw(dt)
        
    def update(self, dt):
        self.time += dt
        for ball in self.balls:
            ball.update(dt)
            ball.collide(self.width, self.height)

    def run(self):
        arcade.open_window(
            self.width, 
            self.height, 
            'Jogo da gravidade',
        )
        arcade.set_background_color(self.background)
        arcade.schedule(self.update, 1/60)
        arcade.schedule(self.draw, 1/60)
        arcade.run()
        arcade.close_window()
   
   
def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255) 
    return (r, g, b)


if __name__ == "__main__":
    game = Game()
    game.run()
