import React from 'react'

const Script = () => {
    let slides = document.querySelectorAll(".slidee-container");
  let index = 0;
  function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }
  function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  };
  return (
    <div>Script</div>
  )
}

export default Script
  