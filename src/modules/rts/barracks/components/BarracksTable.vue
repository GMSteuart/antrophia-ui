<template>
  <div>
    <antro-table>
      <template slot="caption">Army Training</template>

      <template slot="header">
        <tr>
          <th class="string">Name</th>
          <th class="number">#</th>
          <th class="number">Attack</th>
          <th class="number">Defense</th>
          <td class="number">Cost</td>
          <td class="number">Amount</td>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="unit in unitsByRaceName(race)" :key="unit.Unit.id">
          <td class="string">{{ unit.Unit.name }}</td>
          <td class="number">{{ playerUnitAmounts[unit.Unit.id] | numberFormat }}</td>
          <td class="number">{{ unit.Unit.attack | numberFormat }}</td>
          <td class="number">{{ unit.Unit.defense | numberFormat }}</td>
          <td class="number">{{ unit.Unit.cost | numberFormat }}</td>
          <td>
            <antro-input
              v-model="form[unit.Unit.id]"
              class="outline"
              type="number"
              :label="unit.Unit.name"
              :showLabel="false"
              @input="updateTotal"
            ></antro-input>
          </td>
        </tr>
        <tr>
          <td class="number" colspan="6" style="padding: 5px;">
            <antro-checkbox
              v-model="form.speed"
              flipped
              name="speed"
              label="Spend 2000 Armidi and Enduarious for 2x speed increase"
              @input="updateTotal"
            ></antro-checkbox>
          </td>
        </tr>
      </template>

      <template slot="footer">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <th class="number">Total:</th>
          <td class="number">{{ totalCost | numberFormat }}</td>
          <td class="number">{{ totalAmount | numberFormat }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <th>ETA:</th>
          <td colspan="2">{{ totalTime | secondsToEta }}</td>
        </tr>
        <tr>
          <td>
            <!-- <antro-button class="error" @click.native="doDisband">Disband</antro-button> -->
          </td>
          <td colspan="3"></td>
          <td class="number">
            <antro-button class="success" @click.native="doStart">Train</antro-button>
          </td>
        </tr>
      </template>
    </antro-table>

    <div style="margin: 40px auto;"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import numberFormat from "@/filters/numberFormat";
import secondsToEta from "@/filters/secondsToEta";

import AntroButton from "@/components/base/AntroButton";
import AntroInput from "@/components/base/AntroInput";
import AntroCheckbox from "@/components/base/AntroCheckbox";
import AntroTable from "@/components/base/AntroTable";

export default {
  name: "BarracksTable",
  components: {
    AntroButton,
    AntroInput,
    AntroCheckbox,
    AntroTable
  },
  filters: {
    numberFormat,
    secondsToEta
  },
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapGetters({
      unitsByRaceName: "units/byRaceName"
    }),
    ...mapState({
      playerUnits: state => state.player.Units,
      race: state => state.player.Race.name,
      totalCost: state => state.barracks.cost,
      totalTime: state => state.barracks.time
    }),
    Barracks() {
      const _barracks = {
        units: {},
        speed: this.form.speed ? 1 : 0
      };

      const _units = this.unitsByRaceName(this.race);

      Object.keys(_units).forEach(unitIdx => {
        // Protect from setting null values
        if (this.form[_units[unitIdx].Unit.id]) {
          _barracks.units[_units[unitIdx].Unit.id] = {
            cost: _units[unitIdx].Unit.cost,
            amount: Number(this.form[_units[unitIdx].Unit.id])
          };
        }
      });

      return _barracks;
    },
    playerUnitAmounts() {
      const _amounts = {};

      this.playerUnits.forEach(unit => {
        _amounts[unit.Unit.id] = unit.amount;
      });

      return _amounts;
    },
    totalAmount() {
      let _sum = 0;

      Object.keys(this.Barracks.units).forEach(unitId => {
        const { amount } = this.Barracks.units[unitId];

        if (amount) {
          _sum += amount;
        }
      });

      return _sum;
    }
  },
  created() { },
  methods: {
    ...mapActions({
      calc: "barracks/calc",
      disband: "barracks/disband",
      start: "barracks/start"
    }),
    doDisband() {
      this.disband(this.Barracks);
    },
    doStart() {
      // TODO: add dynamic validation
      this.start(this.Barracks);
    },
    updateTotal() {
      this.calc(this.Barracks);
    },
    submit() { }
  }
};
</script>

<style lang="scss" scoped>
</style>
