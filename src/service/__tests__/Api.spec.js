import {getBooks, getCategory, getHadithByBookCategory, testFun} from '../Api';
replay = require('replay');

replay.fixtures = __dirname + '/fixtures/replay';
test("Api: getBooks function testing", () => {
    const expected = [{"bookname": "Sahih Al Bukhari", "created_at": 1559187872729, "id": 1, "updated_at": 1559187872738}, {"bookname": "Sahih Muslim", "created_at": 1561343694190, "id": 2, "updated_at": 1561343694197}]
    getHadithByBookCategory().then(res => expect(res).toEqual(expected));
})