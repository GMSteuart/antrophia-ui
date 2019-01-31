<template>
  <div class="antro-countdown" :class="labelPosition">
    <slot
      v-if="status > 0"
      name="label"
      v-bind:props="{
      tips,
      startLabel,
      endLabel,
      labelPosition
    }"
    >
      <span v-if="startLabel !== '' && tips">{{ startLabel }}:</span>
      <span v-if="endLabel !== '' && !tips">{{ endLabel }}:</span>
    </slot>

    <slot
      v-if="status > 0"
      name="countdown"
      v-bind:props="{
      status,
      days,
      hours,
      minutes,
      seconds,
    }"
    >
      <div v-if="short" class="countdown-text" :class="short">
        <span>{{ days }}{{ daysText }}</span>
        <span>{{ hours }}{{ hoursText }}</span>
        <span>{{ minutes }}{{ minutesText }}</span>
        <span>{{ seconds }}{{ secondsText }}</span>
      </div>
      <div v-else class="countdown-text">
        <antro-stat :label="daysText" :value="days" align="center" :flipped="true"></antro-stat>
        <antro-stat :label="hoursText" :value="hours" align="center" :flipped="true"></antro-stat>
        <antro-stat :label="minutesText" :value="minutes" align="center" :flipped="true"></antro-stat>
        <antro-stat :label="secondsText" :value="seconds" align="center" :flipped="true"></antro-stat>
      </div>
    </slot>

    <slot name="end-text" v-if="status <=0" v-bind:props="{ endText }">{{ endText }}</slot>
  </div>
</template>

<script>
// Source: https://github.com/TriDiamond/vuejs-countdown-timer#readme
import AntroStat from "@/components/base/AntroStat";
import moment from "moment";

const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;

export default {
  name: "AntroCountdown",
  props: {
    startLabel: {
      type: String,
      default: ""
    },
    endLabel: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: "left"
    },
    interval: {
      type: Number,
      default: 1000 // 1 second
    },
    leadingZero: {
      type: Boolean,
      default: true
    },
    short: {
      type: Boolean,
      default: false
    },
    startTime: {
      type: Number | String | Object,
      default() {
        return moment.utc().valueOf();
      }
    },
    endTime: {
      type: Number | String | Object
    },
    endText: {
      type: String,
      default: "Finished!"
    },
    secondsFixed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AntroStat
  },
  data() {
    return {
      tips: true,
      current: "",
      count: 0,
      counting: false
    };
  },
  computed: {
    /**
     * Remaining days.
     * @returns {number}
     */
    days() {
      return this.preprocess(Math.floor(this.count / MILLISECONDS_DAY));
    },
    daysText() {
      if (this.short) {
        return "d";
      }
      return this.days === 1 ? "day" : "days";
    },

    /**
     * Remaining hours.
     * @returns {number}
     */
    hours() {
      return this.preprocess(
        Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR)
      );
    },
    hoursText() {
      if (this.short) {
        return "h";
      }
      return this.hours === 1 ? "hour" : "hours";
    },

    /**
     * Remaining minutes.
     * @returns {number}
     */
    minutes() {
      return this.preprocess(
        Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE)
      );
    },
    minutesText() {
      if (this.short) {
        return "m";
      }

      return this.minutes === 1 ? "minute" : "minutes";
    },

    /**
     * Remaining seconds.
     * @returns {number}
     */
    seconds() {
      const { interval } = this;
      const seconds = (this.count % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND;

      if (interval < 10) {
        return this.preprocess(parseFloat(seconds.toFixed(3)));
      } else if (interval >= 10 && interval < 100) {
        return this.preprocess(parseFloat(seconds.toFixed(2)));
      } else if (interval >= 100 && interval < 1000) {
        return this.preprocess(parseFloat(seconds.toFixed(1)));
      }

      return this.preprocess(Math.floor(seconds));
    },
    secondsText() {
      if (this.short) {
        return "s";
      }
      return this.seconds === 1 ? "second" : "seconds";
    },

    /**
     * Total remaining days.
     * @returns {number}
     */
    totalDays() {
      return this.preprocess(this.days);
    },

    /**
     * Total remaining hours.
     * @returns {number}
     */
    totalHours() {
      return this.preprocess(Math.floor(this.count / MILLISECONDS_HOUR));
    },

    /**
     * Total remaining minutes.
     * @returns {number}
     */
    totalMinutes() {
      return this.preprocess(Math.floor(this.count / MILLISECONDS_MINUTE));
    },

    /**
     * Total remaining seconds.
     * @returns {number}
     */
    totalSeconds() {
      const { interval } = this;
      const seconds = this.count / MILLISECONDS_SECOND;

      if (interval < 10) {
        return this.preprocess(parseFloat(seconds.toFixed(3)));
      } else if (interval >= 10 && interval < 100) {
        return this.preprocess(parseFloat(seconds.toFixed(2)));
      } else if (interval >= 100 && interval < 1000) {
        return this.preprocess(parseFloat(seconds.toFixed(1)));
      }

      return this.preprocess(Math.floor(seconds));
    },

    /**
     * Current time in milliseconds
     * @returns {number}
     */
    time() {
      return moment.utc().valueOf();
    },

    /**
     * @returns {number}
     */
    status() {
      if (this.current > moment.utc(this.endTime).valueOf()) {
        return 0;
      }

      if (this.current < moment.utc(this.startTime).valueOf()) {
        return 1;
      }

      if (
        this.current >= moment.utc(this.startTime).valueOf() &&
        this.current < moment.utc(this.endTime).valueOf()
      ) {
        return 2;
      }
    }
  },
  methods: {
    /**
     * Initial countdown
     */
    init() {
      // Formating time
      this.stop();
      this.$set(this, "current", moment.utc().valueOf());
      const startCount =
        moment.utc(this.formatTime(this.startTime)).valueOf() - this.current;
      const endCount =
        moment.utc(this.formatTime(this.endTime)).valueOf() - this.current;

      const { status } = this;

      if (status === 0) {
        this.count = 0;
        this.end_message();
        return;
      }

      if (status === 1) {
        this.$set(this, "tips", true);
        this.count = Math.max(0, startCount);
      }

      if (status === 2) {
        this.$set(this, "tips", false);
        this.$emit("start", status);
        this.count = Math.max(0, endCount);
      }

      if (this.count === 0) {
        this.end_message();
        return;
      }

      this.$nextTick(() => {
        this.start();
      });
    },

    /**
     * Start countdown
     */
    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.next();
    },

    /**
     * Next count down queue
     */
    next() {
      this.timeout = setTimeout(this.step.bind(this), this.interval);
    },

    /**
     * Calculate remaining milliseconds
     */
    step() {
      if (!this.counting) {
        return;
      }

      if (this.count > this.interval) {
        this.count -= this.interval;
        this.next();
      } else {
        this.count = 0;
        this.init();
      }
    },

    /**
     * Stop the countdown
     */
    stop() {
      this.counting = false;
      clearTimeout(this.timeout);
      this.timeout = undefined;
    },

    start_message() {
      this.$set(this, "tips", false);
      this.$emit("start", this.status);
    },

    end_message() {
      if (this.currentTime <= 0) {
        return;
      }
      this.$emit("end", this.status);
    },

    formatTime(time) {
      if (typeof time === "number") {
        if (time.toString().length === 10) {
          return time * 1000;
        } else {
          return time;
        }
      } else {
        return time;
      }
    },

    /**
     * Filling zeros
     * @returns {string}
     */
    preprocess(value) {
      return this.leadingZero && value < 10 ? `0${value}` : value;
    },

    /**
     * Update the count.
     * @private
     */
    update() {
      if (this.counting) {
        // Formating time
        this.$set(this, "current", this.time);
        const startCount = moment.utc(this.startTime).valueOf() - this.current;
        const endCount = moment.utc(this.endTime).valueOf() - this.current;

        const { status } = this;

        if (status === 0) {
          this.count = 0;
          this.stop();
          this.end_message();
          return;
        }

        if (status === 1) {
          this.$set(this, "tips", true);
          this.count = Math.max(0, startCount);
        }

        if (status === 2) {
          this.$set(this, "tips", false);
          this.$emit("start", this.status);
          this.count = Math.max(0, endCount);
        }
      }
    }
  },

  watch: {
    startTime() {
      this.init();
    },

    endTime() {
      this.init();
    }
  },

  created() {
    this.init();
  },

  mounted() {
    // window.addEventListener("focus", (this.onFocus = this.update.bind(this)));
  },

  beforeDestroy() {
    // window.removeEventListener("focus", this.onFocus);
    clearTimeout(this.timeout);
  }
};
</script>

<style lang="scss" scoped>
.antro-countdown {
  display: flex;
  flex-flow: row nowrap;
  min-height: 40px;
  width: 100%;

  &.left {
    flex-direction: row;
  }

  &.right {
    flex-direction: row-reverse;
  }

  .countdown-text {
    display: flex;
    flex-flow: row nowrap;

    .stat-wrapper {
      width: 3rem;
      margin-right: 5px;

      .label {
        font-size: 1rem;
      }
      .value {
        font-size: 1.5rem;
      }
    }

    &.short {
      span {
        margin-right: 2px;
      }
    }
  }
}
</style>