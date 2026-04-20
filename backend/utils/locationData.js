// Location hierarchy data - Country, State, District, Village
const locationData = {
  'India': {
    'Andhra Pradesh': {
      'Visakhapatnam': ['Visakhapatnam City', 'Gajapati', 'Anakapalle', 'Vizianagaram'],
      'Krishna': ['Vijayawada', 'Nuzvid', 'Machilipatnam', 'Avanigadda'],
      'Guntur': ['Guntur', 'Tenali', 'Bapatla', 'Narasaraopet']
    },
    'Telangana': {
      'Hyderabad': ['Hyderabad', 'Secunderabad', 'Miyapur', 'Kukatpally'],
      'Rangareddy': ['Rangareddy', 'Tandur', 'Vikarabad', 'Tandur'],
      'Medchal': ['Medchal', 'Mominpet', 'Toopran']
    },
    'Karnataka': {
      'Bangalore': ['Bangalore Urban', 'Bangalore Rural', 'Anekal', 'Devanahalli'],
      'Mysore': ['Mysore', 'Chamarajanagar', 'Hunsur', 'Periyapatna'],
      'Tumkur': ['Tumkur', 'Kunigal', 'Koratagere']
    },
    'Tamil Nadu': {
      'Chennai': ['Chennai', 'Chengalpattu', 'Kanchipuram', 'Tiruvallur'],
      'Coimbatore': ['Coimbatore', 'Pollachi', 'Mettupalayam'],
      'Madurai': ['Madurai', 'Usilampatti', 'Melur']
    },
    'Maharashtra': {
      'Mumbai': ['Mumbai', 'Thane', 'Navi Mumbai', 'Panvel'],
      'Pune': ['Pune', 'Pimpri-Chinchwad', 'Lonavala', 'Khed'],
      'Nashik': ['Nashik', 'Sinnar', 'Trimbakeshwar']
    }
  }
};

module.exports = locationData;