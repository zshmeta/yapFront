
import React, { useState, useEffect } from "react";

// A function to generate a random number between min and max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// A function to generate a random color in hex format
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[random(0, 15)];
  }
  return color;
};

// A function to generate a random shape
const randomShape = () => {
  const shapes = ["circle", "square", "triangle", "star"];
  return shapes[random(0, shapes.length - 1)];
};

// A function to generate a random particle object
const randomParticle = () => {
  return {
    x: random(0, window.innerWidth), // initial x position
    y: random(0, window.innerHeight), // initial y position
    dx: 0, // initial x velocity
    dy: 0, // initial y velocity
    size: random(10, 50), // size of the particle
    color: randomColor(), // color of the particle
    shape: randomShape(), // shape of the particle
    brightness: 0.5, // initial brightness of the particle
    db: 0.01 // brightness increment per frame
  };
};

// A custom hook to get the cursor position
const useCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return cursor;
};

// A component to render a single particle
const Particle = ({ x, y, size, color, shape, brightness }) => {
  // A function to draw different shapes based on the shape prop
  const drawShape = (ctx) => {
    ctx.fillStyle = color;
    ctx.globalAlpha = brightness;
    ctx.beginPath();
    switch (shape) {
      case "circle":
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        break;
      case "square":
        ctx.rect(-size / 2, -size / 2, size, size);
        break;
      case "triangle":
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.lineTo(size / 2, size / 2);
        break;
      case "star":
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 4, -size / 4);
        ctx.lineTo(-size / 2, 0);
        ctx.lineTo(-size / 4, size / 4);
        ctx.lineTo(0, size / 2);
        ctx.lineTo(size / 4, size / 4);
        ctx.lineTo(size / 2, 0);
        ctx.lineTo(size / 4, -size / 4);
        break;
      default:
        break;
    }
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  return (
    <canvas
      width={size}
      height={size}
      style={{ position: "absolute", left: x - size / 2, top: y - size / 2 }}
      ref={(canvas) => {
        if (canvas) {
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, size, size);
          ctx.translate(size / 2, size / 2);
          drawShape(ctx);
          ctx.translate(-size / 2, -size / 2);
        }
      }}
/>
    );
    };



// A component to render multiple particles
const Particles = ({ count }) => {
  const [particles, setParticles] = useState([]);
  const cursor = useCursor();

  useEffect(() => {
    // Generate an array of random particles
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      newParticles.push(randomParticle());
    }
    setParticles(newParticles);
  }, [count]);

  useEffect(() => {
    // Update the particles state on each animation frame
    const animate = () => {
      setParticles((prevParticles) => {
        return prevParticles.map((particle) => {
          // Update the position based on the velocity
          particle.x += particle.dx;
          particle.y += particle.dy;

          // Update the brightness based on the increment
          particle.brightness += particle.db;

          // Reverse the brightness increment if it reaches the limits
          if (particle.brightness > 1 || particle.brightness < 0.5) {
            particle.db = -particle.db;
          }

          // Calculate the distance and angle between the particle and the cursor
          const dx = cursor.x - particle.x;
          const dy = cursor.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          // Update the velocity based on the distance and angle
          if (distance < 100) {
            particle.dx = Math.cos(angle) * 30;
            particle.dy = Math.sin(angle) * 30;
          } else {
            particle.dx *= 0.95;
            particle.dy *= 0.95;
          }

          // Wrap the position around the edges of the window
          if (particle.x < 0) {
            particle.x = window.innerWidth;
          } else if (particle.x > window.innerWidth) {
            particle.x = 0;
          }
          if (particle.y < 0) {
            particle.y = window.innerHeight;
          } else if (particle.y > window.innerHeight) {
            particle.y = 0;
          }

          return particle;
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [cursor]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  );
};

// A component to render on the landing page
