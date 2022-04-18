import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter(),
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
