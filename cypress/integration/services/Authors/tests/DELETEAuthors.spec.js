import * as DELETEAuthors from '../requests/DELETEAuthors.request';
import * as GETAuthors from '../requests/GETAuthors.request';
import * as POSTAuthors from '../requests/POSTAuthors.request';

describe('DELETE Authors', () => {
  
  it('Deletar um autor', () => {
    GETAuthors.allAuthors().then((resAllAuthors) => {
      DELETEAuthors.deleteAuthor(resAllAuthors.body[0].id).should((resDeleteAuthor) => {
        expect(resDeleteAuthor.status).to.eq(200);
      })
    })
  });

  it('Criar e excluir um autor', () => {
    POSTAuthors.addAuthor().then((resAddAuthor) => {
      DELETEAuthors.deleteAuthor(resAddAuthor.body.id).should((resDeleteAuthor) => {
        expect(resDeleteAuthor.status).to.eq(200)
      })
    })
  });

});