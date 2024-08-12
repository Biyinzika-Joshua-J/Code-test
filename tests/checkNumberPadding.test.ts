import { checkNumberPadding } from "../src/checkNumberPadding";

describe ('Case 1 - Padding is consistent', () => {
    it('Input 1: ["001", "002", "9999"] should return 3', () => {
        expect(checkNumberPadding(["001", "002"])).toBe(3);
    });

    it('Input 2: ["001", "002", "9999"] should return 3', () => {
        expect(checkNumberPadding(["001", "002", "9999"])).toBe(3);
    });

    it('Input 3: ["0001", "0002", "9999"] should return 4', () => {
        expect(checkNumberPadding(["0001", "0002", "9999"])).toBe(4);
    });

    it('Input 4: ["01", "02", "03"] should return 2', () => {
        expect(checkNumberPadding(["01", "02", "03"])).toBe(2);
    });

    it('Input 5: ["00001", "00002"] should return 5', () => {
        expect(checkNumberPadding(["00001", "00002"])).toBe(5);
    });

    it('Input 6: ["001", "002", "003"] should return 3', () => {
        expect(checkNumberPadding(["001", "002", "003"])).toBe(3);
    });

    it('Input 7: ["0000001", "0000002"] should return 7', () => {
        expect(checkNumberPadding(["0000001", "0000002"])).toBe(7);
    });

    it('Input 8: ["0001", "0002", "1000"] should return 4', () => {
        expect(checkNumberPadding(["0001", "0002", "1000"])).toBe(4);
    });

    it('Input 9: ["01", "99", "77"] should return 2', () => {
        expect(checkNumberPadding(["01", "99", "77"])).toBe(2);
    });

    it('Input 10: ["00123", "00456"] should return 5', () => {
        expect(checkNumberPadding(["00123", "00456"])).toBe(5);
    });
});


describe('Case 2 - No padding used', () => {

    it('Input 1: ["1", "2", "999"] should return 1', () => {
        expect(checkNumberPadding(["1", "2", "999"])).toBe(1);
    });

    it('Input 2: ["123", "456", "789"] should return 1', () => {
        expect(checkNumberPadding(["1", "456", "9"])).toBe(1);
    });

    it('Input 3: ["8", "88", "888"] should return 1', () => {
        expect(checkNumberPadding(["3", "8", "4"])).toBe(1);
    });

    it('Input 4: ["111", "222", "333"] should return 1', () => {
        expect(checkNumberPadding(["2", "1", "49", "73", "5"])).toBe(1);
    });

    // Add a testcase where the number of 1s and other numbers is equal
});


describe('Case 3 - No padding observed', () => {

    it('Input 1: ["999", "9999"] should return -3', () => {
        expect(checkNumberPadding(["999", "9999"])).toBe(-3);
    });

    it('Input 2: ["99", "999", "9999"] should return -2', () => {
        expect(checkNumberPadding(["99", "999", "9999"])).toBe(-2);
    });

    it('Input 3: ["8", "80", "800"] should return -1', () => {
        expect(checkNumberPadding(["8", "80", "800"])).toBe(-1);
    });

    it('Input 4: ["555", "5555"] should return -3', () => {
        expect(checkNumberPadding(["555", "5555"])).toBe(-3);
    });

    it('Input 5: ["77", "777"] should return -2', () => {
        expect(checkNumberPadding(["77", "777"])).toBe(-2);
    });

    it('Input 6: ["7", "77", "777"] should return -1', () => {
        expect(checkNumberPadding(["7", "77", "777"])).toBe(-1);
    });

    it('Input 7: ["123", "1234"] should return -3', () => {
        expect(checkNumberPadding(["123", "1234"])).toBe(-3);
    });

    it('Input 8: ["11", "111", "1111"] should return -2', () => {
        expect(checkNumberPadding(["11", "111", "1111"])).toBe(-2);
    });

    it('Input 9: ["6", "66", "666"] should return -1', () => {
        expect(checkNumberPadding(["6", "66", "666"])).toBe(-1);
    });

    it('Input 10: ["444", "4444", "44444"] should return -3', () => {
        expect(checkNumberPadding(["444", "4444", "44444"])).toBe(-3);
    });

});


describe('Case 4 - Edge cases for nothing to observe and inconsistent padding', () => {

    it('Input 1: ["01", "002"] should return -1 (inconsistent padding)', () => {
        expect(checkNumberPadding(["01", "002"])).toBe(-1);
    });

    it('Input 2: ["0001", "02", "00003"] should return -1 (inconsistent padding)', () => {
        expect(checkNumberPadding(["0001", "02", "00003"])).toBe(-1);
    });

    it('Input 3: ["03", "004", "5"] should return -1 (inconsistent padding)', () => {
        expect(checkNumberPadding(["03", "004", "5"])).toBe(-1);
    });

    it('Input 4: ["0001", "1", "002"] should return -1 (inconsistent padding)', () => {
        expect(checkNumberPadding(["0001", "1", "002"])).toBe(-1);
    });

    it('Input 5: ["0009", "09", "009"] should return -1 (inconsistent padding)', () => {
        expect(checkNumberPadding(["0009", "09", "009"])).toBe(-1);
    });

    it('Input 6: [] should return 0 (no observations)', () => {
        expect(checkNumberPadding([])).toBe(0);
    });

});
