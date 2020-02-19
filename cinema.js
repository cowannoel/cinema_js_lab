const Cinema = function (films = []){
  this.films = films;
};



Cinema.prototype.addFilm = function (film) {
  this.films.push(film);
};



Cinema.prototype.showAllTitles = function () {
    return this.films.map(film => {
      return film.title
    });
    // return movieTitles;

};


Cinema.prototype.findByTitle = function (title) {
  return this.films.filter(film => {
    return film.title === title;
  });
};


  Cinema.prototype.filmsByGenre = function (genre) {
    return this.films.filter(film => {
      return film.genre === genre
    })
  };

  Cinema.prototype.filmsByYear = function (year) {
    return this.films.filter(film =>{
      return film.year === year;
    });
  };


Cinema.prototype.filmsByLength = function (length) {
  return this.films.filter(film => {
    return film.length >= length;
  })
};


Cinema.prototype.totalTimeOfFilms = function () {
  return this.films.reduce((runningTotal, film) =>{
    return runningTotal + film.length;
  }, 0)

};

module.exports = Cinema;
