import * as GETAuthors from '../requests/GETAuthors.request';

describe('GET Authors', () => {
  
  it('Listar todos os autores', () => {
    GETAuthors.allAuthors().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    })
  });
  
});