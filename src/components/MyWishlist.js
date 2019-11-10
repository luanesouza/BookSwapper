import React from 'react';

const MyWishlist = () => {
  return (
    <main>
      <h1 id='main-title'> My Wishlist </h1>
      <section id='image-container'>
        <img id='book-swipe-image' src='https://images.unsplash.com/photo-1546177461-68622f53ed0e?ixlib=rb-1.2.1&w=1000&q=80' alt='' width={'70%'}/>
      </section>
      <section className="button-container">
        <button>
          <img src='https://images.vexels.com/media/users/3/157893/isolated/preview/d6f4e679138673eb3223362c70ecf7ce-check-mark-tick-icon-by-vexels.png' alt='' width={'10%'}/>
        </button>
        <button>
          <img src='http://www.clipartbest.com/cliparts/9iR/L7d/9iRL7dg4T.png' alt='' width={'10%'}/>
        </button>
      </section>
    </main>
  )
}

export default MyWishlist;
