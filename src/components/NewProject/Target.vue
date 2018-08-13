<template>
  <div>
    <h5>target data</h5>
    <div id="target_data">
      <b-form-select v-model="project.tgtType" :options="tgtTypeOptions" class="mb-3" />
      <b-form-group id="tgtTblInputGroup"
                    label="target table:" label-for="tgtTblInput">
        <b-form-input id="tgtTblInput"
                      v-model="project.tgtTbl" type="text" />
      </b-form-group>
      <b-row>
        <b-col cols="3">
          <b-button variant="primary" @click="validateTgtTbl()">validate table</b-button>
        </b-col>
        <b-col>
          <div v-if="validating">
            <div class="hollow-dots-spinner">
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
              <div class="dot"><img id="odie" src="../../assets/odie.svg" class="d-inline-block align-top" width="20" height="30"></div>
            </div>
          </div>
          <div v-else-if="project.tgtVld === 'valid'">
            valid :)
          </div>
          <div v-else-if="project.tgtVld === 'invalid'">
            table not found, does it exist?
            <b-btn v-b-modal.modal1>help with ddl</b-btn>
            <b-modal id="modal1" size="lg" title="DDL" >
              <p class="my-4">Here's a ddl you can use based on your data source...</p>
              <b-card>
                <samp>create table as...</samp>
              </b-card>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Source',
  props: [ 'project' ],
  data () {
    return {
      tgtTypeOptions : {
        null : 'select target system',
        'cdwdev' : 'dev',
        'cdwstg' : 'stage',
        'cdwuat' : 'uat',
        'cdwprd' : 'prod',
      },
      validating : false
    }
  },
  methods: {
    validateTgtTbl() {
      console.log("lets validate")
      this.validating = true;
      setTimeout(() => {
        console.log("validating part 2")
        this.validating = false;
        if (this.project.tgtVld === 'undetermined') {
          this.project.tgtVld = 'valid';
        } else {
          this.project.tgtVld = 'invalid';
        }
      }, 1000)

    }
  }
}
</script>


<style scoped>
.hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 15px;
      width: 150px;
    }

    .hollow-dots-spinner .dot {
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(100ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(100ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(100ms * 3);
    }

    .hollow-dots-spinner .dot:nth-child(4) {
      animation-delay: calc(100ms * 4);
    }

    .hollow-dots-spinner .dot:nth-child(5) {
      animation-delay: calc(100ms * 5);
    }

    .hollow-dots-spinner .dot:nth-child(6) {
      animation-delay: calc(100ms * 6);
    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
</style>
