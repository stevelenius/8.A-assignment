// 8.A-assignment.js
//
// Collection Part 2
// 

// Record data stored as objects in array
let recordsArray = [
  {
  song: "Rhapsody in Blue",
  artist: "George Gershwin with Paul Whiteman and His Orchestra",
  label: "Victor",
  recordNo: "55225",
  year: "1924",
  uid: "001"
  },
  
  {
  song: "Jazz Me Blues",
  artist: "Bix Beiderbecke and his Gang",
  label: "Vocalion",
  recordNo: "3042",
  year: "1927",
  uid: "002"
},
    
  {
  song: "Mood Indigo",
  artist: "Duke Ellington & His Famous Orchestra (vocal by Ivie Anderson)",
  label: "Columbia",
  recordNo: "35427",
  year: "1940",
  uid: "003"
  },
  
  {
  song: "More Than You Know",
  artist: "Billie Holiday",
  label: "Columbia",
  recordNo: "36117",
  year: "1941",
  uid: "004"
  },
  
  {
  song: "Down For Double",
  artist: "Count Basie and His Orchestra",
  label: "Okeh",
  recordNo: "6584",
  year: "1942",
  uid: "005"
  }  

];

// Vue object uses external array
const vm = new Vue({
  el: "#myRecords",
  data: {
    newRecordsObj: {
      song: '',
      artist: '',
      label: '',
      recordNo: '',
      year: '',
      uid: null
    },
    records: recordsArray
  },
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.records = vm.records.concat(vm.newRecordsObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newRecordsObj = {
      song: '',
      artist: '',
      label: '',
      recordNo: '',
      year: '',
      uid: null
      };
    },
    deleteItem: item => {
      vm.records = vm.records.filter(record => {
        return record !== item;
      });
    }
  }
});