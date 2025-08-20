// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".card");
  
//     cards.forEach(card => {
//       card.addEventListener("click", () => {
//         card.classList.toggle("flipped");
//       });
//     });
//   });
  


  /* When card is clicked → bring to front with a zoom effect */
// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".card");
  
//     cards.forEach(card => {
//       card.addEventListener("click", () => {
//         // Remove active from others
//         cards.forEach(c => {
//           if (c !== card) {
//             c.classList.remove("active", "flipped");
//           }
//         });
  
//         // Toggle flip + active zoom
//         card.classList.toggle("flipped");
//         card.classList.toggle("active");
//       });
//     });
//   });
  
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    // Available animation styles
    const animations = ["spin", "bounce", "fly"];
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Remove flip/animations from other cards
        cards.forEach(c => {
          if (c !== card) {
           // c.classList.remove("flipped", "spin", "bounce", "fly");
          }
        });
  
        // Remove old animations
        card.classList.remove("spin", "bounce", "fly");
  
        // Pick a random animation each click
        const anim = animations[Math.floor(Math.random() * animations.length)];
        card.classList.add(anim);
  
        // Toggle flip
        card.classList.toggle("flipped");
      });
    });
  });
  