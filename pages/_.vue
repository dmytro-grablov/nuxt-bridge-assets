<template>
  <div>
    <p>Hello, Bridge!!!</p>
    <img :src="icon"></img>
  </div>
</template>

<script>
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?url';

export default {
  name: 'IndexPage',
  data() {
    return {
      icon: ArrowUpIcon,
    };
  },
}
</script>
