const InitialPositions = require("./instruction");

test("Initial position and direction is (0,0,0,N)", () => {
    const initials = new InitialPositions();
  
    expect(initials.x).toBe(0);
    expect(initials.y).toBe(0);
    expect(initials.z).toBe(0);
    expect(initials.direction).toBe("N");
  });