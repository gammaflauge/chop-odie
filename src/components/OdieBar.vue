<template>
  <div>
    <b-navbar variant="light" type="light">
      <b-navbar-brand >
        <img id="odie" src="../assets/odie.svg" class="d-inline-block align-top" width="20" height="30">
        welcome {{ user }}
      </b-navbar-brand>
      <b-button variant="success"
                @click="$router.push({ name: 'newproject', params: { id: $route.params.id } })">
        + project
      </b-button>
    </b-navbar>
    <b-tooltip ref="tooltip" target="odie">
      <strong>Woof!</strong>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'OdieBar',
  props: [
    'user'
  ],
}
</script>
