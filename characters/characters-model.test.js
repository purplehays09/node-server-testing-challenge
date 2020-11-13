const Character = require('./characters-model')
const db = require('../data/dbConfig.js')

beforeEach(async () => {
    await db('characters').truncate()
  })

describe('characters model', () => {
    describe('getAll()', () => {
        it('gets an empty array', async () => {
            const characters = await Character.getAll()
            expect(characters).toHaveLength(0)
        });
        
    });
    
    
});
