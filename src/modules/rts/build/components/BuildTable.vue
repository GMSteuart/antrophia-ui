<template>
  <div>
    <antro-table v-if="!loading">
      <template slot="caption">Build</template>

      <template slot="header">
        <tr>
          <th class="string">Type</th>
          <th class="string">Building</th>
          <th class="number">Current</th>
          <th class="number">Cost</th>
          <th class="number">Amount</th>
        </tr>
      </template>

      <template slot="body">
        <template v-for="(buildings, buildingType, bTidx) in buildingsByType">
          <tr v-for="(building, idx) in buildings" :key="building.Building.id">
            <td v-if="idx === 0">{{ buildingType }}</td>
            <td v-else></td>
            <td class="string">{{ building.Building.name }}</td>
            <td class="number">{{ player.Buildings[building.Building.name].amount | numberFormat }}</td>
            <td class="number">{{ building.Building.cost | numberFormat }}</td>
            <td class="number">
              <antro-input
                v-model="form[building.Building.id]"
                class="outline"
                :label="building.Building.name"
                type="number"
                :showLabel="false"
                @input="updateTotal()"
              ></antro-input>
            </td>
          </tr>
        </template>
      </template>

      <template slot="footer">
        <tr>
          <td class="number" colspan="5" style="padding: 5px;">
            <antro-select
              v-model="multiplier"
              label="Cardisium Multiplier"
              :options="[1,2,3,4,5,6,7,8,9]"
              @input="updateTotal()"
            ></antro-select>
          </td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <th class="number">Total:</th>
          <td class="number">{{ totalCost | numberFormat }}</td>
          <td class="number">{{ totalAmount | numberFormat }}</td>
        </tr>
        <tr>
          <td class="number" colspan="3">ETA:</td>
          <td class="number" colspan="2">{{ totalTime | secondsToEta }}</td>
        </tr>
        <tr>
          <td>
            <antro-button class="error" @click="clear">Clear</antro-button>
          </td>
          <td>
            <antro-button class="success" @click.native="doBuild">Build</antro-button>
          </td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMinusSquare,
  faPlusSquare
} from "@fortawesome/pro-light-svg-icons";
import isEmpty from "lodash/isEmpty";

import numberFormat from "@/filters/numberFormat";
import secondsToEta from "@/filters/secondsToEta";

import AntroButton from "@/components/base/AntroButton";
import AntroInput from "@/components/base/AntroInput";
import AntroSelect from "@/components/base/AntroSelect";
import AntroTable from "@/components/base/AntroTable";

export default {
  name: "BuildTable",
  components: {
    AntroButton,
    AntroInput,
    AntroSelect,
    AntroTable,
    FontAwesomeIcon
  },
  filters: {
    numberFormat,
    secondsToEta
  },
  data() {
    return {
      interval: false,
      faCaretDown,
      faCaretUp,
      faMinusSquare,
      faPlusSquare,
      totalCost: 0,
      totalAmount: 0,
      tablesTotals: [],
      tablesAmounts: [],
      loading: false,
      form: {},
      multiplier: 0
    };
  },
  computed: {
    ...mapGetters({
      buildingsByType: "buildings/orderByType"
    }),
    ...mapState({
      buildings: state => state.buildings.all,
      player: state => state.player,
      totalTime: state => state.build.time
    }),
    Build() {
      let _build = {
        buildings: {},
        multiplier: this.multiplier + 1
      };

      Object.keys(this.form).forEach(buildingId => {
        _build.buildings[buildingId] = {
          cost: this.buildings[buildingId].Building.cost,
          amount: this.form[buildingId]
        };
      });

      return _build;
    }
  },
  created() {
    // Fetch buildings data if it is not loaded
    if (isEmpty(this.buildingsByType)) {
      this.fetchBuildings();
    }
    // initialize table totals
    Object.keys(this.buildingsByType).forEach((buildingType, bTidx) => {
      this.$set(this.tablesTotals, bTidx, 0);
      this.$set(this.tablesAmounts, bTidx, 0);
    });
  },
  methods: {
    ...mapActions({
      calc: "build/calc",
      fetchBuildings: "buildings/fetchBuildings",
      start: "build/start"
    }),
    doBuild() {
      // todo: add validation
      this.start(this.Build);
    },
    clear() {
      this.form.forEach((amount, idx) => {
        this.$set(this.form, idx, 0);
      });
    },
    decrement(buildingId) {
      let amount = 0;

      if (typeof this.form[buildingId] === "undefined") {
        amount = 0;
      } else if (this.form[buildingId] === "string") {
        amount = Number(this.form[buildingId]);
      } else {
        amount = this.form[buildingId] - 1;
      }

      if (amount < 0) {
        amount = 0;
      }

      this.$set(this.form, buildingId, amount);
      this.updateTotal();
    },
    increment(buildingId) {
      let amount = 1;

      if (typeof this.form[buildingId] === "undefined") {
        amount = 1;
      } else if (typeof this.form[buildingId] === "string") {
        amount = Number(this.form[buildingId]);
      } else {
        amount = this.form[buildingId] + 1;
      }
      // todo: check amount against free land
      this.$set(this.form, buildingId, amount);
      this.updateTotal();
    },
    startDecerement(buildingId) {
      if (!this.interval) {
        this.interval = setInterval(() => this.decrement(buildingId), 30);
      }
    },
    startIncrement(buildingId) {
      if (!this.interval) {
        this.interval = setInterval(() => this.increment(buildingId), 30);
      }
    },
    stop() {
      clearInterval(this.interval);
      this.interval = false;
    },
    updateTotal() {
      this.totalCost = 0;
      this.totalAmount = 0;

      // iterate over the building types
      Object.keys(this.buildingsByType).forEach((buildingType, bTidx) => {
        let btCost = 0;
        let btAmount = 0;

        // iterate over every building in that type
        Object.keys(this.buildingsByType[buildingType]).forEach(idx => {
          let buildingId = this.buildingsByType[buildingType][idx].Building.id;

          if (typeof this.form[buildingId] !== "undefined") {
            // update the cost and amount for that building type
            btCost +=
              Number(this.form[buildingId]) *
              this.buildings[buildingId].Building.cost *
              (this.multiplier + 1);
            btAmount += Number(this.form[buildingId]);
          }
        });

        this.$set(this.tablesTotals, bTidx, btCost);
        this.$set(this.tablesAmounts, bTidx, btAmount);

        this.totalCost += btCost;
        this.totalAmount += btAmount;
      });

      this.calc(this.Build);
    }
  }
};
</script>

<style lang="scss" scoped>
.antro-table__actions {
  display: flex;
  flex-flow: row nowrap;
}

.col--building-name {
  width: 150px;
}

.build-input {
  /*display: flex;*/
  /*flex-flow: row nowrap;*/
  /*justify-content: space-around;*/
  /*align-items: center;*/
}

.build-actions {
  display: flex;
  justify-content: space-between;
}
</style>
