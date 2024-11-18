function changeBg(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.background = color;
    }, 3000);
  }, 3000);
}

// function changeBackgroundColor(color, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         document.body.style.background = color;
//         resolve();
//       }, delay);
//     });
//   }
