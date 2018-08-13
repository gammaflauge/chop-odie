<template>
  <div>
    <h5>project metadata</h5>
    <b-form-group id="projectNameInputGroup"
                  label="project name:" label-for="projectNameInput">
      <b-form-input id="projectNameInput"
                    v-model="project.projectName" type="text" />
    </b-form-group>
    <b-form-group id="domainInputGroup"
                  label="domain:" label-for="domainInput">
      <b-form-input id="domainInput"
                    v-model="project.domain" type="text" />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'Metadata',
  props: [ 'project' ],
}
</script>
