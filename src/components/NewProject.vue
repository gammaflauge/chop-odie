<template>
  <div>
    <h3>adding a new project</h3>
    <div align="left">
      {{ project }}
      <Metadata v-bind:project="project" />
      <Source v-bind:project="project" />
      <Target v-bind:project="project" />

      <br>
      <b-button size="lg"
                variant="primary"
                @click="alert('uh oh')"
                >
        save
      </b-button>

    </div>
  </div>
</template>

<script>
import Metadata from './NewProject/Metadata.vue'
import Source from './NewProject/Source.vue'
import Target from './NewProject/Target.vue'


export default {
  name: 'NewProject',
  components: {
    Metadata,
    Source,
    Target,
  },
  data () {
    return {
      project : {
        'projectName' : '',
        'domain' : '',
        'status' : 'invalid',
        'srcType' : '',
        'srcCsvPath' : '',
        'srcDb' : '',
        'srcTbl' : '',
        'tgtType' : null,
        'tgtTbl' : '',
        'tgtVld' : 'undetermined'
      }
    }
  },
}
</script>
