import {addCurrencySymbol, removeCurrencySymbol} from '../../../../components/App/utils/'
describe("Testing util functios:addCurrencySymbol", () => {
  test("should set default arguments ", () => {
    const result = addCurrencySymbol()
    expect(result).toBe("£0");
  });
  test("should set add £ to the amount 20 ", () => {
    const result = addCurrencySymbol(undefined, 20)
    expect(result).toBe("£20");
  });
  test("should set add $ to the amount 50 ", () => {
    const result = addCurrencySymbol("$", 50)
    expect(result).toBe("$50");
  });
});
describe("Testing util functios:removeCurrencySymbol", () => {
    test("should return default arguments ", () => {
      const result = removeCurrencySymbol()
      expect(result).toBe(0);
    });
    test("should remove £ to the amount £20 ", () => {
      const result = removeCurrencySymbol(undefined, "£20")
      expect(result).toBe("20");
    });
  });