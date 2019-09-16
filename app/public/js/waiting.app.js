var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {

    },
    patients: []

      methods: {
        fetchPatients() {
          fetch('https:randomuser.me/api/')
          .then(response => response.json())
          .then(json => {waitingApp.patients = json});
              //don't forget to include the .results[0] - need to find the right person for what you're trying to do

          ;

        }
      },
      created: function() {
          this.fetchPatients();
      }
    ]
