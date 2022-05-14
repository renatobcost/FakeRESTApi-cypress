import * as PUTAuthors from '../requests/PUTAuthors.request';
import * as GETAuthors from '../requests/GETAuthors.request';
import * as POSTAuthors from '../requests/POSTAuthors.request';

describe('PUT Authors', () => {
  
  it('Alterar um autor', () => {
    GETAuthors.allAuthors().then((resAllAuthors) => {
      PUTAuthors.changeAuthor(resAllAuthors.body[0].id).should((resChangeAuthor) => {
        expect(resChangeAuthor.status).to.eq(200);
        expect(resChangeAuthor.body).to.be.not.null;
        expect(resChangeAuthor.body.firstName).to.eq('Machado');
        expect(resChangeAuthor.body.lastName).to.eq('de Assis');
      })
    })
  });

  it('Criar e alterar um autor', () => {
    POSTAuthors.addAuthor().then((resAddAuthor) => {
      PUTAuthors.changeAuthor(resAddAuthor.body.id).should((resChangeAuthor) => {
        expect(resChangeAuthor.status).to.eq(200);
        expect(resChangeAuthor.body).to.be.not.null;
        expect(resChangeAuthor.body.firstName).to.eq('Machado');
        expect(resChangeAuthor.body.lastName).to.eq('de Assis');
      })
    })
  });

});