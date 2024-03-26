const simple = require('./simple.js');

describe('simple test', () => {
  it('test 1 : input 30  ekspektasi : A', () => {
    expect(simple(30)).toBe('A');
  });
  
  it('test 2 :  input 15 ekspektasi :  B', () => {
    expect(simple(25)).toBe('B');
  });
  
  it('test 3 :  input 28 ekspektasi : C', () => {
    expect(simple(28)).toBe('C');
  });
  
  it('test 4 :  ekspetasi : input = output', () => {
    expect(simple(11)).toBe(11);
  });
});