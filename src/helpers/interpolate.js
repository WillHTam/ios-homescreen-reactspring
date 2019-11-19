const interpolate = (num1, num2, amount) => num1 + (num2 - num1) * amount

// interpolate(0, 10, 0.2) => 2
// useful in ReactSpring to know where you are in an animation

export default interpolate