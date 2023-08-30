const Instruction = require("./instruction");

test("Initial position and direction is (0,0,0,N)",()=>{
    const instruction = new Instruction(0,0,0,"N");

    expect(instruction.x).toBe(0);
    expect(instruction.y).toBe(0);
    expect(instruction.z).toBe(0);
    expect(instruction.direction).toBe("N");
});

