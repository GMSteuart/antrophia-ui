<template>
  <div>
    <div class="article-opener">
      <div class="article-opener__hero">
        <div class="copy">
          <div class="header">Create, Command, Conquer</div>
          <div class="subheader">If you're looking for a challenge, you came to the right place.</div>
        </div>
      </div>
      <div class="article-opener__body">
        <div class="copy">
          <div class="copy__block">
            <span class="letter">A</span>
            <p>
              Antrophia is a text-based real-time strategy game. Create an empire, command your army, and
              conquer your opponents.
            </p>
            <p>
            <ul>
              <li>7 races</li>
              <li>16 buildings</li>
              <li>20 resources</li>
              <li>42 units</li>
              <li>5,040 army configurations</li>
              <li>177,011,200 battle outcomes</li>
            </ul>
            </p>
            <div class="article-opener__body__cta">
              <router-link to="/register" class="btn btn--register">Join the Fight &raquo;</router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue { }
</script>

<style lang="scss" scoped>
  .article-opener {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;

    &__hero {
      background-image: url(/img/architecture-buildings-business.jpg);
      background-color: $black;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      width: 100%;
      height: calc(100vw * 9 / 16);
      min-height: 300px;
      max-height: 500px;

      .copy {
        position: absolute;
        top: 30%;
        left: 5%;
        padding: 5px;
        z-index: 2;
      }
      .header {
        font-size: 2em;
        color: $white;
      }
      .subheader {
        font-size: 1em;
        color: $white;
        padding: 2px;
      }

      // Create the gradient for the hero
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
      }
    }

    &__body {
      position: relative;
      width: 100%;

      .letter {
        display: none;
        font-size: 6em;
        text-align: center;
        width: 100%;
      }

      &__cta {
        width: 100%;
      }

      .copy {
        position: relative;
        z-index: 2;
        display: flex;
        flex-flow: column nowrap;

        @include respond-to('md') {
          flex-flow: row wrap;
        }

        &__block {
          width: 80%;
          margin: auto;

          @include respond-to('md') {
            width: 45%;
          }
        }
      }

      // create the gradient for the body
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 30%;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
      }
    }

    .btn--register {
      margin: 3em auto;
    }
  }
</style>