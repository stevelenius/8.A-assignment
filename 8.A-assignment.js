// 8.A-assignment.js
//
// Collection Part 2
// 

// Record data stored as objects in array
let recordsArray = [
  {
  song: "Rhapsody in Blue",
  artist: "George Gershwin with Paul Whiteman and His Orchestra",
  image: 'https://slenius.studio.mcad.edu/webprog/8.A-assignment/images/RhapsodyGershwin-200x200.png',
  label: "Victor",
  recordNo: "55225",
  year: "1924"
  },
  
  {
  song: "Jazz Me Blues",
  artist: "Bix Beiderbecke and his Gang",
  image: 'https://slenius.studio.mcad.edu/webprog/8.A-assignment/images/JazzMeBeiderbecke-200x200.png',
  label: "Vocalion",
  recordNo: "3042",
  year: "1927"
},
    
  {
  song: "Mood Indigo",
  artist: "Duke Ellington & His Famous Orchestra (vocal by Ivie Anderson)",
  image: 'https://slenius.studio.mcad.edu/webprog/8.A-assignment/images/MoodIndigoEllington-200x200.png',
  label: "Columbia",
  recordNo: "35427",
  year: "1940"
  },
  
  {
  song: "More Than You Know",
  artist: "Billie Holiday",
  image: 'https://slenius.studio.mcad.edu/webprog/8.A-assignment/images/MoreThanYouKnowHoliday-200x200.png',
  label: "Columbia",
  recordNo: "36117",
  year: "1941"
  },
  
  {
  song: "Down For Double",
  artist: "Count Basie and His Orchestra",
  image: 'https://slenius.studio.mcad.edu/webprog/8.A-assignment/images/DownForDoubleBasie-200x200.png',
  label: "Okeh",
  recordNo: "6584",
  year: "1942"
  }  

];

// Vue object uses external array
const vm = new Vue({
  el: "#myRecords",
  data: {
    newRecordsObj: {
      song: '',
      artist: '',
      image: '',
      label: '',
      recordNo: '',
      year: '',
    },
    records: recordsArray
  },
  methods: {
    checkSong: function () {
      console.log(vm.newRecordsObj.song);
      if(vm.newRecordsObj.song === "") {
        alert("No song name given");
      }
    },
    submitHandler: () => {
      vm.checkSong();
      console.log('submitted');
      vm.records = vm.records.concat(vm.newRecordsObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newRecordsObj = {
      song: '',
      artist: '',
      image: '',
      label: '',
      recordNo: '',
      year: '',
      };
    },
    deleteItem: item => {
      vm.records = vm.records.filter(record => {
        return record !== item;
      });
    }
  }
});