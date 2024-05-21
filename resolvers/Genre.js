exports.Genre = {
  courses: (parent, { filter }, { db }) => {
    const genreId = parent.id;
    const genreCourses = db.courses.filter((course) => course.genreId === genreId);

    if (filter && filter.discount !== undefined) {
      return genreCourses.filter((course) => course.discount);
    }

    return genreCourses;
  },
};
