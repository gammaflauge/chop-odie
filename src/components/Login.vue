<template>
  <div class="hello">
    <img alt="woof" src="../assets/odie.svg">
    <h3>Operational Data Integration Engine</h3>
    <br>
    <b-row align-h="center">
      <b-col cols="6">
        <b-form-input v-model="chopId"
                      type="text"
                      size="lg"
                      placeholder="Enter your chop id (ie devinem4)">
        </b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-button size="lg"
              variant="primary"
              @click="$router.push('/user/' + chopId)"
              >
      Fetch!
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      chopId: 'default'
    }
  }
}
</script>
