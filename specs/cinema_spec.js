const assert = require('assert');
const Cinema = require('../cinema.js')
const Film = require('../film.js')

describe('cinema', function(){

  let cinema;
  let film1;
  let film2;
  let film3;

  beforeEach(function(){
    film1 = new Film('Godfather', 'Action', 1972, 178)
    film2 = new Film('Citizen Cane', 'Drama', 1941, 119)
    film3 = new Film('Pulp Fiction', 'Action', 1994, 178)
    cinema = new Cinema([])
  });


  it('should be able to add films', function(){
    cinema.addFilm(film1);
    const actual = cinema.films;
    assert.deepStrictEqual(actual, [film1])

  })

  it('should get all film titles', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    const filmTitles = cinema.showAllTitles();
    assert.deepStrictEqual(filmTitles, ['Godfather', 'Citizen Cane']);

  })

  it('should find film by title', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    const findFilmByTitle = cinema.findByTitle('Godfather');
    assert.deepStrictEqual(findFilmByTitle, [film1]);

  })


  it('should be able to filter by genre', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    const allFilmsByGenre = cinema.filmsByGenre('Action');
    assert.deepStrictEqual(allFilmsByGenre, [film1, film3]);

  })

  it('should be able to find film by year', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    const allFilmsByYear = cinema.filmsByYear(1972);
    assert.deepStrictEqual(allFilmsByYear, [film1]);

  })

  it('should be able to find by length of movie', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    const allFilmsByLength =cinema.filmsByLength(120);
    assert.deepStrictEqual(allFilmsByLength, [film1, film3]);

  })

  it('should return total time of films', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    const totalTimeOfAllFilms = cinema.totalTimeOfFilms();
    assert.strictEqual(totalTimeOfAllFilms, 475)
  })

});
