<template>
  <div>
    <h5>source data</h5>
    <div id="source_data">
      <b-form-select v-model="project.srcType" :options="srcTypeOptions" class="mb-3" />

      <div v-if="project.srcType === 'new'">
        <b-alert show variant="warning">
          Send a note to matt (devinem4@email.chop.edu) to discuss adding a new data source
        </b-alert>
      </div>

      <div v-else-if="project.srcType === 'csv'">
        <b-form-group id="srcCsvPathInputGroup"
                      label="path to csv:" label-for="srcCsvPathInput" description="ex //qlvappw1/etl_archive/hello.csv">
          <b-form-input id="srcCsvPathInput"
                        v-model="project.srcCsvPath" type="text" placeholder="path to csv on shared drive" />
        </b-form-group>
      </div>

      <div v-else-if="project.srcType">
        <b-form-group id="srcDbInputGroup"
                      label="source database:" label-for="srcDbInput">
          <b-form-input id="srcDbInput"
                        v-model="project.srcDb" type="text" />
        </b-form-group>
        <b-form-group id="srcTblInputGroup"
                      label="source table:" label-for="srcTblInput">
          <b-form-input id="srcTblInput"
                        v-model="project.srcTbl" type="text" />
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Source',
  props: [ 'project' ],
  data () {
    return {
      srcTypeOptions : {
        'csv' : 'static csv file',
        'sensis' : 'sensis',
        'new' : 'request a new source'
      },
    }
  }
}
</script>
