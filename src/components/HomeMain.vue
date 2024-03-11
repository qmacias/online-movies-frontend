<template>
  <main class="main-content">
    <div class="container">
      <div class="page">
        <div class="row">
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide slider"
              data-bs-ride="carousel"
            >
              <ul class="carousel-inner slides">
                <li class="carousel-item active">
                  <a href="#">
                    <img
                      src="../assets/img/slide-1.jpg"
                      class="d-block w-100"
                      alt="Slide 1"
                    />
                  </a>
                </li>
                <li class="carousel-item">
                  <a href="#">
                    <img
                      src="../assets/img/slide-2.jpg"
                      class="d-block w-100"
                      alt="Slide 2"
                    />
                  </a>
                </li>
                <li class="carousel-item">
                  <a href="#">
                    <img
                      src="../assets/img/slide-3.jpg"
                      class="d-block w-100"
                      alt="Slide 3"
                    />
                  </a>
                </li>
              </ul>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-sm-12 col-md-3">
            <div class="row">
              <div class="col-sm-6 col-md-12">
                <div class="latest-movie">
                  <a href="#">
                    <img src="../assets/img/movie-1.jpg" alt="Movie 1" />
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-12">
                <div class="latest-movie">
                  <a href="#">
                    <img src="../assets/img/movie-2.jpg" alt="Movie 2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="latest-movie">
              <a href="#">
                <img src="../assets/img/movie-3.jpg" alt="Movie 3" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="latest-movie">
              <a href="#">
                <img src="../assets/img/movie-4.jpg" alt="Movie 4" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="latest-movie">
              <a href="#">
                <img src="../assets/img/movie-5.jpg" alt="Movie 5" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="latest-movie">
              <a href="#">
                <img src="../assets/img/movie-6.jpg" alt="Movie 6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeMain",
  components: {},
};
</script>

<style scoped>
a {
  background: transparent;
}
a:focus {
  outline: thin dotted;
}
a:hover,
a:active {
  outline: 0;
}

img {
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: #ffaa3c;
}

.main-content .container {
  background: white;
  border-radius: 5px;
  padding: 30px;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  zoom: 1;
}

.container:after {
  content: " ";
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.slider {
  position: relative;
  margin-bottom: 30px;
}

.slider .slides {
  list-style: none;
  zoom: 1;
}

.slider .slides:after {
  content: " ";
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
}

.slider li {
  border-radius: 5px;
  overflow: hidden;
}

.slider img {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
}

.slider .flex-direction-nav {
  list-style: none;
  z-index: 2;
  position: absolute;
  top: 45%;
  width: 100%;
}

.slider .flex-direction-nav a {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  text-align: center;
  line-height: 2.5;
  font-size: 18px;
  font-size: 1.2em;
  display: block;
  position: absolute;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}

.slider .flex-direction-nav a:hover {
  background-color: #ffaa3c;
  color: white;
}

.slider .flex-direction-nav .flex-prev {
  left: 30px;
}

.slider .flex-direction-nav .flex-next {
  right: 30px;
}

.latest-movie {
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
}

.latest-movie img {
  max-width: 100%;
  width: 100%;
  display: block;
  height: auto;
}

.page img {
  max-width: 100%;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
  zoom: 1;
}

.row:after {
  content: " ";
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
}

@media all and (-webkit-min-device-pixel-ratio: 1.5),
  all and (-o-min-device-pixel-ratio: 3 / 2),
  all and (min--moz-device-pixel-ratio: 1.5),
  all and (min-device-pixel-ratio: 1.5) {
}

@media all and (-webkit-min-device-pixel-ratio: 1.5),
  all and (-o-min-device-pixel-ratio: 3 / 2),
  all and (min--moz-device-pixel-ratio: 1.5),
  all and (min-device-pixel-ratio: 1.5) {
}

@media all and (-webkit-min-device-pixel-ratio: 1.5),
  all and (-o-min-device-pixel-ratio: 3 / 2),
  all and (min--moz-device-pixel-ratio: 1.5),
  all and (min-device-pixel-ratio: 1.5) {
}

@media all and (-webkit-min-device-pixel-ratio: 1.5),
  all and (-o-min-device-pixel-ratio: 3 / 2),
  all and (min--moz-device-pixel-ratio: 1.5),
  all and (min-device-pixel-ratio: 1.5) {
}

.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12 {
  float: left;
}

.col-xs-1 {
  width: 8.3333333333%;
}

.col-xs-2 {
  width: 16.6666666667%;
}

.col-xs-3 {
  width: 25%;
}

.col-xs-4 {
  width: 33.3333333333%;
}

.col-xs-5 {
  width: 41.6666666667%;
}

.col-xs-6 {
  width: 50%;
}

.col-xs-7 {
  width: 58.3333333333%;
}

.col-xs-8 {
  width: 66.6666666667%;
}

.col-xs-9 {
  width: 75%;
}

.col-xs-10 {
  width: 83.3333333333%;
}

.col-xs-11 {
  width: 91.6666666667%;
}

.col-xs-12 {
  width: 100%;
}

.col-xs-pull-0 {
  right: auto;
}

.col-xs-pull-1 {
  right: 8.3333333333%;
}

.col-xs-pull-2 {
  right: 16.6666666667%;
}

.col-xs-pull-3 {
  right: 25%;
}

.col-xs-pull-4 {
  right: 33.3333333333%;
}

.col-xs-pull-5 {
  right: 41.6666666667%;
}

.col-xs-pull-6 {
  right: 50%;
}

.col-xs-pull-7 {
  right: 58.3333333333%;
}

.col-xs-pull-8 {
  right: 66.6666666667%;
}

.col-xs-pull-9 {
  right: 75%;
}

.col-xs-pull-10 {
  right: 83.3333333333%;
}

.col-xs-pull-11 {
  right: 91.6666666667%;
}

.col-xs-pull-12 {
  right: 100%;
}

.col-xs-push-0 {
  left: auto;
}

.col-xs-push-1 {
  left: 8.3333333333%;
}

.col-xs-push-2 {
  left: 16.6666666667%;
}

.col-xs-push-3 {
  left: 25%;
}

.col-xs-push-4 {
  left: 33.3333333333%;
}

.col-xs-push-5 {
  left: 41.6666666667%;
}

.col-xs-push-6 {
  left: 50%;
}

.col-xs-push-7 {
  left: 58.3333333333%;
}

.col-xs-push-8 {
  left: 66.6666666667%;
}

.col-xs-push-9 {
  left: 75%;
}

.col-xs-push-10 {
  left: 83.3333333333%;
}

.col-xs-push-11 {
  left: 91.6666666667%;
}

.col-xs-push-12 {
  left: 100%;
}

.col-xs-offset-0 {
  margin-left: 0%;
}

.col-xs-offset-1 {
  margin-left: 8.3333333333%;
}

.col-xs-offset-2 {
  margin-left: 16.6666666667%;
}

.col-xs-offset-3 {
  margin-left: 25%;
}

.col-xs-offset-4 {
  margin-left: 33.3333333333%;
}

.col-xs-offset-5 {
  margin-left: 41.6666666667%;
}

.col-xs-offset-6 {
  margin-left: 50%;
}

.col-xs-offset-7 {
  margin-left: 58.3333333333%;
}

.col-xs-offset-8 {
  margin-left: 66.6666666667%;
}

.col-xs-offset-9 {
  margin-left: 75%;
}

.col-xs-offset-10 {
  margin-left: 83.3333333333%;
}

.col-xs-offset-11 {
  margin-left: 91.6666666667%;
}

.col-xs-offset-12 {
  margin-left: 100%;
}

@media (min-width: 768px) {
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12 {
    float: left;
  }

  .col-sm-1 {
    width: 8.3333333333%;
  }

  .col-sm-2 {
    width: 16.6666666667%;
  }

  .col-sm-3 {
    width: 25%;
  }

  .col-sm-4 {
    width: 33.3333333333%;
  }

  .col-sm-5 {
    width: 41.6666666667%;
  }

  .col-sm-6 {
    width: 50%;
  }

  .col-sm-7 {
    width: 58.3333333333%;
  }

  .col-sm-8 {
    width: 66.6666666667%;
  }

  .col-sm-9 {
    width: 75%;
  }

  .col-sm-10 {
    width: 83.3333333333%;
  }

  .col-sm-11 {
    width: 91.6666666667%;
  }

  .col-sm-12 {
    width: 100%;
  }

  .col-sm-pull-0 {
    right: auto;
  }

  .col-sm-pull-1 {
    right: 8.3333333333%;
  }

  .col-sm-pull-2 {
    right: 16.6666666667%;
  }

  .col-sm-pull-3 {
    right: 25%;
  }

  .col-sm-pull-4 {
    right: 33.3333333333%;
  }

  .col-sm-pull-5 {
    right: 41.6666666667%;
  }

  .col-sm-pull-6 {
    right: 50%;
  }

  .col-sm-pull-7 {
    right: 58.3333333333%;
  }

  .col-sm-pull-8 {
    right: 66.6666666667%;
  }

  .col-sm-pull-9 {
    right: 75%;
  }

  .col-sm-pull-10 {
    right: 83.3333333333%;
  }

  .col-sm-pull-11 {
    right: 91.6666666667%;
  }

  .col-sm-pull-12 {
    right: 100%;
  }

  .col-sm-push-0 {
    left: auto;
  }

  .col-sm-push-1 {
    left: 8.3333333333%;
  }

  .col-sm-push-2 {
    left: 16.6666666667%;
  }

  .col-sm-push-3 {
    left: 25%;
  }

  .col-sm-push-4 {
    left: 33.3333333333%;
  }

  .col-sm-push-5 {
    left: 41.6666666667%;
  }

  .col-sm-push-6 {
    left: 50%;
  }

  .col-sm-push-7 {
    left: 58.3333333333%;
  }

  .col-sm-push-8 {
    left: 66.6666666667%;
  }

  .col-sm-push-9 {
    left: 75%;
  }

  .col-sm-push-10 {
    left: 83.3333333333%;
  }

  .col-sm-push-11 {
    left: 91.6666666667%;
  }

  .col-sm-push-12 {
    left: 100%;
  }

  .col-sm-offset-0 {
    margin-left: 0%;
  }

  .col-sm-offset-1 {
    margin-left: 8.3333333333%;
  }

  .col-sm-offset-2 {
    margin-left: 16.6666666667%;
  }

  .col-sm-offset-3 {
    margin-left: 25%;
  }

  .col-sm-offset-4 {
    margin-left: 33.3333333333%;
  }

  .col-sm-offset-5 {
    margin-left: 41.6666666667%;
  }

  .col-sm-offset-6 {
    margin-left: 50%;
  }

  .col-sm-offset-7 {
    margin-left: 58.3333333333%;
  }

  .col-sm-offset-8 {
    margin-left: 66.6666666667%;
  }

  .col-sm-offset-9 {
    margin-left: 75%;
  }

  .col-sm-offset-10 {
    margin-left: 83.3333333333%;
  }

  .col-sm-offset-11 {
    margin-left: 91.6666666667%;
  }

  .col-sm-offset-12 {
    margin-left: 100%;
  }
}
@media (min-width: 992px) {
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    float: left;
  }

  .col-md-1 {
    width: 8.3333333333%;
  }

  .col-md-2 {
    width: 16.6666666667%;
  }

  .col-md-3 {
    width: 25%;
  }

  .col-md-4 {
    width: 33.3333333333%;
  }

  .col-md-5 {
    width: 41.6666666667%;
  }

  .col-md-6 {
    width: 50%;
  }

  .col-md-7 {
    width: 58.3333333333%;
  }

  .col-md-8 {
    width: 66.6666666667%;
  }

  .col-md-9 {
    width: 75%;
  }

  .col-md-10 {
    width: 83.3333333333%;
  }

  .col-md-11 {
    width: 91.6666666667%;
  }

  .col-md-12 {
    width: 100%;
  }

  .col-md-pull-0 {
    right: auto;
  }

  .col-md-pull-1 {
    right: 8.3333333333%;
  }

  .col-md-pull-2 {
    right: 16.6666666667%;
  }

  .col-md-pull-3 {
    right: 25%;
  }

  .col-md-pull-4 {
    right: 33.3333333333%;
  }

  .col-md-pull-5 {
    right: 41.6666666667%;
  }

  .col-md-pull-6 {
    right: 50%;
  }

  .col-md-pull-7 {
    right: 58.3333333333%;
  }

  .col-md-pull-8 {
    right: 66.6666666667%;
  }

  .col-md-pull-9 {
    right: 75%;
  }

  .col-md-pull-10 {
    right: 83.3333333333%;
  }

  .col-md-pull-11 {
    right: 91.6666666667%;
  }

  .col-md-pull-12 {
    right: 100%;
  }

  .col-md-push-0 {
    left: auto;
  }

  .col-md-push-1 {
    left: 8.3333333333%;
  }

  .col-md-push-2 {
    left: 16.6666666667%;
  }

  .col-md-push-3 {
    left: 25%;
  }

  .col-md-push-4 {
    left: 33.3333333333%;
  }

  .col-md-push-5 {
    left: 41.6666666667%;
  }

  .col-md-push-6 {
    left: 50%;
  }

  .col-md-push-7 {
    left: 58.3333333333%;
  }

  .col-md-push-8 {
    left: 66.6666666667%;
  }

  .col-md-push-9 {
    left: 75%;
  }

  .col-md-push-10 {
    left: 83.3333333333%;
  }

  .col-md-push-11 {
    left: 91.6666666667%;
  }

  .col-md-push-12 {
    left: 100%;
  }

  .col-md-offset-0 {
    margin-left: 0%;
  }

  .col-md-offset-1 {
    margin-left: 8.3333333333%;
  }

  .col-md-offset-2 {
    margin-left: 16.6666666667%;
  }

  .col-md-offset-3 {
    margin-left: 25%;
  }

  .col-md-offset-4 {
    margin-left: 33.3333333333%;
  }

  .col-md-offset-5 {
    margin-left: 41.6666666667%;
  }

  .col-md-offset-6 {
    margin-left: 50%;
  }

  .col-md-offset-7 {
    margin-left: 58.3333333333%;
  }

  .col-md-offset-8 {
    margin-left: 66.6666666667%;
  }

  .col-md-offset-9 {
    margin-left: 75%;
  }

  .col-md-offset-10 {
    margin-left: 83.3333333333%;
  }

  .col-md-offset-11 {
    margin-left: 91.6666666667%;
  }

  .col-md-offset-12 {
    margin-left: 100%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12 {
    float: left;
  }

  .col-lg-1 {
    width: 8.3333333333%;
  }

  .col-lg-2 {
    width: 16.6666666667%;
  }

  .col-lg-3 {
    width: 25%;
  }

  .col-lg-4 {
    width: 33.3333333333%;
  }

  .col-lg-5 {
    width: 41.6666666667%;
  }

  .col-lg-6 {
    width: 50%;
  }

  .col-lg-7 {
    width: 58.3333333333%;
  }

  .col-lg-8 {
    width: 66.6666666667%;
  }

  .col-lg-9 {
    width: 75%;
  }

  .col-lg-10 {
    width: 83.3333333333%;
  }

  .col-lg-11 {
    width: 91.6666666667%;
  }

  .col-lg-12 {
    width: 100%;
  }

  .col-lg-pull-0 {
    right: auto;
  }

  .col-lg-pull-1 {
    right: 8.3333333333%;
  }

  .col-lg-pull-2 {
    right: 16.6666666667%;
  }

  .col-lg-pull-3 {
    right: 25%;
  }

  .col-lg-pull-4 {
    right: 33.3333333333%;
  }

  .col-lg-pull-5 {
    right: 41.6666666667%;
  }

  .col-lg-pull-6 {
    right: 50%;
  }

  .col-lg-pull-7 {
    right: 58.3333333333%;
  }

  .col-lg-pull-8 {
    right: 66.6666666667%;
  }

  .col-lg-pull-9 {
    right: 75%;
  }

  .col-lg-pull-10 {
    right: 83.3333333333%;
  }

  .col-lg-pull-11 {
    right: 91.6666666667%;
  }

  .col-lg-pull-12 {
    right: 100%;
  }

  .col-lg-push-0 {
    left: auto;
  }

  .col-lg-push-1 {
    left: 8.3333333333%;
  }

  .col-lg-push-2 {
    left: 16.6666666667%;
  }

  .col-lg-push-3 {
    left: 25%;
  }

  .col-lg-push-4 {
    left: 33.3333333333%;
  }

  .col-lg-push-5 {
    left: 41.6666666667%;
  }

  .col-lg-push-6 {
    left: 50%;
  }

  .col-lg-push-7 {
    left: 58.3333333333%;
  }

  .col-lg-push-8 {
    left: 66.6666666667%;
  }

  .col-lg-push-9 {
    left: 75%;
  }

  .col-lg-push-10 {
    left: 83.3333333333%;
  }

  .col-lg-push-11 {
    left: 91.6666666667%;
  }

  .col-lg-push-12 {
    left: 100%;
  }

  .col-lg-offset-0 {
    margin-left: 0%;
  }

  .col-lg-offset-1 {
    margin-left: 8.3333333333%;
  }

  .col-lg-offset-2 {
    margin-left: 16.6666666667%;
  }

  .col-lg-offset-3 {
    margin-left: 25%;
  }

  .col-lg-offset-4 {
    margin-left: 33.3333333333%;
  }

  .col-lg-offset-5 {
    margin-left: 41.6666666667%;
  }

  .col-lg-offset-6 {
    margin-left: 50%;
  }

  .col-lg-offset-7 {
    margin-left: 58.3333333333%;
  }

  .col-lg-offset-8 {
    margin-left: 66.6666666667%;
  }

  .col-lg-offset-9 {
    margin-left: 75%;
  }

  .col-lg-offset-10 {
    margin-left: 83.3333333333%;
  }

  .col-lg-offset-11 {
    margin-left: 91.6666666667%;
  }

  .col-lg-offset-12 {
    margin-left: 100%;
  }
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}

.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}

@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }

  table.visible-xs {
    display: table;
  }

  tr.visible-xs {
    display: table-row !important;
  }

  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}

@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}

@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }

  table.visible-sm {
    display: table;
  }

  tr.visible-sm {
    display: table-row !important;
  }

  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }

  table.visible-md {
    display: table;
  }

  tr.visible-md {
    display: table-row !important;
  }

  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }

  table.visible-lg {
    display: table;
  }

  tr.visible-lg {
    display: table-row !important;
  }

  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}

@media print {
  .visible-print {
    display: block !important;
  }

  table.visible-print {
    display: table;
  }

  tr.visible-print {
    display: table-row !important;
  }

  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}

.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}

.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}

@media print {
  .hidden-print {
    display: none !important;
  }
}
</style>
