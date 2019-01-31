<template>
  <div>
    <antro-table>
      <template slot="caption">Army Training</template>

      <template slot="header">
        <tr>
          <th class="string">Name</th>
          <th class="number">#</th>
          <td class="number">Amount</td>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="unit in unitsByRaceName(race)" :key="unit.Unit.id">
          <td class="string">{{ unit.Unit.name }}</td>
          <td class="number">{{ playerUnitAmounts[unit.Unit.id] | numberFormat }}</td>
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
      </template>

      <template slot="footer">
        <tr>
          <td>
            <antro-button class="error" @click.native="doDisband">Disband</antro-button>
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
  name: "BarracksDisbandTable",
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
      race: state => state.player.Race.name
    }),
    Barracks() {
      let _barracks = {
        units: {},
        speed: this.form.speed ? 1 : 0
      };

      let _units = this.unitsByRaceName(this.race);

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
      let _amounts = {};

      this.playerUnits.forEach(unit => {
        _amounts[unit.Unit.id] = unit.amount;
      });

      return _amounts;
    }
  },
  created() {},
  methods: {
    ...mapActions({
      calc: "barracks/calc",
      disband: "barracks/disband"
    }),
    doDisband() {
      this.disband(this.Barracks);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
