<template>
  <table class="antro-table" :class="{ hoverable: hoverable }">
    <caption class="antro-table__caption">
      <slot name="caption"></slot>
    </caption>
    <thead>
      <slot name="header"></slot>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
    <tfoot>
      <slot name="footer"></slot>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "AntroTable",
  props: {
    hoverable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.antro-table {
  display: table;
  clear: both;
  color: $outrageous-orange;
  margin: 10px auto;
  width: 100%;
  background-color: $kilamanjaro;
  border: 0;
  font-size: 0.8rem;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  border-collapse: collapse;

  // table wont round unless you round the last td element
  table tr:last-child td:first-child {
  }
  table tr:last-child td:last-child {
  }

  caption {
    font-size: 1rem;
    font-weight: bold;
    background-color: $orange;
    color: $black;
    border-bottom: 1px solid $kilamanjaro;
    text-transform: uppercase;
    padding: 3px;
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
  }

  @media screen and (min-width: 600px) {
    font-size: 0.8rem;
  }

  &.hoverable {
    tr {
      &:hover {
        td {
          background-color: $bean;
        }
      }
    }
  }

  tr {
    &.highlight {
      td {
        background-color: $bean;
      }
    }

    &:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    td,
    th {
      padding: 0;

      &:first-child {
        padding-left: 5px;
      }
      &:last-child {
        padding-right: 5px;
      }
    }
  }
}

th {
  border: 0;
  //border-bottom: 2px solid #D2691E;
  //text-align: left;
  /*padding: 4px;*/
}

th a {
  display: block;
  /*padding: 2px 4px;*/
  text-decoration: none;
}
th a.asc:after {
  content: " ⇣";
}
th a.desc:after {
  content: " ⇡";
}
table tr td,
table tr th {
  /*padding: 2px 4px;*/
  //text-align: left;
  vertical-align: center;
  //border-bottom: 1px solid #D2691E;
  //background-color: #240B02;
  height: 20px;

  @media screen and (min-width: 600px) {
    height: 25px;
  }
}

td.actions {
  text-align: center;
  white-space: nowrap;
}
table td.actions a {
  margin: 0px 6px;
  padding: 2px 5px;
}

td.action {
  display: flex;
  justify-content: center;
  align-items: center;
}

th.string,
td.string {
  text-align: left;
}
th.number,
td.number {
  text-align: right;
}

.antro-input {
  display: flex;
  justify-content: flex-end;

  input[type="number"] {
    text-align: right;
  }
}
</style>