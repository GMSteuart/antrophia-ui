<template>
  <div class="cards-container">
    <div
      v-for="(race, idx) in races"
      class="card"
      :key="race.id"
    >
      <h3>{{ race.Race.name }}</h3>
      <ul class="tabs">
        <li
          :class="[race.activeTab === 'units' ? 'active' : '']"
          @click="setActiveTab(idx, 'units')"
        >
          Units
        </li>
        <li
          :class="[race.activeTab === 'minerals' ? 'active' : '']"
          @click="setActiveTab(idx, 'minerals')"
        >
          Minerals
        </li>
      </ul>

      <div class="tabs-content">
        <div v-show="race.activeTab === 'units'">
          <table class="table table-units">
            <thead>
            <tr>
              <th>Name</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="unit in race.Unit"
              :key="unit.id"
            >
              <td>{{ unit.name }}</td>
              <td>{{ unit.attack }}</td>
              <td>{{ unit.defense }}</td>
              <td>{{ unit.cost }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div v-show="race.activeTab === 'minerals'">
          <table class="table table-minerals">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="mineral in race.Minerals" :key="mineral.id">
                <td>{{ mineral.Info.name }}</td>
                <td>{{ mineral.Info.cost }}</td>
                <td>{{ mineral.Info.Type.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'races-help',
    data() {
      return {
        races: [],
      }
    },
    created() {
      axios.get('/races.json')
        .then(({ data }) => {
          this.races = data.races
          this.races.forEach(race => race.activeTab = 'units')
        })
    },
    methods: {
      setActiveTab(idx, type) {
        this.races[idx].activeTab = type
        this.$set(this.races, idx, this.races[idx])
      }
    }
  }
</script>
