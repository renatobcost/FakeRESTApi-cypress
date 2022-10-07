import * as POSTAuthors from '../requests/POSTAuthors.request';

describe('POST Authors', () => {
  
  it('Adicionar um novo autor', () => {
    POSTAuthors.addAuthor().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq('Jorge');
      expect(response.body.lastName).to.eq('Amado');
    })
  });

});