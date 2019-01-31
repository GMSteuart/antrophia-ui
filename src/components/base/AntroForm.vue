<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: "AntroForm"
  }
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    flex-flow: column nowrap;
    justify-items: flex-end;
    align-items: flex-end;
    padding: 10px;

    .btn--submit {
      margin: 5px;
    }

    .form-group {
      &.required {
        label::after {
          content: '*';
        }
      }

      &.date {
        flex-flow: row wrap;

        label {
          width: 100%;
        }

        select {
          max-width: 33%;
        }
      }

      &.checkbox {
        flex-flow: row nowrap;
      }

      &.error {
        .alert {

        }
      }
    }
  }



  form .input {
    background: transparent;
  }

  form input,
  form select,
  .form-control {
    background: #000000;
    border: 1px solid #D2691E;
    color: #FF9933;
  }

  form {
    input {
      &::placeholder {
        color: $deep-safron;
        opacity: 0.7;
      }
    }
  }

  form input:active {
    border: 1px solid #D2691E;
    background: #000;
    color: #F96;
  }

  form .required {
    font-weight: bold;
  }

  form .required label:after {
    color: #e32;
    display:inline;
  }

  form div.submit {
    border: 0;
    clear: both;
  }

  ::placeholder, :-ms-input-placeholder, :-ms-input-placeholder {
    opacity: 0.8;
    color: #F96;
  }

  form .error {
    background: #FFDACC;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-weight: normal;
  }
  form .error-message {
    -moz-border-radius: none;
    -webkit-border-radius: none;
    border-radius: none;
    border: none;
    background: none;
    margin: 0;
    padding-left: 4px;
    padding-right: 0;
  }
  form .error,
  form .error-message {
    color: #9E2424;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
  }
</style>