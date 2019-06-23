<template>
  <div class="cards-container">
    <div
      v-for="(type, idx) in buildingsByType"
      class="card buildings-by-type-card"
      :key="type.Type.id"
    >
      <h3>{{ type.Type.name }}</h3>
      <ul class="tabs">
        <li
          v-for="(building, bidx) in type.Buildings"
          :class="[type.activeTab === bidx ? 'active' : '']"
          @click="setActiveTab(idx, bidx)"
          :key="building.id"
        >{{ building.name }}</li>
      </ul>

      <div class="tabs-content">
        <div>
          <strong>Cost:</strong>
          {{ type.Buildings[type.activeTab].cost }}
          <p>{{ type.Buildings[type.activeTab].info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'buildings-help',
  data() {
    return {
      buildingsByType: [],
    }
  },
  created() {
    // TODO: move to api
    axios.get('/buildings.json')
      .then(({ data }) => {
        this.buildingsByType = data.buildingsByType
        this.buildingsByType.forEach(buildingType => buildingType.activeTab = 0)
      })
  },
  methods: {
    setActiveTab(idx, buildingIdx) {
      this.buildingsByType[idx].activeTab = buildingIdx
      this.$set(this.buildingsByType, idx, this.buildingsByType[idx])
    }
  }
}
</script>
