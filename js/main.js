const profile = document.querySelector('#profile-img');

const cb = (entries, observer) => {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      console.log('inview');
      // observer.unobserve(entry.target);
      entry.target.classList.add('inview');
    } else {
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  })
}

const io = new IntersectionObserver(cb);
io.observe(profile);