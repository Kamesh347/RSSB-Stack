function showSection() {
    const type = document.getElementById('satsangType').value;

    // Hide all sections first
    document.getElementById('sectionKarta').classList.add('hidden');
    document.getElementById('sectionReader').classList.add('hidden');
    document.getElementById('sectionAudioPunjabi').classList.add('hidden');
    document.getElementById('sectionAudioHindi').classList.add('hidden');
    document.getElementById('sectionVideo').classList.add('hidden');

    // Show relevant section based on selected type
    if (type === 'Satsang Karta') {
        document.getElementById('sectionKarta').classList.remove('hidden');
    } else if (type === 'Satsang Reader') {
        document.getElementById('sectionReader').classList.remove('hidden');
    } else if (type === 'Audio CD Punjabi') {
        document.getElementById('sectionAudioPunjabi').classList.remove('hidden');
    } else if (type === 'Audio CD Hindi') {
        document.getElementById('sectionAudioHindi').classList.remove('hidden');
    } else if (type === 'Video CD') {
        document.getElementById('sectionVideo').classList.remove('hidden');
    }
}
function getdata(){

    var  fullName = document.getElementById('fullName').value;

    var satsangDate = document.getElementById('satsangDate').value;

    var satsangPlace = document.getElementById('satsangPlace').value;

    var sangatMale = document.getElementById('sangatMale').value;

    var sangatFemale = document.getElementById('sangatFemale').value;

    var totalSangatMaleFemale = sangatMale + sangatFemale ;

    var children = document.getElementById('children').value;

    var totalSangatMaleFemaleChildren =sangatMale + sangatFemale + children;

    var cycle = document.getElementById('cycle').value;

    var twoWheeler = document.getElementById('twoWheeler').value;

    var fourWheeler = document.getElementById('fourWheeler').value;

    var otherWheeler = document.getElementById('otherWheeler').value;

    var sewadarMale = document.getElementById('sewadarMale').value;

    var sewadarFemale = document.getElementById('sewadarFemale').value;

    var totalSewadarMaleFemale =sewadarMale + sewadarFemale;

    var remarkSuggestion = document.getElementById('remarkSuggestion').value;

    const type = document.getElementById('satsangType').value;

    // Show relevant section based on selected type
    if (type === 'Satsang Karta') {
        document.getElementById('sectionKarta').classList.remove('hidden');
        var shabadKarta = document.getElementById('shabadKarta').value;
        var nameKarta = document.getElementById('nameKarta').value;
        var namePathiKarta = document.getElementById('namePathiKarta').value;
    } else if (type === 'Satsang Reader') {
        document.getElementById('sectionReader').classList.remove('hidden');
        var shabadReader = document.getElementById('shabadReader').value;
        var nameReader = document.getElementById('nameReader').value;
        var namePathiReader = document.getElementById('namePathiReader').value;
    } else if (type === 'Audio CD Punjabi') {
        document.getElementById('sectionAudioPunjabi').classList.remove('hidden');
        var shabadPunjabi = document.getElementById('shabadPunjabi').value;
    } else if (type === 'Audio CD Hindi') {
        document.getElementById('sectionAudioHindi').classList.remove('hidden');
        var shabadHindi = document.getElementById('shabadHindi').value;
    } else if (type === 'Video CD') {
        document.getElementById('sectionVideo').classList.remove('hidden');
        var shabadVideo = document.getElementById('shabadVideo').value;
    }
}

// Prepare the data to send
const formData = {
    fullName,
    satsangDate,
    satsangPlace,
    sangatMale,
    sangatFemale,
    totalSangatMaleFemale,
    children,
    totalSangatMaleFemaleChildren,
    cycle,
    twoWheeler,
    fourWheeler,
    otherWheeler,
    sewadarMale,
    sewadarFemale,
    totalSewadarMaleFemale,
    remarkSuggestion,
    satsangType: type,
    
};
fetch("http://127.0.0.1:3000/form-submit", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (response.ok) {
        alert("Form data submitted successfully!");
    } else {
        alert("Error submitting the form.");
    }
})
.catch(error => {
    console.error('Error:', error);
    alert("Error submitting the form.");
});
