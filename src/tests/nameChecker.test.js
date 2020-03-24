import {checkForName} from '../client/js/nameChecker'


describe('Test, the function "checkForName()" should exist' , () => {
    test('It should return true',() => {
        expect(checkForName).toBeDefined();
    });
});
describe('Test, the function "checkForName()" should be a function' , () => {
    test('It should be a function',() => {
        expect(typeof checkForName).toBe("function");
    });
});

describe('Test, the function "checkForName()" for valid url' , () => {
    var url = "https://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return true',() => {
        const response = checkForName(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "checkForName()" for invalid url' , () => {
    // I replaced 'https' with 'htpshttps' to make it invalid
    var url = "htpshttps://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return false',() => {
        const response = checkForName(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});





