import {getBooks, getCategory, getHadithByBookCategory, testFun} from '../Api';
import {setupPolly} from 'setup-polly-jest';
import {Polly} from '@pollyjs/core';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import XHRAdapter from '@pollyjs/adapter-xhr';
import FSPersister from '@pollyjs/persister-fs';


Polly.register(NodeHttpAdapter);
Polly.register(XHRAdapter);
Polly.register(FSPersister);

describe("API Tetsing", () => {
    let context = setupPolly({
        adapters: ['node-http','xhr'],
        persister: 'fs',
        persisterOptions: {
        fs: {
            recordingsDir: __dirname +'/__recordings__'
        }
    }
      });

    test("Api: getBooks function testing", async () => {
        // context.polly.configure({ recordIfMissing: true });
        const expected = [{"bookname": "Sahih Al Bukhari", "created_at": 1559187872729, "id": 1, "updated_at": 1559187872738}, {"bookname": "Sahih Muslim", "created_at": 1561343694190, "id": 2, "updated_at": 1561343694197}]
        const books = await getBooks();
        expect(books).toEqual(expected);
    })


    test("Api: getCategory function testing", async () => {
        // context.polly.configure({ recordIfMissing: true });
        const expected = [{"id":1,"name_en":"Faith","name_bn":"বিশ্বাস ","created_at":1561343677793,"updated_at":1561348636711}]
        const cat = await getCategory();
        expect(cat).toEqual(expected);
})
})
