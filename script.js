document.addEventListener("DOMContentLoaded", () => {
  const typeFilter = document.getElementById("typeFilter");
  const distanceFilter = document.getElementById("distanceFilter");
  const dateFilter = document.getElementById("dateFilter");
  const cards = document.querySelectorAll(".event-card");

  function applyFilters() {
    const selectedType = typeFilter.value;
    const selectedDistance = distanceFilter.value;
    const selectedDate = dateFilter.value;

    cards.forEach(card => {
      const cardType = card.dataset.type;
      const cardDistance = card.dataset.distance;
      const cardDate = card.dataset.date;

      const typeMatch = !selectedType || cardType === selectedType;
      const distanceMatch = !selectedDistance || cardDistance === selectedDistance;
      const dateMatch = !selectedDate || cardDate === selectedDate;

      if (typeMatch && distanceMatch && dateMatch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  typeFilter.addEventListener("change", applyFilters);
  distanceFilter.addEventListener("change", applyFilters);
  dateFilter.addEventListener("change", applyFilters);
});