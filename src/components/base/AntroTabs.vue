<template>
  <div class="antro-tabs">
    <ul role="tablist" class="tabs">
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
        class="tab"
        role="presentation"
        v-show="tab.isVisible"
      >
        <a v-html="tab.header"
           :aria-controls="tab.hash"
           :aria-selected="tab.isActive"
           @click="selectTab(tab.hash, $event)"
           :href="tab.hash"
           class="antro-tab__link"
           role="tab"
        ></a>
      </li>
    </ul>
    <div class="panels">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AntroTabs',
    props: [
      'tabs'
    ],
    data() {
      return {
        tabs: [],
        activeTabHash: '',
        activeTabIndex: 0,
        lastActiveTabHash: '',
      }
    },
    created() {
      this.tabs = this.$children;
    },
    mounted() {
      window.addEventListener('hashchange', () => this.selectTab(window.location.hash));
      if (this.findTab(window.location.hash)) {
        this.selectTab(window.location.hash);
        return;
      }
      // const previousSelectedTabHash = expiringStorage.get(this.storageKey);
      // if (this.findTab(previousSelectedTabHash)) {
      //   this.selectTab(previousSelectedTabHash);
      //   return;
      // }
      // if(this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
      //   this.selectTab("#" + this.options.defaultTabHash);
      //   return;
      // }
      if (this.tabs.length) {
        this.selectTab(this.tabs[0].hash);
      }
    },
    methods: {
      findTab(hash) {
        return this.tabs.find(tab => tab.hash === hash);
      },
      selectTab(selectedTabHash, event) {
        // See if we should store the hash in the url fragment.
        if (event && !this.options.useUrlFragment) {
          event.preventDefault();
        }
        const selectedTab = this.findTab(selectedTabHash);
        if (! selectedTab) {
          return;
        }
        if (selectedTab.isDisabled) {
          event.preventDefault();
          return;
        }
        if (this.lastActiveTabHash === selectedTab.hash) {
          this.$emit('clicked', { tab: selectedTab });
          return;
        }
        this.tabs.forEach(tab => {
          tab.isActive = (tab.hash === selectedTab.hash);
        });
        this.$emit('changed', { tab: selectedTab });
        this.activeTabHash = selectedTab.hash;
        this.activeTabIndex = this.getTabIndex(selectedTabHash);
        this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;
        //expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
      },
      setTabVisible(hash, visible) {
        const tab = this.findTab(hash);
        if (! tab) {
          return;
        }
        tab.isVisible = visible;
        if (tab.isActive) {
          // If tab is active, set a different one as active.
          tab.isActive = visible;
          this.tabs.every((tab, index, array) => {
            if (tab.isVisible) {
              tab.isActive = true;
              return false;
            }
            return true;
          });
        }
      },

      getTabIndex(hash){
        const tab = this.findTab(hash);

        return this.tabs.indexOf(tab);
      },

      getTabHash(index){
        const tab = this.tabs.find(tab => this.tabs.indexOf(tab) === index);

        if (!tab) {
          return;
        }

        return tab.hash;
      },

      getActiveTab(){
        return this.findTab(this.activeTabHash);
      },

      getActiveTabIndex() {
        return this.getTabIndex(this.activeTabHash);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .antro-tabs {
    .tabs {
      display: flex;
      flex-flow: row nowrap;

      .tab {
        color: $outrageous-orange;
        font-size: 0.8em;
        background-color: $kilamanjaro;
        padding: 3px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }

      &.active {
        background-color: $bean;
      }
    }
  }
</style>