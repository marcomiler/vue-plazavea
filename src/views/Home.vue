<template>
  <div>
    <BackgroundImage />
    <FirstSection />
    <Banners />
    <Cart />
  </div>
</template>

<script>
import Banners from '@/components/base/Banners';
import BackgroundImage from "@/components/base/BackgroundImage";
import FirstSection from '@/components/base/FirstSection';
import Cart from '@/components/Cart';

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'home',
  components: {
    Cart,
    Banners,
    FirstSection,
    BackgroundImage
  },
});
</script>