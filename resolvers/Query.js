const { reviews } = require("../data");

exports.Query = {
  courses: (parent, args, { db }) => {
    let filteredCourses = db.courses;
    const { filter } = args;
    const { reviews } = db.reviews;

    if (filter) {
      const { discount, avgRating } = filter;

      if (discount) {
        filteredCourses = filteredCourses.filter((course) => course.discount);
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredCourses = filteredCourses.filter((course) => {
          let sum = 0;
          let numOfReviews = 0;

          reviews.forEach((review) => {
            if (review.courseId === course.id) {
              sum += review.rating;
              numOfReviews++;
            }
          });

          if (numOfReviews === 0) return false;

          const avgCourseRating = sum / numOfReviews;
          return avgCourseRating >= avgRating;
        });
      }
    }

    return filteredCourses;
  },

  course: (parent, { id }, { db }) => {
    const course = db.courses.find((item) => item.id === id);
    return course || null; // Return null if not found
  },

  genres: (parent, args, { db }) => {
    return db.genres;
  },

  genre: (parent, { id }, { db }) => {
    const genre = db.genres.find((item) => item.id === id);
    return genre || null; // Return null if not found
  },

  numOfCourses: (parent, args, { db }) => {
    return db.courses.length;
  },

  price: (parent, args, { db }) => {
    return db.courses.reduce((total, course) => total + course.price, 0);
  },

  isTrainer: () => true,
};
