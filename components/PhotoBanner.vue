<template>
  <section class="hero is-medium is-white has-background">
    <img class="hero-background is-transparent" :src="getImgUrl(image)" alt="Background image">
    <div class="hero-body">
      <div class="container banner-container">
        <span class="banner-title">{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>

// Define props
const props = defineProps({
  image: String,
  title: String,
});

// Method to get image URL
const getImgUrl = (value) => {
  try {
    return new URL(`${value}`, import.meta.url).href;
  } catch (error) {
    console.error(`Image not found: ${value}`, error);
    return '';
  }
};
</script>

<style lang="scss" scoped>
.hero.is-medium .hero-body {
  padding-bottom: 2rem;
  padding-top: 30rem;
}

.banner-title {
  display: inline-block;
  background-color: white;
  padding: 10px 60px;
  font-size: 4rem;
  border-radius: 5rem;
  font-weight: bold;
  text-align: center;
}

@media only screen and (max-device-width: 768px) {
  .hero.is-medium .hero-body {
    padding-bottom: 1rem;
    padding-top: 12rem;
  }

  .banner-title {
    padding: 10px 20px;
    font-size: 1.3rem;
  }
}

.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
    margin-top: 0px;
  }
  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }
  &.is-transparent {
    opacity: 0.3;
  }
}
</style>
