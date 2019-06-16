import http from '@/api/client';

export default {
  targets() {
    return http().fetch(`/missiles.json`);
  },
  launch(Missiles) {
    return http().post(`/missiles/launch.json`, { Missiles });
  },
};
