document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('review-form');
  const reviewsContainer = document.getElementById('reviews-list');

  // Function to display reviews
  function displayReviews(reviews) {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      reviewDiv.innerHTML = `
        <h3>Meal ID: ${review.mealId}</h3>
        <p>Rating: ${review.rating}/5</p>
        <p>${review.review}</p>
      `;
      reviewsContainer.appendChild(reviewDiv);
    });
  }

  // Load reviews from localStorage
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  // Display reviews on page load
  displayReviews(reviews);

  // Handle form submission
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mealId = document.getElementById('meal-id').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    const newReview = { mealId, rating, review };
    reviews.push(newReview);
    
    // Save reviews to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Update displayed reviews
    displayReviews(reviews);

    // Clear form
    reviewForm.reset();
  });
});